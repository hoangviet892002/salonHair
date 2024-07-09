import { NavLink } from "react-router-dom";

const SidebarAdmin = () => {
    type menu = {
        title: string,
        Url: string,
    };

    const Menu: menu[] = [
        {
            title: "Dashboard",
            Url: "/dashboard"

        },
        {
            title: "Danh sách User",
            Url: "/"
        },
        {
            title: "Danh sách salon",
            Url: "/"
        },
        {
            title: "Yêu cầu thêm tiệm",
            Url: "/permission"
        },
        

    ]
    return (
        <div className="w-1/5 bg-[#987070]  h-auto rounded-lg  ">
            <div className="">
                <ul className="py-4 text-center">
                    {Menu.map((menu, index) => (
                        <li className="px-4 py-2 text-white hover:text-[#FFE5EC] hover:bg-[#604646] ">
                            <NavLink to={menu.Url} className={({ isActive }) => isActive ? "bg-[#604646]" : ""}>{menu.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="h-[2px] w-full bg-[#604646]"></div>

            <div className="p-6 text-white">Page</div>
            <ul className="py-4 text-center">
                <li className="px-4 py-2 text-white hover:text-[#FFE5EC] hover:bg-[#604646]">
                    <a href="#" className="block">Calender</a>
                </li>
                <li className="px-4 py-2 text-white hover:text-[#FFE5EC] hover:bg-[#604646]">
                    <a href="#" className="block">To do</a>
                </li>
                <li className="px-4 py-2 text-white hover:text-[#FFE5EC] hover:bg-[#604646]">
                    <a href="#" className="block">Contact</a>
                </li>
            </ul>

            <div className="h-[2px] w-full bg-[#604646]"></div>

            <div>
                <ul className="py-4 text-center">
                    <li className="px-4 py-2 text-white hover:text-[#FFE5EC] hover:bg-[#604646]">
                        <a href="#" className="block">Setting</a>
                    </li>
                    <li className="px-4 py-2 text-white hover:text-[#FFE5EC] hover:bg-[#604646]">
                        <a href="#" className="block">Log out</a>
                    </li>
                </ul>
            </div>

            <br />
        </div>
    );
};

export default SidebarAdmin;
