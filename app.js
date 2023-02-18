import React from "react";
import ReactDOM  from "react-dom/client";
const fullName = <h1>Shahid Aktar Mir</h1>
const ShortName = ()=>{
    return(
        <>
        {fullName}
        <div>Shahid</div>
        </>
        
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ShortName/>);