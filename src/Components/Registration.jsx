










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
//   { Header: "Flat No", accessor: "flatNo" },
//   { Header: "Name of Allotee", accessor: "nameAllotee" },
//   { Header: "Name of Co-Allotee", accessor: "nameCoAllotee" },
//   { Header: "Type", accessor: "type" },
//   { Header: "Floor", accessor: "floor" },
//   { Header: "Email ID", accessor: "emailId" },
//   { Header: "Whatsapp Mobile No.", accessor: "whatsapp" },
//   { Header: "Rate", accessor: "rate" },
//   { Header: "Agreement Value", accessor: "agreementValue" },
//   { Header: "Date of Booking", accessor: "dateBooking" },
//   { Header: "Parking", accessor: "parking" },
//   { Header: "Registration Number", accessor: "regNumber" },
//   { Header: "Checklist of Document Collection", accessor: "docCollection" },
//   { Header: "Upload Index 2", accessor: "uploadIndex2" },
//   { Header: "Document Handover", accessor: "docHandover" },
// ];

// const data = [
//   {
//     flatNo: "101",
//     nameAllotee: "John Doe",
//     nameCoAllotee: "Jane Doe",
//     type: "2BHK",
//     floor: "1",
//     emailId: "john@example.com",
//     whatsapp: "1234567890",
//     rate: "₹50,000",
//     agreementValue: "₹5,00,000",
//     dateBooking: "2024-02-20",
//     parking: "Yes",
//     regNumber: "AB12345",
//     docCollection: "Completed",
//     uploadIndex2: "Uploaded",
//     docHandover: "Yes",
//   },
//   {
//     flatNo: "101",
//     nameAllotee: "John Doe",
//     nameCoAllotee: "Jane Doe",
//     type: "2BHK",
//     floor: "1",
//     emailId: "john@example.com",
//     whatsapp: "1234567890",
//     rate: "₹50,000",
//     agreementValue: "₹5,00,000",
//     dateBooking: "2024-02-20",
//     parking: "Yes",
//     regNumber: "AB12345",
//     docCollection: "Completed",
//     uploadIndex2: "Uploaded",
//     docHandover: "Yes",
//   },
 
// ];

// const Registration = () => {
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
//       <h3 className="fs-6 pb-3">Sales Module / Registration Management</h3>

//       <div className="d-flex align-items-center mb-2">
//         <Button className="mb-5"
//           onClick={handleCollapseToggle}
//           variant="outlined"
//           color="success"
//           style={{ borderRadius: "20px" }}
//           startIcon={<FaEye size={20} color="#28a745" />}
//         >
//           {!isCollapsed && <span className="text-success ">Registration</span>}
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
//             placeholder="Select Date"
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
//           <TableHead>
//             <TableRow>
//               {columns
//                 .filter((column) => column.Header !== "Actions")
//                 .map((column) => (
//                   <TableCell key={column.Header} align="center">
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

// export default Registration;




import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, MenuItem, TextField } from '@mui/material';
import { FaEye } from 'react-icons/fa'; // Ensure you have the FaEye icon imported if you're using it

const fetchLoansData = async () => {
  const response = await fetch('/api/getOCRCollection');
  return response.json();
};



