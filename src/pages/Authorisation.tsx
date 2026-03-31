import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const AuthorisationPage = () => {
    const [isLogin, setIsLogin] = useState(true);
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
                        <span className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-2.5">
                            Open
                            <span className="text-[rgb(13,161,230)] sans-serif">Deploy</span>
                        </span>
                        <p className="text-sm text-muted-foreground text-gray-400">
                            Welcome back! Sign in to continue.
                        </p>
                    </div>
                    <div className="flex gap-10 justify-center rounded-3xl bg-gray-100 py-1">
                        <Button
                            className={twMerge(
                                "bg-[rgb(13,161,230)] w-[45%] rounded-3xl cursor-pointer block",
                                isLogin ? "" : "bg-white",
                            )}
                            onClick={() => setIsLogin(true)}
                        >
                            <p className={twMerge(isLogin ? "text-white" : "")}>Sign In</p>
                        </Button>
                        <Button
                            className={twMerge(
                                "bg-white py-2.5 w-[45%] rounded-3xl cursor-pointer block",
                                !isLogin ? "bg-[rgb(13,161,230)]" : "",
                            )}
                            onClick={() => setIsLogin(false)}
                        >
                            <p className={twMerge(!isLogin ? "text-white" : "")}>Sign Up</p>
                        </Button>
                    </div>
                    {isLogin ? (
                        <form action="" className="flex flex-col gap-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name=""
                                id="email"
                                placeholder="you@example.com"
                                className="outline-none p-3.5 shadow-xl rounded-3xl border border-border/50 border-gray-200 focus:border-2 focus:border-blue-600"
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name=""
                                id="password"
                                placeholder="••••••••"
                                className="outline-none p-3.5 shadow-xl rounded-3xl border border-border/50 border-gray-200 focus:border-2 focus:border-blue-600"
                            />
                            <button
                                type="submit"
                                className="bg-[rgb(13,161,230)] rounded-3xl p-2.5 cursor-pointer"
                            >
                                <p className="text-white text-lg font-bold">Sign In</p>
                            </button>
                        </form>
                    ) : (
                        <form action="" className="flex flex-col gap-3">
                            <label htmlFor="email">Username</label>
                            <input
                                type="text"
                                name=""
                                id="username"
                                placeholder="your_username"
                                className="outline-none p-3.5 shadow-xl rounded-3xl border border-border/50 border-gray-200 focus:border-2 focus:border-blue-600"
                            />
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name=""
                                id="email"
                                placeholder="you@example.com"
                                className="outline-none p-3.5 shadow-xl rounded-3xl border border-border/50 border-gray-200 focus:border-2 focus:border-blue-600"
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name=""
                                id="password"
                                placeholder="••••••••"
                                className="outline-none p-3.5 shadow-xl rounded-3xl roundedborder border-border/50 border-gray-200 -3xl border-2 focus:border-blue-600"
                            />
                            <button
                                type="submit"
                                className="bg-[rgb(13,161,230)] rounded-3xl p-2.5 cursor-pointer shadow-2xl"
                            >
                                <p className="text-white text-lg font-bold">Sign Up</p>
                            </button>
                        </form>
                    )}
                    <p className="text-center text-gray-400">or continue with</p>
                    <div className="flex justify-around">
                        <Button className="flex gap-2.5 items-center cursor-pointer px-5 sm:px-9 md:px-10 lg:px-14 xl:px-17 py-3 border border-border/50 border-gray-200">
                            <FcGoogle />
                            <p className="text-sm">Google</p>
                        </Button>
                        <Button className="flex gap-2.5 items-center cursor-pointer px-5 sm:px-9 md:px-10 lg:px-14 xl:px-17 py-3 border border-border/50 border-gray-200">
                            <FaGithub />
                            <p className="text-sm">GitHub</p>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
