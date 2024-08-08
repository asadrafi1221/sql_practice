import express , {Router} from "express";
import isupdated from "../controllers/updateuser.js";

const route = Router();
route.patch('/updateuser',isupdated);

export default route;