import { FaPlus } from "react-icons/fa";
import { LuFilter, LuSearch } from "react-icons/lu";
import { RiResetLeftFill } from "react-icons/ri";
import { Card } from "../components/Card";

export const HomePage = () => {
    return (
        <main>
            <div className="container mx-auto flex ">
                <div className="flex gap-10">
                    <div className="bg-[200, 60%, 98%] flex items-center gap-2 rounded-xl ">
                        <select className="px-3.75 py-2.5 bg-white text-sm font-semibold rounded-4xl text-foreground outline-none">
                            <option value="">Title</option>
                            <option value="">Author</option>
                            <option value="">Tag</option>
                        </select>
                    </div>
                    <div className="bg-white flex flex-1 items-center gap-2 rounded-3xl px-4 py-2.5 min-w-96 max-w-md ">
                        <LuSearch className="mx-2.5 my-0" />
                        <input
                            className=" flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground focus:outline-none"
                            type="search"
                            name=""
                            id=""
                            placeholder="PODSPOD"
                        />
                    </div>

                    <button className="py-2 px-3.75 bg-[linear-gradient(180deg,hsl(199,89%,48%,0.9),hsl(199,89%,48%))] flex items-center gap-2 rounded-4xl  text-sm font-bold text-primary-foreground">
                        <LuFilter />
                        Filter
                    </button>

                    <button className="py-2 px-3.75 flex items-center gap-2 rounded-xl text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
                        <RiResetLeftFill />
                        Reset
                    </button>
                </div>
                <div className="ADD">
                    <button className="p-2.5 bg-[linear-gradient(180deg,hsl(199,89%,48%,0.9),hsl(199,89%,48%))] flex items-center gap-2 rounded-3xl  text-sm font-bold text-primary-foreground">
                        <FaPlus /> Add Build
                    </button>
                </div>
            </div>
            <div className="container mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </main>
    );
};
