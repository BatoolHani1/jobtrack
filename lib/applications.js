import prisma from "@/lib/prisma";

export async function getApplications(userId) {
  return prisma.application.findMany({
    where: { userId },
    orderBy: { appliedDate: "desc" },
    include: { _count: { select: { interviews: true } } },
  });
}

export async function getApplicationById(id, userId) {
  return prisma.application.findFirst({
    where: { id, userId },
    include: { interviews: { orderBy: { date: "asc" } } },
  });
}
