import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./ShimmerUI";

const Body =()=>{
    const [allRes, setAllres] = useState([]);
    const [filterRes, setFilterres] = useState();
    useEffect(()=>{
        getRes();
    },[])

    async function getRes(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4935958&lng=88.1949782&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setAllres(json?.data?.cards[1]?.data?.data?.cards);
    }
    return (allRes.length==0)?<Shimmer/>:(
        <div className="cardsBody">{
            allRes.map((res)=>{
                return(
                    <RestaurantCard {...res?.data}  key={res?.data?.id}/>
                )
            })
        }</div>
        
    )
}
export default Body;