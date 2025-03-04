import React from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";

const DisplayTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: "primary.main" }}>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>ACTION</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>FIRM NAME</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>TIMESTAMP</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>PROJECT NAME</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>PROJECT ADDRESS</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>OLD SURVEY NUMBER</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>NEW SURVEY NUMBER</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>VILLAGE</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>TALUKA</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>DISTRICT</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>SANCTION AUTHORITY</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>EAST</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>WEST</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>NORTH</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>SOUTH</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>LATITUDE</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>LONGITUDE</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>LANDMARK</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>PHASE NO</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>WING NO</TableCell>
            <TableCell  sx={{ color: "white", fontWeight: "bold" }}>MAHARERA NO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.action}</TableCell>
              <TableCell>{item.firmName}</TableCell>
              <TableCell>{item.timestamp}</TableCell>
              <TableCell>{item.projectName}</TableCell>
              <TableCell>{item.projectAddress}</TableCell>
              <TableCell>{item.oldSurveyNumber}</TableCell>
              <TableCell>{item.newSurveyNumber}</TableCell>
              <TableCell>{item.village}</TableCell>
              <TableCell>{item.taluka}</TableCell>
              <TableCell>{item.district}</TableCell>
              <TableCell>{item.sanctionAuthority}</TableCell>
              <TableCell>{item.east}</TableCell>
              <TableCell>{item.west}</TableCell>
              <TableCell>{item.north}</TableCell>
              <TableCell>{item.south}</TableCell>
              <TableCell>{item.latitude}</TableCell>
              <TableCell>{item.longitude}</TableCell>
              <TableCell>{item.landmark}</TableCell>
              <TableCell>{item.phaseNo}</TableCell>
              <TableCell>{item.wingNo}</TableCell>
              <TableCell>{item.mahareraNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DisplayTable;
