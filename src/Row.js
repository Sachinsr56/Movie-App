import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Row({title , fetchUrl}){
    const [movies, setMovies]= useState([]);

    useEffect(() =>{
            axios
        .get("https://api.themoviedb.org/3/movie/550?api_key=a5dafd3efcd84e1ba2935d31ea68de6d")
        .then( (response)=> {
        console.log(response.data.overview);
        // setoldmessages(response.data.Message)
    });
        },
        
     []);

    console.log(movies);

    return (
        <div>
            <h2>{title}</h2>



        </div>
    )
}

export default Row