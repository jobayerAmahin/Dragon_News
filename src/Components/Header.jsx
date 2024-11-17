import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="py-8">
            <div className="flex flex-col justify-center items-center gap-4">
                <img className="w-[300px]" src={logo} alt="" />
                <h1>Explore for your strength</h1>
                <p className="font-bold">{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;