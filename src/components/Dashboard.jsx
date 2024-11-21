import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import {  LampIcon, LayoutIcon, Settings } from "lucide-react";
import { employees } from "@/services/employeeService";

const Dashboard = () => {

    return (
    <div>
        <div className="md:w-64 fixed hidden md:block ">
            <SideNav />
        </div>
        <div className="md:ml-64">
            <Outlet />
        </div>


    </div>);
}

export default Dashboard;