import prisma from "@/lib/prisma";

export async function getApplications() {
  return prisma.application.findMany({
    orderBy: { appliedDate: "desc" },
    include: { _count: { select: { interviews: true } } },
  });
}

export async function getApplicationById(id) {
  return prisma.application.findUnique({
    where: { id },
    include: { interviews: { orderBy: { date: "asc" } } },
  });
}
