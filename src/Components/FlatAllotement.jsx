
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const FlatAllotment = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: "primary.main" }}>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>ACTION</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>TIMESTAMP</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>PROJECT NAME</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>LANDOWNER NAME</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>AGE</TableCell>
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
            data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.action || 'N/A'}</TableCell>
                <TableCell>{row.timestamp || 'N/A'}</TableCell>
                <TableCell>{row.projectName || 'N/A'}</TableCell>
                <TableCell>{row.landownerName || 'N/A'}</TableCell>
                <TableCell>{row.age || 'N/A'}</TableCell>
                <TableCell>{row.occupation || 'N/A'}</TableCell>
                <TableCell>{row.mobileNo || 'N/A'}</TableCell>
                <TableCell>{row.mailId || 'N/A'}</TableCell>
                <TableCell>{row.village || 'N/A'}</TableCell>
                <TableCell>{row.taluka || 'N/A'}</TableCell>
                <TableCell>{row.district || 'N/A'}</TableCell>
                <TableCell>{row.residentialAddress || 'N/A'}</TableCell>
                <TableCell>{row.panNo || 'N/A'}</TableCell>
                <TableCell>{row.addhaar || 'N/A'}</TableCell>
                <TableCell>{row.photo || 'N/A'}</TableCell>
                <TableCell>{row.lightBill || 'N/A'}</TableCell>
                <TableCell>{row.bankName || 'N/A'}</TableCell>
                <TableCell>{row.bankAddress || 'N/A'}</TableCell>
                <TableCell>{row.accountNo || 'N/A'}</TableCell>
                <TableCell>{row.ifscCode || 'N/A'}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FlatAllotment;
