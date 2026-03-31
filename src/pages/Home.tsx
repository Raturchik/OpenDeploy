import { FaPlus } from "react-icons/fa";
import { LuFilter, LuSearch } from "react-icons/lu";
import { RiResetLeftFill } from "react-icons/ri";
import { Card } from "../components/Card";
import { Button } from "../components/Button";

export const HomePage = () => {
    return (
        <main className="mx-auto">
            <div className="flex flex-row gap-1.5 items-center justify-between w-[90%] mx-auto mb-7.5">
                <div className="flex items-center rounded-xl">
                    <select className="px-0.75 py-2.5 bg-white text-sm font-semibold rounded-4xl text-foreground outline-none">
                        <option value="">Title</option>
                        <option value="">Author</option>
                        <option value="">Tag</option>
                    </select>
                </div>
                <div className="bg-white flex flex-1 items-center gap-1 rounded-3xl px-0.5 py-2.5">
                    <LuSearch className="ml-1 xs:mx-2" size={14} />
                    <input
                        className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground focus:outline-none px-2"
                        type="search"
                        name=""
                        id=""
                        placeholder="Search by..."
                    />
                </div>

                <Button className="py-3 px-2.5 bg-[linear-gradient(180deg,hsl(199,89%,48%,0.9),hsl(199,89%,48%))]">
                    <LuFilter />
                    <p className="hidden sm:block">Filter</p>
                </Button>

                <Button className="py-3 px-2.5 rounded-xl text-sm font-semibold hover:shadow-none">
                    <RiResetLeftFill />
                    <p className="hidden text- sm:block">Reset</p>
                </Button>
                <Button className="py-3 px-2.5 rounded-3xl  hover:shadow-md bg-[linear-gradient(180deg,hsl(199,89%,48%,0.9),hsl(199,89%,48%))]">
                    <FaPlus /> <p className="hidden sm:block">Add Build</p>
                </Button>
            </div>

            <div className="container mx-auto grid gap-5 max-w-[90%] md:grid-cols-2 lg:grid-cols-3">
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
