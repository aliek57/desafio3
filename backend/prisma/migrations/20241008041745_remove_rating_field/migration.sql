/*
  Warnings:

  - You are about to drop the column `rating` on the `Review` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "servicesRating" INTEGER NOT NULL,
    "locationsRating" INTEGER NOT NULL,
    "amenitiesRating" INTEGER NOT NULL,
    "pricesRating" INTEGER NOT NULL,
    "roomRating" INTEGER NOT NULL,
    "comment" TEXT,
    "isAnonymous" BOOLEAN DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    "tourId" INTEGER NOT NULL,
    CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("firebaseUid") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Review_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("amenitiesRating", "comment", "createdAt", "id", "isAnonymous", "locationsRating", "pricesRating", "roomRating", "servicesRating", "tourId", "userId") SELECT "amenitiesRating", "comment", "createdAt", "id", "isAnonymous", "locationsRating", "pricesRating", "roomRating", "servicesRating", "tourId", "userId" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
