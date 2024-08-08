import createuser from "../controllers/createuser.js";
import express , {Router} from "express";
const route = Router();

route.post('/signin',createuser);

export default route;
