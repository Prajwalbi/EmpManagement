export let employees = [
    { id: 1, name: "John Doe", position: "Software Engineer", department: "Development", email: "john.doe@example.com", contact: "+1234567890", address: "123 Main St, Cityville", status:"Active" },
    { id: 2, name: "Jane Smith", position: "Project Manager", department: "Management", email: "jane.smith@example.com", contact: "+0987654321", address: "456 Elm St, Townsville", status: "Inactive" },
    { id: 3, name: "Mickey Mouse", position: "Developer", department: "Production", email: "mickey.mouse@example.com", contact: "+1122334455", address: "789 Oak St, Villagetown" , status: "Inactive"}
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
    const newEmployee = { id: idCounter++, ...employee };
    employees.push(newEmployee);
    return employees;
};

export const updateEmployee = (id, updatedEmployee) => {
    console.log(updatedEmployee);
    console.log("......");
    const index = employees.findIndex(emp => emp.id === id);
    // console.log(index + "index value ... ")
    if (index !== -1) {
        employees[index] = { ...employees[index], ...updatedEmployee };
        // console.log(employees[index])
        // console.log(updateEmployee);
        return employees[index];
    }
    return null; // Return null if not found
};

export const deleteEmployee = (id) => {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        return employees.splice(index, 1)[0];
    }
    return null;
};

