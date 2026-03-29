import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../components/Button";

export const AuthorisationPage = () => {
    return (
        <div className="grid h-screen place-items-center">
            <div className="flex flex-col mx-auto sm:w-[50%] md:w-[45%] lg:w-[40%] xl:w-[35%] 2xl:w-[30%]">
                <Button
                    href="/"
                    className="flex items-center gap-2 text-[rgb(98,115,132)] mb-5 outline-none"
                >
                    <FaArrowLeft />
                    Back to Home page
                </Button>
                <div className="bg-white rounded-3xl p-4 flex flex-col gap-7 container w-full">
                    <div className="flex flex-col text-center">
                        <span className="text-3xl font-black tracking-tight text-foreground mb-2.5">
                            Open
                            <span className="text-[rgb(13,161,230)] sans-serif">Deploy</span>
                        </span>
                        <p className="text-sm text-muted-foreground text-gray-400">
                            Welcome back! Sign in to continue.
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <Button className="bg-[rgb(13,161,230)] w-[45%] rounded-3xl cursor-pointer block">
                            <p>Sign In</p>
                        </Button>
                        <Button className="bg-white py-2.5 w-[45%] rounded-3xl cursor-pointer block">
                            <p>Sign Up</p>
                        </Button>
                    </div>
                    <form action="" className="flex flex-col gap-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name=""
                            id="email"
                            placeholder="you@example.com"
                            className="outline-none p-3.5"
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name=""
                            id="password"
                            placeholder="••••••••"
                            className="outline-none p-3.5"
                        />
                        <button
                            type="submit"
                            className="bg-[rgb(13,161,230)] rounded-3xl p-2.5 cursor-pointer"
                        >
                            Sign In
                        </button>
                    </form>
                    <p className="text-center text-gray-400">or continue with</p>
                    <div className="flex justify-around">
                        <Button className="flex gap-2.5 items-center cursor-pointer">
                            <FcGoogle />
                            Google
                        </Button>
                        <Button className="flex gap-2.5 items-center cursor-pointer">
                            <FaGithub />
                            GitHub
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