const Registration = () => {
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


  const sampleLoans = [
    {
      flatNo: "A101",
      nameOfAllotee: "John Doe",
      nameOfCoAllotee: "Jane Doe",
      type: "2 BHK",
      floor: "1st",
      emailId: "john.doe@example.com",
      whatsappMobileNo: "+91 9876543210",
      rate: "₹75,00,000",
      agreementValue: "₹70,00,000",
      dateOfBooking: "2024-02-01",
      parking: "Yes",
      registrationNumber: "REG12345",
      checklistOfDocumentCollection: "Pending",
      uploadIndex2: "Uploaded",
      documentHandover: "No",
    }
  ]

  useEffect(() => {
    loadLoansData();
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredLoans.length / rowsPerPage));
  }, [filteredLoans, rowsPerPage]);

 

  const loadLoansData = async () => {
    try {
      const data = await fetchLoansData();
      setLoans(data);
      setFilteredLoans(data);
    } catch (error) {
      console.error("Error fetching data, using sample data:", error);
      setLoans(sampleLoans);
      setFilteredLoans(sampleLoans);
    }
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
      // <TableRow key={loan.flatNo}>
      //   <TableCell>{loan.flatNo}</TableCell>
      //   <TableCell>{loan.nameOfAllotee}</TableCell>
      //   <TableCell>{loan.nameOfCoAllotee}</TableCell>
      //   <TableCell>{loan.type}</TableCell>
      //   <TableCell>{loan.floor}</TableCell>
      //   <TableCell>{loan.emailId}</TableCell>
      //   <TableCell>{loan.whatsappMobileNo}</TableCell>
      //   <TableCell>{loan.rate}</TableCell>
      //   <TableCell>{loan.agreementValue}</TableCell>
      //   <TableCell>{loan.dateOfBooking}</TableCell>
      //   <TableCell>{loan.parking}</TableCell>
      //   <TableCell>{loan.homeLoanApplicability}</TableCell> {/* New column */}
      //   <TableCell>{loan.bankName}</TableCell> {/* New column */}
      //   <TableCell>{loan.bankerName}</TableCell> {/* New column */}
      //   <TableCell>{loan.mobileNo}</TableCell> {/* New column */}
      //   <TableCell>{loan.loanAccountNo}</TableCell> {/* New column */}
      //   <TableCell>{loan.loanAmount}</TableCell> {/* New column */}
      //   <TableCell>{loan.sanctionLetter}</TableCell> {/* New column */}
      //   <TableCell>{loan.homeLoanSanctionCertificateCollected}</TableCell> {/* New column */}
      //   <TableCell>{loan.bookingCancellationReason}</TableCell> {/* New column */}
      //   <TableCell>{loan.bookingConfirmationMailSent}</TableCell> {/* New column */}
      // </TableRow>

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
  <TableCell>{loan.registrationNumber}</TableCell> {/* Updated column */}
  <TableCell>{loan.checklistOfDocumentCollection}</TableCell> {/* Updated column */}
  <TableCell>{loan.uploadIndex2}</TableCell> {/* Updated column */}
  <TableCell>{loan.documentHandover}</TableCell> {/* Updated column */}
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
      <h6 className='mb-5'>Sales Module / Registration Management</h6>

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
          {!isCollapsed && <span className="text-success">Registration</span>}
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

{/*       
<TableContainer component={Paper}>
  <Table style={{ tableLayout: 'auto', width: '100%' }}>
    <TableHead>
      <TableRow>
        
        <TableCell>FLAT NO.</TableCell>
        <TableCell>NAME OF ALLOTEE</TableCell>
        <TableCell>NAME OF CO-ALLOTEE</TableCell>
        <TableCell>TYPE</TableCell>
        <TableCell>FLOOR</TableCell>
        <TableCell>EMAIL ID</TableCell>
        <TableCell>WHATSAPP MOBILE NO.</TableCell>
        <TableCell>RATE</TableCell>
        <TableCell>AGREEMENT VALUE</TableCell>
        <TableCell>DATE OF BOOKING</TableCell>
        <TableCell>PARKING</TableCell>
        <TableCell>REGISTRATION NUMBER</TableCell>
        <TableCell>CHECKLIST OF DOCUMENT COLLECTION (AFTER AGREEMENT)</TableCell>
        <TableCell>UPLOAD INDEX 2</TableCell>
        <TableCell>DOCUMENT HANDOVER</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {displayLoans()}
    </TableBody>
  </Table>
</TableContainer> */}

{/* <TableContainer component={Paper} style={{ backgroundColor: 'white' }}>
  <Table style={{ tableLayout: 'auto', width: '100%' }}>
    <TableHead sx={{ backgroundColor: '#800080' }}> 
      <TableRow>
        <TableCell style={{ fontWeight: 'bold'}}>FLAT NO.</TableCell>
        <TableCell style={{ fontWeight: 'bold' }}>NAME OF ALLOTEE</TableCell>
        <TableCell style={{ fontWeight: 'bold' }}>NAME OF CO-ALLOTEE</TableCell>
        <TableCell style={{ fontWeight: 'bold' }}>TYPE</TableCell>
        <TableCell style={{ fontWeight: 'bold' }}>FLOOR</TableCell>
        <TableCell style={{ fontWeight: 'bold' }}>EMAIL ID</TableCell>
        <TableCell style={{ fontWeight: 'bold' }}>WHATSAPP MOBILE NO.</TableCell>
        <TableCell style={{ fontWeight: 'bold' }}>RATE</TableCell>
        <TableCell style={{ fontWeight: 'bold' }}>AGREEMENT VALUE</TableCell>
        <TableCell style={{ fontWeight: 'bold' }}>DATE OF BOOKING</TableCell>
        <TableCell style={{ fontWeight: 'bold' }}>PARKING</TableCell>
        <TableCell style={{ fontWeight: 'bold' }}>REGISTRATION NUMBER</TableCell>
        <TableCell style={{ fontWeight: 'bold' }}>CHECKLIST OF DOCUMENT COLLECTION (AFTER AGREEMENT)</TableCell>
        <TableCell style={{ fontWeight: 'bold' }}>UPLOAD INDEX 2</TableCell>
        <TableCell style={{ fontWeight: 'bold' }}>DOCUMENT HANDOVER</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {displayLoans()}
    </TableBody>
  </Table>
</TableContainer> */}

<TableContainer component={Paper} sx={{ backgroundColor: 'white' }}>
  <Table sx={{ tableLayout: 'auto', width: '100%' }}>
    <TableHead >
      <TableRow sx={{ backgroundColor: '#800080' }}>
        {/* Updated Table Headers */}
        <TableCell sx={{ fontWeight: 'bold' }}>FLAT NO.</TableCell>
        <TableCell sx={{ fontWeight: 'bold'  }}>NAME OF ALLOTEE</TableCell>
        <TableCell sx={{ fontWeight: 'bold' }}>NAME OF CO-ALLOTEE</TableCell>
        <TableCell sx={{ fontWeight: 'bold' }}>TYPE</TableCell>
        <TableCell sx={{ fontWeight: 'bold' }}>FLOOR</TableCell>
        <TableCell sx={{ fontWeight: 'bold'}}>EMAIL ID</TableCell>
        <TableCell sx={{ fontWeight: 'bold' }}>WHATSAPP MOBILE NO.</TableCell>
        <TableCell sx={{ fontWeight: 'bold' }}>RATE</TableCell>
        <TableCell sx={{ fontWeight: 'bold'}}>AGREEMENT VALUE</TableCell>
        <TableCell sx={{ fontWeight: 'bold'  }}>DATE OF BOOKING</TableCell>
        <TableCell sx={{ fontWeight: 'bold'  }}>PARKING</TableCell>
        <TableCell sx={{ fontWeight: 'bold' }}>REGISTRATION NUMBER</TableCell>
        <TableCell sx={{ fontWeight: 'bold'}}>CHECKLIST OF DOCUMENT COLLECTION (AFTER AGREEMENT)</TableCell>
        <TableCell sx={{ fontWeight: 'bold' }}>UPLOAD INDEX 2</TableCell>
        <TableCell sx={{ fontWeight: 'bold' }}>DOCUMENT HANDOVER</TableCell>
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

export default Registration;

