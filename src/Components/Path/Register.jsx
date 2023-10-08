import { Link } from "react-router-dom";


const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const firstName = form.get('first name')
        const lastName = form.get('last name')
        const email = form.get('email')
        const password = form.get('password')
        const confirmPassword = form.get('conform password')
        console.log(lastName, firstName, email, password, confirmPassword)
    }
    return (
        <>

            <div className="flex justify-center items-center">
                <div>
                    <div className="card flex-shrink-0 w-full max-w-lg border bg-base-100 px-4">
                        <form onSubmit={handleRegister} className="card-body">
                            <h2 className="text-4xl font-semibold mb-4">Create an account</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input type="text" placeholder="First Name" className="py-4 border-b " name="first name" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input type="text" placeholder="Last Name" className="py-4 border-b " name="last name" required />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input type="password" placeholder="Confirm password" className="py-4 border-b " name="conform password" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>

                            <div className="text-center mt-4">

                                <p className=" text-base">Aready Have An Account ? <Link to='/login' className=""><button className=" btn-link text-red-400">Login</button></Link></p>
                            </div>




                        </form>

                    </div>


                </div>

            </div>
        </>
    );
};

export default Register;