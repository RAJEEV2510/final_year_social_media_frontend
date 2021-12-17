import React, { useState, useEffect } from "react";
import "react-awesome-slider/dist/styles.css";
import Loader from "react-loader-spinner";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./shorts.css";
function Video() {
  const [image, setImage] = useState();
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(false);

  //notification
  const notify = (value) => toast(value);

  const postDetails = async () => {
    setLoading(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "Leechi");
    data.append("cloud_name", "rajeev");

    const url = await fetch("https://api.cloudinary.com/v1_1/rajeev/upload/", {
      method: "post",
      body: data,
    });
    const urlData = await url.json();
    setLoading(false);
    console.log(urlData);
    notify("success fully uploaded");

    //upload data to the server
    const user=JSON.parse(localStorage.getItem("userData2"))
  
    let videoData={
      url:urlData.url,
      postedBy:user.username
  }

  console.log(videoData)
    fetch(`http://localhost:5000/video`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify(videoData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      {loading ? (
        <div style={{ display: "flex", justifyItems: "center" }}>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      ) : (
        <div
          style={{
            margin: "100px auto",
            height: "70%",
            maxWidth: "500px",
            padding: "20px",
            border: "1px solid blue",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ color: "white", textAlign: "center" }}>
            {" "}
            Upload Your Video
          </h1>

          <div className="file-field input-field" style={{ padding: "20px" }}>
            <div className="btn">
              <input
                type="file"
                placeholder="upload image"
                accept="video/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <button
              className=" waves-light #004d40 blue "
              onClick={postDetails}
            >
              Submit Post
            </button>
          </div>

          <ToastContainer></ToastContainer>
        </div>
      )}
    </>
  );
}

export default Video;
