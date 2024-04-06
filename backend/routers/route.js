import express from "express";
import {createUser, deleteUserById, getAllUsers, getUserById, updateUserById} from "../controller/userController.js";
import { createTeam, getTeamById } from "../controller/teamController.js";

const router = express.Router()


router.post("/users", createUser)
router.get("/users", getAllUsers)
router.get("/users/:id", getUserById)
router.put("/users/:id", updateUserById)
router.delete("/users/:id", deleteUserById)

//------------------------------   Team Routes   ------------------------//


router.post("/team", createTeam)
router.get("/team/:id", getTeamById)


export default router;