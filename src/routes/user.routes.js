import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import multer from "multer";
import { upload } from "../middlewares/multer.middleware.js"


const router = Router();
// const upload = multer(); 
router.route("/register").post(upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)

export default router;


