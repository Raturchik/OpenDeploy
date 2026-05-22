import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="bg-white w-[60%] mx-auto text-center h-[40%] p-6 rounded-2xl">
            <p>Project not found :(</p>
            <Link to="home">Go back to home page</Link>
        </div>
    );
};

export default NotFound;
