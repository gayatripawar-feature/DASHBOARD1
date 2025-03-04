





// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Modal, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
// import { FaEye } from "react-icons/fa";

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };


// const Demand = () => {
//   const [loans, setLoans] = useState([]);
//   const [filteredLoans, setFilteredLoans] = useState([]);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [filterType, setFilterType] = useState('');
//   const [filterValue, setFilterValue] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
  
// const [isCollapsed, setIsCollapsed] = useState(false);

// const [selectedTitle, setSelectedTitle] = useState("Mr."); 
//   const rowsPerPage = 10;
  
//   // State for Modal
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedLoan, setSelectedLoan] = useState(null);

//   useEffect(() => {
//     loadLoansData();
//   }, []);

//   const loadLoansData = async () => {
//     const data = await fetchLoansData();
//     setLoans(data);
//     setFilteredLoans(data);
//   };

//   const handleOpenModal = (loan) => {
//     setSelectedLoan(loan);
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setSelectedLoan(null);
//   };

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };


//   const handleCollapseToggle = () => {
//     setIsCollapsed((prev) => !prev);
//   };



//   const handlePageChange = (newPage) => {
//     if (newPage > 0 && newPage <= Math.ceil(filteredLoans.length / rowsPerPage)) {
//       setCurrentPage(newPage);
//     }
//   };

//   const handleResetFilters = () => {
//     setFilterType('');
//     setFilterValue('');
//   };

//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = filteredLoans.slice(indexOfFirstRow, indexOfLastRow);

//   const getFilterOptions = (type) => {
//     switch (type) {
//       case 'Flat Type':
//         return ['1BHK', '2BHK', '3BHK'];
//       case 'Parking':
//         return ['Basement', 'Parking 1','Parking 2'];
//       case 'Floor':
//         // return ['1', 'First', 'Second'];
//         return Array.from({ length: 15 }, (_, i) => (i + 1).toString());
//       case 'Rate':
//         return Array.from({ length: 120 }, (_, i) => (50000 * (i + 1)).toLocaleString()); // Generates values from 50,000 to 6,000,000
//       case 'Slab':
//         return ['OCR', 'GST', 'Stamp Duty', 'Registration', 'Booking', 'Plinth Amount Received', '1st Slab Level', '2nd Slab Level', '3rd Slab Level', '5th Slab Level', '7th Slab Level', '10th Slab Level', 'Brick Level', 'External Plaster Level', 'Flooring Level', 'Staircase Level', 'Lift Level', 'Possession Level'];
//       default:
//         return [];
//     }
//   };

//   return (
//     <div className="main-content">
//       <h6>Developer Module / Basic Information Management</h6>

// {/* CRM Display Button */}
//       <div className="d-flex align-items-center mb-3">
//         <Button
//           onClick={handleCollapseToggle}
//           variant="outlined"
//           color="success"
//           className='m-3'
//           style={{ borderRadius: '20px' }}
//           startIcon={<FaEye size={20} color="#28a745" />}
//         >
//           {!isCollapsed && <span className="text-success">Firm Display</span>}
//         </Button>

//         <Button
//           onClick={handleCollapseToggle}
//           variant="outlined"
//           color="success"
//           className='m-3'
//           style={{ borderRadius: '20px' }}
//           startIcon={<FaEye size={20} color="#28a745" />}
//         >
//           {!isCollapsed && <span className="text-success">Project Display</span>}
//         </Button>

//         <Button
//           onClick={handleCollapseToggle}
//           variant="outlined"
//           color="success"
//           className='m-3'
//           style={{ borderRadius: '20px' }}
//           startIcon={<FaEye size={20} color="#28a745" />}
//         >
//           {!isCollapsed && <span className="text-success">LandOwner Display</span>}
//         </Button>
//         <Button
//           onClick={handleCollapseToggle}
//           variant="outlined"
//           color="success"
//           className='m-3'
//           style={{ borderRadius: '20px' }}
//           startIcon={<FaEye size={20} color="#28a745" />}
//         >
//           {!isCollapsed && <span className="text-success">Flat Allotement Display</span>}
//         </Button>

//         <Button
//           onClick={handleCollapseToggle}
//           variant="outlined"
//           color="success"
//           className='m-3'
//           style={{ borderRadius: '20px' }}
//           startIcon={<FaEye size={20} color="#28a745" />}
//         >
//           {!isCollapsed && <span className="text-success">Download PDF</span>}
//         </Button>
//       </div>


//       <div className="d-flex align-items-center justify-content-between my-3 pt-4 pb-3">
//         <Button variant="contained" className="text-nowrap" style={{ minWidth: "180px" }} color="primary" onClick={() => handleOpenModal(null)}>
//           Create Firm
//         </Button>

       
        

//         <div className="d-flex align-items-center gap-2 ">
 
//   <FormControl style={{ minWidth: "180px" }}>
//     <InputLabel>Filter By</InputLabel>
//     <Select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
//       <MenuItem value="Flat Type">Flat Type</MenuItem>
//       {/* <MenuItem value="Parking">Parking</MenuItem> */}
//       <MenuItem value="Floor">Floor</MenuItem>
//       <MenuItem value="Rate">Rate</MenuItem>
//       {/* <MenuItem value="Slab">Slab</MenuItem> */}
//     </Select>
//   </FormControl>

 
//   <FormControl style={{ minWidth: "180px" }}>
//     <InputLabel>Value</InputLabel>
//     <Select
//       value={filterValue}
//       onChange={(e) => setFilterValue(e.target.value)}
//       disabled={!filterType}
//     >
//       {getFilterOptions(filterType).map((option, index) => (
//         <MenuItem key={index} value={option}>{option}</MenuItem>
//       ))}
//     </Select>
//   </FormControl>

//   {/* Reset Button */}
//   <Button className="text-white" style ={{backgroundColor:"#800080",padding: '10px 15px', borderRadius: '5px' }} variant="outlined" color="secondary" onClick={handleResetFilters}>
//     Reset
//   </Button>

//   {/* Rows per page */}
//   <div className="d-flex align-items-center gap-1">
//     <label className="fw-bold">Rows per page:</label>
//     <input
//       type="number"
//       className="form-control"
//       value={rowsPerPage}
//       onChange={() => {}}
//       style={{ width: "80px", padding: "6px" }}
//     />
//   </div>
// </div>

//       </div>

//       <TableContainer component={Paper} className="mt-4" sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
//         <Table>
//           <TableHead>
//             <TableRow sx={{ bgcolor: "primary.main" }}>
//               <TableCell sx={{ color: "white", fontWeight: "bold" }}>
//               FLAT NO.</TableCell>
//               <TableCell sx={{ color: "white", fontWeight: "bold" }}>NAME OF ALLOTEE</TableCell>
//               <TableCell sx={{ color: "white", fontWeight: "bold" }}>NAME OF CO-ALLOTEE</TableCell>
//               <TableCell sx={{ color: "white", fontWeight: "bold" }}>TYPE</TableCell>
//               <TableCell sx={{ color: "white", fontWeight: "bold" }}>FLOOR</TableCell>
//               <TableCell sx={{ color: "white", fontWeight: "bold" }}>EMAIL ID</TableCell>
//               <TableCell sx={{ color: "white", fontWeight: "bold" }}>WHATSAPP NUMBER
//               </TableCell>
//               <TableCell sx={{ color: "white", fontWeight: "bold" }}>Rate</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {currentRows.map((loan, index) => (
//               <TableRow key={index}>
//                 <TableCell>{loan.flatNo}</TableCell>
//                 <TableCell>{loan.nameOfAllotee}</TableCell>
//                 <TableCell>
//                   <Button variant="contained" color="secondary" onClick={() => handleOpenModal(loan)}>
//                     Open Draft
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
//         <button 
//           className="btn btn-secondary"
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           style={{ borderRadius: '5px', padding: '13px 20px' ,backgroundColor:"#800080"}}
//         >
//           Previous
//         </button>

//         {/* <span>Page {currentPage} of {Math.ceil(filteredLoans.length / rowsPerPage)}</span> */}

//         <button
//           className="btn btn-secondary"
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === Math.ceil(filteredLoans.length / rowsPerPage)}
//           style={{ borderRadius: '5px', padding: '13px 20px',backgroundColor:"#800080" }}
//         >
//           Next
//         </button>
//       </div>

     




// <Modal open={openModal} onClose={handleCloseModal}>
//   <Box
//     sx={{
//       width: 870,
//       bgcolor: "background.paper",
//       borderRadius: 2,
//       p: 4,
//       position: "absolute",
//       top: "50%",
//       left: "50%",
//       transform: "translate(-50%, -50%)",
//       boxShadow: 24,
//     }}
//   >
//     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
//       <h5 style={{ margin: 0 }}>Demand Letter</h5>
//       <Button onClick={handleCloseModal} style={{ fontSize: "16px" }}>X</Button>
//     </div>

//     <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
//       <div style={{ display: "flex", gap: "20px" }}>
//         <TextField label="" type="date" fullWidth InputProps={{ readOnly: true }} />
//         <TextField label="Flat No" fullWidth value={selectedLoan?.flatNo || ""} InputProps={{ readOnly: true }} />
//         <TextField label="Name Of Allotee" fullWidth value={selectedLoan?.nameOfAllotee || ""} InputProps={{ readOnly: true }} />
//       </div>

//       <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: "16px" }}>
//           {/* Name of Co-Allotee with Title Selection */}
//           <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
//             <FormControl sx={{ minWidth: 120 }}>
//               <InputLabel>Title</InputLabel>
//               <Select value={selectedTitle} onChange={(e) => setSelectedTitle(e.target.value)}>
//                 <MenuItem value="Mr.">Mr.</MenuItem>
//                 <MenuItem value="Mrs.">Mrs.</MenuItem>
//                 <MenuItem value="Miss">Miss</MenuItem>
//               </Select>
//             </FormControl>
//             <TextField 
//               label="Name Of Co-Allotee" 
//               fullWidth 
//               value={selectedLoan?.coAlloteeName || ""} 
//               InputProps={{ readOnly: true }} 
//             />
//           </div>
//         </div>

