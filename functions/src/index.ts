import express from "express";
import "dotenv/config";
import { db } from "./config/db/dbConnection";
import middleWares from "./middlewares";
import errorHandler from "./middlewares/errorHandler";
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import mainRoutes from "./routes/mainRoutes";
import routes from "./routes/index";
import { scheduleStart } from "./services/schedulerService";
import { corsOptions } from "./middlewares/corsMiddleware";
import cors from "cors";

const app = express();
const server_port = process.env.SERVER_PORT || 3000;

admin.initializeApp();

app.use(mainRoutes);
db();
app.use(express.json());
middleWares(app);
app.use(cors(corsOptions));
scheduleStart();
app.use(routes);
app.use(errorHandler);

app.listen(server_port, () => {
  console.log(`server listening at http://localhost:${server_port}`);
});

export const grupc_project = functions.https.onRequest(async (req, res) => {
  try {
    const allowedOrigins = [
      "http://localhost:5173",
      "https://helena-health-tracker.web.app",
    ];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin!)) {
      res.header("Access-Control-Allow-Origin", origin);
    }
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Credentials", "true");
    res.status(200).send("Allowed by cors");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});
