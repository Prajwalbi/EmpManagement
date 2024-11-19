import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from "../services/employeeService";

//Thunks for async actions
export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
    const response = await getEmployees();
    if (response && response.employees) {
        return response.employees;
      }
})

// Async thunk for fetching employees
// export const fetchEmployees = createAsyncThunk(
//     'employees/fetchEmployees',
//     async (_, { rejectWithValue }) => {
//       try {
//         const response = await getEmployees();
//         if (response && response.employees) {
//           return response.employees;
//         }
//         throw new Error('Failed to fetch employees');
//       } catch (error) {
//         return rejectWithValue(error.message);
//       }
//     }
//   );

// Async thunk for deleting an employee
export const removeEmployee = createAsyncThunk(
    'employees/removeEmployee',
    async (id, { rejectWithValue }) => {
      try {
        const success = await deleteEmployee(id);
        if (success) {
          return id;
        }
        throw new Error('Failed to delete employee');
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
export const addNewEmployee = createAsyncThunk('employees/addEmployee', async (employee) => {
    const newEmployee = await addEmployee(employee);
    return newEmployee;
});

// Initial state for the slice
const initialState = {
    employees: [],
    loading: false,
    error: null,
  };
  
  // Employee slice
  const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      // Handle fetchEmployees actions
      builder
        .addCase(fetchEmployees.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchEmployees.fulfilled, (state, action) => {
          state.loading = false;
          state.employees = action.payload;
        })
        .addCase(fetchEmployees.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || 'Failed to fetch employees';
        });
  
      // Handle removeEmployee actions
      builder
        .addCase(removeEmployee.pending, (state) => {
          state.loading = true;
        })
        .addCase(removeEmployee.fulfilled, (state, action) => {
          state.loading = false;
          state.employees = state.employees.filter(
            (employee) => employee.id !== action.payload
          );
        })
        .addCase(removeEmployee.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || 'Failed to delete employee';
        });
    },
  });
  
  export default employeeSlice.reducer;