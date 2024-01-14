import React from "react";
import GalleryList from "../GalleryList/GalleryList";
import { Header } from "../Header/Header";


function App() {
  // need GET fn to get gallery list and setGalleryList

  return (
    <div className="appBody" data-testid="app">
      <Header />
      <GalleryList />
    </div>
  );
}

export default App;
