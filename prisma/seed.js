const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  await prisma.interview.deleteMany();
  await prisma.application.deleteMany();
  await prisma.user.deleteMany();

  const passwordHash = await bcrypt.hash("password123", 10);

  const user = await prisma.user.create({
    data: {
      email: "batool@example.com",
      password: passwordHash,
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
              "Rejected after the first screen, they wanted two years of experience.",
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
            title: "Field Training, SDE",
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
          {
            title: "Software Engineer",
            company: "Aramex",
            status: "Applied",
            appliedDate: new Date("2026-04-03"),
          },
          {
            title: "Data Analyst",
            company: "Aramex",
            status: "Interview",
            appliedDate: new Date("2026-04-18"),
            interviews: {
              create: [{ date: new Date("2026-05-02"), type: "Technical" }],
            },
          },
          {
            title: "IT Support Specialist",
            company: "Aramex",
            status: "Rejected",
            appliedDate: new Date("2026-05-03"),
          },
          {
            title: "Network Engineer",
            company: "Orange Jordan",
            status: "Applied",
            appliedDate: new Date("2026-04-10"),
          },
          {
            title: "Business Analyst",
            company: "Orange Jordan",
            status: "Rejected",
            appliedDate: new Date("2026-06-15"),
          },
          {
            title: "Marketing Technology Intern",
            company: "Integrated Technology Group",
            status: "Applied",
            appliedDate: new Date("2026-04-22"),
            notes: "Applied via LinkedIn, waiting to hear back.",
          },
          {
            title: "Software Developer",
            company: "Bridge Technology Group",
            status: "Interview",
            appliedDate: new Date("2026-05-18"),
            interviews: {
              create: [
                { date: new Date("2026-06-01"), type: "HR screen" },
                { date: new Date("2026-06-10"), type: "Technical" },
              ],
            },
          },
          {
            title: "Backend Developer",
            company: "PayTabs",
            status: "Applied",
            appliedDate: new Date("2026-04-28"),
          },
          {
            title: "Mobile Developer",
            company: "Talabat",
            status: "Applied",
            appliedDate: new Date("2026-05-08"),
          },
          {
            title: "iOS Developer",
            company: "Souktel",
            status: "Interview",
            appliedDate: new Date("2026-06-02"),
            link: "https://www.souktel.org/careers",
          },
          {
            title: "Network Operations Intern",
            company: "Umniah",
            status: "Applied",
            appliedDate: new Date("2026-05-25"),
          },
          {
            title: "Machine Learning Intern",
            company: "Mawdoo3",
            status: "Applied",
            appliedDate: new Date("2026-07-02"),
            notes: "Local Amman based company, focus on Arabic NLP tools.",
          },
          {
            title: "Warehouse Systems Intern",
            company: "Jamalon",
            status: "Rejected",
            appliedDate: new Date("2026-06-20"),
          },
          {
            title: "Payments Engineer",
            company: "eFawateercom",
            status: "Applied",
            appliedDate: new Date("2026-07-14"),
          },
          {
            title: "Frontend Developer",
            company: "Foodics",
            status: "Rejected",
            appliedDate: new Date("2026-06-28"),
            notes: "Rejected quickly, they wanted more React experience.",
          },
          {
            title: "Data Engineer Intern",
            company: "Careem",
            status: "Applied",
            appliedDate: new Date("2026-07-20"),
            link: "https://www.careem.com/careers",
          },
          {
            title: "Cloud Support Associate",
            company: "Microsoft",
            status: "Interview",
            appliedDate: new Date("2026-08-01"),
            link: "https://careers.microsoft.com",
            interviews: {
              create: [{ date: new Date("2026-08-10"), type: "Phone screen" }],
            },
          },
          {
            title: "Risk Advisory Intern",
            company: "Deloitte",
            status: "Rejected",
            appliedDate: new Date("2026-08-08"),
            notes: "Panel interview only, no technical round this time.",
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
