import { FaPlus } from "react-icons/fa";
import { LuFilter, LuSearch } from "react-icons/lu";
import { RiResetLeftFill } from "react-icons/ri";
import { Card } from "../components/Card";
import { Button } from "../components/Button";

export const HomePage = () => {
    return (
        <main>
            <div className="m-5 container mx-auto flex justify-between">
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
                            placeholder="Search by..."
                        />
                    </div>

                    <Button filter>
                        <LuFilter />
                        Filter
                    </Button>

                    <Button reset>
                        <RiResetLeftFill />
                        Reset
                    </Button>
                </div>
                <div className="ADD">
                    <Button add>
                        <FaPlus /> Add Build
                    </Button>
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
