import { prisma } from "../src/config/database";

async function main() {
  await prisma.person.createMany({
    data: [
      {
        name: 'Fulano da Silva',
        description: 'Algum primeiro lorem ipsum'
      },
      {
        name: 'Beltrano dos Santos',
        description: 'Algum segundo lorem ipsum'
      }
    ]
  })
}

main().
  then(() => {
    console.log('Records inserted');
  }).
  catch((error) => {
    console.log(error);
    process.exit(1);
  }).
  finally(async () => {
    await prisma.$disconnect();
  })