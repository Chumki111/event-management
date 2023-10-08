import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="font-inter 2xl:container mx-auto">
            <Navbar className="sticky"></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;