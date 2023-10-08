import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import SingleCard from "../Components/Features/SingleCard";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Components/Path/Login";
import Register from "../Components/Path/Register";

 
 const myCreatedRoute = createBrowserRouter([
    {
        path : '/',
        element :<MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch('/data.json')
            },
            {
              path : '/feature/:id',
              element : <SingleCard></SingleCard>,
              loader : () => fetch('/data.json')

            },
            {
                path :'about',
                element : <About></About>
            },
            {
                  path : '/blogs'
                  ,element :<Blogs></Blogs>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path :'/register',
                element : <Register></Register>
            }
        ]
    }
 ])
 
 export default myCreatedRoute;