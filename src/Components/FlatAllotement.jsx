// FlatAllotment.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const FlatAllotment = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
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
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.action}</TableCell>
              <TableCell>{row.timestamp}</TableCell>
              <TableCell>{row.projectName}</TableCell>
              <TableCell>{row.landownerName}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.occupation}</TableCell>
              <TableCell>{row.mobileNo}</TableCell>
              <TableCell>{row.mailId}</TableCell>
              <TableCell>{row.village}</TableCell>
              <TableCell>{row.taluka}</TableCell>
              <TableCell>{row.district}</TableCell>
              <TableCell>{row.residentialAddress}</TableCell>
              <TableCell>{row.panNo}</TableCell>
              <TableCell>{row.addhaar}</TableCell>
              <TableCell>{row.photo}</TableCell>
              <TableCell>{row.lightBill}</TableCell>
              <TableCell>{row.bankName}</TableCell>
              <TableCell>{row.bankAddress}</TableCell>
              <TableCell>{row.accountNo}</TableCell>
              <TableCell>{row.ifscCode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FlatAllotment;
