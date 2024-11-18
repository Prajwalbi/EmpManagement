import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeAdd from './components/EmployeeAdd';
import EmployeeDelete from './components/EmployeeDelete';
import EmployeeUpdate from './components/EmployeeUpdate';
import EmployeeDetails from './components/EmployeeDetails';
import "./App.css";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EmployeeList />} />
                <Route path="/add" element={<EmployeeAdd />} />
                <Route path="/delete" element={<EmployeeDelete />} />
                <Route path="/update/:id" element={<EmployeeUpdate />} />
                <Route path="/details/:id" element={<EmployeeDetails />} />
            </Routes>
        </Router>
        
    );
};

export default App;


