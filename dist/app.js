"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const GlobalErrorHandler_1 = require("./middleware/GlobalErrorHandler");
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_route_1 = require("./modules/auth/auth.route");
const blog_route_1 = require("./modules/blog/blog.route");
const about_route_1 = require("./modules/about/about.route");
const admin_route_1 = require("./modules/admin/admin.route");
const cors_1 = __importDefault(require("cors"));
const envConfig_1 = require("./config/envConfig");
const project_route_1 = require("./modules/project/project.route");
const app = (0, express_1.default)();
exports.app = app;
app.use((0, cors_1.default)({
    origin: `${(0, envConfig_1.getEnvs)().FRONTEND_URL}`,
    credentials: true
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use('/api/v1/public', express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
app.get("/", (req, res) => {
    res.send("Working");
});
app.use("/api/v1/auth", auth_route_1.authRouter);
app.use("/api/v1/blog", blog_route_1.blogRouter);
app.use("/api/v1/about", about_route_1.aboutRouter);
app.use("/api/v1/admin", admin_route_1.adminRouter);
app.use("/api/v1/project", project_route_1.projectRouter);
app.use(GlobalErrorHandler_1.globarErrorHandler);
