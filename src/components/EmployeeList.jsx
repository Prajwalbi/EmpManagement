
import React, { useEffect, useState, useRef } from "react";
import { getEmployees, deleteEmployee } from "../services/employeeService";
import { useNavigate , Link} from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css"; 
import menuIcon from "../../src/assets/menu.png"; 
import ErrorPage from "./Error-page";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees, removeEmployee } from "../slices/employeeSlice";
import { Search } from "lucide-react";
import ConfirmDialog from "./ConfirmDialog";
import { ClimbingBoxLoader } from "react-spinners";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {employees, loading , error} = useSelector((state) => state.employees);
  const [rowData, setRowData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const menuRef = useRef(null); 
  const pagination = true;
  const paginationPageSize = 25;
  const paginationPageSizeSelector = [25, 50, 100];
  const [searchInput, setSearchInput] = useState("");
  const [isDeleteDialogOpen, setIsDeleteDailogOpen] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleUpdate = (id) => {
    navigate(`/employees/update/${id}`);
    setSelectedRow(null); 
  };



//  const handleDelete = (id) => {
  
  
//   if (window.confirm('Are you sure you want to delete this employee?')) {
//     dispatch(removeEmployee(id)); 
//   }
//   setSelectedRow(null);
//  }
const handleDelete = (id) => {
  setEmployeeToDelete(id);
  setIsDeleteDailogOpen(true);
}

const confirmDelete = () => {
    // dispatch(removeEmployee(id)); 
    dispatch(removeEmployee(employeeToDelete));
    setIsDeleteDailogOpen(false);
    setEmployeeToDelete(null);
}
const cancelDelete = () => {
  setIsDeleteDailogOpen(false);
  setEmployeeToDelete(null);
};

const handleAddNewEmployee = () => {
  navigate("/employees/add");
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
        to={`/employees/details/${params.data.Id}`} // Navigate to details page with ID
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

  
  if (loading) return (<div className="flex items-center justify-center h-screen">
  <ClimbingBoxLoader
      color= "#f97316"
      loading
      size={17}
  /> 
</div>);
  if (error) return <ErrorPage />

  return (
    <div className="px-4 py-2">
      <div className="flex justify-between items-center  py-2">
        <p className="text-2xl font-bold ">Employee List</p>
        <button className="py-2 px-4 bg-[#6264A7] text-white rounded-md" 
        // <button className="py-2 px-4 bg-purple-500 text-white rounded-md" 
          onClick={ handleAddNewEmployee }
        >+ Add New Employee</button>

      </div>
      <div className="ag-theme-quartz my-7" style={{ height: 500 }}>

        <div className="p-2 rounded-lg border
         shadow-sm flex gap-2 mb-4 max-w-sm">
            <Search  />
            <input 
            type="text" 
            placeholder="Search on Anything..." 
            className="outline-none w-full"
            value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
            />
        </div>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          quickFilterText={searchInput}
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
      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        title="Delete Employee"
        message="Are you sure you want to delete this employee? This action cannot be undone."
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
};

export default EmployeeList;
