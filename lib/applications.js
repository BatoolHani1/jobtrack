import prisma from "@/lib/prisma";

const PAGE_SIZE = 9;

function buildApplicationsWhere(userId, query) {
  return {
    userId,
    ...(query
      ? {
          OR: [
            { title: { contains: query } },
            { company: { contains: query } },
          ],
        }
      : {}),
  };
}

export async function getApplications(userId, query = "", currentPage = 1) {
  return prisma.application.findMany({
    where: buildApplicationsWhere(userId, query),
    orderBy: { appliedDate: "desc" },
    include: { _count: { select: { interviews: true } } },
    take: PAGE_SIZE,
    skip: (currentPage - 1) * PAGE_SIZE,
  });
}

export async function getApplicationsPageCount(userId, query = "") {
  const count = await prisma.application.count({
    where: buildApplicationsWhere(userId, query),
  });
  return Math.ceil(count / PAGE_SIZE);
}

export async function getApplicationById(id, userId) {
  return prisma.application.findFirst({
    where: { id, userId },
    include: { interviews: { orderBy: { date: "asc" } } },
  });
}
