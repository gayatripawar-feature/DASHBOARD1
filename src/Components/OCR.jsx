










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
//     { Header: "FLAT NO.", accessor: "FLAT NO." },
//     { Header: "NAME OF ALLOTEE", accessor: "NAME OF ALLOTEE" },
//     { Header: "NAME OF CO-ALLOTEE", accessor: "NAME OF CO-ALLOTEE" },
//     { Header: "TYPE", accessor: "TYPE" },
//     { Header: "FLOOR", accessor: "FLOOR" },
//     { Header: "EMAIL ID", accessor: "EMAILID" },
//     { Header: "WHATSAPP MOBILE NO", accessor: "WHATSAPP" },
//     { Header: "RATE", accessor: "RATE" },
//     { Header: "AGREEMENT VALUE", accessor: "AGREEMENT VALUE" },
//     { Header: "DATE OF BOOKING", accessor: "DATE OF BOOKING" },
//     { Header: "PARKING", accessor: "PARKING" },
//     { Header: "PARKING NO", accessor: "HOME LOAN APPLICABILITY" },
//     { Header: "LOAN STATUS", accessor: "BANK NAME" },
//     { Header: "10% OF AMOUNT (IF NON SANCTION) OCR", accessor: "BANKER NAME" },
//     { Header: "LOAN AMOUNT (SANCTION)", accessor: "MOBILE NO." },
//     { Header: "OCR AMOUNT", accessor: "LOAN ACCOUNT NO." },
//     { Header: "OCR RECEIVED AMOUNT", accessor: "LOAN AMOUNT" },
//     { Header: "OCR BALANCE", accessor: "SANCTION LETTER" },
//     { Header: "ONLINE", accessor: "HOME LOAN SANCTION CERTIFICATE COLLECTED" },
//     { Header: "CASH (WITH AV)", accessor: "BOOKING CONFIRMATION" },
//     { Header: "HISTORY CASH (WITH AV)", accessor: "BOOKING CANCELATION REASON" },
//     { Header: "BALANCE CASH (WITH AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//     { Header: "CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//     { Header: "HISTORY CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//     { Header: "BALANCE CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//     { Header: "RECEIVED AS PER STAGE OF CONSTRUCTION", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//     { Header: "STAMP DUTY (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//     { Header: "STAMP DUTY (RECEIVE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//     { Header: "STAMP DUTY (BALANCE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//     { Header: "REG. (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//     { Header: "REG. (RECEIVE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//     { Header: "REG. (BALANCE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//     { Header: "GST (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//     { Header: "GST RECEIVED", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//     { Header: "BALANCE GST", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//     { Header: "LEGAL CHARGES RECEIVED", accessor: "BOOKING CONFIRMATION MAIL SENT" }
//   ];
  

// const data = [

      
 
// ];

// const OCR = () => {
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   const [filterType, setFilterType] = useState("");
//   const [filterValue, setFilterValue] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const SidebarLayout = () => {
//     const [collapsed, setCollapsed] = useState(false); // Manage the sidebar state
  
 

    
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
//       <h3 className="fs-6 pb-3 ">Sales Module / OCR Collection Management </h3>

//       <div className="d-flex align-items-center mb-2">
//         <Button className="mb-5"
//           onClick={handleCollapseToggle}
//           variant="outlined"
//           color="success"
//           style={{ borderRadius: "20px" }}
//           startIcon={<FaEye size={20} color="#28a745" />}
//         >
//           {!isCollapsed && <span className="text-success ">OCR Collection</span>}
//         </Button>
//       </div>



// <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
//   {/* Start Date */}
//   <label>Start Date:</label>
//   <TextField
//     type="date"
//     variant="outlined"
//     size="small"
//     value={startDate}
//     className="bg-white"
//     onChange={(e) => setStartDate(e.target.value)}
//     style={{ width: "130px" }}
//   />

//   {/* End Date */}
//   <label>End Date:</label>
//   <TextField
//     type="date"
//     variant="outlined"
//     size="small"
//     value={endDate}
//     className="bg-white"
//     onChange={(e) => setEndDate(e.target.value)}
//     style={{ width: "130px" }}
//   />

//   {/* Filter By */}
//   <label>Filter By:</label>
//   <TextField
//     select
//     variant="outlined"
//     size="small"
//     style={{ width: "130px" }}
//     value={filterType}
//     className="bg-white"
//     onChange={(e) => {
//       setFilterType(e.target.value);
//       setFilterValue("");
//     }}
//   >
//     <MenuItem value="">Select</MenuItem>
//     <MenuItem value="Flat Type">Flat Type</MenuItem>
//     <MenuItem value="Parking">Parking</MenuItem>
//     <MenuItem value="Floor">Floor</MenuItem>
//     <MenuItem value="Rate">Rate</MenuItem>
//   </TextField>

//   {/* Filter Value */}
//   {filterType && (
//     <>
//       <label>{filterType}:</label>
//       <TextField
//         select
//         variant="outlined"
//         size="small"
//         className="bg-white"
//         style={{ width: "130px" }}
//         value={filterValue}
//         onChange={(e) => setFilterValue(e.target.value)}
//       >
//         {getFilterOptions(filterType).map((option) => (
//           <MenuItem key={option} value={option}>
//             {option}
//           </MenuItem>
//         ))}
//       </TextField>
//     </>
//   )}

//   <Button
//     variant="contained"
//     color="secondary"
//     style={{ borderRadius: "5px", padding: "5px 10px" }}
//     onClick={handleReset}
//   >
//     Reset
//   </Button>

//   {/* Pagination Controls */}
//   <Button
//     variant="outlined"
//     className="bg-primary text-white"
//     color="primary"
//     onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 0))}
//     disabled={page === 0}
//     style={{ padding: "5px 10px" }}
//   >
//     Prev
//   </Button>
  
//   <Button
//     variant="outlined"
//     className="bg-primary text-white"
//     color="primary"
//     onClick={() => setPage((prevPage) => Math.min(prevPage + 1, Math.ceil(data.length / rowsPerPage) - 1))}
//     disabled={data.length === 0}
//     style={{ padding: "5px 10px" }}
//   >
//     Next
//   </Button>

//   <label className="mx-2">Rows/Page:</label>
//   <input
//     type="number"
//     className="form-control"
//     value={rowsPerPage}
//     onChange={handleRowsPerPageChange}
//     style={{ width: "70px", padding: "5px" }}
//   />
// </div>

    

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
//       > */}
//  <TableContainer
//   component={Paper}
//   style={{
//     marginTop: "40px",
//     marginBottom: "30px",
//     marginLeft: "20px",
//     marginRight: "20px",
//     padding: "20px",
//     width: collapsed ? "calc(100% - 80px)" : "calc(100% - 230px)",  // Dynamically adjust width based on sidebar state
//     overflowX: "auto",
//   }}
// >
  

 
//         <Table style={{ tableLayout: "auto", width: "100%" }}>
//           <TableHead className="">
//             <TableRow>
//               {columns
//                 .filter((column) => column.Header !== "Actions")
//                 .map((column) => (
//                   <TableCell key={column.Header} align="center" className="fw-bold fs-6"
             
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

     
   
//       </div>
//   );
// };

// export default OCR;


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
//   { Header: "FLAT NO.", accessor: "FLAT NO." },
//   { Header: "NAME OF ALLOTEE", accessor: "NAME OF ALLOTEE" },
//   { Header: "NAME OF CO-ALLOTEE", accessor: "NAME OF CO-ALLOTEE" },
//   { Header: "TYPE", accessor: "TYPE" },
//   { Header: "FLOOR", accessor: "FLOOR" },
//   { Header: "EMAIL ID", accessor: "EMAILID" },
//   { Header: "WHATSAPP MOBILE NO", accessor: "WHATSAPP" },
//   { Header: "RATE", accessor: "RATE" },
//   { Header: "AGREEMENT VALUE", accessor: "AGREEMENT VALUE" },
//   { Header: "DATE OF BOOKING", accessor: "DATE OF BOOKING" },
//   { Header: "PARKING", accessor: "PARKING" },
//   { Header: "PARKING NO", accessor: "HOME LOAN APPLICABILITY" },
//   { Header: "LOAN STATUS", accessor: "BANK NAME" },
//   { Header: "10% OF AMOUNT (IF NON SANCTION) OCR", accessor: "BANKER NAME" },
//   { Header: "LOAN AMOUNT (SANCTION)", accessor: "MOBILE NO." },
//   { Header: "OCR AMOUNT", accessor: "LOAN ACCOUNT NO." },
//   { Header: "OCR RECEIVED AMOUNT", accessor: "LOAN AMOUNT" },
//   { Header: "OCR BALANCE", accessor: "SANCTION LETTER" },
//   { Header: "ONLINE", accessor: "HOME LOAN SANCTION CERTIFICATE COLLECTED" },
//   { Header: "CASH (WITH AV)", accessor: "BOOKING CONFIRMATION" },
//   { Header: "HISTORY CASH (WITH AV)", accessor: "BOOKING CANCELATION REASON" },
//   { Header: "BALANCE CASH (WITH AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "HISTORY CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "BALANCE CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "RECEIVED AS PER STAGE OF CONSTRUCTION", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (RECEIVE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (BALANCE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (RECEIVE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (BALANCE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "GST (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "GST RECEIVED", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "BALANCE GST", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "LEGAL CHARGES RECEIVED", accessor: "BOOKING CONFIRMATION MAIL SENT" }
// ];

// const data = [
//   // Add your data here
// ];

// const OCR = () => {
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
//       <h3 className="fs-6 pb-3 ">Sales Module / OCR Collection Management </h3>

//       <div className="d-flex align-items-center mb-2">
//         <Button
//           className="mb-5"
//           onClick={handleCollapseToggle}
//           variant="outlined"
//           color="success"
//           style={{ borderRadius: "20px" }}
//           startIcon={<FaEye size={20} color="#28a745" />}
//         >
//           {!isCollapsed && <span className="text-success ">OCR Collection</span>}
//         </Button>
//       </div>

//       <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
//         {/* Start Date */}
//         <label>Start Date:</label>
//         <TextField
//           type="date"
//           variant="outlined"
//           size="small"
//           value={startDate}
//           className="bg-white"
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{ width: "130px" }}
//         />

