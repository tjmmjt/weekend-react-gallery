// Will be used to display a single gallery item.
// Expects to receive a single gallery item object as a prop. (These will be rendered inside the GalleryList's .map.)
// Toggles between showing the image and description on click. Use conditional rendering.
// Displays a gallery item's current number likes.
// Contains a "like" button that, when clicked, will fire off a PUT /api/gallery/like/:id request.

const GalleryItem = ({ galleryList }) => {
  // Gallery Item
  const clicked = (event) => {
    // target clicked with event.target.id
    // declare var for clicked id
    // render img by id OR
    // render box div by id with description
    let clicked = event.target.id

  }

  return (
  <>
  
  
  </>
  )

//   if (clicked === false) {
//     return (
//             <>
            
//             </>
//     );
//   } else {
//     return (
//         <div className="clicked">
            
//         </div>
//     );
//   }
};

export default GalleryItem;
