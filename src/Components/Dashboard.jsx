

// import React, { useState } from 'react';
// import { Link, Outlet, useNavigate } from 'react-router-dom';
// import { 
//   FaBars, FaTachometerAlt, FaUserShield, FaCode, FaChartLine, FaCogs, FaUser, FaSignOutAlt 
// } from 'react-icons/fa';

// const Dashboard = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [adminOpen, setAdminOpen] = useState(false);
//   const [developerOpen, setDeveloperOpen] = useState(false);
//   const [salesOpen, setSalesOpen] = useState(false);
//   const [crmOpen, setCrmOpen] = useState(false);

//   const navigate = useNavigate();

//   const toggleSidebar = () => setCollapsed(!collapsed);

//   const handleLogout = () => {
   
//     localStorage.removeItem('authToken');
//     navigate('/login');
//   };

//   return (
//     <div className="d-flex flex-column vh-100">
//       {/* Top Navbar */}
//       <nav className="navbar navbar-dark bg-dark px-3">
//         <div className="d-flex align-items-center">
//           <button className="btn btn-dark me-3" onClick={toggleSidebar}>
//             <FaBars size={20} />
//           </button>
//           <span className="navbar-brand mb-0 h1">CRM ERP</span>
//         </div>
//         <div className="mx-auto w-50">
//           <input type="text" className="form-control" placeholder="Search..." />
//         </div>
//         <div>
//           <img 
//             src="https://i.pravatar.cc/40?img=3" 
//             alt="Profile"
//             className="rounded-circle"
//           />
//         </div>
//       </nav>

//       <div className="d-flex flex-grow-1">
//         {/* Sidebar */}
//         <div 
//           className="bg-dark text-white p-3 d-flex flex-column" 
//           style={{ width: collapsed ? '80px' : '250px', transition: 'width 0.3s' }}
//         >
//           <ul className="nav flex-column">
//             <li className="nav-item mb-3">
//               <Link to="/" className="nav-link text-white d-flex align-items-center">
//                 <FaTachometerAlt className="me-2" />
//                 {!collapsed && <span>Dashboard</span>}
//               </Link>
//             </li>
//             <li className="nav-item mb-3">
//               <div 
//                 className="nav-link text-white d-flex align-items-center" 
//                 style={{ cursor: 'pointer' }}
//                 onClick={() => setAdminOpen(!adminOpen)}
//               >
//                 <FaUserShield className="me-2" />
//                 {!collapsed && <span>Admin Section</span>}
//               </div>
//               {adminOpen && !collapsed && (
//                 <ul className="nav flex-column ps-3">
//                   <li className="nav-item mb-2">
//                     <Link to="/admin/salesperson" className="nav-link text-white d-flex align-items-center">
//                       <FaUserShield className="me-2" />
//                       <span>Sales Person</span>
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li className="nav-item mb-3">
//               <div 
//                 className="nav-link text-white d-flex align-items-center" 
//                 style={{ cursor: 'pointer' }}
//                 onClick={() => setDeveloperOpen(!developerOpen)}
//               >
//                 <FaCode className="me-2" />
//                 {!collapsed && <span>Developer Module</span>}
//               </div>
//               {developerOpen && !collapsed && (
//                 <ul className="nav flex-column ps-3">
//                   <li className="nav-item mb-2">
//                     <Link to="/developer/sharespace" className="nav-link text-white d-flex align-items-center">
//                       <FaCode className="me-2" />
//                       <span>Share Space</span>
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li className="nav-item mb-3">
//               <div 
//                 className="nav-link text-white d-flex align-items-center" 
//                 style={{ cursor: 'pointer' }}
//                 onClick={() => setSalesOpen(!salesOpen)}
//               >
//                 <FaChartLine className="me-2" />
//                 {!collapsed && <span>Sales Module</span>}
//               </div>
//               {salesOpen && !collapsed && (
//                 <ul className="nav flex-column ps-3">
//                   <li className="nav-item mb-2">
//                     <Link to="/sales/lostvisits" className="nav-link text-white d-flex align-items-center">
//                       <FaChartLine className="me-2" />
//                       <span>Lost Visits</span>
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li className="nav-item mb-3">
//               <div 
//                 className="nav-link text-white d-flex align-items-center" 
//                 style={{ cursor: 'pointer' }}
//                 onClick={() => setCrmOpen(!crmOpen)}
//               >
//                 <FaCogs className="me-2" />
//                 {!collapsed && <span>CRM Module</span>}
//               </div>
//               {crmOpen && !collapsed && (
//                 <ul className="nav flex-column ps-3">
//                   <li className="nav-item mb-2">
//                     <Link to="/crm/registration" className="nav-link text-white d-flex align-items-center">
//                       <FaUser className="me-2" />
//                       <span>Registration</span>
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//           </ul>

