





import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, MenuItem, Select, InputLabel, FormControl, TextField, Modal, Box } from '@mui/material';
import { Grid } from '@mui/material';
// import { Modal, Container, Row, Col } from 'react-bootstrap';


import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import { jsPDF } from "jspdf";

const fetchLoansData = async () => {
  const response = await fetch('/api/getOCRCollection');
  return response.json();
};

const getFilterOptions = (type) => {
  switch (type) {
    case "Flat Type":
      return ["1BHK", "2BHK", "3BHK", "Studio"];
    case "Parking":
      return ["Basement", "Parking 1", "Parking 2"];
    case "Floor":
      return Array.from({ length: 15 }, (_, i) => (i + 1).toString());
    case "Rate":
      return Array.from({ length: 121 }, (_, i) => `₹${(i * 50000).toLocaleString()}`);
    default:
      return [];
  }
};

const Agreement = () => {
  const [loans, setLoans] = useState([]);
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
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

  const handleInputChange = (field, value) => {
    // Update the selectedLoan or any other state here
    setSelectedLoan((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  

  const filterLoans = () => {
    const filtered = loans.filter(loan => {
      const loanDate = new Date(loan.dateOfBooking);
      const start = startDate ? new Date(startDate) : new Date(0);
      const end = endDate ? new Date(endDate) : new Date();
      const matchesFilters =
        (!filterType || !filterValue || loan[filterType.toLowerCase().replace(' ', '')] === filterValue);
      return loanDate >= start && loanDate <= end && matchesFilters;
    });
    setFilteredLoans(filtered);
    setCurrentPage(1);
  };

  useEffect(() => {
    filterLoans();
  }, [startDate, endDate, filterType, filterValue]);

  const handleOpenModal = (loan) => {
    setSelectedLoan(loan);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedLoan(null);
  };

  const handleSubmit = () => {
  
  toast.success("Data submitted successfully!", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000, 
  });

 
  handleCloseModal();
};

const generatePDF = () => {
 

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

  // Toast Notification
  toast.success("PDF generated successfully!", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
  });
};


  const resetFilters = () => {
    setStartDate('');
    setEndDate('');
    setFlatType('');
    setParking('');
    setFloor('');
    setRate('');
    setFilteredLoans(loans); // Reset loans filter if necessary
    setCurrentPage(1);
    setFilterType('');  // Reset the select dropdown value
    setFilterValue(''); // Reset the select dropdown value
  };
  
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredLoans.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="main-content">
          {!openModal ? (
      <>
      <h6>Sales Module / Agreement Management</h6>

      <div className="d-flex align-items-center gap-3 my-3 pt-4 pb-3">
        {/* Button Section in One Row */}
        <Button variant="contained"  className="text-nowrap"
    style={{ minWidth: "180px" }}  color="primary" onClick={() => handleOpenModal(null)}>
          Agreement Draft
        </Button>

       

<TextField
  label="Start Date"
  type="date"
  value={startDate}
  onChange={(e) => setStartDate(e.target.value)}
  fullWidth
  InputLabelProps={{ shrink: true }}
  placeholder="Enter your start date" // Add placeholder
/>

<TextField
  label="End Date"
  type="date"
  value={endDate}
  onChange={(e) => setEndDate(e.target.value)}
  fullWidth
  InputLabelProps={{ shrink: true }}
  placeholder="Enter your end date" // Add placeholder
/>


        
        <FormControl fullWidth>
  <InputLabel>Filter By</InputLabel>
  <Select
    value={filterType} 
    onChange={(e) => setFilterType(e.target.value)}
  >
    <MenuItem value="Flat Type">Flat Type</MenuItem>
    <MenuItem value="Parking">Parking</MenuItem>
    <MenuItem value="Floor">Floor</MenuItem>
    <MenuItem value="Rate">Rate</MenuItem>
  </Select>
</FormControl>

<FormControl fullWidth>
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




        <Button variant="contained" color="primary" onClick={resetFilters}>
          Reset
        </Button>

        <FormControl fullWidth>
          <InputLabel>Rows Per Page</InputLabel>
          <Select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(e.target.value)}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
          </Select>
        </FormControl>
      </div>

      <TableContainer component={Paper} className="mt-4" sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
        <Table>
          <TableHead>
         
 
         

      <TableRow sx={{ background: "linear-gradient(180deg, #3621a9 0%,rgb(139, 115, 243) 100%)" }}>
            
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Flat No.</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Name Of Allotee</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Allotee Date Of Birth</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Allotee Age</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>A1-Occupation</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>A1-Pan No</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>A1-Aadhar No</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Name of Co-Allotee</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Co-Allotee Date Of Birth</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Co-Allotee Age</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Co-Occupation</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Co-Pan No.</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Co-Aadhar No .</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Address</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Contact</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Floor</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Total Agreement Value (In words)</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Payment Schedule</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Booking</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Execution Of Aggrement</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Completion Of Plinth</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Completion Of 1st Slab</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Completion Of 2nd Slab</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Completion Of 3rd Slab</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Completion Of 5th Slab</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Completion Of 7th Slab</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Completion Of 9th Slab</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Completion Of 10th Slab</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Completion Of Walls</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Completion Of Internal Plaster</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Completion Of Lifts</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>Possession</TableCell>
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

      
      </>
    ) : (





        <div
  className="modal"
  style={{
    display: openModal ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  }}
>
  <div
    className="modal-dialog modal-lg"
    style={{
      position: "relative",
      margin: "auto",
      top: "50%",
      transform: "translateY(-50%)",
    }}
  >
    <div
      className="modal-content p-3"
      style={{
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        borderRadius: "10px",
      }}
    >
      {/* Modal Header */}
      <div
        className="modal-header"
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <h5 className="modal-title">Agreement Draft Generation</h5>
        <button
          type="button"
          className="btn-close"
          onClick={handleCloseModal}
        ></button>
      </div>

      {/* Modal Body */}
      <div className="modal-body">
        <div className="container">
          {/* Form Section */}
          <div
            className="p-3"
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            {/* First Row */}
            <div className="row mb-3">
            <div className="col-md-4">
    <label className="form-label">Date</label>
    <input
      type="date"
      className="form-control"
      value={selectedLoan?.date || ""} // You can bind it to state or the selectedLoan date field
      onChange={(e) => handleInputChange("date", e.target.value)} // Handle the input change
    />
  </div>
  <div className="col-md-4">
    <label className="form-label">Flat No</label>
    <input
      type="text"
      className="form-control"
      value={selectedLoan?.flatNo || ""}
      onChange={(e) => handleInputChange("flatNo", e.target.value)} // Handle the input change
    />
  </div>
              <div className="col-md-4">
                <label className="form-label">Allotee Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedLoan?.nameOfAllotee || ""}
                  onChange={(e) => handleInputChange("nameOfAllotee", e.target.value)}
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="row mb-3">
  <div className="col-md-4">
    <label className="form-label">Allotee DOB</label>
    <input
      type="date"
      className="form-control"
      value={selectedLoan?.alloteeDOB || ""}
      onChange={(e) => handleInputChange("alloteeDOB", e.target.value)} // Handle the input change
    />
  </div>
  <div className="col-md-4">
    <label className="form-label">Allotee Age</label>
    <input
      type="text"
      className="form-control"
      value={selectedLoan?.alloteeAge || ""}
      onChange={(e) => handleInputChange("alloteeAge", e.target.value)} // Handle the input change
    />
  </div>
  <div className="col-md-4">
    <label className="form-label">A1 Occupation</label>
    <input
      type="text"
      className="form-control"
      value={selectedLoan?.a1Occupation || ""}
      onChange={(e) => handleInputChange("a1Occupation", e.target.value)} // Handle the input change
    />
  </div>


            </div>

            <h6 className="mt-3">Co-Allotee Details</h6>
            <div className="row mb-3">
              <div className="col-md-2">
                <label className="form-label">Title</label>
                <select className="form-select" readOnly>
                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>Miss</option>
                </select>
              </div>
              <div className="col-md-10">
                <label className="form-label">Co-Allotee Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedLoan?.coAlloteeName || ""}
                  onChange={(e) => handleInputChange("coAlloteeName", e.target.value)} 
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedLoan?.address || ""}
                  onChange={(e) => handleInputChange("address", e.target.value)} 
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Contact</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedLoan?.contact || ""}
                  onChange={(e) => handleInputChange("contact", e.target.value)} 
                />
              </div>
            </div>

            <h6 className="mt-3">Payment Schedule</h6>
            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Booking</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedLoan?.agreementValueInWords || ""}
                  onChange={(e) => handleInputChange("agreementValueInWords", e.target.value)} 
                />
              </div>
              <div className="col-md-4">
  <label className="form-label">Execution Of Agreement</label>
  <input
    type="text"
    className="form-control"
    value={selectedLoan?.executionAgreement || ""} 
    onChange={(e) => handleInputChange("executionAgreement", e.target.value)} 
  />
