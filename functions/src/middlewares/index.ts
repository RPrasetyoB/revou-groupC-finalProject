import { Express } from "express";
import { xRequestId } from "./xRequest-id";
import helmetApp from "./helmetApp";

const middleWares = (app: Express)=> {
    helmetApp(app);
    app.use(xRequestId)
}

export default middleWares