//       <h6 style={{ marginBottom: 8 }}>Stage Of Completion</h6>
//       <div style={{ display: "flex", gap: "20px" }}>
       
//         <FormControl fullWidth>
//   <InputLabel>Stage</InputLabel>
//   <Select displayEmpty>
//     <MenuItem disabled value="">
//       Select Stage
//     </MenuItem>
//     <MenuItem value="OCR">OCR</MenuItem>
//     <MenuItem value="GST">GST</MenuItem>
//     <MenuItem value="Stamp Duty">Stamp Duty</MenuItem>
//     <MenuItem value="Registration">Registration</MenuItem>
//     <MenuItem value="Booking">Booking</MenuItem>
//     <MenuItem value="Plinth Amount Received">Plinth Amount Received</MenuItem>
//     <MenuItem value="1st Slab Level">1st Slab Level</MenuItem>
//     <MenuItem value="2nd Slab Level">2nd Slab Level</MenuItem>
//     <MenuItem value="3rd Slab Level">3rd Slab Level</MenuItem>
//     <MenuItem value="5th Slab Level">5th Slab Level</MenuItem>
//     <MenuItem value="7th Slab Level">7th Slab Level</MenuItem>
//     <MenuItem value="10th Slab Level">10th Slab Level</MenuItem>
//     <MenuItem value="Brick Level">Brick Level</MenuItem>
//     <MenuItem value="External Plaster Level">External Plaster Level</MenuItem>
//     <MenuItem value="Flooring Level">Flooring Level</MenuItem>
//     <MenuItem value="Staircase Level">Staircase Level</MenuItem>
//     <MenuItem value="Lift Level">Lift Level</MenuItem>
//     <MenuItem value="Possession Level">Possession Level</MenuItem>
//   </Select>
// </FormControl>

//         <TextField label="Total Agreement Value" fullWidth value={selectedLoan?.coAlloteeName || ""} InputProps={{ readOnly: true }} />
//         <TextField label="% Of Demand Raising" fullWidth value={selectedLoan?.coAlloteeDOB || ""} InputProps={{ readOnly: true }} />
//       </div>

//       <div style={{ display: "flex", gap: "20px" }}>
//         <TextField label="Total Due Payment" fullWidth value={selectedLoan?.alloteeDOB || ""} InputProps={{ readOnly: true }} />
//         <TextField label="Payment Received Till Date" fullWidth value={selectedLoan?.alloteeAge || ""} InputProps={{ readOnly: true }} />
//         <TextField label="Payment Balance Till Date" fullWidth value={selectedLoan?.a1Occupation || ""} InputProps={{ readOnly: true }} />
//       </div>

//       <div style={{ display: "flex", gap: "20px" }}>
//         <TextField label="Payment Balance (In Words)" fullWidth value={selectedLoan?.alloteeDOB || ""} InputProps={{ readOnly: true }} />
//       </div>
//     </div>

//     <div style={{ textAlign: "right", marginTop: 24 }}>
//       <Button variant="contained" color="primary" onClick={handleCloseModal}>
//         Submit
//       </Button>
//       <Button className="m-2" variant="contained" color="primary" onClick={handleCloseModal}>
//       Generate PDF
//       </Button>
//     </div>
//   </Box>
// </Modal>

//       </div>
    
   
 

  
//   );
// };

// export default Demand;





// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, Box } from '@mui/material';
// import { FaEye } from "react-icons/fa";

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const sections = ["Firm Display", "Project Display", "LandOwner Display", "Flat Allotment Display", "Download PDF"];

// const Demand = () => {
//   const [loans, setLoans] = useState([]);
//   const [filteredLoans, setFilteredLoans] = useState([]);
//   const [expandedSection, setExpandedSection] = useState(null);
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedLoan, setSelectedLoan] = useState(null);

//   useEffect(() => {
//     loadLoansData();
//   }, []);

//   const loadLoansData = async () => {
//     const data = await fetchLoansData();
//     setLoans(data);
//     setFilteredLoans(data);
//   };

//   const handleToggleSection = (index) => {
//     setExpandedSection(prev => (prev === index ? null : index));
//   };

//   const handleOpenModal = (loan) => {
//     setSelectedLoan(loan);
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setSelectedLoan(null);
//   };

//   return (
//     <div className="main-content">
//       <h6>Developer Module / Basic Information Management</h6>

//       <div className="d-flex align-items-center mb-3">
//         {sections.map((label, index) => (
//           <Button
//             key={index}
//             onClick={() => handleToggleSection(index)}
//             variant="outlined"
//             color="success"
//             className='m-3'
//             style={{ borderRadius: '20px' }}
//             startIcon={<FaEye size={20} color="#28a745" />}
//           >
//             {expandedSection === index ? label : null}
//           </Button>
//         ))}
//       </div>

//       {expandedSection !== null && (
//         <div className="content-container mt-3">
//           <Button variant="contained" color="primary" onClick={() => handleOpenModal(null)}>
//             + Create Firm
//           </Button>
//           <TableContainer component={Paper} className="mt-4">
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>FLAT NO.</TableCell>
//                   <TableCell>NAME OF ALLOTEE</TableCell>
//                   <TableCell>ACTIONS</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filteredLoans.map((loan, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{loan.flatNo}</TableCell>
//                     <TableCell>{loan.nameOfAllotee}</TableCell>
//                     <TableCell>
//                       <Button variant="contained" color="secondary" onClick={() => handleOpenModal(loan)}>
//                         Open Draft
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       )}

//       <Modal open={openModal} onClose={handleCloseModal}>
//         <Box sx={{ width: 500, bgcolor: "background.paper", borderRadius: 2, p: 4, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", boxShadow: 24 }}>
//           <h5>Demand Letter</h5>
//           <Button onClick={handleCloseModal}>Close</Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default Demand;


// ==> f

// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, Box } from '@mui/material';
// import { FaEye } from "react-icons/fa";

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const sections = [
//   { label: "Firm Display", icon: <FaBuilding size={30} />, createLabel: "Create Firm" },
//   { label: "Project Display", icon: <FaBuilding size={30} />,createLabel: "Create Project" },
//   { label: "LandOwner Display", icon: <FaBuilding size={30} />,createLabel: "Create Landowner Info" },
//   { label: "Flat Allotment Display",icon: <FaBuilding size={30} />, createLabel: "Create Flat Allotment Info" },
//   { label: "Download PDF", icon: <FaBuilding size={30} />,createLabel: "" }
// ];

// const Demand = () => {
//   const [loans, setLoans] = useState([]);
//   const [filteredLoans, setFilteredLoans] = useState([]);
//   const [expandedSection, setExpandedSection] = useState(null);
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedLoan, setSelectedLoan] = useState(null);

//   useEffect(() => {
//     loadLoansData();
//   }, []);

//   const loadLoansData = async () => {
//     const data = await fetchLoansData();
//     setLoans(data);
//     setFilteredLoans(data);
//   };

//   const handleToggleSection = (index) => {
//     setExpandedSection(prev => (prev === index ? null : index));
    
//     // Trigger PDF download when clicking "Download PDF"
//     if (sections[index].label === "Download PDF") {
//       handleDownloadPDF();
//     }
//   };

//   const handleDownloadPDF = () => {
//     // Example PDF download logic (replace with actual API call if needed)
//     const link = document.createElement("a");
//     link.href = "/path/to/demand_letter.pdf";
//     link.download = "Demand_Letter.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleOpenModal = (loan) => {
//     setSelectedLoan(loan);
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setSelectedLoan(null);
//   };

//   return (
//     <div className="main-content">
//       <h6>Developer Module / Basic Information Management</h6>

//       <div className="d-flex align-items-center mb-3">
//         {sections.map((section, index) => (
//           <Button
//             key={index}
//             onClick={() => handleToggleSection(index)}
//             variant="outlined"
//             color="success"
//             className='m-3'
//             style={{ borderRadius: '20px' }}
//             startIcon={<FaEye size={20} color="#28a745" />}
//           >
//             {expandedSection === index ? section.label : null}
//           </Button>
//         ))}
//       </div>

//       {expandedSection !== null && sections[expandedSection].label !== "Download PDF" && (
//         <div className="content-container mt-3">
//           {sections[expandedSection].createLabel && (
//             <Button variant="contained" color="primary" onClick={() => handleOpenModal(null)}>
//               + {sections[expandedSection].createLabel}
//             </Button>
//           )}

//           <TableContainer component={Paper} className="mt-4">
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>FLAT NO.</TableCell>
//                   <TableCell>NAME OF ALLOTEE</TableCell>
//                   <TableCell>ACTIONS</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filteredLoans.map((loan, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{loan.flatNo}</TableCell>
//                     <TableCell>{loan.nameOfAllotee}</TableCell>
//                     <TableCell>
//                       <Button variant="contained" color="secondary" onClick={() => handleOpenModal(loan)}>
//                         Open Draft
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       )}

//       <Modal open={openModal} onClose={handleCloseModal}>
//         <Box sx={{ width: 500, bgcolor: "background.paper", borderRadius: 2, p: 4, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", boxShadow: 24 }}>
//           <h5>Demand Letter</h5>
//           <Button onClick={handleCloseModal}>Close</Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default Demand;


// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, Box } from '@mui/material';
// import { FaEye, FaBuilding, FaFileDownload } from "react-icons/fa";

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const sections = [
//   { label: "Firm Display", icon: <FaBuilding size={20} />, createLabel: "Create Firm" },
//   { label: "Project Display", icon: <FaBuilding size={20} />, createLabel: "Create Project" },
//   { label: "LandOwner Display", icon: <FaBuilding size={20} />, createLabel: "Create Landowner Info" },
//   { label: "Flat Allotment Display", icon: <FaBuilding size={20} />, createLabel: "Create Flat Allotment Info" },
//   { label: "Download PDF", icon: <FaFileDownload size={20} />, createLabel: "" }
// ];

// const Demand = () => {
//   const [loans, setLoans] = useState([]);
//   const [expandedSection, setExpandedSection] = useState(null);
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedLoan, setSelectedLoan] = useState(null);

