import { asyncHandler } from "../utils/asyncHandler";
import {ApiError} from "../utils/ApiError.js"
import {User} from '../models/user.model.js'

const registerUser = asyncHandler(async (req, res) => {
    // 1. Get user details from frontend (check user.model.js)
    // 2. Validation (email is in correct form, all boxes are not empty, etc)
    // 3. Check if user already exists (check if email/username is unique)
    // 4. Check for images, check for avatar
    // 5. Upload them on cloudinary
    // 6. Create user object - create entry in db
    // 7. Remove password and refresh token field from response (for security purpose)
    // 8. Check for user creation (if user is created succesfully)
    // 9. Return res i.e return response

    // 1.
    const {fullName, email, userName, password} = req.body
    console.log("email: ", email)

    // 2.
    if(
        [fullName,email,password,userName].some((field) => field?.trim() === "")
    ){
        throw new ApiError(400, "All field are required")
    }

    // 3.
    const existedUser = User.findOne({
        $or: [{userName}, {email}]
    })
    if(existedUser){
        throw new ApiError(409,"User with same username or email exists")
    }

    // 4.
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;
    // req.files → This refers to files uploaded via a form submission (multer)
    // ?. → Ensures that if req.files or req.files.avatar is null, then no error displayed
    // avatar[0] → Assumes that avatar is an array from which multiple files are accessed
    // .path → Refers to the local file path where the uploaded file is stored

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required")
    }



});

export { registerUser };
