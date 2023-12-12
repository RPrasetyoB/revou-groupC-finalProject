import { Express } from "express";
import { xRequestId } from "./xRequest-id";
import helmetApp from "./helmetApp";
import { googleMiddleware } from "./googleMiddleware";

const middleWares = (app: Express)=> {
    helmetApp(app);
    app.use(xRequestId)
    googleMiddleware(app)
}

export default middleWares