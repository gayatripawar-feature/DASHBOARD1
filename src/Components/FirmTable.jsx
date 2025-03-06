import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const FirmTable = ({ firms }) => {
  return (
    <TableContainer component={Paper}>
    <Table>
      <TableHead>
        {/* <TableRow sx={{ bgcolor: "primary.main" }}> */}
        <TableRow sx={{ background: "linear-gradient(180deg, #3621a9 0%,rgb(139, 115, 243) 100%)" }}>
          <TableCell  sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap"  }}>ACTION</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>TIMESTAMP</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap"  }}>FIRM NAME</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FIRM ADDRESS</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FIRM PAN NO</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FIRM GST NO</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FIRM PAN</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FIRM GST</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FIRM LIGHT BILL</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PARTNER </TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>ADDHAAR NO</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>NAME</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>AGE</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>OCCUPATION</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>MOBILE NO.</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>MAIL ID</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>RESIDENTIAL ADDRESS</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PAN NO</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>AADHAAR NO</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PHOTO</TableCell>
          <TableCell  sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>LIGHT BILL</TableCell>
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
