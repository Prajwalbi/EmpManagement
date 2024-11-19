import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page" className="flex flex-col items-center justify-center h-screen gap-8">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p className="text-xl font-normal">Sorry, an unexpected error has occurred.</p>
            <p className="font-light">
                <i>{ error.statusText || error.message }</i>
            </p>
        </div>
    );
}

export default ErrorPage;