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
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use('/public', express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
app.get("/", (req, res) => {
    res.send("Working");
});
app.use("/api/v1/auth", auth_route_1.authRouter);
app.use("/api/v1/blog", blog_route_1.blogRouter);
app.use(GlobalErrorHandler_1.globarErrorHandler);
