import checkinguser from "../controllers/login.js";
import express, { Router } from "express";

const route = Router();
route.post('/login', checkinguser);

export default route;