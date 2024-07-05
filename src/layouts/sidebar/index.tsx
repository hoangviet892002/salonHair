
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    type menu = {
        title: string,
        Url: string,

    }

    const Menu: menu[] = [
        {
            title: "Dashboard",
            Url: "/dashboard"

        },
        {
            title: "Product",
            Url: "/product"
        },
        {
            title: "Favourite",
            Url: "/favourite"
        },
        {
            title: "Danh sách tiệm",
            Url: "/shopkeeper"
        },
        {
            title: "Danh sách đơn",
            Url: "/bill"
        }

    ]
    return (
        <div className="w-1/5 bg-[#987070]  h-auto rounded-lg  ">
            <div className="">
                <ul className="py-4 text-center">
                    {Menu.map((menu, index) => (
                        <li className="px-4 py-2 text-white hover:text-[#FFE5EC] hover:bg-[#604646]">
                            <NavLink to={menu.Url} className={({ isActive }) => isActive ? "bg-[#604646]" : ""}>{menu.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="h-[2px] w-full bg-[#604646]">

            </div>

            <div className="p-6 text-white ">Page</div>
            <ul className="py-4 text-center">
                <li className="px-4 py-2  text-white  hover:text-[#FFE5EC] hover:bg-[#604646]">
                    <a href="#" className="block">Calender</a>
                </li>

                <li className="px-4 py-2  text-white  hover:text-[#FFE5EC] hover:bg-[#604646]">
                    <a href="#" className="block">To do</a>
                </li>

                <li className="px-4 py-2  text-white  hover:text-[#FFE5EC] hover:bg-[#604646]">
                    <a href="#" className="block">Contact</a>
                </li>
            </ul>

            <div className="h-[2px] w-full bg-[#604646]"></div>
            <div className="">
                <ul className="py-4 text-center">
                    <li className="px-4 py-2  text-white  hover:text-[#FFE5EC] hover:bg-[#604646]">
                        <a href="#" className="block">Setting</a>
                    </li>

                    <li className="px-4 py-2  text-white  hover:text-[#FFE5EC] hover:bg-[#604646]">
                        <a href="#" className="block">Log out</a>
                    </li>
                </ul>
            </div>
            <br />

        </div>
    );
};
export default Sidebar;