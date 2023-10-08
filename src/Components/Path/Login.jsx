import { Link } from "react-router-dom";


const Login = () => {
    const handleLogin = e =>{
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)
    }
    return (
        <div>
              <div className="flex justify-center items-center">
           
                <div className="card flex-shrink-0 w-full max-w-sm md:max-w-lg lg:max-w-lg border bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h2 className="text-3xl font-semibold mb-4">Login your account</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="email" placeholder="UserName or Email" className="py-4 border-b " name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="password" placeholder="Password" className="py-4 border-b " name="password" required />
                            {/* <label className="label">
                                    
                                </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>

                        <div className="text-center mt-4">

                            <p className=" text-base">Dont’t Have An Account ? <Link to='/register' className=""><button className=" btn-link text-red-400">Create an Account</button></Link></p>
                        </div>




                    </form>

                </div>

               </div>
          

        </div>

      
    );
};

export default Login;