//         {/* End Date */}
//         <label>End Date:</label>
//         <TextField
//           type="date"
//           variant="outlined"
//           size="small"
//           value={endDate}
//           className="bg-white"
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{ width: "130px" }}
//         />

//         {/* Filter By */}
//         <label>Filter By:</label>
//         <TextField
//           select
//           variant="outlined"
//           size="small"
//           style={{ width: "130px" }}
//           value={filterType}
//           className="bg-white"
//           onChange={(e) => {
//             setFilterType(e.target.value);
//             setFilterValue("");
//           }}
//         >
//           <MenuItem value="">Select</MenuItem>
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
//               style={{ width: "130px" }}
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
//           style={{ borderRadius: "5px", padding: "5px 10px" }}
//           onClick={handleReset}
//         >
//           Reset
//         </Button>

//         {/* Pagination Controls */}
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
//           color="primary"
//           className="bg-primary text-white"
//           onClick={() => setPage((prevPage) => prevPage + 1)}
//         >
//           Next
//         </Button>
//       </div>

//       {/* Table */}
//       {/* <TableContainer component={Paper} className="mt-4 ">
//         <Table>
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell key={column.accessor}>{column.Header}</TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data
//               .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
//               .map((row, index) => (
//                 <TableRow key={index}>
//                   {columns.map((column) => (
//                     <TableCell key={column.accessor}>{row[column.accessor]}</TableCell>
//                   ))}
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer> */}
//       {/* <TableContainer component={Paper} className="mt-4">
//   <div style={{ overflowX: "auto" }}>
//     <Table>
//       <TableHead>
//         <TableRow>
//           {columns.map((column) => (
//             <TableCell key={column.accessor} style={{ width: "150px" }}>
//               {column.Header}
//             </TableCell>
//           ))}
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {data
//           .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
//           .map((row, index) => (
//             <TableRow key={index}>
//               {columns.map((column) => (
//                 <TableCell key={column.accessor}>{row[column.accessor]}</TableCell>
//               ))}
//             </TableRow>
//           ))}
//       </TableBody>
//     </Table>
//   </div>
// </TableContainer> */}

// {/* <TableContainer component={Paper} className="mt-4" style={{ padding: "20px" }}>
//   <div style={{ overflowX: "auto", padding: "0 10px" }}>
//     <Table>
//       <TableHead>
//         <TableRow>
//           {columns.map((column) => (
//             <TableCell key={column.accessor} style={{ width: "150px" }}>
//               {column.Header}
//             </TableCell>
//           ))}
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {data
//           .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
//           .map((row, index) => (
//             <TableRow key={index}>
//               {columns.map((column) => (
//                 <TableCell key={column.accessor}>{row[column.accessor]}</TableCell>
//               ))}
//             </TableRow>
//           ))}
//       </TableBody>
//     </Table>
//   </div>
// </TableContainer> */}
// <TableContainer component={Paper} className="mt-4" style={{ padding: "10px", maxWidth: "100%" }}>
//   <div style={{ overflowX: "auto" }}>
//     <Table>
//       <TableHead>
//         <TableRow>
//           {columns.map((column) => (
//             <TableCell key={column.accessor} style={{ minWidth: "100px", maxWidth: "200px", padding: "8px" }}>
//               {column.Header}
//             </TableCell>
//           ))}
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {data
//           .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
//           .map((row, index) => (
//             <TableRow key={index}>
//               {columns.map((column) => (
//                 <TableCell key={column.accessor} style={{ padding: "8px" }}>
//                   {row[column.accessor]}
//                 </TableCell>
//               ))}
//             </TableRow>
//           ))}
//       </TableBody>
//     </Table>
//   </div>
// </TableContainer>


//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25]}
//         component="div"
//         count={data.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handlePageChange}
//         onRowsPerPageChange={handleRowsPerPageChange}
//       />
//     </div>
//   );
// };

// export default OCR;

// import React, { useState } from "react";
// import { FaEye } from "react-icons/fa";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
// } from "@mui/material";

// const columns = [
//   { Header: "FLAT NO.", accessor: "FLAT NO." },
//   { Header: "NAME OF ALLOTEE", accessor: "NAME OF ALLOTEE" },
//   { Header: "NAME OF CO-ALLOTEE", accessor: "NAME OF CO-ALLOTEE" },
//   { Header: "TYPE", accessor: "TYPE" },
//   { Header: "FLOOR", accessor: "FLOOR" },
//   { Header: "EMAIL ID", accessor: "EMAILID" },
//   { Header: "WHATSAPP MOBILE NO", accessor: "WHATSAPP" },
//   { Header: "RATE", accessor: "RATE" },
//   { Header: "AGREEMENT VALUE", accessor: "AGREEMENT VALUE" },
//   { Header: "DATE OF BOOKING", accessor: "DATE OF BOOKING" },
//   { Header: "PARKING", accessor: "PARKING" },
//   { Header: "PARKING NO", accessor: "HOME LOAN APPLICABILITY" },
//   { Header: "LOAN STATUS", accessor: "BANK NAME" },
//   { Header: "10% OF AMOUNT (IF NON SANCTION) OCR", accessor: "BANKER NAME" },
//   { Header: "LOAN AMOUNT (SANCTION)", accessor: "MOBILE NO." },
//   { Header: "OCR AMOUNT", accessor: "LOAN ACCOUNT NO." },
//   { Header: "OCR RECEIVED AMOUNT", accessor: "LOAN AMOUNT" },
//   { Header: "OCR BALANCE", accessor: "SANCTION LETTER" },
//   { Header: "ONLINE", accessor: "HOME LOAN SANCTION CERTIFICATE COLLECTED" },
//   { Header: "CASH (WITH AV)", accessor: "BOOKING CONFIRMATION" },
//   { Header: "HISTORY CASH (WITH AV)", accessor: "BOOKING CANCELATION REASON" },
//   { Header: "BALANCE CASH (WITH AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "HISTORY CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "BALANCE CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "RECEIVED AS PER STAGE OF CONSTRUCTION", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (RECEIVE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (BALANCE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (RECEIVE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (BALANCE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "GST (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "GST RECEIVED", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "BALANCE GST", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "LEGAL CHARGES RECEIVED", accessor: "BOOKING CONFIRMATION MAIL SENT" }
// ];

// const data = [
//   // Add your data here
// ];

// const OCR = () => {
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleCollapseToggle = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className="container mt-3">
//       <h3 className="fs-6 pb-3">Sales Module / OCR Collection Management</h3>

//       <Button
//         onClick={handleCollapseToggle}
//         variant="outlined"
//         color="success"
//         style={{ borderRadius: "20px" }}
//         startIcon={<FaEye size={20} color="#28a745" />}
//       >
//         {!isCollapsed && <span className="text-success">OCR Collection</span>}
//       </Button>

//       {/* <TableContainer
//         component={Paper}
//         className="mt-4"
//         style={{
//           padding: "10px",
//           maxWidth: isCollapsed ? "100%" : "calc(100% - 150px)", // Minimized table size on collapse
//           overflowX: "auto",
//         }}
//       >
//         <div style={{ overflowX: "auto" }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.accessor}
//                     style={{
//                       minWidth: isCollapsed ? "80px" : "150px", // Column widths change based on collapsed state
//                       padding: "8px",
//                     }}
//                   >
//                     {column.Header}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {data
//                 .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
//                 .map((row, index) => (
//                   <TableRow key={index}>
//                     {columns.map((column) => (
//                       <TableCell key={column.accessor} style={{ padding: "8px" }}>
//                         {row[column.accessor]}
//                       </TableCell>
//                     ))}
//                   </TableRow>
//                 ))}
//             </TableBody>
//           </Table>
//         </div>
//       </TableContainer> */}
// <TableContainer
//   component={Paper}
//   className="mt-4"
//   style={{
//     padding: "10px",
//     width: isCollapsed ? "100%" : "calc(100% - 150px)", // Adjust the container width when collapsed or expanded
//     overflowX: "auto", // Allow scrolling if the table overflows
//   }}
// >
//   <div style={{ overflowX: "auto", width: "100%" }}>
//     <Table>
//       <TableHead>
//         <TableRow>
//           {columns.map((column) => (
//             <TableCell
//               key={column.accessor}
//               style={{
//                 // Dynamically adjust column width based on collapse state
//                 minWidth: isCollapsed ? "80px" : "150px",
//                 padding: "8px",
//               }}
//             >
//               {column.Header}
//             </TableCell>
//           ))}
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {data
//           .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
//           .map((row, index) => (
//             <TableRow key={index}>
//               {columns.map((column) => (
//                 <TableCell key={column.accessor} style={{ padding: "8px" }}>
//                   {row[column.accessor]}
//                 </TableCell>
//               ))}
//             </TableRow>
//           ))}
//       </TableBody>
//     </Table>
//   </div>
// </TableContainer>



//     </div>
//   );
// };

// export default OCR;



// import React, { useState } from "react";
// import { FaEye } from "react-icons/fa";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
// } from "@mui/material";

// const columns = [
//   { Header: "FLAT NO.", accessor: "FLAT NO." },
//   { Header: "NAME OF ALLOTEE", accessor: "NAME OF ALLOTEE" },
//   { Header: "NAME OF CO-ALLOTEE", accessor: "NAME OF CO-ALLOTEE" },
//   { Header: "TYPE", accessor: "TYPE" },
//   { Header: "FLOOR", accessor: "FLOOR" },
//   { Header: "EMAIL ID", accessor: "EMAILID" },
//   { Header: "WHATSAPP MOBILE NO", accessor: "WHATSAPP" },
//   { Header: "RATE", accessor: "RATE" },
//   { Header: "AGREEMENT VALUE", accessor: "AGREEMENT VALUE" },
//   { Header: "DATE OF BOOKING", accessor: "DATE OF BOOKING" },
//   { Header: "PARKING", accessor: "PARKING" },
//   { Header: "PARKING NO", accessor: "HOME LOAN APPLICABILITY" },
//   { Header: "LOAN STATUS", accessor: "BANK NAME" },
//   { Header: "10% OF AMOUNT (IF NON SANCTION) OCR", accessor: "BANKER NAME" },
//   { Header: "LOAN AMOUNT (SANCTION)", accessor: "MOBILE NO." },
//   { Header: "OCR AMOUNT", accessor: "LOAN ACCOUNT NO." },
//   { Header: "OCR RECEIVED AMOUNT", accessor: "LOAN AMOUNT" },
//   { Header: "OCR BALANCE", accessor: "SANCTION LETTER" },
//   { Header: "ONLINE", accessor: "HOME LOAN SANCTION CERTIFICATE COLLECTED" },
//   { Header: "CASH (WITH AV)", accessor: "BOOKING CONFIRMATION" },
//   { Header: "HISTORY CASH (WITH AV)", accessor: "BOOKING CANCELATION REASON" },
//   { Header: "BALANCE CASH (WITH AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "HISTORY CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "BALANCE CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "RECEIVED AS PER STAGE OF CONSTRUCTION", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (RECEIVE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (BALANCE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (RECEIVE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (BALANCE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "GST (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "GST RECEIVED", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "BALANCE GST", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "LEGAL CHARGES RECEIVED", accessor: "BOOKING CONFIRMATION MAIL SENT" }
// ];

// const data = [
//   // Add your data here
// ];

// const OCR = () => {
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleCollapseToggle = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className="container mt-3">
//       <h3 className="fs-6 pb-3">Sales Module / OCR Collection Management</h3>

//       <Button
//         onClick={handleCollapseToggle}
//         variant="outlined"
//         color="success"
//         style={{ borderRadius: "20px" }}
//         startIcon={<FaEye size={20} color="#28a745" />}
//       >
//         {!isCollapsed && <span className="text-success">OCR Collection</span>}
//       </Button>

//       {/* Flexbox container */}
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           width: isCollapsed ? "100%" : "calc(100% - 150px)", // Dynamically adjust the container width
//           transition: "width 0.3s ease", // Smooth transition
//         }}
//       >
//         <TableContainer
//           component={Paper}
//           className="mt-4"
//           style={{
//             padding: "10px",
//             overflowX: "auto", // Allow scrolling if the table overflows
//           }}
//         >
//           <div style={{ overflowX: "auto", width: "100%" }}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   {columns.map((column) => (
//                     <TableCell
//                       key={column.accessor}
//                       style={{
//                         minWidth: isCollapsed ? "150px" : "80px", // Wider columns when collapsed, smaller when expanded
//                         padding: "8px",
//                       }}
//                     >
//                       {column.Header}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {data
//                   .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
//                   .map((row, index) => (
//                     <TableRow key={index}>
//                       {columns.map((column) => (
//                         <TableCell key={column.accessor} style={{ padding: "8px" }}>
//                           {row[column.accessor]}
//                         </TableCell>
//                       ))}
//                     </TableRow>
//                   ))}
//               </TableBody>
//             </Table>
//           </div>
//         </TableContainer>
//       </div>
//     </div>
//   );
// };

// export default OCR;


// import React, { useState } from "react";
// import { FaEye } from "react-icons/fa";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
// } from "@mui/material";

// const columns = [
//   { Header: "FLAT NO.", accessor: "FLAT NO." },
//   { Header: "NAME OF ALLOTEE", accessor: "NAME OF ALLOTEE" },
//   { Header: "NAME OF CO-ALLOTEE", accessor: "NAME OF CO-ALLOTEE" },
//   { Header: "TYPE", accessor: "TYPE" },
//   { Header: "FLOOR", accessor: "FLOOR" },
//   { Header: "EMAIL ID", accessor: "EMAILID" },
//   { Header: "WHATSAPP MOBILE NO", accessor: "WHATSAPP" },
//   { Header: "RATE", accessor: "RATE" },
//   { Header: "AGREEMENT VALUE", accessor: "AGREEMENT VALUE" },
//   { Header: "DATE OF BOOKING", accessor: "DATE OF BOOKING" },
//   { Header: "PARKING", accessor: "PARKING" },
//   { Header: "PARKING NO", accessor: "HOME LOAN APPLICABILITY" },
//   { Header: "LOAN STATUS", accessor: "BANK NAME" },
//   { Header: "10% OF AMOUNT (IF NON SANCTION) OCR", accessor: "BANKER NAME" },
//   { Header: "LOAN AMOUNT (SANCTION)", accessor: "MOBILE NO." },
//   { Header: "OCR AMOUNT", accessor: "LOAN ACCOUNT NO." },
//   { Header: "OCR RECEIVED AMOUNT", accessor: "LOAN AMOUNT" },
//   { Header: "OCR BALANCE", accessor: "SANCTION LETTER" },
//   { Header: "ONLINE", accessor: "HOME LOAN SANCTION CERTIFICATE COLLECTED" },
//   { Header: "CASH (WITH AV)", accessor: "BOOKING CONFIRMATION" },
//   { Header: "HISTORY CASH (WITH AV)", accessor: "BOOKING CANCELATION REASON" },
//   { Header: "BALANCE CASH (WITH AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "HISTORY CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "BALANCE CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "RECEIVED AS PER STAGE OF CONSTRUCTION", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (RECEIVE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (BALANCE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (RECEIVE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (BALANCE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "GST (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "GST RECEIVED", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "BALANCE GST", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "LEGAL CHARGES RECEIVED", accessor: "BOOKING CONFIRMATION MAIL SENT" }
// ];

// const data = [
//   // Add your data here
// ];

// const OCR = () => {
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleCollapseToggle = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className="container mt-3">
//       <h3 className="fs-6 pb-3">Sales Module / OCR Collection Management</h3>

//       <Button
//         onClick={handleCollapseToggle}
//         variant="outlined"
//         color="success"
//         style={{ borderRadius: "20px" }}
//         startIcon={<FaEye size={20} color="#28a745" />}
//       >
//         {!isCollapsed && <span className="text-success">OCR Collection</span>}
//       </Button>

//       {/* Container with flex layout */}
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           width: isCollapsed ? "100%" : "100%", // Ensure the width is 100% in both states
//           transition: "width 0.3s ease", // Smooth transition
//         }}
//       >
//         <TableContainer
//           component={Paper}
//           className="mt-4"
//           style={{
//             padding: "10px",
//             overflowX: "auto", // Allow scrolling if the table overflows
//           }}
//         >
//           <div style={{ overflowX: "auto", width: "100%" }}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   {columns.map((column) => (
//                     <TableCell
//                       key={column.accessor}
//                       style={{
//                         // Dynamically adjust column width based on collapsed state
//                         minWidth: isCollapsed ? "150px" : "80px", // Adjusting columns' width
//                         padding: "8px",
//                         whiteSpace: "nowrap", // Prevent text from wrapping
//                         overflow: "hidden", // Prevent overflow
//                         textOverflow: "ellipsis", // Add ellipsis if text overflows
//                       }}
//                     >
//                       {column.Header}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {data
//                   .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
//                   .map((row, index) => (
//                     <TableRow key={index}>
//                       {columns.map((column) => (
//                         <TableCell
//                           key={column.accessor}
//                           style={{
//                             padding: "8px",
//                             whiteSpace: "nowrap", // Prevent text from wrapping
//                             overflow: "hidden", // Prevent overflow
//                             textOverflow: "ellipsis", // Add ellipsis if text overflows
//                           }}
//                         >
//                           {row[column.accessor]}
//                         </TableCell>
//                       ))}
//                     </TableRow>
//                   ))}
//               </TableBody>
//             </Table>
//           </div>
//         </TableContainer>
//       </div>
//     </div>
//   );
// };

// export default OCR;

// import React, { useState } from "react";
// import { FaEye } from "react-icons/fa";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
// } from "@mui/material";

// const columns = [
//   { Header: "FLAT NO.", accessor: "FLAT NO." },
//   { Header: "NAME OF ALLOTEE", accessor: "NAME OF ALLOTEE" },
//   { Header: "NAME OF CO-ALLOTEE", accessor: "NAME OF CO-ALLOTEE" },
//   { Header: "TYPE", accessor: "TYPE" },
//   { Header: "FLOOR", accessor: "FLOOR" },
//   { Header: "EMAIL ID", accessor: "EMAILID" },
//   { Header: "WHATSAPP MOBILE NO", accessor: "WHATSAPP" },
//   { Header: "RATE", accessor: "RATE" },
//   { Header: "AGREEMENT VALUE", accessor: "AGREEMENT VALUE" },
//   { Header: "DATE OF BOOKING", accessor: "DATE OF BOOKING" },
//   { Header: "PARKING", accessor: "PARKING" },
//   { Header: "PARKING NO", accessor: "HOME LOAN APPLICABILITY" },
//   { Header: "LOAN STATUS", accessor: "BANK NAME" },
//   { Header: "10% OF AMOUNT (IF NON SANCTION) OCR", accessor: "BANKER NAME" },
//   { Header: "LOAN AMOUNT (SANCTION)", accessor: "MOBILE NO." },
//   { Header: "OCR AMOUNT", accessor: "LOAN ACCOUNT NO." },
//   { Header: "OCR RECEIVED AMOUNT", accessor: "LOAN AMOUNT" },
//   { Header: "OCR BALANCE", accessor: "SANCTION LETTER" },
//   { Header: "ONLINE", accessor: "HOME LOAN SANCTION CERTIFICATE COLLECTED" },
//   { Header: "CASH (WITH AV)", accessor: "BOOKING CONFIRMATION" },
//   { Header: "HISTORY CASH (WITH AV)", accessor: "BOOKING CANCELATION REASON" },
//   { Header: "BALANCE CASH (WITH AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "HISTORY CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "BALANCE CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "RECEIVED AS PER STAGE OF CONSTRUCTION", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (RECEIVE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (BALANCE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (RECEIVE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (BALANCE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "GST (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "GST RECEIVED", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "BALANCE GST", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "LEGAL CHARGES RECEIVED", accessor: "BOOKING CONFIRMATION MAIL SENT" }
// ];

// const data = [
//   // Add your data here
// ];

// const OCR = () => {
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleCollapseToggle = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className="container mt-3">
//       <h3 className="fs-6 pb-3">Sales Module / OCR Collection Management</h3>

//       <Button
//         onClick={handleCollapseToggle}
//         variant="outlined"
//         color="success"
//         style={{ borderRadius: "20px" }}
//         startIcon={<FaEye size={20} color="#28a745" />}
//       >
//         {!isCollapsed && <span className="text-success">OCR Collection</span>}
//       </Button>

//       {/* Table container */}
//       <TableContainer
//         component={Paper}
//         className="mt-4"
//         style={{
//           padding: "10px",
//           width: "100%", // Table container takes full width
//           overflowX: "auto", // Allow scrolling if the table overflows
//         }}
//       >
//         <Table
//           style={{
//             tableLayout: "auto", // Allow columns to adjust dynamically
//             // width: "100%", // Table takes full width
//           }}
//         >
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.accessor}
//                   style={{
//                     minWidth: isCollapsed ? "130px" : "80px", // Min width for collapsed or expanded
//                     maxWidth: isCollapsed ? "150px" : "80px", // Max width for collapsed or expanded
//                     padding: "8px",
//                     textOverflow: "ellipsis", // Add ellipsis if text overflows
//                     overflow: "hidden", // Hide overflowing text
//                     whiteSpace: "nowrap", // Prevent text from wrapping
//                   }}
//                 >
//                   {column.Header}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data
//               .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
//               .map((row, index) => (
//                 <TableRow key={index}>
//                   {columns.map((column) => (
//                     <TableCell
//                       key={column.accessor}
//                       style={{
//                         padding: "8px",
//                         whiteSpace: "nowrap", // Prevent text from wrapping
//                         overflow: "hidden", // Prevent overflow
//                         textOverflow: "ellipsis", // Add ellipsis if text overflows
//                       }}
//                     >
//                       {row[column.accessor]}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default OCR;


// import React, { useState } from "react";
// import { FaEye } from "react-icons/fa";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
// } from "@mui/material";

// const columns = [
//   { Header: "FLAT NO.", accessor: "FLAT NO." },
//   { Header: "NAME OF ALLOTEE", accessor: "NAME OF ALLOTEE" },
//   { Header: "NAME OF CO-ALLOTEE", accessor: "NAME OF CO-ALLOTEE" },
//   { Header: "TYPE", accessor: "TYPE" },
//   { Header: "FLOOR", accessor: "FLOOR" },
//   { Header: "EMAIL ID", accessor: "EMAILID" },
//   { Header: "WHATSAPP MOBILE NO", accessor: "WHATSAPP" },
//   { Header: "RATE", accessor: "RATE" },
//   { Header: "AGREEMENT VALUE", accessor: "AGREEMENT VALUE" },
//   { Header: "DATE OF BOOKING", accessor: "DATE OF BOOKING" },
//   { Header: "PARKING", accessor: "PARKING" },
//   { Header: "PARKING NO", accessor: "HOME LOAN APPLICABILITY" },
//   { Header: "LOAN STATUS", accessor: "BANK NAME" },
//   { Header: "10% OF AMOUNT (IF NON SANCTION) OCR", accessor: "BANKER NAME" },
//   { Header: "LOAN AMOUNT (SANCTION)", accessor: "MOBILE NO." },
//   { Header: "OCR AMOUNT", accessor: "LOAN ACCOUNT NO." },
//   { Header: "OCR RECEIVED AMOUNT", accessor: "LOAN AMOUNT" },
//   { Header: "OCR BALANCE", accessor: "SANCTION LETTER" },
//   { Header: "ONLINE", accessor: "HOME LOAN SANCTION CERTIFICATE COLLECTED" },
//   { Header: "CASH (WITH AV)", accessor: "BOOKING CONFIRMATION" },
//   { Header: "HISTORY CASH (WITH AV)", accessor: "BOOKING CANCELATION REASON" },
//   { Header: "BALANCE CASH (WITH AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "HISTORY CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "BALANCE CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "RECEIVED AS PER STAGE OF CONSTRUCTION", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (RECEIVE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (BALANCE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (RECEIVE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (BALANCE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "GST (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "GST RECEIVED", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "BALANCE GST", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "LEGAL CHARGES RECEIVED", accessor: "BOOKING CONFIRMATION MAIL SENT" }
// ];

// const data = [
//   // Add your data here
// ];

// const OCR = () => {
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleCollapseToggle = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className="container mt-3">
//       <h3 className="fs-6 pb-3">Sales Module / OCR Collection Management</h3>

//       <Button
//         onClick={handleCollapseToggle}
//         variant="outlined"
//         color="success"
//         style={{ borderRadius: "20px" }}
//         startIcon={<FaEye size={20} color="#28a745" />}
//       >
//         {!isCollapsed && <span className="text-success">OCR Collection</span>}
//       </Button>

//       {/* Table container */}
//       <TableContainer
//         component={Paper}
//         className="mt-4"
//         style={{
//           padding: "10px",
//           // width: "86%", // Table container takes full width
//           overflowX: "auto", // Allow horizontal scrolling when needed
         
//         }}
//       >
//         <Table
//           style={{
//             tableLayout: "auto", // Allow columns to adjust dynamically
//             width: "100%", // Table takes full width
//           }}
//         >
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.accessor}
//                   style={{
//                     // Apply dynamic column width
//                     minWidth: isCollapsed ? "200px" : "90px", // Set min-width for collapsed and expanded states
//                     padding: "8px",
//                     whiteSpace: "nowrap", // Prevent text from wrapping
//                     overflow: "hidden", // Hide overflowing text
//                     textOverflow: "ellipsis", // Add ellipsis for overflowing text
//                   }}
//                 >
//                   {column.Header}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data
//               .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
//               .map((row, index) => (
//                 <TableRow key={index}>
//                   {columns.map((column) => (
//                     <TableCell
//                       key={column.accessor}
//                       style={{
//                         padding: "8px",
//                         whiteSpace: "nowrap", // Prevent text from wrapping
//                         overflow: "hidden", // Hide overflowing text
//                         textOverflow: "ellipsis", // Add ellipsis for overflowing text
//                       }}
//                     >
//                       {row[column.accessor]}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default OCR;



// import React, { useState } from "react";
// import { FaEye } from "react-icons/fa";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
// } from "@mui/material";

// const columns = [
//   { Header: "FLAT NO.", accessor: "FLAT NO." },
//   { Header: "NAME OF ALLOTEE", accessor: "NAME OF ALLOTEE" },
//   { Header: "NAME OF CO-ALLOTEE", accessor: "NAME OF CO-ALLOTEE" },
//   { Header: "TYPE", accessor: "TYPE" },
//   { Header: "FLOOR", accessor: "FLOOR" },
//   { Header: "EMAIL ID", accessor: "EMAILID" },
//   { Header: "WHATSAPP MOBILE NO", accessor: "WHATSAPP" },
//   { Header: "RATE", accessor: "RATE" },
//   { Header: "AGREEMENT VALUE", accessor: "AGREEMENT VALUE" },
//   { Header: "DATE OF BOOKING", accessor: "DATE OF BOOKING" },
//   { Header: "PARKING", accessor: "PARKING" },
//   { Header: "PARKING NO", accessor: "HOME LOAN APPLICABILITY" },
//   { Header: "LOAN STATUS", accessor: "BANK NAME" },
//   { Header: "10% OF AMOUNT (IF NON SANCTION) OCR", accessor: "BANKER NAME" },
//   { Header: "LOAN AMOUNT (SANCTION)", accessor: "MOBILE NO." },
//   { Header: "OCR AMOUNT", accessor: "LOAN ACCOUNT NO." },
//   { Header: "OCR RECEIVED AMOUNT", accessor: "LOAN AMOUNT" },
//   { Header: "OCR BALANCE", accessor: "SANCTION LETTER" },
//   { Header: "ONLINE", accessor: "HOME LOAN SANCTION CERTIFICATE COLLECTED" },
//   { Header: "CASH (WITH AV)", accessor: "BOOKING CONFIRMATION" },
//   { Header: "HISTORY CASH (WITH AV)", accessor: "BOOKING CANCELATION REASON" },
//   { Header: "BALANCE CASH (WITH AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "HISTORY CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "BALANCE CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "RECEIVED AS PER STAGE OF CONSTRUCTION", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (RECEIVE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "STAMP DUTY (BALANCE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (RECEIVE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "REG. (BALANCE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "GST (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "GST RECEIVED", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "BALANCE GST", accessor: "BOOKING CONFIRMATION MAIL SENT" },
//   { Header: "LEGAL CHARGES RECEIVED", accessor: "BOOKING CONFIRMATION MAIL SENT" }
// ];

// const data = [
//   // Add your data here
// ];

// const OCR = () => {
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleCollapseToggle = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className="container mt-3">
//       <h3 className="fs-6 pb-3">Sales Module / OCR Collection Management</h3>

//       <Button
//         onClick={handleCollapseToggle}
//         variant="outlined"
//         color="success"
//         style={{ borderRadius: "20px" }}
//         startIcon={<FaEye size={20} color="#28a745" />}
//       >
//         {!isCollapsed && <span className="text-success">OCR Collection</span>}
//       </Button>

//       {/* Table container */}
//       <TableContainer
//         component={Paper}
//         className="mt-4"
//         style={{
//           padding: "10px",
//           width: isCollapsed ? "90%" : "calc(100% - 180px)", // Dynamically adjust container width based on collapsed state
//           overflowX: "auto", // Allow horizontal scrolling when needed
//         }}
//       >
//         <Table
//           style={{
//             tableLayout: "auto", // Allow columns to adjust dynamically
//             width: "100%", // Table takes full width
//           }}
//         >
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.accessor}
//                   style={{
//                     // Apply dynamic column width
//                     // width: isCollapsed ? "100px" : "80px", // Dynamically adjust column width
//                     padding: "8px",
//                     whiteSpace: "nowrap", // Prevent text from wrapping
//                     overflow: "hidden", // Hide overflowing text
//                     textOverflow: "ellipsis", // Add ellipsis for overflowing text
//                   }}
//                 >
//                   {column.Header}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data
//               .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
//               .map((row, index) => (
//                 <TableRow key={index}>
//                   {columns.map((column) => (
//                     <TableCell
//                       key={column.accessor}
//                       style={{
//                         padding: "8px",
//                         whiteSpace: "nowrap", // Prevent text from wrapping
//                         overflow: "hidden", // Hide overflowing text
//                         textOverflow: "ellipsis", // Add ellipsis for overflowing text
//                       }}
//                     >
//                       {row[column.accessor]}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default OCR;



// import React, { useState, useEffect } from 'react';

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const OCR = () => {
//   const [loans, setLoans] = useState([]);
//   const [filteredLoans, setFilteredLoans] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [totalPages, setTotalPages] = useState(1);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to control sidebar visibility

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

//   const filterLoansByDate = () => {
//     const filtered = loans.filter(loan => {
//       const loanDate = new Date(loan.dateOfBooking);
//       const start = startDate ? new Date(startDate) : new Date(0);
//       const end = endDate ? new Date(endDate) : new Date();

//       return loanDate >= start && loanDate <= end;
//     });

//     setFilteredLoans(filtered);
//     setCurrentPage(1);
//   };

//   const resetFilters = () => {
//     setStartDate('');
//     setEndDate('');
//     setFilteredLoans(loans);
//     setCurrentPage(1);
//   };

//   const changeRowsPerPage = (e) => {
//     setRowsPerPage(parseInt(e.target.value));
//     setCurrentPage(1);
//   };

//   const handlePagination = (direction) => {
//     if (direction === 'next' && currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     } else if (direction === 'prev' && currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const displayLoans = () => {
//     const start = (currentPage - 1) * rowsPerPage;
//     const end = Math.min(start + rowsPerPage, filteredLoans.length);
//     return filteredLoans.slice(start, end).map((loan, index) => (
//       <tr key={loan.flatNo}>
//         <td>{loan.flatNo}</td>
//         <td>{loan.nameOfAllotee}</td>
//         <td>{loan.nameOfCoAllotee}</td>
//         <td>{loan.type}</td>
//         <td>{loan.floor}</td>
//         <td>{loan.emailId}</td>
//         <td>{loan.whatsappMobileNo}</td>
//         <td>{loan.rate}</td>
//         <td>{loan.agreementValue}</td>
//         <td>{loan.dateOfBooking}</td>
//         <td>{loan.parking}</td>
//         <td>{loan.parkingNo}</td>
//         <td>
//           <select
//             className="minimal-select"
//             value={loan.loanStatus}
//             onChange={(e) => updateLoanStatus(loan.flatNo, e.target.value)}
//           >
//             <option value="">{loan.loanStatus || 'Select Status'}</option>
//             <option value="Yes">Yes</option>
//             <option value="No">No</option>
//             <option value="Non Sanction">Non Sanction</option>
//           </select>
//         </td>
//         <td>{loan.ocrAmount}</td>
//         <td>{loan.ocrReceivedAmount}</td>
//         <td>{loan.ocrBalance}</td>
//         <td>{loan.online}</td>
//         <td>{loan.cashWithAV}</td>
//         <td>{loan.historyCashWithAV}</td>
//         <td>{loan.balanceCashWithAV}</td>
//         <td>{loan.cashWithoutAV}</td>
//         <td>{loan.historyCashWithoutAV}</td>
//         <td>{loan.balanceCashWithoutAV}</td>
//         <td>{loan.receivedAsPerStage}</td>
//         <td>{loan.stampDutyTotal}</td>
//         <td>{loan.stampDutyReceived}</td>
//         <td>{loan.stampDutyBalance}</td>
//         <td>{loan.regTotal}</td>
//         <td>{loan.regReceived}</td>
//         <td>{loan.regBalance}</td>
//         <td>{loan.gstTotal}</td>
//         <td>{loan.gstReceived}</td>
//         <td>{loan.balanceGst}</td>
//         <td>{loan.legalChargesReceived}</td>
//       </tr>
//     ));
//   };

//   const updateLoanStatus = (flatNo, newStatus) => {
//     // Update the loan status in your backend or state here
//     console.log(`Updating loan ${flatNo} status to ${newStatus}`);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
//   };

//   return (
//     <div className="main-content">
//       <h6>Sales Module / OCR Collection Management</h6>

//       {/* Sidebar and content */}
//       <div className="filter-container">
//         <div className="d-flex justify-content-between align-items-center">
//           <div className="d-flex align-items-center">
//             <div className="me-3 mb-2">
//               <label htmlFor="startDate" className="me-2">From:</label>
//               <input
//                 type="date"
//                 id="startDate"
//                 className="form-control d-inline-block"
//                 style={{ width: '150px' }}
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//               />
//             </div>
//             <div className="me-3 mb-2">
//               <label htmlFor="endDate" className="me-2">To:</label>
//               <input
//                 type="date"
//                 id="endDate"
//                 className="form-control d-inline-block"
//                 style={{ width: '150px' }}
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//               />
//             </div>
//             <button
//               id="filterDates"
//               className="btn btn-primary me-3 mb-2"
//               onClick={filterLoansByDate}
//             >
//               Filter
//             </button>
//             <button
//               id="resetDates"
//               className="btn btn-secondary me-3 mb-2"
//               onClick={resetFilters}
//             >
//               Reset
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Table container */}
//       <div className="table-wrapper">
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>Flat No.</th>
//               <th>Name Of Allotee</th>
//               <th>Name Of Co-Allotee</th>
//               <th>Type</th>
//               <th>Floor</th>
//               <th>Email Id</th>
//               <th>Whatsapp Mobile No.</th>
//               <th>Rate</th>
//               <th>Agreement Value</th>
//               <th>Date Of Booking</th>
//               <th>Parking</th>
//               <th>Parking No</th>
//               <th>Loan Status</th>
//               <th>OCR Amount</th>
//               <th>Received Amount</th>
//               <th>Balance Amount</th>
//               <th>Online</th>
//               <th>Cash with AV</th>
//               <th>History (Cash with AV)</th>
//               <th>Balance (Cash with AV)</th>
//               <th>Cash without AV</th>
//               <th>History (Cash without AV)</th>
//               <th>Balance (Cash without AV)</th>
//               <th>Received as per stage</th>
//               <th>Stamp Duty Total</th>
//               <th>Stamp Duty Received</th>
//               <th>Stamp Duty Balance</th>
//               <th>Registration Total</th>
//               <th>Registration Received</th>
//               <th>Registration Balance</th>
//               <th>GST Total</th>
//               <th>GST Received</th>
//               <th>GST Balance</th>
//               <th>Legal Charges Received</th>
//             </tr>
//           </thead>
//           <tbody>
//             {displayLoans()}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OCR;


// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, Button } from '@mui/material';

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const OCR = () => {
//   const [loans, setLoans] = useState([]);
//   const [filteredLoans, setFilteredLoans] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [totalPages, setTotalPages] = useState(1);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');

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

//   const filterLoansByDate = () => {
//     const filtered = loans.filter(loan => {
//       const loanDate = new Date(loan.dateOfBooking);
//       const start = startDate ? new Date(startDate) : new Date(0);
//       const end = endDate ? new Date(endDate) : new Date();

//       return loanDate >= start && loanDate <= end;
//     });

//     setFilteredLoans(filtered);
//     setCurrentPage(1);
//   };

//   const resetFilters = () => {
//     setStartDate('');
//     setEndDate('');
//     setFilteredLoans(loans);
//     setCurrentPage(1);
//   };

//   const handlePagination = (event, newPage) => {
//     setCurrentPage(newPage + 1);
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
//         <TableCell>{loan.parkingNo}</TableCell>
//         <TableCell>
//           <select
//             className="minimal-select"
//             value={loan.loanStatus}
//             onChange={(e) => updateLoanStatus(loan.flatNo, e.target.value)}
//           >
//             <option value="">{loan.loanStatus || 'Select Status'}</option>
//             <option value="Yes">Yes</option>
//             <option value="No">No</option>
//             <option value="Non Sanction">Non Sanction</option>
//           </select>
//         </TableCell>
//         <TableCell>{loan.ocrAmount}</TableCell>
//         <TableCell>{loan.ocrReceivedAmount}</TableCell>
//         <TableCell>{loan.ocrBalance}</TableCell>
//         <TableCell>{loan.online}</TableCell>
//         <TableCell>{loan.cashWithAV}</TableCell>
//         <TableCell>{loan.historyCashWithAV}</TableCell>
//         <TableCell>{loan.balanceCashWithAV}</TableCell>
//         <TableCell>{loan.cashWithoutAV}</TableCell>
//         <TableCell>{loan.historyCashWithoutAV}</TableCell>
//         <TableCell>{loan.balanceCashWithoutAV}</TableCell>
//         <TableCell>{loan.receivedAsPerStage}</TableCell>
//         <TableCell>{loan.stampDutyTotal}</TableCell>
//         <TableCell>{loan.stampDutyReceived}</TableCell>
//         <TableCell>{loan.stampDutyBalance}</TableCell>
//         <TableCell>{loan.regTotal}</TableCell>
//         <TableCell>{loan.regReceived}</TableCell>
//         <TableCell>{loan.regBalance}</TableCell>
//         <TableCell>{loan.gstTotal}</TableCell>
//         <TableCell>{loan.gstReceived}</TableCell>
//         <TableCell>{loan.balanceGst}</TableCell>
//         <TableCell>{loan.legalChargesReceived}</TableCell>
//       </TableRow>
//     ));
//   };

//   const updateLoanStatus = (flatNo, newStatus) => {
//     // Update the loan status in your backend or state here
//     console.log(`Updating loan ${flatNo} status to ${newStatus}`);
//   };

//   return (
//     <div className="main-content">
//       <h6>Sales Module / OCR Collection Management</h6>
  
//       <div className="filter-container">
//         <div className="d-flex justify-content-between align-items-center">
//           <div className="d-flex align-items-center">
//             <div className="me-3 mb-2">
//               <label htmlFor="startDate" className="me-2">From:</label>
//               <input
//                 type="date"
//                 id="startDate"
//                 className="form-control d-inline-block"
//                 style={{ width: '150px' }}
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//               />
//             </div>
//             <div className="me-3 mb-2">
//               <label htmlFor="endDate" className="me-2">To:</label>
//               <input
//                 type="date"
//                 id="endDate"
//                 className="form-control d-inline-block"
//                 style={{ width: '150px' }}
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//               />
//             </div>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={filterLoansByDate}
//               className="me-3 mb-2"
//             >
//               Filter
//             </Button>
//             <Button
//               variant="outlined"
//               color="secondary"
//               onClick={resetFilters}
//               className="me-3 mb-2"
//             >
//               Reset
//             </Button>
//           </div>
//         </div>
//       </div>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Flat No.</TableCell>
//               <TableCell>Name Of Allotee</TableCell>
//               <TableCell>Name Of Co-Allotee</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Floor</TableCell>
//               <TableCell>Email Id</TableCell>
//               <TableCell>Whatsapp Mobile No.</TableCell>
//               <TableCell>Rate</TableCell>
//               <TableCell>Agreement Value</TableCell>
//               <TableCell>Date Of Booking</TableCell>
//               <TableCell>Parking</TableCell>
//               <TableCell>Parking No</TableCell>
//               <TableCell>Loan Status</TableCell>
//               <TableCell>OCR Amount</TableCell>
//               <TableCell>Received Amount</TableCell>
//               <TableCell>Balance Amount</TableCell>
//               <TableCell>Online</TableCell>
//               <TableCell>Cash with AV</TableCell>
//               <TableCell>History (Cash with AV)</TableCell>
//               <TableCell>Balance (Cash with AV)</TableCell>
//               <TableCell>Cash without AV</TableCell>
//               <TableCell>History (Cash without AV)</TableCell>
//               <TableCell>Balance (Cash without AV)</TableCell>
//               <TableCell>Received as per stage</TableCell>
//               <TableCell>Stamp Duty Total</TableCell>
//               <TableCell>Stamp Duty Received</TableCell>
//               <TableCell>Stamp Duty Balance</TableCell>
//               <TableCell>Registration Total</TableCell>
//               <TableCell>Registration Received</TableCell>
//               <TableCell>Registration Balance</TableCell>
//               <TableCell>GST Total</TableCell>
//               <TableCell>GST Received</TableCell>
//               <TableCell>GST Balance</TableCell>
//               <TableCell>Legal Charges Received</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {displayLoans()}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25]}
//         component="div"
//         count={filteredLoans.length}
//         rowsPerPage={rowsPerPage}
//         page={currentPage - 1}
//         onPageChange={handlePagination}
//         onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value))}
//       />
//     </div>
//   );
// };

// export default OCR;

//  cgeck :

// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, Button, MenuItem, Select, InputLabel, FormControl, Box } from '@mui/material';

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const OCR = () => {
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
//   };

//   const handlePagination = (event, newPage) => {
//     setCurrentPage(newPage + 1);
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
//         <TableCell>{loan.parkingNo}</TableCell>
//         <TableCell>
//           <select
//             className="minimal-select"
//             value={loan.loanStatus}
//             onChange={(e) => updateLoanStatus(loan.flatNo, e.target.value)}
//           >
//             <option value="">{loan.loanStatus || 'Select Status'}</option>
//             <option value="Yes">Yes</option>
//             <option value="No">No</option>
//             <option value="Non Sanction">Non Sanction</option>
//           </select>
//         </TableCell>
//         <TableCell>{loan.ocrAmount}</TableCell>
//         <TableCell>{loan.ocrReceivedAmount}</TableCell>
//         <TableCell>{loan.ocrBalance}</TableCell>
//         <TableCell>{loan.online}</TableCell>
//         <TableCell>{loan.cashWithAV}</TableCell>
//         <TableCell>{loan.historyCashWithAV}</TableCell>
//         <TableCell>{loan.balanceCashWithAV}</TableCell>
//         <TableCell>{loan.cashWithoutAV}</TableCell>
//         <TableCell>{loan.historyCashWithoutAV}</TableCell>
//         <TableCell>{loan.balanceCashWithoutAV}</TableCell>
//         <TableCell>{loan.receivedAsPerStage}</TableCell>
//         <TableCell>{loan.stampDutyTotal}</TableCell>
//         <TableCell>{loan.stampDutyReceived}</TableCell>
//         <TableCell>{loan.stampDutyBalance}</TableCell>
//         <TableCell>{loan.regTotal}</TableCell>
//         <TableCell>{loan.regReceived}</TableCell>
//         <TableCell>{loan.regBalance}</TableCell>
//         <TableCell>{loan.gstTotal}</TableCell>
//         <TableCell>{loan.gstReceived}</TableCell>
//         <TableCell>{loan.balanceGst}</TableCell>
//         <TableCell>{loan.legalChargesReceived}</TableCell>
//       </TableRow>
//     ));
//   };

//   const updateLoanStatus = (flatNo, newStatus) => {
//     // Update the loan status in your backend or state here
//     console.log(`Updating loan ${flatNo} status to ${newStatus}`);
//   };

//   return (
//     <div className="main-content">
//       <h6>Sales Module / OCR Collection Management</h6>

//       <div className="filter-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
//         {/* Filter Button */}
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => setShowFilters(prev => !prev)}
//         >
//           {showFilters ? 'Hide Filters' : 'Show Filters'}
//         </Button>

//         {/* Filter Inputs (Displayed when showFilters is true) */}
//         {showFilters && (
//           <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
//             {/* Flat Type Filter */}
//             <FormControl>
//               <InputLabel>Flat Type</InputLabel>
//               <Select
//                 value={flatType}
//                 onChange={(e) => setFlatType(e.target.value)}
//                 style={{ width: '150px' }}
//               >
//                 {getFilterOptions("Flat Type").map((option, index) => (
//                   <MenuItem key={index} value={option}>{option}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             {/* Parking Filter */}
//             <FormControl>
//               <InputLabel>Parking</InputLabel>
//               <Select
//                 value={parking}
//                 onChange={(e) => setParking(e.target.value)}
//                 style={{ width: '150px' }}
//               >
//                 {getFilterOptions("Parking").map((option, index) => (
//                   <MenuItem key={index} value={option}>{option}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             {/* Floor Filter */}
//             <FormControl>
//               <InputLabel>Floor</InputLabel>
//               <Select
//                 value={floor}
//                 onChange={(e) => setFloor(e.target.value)}
//                 style={{ width: '150px' }}
//               >
//                 {getFilterOptions("Floor").map((option, index) => (
//                   <MenuItem key={index} value={option}>{option}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             {/* Rate Filter */}
//             <FormControl>
//               <InputLabel>Rate</InputLabel>
//               <Select
//                 value={rate}
//                 onChange={(e) => setRate(e.target.value)}
//                 style={{ width: '150px' }}
//               >
//                 {getFilterOptions("Rate").map((option, index) => (
//                   <MenuItem key={index} value={option}>{option}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </div>
//         )}

//         {/* Filter Buttons */}
//         <div>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={filterLoansByDate}
//             style={{ marginRight: '10px' }}
//           >
//             Filter
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={resetFilters}
//           >
//             Reset
//           </Button>
//         </div>
//       </div>

//       {/* Pagination Controls */}
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25]}
//         component="div"
//         count={filteredLoans.length}
//         rowsPerPage={rowsPerPage}
//         page={currentPage - 1}
//         onPageChange={handlePagination}
//         onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value))}
//         style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', overflow: 'hidden' }}
//       />

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Flat No.</TableCell>
//               <TableCell>Name Of Allotee</TableCell>
//               <TableCell>Name Of Co-Allotee</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Floor</TableCell>
//               <TableCell>Email Id</TableCell>
//               <TableCell>Whatsapp Mobile No.</TableCell>
//               <TableCell>Rate</TableCell>
//               <TableCell>Agreement Value</TableCell>
//               <TableCell>Date Of Booking</TableCell>
//               <TableCell>Parking</TableCell>
//               <TableCell>Parking No</TableCell>
//               <TableCell>Loan Status</TableCell>
//               <TableCell>OCR Amount</TableCell>
//               <TableCell>Received Amount</TableCell>
//               <TableCell>Balance Amount</TableCell>
//               <TableCell>Online</TableCell>
//               <TableCell>Cash with AV</TableCell>
//               <TableCell>History (Cash with AV)</TableCell>
//               <TableCell>Balance (Cash with AV)</TableCell>
//               <TableCell>Cash without AV</TableCell>
//               <TableCell>History (Cash without AV)</TableCell>
//               <TableCell>Balance (Cash without AV)</TableCell>
//               <TableCell>Received as per stage</TableCell>
//               <TableCell>Stamp Duty Total</TableCell>
//               <TableCell>Stamp Duty Received</TableCell>
//               <TableCell>Stamp Duty Balance</TableCell>
//               <TableCell>Registration Total</TableCell>
//               <TableCell>Registration Received</TableCell>
//               <TableCell>Registration Balance</TableCell>
//               <TableCell>GST Total</TableCell>
//               <TableCell>GST Received</TableCell>
//               <TableCell>GST Balance</TableCell>
//               <TableCell>Legal Charges Received</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {displayLoans()}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default OCR;














