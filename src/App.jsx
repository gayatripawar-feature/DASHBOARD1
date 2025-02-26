import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard'; // Import the Dashboard component
// import DashboardContent from './DashboardContent'; // Dashboard content component
// import AdminSection from './AdminSection'; 
// import DeveloperModule from './DeveloperModule'; 
import SalesModule from './Components/SalesModule';
import ShareSpace from './Components/ShareSpace';
import LostVisitsModule from './Components/LostVisitsModule';
import CRM from "./Components/CRM";
import Registration from "./Components/Registration";
import HomeLoan from './Components/HomeLoan';
import OCR from "./Components/OCR";

const App = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Dashboard />}>
        <Route path="admin/salesperson" element={<SalesModule />} />
        <Route path="/developer/sharespace" element={<ShareSpace />} />
        <Route path="/sales/lostvisits"  element={<LostVisitsModule />} />
         
        
           <Route path="crm/CRM" element={<CRM/>} /> 
          <Route path="crm/registration" element={<Registration />} /> 
          <Route path="crm/HomeLoan" element={<HomeLoan />} />
          <Route path= "crm/ocr" element={<OCR />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
