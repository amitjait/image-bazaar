import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import ImageGallery from "./Components/ImageGallery";

import "./index.css"

export default function App (){

    let [photos, setPhotos] = useState([]);
    console.log(photos)

    return(
        <div>
            <SearchBar addImages={setPhotos}/>
            <ImageGallery photos={photos}/>
        </div>
    )
}