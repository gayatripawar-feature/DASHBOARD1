


// import React, { useState } from "react";
// import { Button, TextField, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
// import { FaEye } from "react-icons/fa";

// const Marketing = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     marketingTitle: "",
//     marketingDescription: "",
//     date: "",
//   });

//   const marketingData = [
//     {
    
//     },
//   ];

//   const handleToggle = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const handleCreateMarketingInfo = () => {
//     setShowForm(true);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Marketing Info Submitted:", formData);
//     setShowForm(false);
//   };

//   const handleCancel = () => {
//     setShowForm(false);
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md w-96 bg-white">
//       <h2 className="fs-6 mb-4">Developer Module / Marketing Management</h2>

//       <div className="d-flex align-items-center mb-3">
//         <Button
//           onClick={handleToggle}
//           variant="outlined"
//           color="success"
//           className="m-3"
//           style={{
//             borderRadius: "20px",
//             minWidth: isExpanded ? "auto" : "50px",
//             padding: isExpanded ? "6px 16px" : "6px",
//           }}
//           startIcon={<FaEye size={20} color="#28a745" />}
//         >
//           {isExpanded && <span className="text-success">Display Marketing</span>}
//         </Button>
//       </div>

//       {!showForm && (
//         <div>
//           <button className="bg-primary text-white py-2 px-4 rounded" onClick={handleCreateMarketingInfo}>
//             + Create Marketing Info
//           </button>
//         </div>
//       )}

//       {!showForm && (
//         <div className="mt-4">
//           <TableContainer component={Paper}  sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
//             <Table>
//               <TableHead>
//                 <TableRow sx={{ bgcolor: "primary.main" }}>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>ACTION</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>TIMESTAMP</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>SOURCE NAME</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>START DATE</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>END DATE</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>EXPENSE</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>TARGET</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>NO. OF LEADS</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>COST PER LEAD</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>NO OF VISIT</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>COST PER VISIT</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>NO OF BOOKINGS</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>COST PER BOOKING</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {marketingData.map((row, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{row.action}</TableCell>
//                     <TableCell>{row.timestamp}</TableCell>
//                     <TableCell>{row.sourceName}</TableCell>
//                     <TableCell>{row.startDate}</TableCell>
//                     <TableCell>{row.endDate}</TableCell>
//                     <TableCell>{row.expense}</TableCell>
//                     <TableCell>{row.target}</TableCell>
//                     <TableCell>{row.noOfLeads}</TableCell>
//                     <TableCell>{row.costPerLead}</TableCell>
//                     <TableCell>{row.noOfVisit}</TableCell>
//                     <TableCell>{row.costPerVisit}</TableCell>
//                     <TableCell>{row.noOfBookings}</TableCell>
//                     <TableCell>{row.costPerBooking}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       )}

//       {showForm && (
//         <div className="mt-4">
//           <form onSubmit={handleSubmit}>
//             <TextField label="Marketing Title" name="marketingTitle" value={formData.marketingTitle} onChange={handleChange} fullWidth className="mb-3" />
//             <TextField label="Marketing Description" name="marketingDescription" value={formData.marketingDescription} onChange={handleChange} fullWidth multiline rows={4} className="mb-3" />
//             <TextField label="" name="date" type="date" value={formData.date} onChange={handleChange} fullWidth className="mb-3" />
//             <div className="d-flex justify-content-end">
//               <Button variant="contained" color="primary" type="submit" className="mr-2 m-3">
//                 Submit
//               </Button>
//               <Button variant="outlined" color="secondary" onClick={handleCancel} className="mr-2 m-3">
//                 Cancel
//               </Button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Marketing;


// import React, { useState } from "react";
// import { Button, TextField, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
// import { FaEye ,FaEdit } from "react-icons/fa";

// const Marketing = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     marketingTitle: "",
//     marketingDescription: "",
//     date: "",
//   });

//   const marketingData = [
//     {
//       action: "Edit",
//       timestamp: "2025-03-05 12:00:00",
//       sourceName: "Facebook Ads",
//       startDate: "2025-03-01",
//       endDate: "2025-03-10",
//       expense: "$500",
//       target: "1000 People",
//       noOfLeads: 50,
//       costPerLead: "$10",
//       noOfVisit: 30,
//       costPerVisit: "$16.67",
//       noOfBookings: 5,
//       costPerBooking: "$100",
//     },
//   ];

//   const handleToggle = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const handleCreateMarketingInfo = () => {
//     setShowForm(true);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Marketing Info Submitted:", formData);
//     setShowForm(false);
//   };

//   const handleCancel = () => {
//     setShowForm(false);
//   };

//   const handleEdit = (index) => {
//     alert(`Edit clicked for row ${index}`);
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md w-96 bg-white">
//       <h2 className="fs-6 mb-4">Developer Module / Marketing Management</h2>

//       <div className="d-flex align-items-center mb-3">
//         <Button
//           onClick={handleToggle}
//           variant="outlined"
//           color="success"
//           className="m-3"
//           style={{
//             borderRadius: "20px",
//             minWidth: isExpanded ? "auto" : "50px",
//             padding: isExpanded ? "6px 16px" : "6px",
//           }}
//           startIcon={<FaEye size={20} color="#28a745" />}
//         >
//           {isExpanded && <span className="text-success">Display Marketing</span>}
//         </Button>
//       </div>

//       {!showForm && (
//         <div>
//           <button className="bg-primary text-white py-2 px-4 rounded" onClick={handleCreateMarketingInfo}>
//             + Create Marketing Info
//           </button>
//         </div>
//       )}

