import React from "react";
import ImageCard from "./ImageCard";

let c=0;

const ImageGallery = ({photos}) =>{



    return (
        <div className="image-gallery">
            {/* <ImageCard photo={photo}/> */}
            {
                photos.map((photo, index) =>(
                    <ImageCard ket={c++} photo={photo} />
                ))
            }
        </div>
    )
}

export default ImageGallery;