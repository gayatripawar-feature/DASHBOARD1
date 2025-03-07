






import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, MenuItem, TextField } from '@mui/material';
import { FaEye } from 'react-icons/fa'; 

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
  

  const [flatType, setFlatType] = useState('');
  const [parking, setParking] = useState('');
  const [floor, setFloor] = useState('');
  const [rate, setRate] = useState('');
  const [ProjectType,setProjectType] = useState('');
  
  const [showFilters, setShowFilters] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false); 
  const [filterType, setFilterType] = useState(''); 
  const [filterValue, setFilterValue] = useState(''); 

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
  
    console.log(`Updating loan ${flatNo} status to ${newStatus}`);
  };

  const handleCollapseToggle = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <div className="main-content">
      <h6 className='mb-5'>Sales Module / CRM Display</h6>

  
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
  

      
            <TableRow sx={{ background: "linear-gradient(180deg, #3621a9 0%,rgb(139, 115, 243) 100%)" }}>
      
        <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap"  }}>ACTION</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>TIMESTAMP</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>ENQUIRY NO.</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PROJECT NAME</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>DATE OF FLAT BOOKING</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>NAME OF ALOTEE</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>SOURCE NAME</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>DATE OF BIRTH</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>OCCUPATION</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PAN NO.</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>AADHAR NO.</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>MOBILE NO.</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>ALTERNATE MOBILE NO</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>WHATSAPP NO</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>EMAIL ID</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>ADDRESS</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>NAME OF CO-ALOTEE</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>DATE OF BIRTH (CO-ALOTEE)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>OCCUPATION (CO-ALOTEE)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PAN NO. (CO-ALOTEE)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>AADHAR NO. (CO-ALOTEE)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>MOBILE NO. & EMAIL (CO-ALOTEE)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FLAT NO.</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>TYPE</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>WING</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>SOLD RATE</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>CARPET AREA IN (SQ. MTR.)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>ENCLOSED BALCONY IN (SQ. MTR.)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>OPEN BALCONY IN (SQ. MTR.)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>TERRACE IN (SQ. MTR.)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PARKING</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FLOOR</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>TOTAL CONSIDERATION /AGREEMENT VALUE</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>BOOKING AMOUNT / ADVANCE PAYMENT</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>STAMP DUTY (7% OF AGREEMENT COST)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>REGISTRATION FEE(1% OF AGREEMENT COST)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>GST AMOUNT</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PAN CARD(OF BOTH)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>AADHAR CARD(OF BOTH)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>MARRIAGE CERTIFICATE (IF AVAILABLE)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PASSPORT SIZE PHOTO (OF BOTH)</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>ANY OTHER</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>BOOKING AMOUNT</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PAYMENT MODE</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>CHEQUE/TRN NO.</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>CHEQUE/TRN DATE</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>BANK NAME</TableCell>
        <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>BANK DETAILS</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {displayLoans()}
    </TableBody>
  </Table>
</TableContainer>

   
      <div className="d-flex justify-content-between align-items-center">
        <Button style={{backgroundColor:"#800080"}} className="text-white mt-3" onClick={handlePagination} disabled={currentPage === 1}>Previous</Button>
        <Button style={{backgroundColor:"#800080"}} className='text-white mt-3' onClick={handlePagination} disabled={currentPage === totalPages}>Next</Button>
      </div>
    </div>
  );
};

export default CRM;
