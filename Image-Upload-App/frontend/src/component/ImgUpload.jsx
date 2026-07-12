import { useState } from "react";
import axios from "axios";

function ImageUpload() {

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploadedImage, setUploadedImage] = useState("");

    const handleChange = (e) => {

        const file = e.target.files[0];

        setImage(file);

        setPreview(URL.createObjectURL(file));

    };

    const handleUpload = async () => {

        const formData = new FormData();

        formData.append("image", image);

        try {

            const res = await axios.post(
                "http://localhost:5000/api/upload",
                formData
            );

            setUploadedImage(
                "http://localhost:5000" + res.data.imageUrl
            );

            alert("Upload Successful");

        } catch (err) {
            console.log(err);
        }

    };

    return (
        <div style={{ padding: "20px" }}>

            <h2>Image Upload</h2>

            <input
                type="file"
                accept="image/*"
                onChange={handleChange}
            />

            <br /><br />

            {preview && (
                <>
                    <h3>Preview</h3>

                    <img
                        src={preview}
                        width="250"
                        alt="preview"
                    />

                    <br /><br />
                </>
            )}

            <button onClick={handleUpload}>
                Upload
            </button>

            <br /><br />

            {uploadedImage && (
                <>
                    <h3>Uploaded Image</h3>

                    <img
                        src={uploadedImage}
                        width="250"
                        alt="uploaded"
                    />
                </>
            )}

        </div>
    );
}

export default ImageUpload;
