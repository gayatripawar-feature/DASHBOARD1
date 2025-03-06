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
import Agreement from './Components/Agreement';
import Architect from './Components/Architect';
import Demand from './Components/Demand';
import Banker from './Components/Banker';
import BasicInfo from './Components/BasicInfo';
import ProjectInventory from './Components/ProjectInventory';
import CostSheet from './Components/CostSheet';
import Salesmis from './Components/Salesmis';
import Marketing from './Components/Marketing';

const App = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Dashboard />}>
        <Route path="admin/salesperson" element={<SalesModule />} />
        <Route path="admin/banker" element={<Banker />} />
        <Route path="/developer/sharespace" element={<ShareSpace />} />
        <Route path ="/developer/basicinfo" element={<BasicInfo />} />
        <Route path ="/developer/projectinventory" element={<ProjectInventory />} />
        <Route path ="/developer/costsheet" element={<CostSheet />} />
        <Route path ="/developer/salesmis" element={<Salesmis/>} />
        <Route path="/developer/marketing" element={<Marketing/>}/>
        
        <Route path="/sales/lostvisits"  element={<LostVisitsModule />} />
         
        
           <Route path="crm/CRM" element={<CRM/>} /> 
          <Route path="crm/registration" element={<Registration />} /> 
          <Route path="crm/HomeLoan" element={<HomeLoan />} />
          <Route path= "crm/ocr" element={<OCR />} />
          <Route path ="crm/Agreement" element={<Agreement />} />
          <Route path="crm/architect" element={<Architect/>} />
          <Route path ="crm/Demand" element={<Demand />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
