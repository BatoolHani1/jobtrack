"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { z } from "zod";
import { signIn } from "@/auth";
import { signupSchema } from "@/lib/validation";

export async function signup(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const result = signupSchema.safeParse({ name, email, password });

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
