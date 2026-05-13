import { FaPlus } from "react-icons/fa";
import { LuFilter, LuSearch } from "react-icons/lu";
import { RiResetLeftFill } from "react-icons/ri";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { useContext } from "react";
import { AuthorizationContext, type repoDataType } from "../context/AuthorizationContext";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";

interface DataFormType extends FormData {
    formData: string;
}

export const HomePage = () => {
    const context = useContext(AuthorizationContext);

    if (!context) {
        throw new Error("AuthorisationPage must be used within AuthorizationContextProvider");
    }

    const { fetchPopularRepo, searchItem, setSearchItem, fetchRepos, setSeacrhBy } = context;

    const {
        register,
        handleSubmit,
        formState: { errors },
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

    const { data } = useQuery<repoDataType[]>({
        queryKey: ["repos", searchItem],
        queryFn: getRepos,
        staleTime: 1000 * 60 * 5,
        gcTime: 30 * 60 * 1000,
        retry: true,
    });

    const onSubmit: SubmitHandler<DataFormType> = async (formData: DataFormType) => {
        setSearchItem(formData.formData);
    };
    console.log(data);

    return (
        <main className="mx-auto">
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
                {data?.map((item) => {
                    return <Card repo={item} key={item.id} />;
                })}
            </div>
        </main>
    );
};
