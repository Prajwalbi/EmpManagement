import { addNewEmployee } from "../slices/employeeSlice";

export let employees = [
    { id: 1, name: "John Doe", position: "Software Engineer", department: "Development", email: "john.doe@example.com", contact: "+1234567890", address: "123 Main St, Cityville", status:"Active" },
    { id: 2, name: "Jane Smith", position: "Project Manager", department: "Management", email: "jane.smith@example.com", contact: "+0987654321", address: "456 Elm St, Townsville", status: "Inactive" },
    { id: 3, name: "Mickey Mouse", position: "Developer", department: "Production", email: "mickey.mouse@example.com", contact: "+1122334455", address: "789 Oak St, Villagetown" , status: "Inactive"},
    { id: 4, name: "Mickey Mouse", position: "Developer", department: "Production", email: "mickey.mouse@example.com", contact: "+1122334455", address: "789 Oak St, Villagetown" , status: "Inactive"},
    { id: 5, name: "Mickey Mouse", position: "Developer", department: "Production", email: "mickey.mouse@example.com", contact: "+1122334455", address: "789 Oak St, Villagetown" , status: "Inactive"},
    { id: 6, name: "Mickey Mouse", position: "Developer", department: "Production", email: "mickey.mouse@example.com", contact: "+1122334455", address: "789 Oak St, Villagetown" , status: "Inactive"},
    { id: 7, name: "Mickey Mouse", position: "Developer", department: "Production", email: "mickey.mouse@example.com", contact: "+1122334455", address: "789 Oak St, Villagetown" , status: "Inactive"},
    { id: 8, name: "Mickey Mouse", position: "Developer", department: "Production", email: "mickey.mouse@example.com", contact: "+1122334455", address: "789 Oak St, Villagetown" , status: "Inactive"},
    { id: 9, name: "Mickey Mouse", position: "Developer", department: "Production", email: "mickey.mouse@example.com", contact: "+1122334455", address: "789 Oak St, Villagetown" , status: "Inactive"},
    { id: 10, name: "Mickey Mouse", position: "Developer", department: "Production", email: "mickey.mouse@example.com", contact: "+1122334455", address: "789 Oak St, Villagetown" , status: "Inactive"},
    { id: 11, name: "Mickey Mouse", position: "Developer", department: "Production", email: "mickey.mouse@example.com", contact: "+1122334455", address: "789 Oak St, Villagetown" , status: "Inactive"},
];


export let idCounter = employees.length > 0 ? Math.max(...employees.map(emp => emp.id)) + 1: 1;

export const getEmployees = async () => {
    // Fetch employee data from API
    const getApiUrl = "https://mocki.io/v1/a2d8dbbe-d0ad-443e-b314-b1dfe2f5cb61";

    try{
        const response = await fetch(getApiUrl);

        // Check if the response is OK
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

         // Parse the response JSON
         const employees = await response.json();

         return employees;

    }
    catch(error){
        console.error("Error fetching employee:", error);
        return null;     
    }

};

const gridOptions = {
    suppressCellSelection: true,
};

// // This needs to be an async function to use await
// export const fetchEmployees = async () => {
//     const employees = await getEmployees();
//     const res = employees.employees
//    return res;
// };

export const getEmployeeById = (id) => {
    // return employees.find(emp => emp.id === id);
    const getApiUrl = "https://mocki.io/v1/a2d8dbbe-d0ad-443e-b314-b1dfe2f5cb61";
    // async 
};


export const addEmployee = (employee) => {

    console.log(idCounter + "iddd..coiunterr..");
    const newEmployee = { id: "" + idCounter++ , ...employee };
    return newEmployee;
};

export const updateEmployee = (id, updatedEmployee) => {
    console.log("updatedEmployee from service ");


    return updatedEmployee;
};


// Simulated delete service
export const deleteEmployee = async (id) => {
    // Simulate a delay and successful deletion
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true); // Simulate successful response
      }, 1000);
    });
  };
  

//   import { createAsyncThunk } from '@reduxjs/toolkit';

//   export const deleteEmployeeAsync = createAsyncThunk(
//     'employees/deleteEmployee',
//     async (id, { dispatch }) => {
//       try {
//         // Replace with actual API call
//         await fakeApiCall(/api/employees/${id}, { method: 'DELETE' });
//         dispatch(deleteEmployee(id));
//       } catch (error) {
//         console.error('Error deleting employee:', error);
//       }
//     }
//   );

// export const updateEmployee = async (id, updatedEmployee) => {
//     try {
//         const response = await fetch(`/api/employees/${id}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(updatedEmployee),
//         });
//         if (!response.ok) {
//             throw new Error("Failed to update employee");
//         }
//         return await response.json(); // Ensure this returns the updated employee object
//     } catch (error) {
//         console.error("Error updating employee:", error);
//         throw error;
//     }
// };


