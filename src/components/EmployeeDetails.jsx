// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getEmployees } from '../services/employeeService';
// import { Link, useNavigate } from 'react-router-dom';


// const EmployeeDetails = () => {
//     const navigate = useNavigate();
//     const  { id } = useParams();
//     const employeeid = parseInt(id);
//     const [employees, setEmployees] = useState([]);

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const data = await getEmployees();
//           if (data) {
//             setEmployees(data.employees);
//           }
//         } catch (error) {
//           setError(error.message);
//         } finally {
//           setLoading(false);
//         }
//       };
//       fetchData();
//     }, []);
//     const employee = employees.find(emp => emp.id == employeeid);

//     if(!employee){
//         return <div>No employee found with id no {employeeid}</div>
//     }

//     const handleUpdate = () => {
//            navigate(`/update/${id}`)
//     }
//   return(
//     <div>
//         <h2>Employee Details</h2>
//         <h3>Employee id : {id}</h3>
//         <p><strong>Name :</strong>{employee.name}</p>
//         <p><strong>Position : </strong>{employee.position}</p>
//         <p><strong>Department : </strong>{employee.department}</p>
//         <p><strong>Email : </strong>{employee.email}</p>
//         <p><strong>Contact :  </strong>{employee.contact}</p>
//         <p><strong>Address : </strong>{employee.address}</p>
//         <button onClick={() => handleUpdate()}>Update Employee</button>
//     </div>
//   )
// }

// export default EmployeeDetails;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getEmployees } from '../services/employeeService';
import { useSelector } from 'react-redux';

const EmployeeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const employeeid = parseInt(id);
  console.log(employeeid)

  const {employees, loading , error} = useSelector((state) => state.employees);

  const employee = employees.find((emp) => emp.id == id);
  console.log(employee)
  

  if (loading) {
    return <div className="text-center mt-6 text-gray-600">Loading...</div>;
  }

  if (!employee) {
    return (
      <div className="text-center mt-6 text-red-600">
        No employee found with ID {employeeid}
      </div>
    );
  }

  const handleUpdate = () => {
    navigate(`/employees/update/${id}`);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Employee Details</h2>
      <div className="border-t border-gray-200 pt-4">
        <p className="text-lg font-medium text-gray-600">
          <span className="font-semibold text-gray-800">Employee ID:</span> {id}
        </p>
        <p className="mt-2 text-lg">
          <span className="font-semibold text-gray-800">Name:</span>{' '}
          {employee.name}
        </p>
        <p className="mt-2 text-lg">
          <span className="font-semibold text-gray-800">Position:</span>{' '}
          {employee.position}
        </p>
        <p className="mt-2 text-lg">
          <span className="font-semibold text-gray-800">Department:</span>{' '}
          {employee.department}
        </p>
        <p className="mt-2 text-lg">
          <span className="font-semibold text-gray-800">Email:</span>{' '}
          {employee.email}
        </p>
        <p className="mt-2 text-lg">
          <span className="font-semibold text-gray-800">Contact:</span>{' '}
          {employee.contact}
        </p>
        <p className="mt-2 text-lg">
          <span className="font-semibold text-gray-800">Address:</span>{' '}
          {employee.address}
        </p>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleUpdate}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Update Employee
        </button>
      </div>
    </div>
  );
};

export default EmployeeDetails;
