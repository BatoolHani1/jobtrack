import prisma from "@/lib/prisma";
import { APPLICATION_STATUSES } from "@/lib/statuses";

const PAGE_SIZE = 9;

function buildApplicationsWhere(userId, query, status = "") {
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
    ...(status ? { status } : {}),
  };
}

export async function getApplications(userId, query = "", status = "", currentPage = 1) {
  return prisma.application.findMany({
    where: buildApplicationsWhere(userId, query, status),
    orderBy: { appliedDate: "desc" },
    include: { _count: { select: { interviews: true } } },
    take: PAGE_SIZE,
    skip: (currentPage - 1) * PAGE_SIZE,
  });
}

export async function getApplicationsPageCount(userId, query = "", status = "") {
  const count = await prisma.application.count({
    where: buildApplicationsWhere(userId, query, status),
  });
  return Math.ceil(count / PAGE_SIZE);
}

export async function getApplicationById(id, userId) {
  return prisma.application.findFirst({
    where: { id, userId },
    include: { interviews: { orderBy: { date: "asc" } } },
  });
}

export async function getApplicationStatusCounts(userId) {
  const counts = await prisma.application.groupBy({
    by: ["status"],
    where: { userId },
    _count: true,
  });

  return APPLICATION_STATUSES.reduce((acc, status) => {
    const match = counts.find((count) => count.status === status);
    acc[status] = match ? match._count : 0;
    return acc;
  }, {});
}

export async function getRecentApplications(userId) {
  return prisma.application.findMany({
    where: { userId },
    orderBy: { appliedDate: "desc" },
    take: 5,
    select: {
      id: true,
      title: true,
      company: true,
      status: true,
      appliedDate: true,
    },
  });
}
