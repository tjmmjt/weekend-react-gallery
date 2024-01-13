import './GalleryList.css'

const GalleryList = (
    {galleryList}
    ) => {
    console.log("in GalleryList()");

    return(
        <>
            <div className="galleryHeader">
                <h2>Gallery List</h2>
            </div>

            <div className="mainGalleryDiv">
                {/* {JSON.stringify(galleryList)} */}
                {galleryList.map((photo) => (
                    <div className="galleryItem" key={photo.id}>
                        <div className="photoDiv">
                            <img src={photo.url} alt={photo.description} />
                        </div>
                        <div className="likesDiv">
                            <div id='like'>❤️</div>
                            <div>{photo.likes}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default GalleryList