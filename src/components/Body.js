import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./ShimmerUI";


function filter(searchText, allRes){
    return allRes.filter((res)=>res?.data?.name?.toLowerCase().includes(searchText.toLowerCase()));
}

const Body =()=>{
    const [allRes, setAllres] = useState();
    const [filterRes, setFilterres] = useState();
    const [searchText,setSearchtext]= useState();
    useEffect(()=>{
        getRes();
    },[])

    async function getRes(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4935958&lng=88.1949782&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setAllres(json?.data?.cards[1]?.data?.data?.cards);
        setFilterres(json?.data?.cards[1]?.data?.data?.cards)
        console.log(json);
    }
    if(!allRes) return null;
    if(filterRes.length==0) return <h1>No Restaurant Found - ""{searchText}""</h1>;
    return (allRes.length==0)?<Shimmer/>:(
        <>
        <div className="searchbar">
            <input type="text" placeholder="Search Here" onChange={(e)=>setSearchtext(e.target.value)}/>
            <button onClick={()=>{const data = filter(searchText,allRes);setFilterres(data)}}>Search</button>
        </div>
        <div className="cardsBody">{
            filterRes.map((res)=>{
                return(
                    <Link to={"/restaurant/"+res?.data?.id}><RestaurantCard {...res?.data}  key={res?.data?.id}/></Link>
                )
            })
        }</div>
        </>
        
    )
}
export default Body;