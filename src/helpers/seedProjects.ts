import { Prisma } from "@prisma/client";
import { prisma } from "../db";

const projects: Prisma.ProjectCreateInput[] = [
  {
    title: "Parcel Management Frontend System",
    description: "This is the frontend application for the Parcel Management System. It provides a user-friendly interface for Admins, Senders, and Receivers to register, login, create parcels, track deliveries, and manage user and parcel information with role-based access control.",
    thumbnail: "/public/images/PDSFrontendImg.png",
    features: ["User Authentication", "Role-Based Access", "Parcel Management", "Responsive Design", "Real-Time API Interaction"],
    techStack: ["React", "TypeScript", "React Router", "Redux Toolkit (RTK Query)", "Axios", "Tailwind CSS", "ShadCN UI"],
    liveLink: "https://parcel-management-frontend.vercel.app/",
    repoLink: "https://github.com/mustakim-rafid/parcel-management-frontend",
  },
  {
    title: "Parcel Management Backend System",
    description: "This is a backend system for managing parcel deliveries. It supports multiple user roles (Admin, Sender, Receiver) and enables secure registration, login, parcel creation, tracking, and management with proper role-based access.",
    thumbnail: "/public/images/backendimg.png",
    liveLink: "https://parcel-management-backend.vercel.app",
    repoLink: "https://github.com/mustakim-rafid/parcel-management-backend",
    features: ["Register User", "Role-based Access", "Update User Info", "Create Parcel", "Parcel Status Logs", "Approval Workflow", "Cancel Parcels", "Track Status"],
    techStack: ["TypeScript", "Node.js", "Express.js", "MongoDB with Mongoose", "JWT for authentication", "Bcrypt for password hashing", "Zod for validation"]
  },
];

export const seedProjects = async () => {
  try {
    const existingProjectsCount = await prisma.project.count();

    if (existingProjectsCount > 0) {
      for (const element of projects) {
        const isProjectExists = await prisma.project.findUnique({
          where: {
            title: element.title,
          },
        });

        if (isProjectExists?.id) {
          continue;
        } else {
          await prisma.project.create({
            data: element,
          });
        }
      }
      console.log("Added project if any")
      return;
    }

    const result = await prisma.project.createMany({
      data: projects,
    });

    if (result?.count > 0) {
      console.log("Projects created successfully");
    }
  } catch (error) {
    console.error("Error while seeding projects ", error);
  }
};
