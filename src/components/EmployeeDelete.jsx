import React, { useState } from 'react';
import { getEmployees,deleteEmployee} from '../services/employeeService';
import { Link } from 'react-router-dom';


const EmployeeDelete = () => {
  
const [deleteId, setDeleteId] = useState("");
const [employees, setEmployees] = useState(getEmployees());

    const handleDeleteEmployee = (e) => {
        e.preventDefault();
        const IdToDelete = parseInt(deleteId);
        if(deleteEmployee(IdToDelete)){
            setEmployees(getEmployees());
           console.log(`employee with ${IdToDelete} deleted`);

        } 
        else{
            console.log("employee not found");
        }
        setDeleteId('');
    }

    return(
        <div>
           <h3>Delete Employee</h3>
            <form onSubmit={handleDeleteEmployee}>
                <input
                    type="text"
                    name="deleteId"
                    value={deleteId}
                    onChange={(e) => setDeleteId(e.target.value)}
                    placeholder="Enter Emp ID to delete"
                    required
                />
                <button type='submit'>Delete Employee By ID</button>
            </form>
            <br />
             <Link to="/" >
            <button> &#8592; Back to Home Page &#8594;</button>
            </Link>
        </div>
    )
}
export default EmployeeDelete;