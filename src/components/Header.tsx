import { NavLink } from "react-router";
import { IoSunnyOutline } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
import { IoEnterOutline } from "react-icons/io5";

export const Header = () => {
    return (
        <header className="sticky p-5 top-0 z-50 w-full shadow-lg flex justify-between items-center bg-white rounded-b-2xl">
            <NavLink to="/">
                <span className="text-4xl font-black tracking-tight text-foreground">
                    Open
                    <span className="text-[rgb(13,161,230)] sans-serif">Deploy</span>
                </span>
            </NavLink>

            <div className="flex items-center gap-3">
                <div className="flex items-center">
                    <IoSunnyOutline className="h-7 w-7 cursor-pointer" />
                    {/* cursor-pointer*/}
                </div>

                {/* width < 1024px <GiHamburgerMenu className="h-8 w-8" /> */}
                <NavLink
                    to="auth"
                    className="p-2.5 flex items-center gap-2 rounded-3xl text-sm font-bold text-primary-foreground"
                >
                    <IoEnterOutline className="h-7 w-7" /> <p className="text-xl">Login</p>
                </NavLink>
            </div>
        </header>
    );
};
