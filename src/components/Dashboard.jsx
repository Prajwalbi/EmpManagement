import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import {  LampIcon, LayoutIcon, Settings } from "lucide-react";
import { employees } from "@/services/employeeService";
import Header from "./Header";

const Dashboard = () => {

    return (
    <div>
        {/* <div className="md:w-64 fixed hidden md:block ">
            <SideNav />
        </div>
        <div className="md:ml-64">
            <Header />
            <Outlet />
        </div> */}

        <h1>Dashboard guys</h1>
    </div>);
}

export default Dashboard;