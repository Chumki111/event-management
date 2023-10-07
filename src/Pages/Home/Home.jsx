import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Features from "../../Components/Features/Features";


const Home = () => {
    const features = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <Features features={features}></Features>
            
        </div>
    );
};

export default Home;