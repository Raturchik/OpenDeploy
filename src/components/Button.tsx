import type React from "react";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, href, onClick, className }) => {
    const basicButtonStyle =
        "px-3.75 py-1.75 flex items-center gap-1.5 rounded-4xl bg-secondary text-xs font-bold text-secondary-foreground transition-all hover:shadow-md cursor-pointer";

    return href ? (
        <Link to={href} className={twMerge(basicButtonStyle, className)}>
            {children}
        </Link>
    ) : (
        <button className={twMerge(basicButtonStyle, className)} onClick={onClick}>
            {children}
        </button>
    );
};
