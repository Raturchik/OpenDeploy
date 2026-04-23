import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "../components/Button";
import REST_API_URL from "../RESTAPI";
import { useContext } from "react";
import { AuthorizationContext } from "../context/AuthorizationContext";

type FormData = {
    user: string;
    repoName: string;
};

export const AddBuild = () => {
    const context = useContext(AuthorizationContext);

    if (!context) {
        throw new Error("AuthorisationPage must be used within AuthorizationContextProvider");
    }

    const { repo, setRepo } = context;

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
                const cardData = {
                    name: data.name,
                    description: data.description,
                    avatar: data.owner.avatar_url,
                    userName: data.owner.login,
                    language: data.language,
                    link: data.git_url,
                };
                setRepo(cardData);
                console.log(data);
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
