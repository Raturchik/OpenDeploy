import type React from "react";
import { NavLink } from "react-router";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    href?: string;
    to?: string;
    onClick?: () => void;
    home?: boolean;
    login?: boolean;
    code?: boolean;
    deploy?: boolean;
    filter?: boolean;
    reset?: boolean;
    add?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    to,
    onClick,
    href,
    home,
    login,
    code,
    deploy,
    filter,
    reset,
    add,
}) => {
    if (to && home) {
        return (
            <NavLink to="/">
                {/* <span className="text-4xl font-black tracking-tight text-foreground">
                    Open
                    <span className="text-[rgb(13,161,230)] sans-serif">Deploy</span>
                </span> */}
                {children}
            </NavLink>
        );
    }
    if (to && login) {
        return (
            <NavLink
                to="auth"
                className="p-2.5 flex items-center gap-2 rounded-3xl text-sm font-bold text-primary-foreground"
            >
                {/* <IoEnterOutline className="h-7 w-7" /> <p className="text-xl">Login</p> */}
                {children}
            </NavLink>
        );
    }
    if (href && code) {
        <button className="px-3.75 py-1.75 bg-[rgb(51,204,107)] flex items-center gap-1.5 rounded-4xl bg-secondary text-xs font-bold text-secondary-foreground transition-all hover:shadow-md">
            {/* <IoMdCode /> <span>Code</span> */}
            {children}
        </button>;
    }
    if (href && deploy) {
        return (
            <button className="px-3.75 py-1.75 bg-[rgb(28,167,233)] flex items-center gap-1.5 rounded-4xl text-xs font-bold text-primary-foreground ">
                {/* <FiExternalLink /> <span>Live</span> */}
                {children}
            </button>
        );
    }
    if (filter) {
        return (
            <button
                className="py-2 px-3.75 bg-[linear-gradient(180deg,hsl(199,89%,48%,0.9),hsl(199,89%,48%))] flex items-center gap-2 rounded-4xl  text-sm font-bold text-primary-foreground"
                onClick={onClick}
            >
                {/* <LuFilter />
                Filter */}
                {children}
            </button>
        );
    }
    if (reset) {
        return (
            <button
                className="py-2 px-3.75 flex items-center gap-2 rounded-xl text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                onClick={onClick}
            >
                {/* <RiResetLeftFill />
                Reset */}
            </button>
        );
    }
    if (add) {
        return (
            <button className="p-2.5 bg-[linear-gradient(180deg,hsl(199,89%,48%,0.9),hsl(199,89%,48%))] flex items-center gap-2 rounded-3xl  text-sm font-bold text-primary-foreground">
                {/* <FaPlus /> Add Build */}
                {children}
            </button>
        );
    }
};
