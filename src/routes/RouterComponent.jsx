import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
          element: <EmployeeList />,
          errorElement: <ErrorPage />, 
        },
        {
          path: "/add",
          element: <EmployeeAdd />,
        },
        {
          path: "/delete",
          element: <EmployeeDelete />,
        },
        {
          path: "/update/:id",
          element: <EmployeeUpdate />,
        },
        {
          path: "/details/:id",
          element: <EmployeeDetails/>,
        },
        {
            path: "*",
            element: <ErrorPage />, // Catch-all route
        },
      ]);
      return (
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default RouterComponent;