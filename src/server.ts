import dotenv from "dotenv";
import { startServerOnPort } from "./app";

dotenv.config();

startServerOnPort(Number(process.env.PORT) || 5000);