// ===

// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, Button, MenuItem, Select, InputLabel, FormControl, Box, Collapse } from '@mui/material';

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const OCR = () => {
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
//   };

//   const handlePagination = (event, newPage) => {
//     setCurrentPage(newPage + 1);
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
//         <TableCell>{loan.parkingNo}</TableCell>
//         <TableCell>
//           <select
//             className="minimal-select"
//             value={loan.loanStatus}
//             onChange={(e) => updateLoanStatus(loan.flatNo, e.target.value)}
//           >
//             <option value="">{loan.loanStatus || 'Select Status'}</option>
//             <option value="Yes">Yes</option>
//             <option value="No">No</option>
//             <option value="Non Sanction">Non Sanction</option>
//           </select>
//         </TableCell>
//         <TableCell>{loan.ocrAmount}</TableCell>
//         <TableCell>{loan.ocrReceivedAmount}</TableCell>
//         <TableCell>{loan.ocrBalance}</TableCell>
//         <TableCell>{loan.online}</TableCell>
//         <TableCell>{loan.cashWithAV}</TableCell>
//         <TableCell>{loan.historyCashWithAV}</TableCell>
//         <TableCell>{loan.balanceCashWithAV}</TableCell>
//         <TableCell>{loan.cashWithoutAV}</TableCell>
//         <TableCell>{loan.historyCashWithoutAV}</TableCell>
//         <TableCell>{loan.balanceCashWithoutAV}</TableCell>
//         <TableCell>{loan.receivedAsPerStage}</TableCell>
//         <TableCell>{loan.stampDutyTotal}</TableCell>
//         <TableCell>{loan.stampDutyReceived}</TableCell>
//         <TableCell>{loan.stampDutyBalance}</TableCell>
//         <TableCell>{loan.regTotal}</TableCell>
//         <TableCell>{loan.regReceived}</TableCell>
//         <TableCell>{loan.regBalance}</TableCell>
//         <TableCell>{loan.gstTotal}</TableCell>
//         <TableCell>{loan.gstReceived}</TableCell>
//         <TableCell>{loan.balanceGst}</TableCell>
//         <TableCell>{loan.legalChargesReceived}</TableCell>
//       </TableRow>
//     ));
//   };

//   const updateLoanStatus = (flatNo, newStatus) => {
//     // Update the loan status in your backend or state here
//     console.log(`Updating loan ${flatNo} status to ${newStatus}`);
//   };

//   return (
//     <div className="main-content">
//       <h6>Sales Module / OCR Collection Management</h6>

//       {/* CRM Section
//       <div style={{ marginBottom: '10px' }}>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => setShowCRM(prev => !prev)}
//           style={{ marginBottom: '10px' }}
//         >
//           {showCRM ? 'Hide CRM' : 'Show CRM'}
//         </Button>

//         <Collapse in={showCRM}>
//           <Box>
//             <h6>CRM Display</h6>
        
//           </Box>
//         </Collapse>
//       </div>

  
//       <div className="filter-container" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', justifyContent: 'space-between' }}>
//         {/* Filter Inputs (Displayed when showFilters is true) */}
//         <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
//           {/* Flat Type Filter */}
//           <FormControl>
//             <InputLabel>Flat Type</InputLabel>
//             <Select
//               value={flatType}
//               onChange={(e) => setFlatType(e.target.value)}
//               style={{ width: '150px' }}
//             >
//               {getFilterOptions("Flat Type").map((option, index) => (
//                 <MenuItem key={index} value={option}>{option}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           {/* Parking Filter */}
//           <FormControl>
//             <InputLabel>Parking</InputLabel>
//             <Select
//               value={parking}
//               onChange={(e) => setParking(e.target.value)}
//               style={{ width: '150px' }}
//             >
//               {getFilterOptions("Parking").map((option, index) => (
//                 <MenuItem key={index} value={option}>{option}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           {/* Floor Filter */}
//           <FormControl>
//             <InputLabel>Floor</InputLabel>
//             <Select
//               value={floor}
//               onChange={(e) => setFloor(e.target.value)}
//               style={{ width: '150px' }}
//             >
//               {getFilterOptions("Floor").map((option, index) => (
//                 <MenuItem key={index} value={option}>{option}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           {/* Rate Filter */}
//           <FormControl>
//             <InputLabel>Rate</InputLabel>
//             <Select
//               value={rate}
//               onChange={(e) => setRate(e.target.value)}
//               style={{ width: '150px' }}
//             >
//               {getFilterOptions("Rate").map((option, index) => (
//                 <MenuItem key={index} value={option}>{option}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </div>

//         {/* Filter and Reset Buttons */}
//         <div>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={filterLoansByDate}
//             style={{ marginRight: '10px' }}
//           >
//             Filter
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={resetFilters}
//           >
//             Reset
//           </Button>
//         </div>
//       </div>

      
//       // <TablePagination
//       //   rowsPerPageOptions={[5, 10, 25]}
//       //   component="div"
//       //   count={filteredLoans.length}
//       //   rowsPerPage={rowsPerPage}
//       //   page={currentPage - 1}
//       //   onPageChange={handlePagination}
//       //   onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value))}
//       //   style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', overflow: 'hidden' }}
//       // /> */}
//       <div className="d-flex align-items-center mb-2">
//       <Button
//         onClick={handleCollapseToggle}
//         variant="outlined"
//         color="success"
//         style={{ borderRadius: '20px' }}
//         startIcon={<FaEye size={20} color="#28a745" />}
//       >
//         {!isCollapsed && <span className="text-success">Home Loan</span>}
//       </Button>
//     </div>

//     {/* Filter Section */}
//     <div className="d-flex align-items-center mb-2">
//       <label>Filter By:</label>
//       <TextField
//         select
//         variant="outlined"
//         size="small"
//         style={{ width: '150px' }}
//         value={filterType}
//         className="bg-white"
//         onChange={(e) => {
//           setFilterType(e.target.value);
//           setFilterValue('');
//         }}
//       >
//         <MenuItem value="">Select Filter</MenuItem>
//         <MenuItem value="Flat Type">Flat Type</MenuItem>
//         <MenuItem value="Parking">Parking</MenuItem>
//         <MenuItem value="Floor">Floor</MenuItem>
//         <MenuItem value="Rate">Rate</MenuItem>
//       </TextField>

//       {/* Filter Value */}
//       {filterType && (
//         <>
//           <label>{filterType}:</label>
//           <TextField
//             select
//             variant="outlined"
//             size="small"
//             className="bg-white"
//             style={{ width: '150px' }}
//             value={filterValue}
//             onChange={(e) => setFilterValue(e.target.value)}
//           >
//             {getFilterOptions(filterType).map((option) => (
//               <MenuItem key={option} value={option}>
//                 {option}
//               </MenuItem>
//             ))}
//           </TextField>
//         </>
//       )}

//       <Button
//         variant="contained"
//         color="secondary"
//         style={{ borderRadius: '5px', padding: '10px 15px' }}
//         onClick={resetFilters}
//       >
//         Reset
//       </Button>
//     </div>

//     {/* Table Section */}
//     <TableContainer component={Paper}>
//       <Table style={{ tableLayout: 'auto', width: '100%' }}>
//         <TableHead>
//           <TableRow>
//             <TableCell>Flat No.</TableCell>
//             <TableCell>Name Of Allotee</TableCell>
//             {/* Add more headers */}
//           </TableRow>
//         </TableHead>
//         <TableBody>{displayLoans()}</TableBody>
//       </Table>
//     </TableContainer>

//     {/* Pagination Section */}
//     <div className="d-flex align-items-center justify-content-start gap-3">
//       <Button
//         variant="outlined"
//         color="primary"
//         onClick={() => handlePagination('prev')}
//         disabled={currentPage === 0}
//       >
//         Previous
//       </Button>
//       <Button
//         variant="outlined"
//         color="primary"
//         onClick={() => handlePagination('next')}
//         disabled={filteredLoans.length <= (currentPage + 1) * rowsPerPage}
//       >
//         Next
//       </Button>
//       <div className="d-flex align-items-center">
//         <label className="me-2">Rows per page:</label>
//         <input
//           type="number"
//           className="form-control"
//           value={rowsPerPage}
//           onChange={handleRowsPerPageChange}
//           style={{ width: '80px' }}
//         />
//       </div>
//     </div>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Flat No.</TableCell>
//               <TableCell>Name Of Allotee</TableCell>
//               <TableCell>Name Of Co-Allotee</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Floor</TableCell>
//               <TableCell>Email Id</TableCell>
//               <TableCell>Whatsapp Mobile No.</TableCell>
//               <TableCell>Rate</TableCell>
//               <TableCell>Agreement Value</TableCell>
//               <TableCell>Date Of Booking</TableCell>
//               <TableCell>Parking</TableCell>
//               <TableCell>Parking No</TableCell>
//               <TableCell>Loan Status</TableCell>
//               <TableCell>OCR Amount</TableCell>
//               <TableCell>Received Amount</TableCell>
//               <TableCell>Balance Amount</TableCell>
//               <TableCell>Online</TableCell>
//               <TableCell>Cash with AV</TableCell>
//               <TableCell>History (Cash with AV)</TableCell>
//               <TableCell>Balance (Cash with AV)</TableCell>
//               <TableCell>Cash without AV</TableCell>
//               <TableCell>History (Cash without AV)</TableCell>
//               <TableCell>Balance (Cash without AV)</TableCell>
//               <TableCell>Received as per stage</TableCell>
//               <TableCell>Stamp Duty Total</TableCell>
//               <TableCell>Stamp Duty Received</TableCell>
//               <TableCell>Stamp Duty Balance</TableCell>
//               <TableCell>Registration Total</TableCell>
//               <TableCell>Registration Received</TableCell>
//               <TableCell>Registration Balance</TableCell>
//               <TableCell>GST Total</TableCell>
//               <TableCell>GST Received</TableCell>
//               <TableCell>GST Balance</TableCell>
//               <TableCell>Legal Charges Received</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {displayLoans()}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default OCR;

// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, Button, MenuItem, Select, InputLabel, FormControl, Box, Collapse, TextField } from '@mui/material';
// import { FaEye } from 'react-icons/fa'; // Ensure you have the FaEye icon imported if you're using it

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const OCR = () => {
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
//         <TableCell>{loan.parkingNo}</TableCell>
//         <TableCell>
//           <select
//             className="minimal-select"
//             value={loan.loanStatus}
//             onChange={(e) => updateLoanStatus(loan.flatNo, e.target.value)}
//           >
//             <option value="">{loan.loanStatus || 'Select Status'}</option>
//             <option value="Yes">Yes</option>
//             <option value="No">No</option>
//             <option value="Non Sanction">Non Sanction</option>
//           </select>
//         </TableCell>
//         <TableCell>{loan.ocrAmount}</TableCell>
//         <TableCell>{loan.ocrReceivedAmount}</TableCell>
//         <TableCell>{loan.ocrBalance}</TableCell>
//         <TableCell>{loan.online}</TableCell>
//         <TableCell>{loan.cashWithAV}</TableCell>
//         <TableCell>{loan.historyCashWithAV}</TableCell>
//         <TableCell>{loan.balanceCashWithAV}</TableCell>
//         <TableCell>{loan.cashWithoutAV}</TableCell>
//         <TableCell>{loan.historyCashWithoutAV}</TableCell>
//         <TableCell>{loan.balanceCashWithoutAV}</TableCell>
//         <TableCell>{loan.receivedAsPerStage}</TableCell>
//         <TableCell>{loan.stampDutyTotal}</TableCell>
//         <TableCell>{loan.stampDutyReceived}</TableCell>
//         <TableCell>{loan.stampDutyBalance}</TableCell>
//         <TableCell>{loan.regTotal}</TableCell>
//         <TableCell>{loan.regReceived}</TableCell>
//         <TableCell>{loan.regBalance}</TableCell>
//         <TableCell>{loan.gstTotal}</TableCell>
//         <TableCell>{loan.gstReceived}</TableCell>
//         <TableCell>{loan.balanceGst}</TableCell>
//         <TableCell>{loan.legalChargesReceived}</TableCell>
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
//       <h6>Sales Module / OCR Collection Management</h6>

//       <div className="d-flex align-items-center mb-2">
//         <Button
//           onClick={handleCollapseToggle}
//           variant="outlined"
//           color="success"
//           style={{ borderRadius: '20px' }}
//           startIcon={<FaEye size={20} color="#28a745" />}
//         >
//           {!isCollapsed && <span className="text-success">Home Loan</span>}
//         </Button>
//       </div>

//       {/* Filter Section */}
//       <div className="d-flex align-items-center mb-2">
//         <label>Filter By:</label>
//         <TextField
//           select
//           variant="outlined"
//           size="small"
//           style={{ width: '150px' }}
//           value={filterType}
//           className="bg-white"
//           onChange={(e) => {
//             setFilterType(e.target.value);
//             setFilterValue('');
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
//               style={{ width: '150px' }}
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
//           style={{ borderRadius: '5px', padding: '10px 15px' }}
//           onClick={resetFilters}
//         >
//           Reset
//         </Button>
//       </div>

//       {/* Table Section */}
//       <TableContainer component={Paper}>
//         <Table style={{ tableLayout: 'auto', width: '100%' }}>
//           <TableHead>
//             <TableRow>
//               <TableCell>Flat No.</TableCell>
//               <TableCell>Name Of Allotee</TableCell>
//               {/* Add more headers */}
//             </TableRow>
//           </TableHead>
//           <TableBody>{displayLoans()}</TableBody>
//         </Table>
//       </TableContainer>

//       {/* Pagination Section */}
//       <div className="d-flex align-items-center justify-content-start gap-3">
//         <Button
//           variant="outlined"
//           color="primary"
//           onClick={() => handlePagination('prev')}
//           disabled={currentPage === 0}
//         >
//           Previous
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           onClick={() => handlePagination('next')}
//           disabled={filteredLoans.length <= (currentPage + 1) * rowsPerPage}
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
//             style={{ width: '80px' }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OCR;

// ==========

// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, Button, MenuItem, Select, InputLabel, FormControl, Box, Collapse, TextField } from '@mui/material';
// import { FaEye } from 'react-icons/fa'; // Ensure you have the FaEye icon imported if you're using it

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const OCR = () => {
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
//         <TableCell>{loan.parkingNo}</TableCell>
//         <TableCell>
//           <select
//             className="minimal-select"
//             value={loan.loanStatus}
//             onChange={(e) => updateLoanStatus(loan.flatNo, e.target.value)}
//           >
//             <option value="">{loan.loanStatus || 'Select Status'}</option>
//             <option value="Yes">Yes</option>
//             <option value="No">No</option>
//             <option value="Non Sanction">Non Sanction</option>
//           </select>
//         </TableCell>
//         <TableCell>{loan.ocrAmount}</TableCell>
//         <TableCell>{loan.ocrReceivedAmount}</TableCell>
//         <TableCell>{loan.ocrBalance}</TableCell>
//         <TableCell>{loan.online}</TableCell>
//         <TableCell>{loan.cashWithAV}</TableCell>
//         <TableCell>{loan.historyCashWithAV}</TableCell>
//         <TableCell>{loan.balanceCashWithAV}</TableCell>
//         <TableCell>{loan.cashWithoutAV}</TableCell>
//         <TableCell>{loan.historyCashWithoutAV}</TableCell>
//         <TableCell>{loan.balanceCashWithoutAV}</TableCell>
//         <TableCell>{loan.receivedAsPerStage}</TableCell>
//         <TableCell>{loan.stampDutyTotal}</TableCell>
//         <TableCell>{loan.stampDutyReceived}</TableCell>
//         <TableCell>{loan.stampDutyBalance}</TableCell>
//         <TableCell>{loan.regTotal}</TableCell>
//         <TableCell>{loan.regReceived}</TableCell>
//         <TableCell>{loan.regBalance}</TableCell>
//         <TableCell>{loan.gstTotal}</TableCell>
//         <TableCell>{loan.gstReceived}</TableCell>
//         <TableCell>{loan.balanceGst}</TableCell>
//         <TableCell>{loan.legalChargesReceived}</TableCell>
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
//       <h6>Sales Module / OCR Collection Management</h6>

//       {/* CRM Display Button */}
//       <div className="d-flex align-items-center mb-3">
//         <Button
//           onClick={handleCollapseToggle}
//           variant="outlined"
//           color="success"
//           style={{ borderRadius: '20px' }}
//           startIcon={<FaEye size={20} color="#28a745" />}
//         >
//           {!isCollapsed && <span className="text-success">Home Loan</span>}
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
//             </>
//           )}
//         </div>

//         <div className="d-flex align-items-center gap-3">
//           <Button
//             variant="contained"
//             color="secondary"
//             style={{ borderRadius: '5px', padding: '10px 15px' }}
//             onClick={resetFilters}
//           >
//             Reset
//           </Button>

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
//       <TableContainer component={Paper}>
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
//       </TableContainer>

//       {/* Pagination Section */}
//       <div className="d-flex align-items-center justify-content-start gap-3 mt-3">
//         <Button
//           variant="outlined"
//           color="primary"
//           onClick={() => handlePagination('prev')}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </Button>
//         <Button
//           variant="outlined"
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

// export default OCR;


import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, Button, MenuItem, Select, InputLabel, FormControl, Box, Collapse, TextField } from '@mui/material';
import { FaEye } from 'react-icons/fa'; // Ensure you have the FaEye icon imported if you're using it

const fetchLoansData = async () => {
  const response = await fetch('/api/getOCRCollection');
  return response.json();
};

const OCR = () => {
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
  const [showCRM, setShowCRM] = useState(false);  // State for CRM toggle
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

  const displayLoans = () => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = Math.min(start + rowsPerPage, filteredLoans.length);
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
        <TableCell>{loan.parkingNo}</TableCell>
        <TableCell>
          <select
            className="minimal-select"
            value={loan.loanStatus}
            onChange={(e) => updateLoanStatus(loan.flatNo, e.target.value)}
          >
            <option value="">{loan.loanStatus || 'Select Status'}</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Non Sanction">Non Sanction</option>
          </select>
        </TableCell>
        <TableCell>{loan.ocrAmount}</TableCell>
        <TableCell>{loan.ocrReceivedAmount}</TableCell>
        <TableCell>{loan.ocrBalance}</TableCell>
        <TableCell>{loan.online}</TableCell>
        <TableCell>{loan.cashWithAV}</TableCell>
        <TableCell>{loan.historyCashWithAV}</TableCell>
        <TableCell>{loan.balanceCashWithAV}</TableCell>
        <TableCell>{loan.cashWithoutAV}</TableCell>
        <TableCell>{loan.historyCashWithoutAV}</TableCell>
        <TableCell>{loan.balanceCashWithoutAV}</TableCell>
        <TableCell>{loan.receivedAsPerStage}</TableCell>
        <TableCell>{loan.stampDutyTotal}</TableCell>
        <TableCell>{loan.stampDutyReceived}</TableCell>
        <TableCell>{loan.stampDutyBalance}</TableCell>
        <TableCell>{loan.regTotal}</TableCell>
        <TableCell>{loan.regReceived}</TableCell>
        <TableCell>{loan.regBalance}</TableCell>
        <TableCell>{loan.gstTotal}</TableCell>
        <TableCell>{loan.gstReceived}</TableCell>
        <TableCell>{loan.balanceGst}</TableCell>
        <TableCell>{loan.legalChargesReceived}</TableCell>
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
      <h6 className='pt-3'>Sales Module / OCR Collection Management</h6>

      {/* CRM Display Button */}
      <div className="d-flex align-items-center mb-3">
        <Button
          onClick={handleCollapseToggle}
          variant="outlined"
          className='mt-4 mb-4'
          color="success"
          style={{ borderRadius: '20px' }}
          startIcon={<FaEye size={20} color="#28a745" />}
        >
          {!isCollapsed && <span className="text-success">OCR Collection</span>}
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
              <TableCell>Parking No</TableCell>
              <TableCell>Loan Status</TableCell>
              <TableCell>OCR Amount</TableCell>
              <TableCell>OCR Received</TableCell>
              <TableCell>OCR Balance</TableCell>
              <TableCell>Online</TableCell>
              <TableCell>Cash With AV</TableCell>
              <TableCell>History Cash With AV</TableCell>
              <TableCell>Balance Cash With AV</TableCell>
              <TableCell>Cash Without AV</TableCell>
              <TableCell>History Cash Without AV</TableCell>
              <TableCell>Balance Cash Without AV</TableCell>
              <TableCell>Received As Per Stage</TableCell>
              <TableCell>Stamp Duty Total</TableCell>
              <TableCell>Stamp Duty Received</TableCell>
              <TableCell>Stamp Duty Balance</TableCell>
              <TableCell>Reg Total</TableCell>
              <TableCell>Reg Received</TableCell>
              <TableCell>Reg Balance</TableCell>
              <TableCell>GST Total</TableCell>
              <TableCell>GST Received</TableCell>
              <TableCell>Balance GST</TableCell>
              <TableCell>Legal Charges Received</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{displayLoans()}</TableBody>
        </Table>
      </TableContainer>

     

      <div className="d-flex justify-content-between align-items-center">
              <Button style={{backgroundColor:"#800080"}} className="text-white mt-3" onClick={handlePagination} disabled={currentPage === 1}>Previous</Button>
              <Button style={{backgroundColor:"#800080"}} className='text-white mt-3' onClick={handlePagination} disabled={currentPage === totalPages}>Next</Button>
            </div>
    </div>
  );
};

export default OCR;
