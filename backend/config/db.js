import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();
const {PGHOST,PGDATABASE,PGUSER,PGPASSWORD} = process.env;

//CREATES A SQL CONNECTION USING OUR ENV VARIABLES
export const sql = neon(`postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require&channel_binding=require`);