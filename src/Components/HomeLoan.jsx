










// import React, { useState } from "react";
// import { FaEye } from "react-icons/fa";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TablePagination,
//   Paper,
//   Button,
//   TextField,
//   MenuItem,
// } from "@mui/material";

// const columns = [
//   { Header: "FlAT NO", accessor: "FlAT NO" },
//   { Header: "NAME OF ALLOTEE", accessor: "NAME OF ALLOTEE" },
//   { Header: "NAME OF CO-ALLOTEE", accessor: "NAME OF CO-ALLOTEE" },
//   { Header: "TYPE", accessor: "TYPE" },
//   { Header: "FlOOR", accessor: "FlOOR" },
//   { Header: "EMAIL ID", accessor: "EMAILID" },
//   { Header: "WHATSAPP MOBILE NO", accessor: "WHATSAPP" },
//   { Header: "RATE", accessor: "RATE" },
//   { Header: "AGREEMENT VALUE", accessor: "AGREEMENT VALUE" },
//   { Header: "DATE OF BOOKING", accessor: "DATE OF BOOKING" },
//   { Header: "PARKING", accessor: "PARKING" },
//   { Header: "HOME LOAN APPlicability", accessor: "HOME LOAN APPlicability" },
//   { Header: "BANK NAME", accessor: "BANK NAME" },
//   { Header: "BANKER NAME", accessor: "BANKER NAME" },
//   { Header: "MOBILE NO.", accessor: "MOBILE NO." },
//   { Header: "LOAN ACCOUNT NO.", accessor: "LOAN ACCOUNT NO." },
//   { Header: "Loan Amount", accessor: "Loan Amount" },
//   { Header: "SANCTION LETTER", accessor: "SANCTION LETTER" },
//   { Header: "HOME LOAN SANCTION CERTIFICATE COLLECTED", accessor: "HOME LOAN SANCTION CERTIFICATE COLLECTED" },
//   { Header: "BOOKING CONFIRMATION", accessor: "BOOKING CONFIRMATION" },
//   { Header: "BOOKING CANCELATION REASON", accessor: "BOOKING CANCELATION REASON" },
//   { Header: "BOOKING CONFIRMATION MAIL SENT.", accessor: "BOOKING CONFIRMATION MAIL SENT" },
// ];

// const data = [
//     {
//     "FlAT NO": "A-101",
//     "NAME OF ALLOTEE": "John Doe",
//     "NAME OF CO-ALLOTEE": "Jane Doe",
//     "TYPE": "2BHK",
//     "FlOOR": "1st",
//     "EMAILID": "johndoe@example.com",
//     "WHATSAPP": "9876543210",
//     "RATE": "5000",
//     "AGREEMENT VALUE": "50,00,000",
//     "DATE OF BOOKING": "2024-01-15",
//     "PARKING": "Yes",
//     "HOME LOAN APPlicability": "Yes",
//     "BANK NAME": "HDFC Bank",
//     "BANKER NAME": "Mr. Sharma",
//     "MOBILE NO.": "9876543210",
//     "LOAN ACCOUNT NO.": "HDFC123456789",
//     "Loan Amount": "40,00,000",
//     "SANCTION LETTER": "Received",
//     "HOME LOAN SANCTION CERTIFICATE COLLECTED": "Yes",
//     "BOOKING CONFIRMATION": "Confirmed",
//     "BOOKING CANCELATION REASON": "N/A",
//     "BOOKING CONFIRMATION MAIL SENT": "Yes"
//   },
      
 
// ];

// const HomeLoan = () => {
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   const [filterType, setFilterType] = useState("");
//   const [filterValue, setFilterValue] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleCollapseToggle = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const handleFilter = () => {
//     console.log({
//       filterType,
//       filterValue,
//       startDate,
//       endDate,
//     });
//   };

//   const handleReset = () => {
//     setFilterType("");
//     setFilterValue("");
//     setStartDate("");
//     setEndDate("");
//   };

//   const handleRowsPerPageChange = (event) => {
//     setRowsPerPage(event.target.value);
//   };

//   const handlePageChange = (event, newPage) => {
//     setPage(newPage);
//   };


//   const getFilterOptions = (type) => {
//     switch (type) {
//       case "Flat Type":
//         return ["1BHK", "2BHK", "3BHK", "Studio"];
//       case "Parking":
//         return ["Basement", "Parking 1","Parking 2"];
//       case "Floor":
//         return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
//       case "Rate":
//         let rates = [];
//         for (let i = 50000; i <= 6000000; i += 50000) {
//           rates.push(`₹${i.toLocaleString()}`);
//         }
//         return rates;
//       default:
//         return [];
//     }
//   };

//   return (
//     <div className="container mt-3 ">
//       <h3 className="fs-6 pb-3 ">Sales Module / Home Loan Management</h3>

//       <div className="d-flex align-items-center mb-2">
//         <Button className="mb-5"
//           onClick={handleCollapseToggle}
//           variant="outlined"
//           color="success"
//           style={{ borderRadius: "20px" }}
//           startIcon={<FaEye size={20} color="#28a745" />}
//         >
//           {!isCollapsed && <span className="text-success ">Home Loan</span>}
//         </Button>
//       </div>

//       <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }} >
//         {/* Start Date */}
//         <label>Start Date:</label>
//         <TextField
//           type="date"
//           variant="outlined"
//           size="small"
//           value={startDate}
//             placeholder="Select Date"  
//             className="bg-white"
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{ width: "150px" }}
//         />

//         {/* End Date */}
//         <label>End Date:</label>
//         <TextField
//           type="date"
//           variant="outlined"
//           size="small"
//           value={endDate}
//           className="bg-white"
//           placeholder="Select Date"
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{ width: "150px" }}
//         />

