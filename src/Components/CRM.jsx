



import React, { useState } from "react";

import { FaEye } from "react-icons/fa";
import {
    Button,
    TextField,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Paper,
  } from "@mui/material";
  
const getFilterOptions = (type) => {
  switch (type) {
    case "Flat Type":
      return ["1BHK", "2BHK", "3BHK", "Studio"];
    case "Parking":
      return ["Yes", "No"];
    case "Floor":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
    case "Rate":
      let rates = [];
      for (let i = 50000; i <= 6000000; i += 50000) {
        rates.push(`₹${i.toLocaleString()}`);
      }
      return rates;
    case "Project Name":
      return [
        "Shubh Aarambh",
        "Elara",
        "Infini",
        "Serenity",
        "Prime",
        "PYB",
        "Onella Tower",
        "Aradhyam",
        "Stella",
      ];
    case "Allotee Name":
      return [
        "John Doe",
        "Jane Smith",
        "Michael Johnson",
        "Sara Lee",
        "James Brown",
        "Emily Davis",
        "Robert Wilson",
        "Maria Garcia",
        "David Harris",
        "Sophia Martinez",
      ];
    default:
      return [];
  }
};

const CRM = () => {
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handlePrevious = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const handleReset = () => {
    setFilterType("");  // Resets the filter type
    setFilterValue(""); // Resets the filter value
  };

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="container mt-3">
      {/* Heading */}
      <h3 className="fs-6">CRM Module / CRM Management</h3>
      <div className="d-flex align-items-center mb-2 justify-content-left p-3">
        <button
          onClick={handleCollapseToggle}
          className="btn btn-light d-flex align-items-center gap-2"
          style={{ borderRadius: "20px" }}
        >
          <div className="rounded-circle p-2" style={{ background: "#f0f0f0" }}>
            <FaEye size={20} color="#28a745" />
          </div>
          {!isCollapsed && <span className="text-success">CRM Display</span>}
        </button>
      </div>

     
      <div
        style={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          width: "100%",
          marginBottom: "20px", 
        }} className="m-3 pb-5"
      >
       
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label>Filter By:</label>
          <TextField
            select
            variant="outlined"
            size="small"
            style={{ width: "150px" }}
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value);
              setFilterValue(""); 
            }}
          >
            <MenuItem value="">Select Filter</MenuItem>
            {["Flat Type", "Parking", "Floor", "Rate", "Project Name", "Allotee Name"].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          {filterType && (
            <TextField
              select
              variant="outlined"
              size="small"
              style={{ width: "150px" }}
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              placeholder={`Enter ${filterType}`}
            >
              <MenuItem value="">Select {filterType}</MenuItem>
              {getFilterOptions(filterType).map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          )}

          {/* Apply Filter Button */}
          <Button variant="contained" color="primary" onClick={handleReset}>
            Reset
          </Button>
        </div>

        {/* Pagination Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handlePrevious}
            disabled={page === 0}
          >
            Previous
          </Button>

          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <label>Page:</label>
            <TextField
              select
              size="small"
              variant="outlined"
              value={page}
              onChange={(e) => setPage(parseInt(e.target.value, 10))}
              style={{ width: "60px" }}
            >
              {[0, 1, 2, 3, 4, 5].map((option) => (
                <MenuItem key={option} value={option}>
                  {option + 1}
                </MenuItem>
              ))}
            </TextField>

            <label>Rows per page:</label>
            <TextField
              select
              size="small"
              variant="outlined"
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(parseInt(e.target.value, 10))}
              style={{ width: "60px" }}
            >
              {[5, 10, 15, 20].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <Button variant="contained" color="secondary" onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>

     
      <TableContainer
  component={Paper}
  style={{
    marginTop: "30px",
    marginBottom: "30px",
    marginLeft: "20px",
    marginRight: "20px",
    padding: "20px",
    width: "calc(100% - 280px)", // Adjust to ensure table is fully visible
    overflowX: "auto",
  }}
>
  <Table>
  <TableHead>
  <TableRow>
    <TableCell>Action</TableCell>
    <TableCell>Timestamp</TableCell>
    <TableCell>Enquiry No.</TableCell>
    <TableCell>Project Name</TableCell>
    <TableCell>Date of Flat Booking</TableCell>
    <TableCell>Name of Allotee</TableCell>
    <TableCell>Source Name</TableCell>
    <TableCell>Date of Birth</TableCell>
    <TableCell>Occupation</TableCell>
    <TableCell>PAN No.</TableCell>
    <TableCell>Aadhar No.</TableCell>
    <TableCell>Mobile No.</TableCell>
    <TableCell>Alternate Mobile No.</TableCell>
    <TableCell>WhatsApp No.</TableCell>
    <TableCell>Email ID</TableCell>
    <TableCell>Address</TableCell>
    <TableCell>Name of Co-Allotee</TableCell>
    <TableCell>Date of Birth (Co-Allotee)</TableCell>
    <TableCell>Occupation (Co-Allotee)</TableCell>
    <TableCell>PAN No. (Co-Allotee)</TableCell>
    <TableCell>Aadhar No. (Co-Allotee)</TableCell>
    <TableCell>Mobile No. & Email (Co-Allotee)</TableCell>
    <TableCell>Flat No.</TableCell>
    <TableCell>Type</TableCell>
    <TableCell>Wing</TableCell>
    <TableCell>Sold Rate</TableCell>
    <TableCell>Carpet Area in (Sq. Mtr.)</TableCell>
    <TableCell>Enclosed Balcony in (Sq. Mtr.)</TableCell>
    <TableCell>Open Balcony in (Sq. Mtr.)</TableCell>
    <TableCell>Terrace in (Sq. Mtr.)</TableCell>
    <TableCell>Parking</TableCell>
    <TableCell>Floor</TableCell>
    <TableCell>Total Consideration / Agreement Value</TableCell>
    <TableCell>Booking Amount / Advance Payment</TableCell>
    <TableCell>Stamp Duty (7% of Agreement Cost)</TableCell>
    <TableCell>Registration Fee (1% of Agreement Cost)</TableCell>
    <TableCell>GST Amount</TableCell>
    <TableCell>PAN Card (of Both)</TableCell>
    <TableCell>Aadhar Card (of Both)</TableCell>
    <TableCell>Marriage Certificate (If Available)</TableCell>
    <TableCell>Passport Size Photo (of Both)</TableCell>
    <TableCell>Any Other</TableCell>
    <TableCell>Booking Amount</TableCell>
    <TableCell>Payment Mode</TableCell>
    <TableCell>Cheque/TRN No.</TableCell>
    <TableCell>Cheque/TRN Date</TableCell>
    <TableCell>Bank Name</TableCell>
    <TableCell>Bank Details</TableCell>
  </TableRow>
</TableHead>
    <TableBody>
     
      {[
        
      ].map((row) => (
        <TableRow key={row.id}>
          <TableCell>{row.id}</TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.projectName}</TableCell>
          <TableCell>{row.flatType}</TableCell>
          <TableCell>{row.rate}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

    </div>
  );
};

export default CRM;
