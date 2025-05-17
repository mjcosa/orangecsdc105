import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
    editUser,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";
import upload from "../middleware/multer.js";

const router = express.Router();

// Read
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

// Update
router.patch("/:id/edit", verifyToken, upload.single("picture"), editUser);
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);



export default router;