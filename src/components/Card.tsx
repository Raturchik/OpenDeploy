import { FiExternalLink } from "react-icons/fi";
import { IoMdCode } from "react-icons/io";

export const Card = () => {
    return (
        <div>
            <h3>Name</h3>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, nostrum!
            </p>
            <span>react.js</span>
            <span>Node.js</span>
            <div className="">
                <a href=""></a>
                <div className="">
                    <button>
                        <IoMdCode /> <span>Code</span>
                    </button>
                    <button>
                        <FiExternalLink /> <span>Live</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
