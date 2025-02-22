import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard'; // Import the Dashboard component
// import DashboardContent from './DashboardContent'; // Dashboard content component
// import AdminSection from './AdminSection'; 
// import DeveloperModule from './DeveloperModule'; 
import SalesModule from './Components/SalesModule';
import ShareSpace from './Components/ShareSpace';
// import CRMModule from './CRMModule'; 
// import Registration from './Registration'; 

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main route for the Dashboard page */}
        <Route path="/" element={<Dashboard />}>
        <Route path="admin/salesperson" element={<SalesModule />} />
        <Route path="/developer/sharespace" element={<ShareSpace />} />
         
          {/* <Route index element={<DashboardContent />} />
          <Route path="admin" element={<AdminSection />} />
          <Route path="developer" element={<DeveloperModule />} />
          <Route path="sales" element={<SalesModule />} />
          <Route path="crm" element={<CRMModule />} />
          <Route path="crm/registration" element={<Registration />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
