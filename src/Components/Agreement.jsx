





import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, MenuItem, Select, InputLabel, FormControl, TextField, Modal, Box } from '@mui/material';
import { Grid } from '@mui/material';

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

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredLoans.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="main-content">
      <h6>Sales Module / Agreement Management</h6>

      <div className="d-flex align-items-center gap-3 my-3 pt-4 pb-3">
        {/* Button Section in One Row */}
        <Button variant="contained" color="primary" onClick={() => handleOpenModal(null)}>
          Agreement Draft
        </Button>

        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          fullWidth
          InputLabelProps={{ shrink: true }}
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

        <Button variant="contained" color="primary" onClick={filterLoans}>
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
            <TableRow>
              <TableCell>Flat No.</TableCell>
              <TableCell>Name Of Allotee</TableCell>
              <TableCell>Allotee Date Of Birth</TableCell>
              <TableCell>Allotee Age</TableCell>
              <TableCell>A1-Occupation</TableCell>
              <TableCell>A1-Pan No</TableCell>
              <TableCell>A1-Aadhar No</TableCell>
              <TableCell>Name of Co-Allotee</TableCell>
              <TableCell>Co-Allotee Date Of Birth</TableCell>
              <TableCell>Co-Allotee Age</TableCell>
              <TableCell>Co-Occupation</TableCell>
              <TableCell>Co-Pan No.</TableCell>
              <TableCell>Co-Aadhar No .</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Floor</TableCell>
              <TableCell>Total Agreement Value (In words)</TableCell>
              <TableCell>Payment Schedule</TableCell>
              <TableCell>Booking</TableCell>
              <TableCell>Execution Of Aggrement</TableCell>
              <TableCell>Completion Of Plinth</TableCell>
              <TableCell>Completion Of 1st Slab</TableCell>
              <TableCell>Completion Of 2nd Slab</TableCell>
              <TableCell>Completion Of 3rd Slab</TableCell>
              <TableCell>Completion Of 5th Slab</TableCell>
              <TableCell>Completion Of 7th Slab</TableCell>
              <TableCell>Completion Of 9th Slab</TableCell>
              <TableCell>Completion Of 10th Slab</TableCell>
              <TableCell>Completion Of Walls</TableCell>
              <TableCell>Completion Of Internal Plaster</TableCell>
              <TableCell>Completion Of Lifts</TableCell>
              <TableCell>Possession</TableCell>
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

      {/* Modal for Agreement Draft */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box 
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 700, 
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2
          }}
        >
          <h3>Bank Agreement</h3>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField label="Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Flat No" fullWidth value={selectedLoan?.flatNo || ""} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Allotee Name" fullWidth value={selectedLoan?.nameOfAllotee || ""} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Allotee DOB" fullWidth value={selectedLoan?.alloteeDOB || ""} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Allotee Age" fullWidth value={selectedLoan?.alloteeAge || ""} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="A1 Occupation" fullWidth value={selectedLoan?.a1Occupation || ""} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="A1 PAN No" fullWidth value={selectedLoan?.a1PanNo || ""} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="A1 Aadhar No" fullWidth value={selectedLoan?.a1AadharNo || ""} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Co-Allotee Name" fullWidth value={selectedLoan?.coAlloteeName || ""} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Co-Allotee DOB" fullWidth value={selectedLoan?.coAlloteeDOB || ""} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Co-Allotee Age" fullWidth value={selectedLoan?.coAlloteeAge || ""} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Co-Occupation" fullWidth value={selectedLoan?.coOccupation || ""} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Co-PAN No" fullWidth value={selectedLoan?.coPanNo || ""} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Co-Aadhar No" fullWidth value={selectedLoan?.coAadharNo || ""} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Address" fullWidth value={selectedLoan?.address || ""} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Contact" fullWidth value={selectedLoan?.contact || ""} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Floor" fullWidth value={selectedLoan?.floor || ""} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Total Agreement Value (In words)" fullWidth value={selectedLoan?.agreementValueInWords || ""} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Payment Schedule" fullWidth value={selectedLoan?.paymentSchedule || ""} InputProps={{ readOnly: true }} />
            </Grid>
          </Grid>

          <Button variant="contained" color="primary" fullWidth onClick={handleCloseModal} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Agreement;
