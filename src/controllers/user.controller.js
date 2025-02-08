import { asyncHandler } from "../utils/asyncHandler";

const registerUser = asyncHandler(async (req, res) => {
    console.log("Received POST request to /register");  // Debugging log
    return res.status(200).json({
        message: "OK"
    });
});

export { registerUser };
