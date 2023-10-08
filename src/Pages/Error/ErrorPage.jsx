

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center space-y-3 font-inter">
                <h1 className="text-4xl font-bold"><span className="text-6xl">O</span>ops..!!!</h1>
                <p className="text-lg font-medium">Sorry,an expected error has occurred.</p>
                <p className="text-2xl font-semibold">Not found page</p>
            </div>
        </div>
    );
};

export default ErrorPage;