//         {/* Filter By */}
//         <label>Filter By:</label>
//         <TextField
//           select
//           variant="outlined"
//           size="small"
//           style={{ width: "150px" }}
//           value={filterType}
//           className="bg-white"
//           onChange={(e) => {
//             setFilterType(e.target.value);
//             setFilterValue(""); 
//           }}
//         >
//           <MenuItem value="">Select Filter</MenuItem>
//           <MenuItem value="Flat Type">Flat Type</MenuItem>
//           <MenuItem value="Parking">Parking</MenuItem>
//           <MenuItem value="Floor">Floor</MenuItem>
//           <MenuItem value="Rate">Rate</MenuItem>
//         </TextField>

//         {/* Filter Value */}
//         {filterType && (
//           <>
//             <label>{filterType}:</label>
//             <TextField
//               select
//               variant="outlined"
//               size="small"
//               className="bg-white"
//               style={{ width: "150px" }}
//               value={filterValue}
//               onChange={(e) => setFilterValue(e.target.value)}
//             >
//               {getFilterOptions(filterType).map((option) => (
//                 <MenuItem key={option} value={option}>
//                   {option}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </>
//         )}

//         <Button
//           variant="contained"
//           color="secondary"
//           style={{ borderRadius: "5px", padding: "10px 15px" }}
//           onClick={handleReset}
//         >
//           Reset
//         </Button>
//       </div>

//       <TableContainer
//         component={Paper}
//         style={{
//           marginTop: "40px",
//           marginBottom: "30px",
//           marginLeft: "20px",
//           marginRight: "20px",
//           padding: "20px",
//           width: "calc(100% - 230px)",
//           overflowX: "auto",
//         }}
//       >
//         <Table style={{ tableLayout: "auto", width: "100%" }}>
//           <TableHead className="">
//             <TableRow>
//               {columns
//                 .filter((column) => column.Header !== "Actions")
//                 .map((column) => (
//                   <TableCell key={column.Header} align="center" className="fw-bold fs-6"
//                 //   sx={{
//                 //     border: "1px solid rgba(224, 224, 224, 1)", // Light grey border
//                 //     padding: "8px", // Adjust padding if needed
//                 //   }}
//                   >
//                     {column.Header}
//                   </TableCell>
//                 ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data
//               .filter((row) => {
//                 const dateBooking = new Date(row.dateBooking);
//                 const startDateValid = startDate ? dateBooking >= new Date(startDate) : true;
//                 const endDateValid = endDate ? dateBooking <= new Date(endDate) : true;

//                 return (
//                   (filterType
//                     ? row[filterType.toLowerCase().replace(" ", "")]?.includes(filterValue)
//                     : true) &&
//                   startDateValid &&
//                   endDateValid
//                 );
//               })
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row, index) => (
//                 <TableRow key={index}>
//                   {columns
//                     .filter((column) => column.Header !== "Actions")
//                     .map((column) => (
//                       <TableCell key={column.accessor} align="center">
//                         {row[column.accessor]}
//                       </TableCell>
//                     ))}
//                 </TableRow>
//               ))}
//           </TableBody>



//         </Table>
//       </TableContainer>

     
   
//         <div className="d-flex align-items-center justify-content-start gap-3">
//   <Button
//     variant="outlined"
//     className="bg-primary text-white"
//     color="primary"
//     onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 0))}
//     disabled={page === 0}
//   >
//     Previous
//   </Button>
//   <Button
//     variant="outlined"
//     className="bg-primary text-white"
//     color="primary"
//     onClick={() => setPage((prevPage) => Math.min(prevPage + 1, Math.ceil(data.length / rowsPerPage) - 1))}
//     disabled={data.length === 0}
//   >
//     Next
//   </Button>
//   <div className="d-flex align-items-center">
//     <label className="me-2">Rows per page:</label>
//     <input
//       type="number"
//       className="form-control"
//       value={rowsPerPage}
//       onChange={handleRowsPerPageChange}
//       style={{ width: "80px" }}
//     />
//   </div>
// </div>


//       </div>
    
//   );
// };

// export default HomeLoan;



// ==========

// import React, { useState } from "react";
// import { FaEye } from "react-icons/fa";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TablePagination,
//   Paper,
//   Button,
//   TextField,
//   MenuItem,
// } from "@mui/material";

// const columns = [
//   { Header: "FlAT NO", accessor: "FlAT NO" },
//   { Header: "NAME OF ALLOTEE", accessor: "NAME OF ALLOTEE" },
//   { Header: "NAME OF CO-ALLOTEE", accessor: "NAME OF CO-ALLOTEE" },
//   { Header: "TYPE", accessor: "TYPE" },
//   { Header: "FlOOR", accessor: "FlOOR" },
//   { Header: "EMAIL ID", accessor: "EMAILID" },
//   { Header: "WHATSAPP MOBILE NO", accessor: "WHATSAPP" },
//   { Header: "RATE", accessor: "RATE" },
//   { Header: "AGREEMENT VALUE", accessor: "AGREEMENT VALUE" },
//   { Header: "DATE OF BOOKING", accessor: "DATE OF BOOKING" },
//   { Header: "PARKING", accessor: "PARKING" },
//   { Header: "HOME LOAN APPlicability", accessor: "HOME LOAN APPlicability" },
//   { Header: "BANK NAME", accessor: "BANK NAME" },
//   { Header: "BANKER NAME", accessor: "BANKER NAME" },
//   { Header: "MOBILE NO.", accessor: "MOBILE NO." },
//   { Header: "LOAN ACCOUNT NO.", accessor: "LOAN ACCOUNT NO." },
//   { Header: "Loan Amount", accessor: "Loan Amount" },
//   { Header: "SANCTION LETTER", accessor: "SANCTION LETTER" },
//   { Header: "HOME LOAN SANCTION CERTIFICATE COLLECTED", accessor: "HOME LOAN SANCTION CERTIFICATE COLLECTED" },
//   { Header: "BOOKING CONFIRMATION", accessor: "BOOKING CONFIRMATION" },
//   { Header: "BOOKING CANCELATION REASON", accessor: "BOOKING CANCELATION REASON" },
//   { Header: "BOOKING CONFIRMATION MAIL SENT.", accessor: "BOOKING CONFIRMATION MAIL SENT" },
// ];

// const data = [
//   {
//     "FlAT NO": "A-101",
//     "NAME OF ALLOTEE": "John Doe",
//     "NAME OF CO-ALLOTEE": "Jane Doe",
//     "TYPE": "2BHK",
//     "FlOOR": "1st",
//     "EMAILID": "johndoe@example.com",
//     "WHATSAPP": "9876543210",
//     "RATE": "5000",
//     "AGREEMENT VALUE": "50,00,000",
//     "DATE OF BOOKING": "2024-01-15",
//     "PARKING": "Yes",
//     "HOME LOAN APPlicability": "Yes",
//     "BANK NAME": "HDFC Bank",
//     "BANKER NAME": "Mr. Sharma",
//     "MOBILE NO.": "9876543210",
//     "LOAN ACCOUNT NO.": "HDFC123456789",
//     "Loan Amount": "40,00,000",
//     "SANCTION LETTER": "Received",
//     "HOME LOAN SANCTION CERTIFICATE COLLECTED": "Yes",
//     "BOOKING CONFIRMATION": "Confirmed",
//     "BOOKING CANCELATION REASON": "N/A",
//     "BOOKING CONFIRMATION MAIL SENT": "Yes"
//   },
// ];

// const HomeLoan = () => {
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   const [filterType, setFilterType] = useState("");
//   const [filterValue, setFilterValue] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleCollapseToggle = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const handleFilter = () => {
//     console.log({
//       filterType,
//       filterValue,
//       startDate,
//       endDate,
//     });
//   };

//   const handleReset = () => {
//     setFilterType("");
//     setFilterValue("");
//     setStartDate("");
//     setEndDate("");
//   };

//   const handleRowsPerPageChange = (event) => {
//     setRowsPerPage(event.target.value);
//   };

//   const handlePageChange = (event, newPage) => {
//     setPage(newPage);
//   };

//   const getFilterOptions = (type) => {
//     switch (type) {
//       case "Flat Type":
//         return ["1BHK", "2BHK", "3BHK", "Studio"];
//       case "Parking":
//         return ["Basement", "Parking 1", "Parking 2"];
//       case "Floor":
//         return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
//       case "Rate":
//         let rates = [];
//         for (let i = 50000; i <= 6000000; i += 50000) {
//           rates.push(`₹${i.toLocaleString()}`);
//         }
//         return rates;
//       default:
//         return [];
//     }
//   };

//   return (
//     <div className="container mt-3 ">
//       <h3 className="fs-6 pb-3 ">Sales Module / Home Loan Management</h3>

//       <div className="d-flex align-items-center mb-2">
//         <Button className="mb-5"
//           onClick={handleCollapseToggle}
//           variant="outlined"
//           color="success"
//           style={{ borderRadius: "20px" }}
//           startIcon={<FaEye size={20} color="#28a745" />}
//         >
//           {!isCollapsed && <span className="text-success ">Home Loan</span>}
//         </Button>
//       </div>

//       <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }} >
//         {/* Start Date */}
//         <label>Start Date:</label>
//         <TextField
//           type="date"
//           variant="outlined"
//           size="small"
//           value={startDate}
//           placeholder="Select Date"  
//           className="bg-white"
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{ width: "150px" }}
//         />

