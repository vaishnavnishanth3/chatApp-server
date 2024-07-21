import { Server } from "socket.io";
import http from "http";
import express from "express"

const app = express();

const server = http.createServer(app);
const io = new Server(server)

export { app, io, server }