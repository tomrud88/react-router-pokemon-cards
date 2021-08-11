import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';


const Shop = () =>{

   useEffect(()=>{
       fetchItems()
   },[])

   const[items,setItems] = useState([])

  const fetchItems = async() =>{
      const response = await fetch('https://api.pokemontcg.io/v2/cards');
      const data = await response.json();
      console.log(data)

      setItems(data.data)
   }

    return(
        <div>
            <h1>This is shop page</h1>
            {items.map(item =>(
                <p key={item.id}>
               <Link to={`/shop/${item.id}`}>{item.name}</Link>
               </p>
            ))}
            
        </div>
    )
}
export default Shop;