</div>
<div className="col-md-4">
  <label className="form-label">Completion Of Plinth</label>
  <input
    type="text"
    className="form-control"
    value={selectedLoan?.completionPlinth || ""} 
    onChange={(e) => handleInputChange("completionPlinth", e.target.value)} 
  />
</div>


            </div>
          </div>
        </div>
      </div>

      {/* Modal Footer */}
      {/* <div
        className="modal-footer"
        style={{
          borderTop: "1px solid #ddd",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleCloseModal}
        >
          Close
        </button>
        <button type="button" className="btn btn-primary">
          Generate PDF
        </button>
      </div> */}
      {/* <ToastContainer />
       <div
      className="modal-footer"
      style={{
        borderTop: "1px solid #ddd",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleCloseModal}
      >
        Close
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={generatePDF}
      >
        Generate PDF
      </button>

    </div>
    
    </div> */}
    <ToastContainer />
<div
  className="modal-footer"
  style={{
    borderTop: "1px solid #ddd",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  }}
>
  <button
    type="button"
    className="btn btn-secondary"
    onClick={handleCloseModal}
  >
    Close
  </button>
  <button
    type="button"
    className="btn btn-primary"
    onClick={generatePDF}
  >
    Generate PDF
  </button>
</div>
</div>

  </div>
</div>

      )}


   
    </div>
    
  );

};

export default Agreement;
