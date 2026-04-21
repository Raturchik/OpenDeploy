import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "../components/Button";
import { useState } from "react";
import REST_API_URL from "../RESTAPI";

type FormData = {
    user: string;
    repoName: string;
};

export const AddBuild = () => {
    const [repo, setRepo] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        const user = data.user;
        const repoName = data.repoName;

        fetch(REST_API_URL + `${user}/${repoName}`)
            .then((response) => response.json())
            .then((data) => {
                setRepo(data);
            })
            .catch((error) => console.error("Ошибка:", error));
    };
    console.log(repo);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="fles flex-col">
                <label htmlFor="user">user</label>
                <input
                    type="text"
                    id="user"
                    className="bg-white border-2"
                    {...register("user", { required: true })}
                />
                <label htmlFor="repo">repo</label>
                <input
                    type="text"
                    id="repo"
                    className="bg-white border-2"
                    {...register("repoName", { required: true })}
                />
                {errors ? "" : "cannot find your repository"}
                <Button type="submit">Add Build</Button>
            </form>
        </div>
    );
};
