import React from "react";
import { useState } from "react";

const apiKey =
  "live_yXwSg37DSxwMnLwlG2KaxT5wDQtPW8jk5lTvrQ5rChMn9elMn6KDgHSb1OF5mJyN";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    const files = new FormData();
    files.append("file", selectedFile);
    const response = await fetch("https://api.thedogapi.com/v1/images/upload", {
      method: "POST",
      body: files,
      headers: {
        Accept: "application/json",
        "x-api-key": apiKey,
      },
    });
  };

  return (
    <div>
      <h1>Upload</h1>
      <div className="row container">
        <div className="col-sm-12 my-4">
          <input type="file" onChange={handleUpload} />
        </div>
        <button
          className="btn btn-primary"
          style={{ width: "150px", margin: "10px" }}
          onClick={handleSubmit}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default Upload;
