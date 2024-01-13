import React from "react";
import { useState, useEffect } from "react";
import GalleryList from "../GalleryList/GalleryList";
import axios from "axios";

function App() {
  // need GET fn to get gallery list and setGalleryList
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    handleGet();
  }, []);

  const handleGet = () => {
    console.log("In handleGet()");

    axios
      .get("/api/gallery")
      .then((response) => {
        console.log("Response Data:", response.data);
        setGalleryList(response.data);
      })
      .catch((err) => {
        alert("Error getting Gallery");
      });
  };

  console.log("galleryList:", galleryList);

  return (
    <div data-testid="app">
      <header>
        <h1>React Gallery</h1>
      </header>

      <p>The gallery goes here!</p>
      <GalleryList galleryList={galleryList} />
    </div>
  );
}

export default App;
