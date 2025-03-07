
import React from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button } from "@mui/material";
import { FaTrash } from "react-icons/fa";

const InventoryTable = ({ inventoryData, handleDelete }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
        
          <TableRow sx={{ background: "linear-gradient(180deg, #3621a9 0%,rgb(139, 115, 243) 100%)" }}>
            <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap"  }}>ACTION</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>TIMESTAMP</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap"  }}>PROJECT NAME</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>WING</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FLOOR</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>FLAT NO.</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>RERA CARPET AREA (Sq Mtr)</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap"  }}>RERA CARPET AREA (Sq Ft)</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>TOTAL SALEABLE AREA (Sq. Fts)</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>SALEABLE RATIO</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>UNIT TYPE</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>CONFIGURATION</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>STATUS</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>OWNERSHIP</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>ATT. TERRACE CARPET AREA</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>BALCONY AREA/SITOUT CARPET AREA</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PORCH AREA</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>TOP TERRACE CARPET AREA</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>SUPER BUILTUP AREA</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>OPEN/ENCLOSED BALCONY AS SANCTIONED</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap" }}>PODIUM GARDE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventoryData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <Button color="error" onClick={() => handleDelete(index)}>
                  <FaTrash />
                </Button>
              </TableCell>
              <TableCell>{item.timestamp}</TableCell>
              <TableCell>{item.projectName}</TableCell>
              <TableCell>{item.wing}</TableCell>
              <TableCell>{item.floor}</TableCell>
              <TableCell>{item.flatNo}</TableCell>
              <TableCell>{item.reraCarpetSqMtr}</TableCell>
              <TableCell>{item.reraCarpetSqFt}</TableCell>
              <TableCell>{item.totalSaleableArea}</TableCell>
              <TableCell>{item.saleableRatio}</TableCell>
              <TableCell>{item.unitType}</TableCell>
              <TableCell>{item.configuration}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.ownership}</TableCell>
              <TableCell>{item.attTerraceArea}</TableCell>
              <TableCell>{item.balconyArea}</TableCell>
              <TableCell>{item.porchArea}</TableCell>
              <TableCell>{item.topTerraceArea}</TableCell>
              <TableCell>{item.superBuiltupArea}</TableCell>
              <TableCell>{item.openEnclosedBalcony}</TableCell>
              <TableCell>{item.podiumGarde}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InventoryTable;
