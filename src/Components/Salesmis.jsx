import React, { useState } from "react";
import {
    Button,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TextField,
  } from "@mui/material";
  import { FaEye } from "react-icons/fa";

const Salesmis = () => {
      const [isExpanded, setIsExpanded] = useState(false);
    const [selectedProject, setSelectedProject] = useState("");
    const [selectedWing, setSelectedWing] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
 
    const projects = [
        "Shubh Arambh", "Shubh Elara", "Infini", "Serenity", 
        "Prime", "PYB", "Onella Tower", "Aradhyam", "Stella"
      ];
    const wings = ["Wing 1", "Wing 2", "Wing 3", "Wing 4"];
  
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
      };

      const handleDownloadPDF = () => {
        const link = document.createElement("a");
        link.href = "/path/to/demand_letter.pdf"; 
        link.download = "Demand_Letter.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

   
  const data = [
    { id: 1, timestamp: "2025-03-01", project: "Shubh Arambh", wing: "Wing 1", floor: 5, flatNo: "501", reraCarpetAreaMtr: 100, reraCarpetAreaFt: 1076, totalSaleableArea: 1500, saleableToCarpetAreaRatio: 1.4, type: "Residential", config: "2 BHK", status: "Sold", owner: "John Doe", soldStatus: "Sold", buyerName: "John Doe", bookingDate: "2025-01-15", agreementValue: 5000000, amountReceived: 2000000, balance: 3000000, percentCollections: 40 },
    
  ];


  const totalPages = Math.ceil(data.length / rowsPerPage);

 


  const handlePagination = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

    return (
      <div className="p-4 border rounded-lg shadow-md w-96 bg-white ">
        <h2 className="fs-6  mb-4">Developer Module / Sales MIS</h2>
        
        <div className="d-flex space-x-5">
          <div className="w-1/2 m-3 ">
            <label className="block text-sm font-medium mb-1">Select Project:</label>
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">-- Select Project --</option>
              {projects.map((project, index) => (
                <option key={index} value={project}>{project}</option>
              ))}
            </select>
          </div>
          
          <div className="w-1/2 m-3">
            <label className="block text-sm font-medium mb-1">Select Wing:</label>
            <select
              value={selectedWing}
              onChange={(e) => setSelectedWing(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">-- Select Wing --</option>
              {wings.map((wing, index) => (
                <option key={index} value={wing}>{wing}</option>
              ))}
            </select>
          </div>

          
<Button
  onClick={handleDownloadPDF}
  variant="outlined"
  color="success"
  className="m-3"
  style={{ borderRadius: "20px", minWidth: "50px", padding: "6px 16px" }}
  startIcon={<FaEye size={20} color="#28a745" />}
>
  <span className="text-success">Download PDF</span>
</Button>


        </div>

        <TableContainer component={Paper} className="pt-2">
    <Table>
        <TableHead>
            <TableRow sx={{ bgcolor: "primary.main" }}>
                <TableCell  sx={{ color: "white", fontWeight: "bold" }}>TIMESTAMP</TableCell>
                <TableCell  sx={{ color: "white", fontWeight: "bold" }}>PROJECT NAME</TableCell>
                <TableCell  sx={{ color: "white", fontWeight: "bold" }}>WING</TableCell>
                <TableCell  sx={{ color: "white", fontWeight: "bold" }}>FLOOR</TableCell>
                <TableCell  sx={{ color: "white", fontWeight: "bold" }}>FLAT NO.</TableCell>
                <TableCell  sx={{ color: "white", fontWeight: "bold" }}>RERA CARPET AREA (SQ MTR)</TableCell>
                <TableCell  sx={{ color: "white", fontWeight: "bold" }}>RERA CARPET AREA (SQ FT)</TableCell>
                <TableCell  sx={{ color: "white", fontWeight: "bold" }}>TOTAL SALEABLE AREA (SQ. FTS)</TableCell>
                <TableCell  sx={{ color: "white", fontWeight: "bold" }}>SALEABLE TO CARPET AREA RATIO (SQ. FTS)</TableCell>
                <TableCell  sx={{ color: "white", fontWeight: "bold" }}>TYPE OF UNITS (RESIDENTIAL / COMMERCIAL)</TableCell>
                <TableCell  sx={{ color: "white", fontWeight: "bold" }}>CONFIG ( 2 BHK, 3 BHK, 4 BHK)</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>STATUS</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>CHOOSE OWNER</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>SOLD/UNSOLD</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>NAME OF THE BUYER</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>DATE OF BOOKING</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>AGREEMENT VALUE</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>AMOUNT RECEIVED</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>BALANCE</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>% COLLECTIONS</TableCell>
            </TableRow>
        </TableHead>
    </Table>
</TableContainer>



      {/* Pagination Section */}
      <div className="d-flex justify-content-between align-items-center">
        <Button style={{backgroundColor:"#800080"}} className="text-white mt-3" onClick={handlePagination} disabled={currentPage === 1}>Previous</Button>
        <Button style={{backgroundColor:"#800080"}} className='text-white mt-3' onClick={handlePagination} disabled={currentPage === totalPages}>Next</Button>
      </div>
      </div>
    );
  };


export default Salesmis;
