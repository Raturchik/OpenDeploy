import { FiExternalLink } from "react-icons/fi";
import { IoMdCode } from "react-icons/io";

export const Card = () => {
    return (
        <div style={{ padding: "15px" }} className="bg-white rounded-3xl ">
            <h3 className="text-lg font-extrabold text-foreground">Name</h3>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, nostrum!
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="rounded-lg px-2.5 py-1 text-xs font-bold ">
                    react.js
                </span>
                <span className=" rounded-lg px-2.5 py-1 text-xs font-bold ">
                    Node.js
                </span>
            </div>
            <div className="flex">
                <a href="" className="flex gap-3">
                    <img src="asdf" alt="photo" />
                    Author
                </a>
                <div className="flex gap-2.5">
                    <button
                        style={{ padding: "7px 15px" }}
                        className=" bg-[rgb(51,204,107)] flex items-center gap-1.5 rounded-4xl bg-secondary px-3 py-1.5 text-xs font-bold text-secondary-foreground transition-all hover:shadow-md"
                    >
                        <IoMdCode /> <span>Code</span>
                    </button>
                    <button
                        style={{ padding: "7px 15px" }}
                        className="bg-[rgb(28,167,233)] flex items-center gap-1.5 rounded-4xl  py-1.5 text-xs font-bold text-primary-foreground "
                    >
                        <FiExternalLink /> <span>Live</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