//   useEffect(() => {
//     loadLoansData();
//   }, []);

//   const loadLoansData = async () => {
//     const data = await fetchLoansData();
//     setLoans(data);
//   };

//   const handleToggleSection = (index) => {
//     if (sections[index].label === "Download PDF") {
//       handleDownloadPDF();
//       return;
//     }
//     setExpandedSection(prev => (prev === index ? null : index));
//   };

//   const handleDownloadPDF = () => {
//     const link = document.createElement("a");
//     link.href = "/path/to/demand_letter.pdf";
//     link.download = "Demand_Letter.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleOpenModal = (loan) => {
//     setSelectedLoan(loan);
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setSelectedLoan(null);
//   };

//   return (
//     <div className="main-content">
//       <h6>Developer Module / Basic Information Management</h6>

//       <div className="d-flex align-items-center mb-3">
//         {sections.map((section, index) => (
//           <Button
//             key={index}
//             onClick={() => handleToggleSection(index)}
//             variant="outlined"
//             color="success"
//             className='m-3'
//             style={{ borderRadius: '20px' }}
//             startIcon={<FaEye size={20} color="#28a745" />}
//           >
//             {expandedSection === index ? section.label : null}
//           </Button>
//         ))}
//       </div>

//       {expandedSection !== null && sections[expandedSection].label !== "Download PDF" && (
//         <div className="content-container mt-3">
//           {sections[expandedSection].createLabel && (
//             <Button variant="contained" color="primary" onClick={() => handleOpenModal(null)}>
//               + {sections[expandedSection].createLabel}
//             </Button>
//           )}

//           <TableContainer component={Paper} className="mt-4">
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>FLAT NO.</TableCell>
//                   <TableCell>NAME OF ALLOTEE</TableCell>
//                   <TableCell>ACTIONS</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {loans.map((loan, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{loan.flatNo}</TableCell>
//                     <TableCell>{loan.nameOfAllotee}</TableCell>
//                     <TableCell>
//                       <Button variant="contained" color="secondary" onClick={() => handleOpenModal(loan)}>
//                         Open Draft
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       )}

//       <Modal open={openModal} onClose={handleCloseModal}>
//         <Box sx={{ width: 500, bgcolor: "background.paper", borderRadius: 2, p: 4, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", boxShadow: 24 }}>
//           <h5>Demand Letter</h5>
//           <Button onClick={handleCloseModal}>Close</Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default Demand;



// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, Box } from '@mui/material';
// import { FaEye, FaBuilding, FaFileDownload } from "react-icons/fa";
// import FirmForm from './FirmForm';

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const sections = [
//   { label: "Firm Display", icon: <FaBuilding size={20} />, createLabel: "Create Firm" },
//   { label: "Project Display", icon: <FaBuilding size={20} />, createLabel: "Create Project" },
//   { label: "LandOwner Display", icon: <FaBuilding size={20} />, createLabel: "Create Landowner Info" },
//   { label: "Flat Allotment Display", icon: <FaBuilding size={20} />, createLabel: "Create Flat Allotment Info" },
//   { label: "Download PDF", icon: <FaFileDownload size={20} />, createLabel: "" }
// ];

// const BasicInfo= () => {
//   const [loans, setLoans] = useState([]);
//   const [expandedSection, setExpandedSection] = useState(null);
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedLoan, setSelectedLoan] = useState(null);
//   const [openFirmForm, setOpenFirmForm] = useState(false);

//   useEffect(() => {
//     loadLoansData();
//   }, []);

//   const loadLoansData = async () => {
//     const data = await fetchLoansData();
//     setLoans(data);
//   };

//   const handleToggleSection = (index) => {
//     if (sections[index].label === "Download PDF") {
//       handleDownloadPDF();
//       return;
//     }
//     setExpandedSection(prev => (prev === index ? null : index));
//   };

//   const handleDownloadPDF = () => {
//     const link = document.createElement("a");
//     link.href = "/path/to/demand_letter.pdf";
//     link.download = "Demand_Letter.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleOpenModal = (loan) => {
//     setSelectedLoan(loan);
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setSelectedLoan(null);
//   };

//   return (
//     <div className="main-content">
//       <h6>Developer Module / Basic Information Management</h6>

//       <div className="d-flex align-items-center mb-3">
//         {sections.map((section, index) => (
//           <Button
//             key={index}
//             onClick={() => handleToggleSection(index)}
//             variant="outlined"
//             color="success"
//             className='m-3'
//             style={{ borderRadius: '20px' }}
//             startIcon={<FaEye size={20} color="#28a745" />}
//           >
//             {expandedSection === index ? section.label : null}
//           </Button>
//         ))}
//       </div>

//       {expandedSection !== null && sections[expandedSection].label !== "Download PDF" && (
//         <div className="content-container mt-3">
//           {sections[expandedSection].createLabel && (
//             <Button variant="contained" color="primary" onClick={() => setOpenFirmForm(true)}>
//               + {sections[expandedSection].createLabel}
//             </Button>
//           )}

//           <TableContainer component={Paper} className="mt-4">
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>FLAT NO.</TableCell>
//                   <TableCell>NAME OF ALLOTEE</TableCell>
//                   <TableCell>ACTIONS</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {loans.map((loan, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{loan.flatNo}</TableCell>
//                     <TableCell>{loan.nameOfAllotee}</TableCell>
//                     <TableCell>
//                       <Button variant="contained" color="secondary" onClick={() => handleOpenModal(loan)}>
//                         Open Draft
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       )}

//       <FirmForm open={openFirmForm} handleClose={() => setOpenFirmForm(false)} />

//       <Modal open={openModal} onClose={handleCloseModal}>
//         <Box sx={{ width: 500, bgcolor: "background.paper", borderRadius: 2, p: 4, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", boxShadow: 24 }}>
//           <h5>Demand Letter</h5>
//           <Button onClick={handleCloseModal}>Close</Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default BasicInfo;


// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, Box, TextField } from '@mui/material';
// import { FaEye, FaBuilding, FaFileDownload } from "react-icons/fa";

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const sections = [
//   { label: "Firm Display", icon: <FaBuilding size={20} />, createLabel: "Create Firm" },
//   { label: "Project Display", icon: <FaBuilding size={20} />, createLabel: "Create Project" },
//   { label: "LandOwner Display", icon: <FaBuilding size={20} />, createLabel: "Create Landowner Info" },
//   { label: "Flat Allotment Display", icon: <FaBuilding size={20} />, createLabel: "Create Flat Allotment Info" },
//   { label: "Download PDF", icon: <FaFileDownload size={20} />, createLabel: "" }
// ];

// const BasicInfo = () => {
//   const [loans, setLoans] = useState([]);
//   const [expandedSection, setExpandedSection] = useState(null);
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedLoan, setSelectedLoan] = useState(null);
//   const [showFirmForm, setShowFirmForm] = useState(false);
//   const [firmName, setFirmName] = useState("");
  
//   useEffect(() => {
//     loadLoansData();
//   }, []);

//   const loadLoansData = async () => {
//     const data = await fetchLoansData();
//     setLoans(data);
//   };

//   const handleToggleSection = (index) => {
//     if (sections[index].label === "Download PDF") {
//       handleDownloadPDF();
//       return;
//     }
//     setExpandedSection(prev => (prev === index ? null : index));
//     setShowFirmForm(false);
//   };

//   const handleDownloadPDF = () => {
//     const link = document.createElement("a");
//     link.href = "/path/to/demand_letter.pdf";
//     link.download = "Demand_Letter.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleOpenModal = (loan) => {
//     setSelectedLoan(loan);
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setSelectedLoan(null);
//   };

//   const handleCreateFirm = () => {
//     console.log("Creating Firm: ", firmName);
//     setShowFirmForm(false);
//   };

//   return (
//     <div className="main-content">
//       <h6>Developer Module / Basic Information Management</h6>

//       <div className="d-flex align-items-center mb-3">
//         {sections.map((section, index) => (
//           <Button
//             key={index}
//             onClick={() => handleToggleSection(index)}
//             variant="outlined"
//             color="success"
//             className='m-3'
//             style={{ borderRadius: '20px' }}
//             startIcon={<FaEye size={20} color="#28a745" />}
//           >
//             {expandedSection === index ? section.label : null}
//           </Button>
//         ))}
//       </div>

//       {expandedSection !== null && sections[expandedSection].label !== "Download PDF" && (
//         <div className="content-container mt-3">
//           {sections[expandedSection].createLabel && (
//             <Button variant="contained" color="primary" onClick={() => setShowFirmForm(true)}>
//               + {sections[expandedSection].createLabel}
//             </Button>
//           )}

//           {showFirmForm && expandedSection === 0 && (
//             <div className="firm-form mt-4 p-3 border rounded">
//               <h5>Create Firm</h5>
//               <TextField
//                 label="Firm Name"
//                 variant="outlined"
//                 fullWidth
//                 value={firmName}
//                 onChange={(e) => setFirmName(e.target.value)}
//                 className="mb-3"
//               />
//               <Button variant="contained" color="success" onClick={handleCreateFirm}>
//                 Save Firm
//               </Button>
//             </div>
//           )}

//           <TableContainer component={Paper} className="mt-4">
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>FLAT NO.</TableCell>
//                   <TableCell>NAME OF ALLOTEE</TableCell>
//                   <TableCell>ACTIONS</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {loans.map((loan, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{loan.flatNo}</TableCell>
//                     <TableCell>{loan.nameOfAllotee}</TableCell>
//                     <TableCell>
//                       <Button variant="contained" color="secondary" onClick={() => handleOpenModal(loan)}>
//                         Open Draft
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       )}