//         {/* End Date */}
//         <label>End Date:</label>
//         <TextField
//           type="date"
//           variant="outlined"
//           size="small"
//           value={endDate}
//           className="bg-white"
//           placeholder="Select Date"
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{ width: "150px" }}
//         />

//         {/* Filter By */}
//         <label>Filter By:</label>
//         <TextField
//           select
//           variant="outlined"
//           size="small"
//           style={{ width: "150px" }}
//           value={filterType}
//           className="bg-white"
//           onChange={(e) => {
//             setFilterType(e.target.value);
//             setFilterValue(""); 
//           }}
//         >
//           <MenuItem value="">Select Filter</MenuItem>
//           <MenuItem value="Flat Type">Flat Type</MenuItem>
//           <MenuItem value="Parking">Parking</MenuItem>
//           <MenuItem value="Floor">Floor</MenuItem>
//           <MenuItem value="Rate">Rate</MenuItem>
//         </TextField>

//         {/* Filter Value */}
//         {filterType && (
//           <>
//             <label>{filterType}:</label>
//             <TextField
//               select
//               variant="outlined"
//               size="small"
//               className="bg-white"
//               style={{ width: "150px" }}
//               value={filterValue}
//               onChange={(e) => setFilterValue(e.target.value)}
//             >
//               {getFilterOptions(filterType).map((option) => (
//                 <MenuItem key={option} value={option}>
//                   {option}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </>
//         )}

//         <Button
//           variant="contained"
//           color="secondary"
//           style={{ borderRadius: "5px", padding: "10px 15px" }}
//           onClick={handleReset}
//         >
//           Reset
//         </Button>
//       </div>

//       {/* <TableContainer
//         component={Paper}
//         style={{
//           marginTop: "40px",
//           marginBottom: "30px",
//           marginLeft: "20px",
//           marginRight: "20px",
//           padding: "20px",
//           width: "calc(100% - 230px)",
//           overflowX: "auto",
//         }}
//       >
//         <Table style={{ tableLayout: "auto", width: "100%" }}>
//           <TableHead>
//             <TableRow>
//               {columns
//                 .filter((column) => column.Header !== "Actions")
//                 .map((column) => (
//                   <TableCell key={column.Header} align="center" className="fw-bold fs-6">
//                     {column.Header}
//                   </TableCell>
//                 ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data
//               .filter((row) => {
//                 const dateBooking = new Date(row.dateBooking);
//                 const startDateValid = startDate ? dateBooking >= new Date(startDate) : true;
//                 const endDateValid = endDate ? dateBooking <= new Date(endDate) : true;

