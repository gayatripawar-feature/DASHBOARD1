










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
  { Header: "Flat No", accessor: "flatNo" },
  { Header: "Name of Allotee", accessor: "nameAllotee" },
  { Header: "Name of Co-Allotee", accessor: "nameCoAllotee" },
  { Header: "Type", accessor: "type" },
  { Header: "Floor", accessor: "floor" },
  { Header: "Email ID", accessor: "emailId" },
  { Header: "Whatsapp Mobile No.", accessor: "whatsapp" },
  { Header: "Rate", accessor: "rate" },
  { Header: "Agreement Value", accessor: "agreementValue" },
  { Header: "Date of Booking", accessor: "dateBooking" },
  { Header: "Parking", accessor: "parking" },
  { Header: "Registration Number", accessor: "regNumber" },
  { Header: "Checklist of Document Collection", accessor: "docCollection" },
  { Header: "Upload Index 2", accessor: "uploadIndex2" },
  { Header: "Document Handover", accessor: "docHandover" },
];

const data = [
  {
    flatNo: "101",
    nameAllotee: "John Doe",
    nameCoAllotee: "Jane Doe",
    type: "2BHK",
    floor: "1",
    emailId: "john@example.com",
    whatsapp: "1234567890",
    rate: "₹50,000",
    agreementValue: "₹5,00,000",
    dateBooking: "2024-02-20",
    parking: "Yes",
    regNumber: "AB12345",
    docCollection: "Completed",
    uploadIndex2: "Uploaded",
    docHandover: "Yes",
  },
];

const Registration = () => {
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
        return ["Yes", "No"];
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
    <div className="container mt-3">
      <h3 className="fs-6">Sales Module / Registration Management</h3>

      <div className="d-flex align-items-center mb-2">
        <Button
          onClick={handleCollapseToggle}
          variant="outlined"
          color="success"
          style={{ borderRadius: "20px" }}
          startIcon={<FaEye size={20} color="#28a745" />}
        >
          {!isCollapsed && <span className="text-success">Registration</span>}
        </Button>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
        {/* Start Date */}
        <label>Start Date:</label>
        <TextField
          type="date"
          variant="outlined"
          size="small"
          value={startDate}
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
          onChange={(e) => {
            setFilterType(e.target.value);
            setFilterValue(""); // Reset filter value when filter type changes
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
          marginTop: "30px",
          marginBottom: "30px",
          marginLeft: "20px",
          marginRight: "20px",
          padding: "20px",
          width: "calc(100% - 230px)",
          overflowX: "auto",
        }}
      >
        <Table style={{ tableLayout: "auto", width: "100%" }}>
          <TableHead>
            <TableRow>
              {columns
                .filter((column) => column.Header !== "Actions")
                .map((column) => (
                  <TableCell key={column.Header} align="center">
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

      {/* Pagination Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          bottom: "0",
          backgroundColor: "white",
          padding: "10px",
          zIndex: 1,
        }}
      >
        <Button
          variant="outlined "
          className="bg-primary text-white"
          color="primary"
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 0))}
          disabled={page === 0}
        >
          Previous
        </Button>

        <TablePagination
          component="div"
          count={data.length}
          page={page}
          onPageChange={handlePageChange}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleRowsPerPageChange}
          rowsPerPageOptions={[5, 10, 15, 20, 25]}
          style={{ flex: 1 }}
        />

        <Button
          variant="outlined"
          className="bg-primary text-white"
          color="primary"
          onClick={() => setPage((prevPage) => Math.min(prevPage + 1, Math.ceil(data.length / rowsPerPage) - 1))}
          disabled={page >= Math.ceil(data.length / rowsPerPage) - 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Registration;
