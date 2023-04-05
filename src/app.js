import React from "react";
import ReactDOM  from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/About";
import Contact from "./components/Contact";
import ResDet from "./components/RestaurantDetails";

const AppComp = ()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
        
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppComp/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:resID",
                element:<ResDet/>
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);