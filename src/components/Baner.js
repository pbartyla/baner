import React from "react"
import { useEffect, useState, useRef } from "react"
import axios from "axios"

export default function Baner(){

    const [listOfImages, setListOfImages] = useState([])

    const getAnswer = async () => {
        await axios.get('https://picsum.photos/v2/list?limit=12').then(resp => {
            setListOfImages(resp.data.map(item => item.download_url))
        });
    };

    useEffect( () =>{
        
        getAnswer();

        const intervalId = setInterval( ()=>{
            console.log(listOfImages.length)
            return () => {
                clearInterval(intervalId);
              };
        }, 2000)
    },[listOfImages]);
    
    const style = {
        width: '50vw',
        height: '50vh'
    }
 
    return (
        <>
        {[...Array(4)].map((e, i) => (<img key={i} style={style} src={listOfImages[i]} />))}
        </>

    )  
}