//                 return (
//                   (filterType
//                     ? row[filterType.toLowerCase().replace(" ", "")]?.includes(filterValue)
//                     : true) &&
//                   startDateValid &&
//                   endDateValid
//                 );
//               })
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row, index) => (
//                 <TableRow key={index}>
//                   {columns
//                     .filter((column) => column.Header !== "Actions")
//                     .map((column) => (
//                       <TableCell key={column.accessor} align="center">
//                         {row[column.accessor]}
//                       </TableCell>
//                     ))}
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer> */}

// <TableContainer component={Paper} style={{ marginTop: "40px", marginBottom: "30px", marginLeft: "20px", marginRight: "20px", padding: "20px", width: "calc(100% - 230px)", overflowX: "auto" }}>
//   <Table style={{ tableLayout: 'auto', width: '100%' }}>
//     <TableHead>
//       <TableRow>
//         <TableCell>Flat No.</TableCell>
//         <TableCell>Name Of Allotee</TableCell>
//         <TableCell>Name Of Co-Allotee</TableCell>
//         <TableCell>Type</TableCell>
//         <TableCell>Floor</TableCell>
//         <TableCell>Email</TableCell>
//         <TableCell>Whatsapp No.</TableCell>
//         <TableCell>Rate</TableCell>
//         <TableCell>Agreement Value</TableCell>
//         <TableCell>Booking Date</TableCell>
//         <TableCell>Parking</TableCell>
//         <TableCell>Parking No</TableCell>
//         <TableCell>Loan Status</TableCell>
//         <TableCell>OCR Amount</TableCell>
//         <TableCell>OCR Received</TableCell>
//         <TableCell>OCR Balance</TableCell>
//         <TableCell>Online</TableCell>
//         <TableCell>Cash With AV</TableCell>
//         <TableCell>History Cash With AV</TableCell>
//         <TableCell>Balance Cash With AV</TableCell>
//         <TableCell>Cash Without AV</TableCell>
//         <TableCell>History Cash Without AV</TableCell>
//         <TableCell>Balance Cash Without AV</TableCell>
//         <TableCell>Received As Per Stage</TableCell>
//         <TableCell>Stamp Duty Total</TableCell>
//         <TableCell>Stamp Duty Received</TableCell>
//         <TableCell>Stamp Duty Balance</TableCell>
//         <TableCell>Reg Total</TableCell>
//         <TableCell>Reg Received</TableCell>
//         <TableCell>Reg Balance</TableCell>
//         <TableCell>GST Total</TableCell>
//         <TableCell>GST Received</TableCell>
//         <TableCell>Balance GST</TableCell>
//         <TableCell>Legal Charges Received</TableCell>
//       </TableRow>
//     </TableHead>
//     <TableBody>
//       {data
//         .filter((row) => {
//           const dateBooking = new Date(row["DATE OF BOOKING"]);
//           const startDateValid = startDate ? dateBooking >= new Date(startDate) : true;
//           const endDateValid = endDate ? dateBooking <= new Date(endDate) : true;

//           return (
//             (filterType
//               ? row[filterType.toLowerCase().replace(" ", "")]?.includes(filterValue)
//               : true) &&
//             startDateValid &&
//             endDateValid
//           );
//         })
//         .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//         .map((row, index) => (
//           <TableRow key={index}>
//             <TableCell>{row["FlAT NO"]}</TableCell>
//             <TableCell>{row["NAME OF ALLOTEE"]}</TableCell>
//             <TableCell>{row["NAME OF CO-ALLOTEE"]}</TableCell>
//             <TableCell>{row["TYPE"]}</TableCell>
//             <TableCell>{row["FlOOR"]}</TableCell>
//             <TableCell>{row["EMAILID"]}</TableCell>
//             <TableCell>{row["WHATSAPP"]}</TableCell>
//             <TableCell>{row["RATE"]}</TableCell>
//             <TableCell>{row["AGREEMENT VALUE"]}</TableCell>
//             <TableCell>{row["DATE OF BOOKING"]}</TableCell>
//             <TableCell>{row["PARKING"]}</TableCell>
//             <TableCell>{row["PARKING"]}</TableCell> {/* You might want to replace this with actual parking number */}
//             <TableCell>{row["HOME LOAN APPlicability"]}</TableCell>
//             <TableCell>{row["Loan Amount"]}</TableCell>
//             <TableCell>{row["SANCTION LETTER"]}</TableCell>
//             <TableCell>{row["HOME LOAN SANCTION CERTIFICATE COLLECTED"]}</TableCell>
//             <TableCell>{row["BOOKING CONFIRMATION"]}</TableCell>
//             <TableCell>{row["BOOKING CANCELATION REASON"]}</TableCell>
//             <TableCell>{row["BOOKING CONFIRMATION MAIL SENT"]}</TableCell>
//           </TableRow>
//         ))}
//     </TableBody>
//   </Table>
// </TableContainer>



//       <div className="d-flex align-items-center justify-content-start gap-3">
//         <Button
//           variant="outlined"
//           className="bg-primary text-white"
//           color="primary"
//           onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 0))}
//           disabled={page === 0}
//         >
//           Previous
//         </Button>
//         <Button
//           variant="outlined"
//           className="bg-primary text-white"
//           color="primary"
//           onClick={() => setPage((prevPage) => Math.min(prevPage + 1, Math.ceil(data.length / rowsPerPage) - 1))}
//           disabled={data.length === 0}
//         >
//           Next
//         </Button>
//         <div className="d-flex align-items-center">
//           <label className="me-2">Rows per page:</label>
//           <input
//             type="number"
//             className="form-control"
//             value={rowsPerPage}
//             onChange={handleRowsPerPageChange}
//             style={{ width: "80px" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeLoan;


// => 
  


// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, Button, MenuItem, Select, InputLabel, FormControl, Box, Collapse, TextField } from '@mui/material';
// import { FaEye } from 'react-icons/fa'; // Ensure you have the FaEye icon imported if you're using it

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const HomeLoan = () => {
//   const [loans, setLoans] = useState([]);
//   const [filteredLoans, setFilteredLoans] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [totalPages, setTotalPages] = useState(1);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
  
//   // State for filter options
//   const [flatType, setFlatType] = useState('');
//   const [parking, setParking] = useState('');
//   const [floor, setFloor] = useState('');
//   const [rate, setRate] = useState('');
  
//   // State to toggle filter visibility
//   const [showFilters, setShowFilters] = useState(false);
//   const [showCRM, setShowCRM] = useState(false);  // State for CRM toggle
//   const [isCollapsed, setIsCollapsed] = useState(false); // State for collapse toggle
//   const [filterType, setFilterType] = useState(''); // For the filter selection
//   const [filterValue, setFilterValue] = useState(''); // For the selected filter value

//   useEffect(() => {
//     loadLoansData();
//   }, []);

//   useEffect(() => {
//     setTotalPages(Math.ceil(filteredLoans.length / rowsPerPage));
//   }, [filteredLoans, rowsPerPage]);

//   const loadLoansData = async () => {
//     const data = await fetchLoansData();
//     setLoans(data);
//     setFilteredLoans(data);
//   };

//   const getFilterOptions = (type) => {
//     switch (type) {
//       case "Flat Type":
//         return ["1BHK", "2BHK", "3BHK", "Studio"];
//       case "Parking":
//         return ["Basement", "Parking 1", "Parking 2"];
//       case "Floor":
//         return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
//       case "Rate":
//         let rates = [];
//         for (let i = 50000; i <= 6000000; i += 50000) {
//           rates.push(`₹${i.toLocaleString()}`);
//         }
//         return rates;
//       default:
//         return [];
//     }
//   };

//   const filterLoansByDate = () => {
//     const filtered = loans.filter(loan => {
//       const loanDate = new Date(loan.dateOfBooking);
//       const start = startDate ? new Date(startDate) : new Date(0);
//       const end = endDate ? new Date(endDate) : new Date();

//       const matchesFilters =
//         (!flatType || loan.type === flatType) &&
//         (!parking || loan.parking === parking) &&
//         (!floor || loan.floor === floor) &&
//         (!rate || loan.rate === rate);

//       return loanDate >= start && loanDate <= end && matchesFilters;
//     });

//     setFilteredLoans(filtered);
//     setCurrentPage(1);
//   };

//   const resetFilters = () => {
//     setStartDate('');
//     setEndDate('');
//     setFlatType('');
//     setParking('');
//     setFloor('');
//     setRate('');
//     setFilteredLoans(loans);
//     setCurrentPage(1);
//     setFilterType('');
//     setFilterValue('');
//   };

//   const handlePagination = (event, newPage) => {
//     setCurrentPage(newPage + 1);
//   };

//   const handleRowsPerPageChange = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10)); // Update rows per page
//     setCurrentPage(1); // Reset to first page whenever rows per page is changed
//   };

//   const displayLoans = () => {
//     const start = (currentPage - 1) * rowsPerPage;
//     const end = Math.min(start + rowsPerPage, filteredLoans.length);
    
//     return filteredLoans.slice(start, end).map((loan, index) => (
//       <TableRow key={loan.flatNo}>
//         <TableCell>{loan.flatNo}</TableCell>
//         <TableCell>{loan.nameOfAllotee}</TableCell>
//         <TableCell>{loan.nameOfCoAllotee}</TableCell>
//         <TableCell>{loan.type}</TableCell>
//         <TableCell>{loan.floor}</TableCell>
//         <TableCell>{loan.emailId}</TableCell>
//         <TableCell>{loan.whatsappMobileNo}</TableCell>
//         <TableCell>{loan.rate}</TableCell>
//         <TableCell>{loan.agreementValue}</TableCell>
//         <TableCell>{loan.dateOfBooking}</TableCell>
//         <TableCell>{loan.parking}</TableCell>
//         <TableCell>{loan.homeLoanApplicability}</TableCell> {/* New column */}
//         <TableCell>{loan.bankName}</TableCell> {/* New column */}
//         <TableCell>{loan.bankerName}</TableCell> {/* New column */}
//         <TableCell>{loan.mobileNo}</TableCell> {/* New column */}
//         <TableCell>{loan.loanAccountNo}</TableCell> {/* New column */}
//         <TableCell>{loan.loanAmount}</TableCell> {/* New column */}
//         <TableCell>{loan.sanctionLetter}</TableCell> {/* New column */}
//         <TableCell>{loan.homeLoanSanctionCertificateCollected}</TableCell> {/* New column */}
//         <TableCell>{loan.bookingCancellationReason}</TableCell> {/* New column */}
//         <TableCell>{loan.bookingConfirmationMailSent}</TableCell> {/* New column */}
//       </TableRow>
//     ));
    
  
//   };

//   const updateLoanStatus = (flatNo, newStatus) => {
//     // Update the loan status in your backend or state here
//     console.log(`Updating loan ${flatNo} status to ${newStatus}`);
//   };

//   // Handle the toggle for collapsing
//   const handleCollapseToggle = () => {
//     setIsCollapsed(prev => !prev);
//   };

//   return (
//     <div className="main-content">
//       <h6>Sales Module / Home Loan Management</h6>

//       {/* CRM Display Button */}
//       <div className="d-flex align-items-center mb-3">
//         <Button
//           onClick={handleCollapseToggle}
//           variant="outlined"
//           color="success"
//           style={{ borderRadius: '20px' }}
//           startIcon={<FaEye size={20} color="#28a745" />}
//         >
//           {!isCollapsed && <span className="text-success">Home Loan </span>}
//         </Button>
//       </div>

//       {/* Filter, Reset, Rows per page in one line */}
//       <div className="d-flex align-items-center justify-content-between mb-3">
//         <div className="d-flex align-items-center gap-3">
//           <label>Filter By:</label>
//           <TextField
//             select
//             variant="outlined"
//             size="small"
//             style={{ width: '150px' }}
//             value={filterType}
//             className="bg-white"
//             onChange={(e) => {
//               setFilterType(e.target.value);
//               setFilterValue('');
//             }}
//           >
//             <MenuItem value="">Select Filter</MenuItem>
//             <MenuItem value="Flat Type">Flat Type</MenuItem>
//             <MenuItem value="Parking">Parking</MenuItem>
//             <MenuItem value="Floor">Floor</MenuItem>
//             <MenuItem value="Rate">Rate</MenuItem>
//           </TextField>

//           {/* Filter Value */}
//           {filterType && (
//             <>
//               <label>{filterType}:</label>
//               <TextField
//                 select
//                 variant="outlined"
//                 size="small"
//                 className="bg-white"
//                 style={{ width: '150px' }}
//                 value={filterValue}
//                 onChange={(e) => setFilterValue(e.target.value)}
//               >
//                 {getFilterOptions(filterType).map((option) => (
//                   <MenuItem key={option} value={option}>
//                     {option}
//                   </MenuItem>
//                 ))}
//               </TextField>

//               {/* Reset Button */}
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 style={{ marginLeft: '10px' }}
//                 onClick={resetFilters}
//               >
//                 Reset
//               </Button>
//             </>
//           )}
//         </div>

//         <div className="d-flex align-items-center gap-3">
//           <div className="d-flex align-items-center">
//             <label className="me-2">Rows per page:</label>
//             <input
//               type="number"
//               className="form-control"
//               value={rowsPerPage}
//               onChange={handleRowsPerPageChange}
//               style={{ width: '80px' }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Table Section */}
//       {/* <TableContainer component={Paper}>
//         <Table style={{ tableLayout: 'auto', width: '100%' }}>
//           <TableHead>
//             <TableRow>
//               <TableCell>Flat No.</TableCell>
//               <TableCell>Name Of Allotee</TableCell>
//               <TableCell>Name Of Co-Allotee</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Floor</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Whatsapp No.</TableCell>
//               <TableCell>Rate</TableCell>
//               <TableCell>Agreement Value</TableCell>
//               <TableCell>Booking Date</TableCell>
//               <TableCell>Parking</TableCell>
//               <TableCell>Parking No</TableCell>
//               <TableCell>Loan Status</TableCell>
//               <TableCell>OCR Amount</TableCell>
//               <TableCell>OCR Received</TableCell>
//               <TableCell>OCR Balance</TableCell>
//               <TableCell>Online</TableCell>
//               <TableCell>Cash With AV</TableCell>
//               <TableCell>History Cash With AV</TableCell>
//               <TableCell>Balance Cash With AV</TableCell>
//               <TableCell>Cash Without AV</TableCell>
//               <TableCell>History Cash Without AV</TableCell>
//               <TableCell>Balance Cash Without AV</TableCell>
//               <TableCell>Received As Per Stage</TableCell>
//               <TableCell>Stamp Duty Total</TableCell>
//               <TableCell>Stamp Duty Received</TableCell>
//               <TableCell>Stamp Duty Balance</TableCell>
//               <TableCell>Reg Total</TableCell>
//               <TableCell>Reg Received</TableCell>
//               <TableCell>Reg Balance</TableCell>
//               <TableCell>GST Total</TableCell>
//               <TableCell>GST Received</TableCell>
//               <TableCell>Balance GST</TableCell>
//               <TableCell>Legal Charges Received</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>{displayLoans()}</TableBody>
//         </Table>
//       </TableContainer> */}
//       <TableContainer component={Paper}>
//   <Table style={{ tableLayout: 'auto', width: '100%' }}>
//     <TableHead>
//       <TableRow>
//         <TableCell>Flat No.</TableCell>
//         <TableCell>Name Of Allotee</TableCell>
//         <TableCell>Name Of Co-Allotee</TableCell>
//         <TableCell>Type</TableCell>
//         <TableCell>Floor</TableCell>
//         <TableCell>Email</TableCell>
//         <TableCell>Whatsapp No.</TableCell>
//         <TableCell>Rate</TableCell>
//         <TableCell>Agreement Value</TableCell>
//         <TableCell>Booking Date</TableCell>
//         <TableCell>Parking</TableCell>
//         <TableCell>Parking No</TableCell>
//         <TableCell>Loan Status</TableCell>
//         <TableCell>OCR Amount</TableCell>
//         <TableCell>OCR Received</TableCell>
//         <TableCell>OCR Balance</TableCell>
//         <TableCell>Online</TableCell>
//         <TableCell>Cash With AV</TableCell>
//         <TableCell>History Cash With AV</TableCell>
//         <TableCell>Balance Cash With AV</TableCell>
//         <TableCell>Cash Without AV</TableCell>
//         <TableCell>History Cash Without AV</TableCell>
//         <TableCell>Balance Cash Without AV</TableCell>
//         <TableCell>Received As Per Stage</TableCell>
//         <TableCell>Stamp Duty Total</TableCell>
//         <TableCell>Stamp Duty Received</TableCell>
//         <TableCell>Stamp Duty Balance</TableCell>
//         <TableCell>Reg Total</TableCell>
//         <TableCell>Reg Received</TableCell>
//         <TableCell>Reg Balance</TableCell>
//         <TableCell>GST Total</TableCell>
//         <TableCell>GST Received</TableCell>
//         <TableCell>Balance GST</TableCell>
//         <TableCell>Legal Charges Received</TableCell>
//         {/* New columns */}
//         <TableCell>Home Loan Applicability</TableCell>
//         <TableCell>Bank Name</TableCell>
//         <TableCell>Banker Name</TableCell>
//         <TableCell>Mobile No.</TableCell>
//         <TableCell>Loan Account No.</TableCell>
//         <TableCell>Loan Amount</TableCell>
//         <TableCell>Sanction Letter</TableCell>
//         <TableCell>Home Loan Sanction Certificate Collected</TableCell>
//         <TableCell>Booking Cancellation Reason</TableCell>
//         <TableCell>Booking Confirmation Mail Sent</TableCell>
//       </TableRow>
//     </TableHead>
//     <TableBody>
//       {filteredLoans.slice(start, end).map((loan, index) => (
//         <TableRow key={loan.flatNo}>
//           <TableCell>{loan.flatNo}</TableCell>
//           <TableCell>{loan.nameOfAllotee}</TableCell>
//           <TableCell>{loan.nameOfCoAllotee}</TableCell>
//           <TableCell>{loan.type}</TableCell>
//           <TableCell>{loan.floor}</TableCell>
//           <TableCell>{loan.emailId}</TableCell>
//           <TableCell>{loan.whatsappMobileNo}</TableCell>
//           <TableCell>{loan.rate}</TableCell>
//           <TableCell>{loan.agreementValue}</TableCell>
//           <TableCell>{loan.dateOfBooking}</TableCell>
//           <TableCell>{loan.parking}</TableCell>
//           <TableCell>{loan.parkingNo}</TableCell>
//           <TableCell>
//             <select
//               className="minimal-select"
//               value={loan.loanStatus}
//               onChange={(e) => updateLoanStatus(loan.flatNo, e.target.value)}
//             >
//               <option value="">{loan.loanStatus || 'Select Status'}</option>
//               <option value="Yes">Yes</option>
//               <option value="No">No</option>
//               <option value="Non Sanction">Non Sanction</option>
//             </select>
//           </TableCell>
//           <TableCell>{loan.ocrAmount}</TableCell>
//           <TableCell>{loan.ocrReceivedAmount}</TableCell>
//           <TableCell>{loan.ocrBalance}</TableCell>
//           <TableCell>{loan.online}</TableCell>
//           <TableCell>{loan.cashWithAV}</TableCell>
//           <TableCell>{loan.historyCashWithAV}</TableCell>
//           <TableCell>{loan.balanceCashWithAV}</TableCell>
//           <TableCell>{loan.cashWithoutAV}</TableCell>
//           <TableCell>{loan.historyCashWithoutAV}</TableCell>
//           <TableCell>{loan.balanceCashWithoutAV}</TableCell>
//           <TableCell>{loan.receivedAsPerStage}</TableCell>
//           <TableCell>{loan.stampDutyTotal}</TableCell>
//           <TableCell>{loan.stampDutyReceived}</TableCell>
//           <TableCell>{loan.stampDutyBalance}</TableCell>
//           <TableCell>{loan.regTotal}</TableCell>
//           <TableCell>{loan.regReceived}</TableCell>
//           <TableCell>{loan.regBalance}</TableCell>
//           <TableCell>{loan.gstTotal}</TableCell>
//           <TableCell>{loan.gstReceived}</TableCell>
//           <TableCell>{loan.balanceGst}</TableCell>
//           <TableCell>{loan.legalChargesReceived}</TableCell>
//           {/* New columns */}
//           <TableCell>{loan.homeLoanApplicability}</TableCell>
//           <TableCell>{loan.bankName}</TableCell>
//           <TableCell>{loan.bankerName}</TableCell>
//           <TableCell>{loan.mobileNo}</TableCell>
//           <TableCell>{loan.loanAccountNo}</TableCell>
//           <TableCell>{loan.loanAmount}</TableCell>
//           <TableCell>{loan.sanctionLetter}</TableCell>
//           <TableCell>{loan.homeLoanSanctionCertificateCollected}</TableCell>
//           <TableCell>{loan.bookingCancellationReason}</TableCell>
//           <TableCell>{loan.bookingConfirmationMailSent}</TableCell>
//         </TableRow>
//       ))}
//     </TableBody>
//   </Table>
// </TableContainer>


//       {/* Pagination Section */}
//       <div className="d-flex align-items-center justify-content-start gap-3 mt-3">
//         <Button
//           variant="outlined"
          
//          className='bg-primary text-white'
//           onClick={() => handlePagination('prev')}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </Button>
//         <Button
//           variant="outlined"
//           className='bg-primary text-white'
//           color="primary"
//           onClick={() => handlePagination('next')}
//           disabled={filteredLoans.length <= currentPage * rowsPerPage}
//         >
//           Next
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default HomeLoan;



import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, MenuItem, TextField } from '@mui/material';
import { FaEye } from 'react-icons/fa'; // Ensure you have the FaEye icon imported if you're using it

