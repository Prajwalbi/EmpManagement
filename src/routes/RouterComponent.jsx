
import Dashboard from "@/components/Dashboard";
import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
const Layout = lazy(() => import("../components/Layout"));
const EmployeeList = lazy(() => import("../components/EmployeeList"));
const EmployeeAdd = lazy(() => import("../components/EmployeeAdd"));
const ErrorPage = lazy(() => import("../components/Error-page"));
const EmployeeDelete = lazy(() => import("../components/EmployeeDelete"));
const EmployeeUpdate = lazy(() => import("../components/EmployeeUpdate"));
const EmployeeDetails = lazy(() => import("../components/EmployeeDetails"));

const RouterComponent = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
          errorElement: <ErrorPage />, 
          children: [     
            {
                path: "dashboard",
                index: true,
                element: <Dashboard />,

            },
            {
                path: "employees",
                children: [
                    {
                        path: "",
                         element: <EmployeeList />,

                    },
                    {
                        path: "add",
                        element: <EmployeeAdd />, 
                    },
                    {
                        path: "delete",
                        element: <EmployeeDelete />, 
                    },
                    {
                        path: "update/:id",
                        element: <EmployeeUpdate />, 
                    },
                    {
                        path: "details/:id",
                        element: <EmployeeDetails />, 
                    },
                ]
            }
           
        ],
        },
      ]);
      return (
        <Suspense fallback={
        <div className="flex items-center justify-center h-screen">
            <ClimbingBoxLoader
                color= "#f97316"
                loading
                size={17}
            /> 
          </div>}  >
            <RouterProvider router={router} />
        </Suspense>
    );

  }

  export default RouterComponent;