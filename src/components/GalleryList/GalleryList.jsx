import { useState, useEffect } from 'react';
import axios from 'axios';
import './GalleryList.css'
import GalleryItem from '../GalleryItem/GalleryItem';
import ClickedGalleryItem from '../GalleryItem/ClickedGalleryItem';

const GalleryList = () => {
    console.log("in GalleryList()");
    // ! STATE
    const [galleryList, setGalleryList] = useState([]);
    const [imgToggle, setImgToggle] = useState(false);

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

    const toggleImg = () => {
        console.log("clicked");
        {imgToggle ? setImgToggle(false) : setImgToggle(true)}
    };

    console.log("imgToggle:", imgToggle);

    return(
        <>
            <div className="mainGalleryDiv">
                {galleryList.map((photo) => (
                    <div onClick={toggleImg} className="galleryItem" key={photo.id}>
                        {
                        imgToggle ? <GalleryItem photo={photo} /> : <ClickedGalleryItem photo={photo} />
                        }
                    </div>
                ))}
            </div>
        </>
    )
}

export default GalleryList