//       <Modal open={openModal} onClose={handleCloseModal}>
//         <Box sx={{ width: 500, bgcolor: "background.paper", borderRadius: 2, p: 4, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", boxShadow: 24 }}>
//           <h5>Demand Letter</h5>
//           <Button onClick={handleCloseModal}>Close</Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default BasicInfo;



// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, Box, TextField } from '@mui/material';
// import { FaEye, FaBuilding, FaFileDownload } from "react-icons/fa";

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const sections = [
//   { label: "Firm Display", icon: <FaBuilding size={20} />, createLabel: "Create Firm" },
//   { label: "Project Display", icon: <FaBuilding size={20} />, createLabel: "Create Project" },
//   { label: "LandOwner Display", icon: <FaBuilding size={20} />, createLabel: "Create Landowner Info" },
//   { label: "Flat Allotment Display", icon: <FaBuilding size={20} />, createLabel: "Create Flat Allotment Info" },
//   { label: "Download PDF", icon: <FaFileDownload size={20} />, createLabel: "" }
// ];

// const BasicInfo = () => {
//   const [loans, setLoans] = useState([]);
//   const [expandedSection, setExpandedSection] = useState(null);
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedLoan, setSelectedLoan] = useState(null);
//   const [showFirmForm, setShowFirmForm] = useState(false);
//   const [firmDetails, setFirmDetails] = useState({
//     firmName: "",
//     firmAddress: "",
//     firmPAN: "",
//     firmGST: "",
//     partnerName: "",
//     partnerAge: "",
//     partnerOccupation: "",
//     partnerMobile: "",
//     partnerEmail: "",
//     partnerAddress: "",
//     partnerPAN: "",
//     partnerAadhaar: ""
//   });

//   useEffect(() => {
//     loadLoansData();
//   }, []);

//   const loadLoansData = async () => {
//     const data = await fetchLoansData();
//     setLoans(data);
//   };

//   const handleToggleSection = (index) => {
//     if (sections[index].label === "Download PDF") {
//       handleDownloadPDF();
//       return;
//     }
//     setExpandedSection(index);
//     setShowFirmForm(false);
//   };

//   const handleDownloadPDF = () => {
//     const link = document.createElement("a");
//     link.href = "/path/to/demand_letter.pdf";
//     link.download = "Demand_Letter.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleCreateFirm = () => {
//     console.log("Creating Firm: ", firmDetails);
//     setShowFirmForm(false);
//   };

//   return (
//     <div className="main-content">
//       <h6>Developer Module / Basic Information Management</h6>

//       <div className="d-flex align-items-center mb-3">
//         {sections.map((section, index) => (
//           <Button
//             key={index}
//             onClick={() => handleToggleSection(index)}
//             variant="outlined"
//             color="success"
//             className='m-3'
//             style={{ borderRadius: '20px' }}
//             startIcon={<FaEye size={20} color="#28a745" />}
//           >
//             {expandedSection === index ? section.label : null}
//           </Button>
//         ))}
//       </div>

//       {expandedSection === 0 && showFirmForm ? (
//         <div className="firm-form mt-4 p-3 border rounded">
//           <h5>Firm Details</h5>
//           <TextField label="Firm Name" fullWidth className="mb-3" />
//           <TextField label="Firm Address" fullWidth className="mb-3" />
//           <TextField label="Firm PAN No" fullWidth className="mb-3" />
//           <TextField label="Firm GST No" fullWidth className="mb-3" />
//           <input type="file" className="mb-3" /> Firm PAN No Document
//           <input type="file" className="mb-3" /> Firm GST No Document
//           <input type="file" className="mb-3" /> Light Bill for Address Proof
          
//           <h5>Partner Details</h5>
//           <TextField label="Name" fullWidth className="mb-3" />
//           <TextField label="Age" fullWidth className="mb-3" />
//           <TextField label="Occupation" fullWidth className="mb-3" />
//           <TextField label="Mobile No." fullWidth className="mb-3" />
//           <TextField label="Mail ID" fullWidth className="mb-3" />
//           <TextField label="Residential Address" fullWidth className="mb-3" />
//           <TextField label="PAN No." fullWidth className="mb-3" />
//           <TextField label="Aadhaar No." fullWidth className="mb-3" />
//           <input type="file" className="mb-3" /> Residential Address Document
//           <input type="file" className="mb-3" /> PAN No Document
//           <input type="file" className="mb-3" /> Aadhaar No Document
//           <input type="file" className="mb-3" /> Photo Document
//           <input type="file" className="mb-3" /> Light Bill for Address Proof
          
//           <Button variant="contained" color="success" onClick={handleCreateFirm}>
//             Save Firm
//           </Button>
//         </div>
//       ) : expandedSection !== null && (
//         <div className="content-container mt-3">
//           <Button variant="contained" color="primary" onClick={() => setShowFirmForm(true)}>
//             + {sections[expandedSection].createLabel}
//           </Button>

//           <TableContainer component={Paper} className="mt-4">
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>FLAT NO.</TableCell>
//                   <TableCell>NAME OF ALLOTEE</TableCell>
//                   <TableCell>ACTIONS</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {loans.map((loan, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{loan.flatNo}</TableCell>
//                     <TableCell>{loan.nameOfAllotee}</TableCell>
//                     <TableCell>
//                       <Button variant="contained" color="secondary">
//                         Open Draft
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BasicInfo;


// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Grid } from '@mui/material';
// import { FaEye, FaBuilding, FaFileDownload } from "react-icons/fa";

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const sections = [
//   { label: "Firm Display", icon: <FaBuilding size={20} />, createLabel: "Create Firm" },
//   { label: "Project Display", icon: <FaBuilding size={20} />, createLabel: "Create Project" },
//   { label: "LandOwner Display", icon: <FaBuilding size={20} />, createLabel: "Create Landowner Info" },
//   { label: "Flat Allotment Display", icon: <FaBuilding size={20} />, createLabel: "Create Flat Allotment Info" },
//   { label: "Download PDF", icon: <FaFileDownload size={20} />, createLabel: "" }
// ];

// const BasicInfo = () => {
//   const [loans, setLoans] = useState([]);
//   const [expandedSection, setExpandedSection] = useState(0);
//   const [showFirmForm, setShowFirmForm] = useState(false);
  
//   useEffect(() => {
//     loadLoansData();
//   }, []);

//   const loadLoansData = async () => {
//     const data = await fetchLoansData();
//     setLoans(data);
//   };

//   const handleToggleSection = (index) => {
//     if (sections[index].label === "Download PDF") {
//       handleDownloadPDF();
//       return;
//     }
//     setExpandedSection(index);
//     setShowFirmForm(false);
//   };

//   const handleDownloadPDF = () => {
//     const link = document.createElement("a");
//     link.href = "/path/to/demand_letter.pdf";
//     link.download = "Demand_Letter.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleCreateFirm = () => {
//     setShowFirmForm(false);
//   };

//   return (
//     <div className="main-content">
//       <h6>Developer Module / Basic Information Management</h6>
      
//       <div className="d-flex align-items-center mb-3">
//         {sections.map((section, index) => (
//           <Button
//             key={index}
//             onClick={() => handleToggleSection(index)}
//             variant="outlined"
//             color="success"
//             className='m-3'
//             style={{ borderRadius: '20px' }}
//             startIcon={<FaEye size={20} color="#28a745" />}
//           >
//             {expandedSection === index ? section.label : null}
//           </Button>
//         ))}
//       </div>
      
//       {expandedSection === 0 && (
//         <div className="content-container mt-3">
//           {!showFirmForm ? (
//             <Button variant="contained" color="primary" onClick={() => setShowFirmForm(true)}>
//               + Create Firm
//             </Button>
//           ) : (
//             <div className="firm-form mt-4 p-3 border rounded">
//               <h5>Firm Details</h5>
//               <Grid container spacing={2}>
//                 <Grid item xs={4}><TextField label="Firm Name" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Firm Address" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Firm PAN No" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Firm GST No" fullWidth /></Grid>
//                 <Grid item xs={4}><input type="file" /> Firm PAN No Document</Grid>
//                 <Grid item xs={4}><input type="file" /> Firm GST No Document</Grid>
//               </Grid>
              
//               <h5 className="mt-4">Partner Details</h5>
//               <Grid container spacing={2}>
//                 <Grid item xs={4}><TextField label="Name" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Age" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Occupation" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Mobile No." fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Mail ID" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Residential Address" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="PAN No." fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Aadhaar No." fullWidth /></Grid>
//                 <Grid item xs={4}><input type="file" /> Residential Address Document</Grid>
//                 <Grid item xs={4}><input type="file" /> PAN No Document</Grid>
//                 <Grid item xs={4}><input type="file" /> Aadhaar No Document</Grid>
//                 <Grid item xs={4}><input type="file" /> Photo Document</Grid>
//                 <Grid item xs={4}><input type="file" /> Light Bill for Address Proof</Grid>
//               </Grid>
              
//               <Button className="mt-3" variant="contained" color="success" onClick={handleCreateFirm}>
//                 Save Firm
//               </Button>
//             </div>
//           )}
          
//           <TableContainer component={Paper} className="mt-4">
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>FLAT NO.</TableCell>
//                   <TableCell>NAME OF ALLOTEE</TableCell>
//                   <TableCell>ACTIONS</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {loans.map((loan, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{loan.flatNo}</TableCell>
//                     <TableCell>{loan.nameOfAllotee}</TableCell>
//                     <TableCell>
//                       <Button variant="contained" color="secondary">
//                         Open Draft
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BasicInfo;


// ==========



// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Grid } from '@mui/material';
// import { FaEye, FaBuilding, FaFileDownload, FaPlus, FaTrash } from "react-icons/fa";

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const sections = [
//   { label: "Firm Display", icon: <FaBuilding size={20} />, createLabel: "Create Firm" },
//   { label: "Project Display", icon: <FaBuilding size={20} />, createLabel: "Create Project" },
//   { label: "LandOwner Display", icon: <FaBuilding size={20} />, createLabel: "Create Landowner Info" },
//   { label: "Flat Allotment Display", icon: <FaBuilding size={20} />, createLabel: "Create Flat Allotment Info" },
//   { label: "Download PDF", icon: <FaFileDownload size={20} />, createLabel: "" }
// ];

// const BasicInfo = () => {
//   const [loans, setLoans] = useState([]);
//   const [expandedSection, setExpandedSection] = useState(0);
//   const [showFirmForm, setShowFirmForm] = useState(false);
//   const [partners, setPartners] = useState([]);
//   const [showProjectForm, setShowProjectForm] = useState(false);
//   const [phases, setPhases] = useState([]);


//   useEffect(() => {
//     loadLoansData();
//   }, []);

//   const loadLoansData = async () => {
//     const data = await fetchLoansData();
//     setLoans(data);
//   };

//   const handleToggleSection = (index) => {
//     if (sections[index].label === "Download PDF") {
//       handleDownloadPDF();
//       return;
//     }

//     setExpandedSection(index);
//     setShowFirmForm(false);
//     setShowProjectForm(false); 
//     setShowLandownerForm(false);
   

//   };

 

//   const handleDownloadPDF = () => {
//     const link = document.createElement("a");
//     link.href = "/path/to/demand_letter.pdf";
//     link.download = "Demand_Letter.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleAddPartner = () => {
//     setPartners([...partners, { name: "", age: "", occupation: "", mobile: "", email: "", address: "", pan: "", aadhaar: "" }]);
//   };

//   const handleRemovePartner = (index) => {
//     setPartners(partners.filter((_, i) => i !== index));
//   };

 

//   const handleAddPhase = () => {
//     setPhases([...phases, { phaseNo: "", wingNo: "", mahareraNo: "" }]); // add default empty phase
//   };

//   const handleRemovePhase = (index) => {
//     setPhases(phases.filter((_, i) => i !== index));
//   };

//   const handleCreateFirm = () => {
//     setShowFirmForm(false);
//   };


//   return (
//     <div className="main-content">
//       <h6>Developer Module / Basic Information Management</h6>
      
//       <div className="d-flex align-items-center mb-3">
//         {sections.map((section, index) => (
//           <Button
//             key={index}
//             onClick={() => handleToggleSection(index)}
//             variant="outlined"
//             color="success"
//             className='m-3'
//             style={{ borderRadius: '20px' }}
//             startIcon={<FaEye size={20} color="#28a745" />}
//           >
//             {expandedSection === index ? section.label : null}
//           </Button>
//         ))}
//       </div>
      
//       {expandedSection === 0 && (
//         <div className="content-container mt-3">
//           {!showFirmForm ? (
//             <Button variant="contained" color="primary" onClick={() => setShowFirmForm(true)}>
//               + Create Firm
//             </Button>
//           ) : (
//             <div className="firm-form mt-4 p-3 border rounded">
//               <h5>Firm Details</h5>
//               <Grid container spacing={2}>
//                 <Grid item xs={4}><TextField label="Firm Name" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Firm Address" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Firm PAN No" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Firm GST No" fullWidth /></Grid>
//                 <Grid item xs={4}><input type="file" /> Firm PAN No Document</Grid>
//                 <Grid item xs={4}><input type="file" /> Firm GST No Document</Grid>
//               </Grid>
              
//               <h5 className="mt-4">Partner Details</h5>
//               {partners.map((partner, index) => (
//                 <Grid container spacing={2} key={index}>
//                   <Grid item xs={4}><TextField label="Name" fullWidth /></Grid>
//                   <Grid item xs={4}><TextField label="Age" fullWidth /></Grid>
//                   <Grid item xs={4}><TextField label="Occupation" fullWidth /></Grid>
//                   <Grid item xs={4}><TextField label="Mobile No." fullWidth /></Grid>
//                   <Grid item xs={4}><TextField label="Mail ID" fullWidth /></Grid>
//                   <Grid item xs={4}><TextField label="Residential Address" fullWidth /></Grid>
//                   <Grid item xs={4}><TextField label="PAN No." fullWidth /></Grid>
//                   <Grid item xs={4}><TextField label="Aadhaar No." fullWidth /></Grid>
//                   <Grid item xs={4}><Button variant="contained" color="secondary" onClick={() => handleRemovePartner(index)}><FaTrash /></Button></Grid>
//                 </Grid>
//               ))}
              
//               <Button className="m-3" variant="contained" color="primary" onClick={handleAddPartner}>
//                 <FaPlus />  Add Partner
//               </Button>
              
//               <Button className="m-3" variant="contained" color="success" onClick={handleCreateFirm}>
//                 Save Firm
//               </Button>
//             </div>
//           )}
//         </div>
//       )}




// {expandedSection === 1 && (
//         <div className="content-container mt-3">
//           {!showProjectForm ? (
//             <Button variant="contained" color="primary" onClick={() => setShowProjectForm(true)}>
//               + Create Project
//             </Button>
//           ) : (
//             <div className="project-form mt-4 p-3 border rounded">
//               <h5>Project Details</h5>
//               <Grid container spacing={2}>
//                 <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Project Address" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Old Survey Number" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="New Survey Number" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Village" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Taluka" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="District" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Sanction Authority" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="East" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="West" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="North" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="South" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Latitude" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Longitude" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Landmark" fullWidth /></Grid>
//               </Grid>
              
//               <h5 className="mt-4">Phase Details</h5>
//               <TableContainer component={Paper}>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Phase No</TableCell>
//                       <TableCell>Wing No</TableCell>
//                       <TableCell>Maharera No</TableCell>
//                       <TableCell>Action</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {phases.map((phase, index) => (
//                       <TableRow key={index}>
//                         <TableCell><TextField fullWidth value={phase.phaseNo} onChange={(e) => setPhases(phases.map((p, i) => i === index ? { ...p, phaseNo: e.target.value } : p))} /></TableCell>
//                         <TableCell><TextField fullWidth value={phase.wingNo} onChange={(e) => setPhases(phases.map((p, i) => i === index ? { ...p, wingNo: e.target.value } : p))} /></TableCell>
//                         <TableCell><TextField fullWidth value={phase.mahareraNo} onChange={(e) => setPhases(phases.map((p, i) => i === index ? { ...p, mahareraNo: e.target.value } : p))} /></TableCell>
//                         <TableCell>
//                           <Button variant="contained" color="secondary" onClick={() => handleRemovePhase(index)}>
//                             <FaTrash />
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
              
//               <Button className="m-3" variant="contained" color="primary" onClick={handleAddPhase}>
//                 <FaPlus />  Add Row
//               </Button>
              
//               <Button className="m-3" variant="contained" color="success">
//                 Submit Project
//               </Button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };






// {expandedSection === 2 && (
//     <div className="content-container mt-3">
//       {!showProjectForm ? (
//         <Button variant="contained" color="primary" onClick={() => setShowProjectForm(true)}>
//           + Create LandOwner Info   
//         </Button>
//       ) : (
//         <div className="project-form mt-4 p-3 border rounded">
//           <h5>Project Details</h5>
//           <Grid container spacing={2}>
//             <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Project Address" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Old Survey Number" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="New Survey Number" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Village" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Taluka" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="District" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Sanction Authority" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="East" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="West" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="North" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="South" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Latitude" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Longitude" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Landmark" fullWidth /></Grid>
//           </Grid>
          
//           <h5 className="mt-4">Phase Details</h5>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Phase No</TableCell>
//                   <TableCell>Wing No</TableCell>
//                   <TableCell>Maharera No</TableCell>
//                   <TableCell>Action</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {phases.map((phase, index) => (
//                   <TableRow key={index}>
//                     <TableCell><TextField fullWidth value={phase.phaseNo} onChange={(e) => setPhases(phases.map((p, i) => i === index ? { ...p, phaseNo: e.target.value } : p))} /></TableCell>
//                     <TableCell><TextField fullWidth value={phase.wingNo} onChange={(e) => setPhases(phases.map((p, i) => i === index ? { ...p, wingNo: e.target.value } : p))} /></TableCell>
//                     <TableCell><TextField fullWidth value={phase.mahareraNo} onChange={(e) => setPhases(phases.map((p, i) => i === index ? { ...p, mahareraNo: e.target.value } : p))} /></TableCell>
//                     <TableCell>
//                       <Button variant="contained" color="secondary" onClick={() => handleRemovePhase(index)}>
//                         <FaTrash />
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
          
//           <Button className="m-3" variant="contained" color="primary" onClick={handleAddPhase}>
//             <FaPlus />  Add Row
//           </Button>
          
//           <Button className="m-3" variant="contained" color="success">
//             Submit Project
//           </Button>
//         </div>
//       )}
//     </div>
//   )}


//   {expandedSection === 3 && ( 
//     <div className="content-container mt-3">
//       {!showLandownerForm ? (
//         // <Button 
//         //   variant="contained" 
//         //   color="primary" 
//         //   onClick={() => setShowLandownerForm(true)}
//         // >
//         //   + Display LandOwner Info   
//         // </Button>

//         <Button variant="contained" color="primary" onClick={() => setShowLandownerForm(true)}>
//         + Display LandOwner Info
//       </Button>
//       ) : (
//         <div className="landowner-form mt-4 p-3 border rounded">
//           <h5>Landowner Details</h5>
//           <Grid container spacing={2}>
//             <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Mobile No." fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Landowner Name" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Age" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Occupation" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Mail ID" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Village" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="District" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Taluka" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Name of Bank" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Bank Address" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Account No." fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Aadhaar No." fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Residential Address" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="PAN No." fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Light Bill" fullWidth /></Grid>
//             <Grid item xs={4}>
//               <input type="file" accept="image/*" />
//             </Grid>
//           </Grid>
  
//           <h5 className="mt-4">Bank Details</h5>
//           <Grid container spacing={2}>
//             <Grid item xs={4}><TextField label="Select a Bank" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Bank Address" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Account No." fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="IFSC Code" fullWidth /></Grid>
//           </Grid>
  
//           <Button className="m-3" variant="contained" color="success">
//             Submit Landowner Info
//           </Button>
//         </div>
//       )}
//     </div>
//   )}
  
  

// export default BasicInfo;


// =========

// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Grid } from '@mui/material';
// import { FaEye, FaBuilding, FaFileDownload, FaPlus, FaTrash } from "react-icons/fa";

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const sections = [
//   { label: "Firm Display", icon: <FaBuilding size={20} />, createLabel: "Create Firm" },
//   { label: "Project Display", icon: <FaBuilding size={20} />, createLabel: "Create Project" },
//   { label: "LandOwner Display", icon: <FaBuilding size={20} />, createLabel: "Create Landowner Info" },
//   { label: "Flat Allotment Display", icon: <FaBuilding size={20} />, createLabel: "Create Flat Allotment Info" },
//   { label: "Download PDF", icon: <FaFileDownload size={20} />, createLabel: "" }
// ];

// const BasicInfo = () => {
//   const [loans, setLoans] = useState([]);
//   const [expandedSection, setExpandedSection] = useState(0); // Ensure expandedSection is defined here
//   const [showFirmForm, setShowFirmForm] = useState(false);
//   const [partners, setPartners] = useState([]);
//   const [showProjectForm, setShowProjectForm] = useState(false);
//   const [phases, setPhases] = useState([]);
//   const [showLandownerForm, setShowLandownerForm] = useState(false); // Add showLandownerForm state

//   useEffect(() => {
//     loadLoansData();
//   }, []);

//   const loadLoansData = async () => {
//     const data = await fetchLoansData();
//     setLoans(data);
//   };

//   const handleToggleSection = (index) => {
//     if (sections[index].label === "Download PDF") {
//       handleDownloadPDF();
//       return;
//     }

//     setExpandedSection(index);  // Set expandedSection when toggling sections
//     setShowFirmForm(false);
//     setShowProjectForm(false); 
//     setShowLandownerForm(false); // Reset showLandownerForm state when switching sections
//   };

//   const handleDownloadPDF = () => {
//     const link = document.createElement("a");
//     link.href = "/path/to/demand_letter.pdf";
//     link.download = "Demand_Letter.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleAddPartner = () => {
//     setPartners([...partners, { name: "", age: "", occupation: "", mobile: "", email: "", address: "", pan: "", aadhaar: "" }]);
//   };

//   const handleRemovePartner = (index) => {
//     setPartners(partners.filter((_, i) => i !== index));
//   };

//   const handleAddPhase = () => {
//     setPhases([...phases, { phaseNo: "", wingNo: "", mahareraNo: "" }]); // Add default empty phase
//   };

//   const handleRemovePhase = (index) => {
//     setPhases(phases.filter((_, i) => i !== index));
//   };

//   const handleCreateFirm = () => {
//     setShowFirmForm(false);
//   };

//   return (
//     <div className="main-content">
//       <h6>Developer Module / Basic Information Management</h6>
      
//       <div className="d-flex align-items-center mb-3">
//         {sections.map((section, index) => (
//           <Button
//             key={index}
//             onClick={() => handleToggleSection(index)}
//             variant="outlined"
//             color="success"
//             className='m-3'
//             style={{ borderRadius: '20px' }}
//             startIcon={<FaEye size={20} color="#28a745" />}
//           >
//             {expandedSection === index ? section.label : null}
//           </Button>
//         ))}
//       </div>

//       {expandedSection === 0 && (
//         <div className="content-container mt-3">
//           {!showFirmForm ? (
//             <Button variant="contained" color="primary" onClick={() => setShowFirmForm(true)}>
//               + Create Firm
//             </Button>
//           ) : (
//             <div className="firm-form mt-4 p-3 border rounded">
//               <h5>Firm Details</h5>
//               <Grid container spacing={2}>
//                 <Grid item xs={4}><TextField label="Firm Name" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Firm Address" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Firm PAN No" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Firm GST No" fullWidth /></Grid>
//                 <Grid item xs={4}><input type="file" /> Firm PAN No Document</Grid>
//                 <Grid item xs={4}><input type="file" /> Firm GST No Document</Grid>
//               </Grid>

//               <h5 className="mt-4">Partner Details</h5>
//               {partners.map((partner, index) => (
//                 <Grid container spacing={2} key={index}>
//                   <Grid item xs={4}><TextField label="Name" fullWidth /></Grid>
//                   <Grid item xs={4}><TextField label="Age" fullWidth /></Grid>
//                   <Grid item xs={4}><TextField label="Occupation" fullWidth /></Grid>
//                   <Grid item xs={4}><TextField label="Mobile No." fullWidth /></Grid>
//                   <Grid item xs={4}><TextField label="Mail ID" fullWidth /></Grid>
//                   <Grid item xs={4}><TextField label="Residential Address" fullWidth /></Grid>
//                   <Grid item xs={4}><TextField label="PAN No." fullWidth /></Grid>
//                   <Grid item xs={4}><TextField label="Aadhaar No." fullWidth /></Grid>
//                   <Grid item xs={4}><Button variant="contained" color="secondary" onClick={() => handleRemovePartner(index)}><FaTrash /></Button></Grid>
//                 </Grid>
//               ))}

//               <Button className="m-3" variant="contained" color="primary" onClick={handleAddPartner}>
//                 <FaPlus />  Add Partner
//               </Button>

//               <Button className="m-3" variant="contained" color="success" onClick={handleCreateFirm}>
//                 Save Firm
//               </Button>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Add other sections here, following the same pattern as section 0 */}
//       {expandedSection === 1 && (
//         <div className="content-container mt-3">
//           {!showProjectForm ? (
//             <Button variant="contained" color="primary" onClick={() => setShowProjectForm(true)}>
//               + Create Project
//             </Button>
//           ) : (
//             <div className="project-form mt-4 p-3 border rounded">
//               <h5>Project Details</h5>
//               <Grid container spacing={2}>
//                 <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Project Address" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Old Survey Number" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="New Survey Number" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Village" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Taluka" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="District" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Sanction Authority" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="East" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="West" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="North" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="South" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Latitude" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Longitude" fullWidth /></Grid>
//                 <Grid item xs={4}><TextField label="Landmark" fullWidth /></Grid>
//               </Grid>
              
//               <h5 className="mt-4">Phase Details</h5>
//               <TableContainer component={Paper}>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Phase No</TableCell>
//                       <TableCell>Wing No</TableCell>
//                       <TableCell>Maharera No</TableCell>
//                       <TableCell>Action</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {phases.map((phase, index) => (
//                       <TableRow key={index}>
//                         <TableCell><TextField fullWidth value={phase.phaseNo} onChange={(e) => setPhases(phases.map((p, i) => i === index ? { ...p, phaseNo: e.target.value } : p))} /></TableCell>
//                         <TableCell><TextField fullWidth value={phase.wingNo} onChange={(e) => setPhases(phases.map((p, i) => i === index ? { ...p, wingNo: e.target.value } : p))} /></TableCell>
//                         <TableCell><TextField fullWidth value={phase.mahareraNo} onChange={(e) => setPhases(phases.map((p, i) => i === index ? { ...p, mahareraNo: e.target.value } : p))} /></TableCell>
//                         <TableCell>
//                           <Button variant="contained" color="secondary" onClick={() => handleRemovePhase(index)}>
//                             <FaTrash />
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
              
//               <Button className="m-3" variant="contained" color="primary" onClick={handleAddPhase}>
//                 <FaPlus />  Add Row
//               </Button>
              
//               <Button className="m-3" variant="contained" color="success">
//                 Submit Project
//               </Button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

      
//  {expandedSection === 2 && (
//     <div className="content-container mt-3">
//       {!showProjectForm ? (
//         <Button variant="contained" color="primary" onClick={() => setShowProjectForm(true)}>
//           + Create LandOwner Info   
//         </Button>
//       ) : (
//         <div className="project-form mt-4 p-3 border rounded">
//           <h5>Project Details</h5>
//           <Grid container spacing={2}>
//             <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Project Address" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Old Survey Number" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="New Survey Number" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Village" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Taluka" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="District" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Sanction Authority" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="East" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="West" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="North" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="South" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Latitude" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Longitude" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Landmark" fullWidth /></Grid>
//           </Grid>
          
//           <h5 className="mt-4">Phase Details</h5>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Phase No</TableCell>
//                   <TableCell>Wing No</TableCell>
//                   <TableCell>Maharera No</TableCell>
//                   <TableCell>Action</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {phases.map((phase, index) => (
//                   <TableRow key={index}>
//                     <TableCell><TextField fullWidth value={phase.phaseNo} onChange={(e) => setPhases(phases.map((p, i) => i === index ? { ...p, phaseNo: e.target.value } : p))} /></TableCell>
//                     <TableCell><TextField fullWidth value={phase.wingNo} onChange={(e) => setPhases(phases.map((p, i) => i === index ? { ...p, wingNo: e.target.value } : p))} /></TableCell>
//                     <TableCell><TextField fullWidth value={phase.mahareraNo} onChange={(e) => setPhases(phases.map((p, i) => i === index ? { ...p, mahareraNo: e.target.value } : p))} /></TableCell>
//                     <TableCell>
//                       <Button variant="contained" color="secondary" onClick={() => handleRemovePhase(index)}>
//                         <FaTrash />
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
          
//           <Button className="m-3" variant="contained" color="primary" onClick={handleAddPhase}>
//             <FaPlus />  Add Row
//           </Button>
          
//           <Button className="m-3" variant="contained" color="success">
//             Submit Project
//           </Button>
//         </div>
//       )}
//     </div>
//   )}
// {expandedSection === 3 && ( 
//     <div className="content-container mt-3">
//       {!showLandownerForm ? (
       

//         <Button variant="contained" color="primary" onClick={() => setShowLandownerForm(true)}>
//         + Display LandOwner Info
//       </Button>
//       ) : (
//         <div className="landowner-form mt-4 p-3 border rounded">
//           <h5>Landowner Details</h5>
//           <Grid container spacing={2}>
//             <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Mobile No." fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Landowner Name" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Age" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Occupation" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Mail ID" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Village" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="District" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Taluka" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Name of Bank" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Bank Address" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Account No." fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Aadhaar No." fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Residential Address" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="PAN No." fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Light Bill" fullWidth /></Grid>
//             <Grid item xs={4}>
//               <input type="file" accept="image/*" />
//             </Grid>
//           </Grid>
  
//           <h5 className="mt-4">Bank Details</h5>
//           <Grid container spacing={2}>
//             <Grid item xs={4}><TextField label="Select a Bank" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Bank Address" fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="Account No." fullWidth /></Grid>
//             <Grid item xs={4}><TextField label="IFSC Code" fullWidth /></Grid>
//           </Grid>
  
//           <Button className="m-3" variant="contained" color="success">
//             Submit Landowner Info
//           </Button>
//         </div>
//       )}
//     </div>
//   )}

//     </div>
//   );
// };

// export default BasicInfo;



// ==================

import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Box,Tabs, Tab, Button, TextField, Grid } from '@mui/material';
import { FaEye, FaBuilding, FaFileDownload, FaPlus, FaTrash } from "react-icons/fa";
import FirmTable from './FirmTable';
import DisplayTable from "./DisplayTable";
import LandownerTable from "./LandownerTable";
import FlatAllotment from './FlatAllotement';


const fetchLoansData = async () => {
  const response = await fetch('/api/getOCRCollection');
  return response.json();
};

const sections = [
  { label: "Firm Display", icon: <FaBuilding size={20} />, createLabel: "Create Firm" },
  { label: "Project Display", icon: <FaBuilding size={20} />, createLabel: "Create Project" },
  { label: "LandOwner Display", icon: <FaBuilding size={20} />, createLabel: "Create Landowner Info" },
  { label: "Flat Allotment Display", icon: <FaBuilding size={20} />, createLabel: "Create Flat Allotment Info" },
  { label: "Download PDF", icon: <FaFileDownload size={20} />, createLabel: "" }
];


// const FirmTable = () => {
//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Column 1</TableCell>
//             <TableCell>Column 2</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           <TableRow>
//             <TableCell>Data 1</TableCell>
//             <TableCell>Data 2</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };


  
const BasicInfo = () => {
  const [loans, setLoans] = useState([]);
  const [expandedSection, setExpandedSection] = useState(0); // Ensure expandedSection is defined here
  const [showFirmForm, setShowFirmForm] = useState(false);
  const [partners, setPartners] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [phases, setPhases] = useState([]);
  const [showLandownerForm, setShowLandownerForm] = useState(false); 
  const [showFlatForm, setShowFlatForm] = useState(false); 
  const [selectedTab, setSelectedTab] = useState("firm");
  const [projectData, setProjectData] = useState([]);
  // const[FlatAllotement , setFlatAllotement] = useState([false]);
  const [showFlatAllotment, setShowFlatAllotment] = useState(false);

  useEffect(() => {
    loadLoansData();
  }, []);

  const loadLoansData = async () => {
    const data = await fetchLoansData();
    setLoans(data);
  };

  const handleTabChange = (_, newValue) => {
    setSelectedTab(newValue);
  };


  const handleToggleSection = (index) => {
    if (sections[index].label === "Download PDF") {
      handleDownloadPDF();
      return;
    }
    console.log("Clicked Section Index:", index);
    console.log("Selected Tab Before Update:", selectedTab);
    setExpandedSection(index);  

      // Set selected tab dynamically based on the section clicked
  if (sections[index].label === "Project Display") {
    setSelectedTab("display");
  } else if (sections[index].label === "Firm Display") {
    setSelectedTab("firm");
  } else if (sections[index].label === "LandOwner Display") {
    setSelectedTab("landowner");
  } else if (sections[index].label === "Flat Allotement Display") {
    setSelectedTab("allotement");
  }


  
    setShowFirmForm(false);
    setShowProjectForm(false); 
    setShowLandownerForm(false); 
    // setFlatAllotement(false);
    setShowFlatForm(false);
  };

  const [newPhase, setNewPhase] = useState({
    phaseNo: '',
    wingNo: '',
    mahareraNo: ''
  });

  
   {/* Table Section */}
   {selectedTab === "firm" && <FirmTable />}
   {selectedTab === "display" && <DisplayTable />}
   {selectedTab === "landowner" && <LandownerTable />}
   {selectedTab === "allotement" && <FlatAllotement/>}

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/path/to/demand_letter.pdf";
    link.download = "Demand_Letter.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddPartner = () => {
    setPartners([...partners, { name: "", age: "", occupation: "", mobile: "", email: "", address: "", pan: "", aadhaar: "" }]);
  };

  const handleRemovePartner = (index) => {
    setPartners(partners.filter((_, i) => i !== index));
  };

  const handleAddPhase = () => {
    setPhases([...phases, { phaseNo: "", wingNo: "", mahareraNo: "" }]); // Add default empty phase
  };

  const handleRemovePhase = (index) => {
    setPhases(phases.filter((_, i) => i !== index));
  };

 

  const handleCreateFirm = () => {
    setShowFirmForm(false);
    setShowProjectForm(false);
  };

  const handleCreateProject = () => {
    setShowProjectForm(true);
  };


  return (
    <div className="main-content">
      <h6>Developer Module / Basic Information Management</h6>
     
   
 
    


      <div className="d-flex align-items-center mb-3">
        {sections.map((section, index) => (
          <Button
            key={index}
            onClick={() => handleToggleSection(index)}
            variant="outlined"
            color="success"
            className='m-3'
            style={{ borderRadius: '20px' }}
            startIcon={<FaEye size={20} color="#28a745" />}
          >
            {expandedSection === index ? section.label : null}
          </Button>
        ))}
      </div>

      {expandedSection === 0 &&  selectedTab === "firm" && (
        <div className="content-container mt-3">
          {!showFirmForm ? (
            <>
            <Button variant="contained" color="primary" onClick={() => setShowFirmForm(true)}>
              + Create Firm
            </Button>
             <div className="mt-3">
             {/* <FirmTable /> */}
             <FirmTable firms={loans} />
           </div>
           </>
          ) : (
            <div className="firm-form mt-4 p-3 border rounded">
              <h5>Firm Details</h5>
              <Grid container spacing={2}>
                <Grid item xs={4}><TextField label="Firm Name" fullWidth /></Grid>
                <Grid item xs={4}><TextField label="Firm Address" fullWidth /></Grid>
                <Grid item xs={4}><TextField label="Firm PAN No" fullWidth /></Grid>
                <Grid item xs={4}><TextField label="Firm GST No" fullWidth /></Grid>
                <Grid item xs={4}><TextField type="file" /> Firm PAN No Document</Grid>
                <Grid item xs={4}><TextField type="file" /> Firm GST No Document</Grid>
              </Grid>

              <h5 className="mt-4">Partner Details</h5>
              {partners.map((partner, index) => (
                <Grid container spacing={2} key={index}>
                  <Grid item xs={4}><TextField label="Name" fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="Age" fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="Occupation" fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="Mobile No." fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="Mail ID" fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="Residential Address" fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="PAN No." fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="Aadhaar No." fullWidth /></Grid>
                  <Grid item xs={4}><Button variant="contained" color="secondary" onClick={() => handleRemovePartner(index)}><FaTrash /></Button></Grid>
                </Grid>
              ))}

              <Button className="m-3" variant="contained" color="primary" onClick={handleAddPartner}>
                <FaPlus />  Add Partner
              </Button>

              <Button className="m-3" variant="contained" color="success" onClick={handleCreateFirm}>
                Save Firm
              </Button>
            </div>
          )}


          {/* <table>
            <tr>
              <th>wd</th>
              <th>ssd</th>
            </tr>
          </table> */}
        </div>
      )}

     
{/* 
 {expandedSection === 1 && (
  <div className="content-container mt-3">
    {!showProjectForm ? (
      <Button variant="contained" color="primary" onClick={() => setShowProjectForm(true)}>
        + Create Project
      </Button>
    ) : (
      <div className="project-form mt-4 p-3 border rounded">
        <h5>Project Details</h5>
        <Grid container spacing={2}>
          <Grid item xs={4}><TextField label="FIRM Name" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Project Address" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Old Survey Number" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="New Survey Number" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Village" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Taluka" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="District" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Sanction Authority" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="East" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="West" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="North" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="South" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Latitude" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Longitude" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Landmark" fullWidth /></Grid>
        </Grid>

        <h5 className="mt-4">Phase Details</h5>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
             

<TableRow>
        <TableCell>Phase No</TableCell>
        <TableCell>Wing No</TableCell>
        <TableCell>Maharera No</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <TextField fullWidth placeholder="Enter Phase No" value={newPhase.phaseNo} 
            onChange={(e) => setNewPhase({ ...newPhase, phaseNo: e.target.value })} 
          />
        </TableCell>
        <TableCell>
          <TextField fullWidth placeholder="Enter Wing No" value={newPhase.wingNo} 
            onChange={(e) => setNewPhase({ ...newPhase, wingNo: e.target.value })} 
          />
        </TableCell>
        <TableCell>
          <TextField fullWidth placeholder="Enter Maharera No" value={newPhase.mahareraNo} 
            onChange={(e) => setNewPhase({ ...newPhase, mahareraNo: e.target.value })} 
          />
        </TableCell>
        <TableCell>
          <Button variant="contained" color="primary" onClick={handleAddPhase}>
            Add
          </Button>
        </TableCell>
      </TableRow>
    </TableHead>
    
            <TableBody>
  {phases.map((phase, index) => (
    <TableRow key={index}>
      <TableCell>
        <TextField
          fullWidth
          value={phase.phaseNo}
          onChange={(e) =>
            setPhases(
              phases.map((p, i) =>
                i === index ? { ...p, phaseNo: e.target.value } : p
              )
            )
          }
        />
      </TableCell>
      <TableCell>
        <TextField
          fullWidth
          value={phase.wingNo}
          onChange={(e) =>
            setPhases(
              phases.map((p, i) =>
                i === index ? { ...p, wingNo: e.target.value } : p
              )
            )
          }
        />
      </TableCell>
      <TableCell>
        <TextField
          fullWidth
          value={phase.mahareraNo}
          onChange={(e) =>
            setPhases(
              phases.map((p, i) =>
                i === index ? { ...p, mahareraNo: e.target.value } : p
              )
            )
          }
        />
      </TableCell>
      <TableCell>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleRemovePhase(index)}
        >
          <FaTrash />
        </Button>
      </TableCell>
    </TableRow>
  ))}
</TableBody>

          </Table>
        </TableContainer>

     
      </div>
    )}
  </div>
)} */}


{expandedSection === 1 && selectedTab === "display" && (
  <div className="content-container mt-3">
   
    {!showProjectForm ? (
       <>
      {/* <Button variant="contained" color="primary" onClick={() => setShowProjectForm(true)}>
        + Create Project
      </Button> */}

<Button variant="contained" color="primary" onClick={() => {
   console.log("Before:", showProjectForm);
   setShowProjectForm(true);
   console.log("After:", showProjectForm);
}}>
+ Create Project
</Button>


<div className='mt-3'>
<DisplayTable data={projectData} />
</div>
   </>
    ) : (
      <div className="project-form mt-4 p-3 border rounded" style={{ maxHeight: '500px', overflowY: 'auto' }}>
        <h5>Project Details</h5>
        <Grid container spacing={2}>
          <Grid item xs={4}><TextField label="FIRM Name" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Project Address" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Old Survey Number" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="New Survey Number" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Village" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Taluka" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="District" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Sanction Authority" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="East" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="West" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="North" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="South" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Latitude" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Longitude" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Landmark" fullWidth /></Grid>
        </Grid>

        <h5 className="mt-4">Phase Details</h5>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Phase No</TableCell>
                <TableCell>Wing No</TableCell>
                <TableCell>Maharera No</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField fullWidth placeholder="Enter Phase No" value={newPhase.phaseNo} 
                    onChange={(e) => setNewPhase({ ...newPhase, phaseNo: e.target.value })} 
                  />
                </TableCell>
                <TableCell>
                  <TextField fullWidth placeholder="Enter Wing No" value={newPhase.wingNo} 
                    onChange={(e) => setNewPhase({ ...newPhase, wingNo: e.target.value })} 
                  />
                </TableCell>
                <TableCell>
                  <TextField fullWidth placeholder="Enter Maharera No" value={newPhase.mahareraNo} 
                    onChange={(e) => setNewPhase({ ...newPhase, mahareraNo: e.target.value })} 
                  />
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={handleRemovePhase}>
                 Remove
                  </Button>
                </TableCell>
              
              </TableRow>
              <Button variant='contained' className="m-3 " color='primary'onClick={handleRemovePhase}>Add Row</Button>
              <Button variant='contained' className="m-3 " color='primary'onClick={handleRemovePhase}>Submit</Button>
            </TableHead>
            <TableBody>
              {phases.map((phase, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField
                      fullWidth
                      value={phase.phaseNo}
                      onChange={(e) =>
                        setPhases(
                          phases.map((p, i) =>
                            i === index ? { ...p, phaseNo: e.target.value } : p
                          )
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      value={phase.wingNo}
                      onChange={(e) =>
                        setPhases(
                          phases.map((p, i) =>
                            i === index ? { ...p, wingNo: e.target.value } : p
                          )
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      value={phase.mahareraNo}
                      onChange={(e) =>
                        setPhases(
                          phases.map((p, i) =>
                            i === index ? { ...p, mahareraNo: e.target.value } : p
                          )
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleRemovePhase(index)}
                    >
                      <FaTrash />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )}
  </div>
)} 









      {/* Add further sections here */}
      {/* {expandedSection === 2 && (
  <div className="content-container mt-3">
    {!showLandownerForm ? (
     <Button variant="contained" color="primary" onClick={() => setShowLandownerForm(true)}>
     + Display LandOwner Info
   </Button>
   
    ) : (
      <div className="landowner-form mt-4 p-3 border rounded">
        <h5>Landowner Details</h5>
        <Grid container spacing={2}>
          <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Mobile No." fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Landowner Name" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Age" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Occupation" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Mail ID" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Village" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="District" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Taluka" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Name of Bank" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Bank Address" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Account No." fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Aadhaar No." fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Residential Address" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="PAN No." fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Light Bill" fullWidth /></Grid>
          <Grid item xs={4}>
            <TextField type="file" accept="image/*" />
          </Grid>
        </Grid>

        <h5 className="mt-4">Bank Details</h5>
        <Grid container spacing={2}>
          <Grid item xs={4}><TextField label="Select a Bank" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Bank Address" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Account No." fullWidth /></Grid>
          <Grid item xs={4}><TextField label="IFSC Code" fullWidth /></Grid>
        </Grid>

        <Button className="m-3" variant="contained" color="success">
          Submit Landowner Info
        </Button>
      </div>
    )}
  </div>
)} */}

{expandedSection === 2 && selectedTab === "landowner" && (
  <div className="content-container mt-3">
   
    {!showLandownerForm ? (
       <>
      <Button variant="contained" color="primary" onClick={() => setShowLandownerForm(true)}>
        + Display LandOwner Info
      </Button>

<div className='mt-3'>
<LandownerTable data={projectData} />
</div>
</>

    ) : (
      <div
        className="landowner-form mt-4 p-3 border rounded"
        style={{ maxHeight: "500px", overflowY: "auto" }} // Added styles for vertical scrollbar
      >
        <h5>Landowner Details</h5>
        <Grid container spacing={2}>
          <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Mobile No." fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Landowner Name" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Age" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Occupation" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Mail ID" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Village" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="District" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Taluka" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Name of Bank" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Bank Address" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Account No." fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Aadhaar No." fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Residential Address" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="PAN No." fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Light Bill" fullWidth /></Grid>
          <Grid item xs={4}>
            <TextField type="file" accept="image/*" />
          </Grid>
        </Grid>

        <h5 className="mt-4">Bank Details</h5>
        <Grid container spacing={2}>
          <Grid item xs={4}><TextField label="Select a Bank" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Bank Address" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Account No." fullWidth /></Grid>
          <Grid item xs={4}><TextField label="IFSC Code" fullWidth /></Grid>
        </Grid>

        <Button className="m-3" variant="contained" color="success">
          Submit Landowner Info
        </Button>
      </div>
    )}
  </div>
)}

{expandedSection === 3 && selectedTab === "allotement" && (
    <div className="content-container mt-3">
     
      {! showFlatForm ? (
         <>
        {/* <Button variant="contained" color="primary" onClick={() => setShowFlatForm(true)}>
          + Flat Allotement Info
        </Button> */}
        <Button variant="contained" color="primary" onClick={() => setShowFlatForm(true)}>
  + Flat Allotement Info
</Button>

<div className='mt-3'>
<FlatAllotment data={data} />
</div>

</>
      ) : (
        <div className="landowner-form mt-4 p-3 border rounded">
          <h5>Flat Allotement Display </h5>
          <Grid container spacing={2}>
            <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Name" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Mobile No." fullWidth /></Grid>
            <Grid item xs={4}><TextField label="No. of Flats Alloted" fullWidth /></Grid>
      
            </Grid>
          <h4 className='pt-3'>Flat Details</h4>
          <TableContainer component={Paper}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>RERA CARPET AREA (SQ FT)</TableCell>
        <TableCell>WING</TableCell>
        <TableCell>FLAT NO.</TableCell>
        <TableCell>TYPE OF FLAT</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {/* Add table rows dynamically here if needed */}
    </TableBody>
  </Table>
</TableContainer>

          
  
          
  
          <Button className="m-3" variant="contained" color="success">
            Submit Landowner Info
          </Button>
        </div>
      )}
    </div>
  )}

{/* 
{expandedSection === 4 && (
    <div className="content-container mt-3">
      {setShowFlatForm? (
        <Button variant="contained" color="primary" onClick={() => setShowLandownerForm(true)}>
          + Flat Allotement Info
        </Button>
      ) : (
        <div className="landowner-form mt-4 p-3 border rounded">
          <h5>Landowner Details</h5>
          <Grid container spacing={2}>
            <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Mobile No." fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Landowner Name" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Age" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Occupation" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Mail ID" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Village" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="District" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Taluka" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Name of Bank" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Bank Address" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Account No." fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Aadhaar No." fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Residential Address" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="PAN No." fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Light Bill" fullWidth /></Grid>
            <Grid item xs={4}>
              <input type="file" accept="image/*" />
            </Grid>
          </Grid>
  
          <h5 className="mt-4">Bank Details</h5>
          <Grid container spacing={2}>
            <Grid item xs={4}><TextField label="Select a Bank" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Bank Address" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Account No." fullWidth /></Grid>
            <Grid item xs={4}><TextField label="IFSC Code" fullWidth /></Grid>
          </Grid>
  
          <Button className="m-3" variant="contained" color="success">
            Submit Landowner Info
          </Button>
        </div>
      )}
    </div>
  )} */}

  </div>
  )
}
   
 


export default BasicInfo;


