





import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Modal, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { FaEye } from "react-icons/fa";

const fetchLoansData = async () => {
  const response = await fetch('/api/getOCRCollection');
  return response.json();
};


const Demand = () => {
  const [loans, setLoans] = useState([]);
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
const [isCollapsed, setIsCollapsed] = useState(false);

const [selectedTitle, setSelectedTitle] = useState("Mr."); 
  const rowsPerPage = 10;
  
  // State for Modal
  const [openModal, setOpenModal] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(null);

  useEffect(() => {
    loadLoansData();
  }, []);

  const loadLoansData = async () => {
    const data = await fetchLoansData();
    setLoans(data);
    setFilteredLoans(data);
  };

  const handleOpenModal = (loan) => {
    setSelectedLoan(loan);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedLoan(null);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };


  const handleCollapseToggle = () => {
    setIsCollapsed((prev) => !prev);
  };



  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(filteredLoans.length / rowsPerPage)) {
      setCurrentPage(newPage);
    }
  };

  const handleResetFilters = () => {
    setFilterType('');
    setFilterValue('');
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredLoans.slice(indexOfFirstRow, indexOfLastRow);

  const getFilterOptions = (type) => {
    switch (type) {
      case 'Flat Type':
        return ['1BHK', '2BHK', '3BHK'];
      case 'Parking':
        return ['Basement', 'Parking 1','Parking 2'];
      case 'Floor':
        // return ['1', 'First', 'Second'];
        return Array.from({ length: 15 }, (_, i) => (i + 1).toString());
      case 'Rate':
        return Array.from({ length: 120 }, (_, i) => (50000 * (i + 1)).toLocaleString()); // Generates values from 50,000 to 6,000,000
      case 'Slab':
        return ['OCR', 'GST', 'Stamp Duty', 'Registration', 'Booking', 'Plinth Amount Received', '1st Slab Level', '2nd Slab Level', '3rd Slab Level', '5th Slab Level', '7th Slab Level', '10th Slab Level', 'Brick Level', 'External Plaster Level', 'Flooring Level', 'Staircase Level', 'Lift Level', 'Possession Level'];
      default:
        return [];
    }
  };

  return (
    <div className="main-content">
      <h6>Sales Module / Demand Raised Management</h6>

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
          {!isCollapsed && <span className="text-success"> Demand Raised Management</span>}
        </Button>
      </div>


      <div className="d-flex align-items-center justify-content-between my-3 pt-4 pb-3">
        <Button variant="contained" className="text-nowrap" style={{ minWidth: "180px" }} color="primary" onClick={() => handleOpenModal(null)}>
          Demand Letter
        </Button>

       
        

        <div className="d-flex align-items-center gap-2 ">
 
  <FormControl style={{ minWidth: "180px" }}>
    <InputLabel>Filter By</InputLabel>
    <Select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
      <MenuItem value="Flat Type">Flat Type</MenuItem>
      {/* <MenuItem value="Parking">Parking</MenuItem> */}
      <MenuItem value="Floor">Floor</MenuItem>
      <MenuItem value="Rate">Rate</MenuItem>
      {/* <MenuItem value="Slab">Slab</MenuItem> */}
    </Select>
  </FormControl>

 
  <FormControl style={{ minWidth: "180px" }}>
    <InputLabel>Value</InputLabel>
    <Select
      value={filterValue}
      onChange={(e) => setFilterValue(e.target.value)}
      disabled={!filterType}
    >
      {getFilterOptions(filterType).map((option, index) => (
        <MenuItem key={index} value={option}>{option}</MenuItem>
      ))}
    </Select>
  </FormControl>

  {/* Reset Button */}
  <Button className="text-white" style ={{backgroundColor:"#800080",padding: '10px 15px', borderRadius: '5px' }} variant="outlined" color="secondary" onClick={handleResetFilters}>
    Reset
  </Button>

  {/* Rows per page */}
  <div className="d-flex align-items-center gap-1">
    <label className="fw-bold">Rows per page:</label>
    <input
      type="number"
      className="form-control"
      value={rowsPerPage}
      onChange={() => {}}
      style={{ width: "80px", padding: "6px" }}
    />
  </div>
</div>

      </div>

      <TableContainer component={Paper} className="mt-4" sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "primary.main" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              FLAT NO.</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>NAME OF ALLOTEE</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>NAME OF CO-ALLOTEE</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>TYPE</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>FLOOR</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>EMAIL ID</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>WHATSAPP NUMBER
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentRows.map((loan, index) => (
              <TableRow key={index}>
                <TableCell>{loan.flatNo}</TableCell>
                <TableCell>{loan.nameOfAllotee}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => handleOpenModal(loan)}>
                    Open Draft
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button 
          className="btn btn-secondary"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ borderRadius: '5px', padding: '13px 20px' ,backgroundColor:"#800080"}}
        >
          Previous
        </button>

        {/* <span>Page {currentPage} of {Math.ceil(filteredLoans.length / rowsPerPage)}</span> */}

        <button
          className="btn btn-secondary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredLoans.length / rowsPerPage)}
          style={{ borderRadius: '5px', padding: '13px 20px',backgroundColor:"#800080" }}
        >
          Next
        </button>
      </div>

     




<Modal open={openModal} onClose={handleCloseModal}>
  <Box
    sx={{
      width: 870,
      bgcolor: "background.paper",
      borderRadius: 2,
      p: 4,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      boxShadow: 24,
    }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
      <h5 style={{ margin: 0 }}>Demand Letter</h5>
      <Button onClick={handleCloseModal} style={{ fontSize: "16px" }}>X</Button>
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <TextField label="" type="date" fullWidth InputProps={{ readOnly: true }} />
        <TextField label="Flat No" fullWidth value={selectedLoan?.flatNo || ""} InputProps={{ readOnly: true }} />
        <TextField label="Name Of Allotee" fullWidth value={selectedLoan?.nameOfAllotee || ""} InputProps={{ readOnly: true }} />
      </div>

      <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Name of Co-Allotee with Title Selection */}
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>Title</InputLabel>
              <Select value={selectedTitle} onChange={(e) => setSelectedTitle(e.target.value)}>
                <MenuItem value="Mr.">Mr.</MenuItem>
                <MenuItem value="Mrs.">Mrs.</MenuItem>
                <MenuItem value="Miss">Miss</MenuItem>
              </Select>
            </FormControl>
            <TextField 
              label="Name Of Co-Allotee" 
              fullWidth 
              value={selectedLoan?.coAlloteeName || ""} 
              InputProps={{ readOnly: true }} 
            />
          </div>
        </div>

      <h6 style={{ marginBottom: 8 }}>Stage Of Completion</h6>
      <div style={{ display: "flex", gap: "20px" }}>
       
        <FormControl fullWidth>
  <InputLabel>Stage</InputLabel>
  <Select displayEmpty>
    <MenuItem disabled value="">
      Select Stage
    </MenuItem>
    <MenuItem value="OCR">OCR</MenuItem>
    <MenuItem value="GST">GST</MenuItem>
    <MenuItem value="Stamp Duty">Stamp Duty</MenuItem>
    <MenuItem value="Registration">Registration</MenuItem>
    <MenuItem value="Booking">Booking</MenuItem>
    <MenuItem value="Plinth Amount Received">Plinth Amount Received</MenuItem>
    <MenuItem value="1st Slab Level">1st Slab Level</MenuItem>
    <MenuItem value="2nd Slab Level">2nd Slab Level</MenuItem>
    <MenuItem value="3rd Slab Level">3rd Slab Level</MenuItem>
    <MenuItem value="5th Slab Level">5th Slab Level</MenuItem>
    <MenuItem value="7th Slab Level">7th Slab Level</MenuItem>
    <MenuItem value="10th Slab Level">10th Slab Level</MenuItem>
    <MenuItem value="Brick Level">Brick Level</MenuItem>
    <MenuItem value="External Plaster Level">External Plaster Level</MenuItem>
    <MenuItem value="Flooring Level">Flooring Level</MenuItem>
    <MenuItem value="Staircase Level">Staircase Level</MenuItem>
    <MenuItem value="Lift Level">Lift Level</MenuItem>
    <MenuItem value="Possession Level">Possession Level</MenuItem>
  </Select>
</FormControl>

        <TextField label="Total Agreement Value" fullWidth value={selectedLoan?.coAlloteeName || ""} InputProps={{ readOnly: true }} />
        <TextField label="% Of Demand Raising" fullWidth value={selectedLoan?.coAlloteeDOB || ""} InputProps={{ readOnly: true }} />
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <TextField label="Total Due Payment" fullWidth value={selectedLoan?.alloteeDOB || ""} InputProps={{ readOnly: true }} />
        <TextField label="Payment Received Till Date" fullWidth value={selectedLoan?.alloteeAge || ""} InputProps={{ readOnly: true }} />
        <TextField label="Payment Balance Till Date" fullWidth value={selectedLoan?.a1Occupation || ""} InputProps={{ readOnly: true }} />
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <TextField label="Payment Balance (In Words)" fullWidth value={selectedLoan?.alloteeDOB || ""} InputProps={{ readOnly: true }} />
      </div>
    </div>

    <div style={{ textAlign: "right", marginTop: 24 }}>
      <Button variant="contained" color="primary" onClick={handleCloseModal}>
        Submit
      </Button>
      <Button className="m-2" variant="contained" color="primary" onClick={handleCloseModal}>
      Generate PDF
      </Button>
    </div>
  </Box>
</Modal>

      </div>
    
   
 

  
  );
};

export default Demand;

