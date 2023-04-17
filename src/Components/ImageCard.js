import React, { useState } from "react";


const ImageCard = ({photo}) =>{

    let [isClick, setIsClick] = useState(false);

    function click(e){
        e.preventDefault();
        setIsClick(!isClick);
    }


    return(
        <div className={`image-view ${isClick? 'expanded' : ''}`} onClick={click}>
            <img src={photo.urls.thumb}  alt={photo.alt_description}/>
            {
                    isClick &&
                    <div className='image-details'> 
                         <h3>{photo.alt_description || "untitled"}</h3>
                         <p>By: {photo.user.name || "Anonymous"}</p>
        
                    </div>
                    
            }
        </div>
    )
}

export default ImageCard;