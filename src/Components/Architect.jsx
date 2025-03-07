





import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Modal, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { FaEye } from "react-icons/fa";

const fetchLoansData = async () => {
  const response = await fetch('/api/getOCRCollection');
  return response.json();
};


const Architect = () => {
  const [loans, setLoans] = useState([]);
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
const [isCollapsed, setIsCollapsed] = useState(false);


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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
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
       {!openModal ? (
        <>
      <h6>Letter Module / Engineer & Architect Letters</h6>

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
          {!isCollapsed && <span className="text-success">Engineer & Architect Letter</span>}
        </Button>
      </div>

      {/* {isCollapsed && (
        <> */}
      <div className="d-flex align-items-center justify-content-between my-3 pt-4 pb-3">
        <Button variant="contained" className="text-nowrap" style={{ minWidth: "180px" }} color="primary" onClick={() => handleOpenModal(null)}>
          Add Letter
        </Button>

       
        

        <div className="d-flex align-items-center gap-2 ">
 
  <FormControl style={{ minWidth: "180px" }}>
    <InputLabel>Filter By</InputLabel>
    <Select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
      <MenuItem value="Flat Type">Flat Type</MenuItem>
      <MenuItem value="Parking">Parking</MenuItem>
      <MenuItem value="Floor">Floor</MenuItem>
      <MenuItem value="Rate">Rate</MenuItem>
      <MenuItem value="Slab">Slab</MenuItem>
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
            {/* <TableRow sx={{ bgcolor: "primary.main" }}> */}
                    <TableRow sx={{ background: "linear-gradient(180deg, #3621a9 0%,rgb(139, 115, 243) 100%)" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>ACTION</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>TIMESTAMP</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>SLAB</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>LETTER TYPE</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>DOCUMENT</TableCell>
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


        <button
          className="btn btn-secondary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredLoans.length / rowsPerPage)}
          style={{ borderRadius: '5px', padding: '13px 20px',backgroundColor:"#800080" }}
        >
          Next
        </button>
      </div>



</>
) : (

   
    
    


<Modal
  open={openModal}
  onClose={handleCloseModal}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <Box
    sx={{
      width: 500,
      margin: 'auto',
      padding: 3,
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 6px 18px rgba(0,0,0,0.3)',
      border: '1px solid #ddd',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    {/* Modal Header */}
    <div
      className="modal-header"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '12px',
        borderBottom: '1px solid #ddd',
        backgroundColor: '#f9f9f9',
        padding: '10px',
        borderRadius: '10px 10px 0 0'
      }}
    >
      
      {/* <h5
  id="modal-title"
  style={{ margin: 0, fontWeight: 600 }}
  sx={{ backgroundColor: 'primary.main', padding: '10px', color: 'white' }}
>
  Add Letter
</h5> */}
{/* <h5
  id="modal-title"
  style={{
    margin: 0,
    fontWeight: 600,
    backgroundColor: '#1976d2', // primary color (or your custom primary color)
    padding: '10px',
    color: 'white',
  }}
>
  Add Letter
</h5> */}

{/* <h5
  id="modal-title"
  style={{
    margin: 0,
    fontWeight: 600,
    backgroundColor: '#1976d2', // primary color (or your custom primary color)
    padding: '10px',
    color: 'white',
    display: 'block', // Ensures it takes the full width
    width: '100%' // Optional if needed for full width
  }}
>
  Add Letter
</h5>


      <Button onClick={handleCloseModal} style={{ padding: '6px', fontSize: '16px', fontWeight: 'bold' }}>
        X
      </Button>
    </div> */}

<div
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1976d2', // primary color (or your custom primary color)
    padding: '10px',
    width: '100%', // Ensures the background spans the whole line
  }}
>
  <h5
    id="modal-title"
    style={{
      margin: 0,
      fontWeight: 600,
      color: 'white',
    }}
  >
    Add Letter
  </h5>

  <Button
    onClick={handleCloseModal}
    style={{
      padding: '6px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: 'white', // Close button text color
    }}
  >
    X
  </Button>
</div>
</div>

    {/* Modal Body */}
    <div className="modal-body" style={{ marginTop: '16px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      
      {/* Section: Select Slab */}
      <h6 style={{ marginBottom: '8px', fontWeight: 600 }}>Select Slab</h6>
      <TextField
        select
        label="Select Slab"
        fullWidth
        variant="outlined"
        sx={{ mb: 3, backgroundColor: 'white', borderRadius: '6px' }}
      >
        {[
          'OCR', 'GST', 'Stamp Duty', 'Registration', 'Booking', 'Plinth Amount Received',
          '1st Slab Level', '2nd Slab Level', '3rd Slab Level', '5th Slab Level',
          '7th Slab Level', '10th Slab Level', 'Brick Level', 'External Plaster Level',
          'Flooring Level', 'Staircase Level', 'Lift Level', 'Possession Level'
        ].map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </TextField>

      {/* Section: Letter Type */}
      <h6 style={{ marginBottom: '8px', fontWeight: 600 }}>Letter Type</h6>
      <TextField
        select
        label="Letter Type"
        fullWidth
        variant="outlined"
        sx={{ mb: 3, backgroundColor: 'white', borderRadius: '6px' }}
      >
        {['Engineer', 'Architect'].map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </TextField>

      {/* Section: Upload Document */}
      <h6 style={{ marginBottom: '8px', fontWeight: 600 }}>Upload Document</h6>
      <TextField
        type="file"
        fullWidth
        variant="outlined"
        onChange={handleFileChange}
        sx={{ mb: 3, backgroundColor: 'white', borderRadius: '6px' }}
      />
    </div>

    {/* Modal Footer */}
    <div className="modal-footer" style={{ textAlign: 'right', borderTop: '1px solid #ddd', paddingTop: '10px', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '0 0 10px 10px' }}>
      <Button variant="outlined" color="secondary" onClick={handleCloseModal} sx={{ mr: 1 }}>
        Cancel
      </Button>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  </Box>
</Modal>

      )
    }

    </div>
      
  );
};

export default Architect;
