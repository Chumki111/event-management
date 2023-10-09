import Rechart from "../Blogs/Rechart";


const About = () => {
    return (
        <div className="my-10 w-9/12 mx-auto">
            <div className="flex justify-center items-center">
                <div>
                    <h1 className="text-4xl font-bold text-center">Our Staff</h1>

                    <p className="text-4xl font-bold text-center mb-7">......</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://i.ibb.co/98r5YjG/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg" />
                                </div>

                            </div>
                            <h1>Safiya Chowdhury</h1>
                        </div>
                        <div className="text-center">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://i.ibb.co/QmFSf0r/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg" />
                                </div>

                            </div>
                            <h1>Alexander Hip</h1>
                        </div>
                        <div className="text-center">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://i.ibb.co/D19hyhf/nicolas-horn-MTZTGv-Ds-HFY-unsplash.jpg" />
                                </div>

                            </div>
                            <h1>Nicolas Horn</h1>
                        </div>
                        <div className="text-center">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://i.ibb.co/YpTmHTF/vicky-hladynets-C8-Ta0gw-Pb-Qg-unsplash.jpg" />
                                </div>

                            </div>
                            <h1>Vicky Haldynets</h1>
                        </div>
                    </div>


                    <div className="my-10">
                        <h1 className="text-4xl font-bold text-center">Some Question And Answer</h1>

                       <div className="">
                       <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 mt-8">
                            <div className="collapse-title text-xl font-medium">
                            What kind of venue is suitable for an anniversary party?
                            </div>
                            <div className="collapse-content">
                                <p>The venue can range from a private residence to a rented event space, depending on the number of guests and the couple`s preferences.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 mt-8">
                            <div className="collapse-title text-xl font-medium">
                            What kind of venue is suitable for an engagement celebration?
                            </div>
                            <div className="collapse-content">
                                <p>Engagement celebrations can be held in various settings, from a private residence to a rented event space, depending on the number of guests and the couple`s preferences.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 mt-8">
                            <div className="collapse-title text-xl font-medium">
                            What are some popular themes for an anniversary celebration?
                            </div>
                            <div className="collapse-content">
                                <p>Themes can vary widely based on the couple`s interests, but some popular choices include retro, black-tie, beach, and garden themes.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 mt-8">
                            <div className="collapse-title text-xl font-medium">
                            What are some popular themes for a birthday celebration?
                            </div>
                            <div className="collapse-content">
                                <p>Birthday party themes can vary widely based on the celebrant`s interests, but some popular choices include themed parties, costume parties, and surprise parties.</p>
                            </div>
                        </div>
                       </div>
                    </div>
                    <div className="mt-10">
                        <h1 className="text-4xl text-center font-bold">Our Order Rating</h1>
                    <Rechart></Rechart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;