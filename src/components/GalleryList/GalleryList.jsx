import { useState, useEffect } from 'react';
import axios from 'axios';
import './GalleryList.css'
import GalleryItem from '../GalleryItem/GalleryItem';

const GalleryList = () => {
    console.log("in GalleryList()");
    // ! STATE
    // gets and sets gallery list only.
    const [galleryList, setGalleryList] = useState([]);


    // useEffect()
    // onload, get gallery list
    useEffect(() => {
      handleGet();
    }, []);
    
    // ! GET gallery items
    // get DB list, set STATE to response data
    const handleGet = () => {
      // console.log("In handleGet()");
      axios
        .get("/api/gallery")
        .then((response) => {
          // console.log("Response Data:", response.data);
          setGalleryList(response.data);
        })
        .catch((err) => {
          alert("Error getting Gallery");
        });
    };

    console.log("Gallery List: ", galleryList)

    // return a div for the gallery container
    // in the container, map over gallery list of (photos)
    // return a galleryItem div for the photo w/ a unique key = photo.id
    // within galleryItem, display GalleryItem component and pass the mapped (photo) as prop

    return(
        <>
            <div className="mainGalleryDiv" data-testid="galleryList">
                {galleryList.map((photo) => (
                    <div className="galleryItem" key={photo.id} data-testid="galleryItem">
                      <GalleryItem handleGet={handleGet} photo={photo} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default GalleryList