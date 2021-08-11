import React,{useState, useEffect}from 'react';
import { useParams } from 'react-router-dom';


export default function DetailPage() {

    const {id} = useParams()

   useEffect(() =>{
       fetchItem()
   },[]);

   const[item,setItem] = useState({})

   const fetchItem = async() =>{
       const response = await fetch(`https://api.pokemontcg.io/v2/cards/${id}`);
       const data = await response.json();

       console.log(data.data)

       setItem(data.data)

   }


    return (
        <div>
            <p>{item.name}</p>
            <p>types : {item.types}</p>
            <img src={item.images.small}></img>
        </div>
    )
}
