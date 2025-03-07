





import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Modal, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { FaEye } from "react-icons/fa";
import { jsPDF } from "jspdf";
import { ToastContainer, toast } from 'react-toastify';

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
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const resetFilters = () => {
    setFilterType('');
    setFilterValue('');
    setStartDate('');
    setEndDate('');
  };
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredLoans.slice(indexOfFirstRow, indexOfLastRow);


  // / Handle Rows per page change
const handleRowsPerPageChange = (e) => {
  const value = parseInt(e.target.value, 10);
  if (!isNaN(value) && value > 0) {
    setRowsPerPage(value);
  }
};


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


  
  const handleSubmit = () => {
    // Show success toast
    toast.success("Form submitted successfully!");
  };

  const generatePDF = () => {
    toast.info("PDF generation in progress...");
    
    const {
      flatNo,
      nameOfAllotee,
      coAlloteeName,
      totalAgreementValue,
      demandRaising,
      totalDuePayment,
      paymentReceived,
      paymentBalance,
      paymentBalanceWords,
    } = selectedLoan;
  
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Demand Letter", 20, 20);
  
    let y = 40; // Start position for text
  
    doc.text(`Flat No: ${flatNo}`, 20, y);
    y += 10;
    doc.text(`Name Of Allotee: ${nameOfAllotee}`, 20, y);
    y += 10;
    doc.text(`Name Of Co-Allotee: ${coAlloteeName}`, 20, y);
    y += 10;
    doc.text(`Total Agreement Value: ${totalAgreementValue}`, 20, y);
    y += 10;
    doc.text(`% Of Demand Raising: ${demandRaising}`, 20, y);
    y += 10;
    doc.text(`Total Due Payment: ${totalDuePayment}`, 20, y);
    y += 10;
    doc.text(`Payment Received Till Date: ${paymentReceived}`, 20, y);
    y += 10;
    doc.text(`Payment Balance Till Date: ${paymentBalance}`, 20, y);
    y += 10;
    doc.text(`Payment Balance (In Words): ${paymentBalanceWords}`, 20, y);
  
    doc.save("demand-letter.pdf");
  };
  
 


  return (
    <div className="main-content">
       {!openModal ? (
        <>
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
  <Button variant="contained" className="text-nowrap" style={{ minWidth: "150px" }} color="primary" onClick={() => handleOpenModal(null)}>
    Demand Letter
  </Button>

  <div className="d-flex align-items-center justify-content-between mb-3 m-3">
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
             <div className="d-flex align-items-center gap-1">
               <label>{filterType}:</label>
               <TextField
                 select
                 variant="outlined"
                 size="small"
                 className="bg-white"
                 style={{ width: '150px'  }}
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
             


</div>



      <TableContainer component={Paper} className="mt-4" sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
        <Table>
          <TableHead>
            {/* <TableRow sx={{ bgcolor: "primary.main" }}> */}
                    <TableRow sx={{ background: "linear-gradient(180deg, #3621a9 0%,rgb(139, 115, 243) 100%)" }}>
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
       ):(


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
   
  
     <div style={{ backgroundColor: "#1976d2", padding: "8px 16px",marginBottom:"10px", borderRadius: "5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h5 style={{ margin: 0, color: "#fff" }}>Demand Letter</h5>
      <Button 
        onClick={handleCloseModal} 
        style={{ fontSize: "16px", color: "#fff", fontWeight: "bold", minWidth: "auto" }}>
        ✖
      </Button>
    </div>
   

    {/* Form Fields with two per row */}
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <TextField
          label="Flat No"
          fullWidth
          value={selectedLoan?.flatNo || ""}
          onChange={(e) => setSelectedLoan({ ...selectedLoan, flatNo: e.target.value })}
        />
        <TextField
          label="Name Of Allotee"
          fullWidth
          value={selectedLoan?.nameOfAllotee || ""}
          onChange={(e) => setSelectedLoan({ ...selectedLoan, nameOfAllotee: e.target.value })}
        />
      </div>
 



<div style={{ display: "flex", gap: "20px" }}>
  
  <FormControl sx={{ minWidth: 100 }}>
    <InputLabel>Title</InputLabel>
    <Select
      value={selectedLoan?.title || ""}
      onChange={(e) => setSelectedLoan({ ...selectedLoan, title: e.target.value })}
    >
      <MenuItem value="Mr">Mr</MenuItem>
      <MenuItem value="Mrs">Mrs</MenuItem>
      <MenuItem value="Miss">Miss</MenuItem>
    </Select>
  </FormControl>

 
  <TextField
    label="Name Of Co-Allotee"
    fullWidth
    value={selectedLoan?.coAlloteeName || ""}
    onChange={(e) => setSelectedLoan({ ...selectedLoan, coAlloteeName: e.target.value })}
  />
</div>




      <div style={{ display: "flex", gap: "20px" }}>
        <TextField
          label="% Of Demand Raising"
          fullWidth
          value={selectedLoan?.demandRaising || ""}
          onChange={(e) => setSelectedLoan({ ...selectedLoan, demandRaising: e.target.value })}
        />
        <TextField
          label="Total Due Payment"
          fullWidth
          value={selectedLoan?.totalDuePayment || ""}
          onChange={(e) => setSelectedLoan({ ...selectedLoan, totalDuePayment: e.target.value })}
        />
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <TextField
          label="Payment Received Till Date"
          fullWidth
          value={selectedLoan?.paymentReceived || ""}
          onChange={(e) => setSelectedLoan({ ...selectedLoan, paymentReceived: e.target.value })}
        />
        <TextField
          label="Payment Balance Till Date"
          fullWidth
          value={selectedLoan?.paymentBalance || ""}
          onChange={(e) => setSelectedLoan({ ...selectedLoan, paymentBalance: e.target.value })}
        />
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <TextField
          label="Payment Balance (In Words)"
          fullWidth
          value={selectedLoan?.paymentBalanceWords || ""}
          onChange={(e) => setSelectedLoan({ ...selectedLoan, paymentBalanceWords: e.target.value })}
        />
      </div>
    </div>

 

<div>
    
      <div style={{ textAlign: "right", marginTop: 24 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}  
        >
          Submit
        </Button>
        <Button
          className="m-2"
          variant="contained"
          color="primary"
          onClick={generatePDF}
        >
          Generate PDF
        </Button>
      </div>

     
      <ToastContainer />
    </div>


  </Box>
</Modal>
       
  
  

       
       )
      }

      </div>
    
   
  
      

  
  );
};

export default Demand;

