"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { z } from "zod";
import { signIn } from "@/auth";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export async function signup(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const result = schema.safeParse({ name, email, password });

  if (!result.success) {
    return { errors: z.flattenError(result.error).fieldErrors };
  }

  const passwordHash = await bcrypt.hash(result.data.password, 10);

  try {
    await prisma.user.create({
      data: {
        name: result.data.name,
        email: result.data.email,
        password: passwordHash,
      },
    });
  } catch (error) {
    if (error.code === "P2002") {
      return { errors: { email: ["An account with this email already exists"] } };
    }
    throw error;
  }

  await signIn("credentials", {
    email: result.data.email,
    password: result.data.password,
    redirectTo: "/dashboard",
  });
}
