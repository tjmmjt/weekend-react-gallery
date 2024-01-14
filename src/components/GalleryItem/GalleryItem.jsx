import { useState } from "react";
import axios from "axios";
import "./GalleryItem.css";

// Will be used to display a single gallery item.
// Expects to receive a single gallery item object as a prop. (These will be rendered inside the GalleryList's .map.)
// Toggles between showing the image and description on click. Use conditional rendering.
// Displays a gallery item's current number likes.
// Contains a "like" button that, when clicked, will fire off a PUT /api/gallery/like/:id request.

// pass mapped (photo) as a prop
const GalleryItem = ({ photo, handleGet }) => {
  // STATE for an imgToggle option.
  // If true, display img : if false, display description
  const [imgToggle, setImgToggle] = useState(false);

  // function to toggle imgToggle to true and false onClick
  // if imgToggle === true, set false : vice versa
  const toggleImg = () => {
    // console.log("clicked");
    {
      imgToggle ? setImgToggle(false) : setImgToggle(true);
    }
  };

  // PUT function for upvoting img
  // axios put(like/photo.id)
  const likeImg = () => {
    console.log("likeImg()");

    axios
      .put(`/api/gallery/like/${photo.id}`)
      .then((response) => {
        // console.log("PUT successful");
        handleGet();
      })
      .catch((err) => {
        alert("Error liking image");
      });
  };

  // console.log("imgToggle:", imgToggle);

  // ! Render
  // if imgToggle false, return photo
  // if imgToggle true, return description
  // div for img or description, onClick toggleImg()
  // below that div, display likesDiv
  // likeDiv onClick, upvote img by calling put function
  if (imgToggle === false) {
    return (
      <>
      <div className="title">
        <h4>{photo.title}</h4>
      </div>
      
        <div onClick={toggleImg} className="photoDiv" data-testid="toggle">
          <img src={photo.url} alt={photo.description} />
        </div>

        <div className="likesDiv">
          <div onClick={likeImg} id="like" data-testid="like">❤️</div>
          <div>{photo.likes}</div>
        </div>
      </>
    );
  } else if (imgToggle === true) {
    return (
      <>
        <div className="title">
          <h4>{photo.title}</h4>
        </div>
        
        <div onClick={toggleImg} className="clickedDiv" data-testid="toggle">
          <p data-testid="description">{photo.description}</p>
        </div>

        <div className="likesDiv">
          <div onClick={likeImg} id="like" data-testid="like">❤️</div>
          <div>{photo.likes}</div>
        </div>
      </>
    );
  }
};

export default GalleryItem;
