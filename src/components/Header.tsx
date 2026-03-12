import { NavLink } from "react-router";
import { IoSunnyOutline } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
import { IoEnterOutline } from "react-icons/io5";

export const Header = () => {
    return (
        <header
            style={{ padding: "20px" }}
            className="flex justify-evenly items-center bg-white rounded-b-2xl"
        >
            <div className="">
                <NavLink to="/">
                    {/* <h1
                        className=" relative
                                     font-mono 
                                     text-4xl
                                     md:text-4xl
                                     lg:text-4xl 
                                     font-bold 
                                     tracking-[-0.05em] 
                                     bg-linear-to-r
                                     from-sky-300 
                                     via-white 
                                     to-cyan-300 
                                     bg-clip-text 
                                     text-transparent 
                                     drop-shadow-2xl 
                                     text-glow-subtle
                                     select-none
                                     cursor-default
                                     transition-all 
                                     duration-300 
                                     ease-in-out
                                     hover:scale-[1.02]
                                     hover:from-sky-200
                                     hover:via-slate-50
                                     hover:to-cyan-200
                                     [text-shadow:0_0_30px_rgba(0,180,255,0.3)]"
                    >
                        Open<span className="c-">Deploy</span>
                    </h1> */}
                    <span className="text-5xl font-black tracking-tight text-foreground">
                        Open
                        <span className="text-[rgb(13,161,230)] sans-serif">
                            Deploy
                        </span>
                    </span>
                </NavLink>
            </div>
            <div className="">
                <div className="flex items-center gap-3">
                    <div className="flex items-center">
                        <button>
                            <IoSunnyOutline className="h-6 w-6 " />
                        </button>
                    </div>
                    <div>
                        {/* width < 1024px <GiHamburgerMenu className="h-8 w-8" /> */}
                        <button
                            style={{
                                padding: "1em",
                            }}
                            className="bg-[linear-gradient(180deg,hsl(199,89%,48%,0.9),hsl(199,89%,48%))] flex items-center gap-2 rounded-4xl px-5 py-2.5 text-sm font-bold text-primary-foreground"
                        >
                            <p>
                                <IoEnterOutline className="h-4 w-4" />{" "}
                            </p>
                            <p>Login</p>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