//           {/* Logout Option */}
//           <div className="mt-auto">
//             <button className="btn btn-danger w-100 d-flex align-items-center justify-content-center" onClick={handleLogout}>
//               <FaSignOutAlt className="me-2" />
//               {!collapsed && 'Logout'}
//             </button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-grow-1 p-4">
//           <Outlet /> {/* Render the child routes */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useState, useCallback } from 'react';
// import { Link, Outlet, useNavigate } from 'react-router-dom';
// import {
//   FaBars, FaTachometerAlt, FaUserShield, FaCode, FaChartLine, FaCogs, FaSignOutAlt
// } from 'react-icons/fa';
// import { FaUsers, FaUserCheck, FaHome, FaFileAlt, FaFileSignature, FaStamp, FaDraftingCompass, FaBell } from "react-icons/fa";
// import { 
//   FaInfoCircle, 
//   FaBuilding, 
//   FaFileInvoiceDollar, 
//   FaBullhorn, 
//   FaUsers,  // <-- Add this
//   FaUserCheck, 
//   FaHome, 
//   FaFileAlt, 
//   FaFileSignature, 
//   FaStamp, 
//   FaDraftingCompass, 
//   FaBell 
// } from "react-icons/fa";

// import React, { useState, useCallback } from 'react';
// import { Link, Outlet, useNavigate } from 'react-router-dom';
// import {
//   FaBars, FaTachometerAlt, FaUserShield, FaCode, FaChartLine, FaCogs, FaSignOutAlt,
//   FaUsers, FaUserCheck, FaHome, FaFileAlt, FaFileSignature, FaStamp, 
//   FaDraftingCompass, FaBell, FaInfoCircle, FaBuilding, FaFileInvoiceDollar, FaBullhorn
// } from 'react-icons/fa';

// ===
// import React from "react";
// import { useState, useCallback } from "react";

// import {
//   FaBars, FaTachometerAlt, FaUserShield, FaCode, FaChartLine, FaCogs, FaSignOutAlt,
//   FaUsers, FaUserCheck, FaHome, FaFileAlt, FaFileSignature, FaStamp, FaDraftingCompass, FaBell,
//   FaInfoCircle, FaBuilding, FaFileInvoiceDollar, FaBullhorn
// } from 'react-icons/fa';


