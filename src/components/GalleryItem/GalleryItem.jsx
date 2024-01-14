import { useState } from "react";
import "./GalleryItem.css";

// Will be used to display a single gallery item.
// Expects to receive a single gallery item object as a prop. (These will be rendered inside the GalleryList's .map.)
// Toggles between showing the image and description on click. Use conditional rendering.
// Displays a gallery item's current number likes.
// Contains a "like" button that, when clicked, will fire off a PUT /api/gallery/like/:id request.

const GalleryItem = ({ photo }) => {
  // Gallery Item
  const [imgToggle, setImgToggle] = useState(false);

  const toggleImg = () => {
    console.log("clicked");
    {
      imgToggle ? setImgToggle(false) : setImgToggle(true);
    }
  };
  
  console.log("imgToggle:", imgToggle);

  if(imgToggle === false){
    return (
      <>
        <div onClick={toggleImg} className="photoDiv">
          <img src={photo.url} alt={photo.description} />
        </div>
        <div className="likesDiv">
          <div id="like">❤️</div>
          <div>{photo.likes}</div>
        </div>
      </>
    );
  } else if(imgToggle === true){
  return (
    <>
      <div onClick={toggleImg} className="clickedDiv">
        <p>{photo.description}</p>
      </div>
      <div className="likesDiv">
        <div id="like">❤️</div>
        <div>{photo.likes}</div>
      </div>
    </>
  );
  }
};

export default GalleryItem;
