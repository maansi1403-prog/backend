import express from "express";
import { addUser, getAllUsers, loginUser } from "./controller/usercontroller.js";


const router = express.Router();

router.get("/" , getAllUsers);
router.post("/add", addUser);

router.post("/login", loginUser)



export default router;