import React, { useState, useCallback } from "react"; 
import { 
  FaBars, FaTachometerAlt, FaUserShield, FaCode, FaChartLine, FaCogs, FaSignOutAlt,
  FaUsers, FaUserCheck, FaHome, FaFileAlt, FaFileSignature, FaStamp, FaDraftingCompass, FaBell,
  FaInfoCircle, FaBuilding, FaFileInvoiceDollar, FaBullhorn
} from "react-icons/fa";  
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

 

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [sections, setSections] = useState({
    admin: false,
    developer: false,
    sales: false,
    crm: false,
  });

  const navigate = useNavigate();

  // Memoized toggle functions
  const toggleSidebar = useCallback(() => setCollapsed((prev) => !prev), []);
 
  const toggleSection = useCallback((section) => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('authToken');
    navigate('/login');
  }, [navigate]);

  return (
    <div className="d-flex flex-column vh-100 ">
      {/* Top Navbar */}
      <nav className="navbar navbar-dark bg-primary px-3">
        <div className="d-flex align-items-center">
          <button className="btn btn-dark me-3" onClick={toggleSidebar}>
            <FaBars size={20} />
          </button>
          <span className="navbar-brand mb-0 h1">CRM ERP</span>
        </div>
        <div className="mx-auto w-50">
          <input type="text" className="form-control" placeholder="Search..." />
        </div>
        <div>
          {/* <img
            src="https://i.pravatar.cc/40?img=3"
            alt="Profile"
            className="rounded-circle"
          /> */}
          <img
            src="/unnamed.png"
            alt="Profile"
            className="rounded-circle profile"
          />
        </div>
      </nav>

      

       <div className="d-flex w-100">
 
  <div
    className="bg-primary text-white p-3 d-flex flex-column"
    style={{
      width: collapsed ? '80px' : '250px',  
      height: '100vh',  
      transition: 'width 0.3s',  
      flexShrink: 0,  
    }}
  >
    <ul className="nav flex-column">
      <SidebarItem to="/" icon={<FaTachometerAlt />} label="Dashboard" collapsed={collapsed} />

      <SidebarDropdown
        label="Admin Section"
        icon={<FaUserShield />}
        collapsed={collapsed}
        isOpen={sections.admin}
        toggleOpen={() => toggleSection('admin')}
        subItems={[
          { to: "/admin/salesperson", icon: <FaUserShield />, label: "Sales Person" },
          { to: "/admin/banker", icon: <FaUserShield />, label: "Banker Details" }

        ]}
      />

      <SidebarDropdown
        label="Developer Module"
        icon={<FaCode />}
        collapsed={collapsed}
        isOpen={sections.developer}
        toggleOpen={() => toggleSection('developer')}
        subItems={[
          // { to: "/developer/sharespace", icon: <FaCode />, label: "Share Space" },
          // { to: "/developer/basicinfo", icon: <FaCode />, label: "Basic Information" },
          // {to :"/developer/projectinventory",icon : <FaCode />,label:"Project Inventory" },
          // {to :"/developer/costsheet",icon : <FaCode />,label:"Cost Sheet Details" },
          // {to :"/developer/salesmis",icon : <FaCode />,label:"Sales MIS" },
          // {to :"/developer/marketing",icon : <FaCode />,label:"Marketing" },
          { to: "/developer/sharespace", icon: <FaCode />, label: "Share Space" },
          { to: "/developer/basicinfo", icon: <FaInfoCircle />, label: "Basic Information" },
          { to: "/developer/projectinventory", icon: <FaBuilding />, label: "Project Inventory" },
          { to: "/developer/costsheet", icon: <FaFileInvoiceDollar />, label: "Cost Sheet Details" },
          { to: "/developer/salesmis", icon: <FaChartLine />, label: "Sales MIS" },
          { to: "/developer/marketing", icon: <FaBullhorn />, label: "Marketing" }
         ] }
      />

      <SidebarDropdown
        label="Sales Module"
        icon={<FaChartLine />}
        collapsed={collapsed}
        isOpen={sections.sales}
        toggleOpen={() => toggleSection('sales')}
        subItems={[{ to: "/sales/lostvisits", icon: <FaChartLine />, label: "Lost Visits" }]}
      />

      <SidebarDropdown
        label="CRM Module"
        icon={<FaCogs />}
        collapsed={collapsed}
        isOpen={sections.crm}
        toggleOpen={() => toggleSection('crm')}
        subItems={[
        //   { to: "/crm/sharespace", icon: <FaUser />, label: "Share Space" },
        //   { to: "/crm/registration", icon: <FaUser />, label: "Registration" },
        // { to: "/crm/crm", icon: <FaUser />, label: "CRM" },
        // { to: "/crm/HomeLoan", icon: <FaUser />, label: "Home Loan Applicability" },
        // { to: "/crm/OCR", icon: <FaUser />, label: "OCR Collection" },
        // { to: "/crm/Agreement", icon: <FaUser />, label: "Agreement" },
        // { to: "/crm/Architect", icon: <FaUser />, label: "Engineer & Architect Letter" },
        // { to: "/crm/Demand", icon: <FaUser />, label: "Demand Raised" },
        { to: "/crm/sharespace", icon: <FaUsers />, label: "Share Space" },
    { to: "/crm/crm", icon: <FaUserCheck />, label: "CRM" },
    { to: "/crm/HomeLoan", icon: <FaHome />, label: "Home Loan Applicability" },
    { to: "/crm/OCR", icon: <FaFileAlt />, label: "OCR Collection" },
    { to: "/crm/Agreement", icon: <FaFileSignature />, label: "Agreement" },
    { to: "/crm/registration", icon: <FaStamp />, label: "Registration" },
    { to: "/crm/Architect", icon: <FaDraftingCompass />, label: "Engineer & Architect Letter" },
    { to: "/crm/Demand", icon: <FaBell />, label: "Demand Raised" }
      ]}
      />
   
    </ul>

    {/* Logout Option */}
    {/* <div className="mt-auto"> */}
    <div style={{ marginTop: "auto", marginBottom: "50px" }}>

      <button className="btn btn-danger w-100 d-flex align-items-center justify-content-center" onClick={handleLogout}>
        <FaSignOutAlt className="me-2" />
        {!collapsed && 'SignOut'}
      </button>
    </div>
  </div>

  {/* Main Content */}
  {/* <div
    className="flex-grow-1 p-3 "
    style={{
      paddingLeft: collapsed ? '80px' : '250px',  
      transition: 'padding-left 0.3s',  

    }}
  > */}
  <div
  className="main-content flex-grow-1 p-3"
  style={{
   
    paddingLeft: collapsed ? "80px" : "250px",  
    transition: "margin-left 0.3s ease-in-out",
    width: collapsed ? "calc(100% - 80px)" : "calc(100% - 250px)",

    // background: "#f8f9fa",  
    // background: "#ffcdd2",
   background:" #edf7fc",
    minHeight: "100vh",  
    borderRadius: "10px",  
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",  
    
  }}
>
  <Outlet />
</div>

{/* <div
  className="main-content flex-grow-1 p-3"
  style={{
    paddingLeft: collapsed ? "80px" : "250px",
    transition: "all 0.3s ease-in-out",
    background: "#edf7fc",
    minHeight: "100vh",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: collapsed ? "calc(100% - 80px)" : "calc(100% - 250px)", // Adjust width dynamically
  }}
>
  {/* <Outlet /> 
</div> */}


  </div>
</div>

  );
};

const SidebarItem = React.memo(({ to, icon, label, collapsed }) => (
  <li className="nav-item">
    <Link to={to} className="nav-link text-white d-flex align-items-center">
      {icon}
      {!collapsed && <span className="ms-2">{label}</span>}
    </Link>
  </li>
));

const SidebarDropdown = React.memo(({ label, icon, collapsed, isOpen, toggleOpen, subItems }) => (
  <li className="nav-item mb-3">
    <div className="nav-link text-white d-flex align-items-center" style={{ cursor: 'pointer' }} onClick={toggleOpen}>
      {icon}
      {!collapsed && <span className="ms-2">{label}</span>}
    </div>
    {isOpen && !collapsed && (
      <ul className="nav flex-column ps-3">
        {subItems.map((item, index) => (
          <SidebarItem key={index} to={item.to} icon={item.icon} label={item.label} collapsed={collapsed} />
        ))}
      </ul>
    )}
  </li>
));

export default Dashboard; 


