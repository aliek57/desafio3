/*
  Warnings:

  - You are about to drop the `UserFavorites` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Movies` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UserFavorites";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "release_year" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date_of_include" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Movies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Movies" ("category", "date_of_include", "director", "duration", "id", "release_year", "title", "updated_at") SELECT "category", "date_of_include", "director", "duration", "id", "release_year", "title", "updated_at" FROM "Movies";
DROP TABLE "Movies";
ALTER TABLE "new_Movies" RENAME TO "Movies";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
