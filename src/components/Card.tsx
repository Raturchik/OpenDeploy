import { FiExternalLink } from "react-icons/fi";
import { IoMdCode } from "react-icons/io";

export const Card = () => {
    return (
        <div className="p-3.75 bg-white rounded-3xl shadow-sm transform transition-all duration-400 ease-in-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg">
            <h3 className="text-lg font-extrabold text-foreground">Name</h3>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nostrum
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="rounded-lg px-2.5 py-1 text-xs font-bold ">react.js</span>
                <span className=" rounded-lg px-2.5 py-1 text-xs font-bold ">Node.js</span>
            </div>
            <div className="flex justify-between items-center">
                <a href="" className="flex gap-3">
                    <img src="asdf" alt="photo" />
                    Author
                </a>
                <div className="flex gap-2.5">
                    <button className="px-3.75 py-1.75 bg-[rgb(51,204,107)] flex items-center gap-1.5 rounded-4xl bg-secondary text-xs font-bold text-secondary-foreground transition-all hover:shadow-md">
                        <IoMdCode /> <span>Code</span>
                    </button>
                    <button className="px-3.75 py-1.75 bg-[rgb(28,167,233)] flex items-center gap-1.5 rounded-4xl text-xs font-bold text-primary-foreground ">
                        <FiExternalLink /> <span>Live</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
