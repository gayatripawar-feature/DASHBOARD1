



// import React, { useState } from "react";
// import { FaEye, FaPlus, FaEdit, FaWhatsapp, FaEnvelope } from "react-icons/fa";

// const columns = [
//     { id: "action", label: "Action" },
//     { id: "lastFollowup", label: "Last Follow Up" },
//     { id: "status", label: "Status" },
//     { id: "remark", label: "Remark" },
//     { id: "nextFollowup", label: "Next Follow Up" },
//     { id: "assignedTo", label: "Assigned To" },
//     { id: "enquiryNo", label: "Enquiry No" },
//     { id: "leadNo", label: "Lead No" },
//     { id: "name", label: "Name" },
//     { id: "salesExecMobile", label: "Sales Exec. Mobile" },
//     { id: "whatsapp", label: "WhatsApp" },
//     { id: "alternateContact", label: "Alternate Contact" },
//     { id: "email", label: "Email" },
//     { id: "address", label: "Address" },
//     { id: "occupation", label: "Occupation" },
//     { id: "company", label: "Company" },
//     { id: "interested", label: "Interested" },
//     { id: "budget", label: "Budget" },
//     { id: "reason", label: "Reason" },
//     { id: "reference", label: "Reference" },
//     { id: "nameOfCP", label: "Name of CP" },
//     { id: "planningToBuy", label: "Planning to Buy" },
//     { id: "followupDetails", label: "Followup Details" },
//   ];
  
//   const rows = [
//     { action: "Edit", lastFollowup: "2024-02-20", status: "Pending", remark: "Call again", nextFollowup: "2024-02-25", assignedTo: "John Doe", enquiryNo: "E001", leadNo: "L001", name: "Customer A" },
//     { action: "View", lastFollowup: "2024-02-18", status: "Closed", remark: "Not interested", nextFollowup: "N/A", assignedTo: "Jane Smith", enquiryNo: "E002", leadNo: "L002", name: "Customer B" },
//   ];

