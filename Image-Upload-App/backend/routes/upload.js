import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(path.resolve(), "uploads"));
    },

    filename: (req, file, cb) => {
        const uniqueName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueName);
    }
});

const fileFilter = (req, file, cb) => {

    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed"));
    }

};

const upload = multer({
    storage,
    fileFilter
});

router.post("/", upload.single("image"), (req, res) => {

    res.json({
        message: "Image uploaded successfully",
        imageUrl: `/uploads/${req.file.filename}`
    });

});

export default router;
