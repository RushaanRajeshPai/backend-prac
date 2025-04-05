// import { asyncHandler } from "../utils/asyncHandler";
// import {ApiError} from "../utils/ApiError.js"
// import {User} from '../models/user.model.js'
// import { uploadOnCloudinary } from "../utils/cloudinary.js";
// import { ApiResponse } from "../utils/ApiResponse.js";

// const registerUser = asyncHandler(async (req, res) => {
//     // 1. Get user details from frontend (check user.model.js)
//     // 2. Validation (email is in correct form, all boxes are not empty, etc)
//     // 3. Check if user already exists (check if email/username is unique)
//     // 4. Check for images, check for avatar
//     // 5. Upload them on cloudinary
//     // 6. Create user object - create entry in db
//     // 7. Remove password and refresh token field from response (for security purpose)
//     // 8. Check for user creation (if user is created succesfully)
//     // 9. Return res i.e return response

//     // 1.
//     const {fullName, email, userName, password} = req.body
//     console.log("email: ", email)

//     // 2.
//     if(
//         [fullName,email,password,userName].some((field) => field?.trim() === "")
//     ){
//         throw new ApiError(400, "All field are required")
//     }

//     // 3.
//     const existedUser = User.findOne({
//         $or: [{userName}, {email}]
//     })
//     if(existedUser){
//         throw new ApiError(409,"User with same username or email exists")
//     }

//     // 4.
//     const avatarLocalPath = req.files?.avatar[0]?.path;
//     const coverImageLocalPath = req.files?.coverImage[0]?.path;
//     // req.files → This refers to files uploaded via a form submission (multer)
//     // ?. → Ensures that if req.files or req.files.avatar is null, then no error displayed
//     // avatar[0] → Assumes that avatar is an array from which multiple files are accessed
//     // .path → Refers to the local file path where the uploaded file is stored
//     if(!avatarLocalPath){
//         throw new ApiError(400, "Avatar file is required")
//     } // This happens before uploading the file to Cloudinary, ensures that file was uploaded by user.

//     // 5.
//     const avatar = await uploadOnCloudinary(avatarLocalPath)
//     const coverImage = await uploadOnCloudinary(coverImageLocalPath)
//     // we could use await here because we made use of async at the start
//     // The asynchronous function returns a Promise because the upload process takes time, await ensures we wait for the Promise to be resolved before moving to the next line.
//     if(!avatar){
//         throw new ApiError(400, "Avatar file is required")
//     } // This happens after uploading the file to Cloudinary, ensures file was successfully uploaded to the cloud. 

//     // 6.
//     const user = await User.create({
//         fullName,
//         avatar : avatar.url,
//         coverImage : coverImage?.url || "", // did this bec we didn't check earlier if coverImage exists
//         email,
//         password,
//         userName: userName.toLowerCase()
//     })

//     // 7.
//     const createdUser = await User.findById(user._id).select("-password -refreshToken")
//     if(!createdUser){
//         throw new ApiError(500, "Something went wrong while registering the user")
//     }

//     return res.status(201).json(
//         new ApiResponse(200, createdUser, "User registered successfully")
//     )
//     // This will return a response like: (check ApiResponse.js file) 
//     // {
//     // "statusCode": 200,
//     // "data": {
//     //     "_id": "65abc123456def",
//     //     "name": "John Doe",
//     //     "email": "john@example.com"
//     // },
//     // "message": "User registered successfully",
//     // "success": true
//     // }


// });

// export { registerUser };


import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import {User} from "../models/user.model.js";
import {uploadOnCloudiary} from '../utils/cloudinary.js';

const registerUser = asyncHandler(async (req, res) => {

    const email = req.body
    console.log(email)

})

export {registerUser};