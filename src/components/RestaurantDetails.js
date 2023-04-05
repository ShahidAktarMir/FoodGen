import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMGID } from "./constant";
 const ResDet = () =>{
    const {resID} = useParams();
    const [resInfo, setResInfo] = useState({});
    const {name,areaName,cloudinaryImageId,costForTwo,avgRating,city,locality,id} = resInfo;
    console.log(useParams)
    useEffect(()=>{
        getDetails()
    },[])
     async function getDetails(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.56379562768114&lng=88.37036063977736&restaurantId="+resID+"&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json?.data?.cards[0]?.card?.card?.info);
        console.log(json);
     }
     return(
        <div className="fullDetails">
            <div><img src={IMGID+cloudinaryImageId}/></div>
        <div className="Details">
            <h1>{name}</h1>
            <h4>Area: {areaName}</h4>
            <h2>Price: ₹{costForTwo/100}</h2>
            <button className="buy">Buy Now</button>
        </div>
            <div><p><b><i>ID: {id}</i></b></p></div>
        </div>
     )
 }
export default ResDet;
