import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";

// Created Express App and http server
const app = express();
const server = http.createServer(app);


