import express from "express";
import passport from "passport";
import multer from "multer";

// Database modal
import { ImageModel } from "../../database/AllModels";
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

//Multer Config
const storage = multer.memoryStorage();
const upload = multer({ storage });
Router.get("/:_id", async(req, res) =>{
    try {
        const image = await ImageModel.findById(req.params._id);
        return res.json({ image });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route     /image
Des       upload given image to s3 bucket and saves file link to mongodb
Params    none
Access    Params
Method    GET  
*/
Router.post("/", upload.single("file"), async (req, res) => {
    try {
        //Upload to S3
        const file = req.file;
        const bucketOptions = {
            Bucket: "foodymaster",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read",
        };



        const uploadImage = await s3Upload(bucketOptions);

        return res.status(200).json({ uploadImage });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;