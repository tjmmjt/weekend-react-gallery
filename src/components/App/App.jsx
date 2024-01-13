import React from "react";
import { useState, useEffect } from "react";
import GalleryList from "../GalleryList/GalleryList";
import axios from "axios";
import GalleryItem from "../GalleryItem/GalleryItem";

function App() {
  // need GET fn to get gallery list and setGalleryList

  return (
    <div data-testid="app">
      <header>
        <h1>React Gallery</h1>
      </header>

      <p>The gallery goes here!</p>
      <GalleryList />

    </div>
  );
}

export default App;
