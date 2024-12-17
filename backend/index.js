import express from "express";
import dotenv from "dotenv";
import indexRouter from "./routes/index.js"
import admin from 'firebase-admin';
import fs from 'fs/promises';
const serviceAccountKey = JSON.parse(await fs.readFile('./serviceAccountKey.json', 'utf8'));
import cors from 'cors'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

const app = express();
dotenv.config();

dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

indexRouter(app);

app.listen(3002, () => {
  console.log("levantado")
})

export default app;
