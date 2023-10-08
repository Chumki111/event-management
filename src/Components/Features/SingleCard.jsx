import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

import { AiOutlineArrowLeft} from 'react-icons/ai';
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
           <div className="grid grid-cols-5">
              <div>

              </div>
              <div className="col-span-3">
              <div className="space-y-4">
                  <img src={feature.image} alt="" className="rounded-md"/>
                
                 <h1 className="text-2xl lg:text-4xl font-bold">{feature.name}</h1>
                  <p className="text-lg font-normal pb-4">{feature.details_description}</p>
                 <Link to='/' className=""> <button className="btn bg-[#FBBF24] capitalize"><AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft> Go Home</button></Link>
                 </div>
              </div>
              <div>

              </div>
           </div>
        </div>
    );
};

export default SingleCard;