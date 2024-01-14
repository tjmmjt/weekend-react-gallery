import { useState, useEffect } from 'react';
import axios from 'axios';
import './GalleryList.css'
import GalleryItem from '../GalleryItem/GalleryItem';
import ClickedGalleryItem from '../GalleryItem/ClickedGalleryItem';

const GalleryList = () => {
    console.log("in GalleryList()");
    // ! STATE
    const [galleryList, setGalleryList] = useState([]);


    // useEffect()
    useEffect(() => {
      handleGet();
    }, []);
    
    // ! GET gallery items
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

    console.log("Gallery List: ", galleryList)

    return(
        <>
            <div className="mainGalleryDiv">
                {galleryList.map((photo) => (
                    <div className="galleryItem" key={photo.id}>
                      <GalleryItem photo={photo} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default GalleryList