

const Client = () => {
    return (
        <>
            <div className="flex items-center justify-center py-10">
                <div>
                    <h1 className="text-4xl font-bold text-center mb-4">Happy client  say about us</h1>
                    <p className="text-4xl font-bold text-center mb-7">.....</p>
                    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">

                      
                      
                        <div className=" w-64 bg-slate-50 shadow-lg p-6 text-center space-y-3 rounded-md hover:bg-amber-400">
                            <p className="pb-3 text-lg">Perfect decoration and perfect buffet for my little sister engagement</p>
                           <div className="flex items-center justify-center gap-3">
                           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/cCGFc4N/aiony-haust-3-TLl-97-HNJo-unsplash.jpg" alt="" />
                                
                                </div>
                                </label>
                                <h1>Jane Sanders</h1>
                           </div>
                        </div>
                        <div className=" w-64 bg-slate-50 shadow-lg p-6 text-center space-y-3 rounded-md hover:bg-amber-400">
                            <p className="pb-3 text-lg">Look no further.You are in the right place to plan your celebration</p>
                           <div className="flex items-center justify-center gap-3">
                           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/QkVLvV3/Ellipse-2.png" alt="" />
                                
                                </div>
                                </label>
                                <h1>Rokib Hossain</h1>
                           </div>
                        </div>
                        <div className=" w-64 bg-slate-50 shadow-lg p-6 text-center space-y-3 rounded-md hover:bg-amber-400">
                            <p className="pb-3 text-lg">I invited these event planner to arrange my receptions.</p>
                           <div className="flex items-center justify-center gap-3">
                           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/PTszKQQ/Ellipse-2-2.png" alt="" />
                                
                                </div>
                                </label>
                                <h1>Awlad Hossain</h1>
                           </div>
                        </div>
                        <div className=" w-64 bg-slate-50 shadow-lg p-6 py-7 text-center space-y-3 rounded-md hover:bg-amber-400">
                            <p className="pb-3 text-lg">My family and I are beyond happy to have them plan our wedding</p>
                           <div className="flex items-center justify-center gap-3">
                           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/Qfx7bng/Ellipse-2-1.png" alt="" />
                                
                                </div>
                                </label>
                                <h1>Safia Chowdhury</h1>
                           </div>
                        </div>
                       

                    </div>
                </div>


            </div>

        </>
    );
};

export default Client;