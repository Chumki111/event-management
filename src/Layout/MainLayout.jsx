import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="font-inter 2xl:container mx-auto">
            <Navbar className="sticky"></Navbar>
            <div className="my-10">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <div><Toaster/></div>
        </div>
    );
};

export default MainLayout;