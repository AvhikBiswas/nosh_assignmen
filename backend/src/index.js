import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import apiRoutes from "./Routes/index.js";
import DBconnect from "./Config/db.js";

const app = express();
const server = http.createServer(app);

let io;

const initializeSocketIO = () => {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });

    socket.on("message", (data) => {
      console.log("Message received:", data);
      // Handle messages here
    });
  });
};

const startServer = async () => {
  app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("I'm alive");
  });

  app.use("/api", apiRoutes);

  await DBconnect();

  initializeSocketIO();

  const PORT = process.env.PORT || 8000;
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

export {io};

startServer();
