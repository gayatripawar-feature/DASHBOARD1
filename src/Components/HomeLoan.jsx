










import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, MenuItem, TextField } from '@mui/material';
import { FaEye } from 'react-icons/fa'; 

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
      <TableRow key={loan.flatNo}  sx={{background: "linear-gradient(to right, #ffd3e3, #ffebb7)"}}>
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
      <h6 className='mb-3'>Sales Module / Home Loan Management</h6>

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
    {/* Start Date */}
    <div className="d-flex align-items-center">
                             <label style={{ marginRight: '5px' }}>Start Date:</label>
                             <TextField
                               type="date"
                               variant="outlined"
                               size="small"
                               style={{ width: '150px', textAlign: 'center' }}
                               value={startDate}
                               onChange={(e) => setStartDate(e.target.value)}
                             />
                           </div>
                       
                           {/* End Date */}
                           <div className="d-flex align-items-center">
                             <label style={{ marginRight: '5px' }}>End Date:</label>
                             <TextField
                               type="date"
                               variant="outlined"
                               size="small"
                               style={{ width: '150px', textAlign: 'center' }}
                               value={endDate}
                               onChange={(e) => setEndDate(e.target.value)}
                             />
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
      <TableContainer component={Paper}  sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
        <Table style={{ tableLayout: 'auto', width: '100%' }}>
          <TableHead>
            {/* <TableRow sx={{ bgcolor: "primary.main" }}> */}
                  <TableRow sx={{ background: "linear-gradient(180deg, #3621a9 0%,rgb(139, 115, 243) 100%)" }}>
              {/* Table Headers */}
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Flat No.</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"  }}>Name Of Allotee</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Name Of Co-Allotee</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Type</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap"  }}>Floor</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Email</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Whatsapp No.</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Rate</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Agreement Value</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Booking Date</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Parking</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Home Loan Applicability</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Bank Name</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Banker Name</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Mobile No</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Loan Acc No</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Loan Amount</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Sanction Letter</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Loan Cert</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Booking Cancellation Reason</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Booking Confirmation Mail</TableCell>
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
