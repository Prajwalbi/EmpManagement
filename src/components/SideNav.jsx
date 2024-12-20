import { LampIcon, LayoutIcon, Settings } from "lucide-react";
import logo2 from "../../src/assets/logo2.svg"; 
import { NavLink, useLocation } from "react-router-dom";
const SideNav = () => {
    const location = useLocation();
    const menuList = [
        {
            id: 1,
            name: 'Dashboard',
            icon: LayoutIcon,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Employees',
            icon: LampIcon,
            path: '/employees'
        },
        {
            id: 3,
            name: 'Departments',
            icon: LampIcon,
            path: '/departments'
        },
        {
            id: 4,
            name: 'Settings',
            icon: Settings,
            path: '/settings'
        },
    ]

    return (
    <div className="border shadow-md h-screen p-5">
        <img src= {logo2} alt="logo" width={180} height={50} />

        <hr className="my-5"/>
        {/* {menuList.map((menu, index) => (
            <h2 className="flex items-center gap-3 text-md p-4
             text-slate-500
             hover:bg-[#6264A7]
             hover:text-white
             cursor-pointer
             rounded-lg
             my-2
            "  id="index">
                <menu.icon />
                {menu.name}
            </h2>
        ))} */}
        {menuList.map((menu) => (
            <NavLink
                to={menu.path}
                key={menu.id}
                className={({ isActive }) =>
                    `flex items-center gap-3 text-md p-4 
                    cursor-pointer rounded-lg my-2 ${
                        isActive
                            ? "bg-[#6264A7] text-white"
                            : "text-slate-500 hover:bg-[#6264A7] hover:text-white"
                    }`
                }
            >
                <menu.icon />
                {menu.name}
            </NavLink>
        ))}
        <div className="flex gap-2 items-center bottom-5 fixed ">
             <div className="flex items-center justify-center rounded-full w-10 h-10  bg-blue-500 text-white font-bold">
            D
            </div>
             <div>
                <h2 className="text-sm font-bold">Divish Raj</h2>
                <h2 className="text-xs text-slate-400">divish727@gmail.com</h2>
             </div>
        </div>
    </div>
    );
}

export default SideNav;