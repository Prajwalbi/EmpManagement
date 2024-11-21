import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../slices/employeeSlice.js';


const store = configureStore({
    reducer: {
        employees: employeeReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;