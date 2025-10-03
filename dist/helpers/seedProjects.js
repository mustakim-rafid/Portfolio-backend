"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedProjects = void 0;
const db_1 = require("../db");
const projects = [
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
const seedProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingProjectsCount = yield db_1.prisma.project.count();
        if (existingProjectsCount > 0) {
            for (const element of projects) {
                const isProjectExists = yield db_1.prisma.project.findUnique({
                    where: {
                        title: element.title,
                    },
                });
                if (isProjectExists === null || isProjectExists === void 0 ? void 0 : isProjectExists.id) {
                    continue;
                }
                else {
                    yield db_1.prisma.project.create({
                        data: element,
                    });
                }
            }
            console.log("Added project if any");
            return;
        }
        const result = yield db_1.prisma.project.createMany({
            data: projects,
        });
        if ((result === null || result === void 0 ? void 0 : result.count) > 0) {
            console.log("Projects created successfully");
        }
    }
    catch (error) {
        console.error("Error while seeding projects ", error);
    }
});
exports.seedProjects = seedProjects;