// const LostVisitsModule = () => {
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleCollapseToggle = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const handleFilter = () => {
//     console.log("Filtering data...");
//   };

//   const handleReset = () => {
//     setFromDate("");
//     setToDate("");
//     setRowsPerPage(10);
//   };

//   const handleRowsPerPageChange = (event) => {
//     setRowsPerPage(event.target.value);
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="container mt-3 content">
//       <h3 className="fs-6">Sales Module / Lost Enquiry Follow Up Management</h3>

//       {/* Pending Followup Button */}
//       <div className="d-flex align-items-center mb-2">
//         <button
//           onClick={handleCollapseToggle}
//           className="btn btn-light d-flex align-items-center gap-2"
//           style={{ borderRadius: "20px" }}
//         >
//           <div className="rounded-circle p-2" style={{ background: "#f0f0f0" }}>
//             <FaEye size={20} color="#28a745" />
//           </div>
//           {!isCollapsed && <span className="text-success">Pending Followup</span>}
//         </button>
//       </div>

//       {/* New Followup Button and Date Filters */}
//       <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
//         <button className="btn btn-primary" style={{ borderRadius: '5px', padding: '17px 20px', width: 'auto' }}>
//           <FaPlus size={16} style={{ marginRight: '8px' }} />
//           New Followup
//         </button>

//         <div>
//           <label>From:</label>
//           <input
//             type="date"
//             value={fromDate}
//             onChange={(e) => setFromDate(e.target.value)}
//             className="form-control"
//             style={{ width: "150px" }}
//           />
//         </div>

//         <div>
//           <label>To:</label>
//           <input
//             type="date"
//             value={toDate}
//             onChange={(e) => setToDate(e.target.value)}
//             className="form-control"
//             style={{ width: "150px" }}
//           />
//         </div>

//         <button
//           className="btn btn-success"
//           onClick={handleFilter}
//           style={{ borderRadius: '5px', padding: '13px 20px', width: 'auto' }}
//         >
//           Filter
//         </button>

//         <button
//           className="btn btn-secondary"
//           onClick={handleReset}
//           style={{ borderRadius: '5px', padding: '13px 20px', width: 'auto' }}
//         >
//           Reset
//         </button>

//         {/* Pagination Controls */}
//         <button
//           className="btn btn-secondary"
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           style={{ borderRadius: '5px', padding: '13px 20px', width: 'auto' }}
//         >
//           Previous
//         </button>

//         <span>Page {currentPage} of 2</span>

//         <button
//           className="btn btn-secondary"
//           onClick={() => handlePageChange(currentPage + 1)}
//           style={{ borderRadius: '5px', padding: '13px 20px', width: 'auto' }}
//         >
//           Next
//         </button>

//         {/* Rows per page */}
//         <div>
//           <label>Rows per page:</label>
//           <input
//             type="number"
//             className="form-control"
//             value={rowsPerPage}
//             onChange={handleRowsPerPageChange}
//             style={{ width: "80px" }}
//           />
//         </div>
//       </div>

    
//       <div
//   className="table-responsive"
//   style={{
//     maxHeight: "400px",
//     overflowY: "auto",
//     marginTop: "30px", 
//     marginBottom: "30px", 
//     marginLeft: "30px", 
//     marginRight: "300px",
//     padding: "50px",
//     maxWidth: "100%",
//     overflowX: "auto",
//   }}
// >
//         <table className="table table-striped table-bordered " style={{ width: "100%" }}>
//           <thead className="table-primary">
//             <tr>
//               {columns.map((column) => (
//                 <th
//                   key={column.id}
//                   style={{ padding: "15px 58px", textAlign: "center", wordWrap: "break-word", whiteSpace: "nowrap" }}
//                 >
//                   {column.label}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((row, index) => (
//               <tr key={index}>
//                 {columns.map((column, colIndex) => (
//                   <td
//                     key={column.id}
//                     style={{
//                       padding: "12px 8px",
//                       textAlign: "center",
//                       wordWrap: "break-word",
//                       whiteSpace: "nowrap",
//                       paddingRight: colIndex === columns.length - 1 ? "16px" : "8px",
//                     }}
//                   >
//                     {column.id === "action" ? (
//                       <div className="d-flex gap-2">
//                         <FaEdit size={20} color="#007bff" style={{ cursor: "pointer" }} />
//                         <FaWhatsapp size={20} color="#25d366" style={{ cursor: "pointer" }} />
//                         <FaEnvelope size={20} color="#dc3545" style={{ cursor: "pointer" }} />
//                       </div>
//                     ) : (
//                       row[column.id] || "-"
//                     )}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>












//     </div>
//   );
// };

// export default LostVisitsModule;












import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, MenuItem, Select, InputLabel, FormControl, TextField, Modal, Box } from '@mui/material';
import { Grid } from '@mui/material';
// import { Modal, Container, Row, Col } from 'react-bootstrap';






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

