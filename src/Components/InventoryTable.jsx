// import { Table, TableHead, TableBody, TableRow, TableCell, Button } from "@mui/material";
// import { FaTrash } from "react-icons/fa";

// const InventoryTable = ({ inventoryData, handleDelete }) => {
//   return (
//     <Table className="mt-4" border={1}>
//       <TableHead>
//         <TableRow>
//           <TableCell><strong>ACTION</strong></TableCell>
//           <TableCell><strong>TIMESTAMP</strong></TableCell>
//           <TableCell><strong>PROJECT NAME</strong></TableCell>
//           <TableCell><strong>WING</strong></TableCell>
//           <TableCell><strong>FLOOR</strong></TableCell>
//           <TableCell><strong>FLAT NO.</strong></TableCell>
//           <TableCell><strong>RERA CARPET AREA (Sq Mtr)</strong></TableCell>
//           <TableCell><strong>RERA CARPET AREA (Sq Ft)</strong></TableCell>
//           <TableCell><strong>TOTAL SALEABLE AREA (Sq. Fts)</strong></TableCell>
//           <TableCell><strong>SALEABLE RATIO</strong></TableCell>
//           <TableCell><strong>UNIT TYPE</strong></TableCell>
//           <TableCell><strong>CONFIGURATION</strong></TableCell>
//           <TableCell><strong>STATUS</strong></TableCell>
//           <TableCell><strong>OWNERSHIP</strong></TableCell>
//           <TableCell><strong>ATT. TERRACE CARPET AREA</strong></TableCell>
//           <TableCell><strong>BALCONY AREA/SITOUT CARPET AREA</strong></TableCell>
//           <TableCell><strong>PORCH AREA</strong></TableCell>
//           <TableCell><strong>TOP TERRACE CARPET AREA</strong></TableCell>
//           <TableCell><strong>SUPER BUILTUP AREA</strong></TableCell>
//           <TableCell><strong>OPEN/ENCLOSED BALCONY AS SANCTIONED</strong></TableCell>
//           <TableCell><strong>PODIUM GARDE</strong></TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {inventoryData.map((item, index) => (
//           <TableRow key={index}>
//             <TableCell>
//               <Button color="error" onClick={() => handleDelete(index)}>
//                 <FaTrash />
//               </Button>
//             </TableCell>
//             <TableCell>{item.timestamp}</TableCell>
//             <TableCell>{item.projectName}</TableCell>
//             <TableCell>{item.wing}</TableCell>
//             <TableCell>{item.floor}</TableCell>
//             <TableCell>{item.flatNo}</TableCell>
//             <TableCell>{item.reraCarpetSqMtr}</TableCell>
//             <TableCell>{item.reraCarpetSqFt}</TableCell>
//             <TableCell>{item.totalSaleableArea}</TableCell>
//             <TableCell>{item.saleableRatio}</TableCell>
//             <TableCell>{item.unitType}</TableCell>
//             <TableCell>{item.configuration}</TableCell>
//             <TableCell>{item.status}</TableCell>
//             <TableCell>{item.ownership}</TableCell>
//             <TableCell>{item.attTerraceArea}</TableCell>
//             <TableCell>{item.balconyArea}</TableCell>
//             <TableCell>{item.porchArea}</TableCell>
//             <TableCell>{item.topTerraceArea}</TableCell>
//             <TableCell>{item.superBuiltupArea}</TableCell>
//             <TableCell>{item.openEnclosedBalcony}</TableCell>
//             <TableCell>{item.podiumGarde}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// };

// export default InventoryTable;
import React from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button } from "@mui/material";
import { FaTrash } from "react-icons/fa";

const InventoryTable = ({ inventoryData, handleDelete }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: "primary.main" }}>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>ACTION</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>TIMESTAMP</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>PROJECT NAME</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>WING</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>FLOOR</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>FLAT NO.</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>RERA CARPET AREA (Sq Mtr)</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>RERA CARPET AREA (Sq Ft)</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>TOTAL SALEABLE AREA (Sq. Fts)</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>SALEABLE RATIO</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>UNIT TYPE</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>CONFIGURATION</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>STATUS</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>OWNERSHIP</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>ATT. TERRACE CARPET AREA</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>BALCONY AREA/SITOUT CARPET AREA</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>PORCH AREA</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>TOP TERRACE CARPET AREA</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>SUPER BUILTUP AREA</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>OPEN/ENCLOSED BALCONY AS SANCTIONED</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>PODIUM GARDE</TableCell>
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
