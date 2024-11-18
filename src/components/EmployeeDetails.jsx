import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployees } from '../services/employeeService';
import { Link, useNavigate } from 'react-router-dom';


const EmployeeDetails = () => {
    const navigate = useNavigate();
    const  { id } = useParams();
    const employeeid = parseInt(id);
    const employees = getEmployees();
    const employee = employees.find(emp => emp.id == employeeid);
    if(!employee){
        return <div>No employee found with id no {employeeid}</div>
    }

    const handleUpdate = () => {
           navigate(`/update/${id}`)
    }
  return(
    <div>
        <h2>Employee Details</h2>
        <h3>Employee id : {id}</h3>
        <p><strong>Name :</strong>{employee.name}</p>
        <p><strong>Position : </strong>{employee.position}</p>
        <p><strong>Department : </strong>{employee.department}</p>
        <p><strong>Email : </strong>{employee.email}</p>
        <p><strong>Contact :  </strong>{employee.contact}</p>
        <p><strong>Address : </strong>{employee.address}</p>
        <button onClick={() => handleUpdate()}>Update Employee</button>
    </div>
  )
}

export default EmployeeDetails;