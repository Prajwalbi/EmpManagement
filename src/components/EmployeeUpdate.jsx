
import React, { useState,useEffect, } from 'react';
import { getEmployees, updateEmployee } from '../services/employeeService';
import { Link, useParams,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployeeDetails } from '../slices/employeeSlice';

const EmployeeUpdate = () => {
    const [employeeId, setEmployeeId] = useState("");
    const [employeeData, setEmployeeData] = useState({ name: "", position: "", department: "" ,email: "",contact: "",address: "", salary: ""});
    const [message, setMessage] = useState("");
    const  { id } = useParams();
    const navigate = useNavigate();
    const {employees, loading , error} = useSelector((state) => state.employees);
    const employee = employees.find((emp) => emp.id == id);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const employeeId = parseInt(id);
        if (employee) {
            setEmployeeData(employee);
            setMessage(""); 
        } else {
            setMessage("No employee found with this ID.");
        }
    }, [employee]); 

    const goBack = () => {
        navigate(-1);
    }
  
    // const handleUpdate = (e) => {
    //     e.preventDefault();
    //     const updatedEmployee = updateEmployee(parseInt(id), employeeData);
        
    //     if (updatedEmployee) {
    //         console.log("Updated employee detail must send to dispatch ", employeeData)
    //         dispatch(updateEmployeeDetails({id, employeeData}));
    //         alert(`Employee with ID ${employeeId} updated successfully!`);
    //         setEmployeeId('');
    //         setEmployeeData({ name: "", position: "", department: "" ,email: "",contact: "",address: ""});
    //         setMessage("");
    //         navigate(`/details/${id}`);
    //     } else {
    //         alert("Failed to update employee.");
    //     }
    // };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Updated employee details to dispatch: ", employeeData);
        dispatch(updateEmployeeDetails({ id: parseInt(id), employee: employeeData }))
            .unwrap()
            .then(() => {
                alert(`Employee with ID ${id} updated successfully!`);
                navigate(`/details/${id}`);
            })
            .catch((error) => {
                alert("Failed to update employee: " + error);
            });
    };

    return (
        <div>
            
            {message && <p>{message}</p>}
            {employeeData.id && (
            <div className='px-3 py-6 bg-gray-200'>
            <p className='font-bold text-xl text-gray-400 mt-4 mb-3'>Update Employee Details</p>
            <form onSubmit={handleUpdate}>
            <div className='max-w-xl'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-2 group'>
                        <label htmlFor="fn" className='font-semibold text-gray-400 text-md group-focus-within:text-[#2196F3]'>Name</label>
                        <input
                            type="text"
                            name="Name"
                            value={employeeData.name} 
                            onChange={(e) => setEmployeeData({ ...employeeData, name: e.target.value })} 
                            placeholder="Name" 
                            required
                            className=' w-[270px] focus:outline-none  border-gray-300 focus:border-[#2196F3] text-[#2196F3] text-sm  px-2 py-3 rounded-sm  border-2'
                        /> 
                    </div>
                    {/* <div className='flex flex-col gap-2 group'>
                        <label htmlFor="ln" className='font-semibold text-gray-400 text-md group-focus-within:text-[#2196F3]'>Last Name</label> 
                        <input
                            type="text"
                            name="name"
                            value={ln}
                            onChange={(e) => setLn(e.target.value)}
                            placeholder="Divish Jain"
                            required
                            className=' w-[270px] focus:outline-none  border-gray-300 focus:border-[#2196F3] text-[#2196F3] text-sm  px-2 py-3 rounded-sm  border-2'
                        />
                    </div> */}
                </div>
                <div className='group'>
                    <div  className='font-semibold text-gray-400 text-md mt-4 mb-2 group-focus-within:text-[#2196F3]'>Job Position</div> 
                    <input
                        type="text"
                        name="position"
                        value={employeeData.position} 
                        onChange={(e) => setEmployeeData({ ...employeeData, position: e.target.value })} 
                        placeholder="Position"
                        required
                        className=' w-full focus:outline-none  border-gray-300 focus:border-[#2196F3] text-[#2196F3] text-sm  px-2 py-3 rounded-sm  border-2'
                    />
                </div>
                <div className='flex justify-between mt-6'>
                    <div className='flex flex-col gap-2 group'>
                        <label htmlFor="fn" className='font-semibold text-gray-400 text-md group-focus-within:text-[#2196F3]'>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={employeeData.email}
                            onChange={(e) => setEmployeeData({...employeeData,email: e.target.value})}
                            placeholder="Email"
                            required
                            className=' w-[270px] focus:outline-none  border-gray-300 focus:border-[#2196F3] text-[#2196F3] text-sm  px-2 py-3 rounded-sm  border-2'
                        /> 
                    </div>
                    <div className='flex flex-col gap-2 group'>
                        <label htmlFor="ln" className='font-semibold text-gray-400 text-md group-focus-within:text-[#2196F3]'>Department</label> 
                        <input
                            type="text"
                            name="department"
                            value={employeeData.department} 
                            onChange={(e) => setEmployeeData({ ...employeeData, department: e.target.value })} 
                            placeholder="Department"
                            required
                            className=' w-[270px] focus:outline-none  border-gray-300 focus:border-[#2196F3] text-[#2196F3] text-sm  px-2 py-3 rounded-sm  border-2'
                        />
                    </div>
                </div>
                <div className='flex justify-between mt-6'>
                    <div className='flex flex-col gap-2 group'>
                        <label htmlFor="fn" className='font-semibold text-gray-400 text-md group-focus-within:text-[#2196F3]'>Mobile Number</label>
                        <input
                            type="text"
                            name="contact"
                            value={employeeData.contact}
                            onChange={(e) => setEmployeeData({...employeeData,contact: e.target.value})}
                            placeholder="Contact"
                            required
                            className=' w-[270px] focus:outline-none  border-gray-300 focus:border-[#2196F3] text-[#2196F3] text-sm  px-2 py-3 rounded-sm  border-2'
                        /> 
                    </div>
                    <div className='flex flex-col gap-2 group'>
                        <label htmlFor="ln" className='font-semibold text-gray-400 text-md group-focus-within:text-[#2196F3]'>Salary</label> 
                        <input
                            type="text"
                            name="salary"
                            value={employeeData.salary}
                            onChange={(e) => setEmployeeData({...employeeData,salary: e.target.value})}
                            placeholder="Salary"
                            required
                            className=' w-[270px] focus:outline-none  border-gray-300 focus:border-[#2196F3] text-[#2196F3] text-sm  px-2 py-3 rounded-sm  border-2'
                        />
                    </div>
                </div>
                {/* <input
                        type="text"
                        value={employeeData.address}
                        onChange={(e) => setEmployeeData({...employeeData,contact: e.target.value})}
                        placeholder="Address"
                    /> */}
               <div className='flex gap-2 mt-6'>
                    <button className="py-2 px-5 bg-[#6264A7] text-white rounded-md  border-2 border-[#6264A7]" 
                    type='submit'
                    >Update Employee</button>
                    <button className="py-2 px-3 bg-inherit text-gray-500 border-2 border-gray-500 rounded-md" 
                    type='button'
                    onClick={ goBack }
                    >Cancel</button>
                </div>
               </div>
            </form>
            {/* <br />
                <Link to="/" >
                <button> &#8592; Back to Home Page &#8594;</button>
                </Link> */}
        </div>)}
        </div>
    );
};

export default EmployeeUpdate;