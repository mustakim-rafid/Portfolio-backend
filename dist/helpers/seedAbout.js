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
exports.seedAbout = void 0;
const db_1 = require("../db");
const seedAbout = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const total = yield db_1.prisma.about.count();
        if (total > 0) {
            console.log("About section already created");
            return;
        }
        yield db_1.prisma.about.create({
            data: {
                name: "Mustakim Ali Chowdhury (Rafid)",
                headline: "Full Stack Web Engineer",
                content: "Hi, I’m Mustakim, a passionate Full Stack Web Engineer currently pursuing my Bachelor’s in Computer Science and Engineering at International Islamic University Chittagong, now in my third year.\n\nI specialize in building dynamic, responsive, and user-friendly web applications using technologies like HTML, CSS, JavaScript, Node.js, Express, MongoDB, React, Redux Toolkit (RTK Query), Next.js, PostgreSQL, and Prisma.\n\nI’m constantly learning and striving to improve my skills every single day — whether it’s mastering new tools, optimizing code, or enhancing user experience. Beyond coding, I enjoy working out, playing sports, swimming, and drawing — activities that keep me energized and creative.\n\nI’ve worked on several exciting projects (check out the Projects section) that showcase my ability to design and build full-stack solutions from start to finish. I’m eager to keep growing and contributing to meaningful web experiences.",
            }
        });
        console.log("About section created successfully");
    }
    catch (error) {
        console.error("Error while creating about section ", error);
    }
});
exports.seedAbout = seedAbout;
