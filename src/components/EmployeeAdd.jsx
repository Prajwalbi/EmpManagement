import React, { useState } from 'react';
import { addEmployee ,getEmployees} from '../services/employeeService';
import { Link } from 'react-router-dom';


const EmployeeAdd = () => {

    const [employees, setEmployees] = useState(getEmployees());
    const [name,setName] = useState("");
    const [position,setPosition] = useState("");
    const [department,setDepartment] = useState("");

    const handleAddEmployee = (e) => {
        e.preventDefault();
        const obj1 = {
            name: name,
            position: position,
            department: department
        };
        const obj2 = addEmployee(obj1);
        setEmployees(getEmployees()); 

        console.log(obj2); 
        setName("");
        setPosition("");
        setDepartment("");          
    }
    return(
        <div>
            <h3>Add Employee</h3>
             <form onSubmit={handleAddEmployee}>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                />
                
                <input
                    type="text"
                    name="position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    placeholder="Position"
                    required
                />
                <input
                    type="text"
                    name="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="Department"
                    required
                />
                <button type="submit">Add Employee</button>
            </form>
            <br />
                <Link to="/" >
                <button> &#8592; Back to Home Page &#8594;</button>
                </Link>
        </div>
    )
}

export default EmployeeAdd;
    