const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.interview.deleteMany();
  await prisma.application.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: "batool@example.com",
      name: "Batool",
      applications: {
        create: [
          {
            title: "SDE Intern 2026",
            company: "Amazon",
            status: "Interview",
            appliedDate: new Date("2026-05-06"),
            notes:
              "Applied through the university career portal. OA completed the same week.",
            link: "https://www.amazon.jobs/en/jobs/sde-intern-2026",
            interviews: {
              create: [
                { date: new Date("2026-05-21"), type: "Technical" },
                { date: new Date("2026-05-28"), type: "Phone screen" },
              ],
            },
          },
          {
            title: "Software Engineering Intern",
            company: "Tamatem Games",
            status: "Offer",
            appliedDate: new Date("2026-05-14"),
            notes:
              "Referred by a classmate who interned there last summer. Verbal offer received.",
            link: "https://tamatemgames.com/careers",
            interviews: {
              create: [
                { date: new Date("2026-05-26"), type: "HR screen" },
                { date: new Date("2026-06-04"), type: "Technical" },
              ],
            },
          },
          {
            title: "Junior Software Engineer",
            company: "Devoteam",
            status: "Rejected",
            appliedDate: new Date("2026-05-22"),
            notes:
              "Rejected after the first screen — they wanted two years of experience.",
            interviews: {
              create: [{ date: new Date("2026-06-02"), type: "HR screen" }],
            },
          },
          {
            title: "Technology Consulting Intern",
            company: "PwC",
            status: "Interview",
            appliedDate: new Date("2026-06-09"),
            link: "https://www.pwc.com/m1/en/careers.html",
            interviews: {
              create: [
                { date: new Date("2026-07-01"), type: "Case interview" },
              ],
            },
          },
          {
            title: "Full-stack Developer Intern",
            company: "Sphereka",
            status: "Applied",
            appliedDate: new Date("2026-06-24"),
            notes: "Small startup, applied by email directly to the CTO.",
          },
          {
            title: "Field Training — SDE",
            company: "FiberTech Jo",
            status: "Offer",
            appliedDate: new Date("2026-05-02"),
            notes: "Accepted. Six-week field training placement.",
            interviews: {
              create: [{ date: new Date("2026-05-11"), type: "Final round" }],
            },
          },
          {
            title: "Backend Intern",
            company: "Estarta Solutions",
            status: "Applied",
            appliedDate: new Date("2026-07-08"),
          },
        ],
      },
    },
  });

  const applicationCount = await prisma.application.count();
  const interviewCount = await prisma.interview.count();

  console.log(`Seeded user: ${user.email}`);
  console.log(`Applications: ${applicationCount}`);
  console.log(`Interviews: ${interviewCount}`);
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
