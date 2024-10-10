import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [files, setFiles] = useState(null);
    const [dogImage, setDogImage] = useState(null);

    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const handleMultipleUpload = async () => {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("files", files[i]);
        }

        await axios.post("http://localhost:8000/save/multiple", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    };

    const getRandomDogImage = async () => {
        const response = await axios.get("https://dog.ceo/api/breeds/image/random");
        setDogImage(response.data.message);
    };

    const uploadDogImage = async () => {
        const response = await axios.get("https://dog.ceo/api/breeds/image/random");
        const dogImageURL = response.data.message;

        const formData = new FormData();
        const imageBlob = await fetch(dogImageURL).then((r) => r.blob());
        formData.append("file", new File([imageBlob], "dog.jpg"));

        await axios.post("http://localhost:8000/save/single", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    };

    return (
        <div className="container">
            <h1>Dog Image Upload</h1>
            <input type="file" multiple onChange={handleFileChange} />
            <button className="button" onClick={handleMultipleUpload}>Upload Multiple Images</button>

            <button className="button" onClick={getRandomDogImage}>Get Random Dog Image</button>
            <div className="images">
                {dogImage && <img src={dogImage} alt="Random Dog" style={{ width: '300px', height: '300px' }} />}
            </div>

            <button className="button" onClick={uploadDogImage}>Upload Random Dog Image</button>
        </div>
    );
}

export default App;
