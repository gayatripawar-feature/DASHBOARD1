










import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";

const columns = [
  { Header: "FlAT NO", accessor: "FlAT NO" },
  { Header: "NAME OF ALLOTEE", accessor: "NAME OF ALLOTEE" },
  { Header: "NAME OF CO-ALLOTEE", accessor: "NAME OF CO-ALLOTEE" },
  { Header: "TYPE", accessor: "TYPE" },
  { Header: "FlOOR", accessor: "FlOOR" },
  { Header: "EMAIL ID", accessor: "EMAILID" },
  { Header: "WHATSAPP MOBILE NO", accessor: "WHATSAPP" },
  { Header: "RATE", accessor: "RATE" },
  { Header: "AGREEMENT VALUE", accessor: "AGREEMENT VALUE" },
  { Header: "DATE OF BOOKING", accessor: "DATE OF BOOKING" },
  { Header: "PARKING", accessor: "PARKING" },
  { Header: "HOME LOAN APPlicability", accessor: "HOME LOAN APPlicability" },
  { Header: "BANK NAME", accessor: "BANK NAME" },
  { Header: "BANKER NAME", accessor: "BANKER NAME" },
  { Header: "MOBILE NO.", accessor: "MOBILE NO." },
  { Header: "LOAN ACCOUNT NO.", accessor: "LOAN ACCOUNT NO." },
  { Header: "Loan Amount", accessor: "Loan Amount" },
  { Header: "SANCTION LETTER", accessor: "SANCTION LETTER" },
  { Header: "HOME LOAN SANCTION CERTIFICATE COLLECTED", accessor: "HOME LOAN SANCTION CERTIFICATE COLLECTED" },
  { Header: "BOOKING CONFIRMATION", accessor: "BOOKING CONFIRMATION" },
  { Header: "BOOKING CANCELATION REASON", accessor: "BOOKING CANCELATION REASON" },
  { Header: "BOOKING CONFIRMATION MAIL SENT.", accessor: "BOOKING CONFIRMATION MAIL SENT" },
];

const data = [
    {
    "FlAT NO": "A-101",
    "NAME OF ALLOTEE": "John Doe",
    "NAME OF CO-ALLOTEE": "Jane Doe",
    "TYPE": "2BHK",
    "FlOOR": "1st",
    "EMAILID": "johndoe@example.com",
    "WHATSAPP": "9876543210",
    "RATE": "5000",
    "AGREEMENT VALUE": "50,00,000",
    "DATE OF BOOKING": "2024-01-15",
    "PARKING": "Yes",
    "HOME LOAN APPlicability": "Yes",
    "BANK NAME": "HDFC Bank",
    "BANKER NAME": "Mr. Sharma",
    "MOBILE NO.": "9876543210",
    "LOAN ACCOUNT NO.": "HDFC123456789",
    "Loan Amount": "40,00,000",
    "SANCTION LETTER": "Received",
    "HOME LOAN SANCTION CERTIFICATE COLLECTED": "Yes",
    "BOOKING CONFIRMATION": "Confirmed",
    "BOOKING CANCELATION REASON": "N/A",
    "BOOKING CONFIRMATION MAIL SENT": "Yes"
  },
      
 
];

const HomeLoan = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleFilter = () => {
    console.log({
      filterType,
      filterValue,
      startDate,
      endDate,
    });
  };

  const handleReset = () => {
    setFilterType("");
    setFilterValue("");
    setStartDate("");
    setEndDate("");
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };


  const getFilterOptions = (type) => {
    switch (type) {
      case "Flat Type":
        return ["1BHK", "2BHK", "3BHK", "Studio"];
      case "Parking":
        return ["Basement", "Parking 1","Parking 2"];
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

  return (
    <div className="container mt-3 ">
      <h3 className="fs-6 pb-3 ">Sales Module / Home Loan Management</h3>

      <div className="d-flex align-items-center mb-2">
        <Button className="mb-5"
          onClick={handleCollapseToggle}
          variant="outlined"
          color="success"
          style={{ borderRadius: "20px" }}
          startIcon={<FaEye size={20} color="#28a745" />}
        >
          {!isCollapsed && <span className="text-success ">Home Loan</span>}
        </Button>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }} >
        {/* Start Date */}
        <label>Start Date:</label>
        <TextField
          type="date"
          variant="outlined"
          size="small"
          value={startDate}
            placeholder="Select Date"  
            className="bg-white"
          onChange={(e) => setStartDate(e.target.value)}
          style={{ width: "150px" }}
        />

        {/* End Date */}
        <label>End Date:</label>
        <TextField
          type="date"
          variant="outlined"
          size="small"
          value={endDate}
          className="bg-white"
          placeholder="Select Date"
          onChange={(e) => setEndDate(e.target.value)}
          style={{ width: "150px" }}
        />

        {/* Filter By */}
        <label>Filter By:</label>
        <TextField
          select
          variant="outlined"
          size="small"
          style={{ width: "150px" }}
          value={filterType}
          className="bg-white"
          onChange={(e) => {
            setFilterType(e.target.value);
            setFilterValue(""); 
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
              style={{ width: "150px" }}
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
            >
              {getFilterOptions(filterType).map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </>
        )}

        <Button
          variant="contained"
          color="secondary"
          style={{ borderRadius: "5px", padding: "10px 15px" }}
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>

      <TableContainer
        component={Paper}
        style={{
          marginTop: "40px",
          marginBottom: "30px",
          marginLeft: "20px",
          marginRight: "20px",
          padding: "20px",
          width: "calc(100% - 230px)",
          overflowX: "auto",
        }}
      >
        <Table style={{ tableLayout: "auto", width: "100%" }}>
          <TableHead className="">
            <TableRow>
              {columns
                .filter((column) => column.Header !== "Actions")
                .map((column) => (
                  <TableCell key={column.Header} align="center" className="fw-bold fs-6"
                //   sx={{
                //     border: "1px solid rgba(224, 224, 224, 1)", // Light grey border
                //     padding: "8px", // Adjust padding if needed
                //   }}
                  >
                    {column.Header}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .filter((row) => {
                const dateBooking = new Date(row.dateBooking);
                const startDateValid = startDate ? dateBooking >= new Date(startDate) : true;
                const endDateValid = endDate ? dateBooking <= new Date(endDate) : true;

                return (
                  (filterType
                    ? row[filterType.toLowerCase().replace(" ", "")]?.includes(filterValue)
                    : true) &&
                  startDateValid &&
                  endDateValid
                );
              })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  {columns
                    .filter((column) => column.Header !== "Actions")
                    .map((column) => (
                      <TableCell key={column.accessor} align="center">
                        {row[column.accessor]}
                      </TableCell>
                    ))}
                </TableRow>
              ))}
          </TableBody>



        </Table>
      </TableContainer>

     
   
        <div className="d-flex align-items-center justify-content-start gap-3">
  <Button
    variant="outlined"
    className="bg-primary text-white"
    color="primary"
    onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 0))}
    disabled={page === 0}
  >
    Previous
  </Button>
  <Button
    variant="outlined"
    className="bg-primary text-white"
    color="primary"
    onClick={() => setPage((prevPage) => Math.min(prevPage + 1, Math.ceil(data.length / rowsPerPage) - 1))}
    disabled={data.length === 0}
  >
    Next
  </Button>
  <div className="d-flex align-items-center">
    <label className="me-2">Rows per page:</label>
    <input
      type="number"
      className="form-control"
      value={rowsPerPage}
      onChange={handleRowsPerPageChange}
      style={{ width: "80px" }}
    />
  </div>
</div>


      </div>
    
  );
};

export default HomeLoan;


