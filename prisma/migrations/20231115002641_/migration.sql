/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Purchase` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserTokens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoryToProduct` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Purchase` DROP FOREIGN KEY `Purchase_productId_fkey`;

-- DropForeignKey
ALTER TABLE `Purchase` DROP FOREIGN KEY `Purchase_userId_fkey`;

-- DropForeignKey
ALTER TABLE `UserTokens` DROP FOREIGN KEY `UserTokens_userId_fkey`;

-- DropForeignKey
ALTER TABLE `_CategoryToProduct` DROP FOREIGN KEY `_CategoryToProduct_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CategoryToProduct` DROP FOREIGN KEY `_CategoryToProduct_B_fkey`;

-- AlterTable
ALTER TABLE `Category` DROP PRIMARY KEY,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `address`,
    DROP COLUMN `role`,
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ALTER COLUMN `updatedAt` DROP DEFAULT,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `Product`;

-- DropTable
DROP TABLE `Purchase`;

-- DropTable
DROP TABLE `UserTokens`;

-- DropTable
DROP TABLE `_CategoryToProduct`;

-- CreateTable
CREATE TABLE `File` (
    `id` VARCHAR(191) NOT NULL,
    `fileName` VARCHAR(191) NOT NULL,
    `contentLength` INTEGER NOT NULL,
    `contentType` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
