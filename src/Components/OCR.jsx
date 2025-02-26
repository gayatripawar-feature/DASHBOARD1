










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
    { Header: "FLAT NO.", accessor: "FLAT NO." },
    { Header: "NAME OF ALLOTEE", accessor: "NAME OF ALLOTEE" },
    { Header: "NAME OF CO-ALLOTEE", accessor: "NAME OF CO-ALLOTEE" },
    { Header: "TYPE", accessor: "TYPE" },
    { Header: "FLOOR", accessor: "FLOOR" },
    { Header: "EMAIL ID", accessor: "EMAILID" },
    { Header: "WHATSAPP MOBILE NO", accessor: "WHATSAPP" },
    { Header: "RATE", accessor: "RATE" },
    { Header: "AGREEMENT VALUE", accessor: "AGREEMENT VALUE" },
    { Header: "DATE OF BOOKING", accessor: "DATE OF BOOKING" },
    { Header: "PARKING", accessor: "PARKING" },
    { Header: "PARKING NO", accessor: "HOME LOAN APPLICABILITY" },
    { Header: "LOAN STATUS", accessor: "BANK NAME" },
    { Header: "10% OF AMOUNT (IF NON SANCTION) OCR", accessor: "BANKER NAME" },
    { Header: "LOAN AMOUNT (SANCTION)", accessor: "MOBILE NO." },
    { Header: "OCR AMOUNT", accessor: "LOAN ACCOUNT NO." },
    { Header: "OCR RECEIVED AMOUNT", accessor: "LOAN AMOUNT" },
    { Header: "OCR BALANCE", accessor: "SANCTION LETTER" },
    { Header: "ONLINE", accessor: "HOME LOAN SANCTION CERTIFICATE COLLECTED" },
    { Header: "CASH (WITH AV)", accessor: "BOOKING CONFIRMATION" },
    { Header: "HISTORY CASH (WITH AV)", accessor: "BOOKING CANCELATION REASON" },
    { Header: "BALANCE CASH (WITH AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
    { Header: "CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
    { Header: "HISTORY CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
    { Header: "BALANCE CASH (WITHOUT AV)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
    { Header: "RECEIVED AS PER STAGE OF CONSTRUCTION", accessor: "BOOKING CONFIRMATION MAIL SENT" },
    { Header: "STAMP DUTY (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
    { Header: "STAMP DUTY (RECEIVE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
    { Header: "STAMP DUTY (BALANCE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
    { Header: "REG. (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
    { Header: "REG. (RECEIVE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
    { Header: "REG. (BALANCE)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
    { Header: "GST (TOTAL)", accessor: "BOOKING CONFIRMATION MAIL SENT" },
    { Header: "GST RECEIVED", accessor: "BOOKING CONFIRMATION MAIL SENT" },
    { Header: "BALANCE GST", accessor: "BOOKING CONFIRMATION MAIL SENT" },
    { Header: "LEGAL CHARGES RECEIVED", accessor: "BOOKING CONFIRMATION MAIL SENT" }
  ];
  

const data = [

      
 
];

const OCR = () => {
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
      <h3 className="fs-6 pb-3 ">Sales Module / OCR Collection Management </h3>

      <div className="d-flex align-items-center mb-2">
        <Button className="mb-5"
          onClick={handleCollapseToggle}
          variant="outlined"
          color="success"
          style={{ borderRadius: "20px" }}
          startIcon={<FaEye size={20} color="#28a745" />}
        >
          {!isCollapsed && <span className="text-success ">OCR Collection</span>}
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
    className="bg-white"
    onChange={(e) => setStartDate(e.target.value)}
    style={{ width: "130px" }}
  />

  {/* End Date */}
  <label>End Date:</label>
  <TextField
    type="date"
    variant="outlined"
    size="small"
    value={endDate}
    className="bg-white"
    onChange={(e) => setEndDate(e.target.value)}
    style={{ width: "130px" }}
  />

  {/* Filter By */}
  <label>Filter By:</label>
  <TextField
    select
    variant="outlined"
    size="small"
    style={{ width: "130px" }}
    value={filterType}
    className="bg-white"
    onChange={(e) => {
      setFilterType(e.target.value);
      setFilterValue("");
    }}
  >
    <MenuItem value="">Select</MenuItem>
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
        style={{ width: "130px" }}
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
    style={{ borderRadius: "5px", padding: "5px 10px" }}
    onClick={handleReset}
  >
    Reset
  </Button>

  {/* Pagination Controls */}
  <Button
    variant="outlined"
    className="bg-primary text-white"
    color="primary"
    onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 0))}
    disabled={page === 0}
    style={{ padding: "5px 10px" }}
  >
    Prev
  </Button>
  
  <Button
    variant="outlined"
    className="bg-primary text-white"
    color="primary"
    onClick={() => setPage((prevPage) => Math.min(prevPage + 1, Math.ceil(data.length / rowsPerPage) - 1))}
    disabled={data.length === 0}
    style={{ padding: "5px 10px" }}
  >
    Next
  </Button>

  <label className="mx-2">Rows/Page:</label>
  <input
    type="number"
    className="form-control"
    value={rowsPerPage}
    onChange={handleRowsPerPageChange}
    style={{ width: "70px", padding: "5px" }}
  />
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

     
   
      </div>
  );
};

export default OCR;


