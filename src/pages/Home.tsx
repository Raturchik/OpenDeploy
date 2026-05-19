import { FaPlus } from "react-icons/fa";
import { LuFilter, LuSearch } from "react-icons/lu";
import { RiResetLeftFill } from "react-icons/ri";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { useContext } from "react";
import {
    AuthorizationContext,
    type repoDataType,
    type SortType,
} from "../context/AuthorizationContext";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { twMerge } from "tailwind-merge";

interface DataFormType extends FormData {
    formData: string;
}

export const HomePage = () => {
    const context = useContext(AuthorizationContext);

    if (!context) {
        throw new Error("AuthorisationPage must be used within AuthorizationContextProvider");
    }

    const {
        fetchPopularRepo,
        searchItem,
        setSearchItem,
        fetchRepos,
        setSeacrhBy,
        searchBy,
        filter,
        setFilter,
        isActive,
        setIsActive,
    } = context;

    const {
        register,
        handleSubmit,
        formState: { errors },
        resetField,
        setFocus,
    } = useForm<DataFormType>();

    const getRepos = async (): Promise<repoDataType[]> => {
        if (!searchItem) {
            const data = await fetchPopularRepo();
            return data || [];
        } else {
            const data = await fetchRepos(searchItem);
            return data || [];
        }
    };

    const { data, isLoading } = useQuery<repoDataType[]>({
        queryKey: ["repos", searchItem],
        queryFn: getRepos,
        staleTime: 1000 * 60 * 5,
        gcTime: 30 * 60 * 1000,
        retry: true,
    });

    const onSubmit: SubmitHandler<DataFormType> = async (formData: DataFormType) => {
        setSearchItem(formData.formData);
    };

    const handleCheckboxChange = (value: SortType) => {
        setFilter((prev: SortType[]) => {
            if (value === "user" && prev.includes("organization")) {
                return prev.map((item) => (item === "organization" ? "user" : item));
            }

            if (value === "organization" && prev.includes("user")) {
                return prev.map((item) => (item === "user" ? "organization" : item));
            }

            if (prev.includes(value)) {
                return prev.filter((item) => item !== value);
            } else {
                return [...prev, value];
            }
        });
    };

    const getFourMonthsAgo = () => {
        const date = new Date();
        date.setMonth(date.getMonth() - 4);
        return date;
    };

    const filteredData = data?.filter((data) => {
        if (filter.length === 0) {
            return data;
        }
        if (filter.includes("active")) {
            const four = getFourMonthsAgo();
            const repoDate = new Date(data.last_update);

            return repoDate < four;
        }
        if (filter.includes("stars")) {
            return data.stars >= 10;
        }
        if (filter.includes("license")) {
            return data.license;
        }
        if (filter.includes("organization")) {
            return data.owner === "Organization";
        }
        if (filter.includes("user")) {
            return data.owner === "User";
        }
        if (filter.includes("wiki")) {
            return data.wiki;
        }
    });

    return (
        <main className="grow">
            <div className="flex flex-row gap-1.5 items-center justify-between w-[90%] mx-auto mb-7.5">
                <div className="flex items-center rounded-xl">
                    <select
                        className="px-0.75 py-2.5 bg-white text-sm font-semibold rounded-4xl text-foreground outline-none"
                        onChange={(event) => {
                            setSeacrhBy(event.target.value);
                        }}
                    >
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                        <option value="stack">Stack</option>
                    </select>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white flex flex-1 items-center gap-1 rounded-3xl px-0.5 py-2.5"
                >
                    <Button className="p-0 hover:shadow-none" type="submit">
                        <LuSearch className="ml-1 xs:mx-2" size={14} />
                    </Button>
                    <input
                        className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground focus:outline-none px-2"
                        id=""
                        type="text"
                        placeholder={`Search by ${searchBy}`}
                        {...register("formData", { required: true })}
                    />
                    {!errors ? "Something wrong..." : ""}
                </form>

                <Button
                    className="py-3 px-2.5 bg-[linear-gradient(180deg,hsl(199,89%,48%,0.9),hsl(199,89%,48%))] relative"
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                >
                    <LuFilter />
                    <p className="hidden sm:block">Filter</p>
                </Button>
                <div
                    className={twMerge(
                        "p-2 shadow-md w-40 max-h-50 bg-white rounded-3xl absolute top-39.5 right-22 z-2 sm:right-50 overflow-y-auto style-scrollbar [scrollbar-width:none] hover:[scrollbar-width:thin]",
                        isActive ? "block" : "hidden",
                    )}
                >
                    <p>Filter By:</p>
                    <p>Popularity</p>
                    <div className="flex flex-col">
                        <div className="flex">
                            <input
                                type="checkbox"
                                id="stars"
                                className="accent-blue-400"
                                checked={filter.includes("stars")}
                                onChange={() => handleCheckboxChange("stars")}
                            />
                            <label htmlFor="stars">Most popular</label>
                        </div>
                        <p>Actuality</p>
                        <div className="flex">
                            <input
                                type="checkbox"
                                id="recent"
                                className="accent-blue-400"
                                checked={filter.includes("recent")}
                                onChange={() => handleCheckboxChange("recent")}
                            />
                            <label htmlFor="recent">Most recent</label>
                        </div>

                        <div className="">
                            <p>Author</p>
                            <div className="flex">
                                <input
                                    type="checkbox"
                                    id="organization"
                                    className="accent-blue-400"
                                    checked={filter.includes("organization")}
                                    onChange={() => handleCheckboxChange("organization")}
                                />
                                <label htmlFor="organization">Organization</label>
                            </div>
                            <div className="flex">
                                <input
                                    type="checkbox"
                                    id="user"
                                    className="accent-blue-400"
                                    checked={filter.includes("user")}
                                    onChange={() => handleCheckboxChange("user")}
                                />
                                <label htmlFor="user">User</label>
                            </div>
                        </div>
                        <div className="">
                            <p>Deatils</p>
                            <div className="flex">
                                <input
                                    type="checkbox"
                                    id="wiki"
                                    className="accent-blue-400"
                                    checked={filter.includes("wiki")}
                                    onChange={() => handleCheckboxChange("wiki")}
                                />
                                <label htmlFor="wiki">Documentation</label>
                            </div>
                            <div className="flex">
                                <input
                                    type="checkbox"
                                    id="license"
                                    className="accent-blue-400"
                                    checked={filter.includes("license")}
                                    onChange={() => handleCheckboxChange("license")}
                                />
                                <label htmlFor="license">License</label>
                            </div>
                        </div>
                    </div>
                </div>

                <Button
                    className="py-3 px-2.5 rounded-xl text-sm font-semibold hover:shadow-none"
                    onClick={() => {
                        setFilter([]);
                        resetField("formData");
                        setFocus("formData");
                    }}
                >
                    <RiResetLeftFill />
                    <p className="hidden text- sm:block">Reset</p>
                </Button>
                <Button
                    onClick={() => alert("Work In Progress...")}
                    className="py-3 px-2.5 rounded-3xl  hover:shadow-md bg-[linear-gradient(180deg,hsl(199,89%,48%,0.9),hsl(199,89%,48%))]"
                >
                    <FaPlus /> <p className="hidden sm:block">Add Build</p>
                </Button>
            </div>

            {data === undefined ? (
                isLoading && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
                        <div className="h-7.5 w-7.5 bg-[#ffffff] rounded-full m-3.75 animate-[pulse0_1s_infinite]"></div>
                        <div className="h-7.5 w-7.5 bg-[#ffffff] rounded-full m-3.75 animate-[pulse1_1s_infinite]"></div>
                        <div className="h-7.5 w-7.5 bg-[#ffffff] rounded-full m-3.75 animate-[pulse2_1s_infinite]"></div>
                    </div>
                )
            ) : filteredData && filteredData.length > 0 ? (
                <div
                    className={twMerge(
                        "container mx-auto grid gap-5 max-w-[90%] md:grid-cols-2 lg:grid-cols-3",
                        data === undefined ? "grid-cols-1" : "",
                    )}
                >
                    {filteredData.map((item) => (
                        <Card repo={item} key={item.id} />
                    ))}
                </div>
            ) : (
                <div className="bg-white mx-auto max-w-70 sm:max-w-md lg:max-w-2xl rounded-2xl p-6 text-center sm:mt-12 sm:p-8">
                    <p className="text-base font-bold text-muted-foreground sm:text-lg lg:text-2xl">
                        No projects found
                    </p>
                </div>
            )}
        </main>
    );
};
