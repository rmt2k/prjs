import express from "express";
import {getAll, getById, store} from "../controllers/UserController.js";

const router = express.Router();
router.get('/user', getAll);
router.get('/user/:id', getById);
router.post('/user', store)

export default router;