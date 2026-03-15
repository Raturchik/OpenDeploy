import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router";

export const AuthorisationPage = () => {
    return (
        <div className="grid h-screen place-items-center">
            <div className="flex flex-col mx-auto max-w-100 ">
                <NavLink
                    to="/"
                    className="flex items-center gap-2 text-[rgb(98,115,132)] mb-5 outline-none"
                >
                    <FaArrowLeft />
                    Back to Home page
                </NavLink>
                <div className="bg-white rounded-3xl p-5 flex flex-col gap-7">
                    <div className="flex flex-col text-center">
                        <span className="text-3xl font-black tracking-tight text-foreground mb-2.5">
                            Open
                            <span className="text-[rgb(13,161,230)] sans-serif">Deploy</span>
                        </span>
                        <p className="text-sm text-muted-foreground text-gray-400">
                            Welcome back! Sign in to continue.
                        </p>
                    </div>
                    <div className="flex justify-evenly">
                        <button className=" bg-[rgb(13,161,230)] py-2.5 px-12.5 rounded-3xl cursor-pointer">
                            Sign In
                        </button>
                        <button className="bg-white py-2.5 px-12.5 rounded-3xl cursor-pointer">
                            Sign Up
                        </button>
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
                        <button className="flex gap-2.5 items-center cursor-pointer">
                            <FcGoogle />
                            Google
                        </button>
                        <button className="flex gap-2.5 items-center cursor-pointer">
                            <FaGithub />
                            GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
