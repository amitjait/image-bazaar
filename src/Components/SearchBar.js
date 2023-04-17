import axios from "axios";
import React, { useState } from "react";

const api_key = "I0W1zwtwLcjSipqT-3eVh_XuzTatrZQJP02CP_yjkiQ";

const SearchBar = ({addImages}) =>{
    let [input, setInput] = useState("");


    const apiFecth = async (e)=>{
        console.log("Code is hitting here")
        e.preventDefault();
        const response =  await axios.get("https://api.unsplash.com/search/photos",{
               params: {query: input},
               headers: {
                Authorization: `Client-ID ${api_key}`
               }
        })
        addImages(response.data.results);
    }



    return(
        <div className="search-bar">
            <input type="text" placeholder="Enter the search" onChange={(e) => setInput(e.target.value)}/>
            <button type="button" onClick={apiFecth}>Search</button>
        </div>
    )
}

export default SearchBar;