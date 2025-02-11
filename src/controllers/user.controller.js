import { asyncHandler } from "../utils/asyncHandler";

const registerUser = asyncHandler(async (req, res) => {
    // Get user details from frontend (check user.model.js)
    // Validation (email is in correct form, all boxes are not empty, etc)
    // Check if user already exists (check if email/username is unique)
    // Check for images, check for avatar
    // Upload them on cloudinary
    // Create user object - create entry in db
    // Remove password and refresh token field from response (for security purpose)
    // Check for user creation (if user is created succesfully)
    // Return res i.e return response

    const {fullName, email, userName, password} = req.body
    console.log("email: ", email)
});

export { registerUser };
