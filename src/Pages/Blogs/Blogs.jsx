import Rechart from "./Rechart";


const Blogs = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                 <div className=" ">
                     <div >
                        <h1 className="text-4xl font-bold pb-4">Turning a profit in the event planing business</h1>
                     <img src="https://i.ibb.co/fvcyqD8/istockphoto-1432006070-1024x1024.jpg" className="  h-[570px]   w-[500px] lg:w-[1000px] rounded-lg" alt="" />
                     <p className="text-justify pt-5">A wedding is a beautiful celebration of love and commitment. It involves a ceremony where  two people pledge their <br /> love and commitment to each other. Whether you`re planning an intimate gathering or 
                       a grand affair, we`re <br /> here to make your special day memorable.</p>
                     </div>
                     <div >
                        <h1 className="text-4xl font-bold pb-4">Turning a profit in the event planing business</h1>
                     <img src="https://i.ibb.co/fvcyqD8/istockphoto-1432006070-1024x1024.jpg" className=" h-[570px]  w-[500px] lg:w-[1000px] rounded-lg" alt="" />
                     <p className="text-justify pt-5">A wedding is a beautiful celebration of love and commitment. It involves a ceremony where  two people pledge their <br /> love and commitment to each other. Whether you`re planning an intimate gathering or 
                       a grand affair, we`re <br /> here to make your special day memorable.</p>
                     </div>

                          <div>
                            <div className="my-10">
                                <h1 className="text-4xl text-center font-bold">Our Oder Rating</h1>
                            </div>
                            <Rechart></Rechart>
                          </div>

                 </div>
            </div>
        </div>
    );
};

export default Blogs;