//       {!showForm && (
//         <div className="mt-4">
//           <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
//             <Table>
//               <TableHead>
//                 <TableRow sx={{ bgcolor: "primary.main" }}>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>ACTION</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>TIMESTAMP</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>SOURCE NAME</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>START DATE</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>END DATE</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>EXPENSE</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>TARGET</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>NO. OF LEADS</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>COST PER LEAD</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>NO OF VISIT</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>COST PER VISIT</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>NO OF BOOKINGS</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>COST PER BOOKING</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {marketingData.map((row, index) => (
//                   <TableRow key={index}>
//                     <TableCell>
//                       <Button variant="outlined" color="primary" size="small" onClick={() => handleEdit(index)}>
//                         Edit
//                       </Button>
//                     </TableCell>
//                     <TableCell>{row.timestamp}</TableCell>
//                     <TableCell>{row.sourceName}</TableCell>
//                     <TableCell>{row.startDate}</TableCell>
//                     <TableCell>{row.endDate}</TableCell>
//                     <TableCell>{row.expense}</TableCell>
//                     <TableCell>{row.target}</TableCell>
//                     <TableCell>{row.noOfLeads}</TableCell>
//                     <TableCell>{row.costPerLead}</TableCell>
//                     <TableCell>{row.noOfVisit}</TableCell>
//                     <TableCell>{row.costPerVisit}</TableCell>
//                     <TableCell>{row.noOfBookings}</TableCell>
//                     <TableCell>{row.costPerBooking}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       )}

//       {showForm && (
//         <div className="mt-4">
//           <form onSubmit={handleSubmit}>
//             <TextField label="Marketing Title" name="marketingTitle" value={formData.marketingTitle} onChange={handleChange} fullWidth className="mb-3" />
//             <TextField label="Marketing Description" name="marketingDescription" value={formData.marketingDescription} onChange={handleChange} fullWidth multiline rows={4} className="mb-3" />
//             <TextField label="" name="date" type="date" value={formData.date} onChange={handleChange} fullWidth className="mb-3" />
//             <div className="d-flex justify-content-end">
//               <Button variant="contained" color="primary" type="submit" className="mr-2 m-3">
//                 Submit
//               </Button>
//               <Button variant="outlined" color="secondary" onClick={handleCancel} className="mr-2 m-3">
//                 Cancel
//               </Button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Marketing;


// =====

import React, { useState } from "react";
import { Button, TextField, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from "@mui/material";
import { FaEye, FaEdit } from "react-icons/fa";

const Marketing = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    marketingTitle: "",
    marketingDescription: "",
    date: "",
  });

  const marketingData = [
    {
      action: "Edit",
      timestamp: "2025-03-05 12:00:00",
      sourceName: "Facebook Ads",
      startDate: "2025-03-01",
      endDate: "2025-03-10",
      expense: "$500",
      target: "1000 People",
      noOfLeads: 50,
      costPerLead: "$10",
      noOfVisit: 30,
      costPerVisit: "$16.67",
      noOfBookings: 5,
      costPerBooking: "$100",
    },
  ];

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCreateMarketingInfo = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Marketing Info Submitted:", formData);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleEdit = (index) => {
    alert(`Edit clicked for row ${index}`);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md w-96 bg-white">
      <h2 className="fs-6 mb-4">Developer Module / Marketing Management</h2>

      <div className="d-flex align-items-center mb-3">
        <Button
          onClick={handleToggle}
          variant="outlined"
          color="success"
          className="m-3"
          style={{
            borderRadius: "20px",
            minWidth: isExpanded ? "auto" : "50px",
            padding: isExpanded ? "6px 16px" : "6px",
          }}
          startIcon={<FaEye size={20} color="#28a745" />}
        >
          {isExpanded && <span className="text-success">Display Marketing</span>}
        </Button>
      </div>

      {!showForm && (
        <div>
          <button className="bg-primary text-white py-2 px-4 rounded" onClick={handleCreateMarketingInfo}>
            + Create Marketing Info
          </button>
        </div>
      )}

      {!showForm && (
        <div className="mt-4">
          <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "primary.main" }}>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>ACTION</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>TIMESTAMP</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>SOURCE NAME</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>START DATE</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>END DATE</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>EXPENSE</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>TARGET</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>NO. OF LEADS</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>COST PER LEAD</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>NO OF VISIT</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>COST PER VISIT</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>NO OF BOOKINGS</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>COST PER BOOKING</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {marketingData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleEdit(index)}
                      >
                        <FaEdit />
                      </IconButton>
                    </TableCell>
                    <TableCell>{row.timestamp}</TableCell>
                    <TableCell>{row.sourceName}</TableCell>
                    <TableCell>{row.startDate}</TableCell>
                    <TableCell>{row.endDate}</TableCell>
                    <TableCell>{row.expense}</TableCell>
                    <TableCell>{row.target}</TableCell>
                    <TableCell>{row.noOfLeads}</TableCell>
                    <TableCell>{row.costPerLead}</TableCell>
                    <TableCell>{row.noOfVisit}</TableCell>
                    <TableCell>{row.costPerVisit}</TableCell>
                    <TableCell>{row.noOfBookings}</TableCell>
                    <TableCell>{row.costPerBooking}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}

      {showForm && (
        <div className="mt-4">
          <form onSubmit={handleSubmit}>
            <TextField label="Marketing Title" name="marketingTitle" value={formData.marketingTitle} onChange={handleChange} fullWidth className="mb-3" />
            <TextField label="Marketing Description" name="marketingDescription" value={formData.marketingDescription} onChange={handleChange} fullWidth multiline rows={4} className="mb-3" />
            <TextField label="" name="date" type="date" value={formData.date} onChange={handleChange} fullWidth className="mb-3" />
            <div className="d-flex justify-content-end">
              <Button variant="contained" color="primary" type="submit" className="mr-2 m-3">
                Submit
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleCancel} className="mr-2 m-3">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Marketing;
