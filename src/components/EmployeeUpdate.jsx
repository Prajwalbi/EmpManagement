
import React, { useState,useEffect, } from 'react';
import { getEmployees, updateEmployee } from '../services/employeeService';
import { Link, useParams,useNavigate } from 'react-router-dom';

const EmployeeUpdate = () => {
    const [employeeId, setEmployeeId] = useState("");
    const [employeeData, setEmployeeData] = useState({ name: "", position: "", department: "" ,email: "",contact: "",address: ""});
    const [message, setMessage] = useState("");
    const  { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        const employeeId = parseInt(id);
        const employee = getEmployees().find(emp => emp.id === employeeId);
        if (employee) {
            setEmployeeData(employee);
            setMessage(""); 
        } else {
            setMessage("No employee found with this ID.");
        }
    }, [id]); 


  
    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedEmployee = updateEmployee(parseInt(id), employeeData);
        
        if (updatedEmployee) {
            alert(`Employee with ID ${employeeId} updated successfully!`);
           
            setEmployeeId('');
            setEmployeeData({ name: "", position: "", department: "" ,email: "",contact: "",address: ""});
            setMessage("");
            navigate(`/details/${id}`);
        } else {
            alert("Failed to update employee.");
        }
    };

    return (
        <div>
            <h2>Update Employee</h2>
            
            {message && <p>{message}</p>}
            
            {employeeData.id && (
                <form onSubmit={handleUpdate}>
                    <input 
                        type="text" 
                        value={employeeData.name} 
                        onChange={(e) => setEmployeeData({ ...employeeData, name: e.target.value })} 
                        placeholder="Name" 
                    />
                    <input 
                        type="text" 
                        value={employeeData.position} 
                        onChange={(e) => setEmployeeData({ ...employeeData, position: e.target.value })} 
                        placeholder="Position" 
                    />
                    <input 
                        type="text" 
                        value={employeeData.department} 
                        onChange={(e) => setEmployeeData({ ...employeeData, department: e.target.value })} 
                        placeholder="Department"
                    />
                    <input
                        type="text"
                        value={employeeData.email}
                        onChange={(e) => setEmployeeData({...employeeData,email: e.target.value})}
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        value={employeeData.contact}
                        onChange={(e) => setEmployeeData({...employeeData,contact: e.target.value})}
                        placeholder="Contact"
                    />
                    <input
                        type="text"
                        value={employeeData.address}
                        onChange={(e) => setEmployeeData({...employeeData,contact: e.target.value})}
                        placeholder="Address"
                    />
                        
                    <button type='submit'>Update Employee</button>
                </form>
            )}

            <br />
            <Link to="/">
                <button> &#8592; Back to Home Page &#8594;</button>
            </Link>
        </div>
    );
};

export default EmployeeUpdate;