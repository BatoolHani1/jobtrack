const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const apps = await prisma.application.findMany();
  console.log("all applications:", apps.length);
  console.log(apps);

  const withInterviews = await prisma.application.findMany({
    include: { interviews: true },
  });
  console.log("\nwith interviews:");
  console.log(JSON.stringify(withInterviews, null, 2));

  const interviewing = await prisma.application.findMany({
    where: { status: "Interview" },
    select: { company: true, title: true, appliedDate: true },
    orderBy: { appliedDate: "asc" },
  });
  console.log("\ncurrently interviewing:", interviewing);

  const user = await prisma.user.findFirst();

  const temp = await prisma.application.create({
    data: {
      title: "Test Application",
      company: "Test Co",
      appliedDate: new Date(),
      userId: user.id,
    },
  });
  console.log("\ncreated:", temp.id, "| status defaulted to:", temp.status);

  await prisma.application.delete({ where: { id: temp.id } });
  console.log("deleted it again");

  const byStatus = await prisma.application.groupBy({
    by: ["status"],
    _count: { status: true },
  });
  console.log("\nby status:", byStatus);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
