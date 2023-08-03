-- CreateTable
CREATE TABLE "Codes" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Codes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Codes" ADD CONSTRAINT "Codes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
