import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

import { AiOutlineArrowLeft } from 'react-icons/ai';
const SingleCard = () => {
    const { id } = useParams()
    console.log(id)
    const features = useLoaderData()
    console.log(features)
    const [feature, setFeatures] = useState({})

    useEffect(() => {
        const findFeature = features?.find(item => item.id == id)
        console.log(findFeature)
        setFeatures(findFeature)
    }, [id, features])
    return (
        <div className="flex justify-center items-center">
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={feature.image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                        
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {feature.name}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {feature.details_description}
                    </p>
                    <a className="inline-block" href="#">
                        <Link to='/'><button
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                           <AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft>  Go Home
                          
                        </button></Link>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;