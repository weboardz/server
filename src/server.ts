import dotenv from "dotenv";
import { main } from "./app";

dotenv.config();

const port = Number(process.env.PORT) || 5000;

main(port);
