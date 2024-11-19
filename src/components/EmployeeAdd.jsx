import React, { useState } from 'react';
import { addEmployee ,getEmployees} from '../services/employeeService';
import { Link, useNavigate } from 'react-router-dom';


const EmployeeAdd = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState(getEmployees());
    const [fn,setFn] = useState(""); 
    const [ln,setLn] = useState(""); 
    const [position,setPosition] = useState("");
    const [department,setDepartment] = useState("");
    const [email,setEmail] = useState("");
    const [contact,setContact] = useState("");
    const [salary,setSalary] = useState("");


    const handleAddEmployee = (e) => {
        e.preventDefault();
        const obj1 = {
            name: `${fn} ${ln}`,
            position: position,
            department: department,
            email: email,
            contact: contact,
            salary: salary
        };
        const obj2 = addEmployee(obj1);
        setEmployees(getEmployees()); 

        console.log(obj2); 
        setFn("");
        setLn("");
        setPosition("");
        setDepartment("");   
        setEmail("");
        setContact("");
        setSalary("");       
    }
    const goBack = () => {
        navigate(-1);
    }

    const saveNewEmployee = () => {
    }
    return(
        <div className='px-3 py-6 bg-gray-200'>
            <p className='font-bold text-xl text-gray-400 mt-4 mb-3'>Add New Employee</p>
            <form onSubmit={handleAddEmployee}>
            <div className='max-w-xl'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-2 group'>
                        <label htmlFor="fn" className='font-semibold text-gray-400 text-md group-focus-within:text-[#2196F3]'>First Name</label>
                        <input
                            type="text"
                            name="fn"
                            value={fn}
                            onChange={(e) => setFn(e.target.value)}
                            placeholder="Deeksha"
                            required
                            className=' w-[270px] focus:outline-none  border-gray-300 focus:border-[#2196F3] text-[#2196F3] text-sm  px-2 py-3 rounded-sm  border-2'
                        /> 
                    </div>
                    {/* className="w-full focus:outline-none border-b-2 border-black focus:border-[#2196F3] pt-1"  */}
                    <div className='flex flex-col gap-2 group'>
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
                    </div>
                </div>
                <div className='group'>
                    <div  className='font-semibold text-gray-400 text-md mt-4 mb-2 group-focus-within:text-[#2196F3]'>Job Position</div> 
                    <input
                        type="text"
                        name="position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        placeholder="Software developer"
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="deeksha@gmail.com"
                            required
                            className=' w-[270px] focus:outline-none  border-gray-300 focus:border-[#2196F3] text-[#2196F3] text-sm  px-2 py-3 rounded-sm  border-2'
                        /> 
                    </div>
                    <div className='flex flex-col gap-2 group'>
                        <label htmlFor="ln" className='font-semibold text-gray-400 text-md group-focus-within:text-[#2196F3]'>Department</label> 
                        <input
                            type="text"
                            name="department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            placeholder="Development"
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
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            placeholder="9449894000"
                            required
                            className=' w-[270px] focus:outline-none  border-gray-300 focus:border-[#2196F3] text-[#2196F3] text-sm  px-2 py-3 rounded-sm  border-2'
                        /> 
                    </div>
                    <div className='flex flex-col gap-2 group'>
                        <label htmlFor="ln" className='font-semibold text-gray-400 text-md group-focus-within:text-[#2196F3]'>Salary</label> 
                        <input
                            type="text"
                            name="salary"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            placeholder="Development"
                            required
                            className=' w-[270px] focus:outline-none  border-gray-300 focus:border-[#2196F3] text-[#2196F3] text-sm  px-2 py-3 rounded-sm  border-2'
                        />
                    </div>
                </div>
               <div className='flex gap-2 mt-6'>
                    <button className="py-2 px-5 bg-[#6264A7] text-white rounded-md  border-2 border-[#6264A7]" 
                    onClick={ saveNewEmployee }
                    >Save</button>
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
        </div>
    )
}

export default EmployeeAdd;
    