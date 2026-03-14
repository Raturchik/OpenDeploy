import { NavLink } from "react-router";
import { IoSunnyOutline } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
import { IoEnterOutline } from "react-icons/io5";

export const Header = () => {
    return (
        <header className="p-5 flex justify-evenly items-center bg-white rounded-b-2xl">
            <NavLink to="/">
                <span className="text-5xl font-black tracking-tight text-foreground">
                    Open
                    <span className="text-[rgb(13,161,230)] sans-serif">
                        Deploy
                    </span>
                </span>
            </NavLink>

            <div className="flex items-center gap-3">
                <div className="flex items-center">
                    <IoSunnyOutline className="h-6 w-6 " />
                    {/* cursor-pointer*/}
                </div>

                {/* width < 1024px <GiHamburgerMenu className="h-8 w-8" /> */}
                <button className="p-2.5 flex items-center gap-2 rounded-3xl text-sm font-bold text-primary-foreground">
                    <IoEnterOutline className="h-4 w-4" /> <p>Login</p>
                </button>
            </div>
        </header>
    );
};
