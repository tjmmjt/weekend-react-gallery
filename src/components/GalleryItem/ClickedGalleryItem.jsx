import { useState } from "react";
import "./GalleryItem.css";

// Will be used to display a single gallery item.
// Expects to receive a single gallery item object as a prop. (These will be rendered inside the GalleryList's .map.)
// Toggles between showing the image and description on click. Use conditional rendering.
// Displays a gallery item's current number likes.
// Contains a "like" button that, when clicked, will fire off a PUT /api/gallery/like/:id request.

const ClickedGalleryItem = ({ photo }) => {
  // Gallery Item
  return (
    <>
      <div className="clickedDiv">
        <p>{photo.description}</p>
      </div>
      <div className="likesDiv">
        <div id="like">❤️</div>
        <div>{photo.likes}</div>
      </div>
    </>
  );
};

export default ClickedGalleryItem;
