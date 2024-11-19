// // import React,{useEffect, useMemo, useState} from 'react';
// // import { getEmployees,deleteEmployee } from '../services/employeeService';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
// // import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
// // import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
// // import menuIcon from "../../src/assets/menu.png";

// // const EmployeeList = () =>
// //  {
// //     const navigate = useNavigate();
// //     const [employees, setEmployees] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);

// //     useEffect(() => {
// //         const fetchData = async () => {
// //             try{
// //                 const data = await getEmployees();
// //                 if(data){
// //                     setEmployees(data.employees);
// //                 }
// //             }catch(error){
// //                 setError(error.message);
// //             }finally{
// //                 setLoading(false);
// //             }
// //         }
// //         fetchData();
// //     }, []);

// //     const handleEmployeeClick = (id) => {
// //         navigate(`/details/${id}`);
// //     };

// //     const handleDelete = (id) => {
// //         if (deleteEmployee(id)) {
// //             setEmployees(employees.filter(emp => emp.id !== id));
// //             alert(`Employee with ID ${id} has been deleted.`);
// //         } else {
// //             alert("Failed to delete employee.");
// //         }
// //     };

// //     const pagination = true;
// //     const paginationPageSize = 25;
// //     const paginationPageSizeSelector = [25, 50, 100];
// //     const CustomButtonComponent = (props) => {
// //         return <button onClick={() => window.alert('clicked') }>Push Me!</button>;
// //       };

 

    

// //     // Row Data: The data to be displayed.
// //     const [rowData, setRowData] = useState([]);
// //      // Define custom cell renderer for actions
// //   const ActionCellRenderer = (params) => {
// //     return (
// //       <div className="flex items-center space-x-2">
// //         <img
// //           src="../../src/assets/menu.png"
// //           alt="Menu"
// //           width={25}
// //           height={25}
// //           onClick={() => alert(`Clicked on ${params.data.Name}`)}
// //           style={{ cursor: "pointer" }}
// //         />
// //       </div>
// //     );
// //   };
// //     // Column Definitions: Defines the columns to be displayed.
// //     const [colDefs, setColDefs] = useState([
// //         // { field: "id" , flex: 2 , filter: true, floatingFilter: true },
// //         // { field: "Actions", cellRenderer: CustomButtonComponent , flex: 1}

// //         { field: "Id" , flex: 1},
// //         { field: "Name" , flex: 1},
// //         { field: "Department", flex: 1 },
// //         { field: "Position" , flex: 1},
// //         { 
// //             field: "Actions" , 
// //             flex: 1,
// //             cellRendererFramework: ActionCellRenderer,
// //         },
// //     ]);

// //     useEffect(() => {
// //         if (employees.length > 0) {
// //             const resultantTableRow = employees.map((employee) => ({
// //                 Id: employee.id,
// //                 Name: employee.name,
// //                 Department: employee.department,
// //                 Position: employee.position,
// //                 Actions: "",
// //                 Status: employee.status,
// //             }));
// //             setRowData(resultantTableRow);
// //         }
// //     }, [employees]);
// //     console.log("table row data ", rowData);

// //     if (loading) {
// //         return <div>Loading...</div>;
// //     }

// //     if (error) {
// //         return <div>Error: {error}</div>;
// //     }



// //     return (
// //         <div>
// //             <p className=" text-2xl font-bold m-4">Employee List</p>
// //             <img src="../../src/assets/menu.png" height={15} width={15} alt="" />
// //             <div
// //             className="ag-theme-quartz" // applying the Data Grid theme
// //             style={{ height: 500 }} 
// //             >
// //             <AgGridReact
// //                 rowData={rowData}
// //                 columnDefs={colDefs}
// //                 pagination={pagination}
// //                 paginationPageSize={paginationPageSize}
// //                 paginationPageSizeSelector={paginationPageSizeSelector}
// //                 suppressCellSelection={true}
// //             />
// //             </div>
// //         </div>
// //     );

// //     };

// // export default EmployeeList;


// import React, { useEffect, useState } from "react";
// import { getEmployees, deleteEmployee } from "../services/employeeService";
// import { useNavigate } from "react-router-dom";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-quartz.css"; 
// import menuIcon from "../../src/assets/menu.png"; 

