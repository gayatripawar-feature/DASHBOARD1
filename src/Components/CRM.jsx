



// import React, { useState } from "react";

// import { FaEye } from "react-icons/fa";
// import {
//     Button,
//     TextField,
//     MenuItem,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     TablePagination,
//     Paper,
//   } from "@mui/material";
  
// const getFilterOptions = (type) => {
//   switch (type) {
//     case "Flat Type":
//       return ["1BHK", "2BHK", "3BHK", "Studio"];
//     case "Parking":
//       return ["Yes", "No"];
//     case "Floor":
//       return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
//     case "Rate":
//       let rates = [];
//       for (let i = 50000; i <= 6000000; i += 50000) {
//         rates.push(`₹${i.toLocaleString()}`);
//       }
//       return rates;
//     case "Project Name":
//       return [
//         "Shubh Aarambh",
//         "Elara",
//         "Infini",
//         "Serenity",
//         "Prime",
//         "PYB",
//         "Onella Tower",
//         "Aradhyam",
//         "Stella",
//       ];
//     case "Allotee Name":
//       return [
//         "John Doe",
//         "Jane Smith",
//         "Michael Johnson",
//         "Sara Lee",
//         "James Brown",
//         "Emily Davis",
//         "Robert Wilson",
//         "Maria Garcia",
//         "David Harris",
//         "Sophia Martinez",
//       ];
//     default:
//       return [];
//   }
// };

// const CRM = () => {
//   const [filterType, setFilterType] = useState("");
//   const [filterValue, setFilterValue] = useState("");
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [isCollapsed, setIsCollapsed] = useState(true);

//   const handlePrevious = () => {
//     if (page > 0) setPage(page - 1);
//   };

//   const handleNext = () => {
//     setPage(page + 1);
//   };

//   const handleReset = () => {
//     setFilterType("");  // Resets the filter type
//     setFilterValue(""); // Resets the filter value
//   };

//   const handleCollapseToggle = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className="container mt-3">
//       {/* Heading */}
//       <h3 className="fs-6">CRM Module / CRM Management</h3>
//       <div className="d-flex align-items-center mb-2 justify-content-left p-3">
//         <button
//           onClick={handleCollapseToggle}
//           className="btn btn-light d-flex align-items-center gap-2"
//           style={{ borderRadius: "20px" }}
//         >
//           <div className="rounded-circle p-2" style={{ background: "#f0f0f0" }}>
//             <FaEye size={20} color="#28a745" />
//           </div>
//           {!isCollapsed && <span className="text-success">CRM Display</span>}
//         </button>
//       </div>

     
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           // justifyContent: "center",
//           gap: "20px",
//           flexWrap: "wrap",
//           width: "100%",
//           marginBottom: "20px", 
//         }} className="m-3 pb-5"
//       >
       
//         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//           <label>Filter By:</label>
//           <TextField
//             select
//             variant="outlined"
//             size="small"
//             style={{ width: "150px" }}
//             value={filterType}
//             onChange={(e) => {
//               setFilterType(e.target.value);
//               setFilterValue(""); 
//             }}
//           >
//             <MenuItem value="">Select Filter</MenuItem>
//             {["Flat Type", "Parking", "Floor", "Rate", "Project Name", "Allotee Name"].map((option) => (
//               <MenuItem key={option} value={option}>
//                 {option}
//               </MenuItem>
//             ))}
//           </TextField>

//           {filterType && (
//             <TextField
//               select
//               variant="outlined"
//               size="small"
//               style={{ width: "150px" }}
//               value={filterValue}
//               onChange={(e) => setFilterValue(e.target.value)}
//               placeholder={`Enter ${filterType}`}
//             >
//               <MenuItem value="">Select {filterType}</MenuItem>
//               {getFilterOptions(filterType).map((option) => (
//                 <MenuItem key={option} value={option}>
//                   {option}
//                 </MenuItem>
//               ))}
//             </TextField>
//           )}

