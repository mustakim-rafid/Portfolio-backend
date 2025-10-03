import { StatusCodes } from "http-status-codes";
import { getEnvs } from "../config/envConfig";
import { prisma } from "../db";
import bcrypt from "bcryptjs";

export const seedAdmin = async () => {
  try {
    const isAdminExists = await prisma.admin.findUnique({
      where: {
        email: getEnvs().ADMIN_EMAIL,
      },
    });

    if (isAdminExists) {
      console.log("Admin already exists")
      return
    }

    const hashedPassword = await bcrypt.hash(getEnvs().ADMIN_PASSWORD, 10);

    const admin = await prisma.admin.create({
      data: {
        name: "Admin",
        email: getEnvs().ADMIN_EMAIL,
        password: hashedPassword,
      },
    });
    if (admin.id) {
      console.log("Admin created successfully")
    }
  } catch (error) {
    console.error("Error while creating admin ", error)
    throw error
  }
};