const LostVisitsModule = () => {
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
    value={filterType} // this should be linked to your filterType state
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
    value={filterValue} // this should be linked to your filterValue state
    onChange={(e) => setFilterValue(e.target.value)}
    disabled={!filterType} // this disables the select if no filterType is selected
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

      <TableContainer component={Paper} className="mt-4">
        <Table>
          <TableHead>
         
 
          <TableRow sx={{background: "linear-gradient(to right, #ffd3e3, #ffebb7)"}}>


            
              <TableCell className='fw-bold fs-5'>Flat No.</TableCell>
              <TableCell className='fw-bold fs-5'>Name Of Allotee</TableCell>
              <TableCell className='fw-bold fs-5'>Allotee Date Of Birth</TableCell>
              <TableCell className='fw-bold fs-5'>Allotee Age</TableCell>
              <TableCell className='fw-bold fs-5'>A1-Occupation</TableCell>
              <TableCell className='fw-bold fs-5'>A1-Pan No</TableCell>
              <TableCell className='fw-bold fs-5'>A1-Aadhar No</TableCell>
              <TableCell className='fw-bold fs-5'>Name of Co-Allotee</TableCell>
              <TableCell className='fw-bold fs-5'>Co-Allotee Date Of Birth</TableCell>
              <TableCell className='fw-bold fs-5'>Co-Allotee Age</TableCell>
              <TableCell className='fw-bold fs-5'>Co-Occupation</TableCell>
              <TableCell className='fw-bold fs-5'>Co-Pan No.</TableCell>
              <TableCell className='fw-bold fs-5'>Co-Aadhar No .</TableCell>
              <TableCell className='fw-bold fs-5'>Address</TableCell>
              <TableCell className='fw-bold fs-5'>Contact</TableCell>
              <TableCell className='fw-bold fs-5'>Floor</TableCell>
              <TableCell className='fw-bold fs-5'>Total Agreement Value (In words)</TableCell>
              <TableCell className='fw-bold fs-5'>Payment Schedule</TableCell>
              <TableCell className='fw-bold fs-5'>Booking</TableCell>
              <TableCell className='fw-bold fs-5'>Execution Of Aggrement</TableCell>
              <TableCell className='fw-bold fs-5'>Completion Of Plinth</TableCell>
              <TableCell className='fw-bold fs-5'>Completion Of 1st Slab</TableCell>
              <TableCell className='fw-bold fs-5'>Completion Of 2nd Slab</TableCell>
              <TableCell className='fw-bold fs-5'>Completion Of 3rd Slab</TableCell>
              <TableCell className='fw-bold fs-5'>Completion Of 5th Slab</TableCell>
              <TableCell className='fw-bold fs-5'>Completion Of 7th Slab</TableCell>
              <TableCell className='fw-bold fs-5'>Completion Of 9th Slab</TableCell>
              <TableCell className='fw-bold fs-5'>Completion Of 10th Slab</TableCell>
              <TableCell className='fw-bold fs-5'>Completion Of Walls</TableCell>
              <TableCell className='fw-bold fs-5'>Completion Of Internal Plaster</TableCell>
              <TableCell className='fw-bold fs-5'>Completion Of Lifts</TableCell>
              <TableCell className='fw-bold fs-5'>Possession</TableCell>
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

      





<div
      className={`modal ${openModal ? "show" : ""}`}
      style={{ display: openModal ? "block" : "none" }}
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h5 className="modal-title">Agreement Draft Generation</h5>
            <button type="button" className="btn-close" onClick={handleCloseModal}></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            <div className="container">
              {/* First Row */}
              <div className="row mb-3">
                <div className="col-md-4">
                  <label>Date</label>
                  <input type="date" className="form-control" readOnly />
                </div>
                <div className="col-md-4">
                  <label>Flat No</label>
                  <input type="text" className="form-control" value={selectedLoan?.flatNo || ""} readOnly />
                </div>
                <div className="col-md-4">
                  <label>Allotee Name</label>
                  <input type="text" className="form-control" value={selectedLoan?.nameOfAllotee || ""} readOnly />
                </div>
              </div>

              {/* Second Row */}
              <div className="row mb-3">
                <div className="col-md-4">
                  <label>Allotee DOB</label>
                  <input type="text" className="form-control" value={selectedLoan?.alloteeDOB || ""} readOnly />
                </div>
                <div className="col-md-4">
                  <label>Allotee Age</label>
                  <input type="text" className="form-control" value={selectedLoan?.alloteeAge || ""} readOnly />
                </div>
                <div className="col-md-4">
                  <label>A1 Occupation</label>
                  <input type="text" className="form-control" value={selectedLoan?.a1Occupation || ""} readOnly />
                </div>
              </div>

              {/* Co-Allotee Section */}
              <h6 className="mt-3">Co-Allotee Details</h6>
              <div className="row mb-3">
                <div className="col-md-2">
                  <label>Title</label>
                  <select className="form-select">
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Miss</option>
                  </select>
                </div>
                <div className="col-md-10">
                  <label>Co-Allotee Name</label>
                  <input type="text" className="form-control" value={selectedLoan?.coAlloteeName || ""} readOnly />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4">
                  <label>Co-Allotee DOB</label>
                  <input type="text" className="form-control" value={selectedLoan?.coAlloteeDOB || ""} readOnly />
                </div>
                <div className="col-md-4">
                  <label>Co-Allotee Age</label>
                  <input type="text" className="form-control" value={selectedLoan?.coAlloteeAge || ""} readOnly />
                </div>
                <div className="col-md-4">
                  <label>Co-Occupation</label>
                  <input type="text" className="form-control" value={selectedLoan?.coOccupation || ""} readOnly />
                </div>
              </div>

              {/* Address & Contact */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label>Address</label>
                  <input type="text" className="form-control" value={selectedLoan?.address || ""} readOnly />
                </div>
                <div className="col-md-6">
                  <label>Contact</label>
                  <input type="text" className="form-control" value={selectedLoan?.contact || ""} readOnly />
                </div>
              </div>

              {/* Payment Schedule */}
              <h6 className="mt-3">Payment Schedule</h6>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label>Booking</label>
                  <input type="text" className="form-control" value={selectedLoan?.agreementValueInWords || ""} readOnly />
                </div>
                <div className="col-md-4">
                  <label>Execution Of Agreement</label>
                  <input type="text" className="form-control" value={selectedLoan?.agreementValueInWords || ""} readOnly />
                </div>
                <div className="col-md-4">
                  <label>Completion Of Plinth</label>
                  <input type="text" className="form-control" value={selectedLoan?.agreementValueInWords || ""} readOnly />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4">
                  <label>Completion Of 1st Slab</label>
                  <input type="text" className="form-control" value={selectedLoan?.agreementValueInWords || ""} readOnly />
                </div>
                <div className="col-md-4">
                  <label>Completion Of 2nd Slab</label>
                  <input type="text" className="form-control" value={selectedLoan?.agreementValueInWords || ""} readOnly />
                </div>
                <div className="col-md-4">
                  <label>Completion Of 3rd Slab</label>
                  <input type="text" className="form-control" value={selectedLoan?.agreementValueInWords || ""} readOnly />
                </div>
              </div>


              <div className="row mb-3">
                <div className="col-md-4">
                  <label>Completion Of 5th Slab</label>
                  <input type="text" className="form-control" value={selectedLoan?.agreementValueInWords || ""} readOnly />
                </div>
                <div className="col-md-4">
                  <label>Completion Of 7th Slab</label>
                  <input type="text" className="form-control" value={selectedLoan?.agreementValueInWords || ""} readOnly />
                </div>
                <div className="col-md-4">
                  <label>Completion Of 9th Slab</label>
                  <input type="text" className="form-control" value={selectedLoan?.agreementValueInWords || ""} readOnly />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4">
                  <label>Completion Of 10th Slab</label>
                  <input type="text" className="form-control" value={selectedLoan?.agreementValueInWords || ""} readOnly />
                </div>
                <div className="col-md-4">
                  <label>Completion Of Walls</label>
                  <input type="text" className="form-control" value={selectedLoan?.agreementValueInWords || ""} readOnly />
                </div>
                <div className="col-md-4">
                  <label>Completion Of Internal Plaster</label>
                  <input type="text" className="form-control" value={selectedLoan?.agreementValueInWords || ""} readOnly />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4">
                  <label>Completion Of Lifts</label>
                  <input type="text" className="form-control" value={selectedLoan?.agreementValueInWords || ""} readOnly />
                </div>
                <div className="col-md-4">
                  <label>Possession</label>
                  <input type="text" className="form-control" value={selectedLoan?.agreementValueInWords || ""} readOnly />
                </div>
                
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
              Close
            </button>
            <button type="button" className="btn btn-primary">Generate PDF</button>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default LostVisitsModule;