//           {/* Apply Filter Button */}
//           <Button variant="contained" color="primary" onClick={handleReset}>
//             Reset
//           </Button>
//         </div>

//         {/* Pagination Controls */}
//         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={handlePrevious}
//             disabled={page === 0}
//           >
//             Previous
//           </Button>

//           <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
//             <label>Page:</label>
//             <TextField
//               select
//               size="small"
//               variant="outlined"
//               value={page}
//               onChange={(e) => setPage(parseInt(e.target.value, 10))}
//               style={{ width: "60px" }}
//             >
//               {[0, 1, 2, 3, 4, 5].map((option) => (
//                 <MenuItem key={option} value={option}>
//                   {option + 1}
//                 </MenuItem>
//               ))}
//             </TextField>

//             <label>Rows per page:</label>
//             <TextField
//               select
//               size="small"
//               variant="outlined"
//               value={rowsPerPage}
//               onChange={(e) => setRowsPerPage(parseInt(e.target.value, 10))}
//               style={{ width: "60px" }}
//             >
//               {[5, 10, 15, 20].map((option) => (
//                 <MenuItem key={option} value={option}>
//                   {option}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </div>

//           <Button variant="contained" color="secondary" onClick={handleNext}>
//             Next
//           </Button>
//         </div>
//       </div>

     
//       <TableContainer
//   component={Paper}
//   style={{
//     marginTop: "30px",
//     marginBottom: "30px",
//     marginLeft: "20px",
//     marginRight: "20px",
//     padding: "20px",
//     width: "calc(100% - 280px)", // Adjust to ensure table is fully visible
//     overflowX: "auto",
//   }}
// >
//   <Table>
//   <TableHead>
//   <TableRow>
//     <TableCell>Action</TableCell>
//     <TableCell>Timestamp</TableCell>
//     <TableCell>Enquiry No.</TableCell>
//     <TableCell>Project Name</TableCell>
//     <TableCell>Date of Flat Booking</TableCell>
//     <TableCell>Name of Allotee</TableCell>
//     <TableCell>Source Name</TableCell>
//     <TableCell>Date of Birth</TableCell>
//     <TableCell>Occupation</TableCell>
//     <TableCell>PAN No.</TableCell>
//     <TableCell>Aadhar No.</TableCell>
//     <TableCell>Mobile No.</TableCell>
//     <TableCell>Alternate Mobile No.</TableCell>
//     <TableCell>WhatsApp No.</TableCell>
//     <TableCell>Email ID</TableCell>
//     <TableCell>Address</TableCell>
//     <TableCell>Name of Co-Allotee</TableCell>
//     <TableCell>Date of Birth (Co-Allotee)</TableCell>
//     <TableCell>Occupation (Co-Allotee)</TableCell>
//     <TableCell>PAN No. (Co-Allotee)</TableCell>
//     <TableCell>Aadhar No. (Co-Allotee)</TableCell>
//     <TableCell>Mobile No. & Email (Co-Allotee)</TableCell>
//     <TableCell>Flat No.</TableCell>
//     <TableCell>Type</TableCell>
//     <TableCell>Wing</TableCell>
//     <TableCell>Sold Rate</TableCell>
//     <TableCell>Carpet Area in (Sq. Mtr.)</TableCell>
//     <TableCell>Enclosed Balcony in (Sq. Mtr.)</TableCell>
//     <TableCell>Open Balcony in (Sq. Mtr.)</TableCell>
//     <TableCell>Terrace in (Sq. Mtr.)</TableCell>
//     <TableCell>Parking</TableCell>
//     <TableCell>Floor</TableCell>
//     <TableCell>Total Consideration / Agreement Value</TableCell>
//     <TableCell>Booking Amount / Advance Payment</TableCell>
//     <TableCell>Stamp Duty (7% of Agreement Cost)</TableCell>
//     <TableCell>Registration Fee (1% of Agreement Cost)</TableCell>
//     <TableCell>GST Amount</TableCell>
//     <TableCell>PAN Card (of Both)</TableCell>
//     <TableCell>Aadhar Card (of Both)</TableCell>
//     <TableCell>Marriage Certificate (If Available)</TableCell>
//     <TableCell>Passport Size Photo (of Both)</TableCell>
//     <TableCell>Any Other</TableCell>
//     <TableCell>Booking Amount</TableCell>
//     <TableCell>Payment Mode</TableCell>
//     <TableCell>Cheque/TRN No.</TableCell>
//     <TableCell>Cheque/TRN Date</TableCell>
//     <TableCell>Bank Name</TableCell>
//     <TableCell>Bank Details</TableCell>
//   </TableRow>
// </TableHead>
//     <TableBody>
     
