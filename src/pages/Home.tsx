import { FaPlus } from "react-icons/fa";
import { LuFilter, LuSearch } from "react-icons/lu";
import { RiResetLeftFill } from "react-icons/ri";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { useContext, useEffect, useState } from "react";
import { AuthorizationContext, type GitHubRepoItem } from "../context/AuthorizationContext";
import { useForm, type SubmitHandler } from "react-hook-form";

interface DataFormType extends FormData {
    formData: string;
}

export const HomePage = () => {
    const context = useContext(AuthorizationContext);
    const [loaded, setLoaded] = useState(false);
    if (!context) {
        throw new Error("AuthorisationPage must be used within AuthorizationContextProvider");
    }

    const { reposArray, setReposArray } = context;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DataFormType>();

    const token = import.meta.env.VITE_GITHUB_TOKEN;

    useEffect(() => {
        if (!loaded) {
            fetch(
                "https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc&per_page=10",
                {
                    headers: {
                        Authorization: `Bearer ${token}`, //<- insert token here later
                        Accept: "application/vnd.github+json",
                    },
                },
            )
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Ошибка HTTP: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data);

                    const dataArray = data.items;

                    const repos = dataArray.map((item: GitHubRepoItem) => ({
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        avatar: item.owner.avatar_url,
                        userName: item.owner.login,
                        userLink: item.owner.html_url,
                        date: item.created_at,
                        stars: item.stargazers_count,
                        views: item.watchers_count,
                        topics: item.topics,
                        language: item.language,
                        link: item.html_url,
                    }));
                    setReposArray(repos);
                    setLoaded(true);
                })
                .catch((err) => console.error(err));
        } else {
            return;
        }
    }, [token, setReposArray, loaded]);

    const onSubmit: SubmitHandler<DataFormType> = (formData) => {
        console.log(formData);

        fetch(`/api.github.com/search/repositories?q=${formData.formData}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.items[0].id);

                const dataArray = data.items;

                const repos = dataArray.map((item: GitHubRepoItem) => ({
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    avatar: item.owner.avatar_url,
                    userName: item.owner.login,
                    userLink: item.owner.html_url,
                    date: item.created_at,
                    stars: item.stargazers_count,
                    views: item.watchers_count,
                    topics: item.topics,
                    language: item.language,
                    link: item.html_url,
                }));

                setReposArray(repos);
            })
            .catch((error) => console.error("Ошибка:", error));
    };

    console.log(reposArray);

    return (
        <main className="mx-auto">
            <div className="flex flex-row gap-1.5 items-center justify-between w-[90%] mx-auto mb-7.5">
                <div className="flex items-center rounded-xl">
                    <select className="px-0.75 py-2.5 bg-white text-sm font-semibold rounded-4xl text-foreground outline-none">
                        <option value="">Title</option>
                        <option value="">Author</option>
                        <option value="">Tag</option>
                    </select>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white flex flex-1 items-center gap-1 rounded-3xl px-0.5 py-2.5"
                >
                    <Button className="p-0" type="submit">
                        <LuSearch className="ml-1 xs:mx-2" size={14} />
                    </Button>
                    <input
                        className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground focus:outline-none px-2"
                        id=""
                        type="text"
                        placeholder="Search by..."
                        {...register("formData", { required: true })}
                    />
                    {!errors ? "Something wrong..." : ""}
                </form>

                <Button className="py-3 px-2.5 bg-[linear-gradient(180deg,hsl(199,89%,48%,0.9),hsl(199,89%,48%))]">
                    <LuFilter />
                    <p className="hidden sm:block">Filter</p>
                </Button>

                <Button className="py-3 px-2.5 rounded-xl text-sm font-semibold hover:shadow-none">
                    <RiResetLeftFill />
                    <p className="hidden text- sm:block">Reset</p>
                </Button>
                <Button
                    href="add"
                    className="py-3 px-2.5 rounded-3xl  hover:shadow-md bg-[linear-gradient(180deg,hsl(199,89%,48%,0.9),hsl(199,89%,48%))]"
                >
                    <FaPlus /> <p className="hidden sm:block">Add Build</p>
                </Button>
            </div>

            <div className="container mx-auto grid gap-5 max-w-[90%] md:grid-cols-2 lg:grid-cols-3">
                {reposArray.map((item, index) => {
                    return <Card repo={item} key={index} />;
                })}
            </div>
        </main>
    );
};
