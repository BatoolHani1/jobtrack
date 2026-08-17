import prisma from "@/lib/prisma";

export async function getApplications(userId, query = "") {
  return prisma.application.findMany({
    where: {
      userId,
      ...(query
        ? {
            OR: [
              { title: { contains: query } },
              { company: { contains: query } },
            ],
          }
        : {}),
    },
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
