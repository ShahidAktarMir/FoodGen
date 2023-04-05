import React from "react";
import { useParams } from "react-router-dom";
 const ResDet = () =>{
    const {id} = useParams();
    return(
        <>
        <div>
            ResDet: {id};
        </div>
        </>
    )
 }
export default ResDet;
