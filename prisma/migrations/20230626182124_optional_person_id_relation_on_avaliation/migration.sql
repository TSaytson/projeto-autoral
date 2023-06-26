-- DropForeignKey
ALTER TABLE "Avaliation" DROP CONSTRAINT "Avaliation_personId_fkey";

-- AlterTable
ALTER TABLE "Avaliation" ALTER COLUMN "personId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Avaliation" ADD CONSTRAINT "Avaliation_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;
