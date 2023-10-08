import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Features from "../../Components/Features/Features";

import Client from "../../Components/Client";
import Address from "../../Components/Address";


const Home = () => {
    const features = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <Features features={features}></Features>
            
            <Client></Client>
            <Address></Address>
            
        </div>
    );
};

export default Home;