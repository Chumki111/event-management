import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const SingleCard = () => {
    const {id} =useParams()
    console.log(id)
    const features = useLoaderData()
    console.log(features)
    const [feature,setFeatures]  = useState({})
    
    useEffect(() =>{
        const findFeature = features?.find(item => item.id == id)
        console.log(findFeature)
        setFeatures(findFeature)
    },[id,features])
    return (
        <div>
           <img src={feature.image} alt="" />
        </div>
    );
};

export default SingleCard;