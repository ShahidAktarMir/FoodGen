import React from "react";
import ReactDOM  from "react-dom/client";
import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";

const AppComp = ()=>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
        
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComp/>);