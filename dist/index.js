"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const router_1 = __importDefault(require("./routes/router"));
// import MySQL from "./db/db";
const server = new server_1.default(3000);
server.app.use(router_1.default);
// MySQL.instance;
server.start(() => {
    console.log("Servidor corriendo en el puerto 3000");
});
