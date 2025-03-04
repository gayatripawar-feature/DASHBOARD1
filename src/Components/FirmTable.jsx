import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const FirmTable = ({ firms }) => {
  return (
    <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow sx={{ bgcolor: "primary.main" }}>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>ACTION</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>TIMESTAMP</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>FIRM NAME</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>FIRM ADDRESS</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>FIRM PAN NO</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>FIRM GST NO</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>FIRM PAN</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>FIRM GST</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>FIRM LIGHT BILL</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>PARTNER </TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>ADDHAAR NO</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>NAME</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>AGE</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>OCCUPATION</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>MOBILE NO.</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>MAIL ID</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>RESIDENTIAL ADDRESS</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>PAN NO</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>AADHAAR NO</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>PHOTO</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" }}>LIGHT BILL</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {firms.map((firm, index) => (
          <TableRow key={index} >
            <TableCell >{firm.action}</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.timestamp}</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.name}</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.address}</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.firmPanNo}</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.firmGstNo}</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.firmPan}</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.firmGst}</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.firmLightBill}</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.partner}</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.aadhaarNo}</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.name}</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.age}</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.occupation}</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.mobileNo}</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.mailId}</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.residentialAddress}</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.panNo}</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>{firm.aadhaarNo}</TableCell>
            <TableCell>
              <img src={firm.photo} alt="Firm Photo" width="50" height="50" />
            </TableCell>
            <TableCell>{firm.lightBill}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  
  );
};

export default FirmTable;
