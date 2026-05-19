import { useForm } from "react-hook-form";
import { Button } from "../components/Button";

type FormData = {
    user: string;
    repoName: string;
};

export const AddBuild = () => {
    const {
        register,
        formState: { errors },
    } = useForm<FormData>();

    return (
        <div>
            <form className="fles flex-col">
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
