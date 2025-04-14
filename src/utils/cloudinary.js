import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null
        //Uploading the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto" //allows Cloudinary to automatically detect the file type(image, video)
        })
        //file has been uploaded successfully
        console.log("file has been uploaded on cloudinary", response.url);
        return response;
    } catch(error){
        fs.unlinkSync(localFilePath) //Remove the locally saved temporary file as the uploading onto cloudinary failed
        return null;
    }
}

export {uploadOnCloudinary}