import { FiExternalLink } from "react-icons/fi";
import { IoMdCode } from "react-icons/io";
import { Button } from "./Button";
import { useContext } from "react";
import { AuthorizationContext } from "../context/AuthorizationContext";

export const Card = () => {
    const context = useContext(AuthorizationContext);

    if (!context) {
        throw new Error("AuthorisationPage must be used within AuthorizationContextProvider");
    }

    const { repo } = context;

    if (repo === null) {
        return null;
    }
    console.log(typeof repo.avatar);

    return (
        <div className="p-3.75 bg-white rounded-3xl shadow-sm transform transition-all duration-400 ease-in-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg">
            <h3 className="text-lg font-extrabold text-foreground">{repo.name}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground text-gray-400">
                {repo.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="rounded-lg px-2.5 py-1 text-xs font-bold ">react.js</span>
                <span className=" rounded-lg px-2.5 py-1 text-xs font-bold ">Node.js</span>
            </div>
            <div className="flex justify-between ">
                <a href="" className="flex gap-3 text-sm items-center">
                    <img src={repo.avatar || "#"} alt="photo" className="rounded-full w-8 h-8" />
                    <p>{repo.userName}</p>
                </a>
                <div className="flex gap-2.5">
                    <Button href={repo.link || "#"} className="bg-[rgb(51,204,107)] px-2">
                        <IoMdCode /> <span>Code</span>
                    </Button>
                    <Button href="#1" className="bg-[rgb(28,167,233)] px-2">
                        <FiExternalLink /> <span>Live</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};
