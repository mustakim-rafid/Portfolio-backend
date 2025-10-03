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
const app_1 = require("./app");
const db_1 = require("./db");
const envConfig_1 = require("./config/envConfig");
const seedAdmin_1 = require("./helpers/seedAdmin");
const seedProjects_1 = require("./helpers/seedProjects");
const seedAbout_1 = require("./helpers/seedAbout");
let server;
const port = (0, envConfig_1.getEnvs)().PORT || 5000;
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, db_1.connectDB)();
        server = app_1.app.listen(port, () => {
            console.log(`Server is running at port ${port}`);
        });
        yield (0, seedAdmin_1.seedAdmin)();
        yield (0, seedAbout_1.seedAbout)();
        yield (0, seedProjects_1.seedProjects)();
    }
    catch (error) {
        console.error("Error while starting the server", error);
        process.exit(1);
    }
});
startServer();
