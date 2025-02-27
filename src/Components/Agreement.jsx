// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, MenuItem, TextField } from '@mui/material';
// import { FaEye } from 'react-icons/fa';

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const Agreement = () => {
//   const [loans, setLoans] = useState([]);
//   const [filteredLoans, setFilteredLoans] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [totalPages, setTotalPages] = useState(1);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [agreementDraft, setAgreementDraft] = useState('');
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
  
//   useEffect(() => {
//     loadLoansData();
//   }, []);

//   useEffect(() => {
//     setTotalPages(Math.ceil(filteredLoans.length / rowsPerPage));
//   }, [filteredLoans, rowsPerPage]);

//   const loadLoansData = async () => {
//     const data = await fetchLoansData();
//     setLoans(data);
//     setFilteredLoans(data);
//   };

//   const filterLoansByDate = () => {
//     const filtered = loans.filter(loan => {
//       const loanDate = new Date(loan.dateOfBooking);
//       const start = startDate ? new Date(startDate) : new Date(0);
//       const end = endDate ? new Date(endDate) : new Date();
//       return (
//         loanDate >= start &&
//         loanDate <= end &&
//         (!agreementDraft || loan.agreementDraft.includes(agreementDraft)) &&
//         (!from || loan.from.includes(from)) &&
//         (!to || loan.to.includes(to))
//       );
//     });
//     setFilteredLoans(filtered);
//     setCurrentPage(1);
//   };

//   return (
//     <div className="main-content">
//       <h6 className='mb-5'>Sales Module / Home Loan Management</h6>
//       <div className="filters">
//         <TextField label="Agreement Draft" value={agreementDraft} onChange={(e) => setAgreementDraft(e.target.value)} />
//         <TextField label="From" value={from} onChange={(e) => setFrom(e.target.value)} />
//         <TextField label="To" value={to} onChange={(e) => setTo(e.target.value)} />
//         <Button onClick={filterLoansByDate} variant="contained">Filter</Button>
//       </div>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Flat No.</TableCell>
//               <TableCell>Name Of Allotee</TableCell>
//               <TableCell>Agreement Draft</TableCell>
//               <TableCell>From</TableCell>
//               <TableCell>To</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredLoans.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map(loan => (
//               <TableRow key={loan.flatNo}>
//                 <TableCell>{loan.flatNo}</TableCell>
//                 <TableCell>{loan.nameOfAllotee}</TableCell>
//                 <TableCell>{loan.agreementDraft}</TableCell>
//                 <TableCell>{loan.from}</TableCell>
//                 <TableCell>{loan.to}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Agreement;

// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, MenuItem, TextField } from '@mui/material';
// import { FaEye } from 'react-icons/fa';

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const Agreement= () => {
//   const [loans, setLoans] = useState([]);
//   const [filteredLoans, setFilteredLoans] = useState([]);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');

//   useEffect(() => {
//     loadLoansData();
//   }, []);

//   const loadLoansData = async () => {
//     const data = await fetchLoansData();
//     setLoans(data);
//     setFilteredLoans(data);
//   };

//   const filterLoansByDate = () => {
//     const filtered = loans.filter(loan => {
//       const loanDate = new Date(loan.dateOfBooking);
//       const start = startDate ? new Date(startDate) : new Date(0);
//       const end = endDate ? new Date(endDate) : new Date();
//       return loanDate >= start && loanDate <= end;
//     });
//     setFilteredLoans(filtered);
//   };

//   return (
//     <div className="main-content">
//       <h6 className='mb-5'>Sales Module / Home Loan Management</h6>
      
//       {/* Agreement Draft Button */}
//       <Button variant="contained" color="primary" className='mb-3'>Agreement Draft</Button>
      
//       {/* Date Filter Section */}
//       <div className="d-flex align-items-center gap-3 mb-3">
//         <TextField 
//           label="From" 
//           type="date" 
//           InputLabelProps={{ shrink: true }} 
//           value={startDate} 
//           onChange={(e) => setStartDate(e.target.value)}
//         />
//         <TextField 
//           label="To" 
//           type="date" 
//           InputLabelProps={{ shrink: true }} 
//           value={endDate} 
//           onChange={(e) => setEndDate(e.target.value)}
//         />
//         <Button variant="contained" color="success" onClick={filterLoansByDate}>Filter</Button>
//       </div>

//       {/* Filtered Data Table */}
//       <TableContainer component={Paper} className='mb-5'>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Flat No.</TableCell>
//               <TableCell>Name Of Allotee</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Floor</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Rate</TableCell>
//               <TableCell>Agreement Value</TableCell>
//               <TableCell>Booking Date</TableCell>
//               <TableCell>Parking</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredLoans.map((loan) => (
//               <TableRow key={loan.flatNo}>
//                 <TableCell>{loan.flatNo}</TableCell>
//                 <TableCell>{loan.nameOfAllotee}</TableCell>
//                 <TableCell>{loan.type}</TableCell>
//                 <TableCell>{loan.floor}</TableCell>
//                 <TableCell>{loan.emailId}</TableCell>
//                 <TableCell>{loan.rate}</TableCell>
//                 <TableCell>{loan.agreementValue}</TableCell>
//                 <TableCell>{loan.dateOfBooking}</TableCell>
//                 <TableCell>{loan.parking}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Agreement;


// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, MenuItem, TextField } from '@mui/material';
// import { FaEye } from 'react-icons/fa';

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const Agreement = () => {
//   const [loans, setLoans] = useState([]);
//   const [filteredLoans, setFilteredLoans] = useState([]);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [flatType, setFlatType] = useState('');
//   const [parking, setParking] = useState('');
//   const [floor, setFloor] = useState('');
//   const [rate, setRate] = useState('');

//   useEffect(() => {
//     loadLoansData();
//   }, []);

//   const loadLoansData = async () => {
//     const data = await fetchLoansData();
//     setLoans(data);
//     setFilteredLoans(data);
//   };

//   const filterLoans = () => {
//     const filtered = loans.filter(loan => {
//       const loanDate = new Date(loan.dateOfBooking);
//       const start = startDate ? new Date(startDate) : new Date(0);
//       const end = endDate ? new Date(endDate) : new Date();
      
//       return (
//         loanDate >= start &&
//         loanDate <= end &&
//         (!flatType || loan.type === flatType) &&
//         (!parking || loan.parking === parking) &&
//         (!floor || loan.floor === floor) &&
//         (!rate || loan.rate === rate)
//       );
//     });
//     setFilteredLoans(filtered);
//   };

//   return (
//     <div className="main-content">
//       <h6>Sales Module / Home Loan Management</h6>
//       <Button variant="contained" color="primary">Agreement Draft</Button>
      
//       {/* Date Range Filter */}
//       <div className="d-flex gap-3 my-3">
//         <TextField label="From" type="date" InputLabelProps={{ shrink: true }} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
//         <TextField label="To" type="date" InputLabelProps={{ shrink: true }} value={endDate} onChange={(e) => setEndDate(e.target.value)} />
//       </div>

//       {/* Filters */}
//       <div className="d-flex gap-3 my-3">
//         <TextField select label="Flat Type" value={flatType} onChange={(e) => setFlatType(e.target.value)}>
//           <MenuItem value="">All</MenuItem>
//           <MenuItem value="1BHK">1BHK</MenuItem>
//           <MenuItem value="2BHK">2BHK</MenuItem>
//           <MenuItem value="3BHK">3BHK</MenuItem>
//         </TextField>
//         <TextField select label="Parking" value={parking} onChange={(e) => setParking(e.target.value)}>
//           <MenuItem value="">All</MenuItem>
//           <MenuItem value="Basement">Basement</MenuItem>
//           <MenuItem value="Parking 1">Parking 1</MenuItem>
//         </TextField>
//         <TextField select label="Floor" value={floor} onChange={(e) => setFloor(e.target.value)}>
//           <MenuItem value="">All</MenuItem>
//           {[...Array(15).keys()].map(i => (
//             <MenuItem key={i} value={i + 1}>{i + 1}</MenuItem>
//           ))}
//         </TextField>
//         <TextField label="Rate" value={rate} onChange={(e) => setRate(e.target.value)} />
//       </div>
      
//       <Button variant="contained" color="secondary" onClick={filterLoans}>Apply Filters</Button>
      
//       {/* Table Section */}
//       <TableContainer component={Paper} className="mt-4">
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Flat No.</TableCell>
//               <TableCell>Name Of Allotee</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Floor</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Rate</TableCell>
//               <TableCell>Agreement Value</TableCell>
//               <TableCell>Booking Date</TableCell>
//               <TableCell>Parking</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredLoans.map((loan, index) => (
//               <TableRow key={index}>
//                 <TableCell>{loan.flatNo}</TableCell>
//                 <TableCell>{loan.nameOfAllotee}</TableCell>
//                 <TableCell>{loan.type}</TableCell>
//                 <TableCell>{loan.floor}</TableCell>
//                 <TableCell>{loan.emailId}</TableCell>
//                 <TableCell>{loan.rate}</TableCell>
//                 <TableCell>{loan.agreementValue}</TableCell>
//                 <TableCell>{loan.dateOfBooking}</TableCell>
//                 <TableCell>{loan.parking}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Agreement;


// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, MenuItem, TextField } from '@mui/material';
// import { FaEye } from 'react-icons/fa';

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const Agreement = () => {
//   const [loans, setLoans] = useState([]);
//   const [filteredLoans, setFilteredLoans] = useState([]);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [flatType, setFlatType] = useState('');
//   const [parking, setParking] = useState('');
//   const [floor, setFloor] = useState('');
//   const [rate, setRate] = useState('');

//   useEffect(() => {
//     loadLoansData();
//   }, []);

//   const loadLoansData = async () => {
//     const data = await fetchLoansData();
//     setLoans(data);
//     setFilteredLoans(data);
//   };

//   const filterLoans = () => {
//     const filtered = loans.filter(loan => {
//       const loanDate = new Date(loan.dateOfBooking);
//       const start = startDate ? new Date(startDate) : new Date(0);
//       const end = endDate ? new Date(endDate) : new Date();
      
//       return (
//         loanDate >= start &&
//         loanDate <= end &&
//         (!flatType || loan.type === flatType) &&
//         (!parking || loan.parking === parking) &&
//         (!floor || loan.floor === floor) &&
//         (!rate || loan.rate === rate)
//       );
//     });
//     setFilteredLoans(filtered);
//   };

//   return (
//     <div className="main-content">
//       <h6>Sales Module / Home Loan Management</h6>
//       <Button variant="contained" color="primary">Agreement Draft</Button>
      
//       {/* Date Range Filter */}
//       <div className="d-flex gap-3 my-3">
//         <TextField label="From" type="date" InputLabelProps={{ shrink: true }} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
//         <TextField label="To" type="date" InputLabelProps={{ shrink: true }} value={endDate} onChange={(e) => setEndDate(e.target.value)} />
//       </div>

//       {/* Filters */}
//       <div className="d-flex gap-3 my-3">
//         <TextField select label="Flat Type" value={flatType} onChange={(e) => setFlatType(e.target.value)}>
//           <MenuItem value="">All</MenuItem>
//           <MenuItem value="1BHK">1BHK</MenuItem>
//           <MenuItem value="2BHK">2BHK</MenuItem>
//           <MenuItem value="3BHK">3BHK</MenuItem>
//         </TextField>
//         <TextField select label="Parking" value={parking} onChange={(e) => setParking(e.target.value)}>
//           <MenuItem value="">All</MenuItem>
//           <MenuItem value="Basement">Basement</MenuItem>
//           <MenuItem value="Parking 1">Parking 1</MenuItem>
//         </TextField>
//         <TextField select label="Floor" value={floor} onChange={(e) => setFloor(e.target.value)}>
//           <MenuItem value="">All</MenuItem>
//           {[...Array(15).keys()].map(i => (
//             <MenuItem key={i} value={i + 1}>{i + 1}</MenuItem>
//           ))}
//         </TextField>
//         <TextField label="Rate" value={rate} onChange={(e) => setRate(e.target.value)} />
//       </div>
      
//       <Button variant="contained" color="secondary" onClick={filterLoans}>Apply Filters</Button>
      
//       {/* Table Section */}
//       <TableContainer component={Paper} className="mt-4">
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Flat No.</TableCell>
//               <TableCell>Name Of Allotee</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Floor</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Rate</TableCell>
//               <TableCell>Agreement Value</TableCell>
//               <TableCell>Booking Date</TableCell>
//               <TableCell>Parking</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredLoans.map((loan, index) => (
//               <TableRow key={index}>
//                 <TableCell>{loan.flatNo}</TableCell>
//                 <TableCell>{loan.nameOfAllotee}</TableCell>
//                 <TableCell>{loan.type}</TableCell>
//                 <TableCell>{loan.floor}</TableCell>
//                 <TableCell>{loan.emailId}</TableCell>
//                 <TableCell>{loan.rate}</TableCell>
//                 <TableCell>{loan.agreementValue}</TableCell>
//                 <TableCell>{loan.dateOfBooking}</TableCell>
//                 <TableCell>{loan.parking}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Agreement;



// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, MenuItem, TextField } from '@mui/material';
// import { FaEye } from 'react-icons/fa';

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const getFilterOptions = (type) => {
//   switch (type) {
//     case "Flat Type":
//       return ["1BHK", "2BHK", "3BHK", "Studio"];
//     case "Parking":
//       return ["Basement", "Parking 1", "Parking 2"];
//     case "Floor":
//       return Array.from({ length: 15 }, (_, i) => (i + 1).toString());
//     case "Rate":
//       return Array.from({ length: 121 }, (_, i) => `₹${(i * 50000).toLocaleString()}`);
//     default:
//       return [];
//   }
// };

// const Agreement = () => {
//   const [loans, setLoans] = useState([]);
//   const [filteredLoans, setFilteredLoans] = useState([]);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [filterType, setFilterType] = useState('');
//   const [filterValue, setFilterValue] = useState('');

//   useEffect(() => {
//     loadLoansData();
//   }, []);

//   const loadLoansData = async () => {
//     const data = await fetchLoansData();
//     setLoans(data);
//     setFilteredLoans(data);
//   };

//   const filterLoans = () => {
//     const filtered = loans.filter(loan => {
//       const loanDate = new Date(loan.dateOfBooking);
//       const start = startDate ? new Date(startDate) : new Date(0);
//       const end = endDate ? new Date(endDate) : new Date();

//       const matchesFilters =
//         (!filterType || !filterValue || loan[filterType.toLowerCase().replace(' ', '')] === filterValue);

//       return loanDate >= start && loanDate <= end && matchesFilters;
//     });
//     setFilteredLoans(filtered);
//   };

//   const resetFilters = () => {
//     setStartDate('');
//     setEndDate('');
//     setFilterType('');
//     setFilterValue('');
//     setFilteredLoans(loans);
//   };

//   return (
//     <div className="main-content">
//       <h6>Sales Module / Home Loan Management</h6>
//       <Button variant="contained" color="primary">Agreement Draft</Button>
      
//       {/* Date Range Filter */}
//       <div className="d-flex gap-3 my-3">
//         <TextField label="From" type="date" InputLabelProps={{ shrink: true }} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
//         <TextField label="To" type="date" InputLabelProps={{ shrink: true }} value={endDate} onChange={(e) => setEndDate(e.target.value)} />
//       </div>

//       {/* Filters */}
//       <div className="d-flex align-items-center gap-3 mb-3">
//         <label>Filter By:</label>
//         <TextField select variant="outlined" size="small" value={filterType} className="bg-white" onChange={(e) => {
//           setFilterType(e.target.value);
//           setFilterValue('');
//         }}>
//           <MenuItem value="">Select Filter</MenuItem>
//           <MenuItem value="Flat Type">Flat Type</MenuItem>
//           <MenuItem value="Parking">Parking</MenuItem>
//           <MenuItem value="Floor">Floor</MenuItem>
//           <MenuItem value="Rate">Rate</MenuItem>
//         </TextField>

//         {filterType && (
//           <>
//             <TextField select variant="outlined" size="small" className="bg-white" value={filterValue} onChange={(e) => setFilterValue(e.target.value)}>
//               {getFilterOptions(filterType).map((option) => (
//                 <MenuItem key={option} value={option}>{option}</MenuItem>
//               ))}
//             </TextField>
//             <Button variant="contained" color="secondary" onClick={resetFilters}>Reset</Button>
//           </>
//         )}
//       </div>
//       <Button variant="contained" color="secondary" onClick={filterLoans}>Apply Filters</Button>

//       {/* Table Section */}
//       <TableContainer component={Paper} className="mt-4">
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Flat No.</TableCell>
//               <TableCell>Name Of Allotee</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Floor</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Rate</TableCell>
//               <TableCell>Agreement Value</TableCell>
//               <TableCell>Booking Date</TableCell>
//               <TableCell>Parking</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredLoans.map((loan, index) => (
//               <TableRow key={index}>
//                 <TableCell>{loan.flatNo}</TableCell>
//                 <TableCell>{loan.nameOfAllotee}</TableCell>
//                 <TableCell>{loan.type}</TableCell>
//                 <TableCell>{loan.floor}</TableCell>
//                 <TableCell>{loan.emailId}</TableCell>
//                 <TableCell>{loan.rate}</TableCell>
//                 <TableCell>{loan.agreementValue}</TableCell>
//                 <TableCell>{loan.dateOfBooking}</TableCell>
//                 <TableCell>{loan.parking}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Agreement;




// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, MenuItem, TextField } from '@mui/material';

// const fetchLoansData = async () => {
//   const response = await fetch('/api/getOCRCollection');
//   return response.json();
// };

// const getFilterOptions = (type) => {
//   switch (type) {
//     case "Flat Type":
//       return ["1BHK", "2BHK", "3BHK", "Studio"];
//     case "Parking":
//       return ["Basement", "Parking 1", "Parking 2"];
//     case "Floor":
//       return Array.from({ length: 15 }, (_, i) => (i + 1).toString());
//     case "Rate":
//       return Array.from({ length: 121 }, (_, i) => `₹${(i * 50000).toLocaleString()}`);
//     default:
//       return [];
//   }
// };

// const Agreement = () => {
//   const [loans, setLoans] = useState([]);
//   const [filteredLoans, setFilteredLoans] = useState([]);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [filterType, setFilterType] = useState('');
//   const [filterValue, setFilterValue] = useState('');

//   useEffect(() => {
//     loadLoansData();
//   }, []);

//   const loadLoansData = async () => {
//     const data = await fetchLoansData();
//     setLoans(data);
//     setFilteredLoans(data);
//   };

//   const filterLoans = () => {
//     const filtered = loans.filter(loan => {
//       const loanDate = new Date(loan.dateOfBooking);
//       const start = startDate ? new Date(startDate) : new Date(0);
//       const end = endDate ? new Date(endDate) : new Date();

//       const matchesFilters =
//         (!filterType || !filterValue || loan[filterType.toLowerCase().replace(' ', '')] === filterValue);

//       return loanDate >= start && loanDate <= end && matchesFilters;
//     });
//     setFilteredLoans(filtered);
//   };

//   const resetFilters = () => {
//     setStartDate('');
//     setEndDate('');
//     setFilterType('');
//     setFilterValue('');
//     setFilteredLoans(loans);
//   };

//   useEffect(() => {
//     filterLoans();
//   }, [startDate, endDate, filterType, filterValue]);

//   return (
//     <div className="main-content">
//       <h6>Sales Module / Home Loan Management</h6>
//       <Button variant="contained" color="primary">Agreement Draft</Button>
      
//       {/* Date Range Filter */}
//       <div className="d-flex gap-3 my-3">
//         <TextField label="From" type="date" InputLabelProps={{ shrink: true }} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
//         <TextField label="To" type="date" InputLabelProps={{ shrink: true }} value={endDate} onChange={(e) => setEndDate(e.target.value)} />
//       </div>

//       {/* Filters */}
//       <div className="d-flex align-items-center gap-3 mb-3">
//         <label>Filter By:</label>
//         <TextField select variant="outlined" size="small" value={filterType} className="bg-white" onChange={(e) => {
//           setFilterType(e.target.value);
//           setFilterValue('');
//         }}>
//           <MenuItem value="">Select Filter</MenuItem>
//           <MenuItem value="Flat Type">Flat Type</MenuItem>
//           <MenuItem value="Parking">Parking</MenuItem>
//           <MenuItem value="Floor">Floor</MenuItem>
//           <MenuItem value="Rate">Rate</MenuItem>
//         </TextField>

//         {filterType && (
//           <>
//             <TextField select variant="outlined" size="small" className="bg-white" value={filterValue} onChange={(e) => setFilterValue(e.target.value)}>
//               {getFilterOptions(filterType).map((option) => (
//                 <MenuItem key={option} value={option}>{option}</MenuItem>
//               ))}
//             </TextField>
//             <Button variant="contained" color="secondary" onClick={resetFilters}>Reset</Button>
//           </>
//         )}
//       </div>

//       {/* Table Section */}
//       <TableContainer component={Paper} className="mt-4">
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Flat No.</TableCell>
//               <TableCell>Name Of Allotee</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Floor</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Rate</TableCell>
//               <TableCell>Agreement Value</TableCell>
//               <TableCell>Booking Date</TableCell>
//               <TableCell>Parking</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredLoans.map((loan, index) => (
//               <TableRow key={index}>
//                 <TableCell>{loan.flatNo}</TableCell>
//                 <TableCell>{loan.nameOfAllotee}</TableCell>
//                 <TableCell>{loan.type}</TableCell>
//                 <TableCell>{loan.floor}</TableCell>
//                 <TableCell>{loan.emailId}</TableCell>
//                 <TableCell>{loan.rate}</TableCell>
//                 <TableCell>{loan.agreementValue}</TableCell>
//                 <TableCell>{loan.dateOfBooking}</TableCell>
//                 <TableCell>{loan.parking}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Agreement;



import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, MenuItem, TextField } from '@mui/material';

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
  };

  const resetFilters = () => {
    setStartDate('');
    setEndDate('');
    setFilterType('');
    setFilterValue('');
    setFilteredLoans(loans);
  };

  useEffect(() => {
    filterLoans();
  }, [startDate, endDate, filterType, filterValue]);

  return (
    <div className="main-content">
      <h6 pb-3>Sales Module / Agreement</h6>
      
      {/* Agreement Draft Button and Filters in One Line */}
      <div className="d-flex align-items-center gap-3 my-3 pt-4 pb-3">
        <Button variant="contained" color="primary">Agreement Draft</Button>
        
        {/* Date Range Filter */}
        <div className="d-flex gap-2">
          <TextField label="From" type="date" InputLabelProps={{ shrink: true }} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          <TextField label="To" type="date" InputLabelProps={{ shrink: true }} value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>

        {/* Filter By and Reset Button */}
        <div className="d-flex align-items-center gap-2">
          <label>Filter By:</label>
          <TextField select variant="outlined" size="small" value={filterType} className="bg-white" onChange={(e) => {
            setFilterType(e.target.value);
            setFilterValue('');
          }}>
            <MenuItem value="">Select Filter</MenuItem>
            <MenuItem value="Flat Type">Flat Type</MenuItem>
            <MenuItem value="Parking">Parking</MenuItem>
            <MenuItem value="Floor">Floor</MenuItem>
            <MenuItem value="Rate">Rate</MenuItem>
          </TextField>

          {filterType && (
            <>
              <TextField select variant="outlined" size="small" className="bg-white" value={filterValue} onChange={(e) => setFilterValue(e.target.value)}>
                {getFilterOptions(filterType).map((option) => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </TextField>
              <Button variant="contained" color="secondary" onClick={resetFilters}>Reset</Button>
            </>
          )}
        </div>
      </div>

      {/* Table Section */}
      <TableContainer component={Paper} className="mt-4">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Flat No.</TableCell>
              <TableCell>Name Of Allotee</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Floor</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Rate</TableCell>
              <TableCell>Agreement Value</TableCell>
              <TableCell>Booking Date</TableCell>
              <TableCell>Parking</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredLoans.map((loan, index) => (
              <TableRow key={index}>
                <TableCell>{loan.flatNo}</TableCell>
                <TableCell>{loan.nameOfAllotee}</TableCell>
                <TableCell>{loan.type}</TableCell>
                <TableCell>{loan.floor}</TableCell>
                <TableCell>{loan.emailId}</TableCell>
                <TableCell>{loan.rate}</TableCell>
                <TableCell>{loan.agreementValue}</TableCell>
                <TableCell>{loan.dateOfBooking}</TableCell>
                <TableCell>{loan.parking}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Agreement;