// const EmployeeList = () => {
//   const navigate = useNavigate();
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getEmployees();
//         if (data) {
//           setEmployees(data.employees);
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleDelete = (id) => {
//     if (deleteEmployee(id)) {
//       setEmployees(employees.filter((emp) => emp.id !== id));
//       alert(`Employee with ID ${id} has been deleted.`);
//     } else {
//       alert("Failed to delete employee.");
//     }
//   };

//   const handleEmployeeClick = (id) => {
//     navigate(`/details/${id}`);
//   };

//   const handleActionCell = (params) => {
//     alert(`cilcked on ${params.data.Id}`)
//   }

//   // Define custom cell renderer for actions
//   const ActionCellRenderer = (params) => {
//     return <div className="flex items-center m-2 space-x-2">
//           <img
//             src={menuIcon}
//             alt="Menu"
//             width={15}
//             height={15}
//             onClick={() => handleActionCell(params)}
//             style={{ cursor: "pointer" }}
//           />
//         </div>
//   };
 

//   // Column Definitions
//   const [colDefs] = useState([
//     { field: "Id", flex: 1 },
//     { field: "Name", flex: 1 },
//     { field: "Department", flex: 1 },
//     { field: "Position", flex: 1 },
//     {
//       field: "Actions",
//       flex: 1,
//       cellRenderer: ActionCellRenderer, // Use the custom renderer
//     },
//     // {field: "button", cellRenderer: ActionCellRenderer}
//   ]);

 
//   // Row Data
//   useEffect(() => {
//     if (employees.length > 0) {
//       const resultantTableRow = employees.map((employee) => ({
//         Id: employee.id,
//         Name: employee.name,
//         Department: employee.department,
//         Position: employee.position,
//         Actions: "", // Placeholder, handled by custom renderer
//       }));
//       setRowData(resultantTableRow);
//     }
//   }, [employees]);

//   const [rowData, setRowData] = useState([]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <p className="text-2xl font-bold m-4">Employee List</p>
//       <div className="ag-theme-quartz" style={{ height: 500 }}>
//         <AgGridReact
//           rowData={rowData}
//           columnDefs={colDefs}
//           pagination={true}
//           paginationPageSize={25}
//           suppressCellSelection={true} // Disables the border highlight on cell selection
//         />
//       </div>
//     </div>
//   );
// };

// export default EmployeeList;


// import React,{useEffect, useMemo, useState} from 'react';
// import { getEmployees,deleteEmployee } from '../services/employeeService';
// import { Link, useNavigate } from 'react-router-dom';
// import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
// import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
// import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
// import menuIcon from "../../src/assets/menu.png";

// const EmployeeList = () =>
//  {
//     const navigate = useNavigate();
//     const [employees, setEmployees] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try{
//                 const data = await getEmployees();
//                 if(data){
//                     setEmployees(data.employees);
//                 }
//             }catch(error){
//                 setError(error.message);
//             }finally{
//                 setLoading(false);
//             }
//         }
//         fetchData();
//     }, []);

//     const handleEmployeeClick = (id) => {
//         navigate(`/details/${id}`);
//     };

//     const handleDelete = (id) => {
//         if (deleteEmployee(id)) {
//             setEmployees(employees.filter(emp => emp.id !== id));
//             alert(`Employee with ID ${id} has been deleted.`);
//         } else {
//             alert("Failed to delete employee.");
//         }
//     };

//     const pagination = true;
//     const paginationPageSize = 25;
//     const paginationPageSizeSelector = [25, 50, 100];
//     const CustomButtonComponent = (props) => {
//         return <button onClick={() => window.alert('clicked') }>Push Me!</button>;
//       };

 

    

//     // Row Data: The data to be displayed.
//     const [rowData, setRowData] = useState([]);
//      // Define custom cell renderer for actions
//   const ActionCellRenderer = (params) => {
//     return (
//       <div className="flex items-center space-x-2">
//         <img
//           src="../../src/assets/menu.png"
//           alt="Menu"
//           width={25}
//           height={25}
//           onClick={() => alert(`Clicked on ${params.data.Name}`)}
//           style={{ cursor: "pointer" }}
//         />
//       </div>
//     );
//   };
//     // Column Definitions: Defines the columns to be displayed.
//     const [colDefs, setColDefs] = useState([
//         // { field: "id" , flex: 2 , filter: true, floatingFilter: true },
//         // { field: "Actions", cellRenderer: CustomButtonComponent , flex: 1}

//         { field: "Id" , flex: 1},
//         { field: "Name" , flex: 1},
//         { field: "Department", flex: 1 },
//         { field: "Position" , flex: 1},
//         { 
//             field: "Actions" , 
//             flex: 1,
//             cellRendererFramework: ActionCellRenderer,
//         },
//     ]);

//     useEffect(() => {
//         if (employees.length > 0) {
//             const resultantTableRow = employees.map((employee) => ({
//                 Id: employee.id,
//                 Name: employee.name,
//                 Department: employee.department,
//                 Position: employee.position,
//                 Actions: "",
//                 Status: employee.status,
//             }));
//             setRowData(resultantTableRow);
//         }
//     }, [employees]);
//     console.log("table row data ", rowData);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }



//     return (
//         <div>
//             <p className=" text-2xl font-bold m-4">Employee List</p>
//             <img src="../../src/assets/menu.png" height={15} width={15} alt="" />
//             <div
//             className="ag-theme-quartz" // applying the Data Grid theme
//             style={{ height: 500 }} 
//             >
//             <AgGridReact
//                 rowData={rowData}
//                 columnDefs={colDefs}
//                 pagination={pagination}
//                 paginationPageSize={paginationPageSize}
//                 paginationPageSizeSelector={paginationPageSizeSelector}
//                 suppressCellSelection={true}
//             />
//             </div>
//         </div>
//     );

//     };

// export default EmployeeList;
import React, { useEffect, useState, useRef } from "react";
import { getEmployees, deleteEmployee } from "../services/employeeService";
import { useNavigate , Link} from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css"; 
import menuIcon from "../../src/assets/menu.png"; 
import ErrorPage from "./Error-page";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rowData, setRowData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const menuRef = useRef(null); 
  const pagination = true;
  const paginationPageSize = 25;
  const paginationPageSizeSelector = [25, 50, 100];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEmployees();
        if (data) {
          setEmployees(data.employees);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = (id) => {
    alert(`Update Employee with ID: ${id}`);
    
    setSelectedRow(null); 
  };



  const handleDelete = (id) => {
    alert(`Update Employee with ID: ${id}`);
    
  if (deleteEmployee(id)) {
      setEmployees(employees.filter(emp => emp.id !== id));
      alert(`Employee with ID ${id} has been deleted.`);
      setSelectedRow(null); // Close the options menu
  } else {
      alert("Failed to delete employee.");
  }
};

const handleAddNewEmployee = () => {
  navigate("/add");
}
  const handleActionCell = (params, event) => {
    if (!event) {
      console.error("Event is undefined");
      return;
    }

    // Set the currently selected row's ID and position
    setSelectedRow({
      id: params.data.Id,
      position: event.target.getBoundingClientRect(), // Get the clicked cell's position
    });
  };

  const NameCellRenderer = (params) => {
    return (
      <Link
        to={`/details/${params.data.Id}`} // Navigate to details page with ID
        className="text-blue-500  hover:text-blue-700 "
      >
        {params.data.Name}
      </Link>
    );
  };

  // Define custom cell renderer for actions
  const ActionCellRenderer = (params) => {
    return (
      <div className="flex items-center m-2 space-x-2">
        <img
          src={menuIcon}
          alt="Menu"
          width={15}
          height={15}
          onClick={(event) => handleActionCell(params, event)} // Pass the event explicitly
          style={{ cursor: "pointer" }}
        />
      </div>
    );
  };

  const [colDefs] = useState([
    { field: "Id", flex: 1 },
    {
      field: "Name",
      flex: 1,
      cellRenderer: NameCellRenderer, // Use custom renderer for Name
    },
    { field: "Department", flex: 1 },
    { field: "Position", flex: 1 },
    {
      field: "Actions",
      flex: 1,
      cellRenderer: ActionCellRenderer,
    },
  ]);

  // Set row data
  useEffect(() => {
    if (employees.length > 0) {
      const resultantTableRow = employees.map((employee) => ({
        Id: employee.id,
        Name: employee.name,
        Department: employee.department,
        Position: employee.position,
        Actions: "", // Placeholder, handled by custom renderer
      }));
      setRowData(resultantTableRow);
    }
  }, [employees]);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSelectedRow(null); // Close the menu
      }
    };

    // Attach event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  
  if (loading) return <div>Loading...</div>;
  if (error) return <ErrorPage />

  return (
    <div className="px-4 py-2">
      <div className="flex justify-between items-center  py-2">
        <p className="text-2xl font-bold ">Employee List</p>
        <button className="py-2 px-4 bg-[#6264A7] text-white rounded-md" 
          onClick={ handleAddNewEmployee }
        >Add New Employee</button>

      </div>
      <div className="ag-theme-quartz" style={{ height: 500 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
          suppressCellSelection={true} // Disables the border highlight on cell selection
        />
      </div>
      {selectedRow && (
        <div
          ref={menuRef} // Attach the ref to the menu div
          className="absolute bg-white border shadow-lg p-2"
          style={{
            top: selectedRow.position.top + window.scrollY,
            left: selectedRow.position.left + 20, // Slightly offset to the right
          }}
        >
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => handleUpdate(selectedRow.id)}
          >
            Update Employee
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => handleDelete(selectedRow.id)}
          >
            Delete Employee
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
