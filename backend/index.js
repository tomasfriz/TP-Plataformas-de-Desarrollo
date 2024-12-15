import express from "express";
import dotenv from "dotenv";
import indexRouter from "./routes/index.js"
import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json' assert { type: 'json' };;
import cors from 'cors'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
dotenv.config();

dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

indexRouter(app);

app.listen(3000, () => {
  console.log("levantado")
})

export default app;
