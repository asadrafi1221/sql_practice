import database_data from "../controllers/getdata.js";
import express, { Router } from "express";

const route = Router();
route.get('/getdata', database_data);


export default route;