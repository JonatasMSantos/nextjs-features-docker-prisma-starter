/*
  Warnings:

  - Added the required column `password` to the `Subscribe` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Subscribe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "city" TEXT,
    "state" TEXT,
    "zipCode" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Subscribe" ("city", "createdAt", "id", "lastName", "name", "state", "updateAt", "zipCode") SELECT "city", "createdAt", "id", "lastName", "name", "state", "updateAt", "zipCode" FROM "Subscribe";
DROP TABLE "Subscribe";
ALTER TABLE "new_Subscribe" RENAME TO "Subscribe";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