//       {[
        
//       ].map((row) => (
//         <TableRow key={row.id}>
//           <TableCell>{row.id}</TableCell>
//           <TableCell>{row.name}</TableCell>
//           <TableCell>{row.projectName}</TableCell>
//           <TableCell>{row.flatType}</TableCell>
//           <TableCell>{row.rate}</TableCell>
//         </TableRow>
//       ))}
//     </TableBody>
//   </Table>
// </TableContainer>

//     </div>
//   );
// };

// export default CRM;




import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, MenuItem, TextField } from '@mui/material';
import { FaEye } from 'react-icons/fa'; // Ensure you have the FaEye icon imported if you're using it

const fetchLoansData = async () => {
  const response = await fetch('/api/getOCRCollection');
  return response.json();
};

const CRM = () => {
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
  const [ProjectType,setProjectType] = useState('');
  
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
      case "Project Type":
        return ["Shubh Aarambh", "Elara", "Infini", "Serenity", "Prime", "PYB", "Onella Tower", "Aradhyam", "Stella"];
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
    setProjectType('');  // Added this line for Project Type
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
  <TableCell>{loan.action}</TableCell> {/* New column */}
  <TableCell>{loan.timestamp}</TableCell> {/* New column */}
  <TableCell>{loan.enquiryNo}</TableCell> {/* New column */}
  <TableCell>{loan.projectName}</TableCell> {/* New column */}
  <TableCell>{loan.dateOfFlatBooking}</TableCell> {/* New column */}
  <TableCell>{loan.nameOfAllotee}</TableCell>
  <TableCell>{loan.sourceName}</TableCell> {/* New column */}
  <TableCell>{loan.dateOfBirth}</TableCell> {/* New column */}
  <TableCell>{loan.occupation}</TableCell> {/* New column */}
  <TableCell>{loan.panNo}</TableCell> {/* New column */}
  <TableCell>{loan.aadharNo}</TableCell> {/* New column */}
  <TableCell>{loan.mobileNo}</TableCell>
  <TableCell>{loan.alternateMobileNo}</TableCell> {/* New column */}
  <TableCell>{loan.whatsappNo}</TableCell>
  <TableCell>{loan.emailId}</TableCell>
  <TableCell>{loan.address}</TableCell> {/* New column */}
  <TableCell>{loan.nameOfCoAllotee}</TableCell>
  <TableCell>{loan.dobCoAllotee}</TableCell> {/* New column */}
  <TableCell>{loan.occupationCoAllotee}</TableCell> {/* New column */}
  <TableCell>{loan.panNoCoAllotee}</TableCell> {/* New column */}
  <TableCell>{loan.aadharNoCoAllotee}</TableCell> {/* New column */}
  <TableCell>{loan.mobileEmailCoAllotee}</TableCell> {/* New column */}
  <TableCell>{loan.flatNo}</TableCell>
  <TableCell>{loan.type}</TableCell>
  <TableCell>{loan.wing}</TableCell> {/* New column */}
  <TableCell>{loan.soldRate}</TableCell> {/* New column */}
  <TableCell>{loan.carpetArea}</TableCell> {/* New column */}
  <TableCell>{loan.enclosedBalcony}</TableCell> {/* New column */}
  <TableCell>{loan.openBalcony}</TableCell> {/* New column */}
  <TableCell>{loan.terrace}</TableCell> {/* New column */}
  <TableCell>{loan.parking}</TableCell>
  <TableCell>{loan.floor}</TableCell>
  <TableCell>{loan.totalConsideration}</TableCell> {/* New column */}
  <TableCell>{loan.bookingAmount}</TableCell> {/* New column */}
  <TableCell>{loan.stampDuty}</TableCell> {/* New column */}
  <TableCell>{loan.registrationFee}</TableCell> {/* New column */}
  <TableCell>{loan.gstAmount}</TableCell> {/* New column */}
  <TableCell>{loan.panCard}</TableCell> {/* New column */}
  <TableCell>{loan.aadharCard}</TableCell> {/* New column */}
  <TableCell>{loan.marriageCertificate}</TableCell> {/* New column */}
  <TableCell>{loan.passportSizePhoto}</TableCell> {/* New column */}
  <TableCell>{loan.anyOther}</TableCell> {/* New column */}
  <TableCell>{loan.bookingAmount}</TableCell>
  <TableCell>{loan.paymentMode}</TableCell> {/* New column */}
  <TableCell>{loan.chequeTrnNo}</TableCell> {/* New column */}
  <TableCell>{loan.chequeTrnDate}</TableCell> {/* New column */}
  <TableCell>{loan.bankName}</TableCell>
  <TableCell>{loan.bankDetails}</TableCell> {/* New column */}
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
      <h6 className='mb-5'>Sales Module / CRM Display</h6>

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
          {!isCollapsed && <span className="text-success">CRM Display</span>}
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
            <MenuItem value="Project Type">Project Type</MenuItem>
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

  

<TableContainer component={Paper}  sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
  <Table style={{ tableLayout: 'auto', width: '100%' }}>
    <TableHead>
  

      <TableRow sx={{ bgcolor: "primary.main" }}>
        {/* Table Headers */}
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>ACTION</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>TIMESTAMP</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>ENQUIRY NO.</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>PROJECT NAME</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>DATE OF FLAT BOOKING</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>NAME OF ALOTEE</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>SOURCE NAME</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>DATE OF BIRTH</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>OCCUPATION</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>PAN NO.</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>AADHAR NO.</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>MOBILE NO.</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>ALTERNATE MOBILE NO</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>WHATSAPP NO</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>EMAIL ID</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>ADDRESS</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>NAME OF CO-ALOTEE</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>DATE OF BIRTH (CO-ALOTEE)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>OCCUPATION (CO-ALOTEE)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>PAN NO. (CO-ALOTEE)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>AADHAR NO. (CO-ALOTEE)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>MOBILE NO. & EMAIL (CO-ALOTEE)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>FLAT NO.</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>TYPE</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>WING</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>SOLD RATE</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>CARPET AREA IN (SQ. MTR.)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>ENCLOSED BALCONY IN (SQ. MTR.)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>OPEN BALCONY IN (SQ. MTR.)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>TERRACE IN (SQ. MTR.)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>PARKING</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>FLOOR</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>TOTAL CONSIDERATION /AGREEMENT VALUE</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>BOOKING AMOUNT / ADVANCE PAYMENT</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>STAMP DUTY (7% OF AGREEMENT COST)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>REGISTRATION FEE(1% OF AGREEMENT COST)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>GST AMOUNT</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>PAN CARD(OF BOTH)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>AADHAR CARD(OF BOTH)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>MARRIAGE CERTIFICATE (IF AVAILABLE)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>PASSPORT SIZE PHOTO (OF BOTH)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>ANY OTHER</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>BOOKING AMOUNT</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>PAYMENT MODE</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>CHEQUE/TRN NO.</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>CHEQUE/TRN DATE</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>BANK NAME</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" }}>BANK DETAILS</TableCell>
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

export default CRM;
