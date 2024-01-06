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
// app.use(cors())
app.use(cors(corsOptions));
scheduleStart();
app.use(routes);
app.use(errorHandler);

app.listen(server_port, () => {
  console.log(`server listening at http://localhost:${server_port}`);
});

export const grupc_project = functions.https.onRequest(app);
