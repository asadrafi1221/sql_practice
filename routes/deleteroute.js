import deleteuser from "../controllers/deleteuser.js";
import express , {Router} from "express";
const route = Router();

route.delete('/deleteuser',deleteuser);

export default route;