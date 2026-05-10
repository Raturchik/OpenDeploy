import { IoMdCode } from "react-icons/io";
import { Button } from "./Button";
import { useContext } from "react";
import { AuthorizationContext, type repoDataType } from "../context/AuthorizationContext";
import { useNavigate } from "react-router";

interface CardProps {
    repo: repoDataType;
}
export const Card: React.FC<CardProps> = ({ repo }) => {
    const context = useContext(AuthorizationContext);

    if (!context) {
        throw new Error("AuthorisationPage must be used within AuthorizationContextProvider");
    }
    const navigate = useNavigate();
    return (
        <div
            className="h-full p-3.75 bg-white rounded-3xl shadow-sm transform transition-all duration-400 ease-in-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg hover:cursor-pointer"
            onClick={() => navigate(`card/${repo.id}`)}
        >
            <div className="flex flex-col gap-2 justify-between h-full">
                <div className="flex flex-col">
                    <h3 className="text-lg font-extrabold text-foreground">{repo.name}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground text-gray-400">
                        {repo.description ? repo.description : "No description added"}
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    {repo.language && (
                        <p className="rounded-lg text-xs font-bold">
                            {repo.language ? repo.language : "No tech stacks added"}
                        </p>
                    )}
                    <div className="flex justify-between mt-auto">
                        <a
                            href={repo.userLink}
                            className="flex gap-3 text-sm items-center"
                            target="_blank"
                        >
                            <img
                                src={repo.avatar || "#"}
                                alt="photo"
                                className="rounded-full w-8 h-8"
                            />
                            <p>{repo.userName}</p>
                        </a>
                        <div className="flex gap-2.5">
                            <Button href={repo.link || "#"} className="bg-[rgb(51,204,107)] px-4">
                                <IoMdCode /> <span>Code</span>
                            </Button>
                            {/* <Button href="#1" className="bg-[rgb(28,167,233)] px-2">
                                <FiExternalLink /> <span>Live</span>
                            </Button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
