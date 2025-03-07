








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
         
             
         
           {filterType && (
             <div className="d-flex align-items-center gap-3">
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
             </div>
           )}
         
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
           </div>


           {/* Rows per page */}
           <div className="d-flex align-items-center gap-3">
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
             



      {/* Table Section */}
      <TableContainer component={Paper}  sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
        <Table style={{ tableLayout: 'auto', width: '100%' }}>
          <TableHead>
            {/* <TableRow sx={{ bgcolor: "primary.main" }}> */}
                  <TableRow sx={{ background: "linear-gradient(180deg, #3621a9 0%,rgb(139, 115, 243) 100%)" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Flat No.</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>Name Of Allotee</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>Name Of Co-Allotee</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>Type</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>Floor</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>Email</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>Whatsapp No.</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>Rate</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Agreement Value</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Booking Date</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Parking</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Parking No</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Loan Status</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>OCR Amount</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>OCR Received</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>OCR Balance</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Online</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Cash With AV</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>History Cash With AV</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Balance Cash With AV</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Cash Without AV</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>History Cash Without AV</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Balance Cash Without AV</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Received As Per Stage</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Stamp Duty Total</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>Stamp Duty Received</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Stamp Duty Balance</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Reg Total</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Reg Received</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Reg Balance</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>GST Total</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>GST Received</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Balance GST</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>Legal Charges Received</TableCell>
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
