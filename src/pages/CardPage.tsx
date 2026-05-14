import { Navigate, useNavigate, useParams } from "react-router";
import { Button } from "../components/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosStar, IoMdCode } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { AuthorizationContext, type repoDataType } from "../context/AuthorizationContext";
import { useContext } from "react";

export function CardPage() {
    const params = useParams();
    const id = Number(params.id);
    const navigate = useNavigate();
    const context = useContext(AuthorizationContext);

    if (!context) {
        throw new Error("AuthorisationPage must be used within AuthorizationContextProvider");
    }

    const { searchItem, fetchRepos } = context;

    const { data, isError, isLoading } = useQuery<repoDataType[] | undefined>({
        queryFn: () => fetchRepos(searchItem),
        queryKey: ["repos", searchItem],
        enabled: false,
    });

    if (isLoading) return <div>Загрузка...</div>;

    if (!data || isError) {
        return <Navigate to="/notfound" replace />;
    }
    const currentRepo = data.find((i) => i.id === id);

    return (
        <div className="mx-auto w-[70%] grow">
            <Button onClick={() => navigate("/")}>
                <FaArrowLeftLong />
                Back to builds
            </Button>
            <div className="bg-white p-3 rounded-3xl">
                <div className="flex flex-col gap-3 mb-2">
                    <h1 className="text-2xl font-extrabold sm:text-3xl">{currentRepo?.name}</h1>
                    <div className=" flex flex-wrap  gap-3 text-xs font-semibold ">
                        <div className="flex gap-2 items-center">
                            <img
                                src={currentRepo?.avatar}
                                alt=""
                                className="h-6 w-6 rounded-full"
                            />
                            <p>{currentRepo?.userName}</p>
                        </div>
                        <span className="flex items-center gap-2">
                            <IoIosStar color="orange" className="h-6 w-6" />
                            {currentRepo?.stars}
                        </span>
                        <span className="flex items-center gap-2">
                            <CiCalendar className="h-6 w-6" />
                            {currentRepo?.date}
                        </span>

                        <span className="flex items-center gap-2">
                            <FaRegEye className="h-6 w-6" />
                            {currentRepo?.views}
                        </span>
                    </div>
                    <div className="flex flex-wrap">
                        <Button
                            href={currentRepo?.link || "#"}
                            className="bg-[rgb(51,204,107)] px-4"
                        >
                            <IoMdCode /> <span>Code</span>
                        </Button>
                    </div>
                </div>
                <div className="">
                    <h4 className="text-2xl font-bold text-gray-400">About</h4>
                    <p className="text-base leading-relaxed">
                        {currentRepo?.description
                            ? currentRepo?.description
                            : "No description added"}
                    </p>
                    <div className="flex flex-col gap-10 sm:flex-row">
                        <div className="w-[50%]">
                            <h4 className="text-2xl font-bold text-gray-400">Topics</h4>
                            <div className="flex flex-wrap gap-5">
                                {currentRepo?.topics.length === 0 ? (
                                    <p>No topics added</p>
                                ) : (
                                    currentRepo?.topics.map((item, index) => {
                                        return <p key={index}>{item}</p>;
                                    })
                                )}
                            </div>
                        </div>
                        <div className="">
                            <h4 className="text-2xl font-bold text-gray-400">Tech stack</h4>
                            <p>
                                {currentRepo?.language
                                    ? currentRepo?.language
                                    : "No tech stacks added"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
