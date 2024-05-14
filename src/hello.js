import React, { Children, Suspense,lazy } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import appStore from "./utils/appStore";
//lazy laoding 
const Grocery=lazy(()=>import("./components/Grocery"));
const AppLayout=()=>{
    return (
        <Provider store={appStore}>
    <div className="app">
    <Header/>
    <Outlet/>
    </div> 
    </Provider>
    )
};
const appRouter=createBrowserRouter([
   
    {   path:"/",
        element:<AppLayout/>,
        children: [
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading wait </h1>}><Grocery/></Suspense>
            },
            {
                path:"/restaurants/:resID",
                element:<RestaurantMenu/>,
            },
           
        ],
        errorElement:<Error/>
    },
   

])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)