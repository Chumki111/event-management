

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[calc(100vh-69px)]" style={{ backgroundImage: 'url(https://i.ibb.co/CHP4bHJ/jeremy-wong-weddings-464ps-n-Oflw-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl  text-amber-400 font-bold">We create</h1>
                        <h1 className="mb-5  text-5xl mr-32 font-bold">You  </h1>
                        <h1 className="mb-5  text-5xl  font-bold">celebrate</h1>
                        <p className="mb-5 text-center">Planing a wedding,proposal or event in our busy city is not so easy and it takes skills to make it all look easy going</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        
        </div>
    );
};

export default Banner;