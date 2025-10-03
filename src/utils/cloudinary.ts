import { v2 as cloudinary } from "cloudinary";
import { getEnvs } from "../config/envConfig";
import { AppError } from "./AppError";
import { StatusCodes } from "http-status-codes";
import fs from "fs"

cloudinary.config({
  cloud_name: getEnvs().CLOUDINARY.CLOUDINARY_CLOUD_NAME,
  api_key: getEnvs().CLOUDINARY.CLOUDINARY_API_KEY,
  api_secret: getEnvs().CLOUDINARY.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (localFilePath: string) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    if (!uploadResult?.url) {
      throw new AppError(StatusCodes.NOT_FOUND, "Cloudinary url is missing");
    }

    fs.unlinkSync(localFilePath)
    return uploadResult
  } catch (error) {
    fs.unlinkSync(localFilePath)
    console.error("Error while uploading on cloudinary ", error);
  }
};
