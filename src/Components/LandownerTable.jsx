import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const LandownerTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
         
          {/* <TableRow sx={{ background: "linear-gradient(180deg, #3621a9 0%,rgb(139, 115, 243) 100%)" }}> */}
           <TableRow sx={{background:"#3621a9"}}>
          <TableCell sx={{ color: "white", fontWeight: "bold" }}>ACTION</TableCell>
<TableCell sx={{ color: "white", fontWeight: "bold" }} >TIMESTAMP</TableCell>
<TableCell sx={{ color: "white", fontWeight: "bold" }}>PROJECT NAME</TableCell>
<TableCell sx={{ color: "white", fontWeight: "bold" }}>LANDOWNER NAME</TableCell>
<TableCell sx={{ color: "white", fontWeight: "bold" }}> AGE</TableCell>
<TableCell sx={{ color: "white", fontWeight: "bold" }}>OCCUPATION</TableCell>
<TableCell sx={{ color: "white", fontWeight: "bold" }}>MOBILE NO</TableCell>
<TableCell sx={{ color: "white", fontWeight: "bold" }}>MAIL ID</TableCell>
<TableCell sx={{ color: "white", fontWeight: "bold" }}>VILLAGE</TableCell>
<TableCell sx={{ color: "white", fontWeight: "bold" }}>TALUKA</TableCell>
<TableCell sx={{ color: "white", fontWeight: "bold" }}>DISTRICT</TableCell>
<TableCell sx={{ color: "white", fontWeight: "bold" }}>RESIDENTIAL ADDRESS</TableCell>
<TableCell sx={{ color: "white", fontWeight: "bold" }}>PAN NO</TableCell>
<TableCell sx={{ color: "white", fontWeight: "bold" }}>ADDHAAR</TableCell>
<TableCell sx={{ color: "white", fontWeight: "bold" }}>PHOTO</TableCell>
<TableCell sx={{ color: "white", fontWeight: "bold" }}>LIGHT BILL</TableCell>
<TableCell sx={{ color: "white", fontWeight: "bold" }}>NAME OF BANK</TableCell>
<TableCell sx={{ color: "white", fontWeight: "bold" }}>BANK ADDRESS</TableCell>
<TableCell sx={{ color: "white", fontWeight: "bold" }}>ACCOUNT NO</TableCell>
<TableCell sx={{ color: "white", fontWeight: "bold" }}>IFSC CODE</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.length > 0 ? (
            data.map((landowner, index) => (
              <TableRow key={index}>
               <TableCell>ACTION</TableCell>
<TableCell>TIMESTAMP</TableCell>
<TableCell>PROJECT NAME</TableCell>
<TableCell>LANDOWNER NAME</TableCell>
<TableCell>AGE</TableCell>
<TableCell>OCCUPATION</TableCell>
<TableCell>MOBILE NO</TableCell>
<TableCell>MAIL ID</TableCell>
<TableCell>VILLAGE</TableCell>
<TableCell>TALUKA</TableCell>
<TableCell>DISTRICT</TableCell>
<TableCell>RESIDENTIAL ADDRESS</TableCell>
<TableCell>PAN NO</TableCell>
<TableCell>ADDHAAR</TableCell>
<TableCell>PHOTO</TableCell>
<TableCell>LIGHT BILL</TableCell>
<TableCell>NAME OF BANK</TableCell>
<TableCell>BANK ADDRESS</TableCell>
<TableCell>ACCOUNT NO</TableCell>
<TableCell>IFSC CODE</TableCell>

              </TableRow>
            ))
          ) : (
            <TableRow>
              {/* <TableCell colSpan={5} style={{ textAlign: 'center' }}>No Landowner Data Available</TableCell> */}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LandownerTable;
