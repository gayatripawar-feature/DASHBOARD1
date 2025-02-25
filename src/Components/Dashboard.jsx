

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


import React, { useState, useCallback } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
  FaBars, FaTachometerAlt, FaUserShield, FaCode, FaChartLine, FaCogs, FaUser, FaSignOutAlt
} from 'react-icons/fa';

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
    <div className="d-flex flex-column vh-100">
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
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="Profile"
            className="rounded-circle"
          />
        </div>
      </nav>

      {/* <div className="d-flex flex-grow-1">
        
        <div
          className="bg-primary text-white p-3 d-flex flex-column"
          style={{ width: collapsed ? '80px' : '250px', transition: 'width 0.3s' }}
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
              ]}
            />

            <SidebarDropdown
              label="Developer Module"
              icon={<FaCode />}
              collapsed={collapsed}
              isOpen={sections.developer}
              toggleOpen={() => toggleSection('developer')}
              subItems={[
                { to: "/developer/sharespace", icon: <FaCode />, label: "Share Space" },
              ]}
            />

            <SidebarDropdown
              label="Sales Module"
              icon={<FaChartLine />}
              collapsed={collapsed}
              isOpen={sections.sales}
              toggleOpen={() => toggleSection('sales')}
              subItems={[
                { to: "/sales/lostvisits", icon: <FaChartLine />, label: "Lost Visits" },
              ]}
            />

            <SidebarDropdown
              label="CRM Module"
              icon={<FaCogs />}
              collapsed={collapsed}
              isOpen={sections.crm}
              toggleOpen={() => toggleSection('crm')}
              subItems={[
                { to: "/crm/registration", icon: <FaUser />, label: "Registration" },
              ]}
            />
          </ul>

          
          <div className="mt-auto">
            <button className="btn btn-danger w-100 d-flex align-items-center justify-content-center" onClick={handleLogout}>
              <FaSignOutAlt className="me-2" />
              {!collapsed && 'SignOut'}
            </button>
          </div>
        </div>

     
        <div className="flex-grow-1 p-4">
          <Outlet /> 
        </div>
      </div> */}
       {/* </div> */}

       <div className="d-flex">
  {/* Sidebar */}
  <div
    className="bg-primary text-white p-3 d-flex flex-column"
    style={{
      width: collapsed ? '80px' : '250px',  // Sidebar width changes based on 'collapsed' state
      height: '100vh',  // Full height
      transition: 'width 0.3s',  // Smooth transition for expanding/collapsing the sidebar
      flexShrink: 0,  // Prevent sidebar from shrinking
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
        subItems={[{ to: "/admin/salesperson", icon: <FaUserShield />, label: "Sales Person" }]}
      />

      <SidebarDropdown
        label="Developer Module"
        icon={<FaCode />}
        collapsed={collapsed}
        isOpen={sections.developer}
        toggleOpen={() => toggleSection('developer')}
        subItems={[{ to: "/developer/sharespace", icon: <FaCode />, label: "Share Space" }]}
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
          { to: "/crm/sharespace", icon: <FaUser />, label: "Sharespacecrm" },
          { to: "/crm/registration", icon: <FaUser />, label: "Registration" },
        { to: "/crm/crm", icon: <FaUser />, label: "CRM" }
      ]}
      />
   
    </ul>

    {/* Logout Option */}
    <div className="mt-auto">
      <button className="btn btn-danger w-100 d-flex align-items-center justify-content-center" onClick={handleLogout}>
        <FaSignOutAlt className="me-2" />
        {!collapsed && 'SignOut'}
      </button>
    </div>
  </div>

  {/* Main Content */}
  <div
    className="flex-grow-1 p-4"
    style={{
      paddingLeft: collapsed ? '80px' : '250px',  // Make sure content adjusts based on sidebar width
      transition: 'padding-left 0.3s',  // Smooth transition for content
    }}
  >
    <Outlet /> {/* Render the child routes */}
  </div>
</div>
</div>
  );
};

const SidebarItem = React.memo(({ to, icon, label, collapsed }) => (
  <li className="nav-item mb-3">
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