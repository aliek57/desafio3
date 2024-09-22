/*
  Warnings:

  - You are about to drop the `_UserFavorites` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `email` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_UserFavorites_B_index";

-- DropIndex
DROP INDEX "_UserFavorites_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_UserFavorites";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "UserFavorites" (
    "userId" TEXT NOT NULL,
    "movieId" INTEGER NOT NULL,

    PRIMARY KEY ("userId", "movieId"),
    CONSTRAINT "UserFavorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserFavorites_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "date_of_include" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Users" ("date_of_include", "id", "updated_at") SELECT "date_of_include", "id", "updated_at" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