const fetchLoansData = async () => {
  const response = await fetch('/api/getOCRCollection');
  return response.json();
};

const HomeLoan = () => {
  const [loans, setLoans] = useState([]);
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  // State for filter options
  const [flatType, setFlatType] = useState('');
  const [parking, setParking] = useState('');
  const [floor, setFloor] = useState('');
  const [rate, setRate] = useState('');
  
  // State to toggle filter visibility
  const [showFilters, setShowFilters] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false); // State for collapse toggle
  const [filterType, setFilterType] = useState(''); // For the filter selection
  const [filterValue, setFilterValue] = useState(''); // For the selected filter value

  useEffect(() => {
    loadLoansData();
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredLoans.length / rowsPerPage));
  }, [filteredLoans, rowsPerPage]);

  const loadLoansData = async () => {
    const data = await fetchLoansData();
    setLoans(data);
    setFilteredLoans(data);
  };

  const getFilterOptions = (type) => {
    switch (type) {
      case "Flat Type":
        return ["1BHK", "2BHK", "3BHK", "Studio"];
      case "Parking":
        return ["Basement", "Parking 1", "Parking 2"];
      case "Floor":
        return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
      case "Rate":
        let rates = [];
        for (let i = 50000; i <= 6000000; i += 50000) {
          rates.push(`₹${i.toLocaleString()}`);
        }
        return rates;
      default:
        return [];
    }
  };

  const filterLoansByDate = () => {
    const filtered = loans.filter(loan => {
      const loanDate = new Date(loan.dateOfBooking);
      const start = startDate ? new Date(startDate) : new Date(0);
      const end = endDate ? new Date(endDate) : new Date();

      const matchesFilters =
        (!flatType || loan.type === flatType) &&
        (!parking || loan.parking === parking) &&
        (!floor || loan.floor === floor) &&
        (!rate || loan.rate === rate);

      return loanDate >= start && loanDate <= end && matchesFilters;
    });

    setFilteredLoans(filtered);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setStartDate('');
    setEndDate('');
    setFlatType('');
    setParking('');
    setFloor('');
    setRate('');
    setFilteredLoans(loans);
    setCurrentPage(1);
    setFilterType('');
    setFilterValue('');
  };

  const handlePagination = (event, newPage) => {
    setCurrentPage(newPage + 1);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10)); // Update rows per page
    setCurrentPage(1); // Reset to first page whenever rows per page is changed
  };

  const start = (currentPage - 1) * rowsPerPage;
  const end = Math.min(start + rowsPerPage, filteredLoans.length);

  const displayLoans = () => {
    return filteredLoans.slice(start, end).map((loan, index) => (
      <TableRow key={loan.flatNo}>
        <TableCell>{loan.flatNo}</TableCell>
        <TableCell>{loan.nameOfAllotee}</TableCell>
        <TableCell>{loan.nameOfCoAllotee}</TableCell>
        <TableCell>{loan.type}</TableCell>
        <TableCell>{loan.floor}</TableCell>
        <TableCell>{loan.emailId}</TableCell>
        <TableCell>{loan.whatsappMobileNo}</TableCell>
        <TableCell>{loan.rate}</TableCell>
        <TableCell>{loan.agreementValue}</TableCell>
        <TableCell>{loan.dateOfBooking}</TableCell>
        <TableCell>{loan.parking}</TableCell>
        <TableCell>{loan.homeLoanApplicability}</TableCell> {/* New column */}
        <TableCell>{loan.bankName}</TableCell> {/* New column */}
        <TableCell>{loan.bankerName}</TableCell> {/* New column */}
        <TableCell>{loan.mobileNo}</TableCell> {/* New column */}
        <TableCell>{loan.loanAccountNo}</TableCell> {/* New column */}
        <TableCell>{loan.loanAmount}</TableCell> {/* New column */}
        <TableCell>{loan.sanctionLetter}</TableCell> {/* New column */}
        <TableCell>{loan.homeLoanSanctionCertificateCollected}</TableCell> {/* New column */}
        <TableCell>{loan.bookingCancellationReason}</TableCell> {/* New column */}
        <TableCell>{loan.bookingConfirmationMailSent}</TableCell> {/* New column */}
      </TableRow>
    ));
  };

  const updateLoanStatus = (flatNo, newStatus) => {
    // Update the loan status in your backend or state here
    console.log(`Updating loan ${flatNo} status to ${newStatus}`);
  };

  // Handle the toggle for collapsing
  const handleCollapseToggle = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <div className="main-content">
      <h6 className='mb-5'>Sales Module / Home Loan Management</h6>

      {/* CRM Display Button */}
      <div className="d-flex align-items-center mb-3">
        <Button
          onClick={handleCollapseToggle}
          variant="outlined"
          color="success"
          className='m-3'
          style={{ borderRadius: '20px' }}
          startIcon={<FaEye size={20} color="#28a745" />}
        >
          {!isCollapsed && <span className="text-success">Home Loan </span>}
        </Button>
      </div>

      {/* Filter, Reset, Rows per page in one line */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="d-flex align-items-center gap-3">
          <label>Filter By:</label>
          <TextField
            select
            variant="outlined"
            size="small"
            style={{ width: '150px' }}
            value={filterType}
            className="bg-white"
            onChange={(e) => {
              setFilterType(e.target.value);
              setFilterValue('');
            }}
          >
            <MenuItem value="">Select Filter</MenuItem>
            <MenuItem value="Flat Type">Flat Type</MenuItem>
            <MenuItem value="Parking">Parking</MenuItem>
            <MenuItem value="Floor">Floor</MenuItem>
            <MenuItem value="Rate">Rate</MenuItem>
          </TextField>

          {/* Filter Value */}
          {filterType && (
            <>
              <label>{filterType}:</label>
              <TextField
                select
                variant="outlined"
                size="small"
                className="bg-white"
                style={{ width: '150px' }}
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              >
                {getFilterOptions(filterType).map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>

              {/* Reset Button */}
              <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: '10px' }}
                onClick={resetFilters}
              >
                Reset
              </Button>
            </>
          )}
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center">
            <label className="me-2">Rows per page:</label>
            <input
              type="number"
              className="form-control"
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              style={{ width: '80px' }}
            />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <TableContainer component={Paper}>
        <Table style={{ tableLayout: 'auto', width: '100%' }}>
          <TableHead>
            <TableRow>
              {/* Table Headers */}
              <TableCell>Flat No.</TableCell>
              <TableCell>Name Of Allotee</TableCell>
              <TableCell>Name Of Co-Allotee</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Floor</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Whatsapp No.</TableCell>
              <TableCell>Rate</TableCell>
              <TableCell>Agreement Value</TableCell>
              <TableCell>Booking Date</TableCell>
              <TableCell>Parking</TableCell>
              <TableCell>Home Loan Applicability</TableCell>
              <TableCell>Bank Name</TableCell>
              <TableCell>Banker Name</TableCell>
              <TableCell>Mobile No</TableCell>
              <TableCell>Loan Acc No</TableCell>
              <TableCell>Loan Amount</TableCell>
              <TableCell>Sanction Letter</TableCell>
              <TableCell>Loan Cert</TableCell>
              <TableCell>Booking Cancellation Reason</TableCell>
              <TableCell>Booking Confirmation Mail</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {displayLoans()}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination Section */}
      <div className="d-flex justify-content-between align-items-center">
        <Button style={{backgroundColor:"#800080"}} className="text-white mt-3" onClick={handlePagination} disabled={currentPage === 1}>Previous</Button>
        <Button style={{backgroundColor:"#800080"}} className='text-white mt-3' onClick={handlePagination} disabled={currentPage === totalPages}>Next</Button>
      </div>
    </div>
  );
};

export default HomeLoan;
