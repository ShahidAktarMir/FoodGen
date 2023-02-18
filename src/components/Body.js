import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body =()=>{
    const [allRes, setAllres] = useState();
    const [filterRes, setFilterres] = useState();
    useEffect(()=>{
        getRes();
    },[])

    async function getRes(){
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5690538&lng=88.40904429999999&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING')
        console.log(data);
        const json = await data.json;
        console.log(json);
    }

    return(
        <>
        <h1>Shahid</h1>
        <RestaurantCard/>
        </>
    )
}
export default Body;