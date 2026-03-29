import { IoSunnyOutline } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
import { IoEnterOutline } from "react-icons/io5";
import { Button } from "./Button";

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full shadow-lg flex justify-between items-center bg-white rounded-b-2xl px-2 py-4 mb-7.5">
            <Button href="/" className="">
                <span className="text-2xl font-black tracking-tight text-foreground xs:text-3xl md:text-4xl">
                    Open
                    <span className="text-[rgb(13,161,230)] sans-serif">Deploy</span>
                </span>
            </Button>

            <div className="flex items-center gap-3">
                <div className="flex items-center">
                    <IoSunnyOutline className="h-6 w-6 cursor-pointer" />
                </div>

                {/* width < 1024px <GiHamburgerMenu className="h-8 w-8" /> */}
                <Button
                    href="auth"
                    className="p-2.5 flex items-center gap-2 rounded-3xl text-sm font-bold text-primary-foreground"
                >
                    <IoEnterOutline className="h-7 w-7" />{" "}
                    <p className="hidden text-xl sm:block">Login</p>
                </Button>
            </div>
        </header>
    );
};
