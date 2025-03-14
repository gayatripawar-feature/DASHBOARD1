

// import React, { useState } from "react";
// import {
//   Button,
//   TableContainer,
//   Paper,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
// } from "@mui/material";
// import { FaEye } from "react-icons/fa";

// const CostSheet = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleToggle = () => setIsExpanded(!isExpanded);

 
//   const data = [
//     {
//         reraCarpetArea: "",  // Add RERA Carpet Area
//         config: "   ",         // Add Config
//       },
//   ];

//   return (
//     <div className="cost-sheet">
      
//       <div className="d-flex align-items-center mb-3">
//         <Button
//           onClick={handleToggle}
//           variant="outlined"
//           color="success"
//           className="m-3"
//           style={{
//             borderRadius: "20px",
//             minWidth: isExpanded ? "auto" : "50px", 
//             padding: isExpanded ? "6px 16px" : "6px", 
//           }}
//           startIcon={<FaEye size={20} color="#28a745" />}
//         >
//           {isExpanded && <span className="text-success">Cost Sheet</span>}
//         </Button>
//       </div>

    

//  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
 
//   <h3 style={{ margin: 0 }}>Cost Information</h3>


//   <div>
   

// <Button variant="contained" sx={{ mr: 1, backgroundColor: "#6a0dad", color: "white", "&:hover": { backgroundColor: "#4b0082" } }}>
//   Previous
// </Button>

// <Button variant="contained" sx={{ mr: 1, backgroundColor: "#6a0dad", color: "white", "&:hover": { backgroundColor: "#4b0082" } }}>
//   Next
// </Button>


//     <span style={{ marginLeft: "10px" }}>Rows per Page:</span>
//     <select style={{ marginLeft: "5px", padding: "5px", borderRadius: "5px" }}>
//       <option>5</option>
//       <option>10</option>
//       <option>15</option>
//       <option>20</option>
//     </select>
//   </div>
// </div>
// <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
//   <Table sx={{ tableLayout: "auto", width: "100%" }}>
//     <TableHead>
//       <TableRow sx={{ bgcolor: "primary.main" }}>
//         {["RERA CARPET AREA (SQ FT)", "CONFIG (2 BHK, 3 BHK, 4 BHK)"].map((header, index) => (
//           <TableCell key={index} sx={{ color: "white", fontWeight: "bold" }}>
//             {header}
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>

//     <TableBody>
//       {data.map((row, index) => (
//         <TableRow key={index}>
//           <TableCell>{row.reraCarpetArea}</TableCell>
//           <TableCell>{row.config}</TableCell>
//         </TableRow>
//       ))}
//     </TableBody>
//   </Table>
// </TableContainer>


// <h3 className="pt-5">Developer Entries</h3>
//   <button className="bg-primary text-white ">Create Developer Info</button>
//     </div>
//   );
// };

// export default CostSheet;


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

const CostSheet = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleToggle = () => setIsExpanded(!isExpanded);
  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const data = [
    { reraCarpetArea: "1000", config: "2 BHK" },
    { reraCarpetArea: "1200", config: "3 BHK" },
  ];

  return (
    <div className="cost-sheet">
      
      {showForm ? (
        <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "10px", marginBottom: "20px" }}>
          <h3 className="text-center p-3">Developer Information Form</h3>
          <TextField type="number" fullWidth label="Carpet Area Rate for At the time Of Visit    " variant="outlined" sx={{ mb: 2 }} />
          <TextField type="number" fullWidth label="Carpet Area Rate for At the time Of Booking" variant="outlined" sx={{ mb: 2 }} />
          <TextField type="number" fullWidth label="Stamp Duty" variant="outlined" sx={{ mb: 2 }} />

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={handleCloseForm} variant="contained" color="error" sx={{ mr: 1 }}>
              Cancel
            </Button>
            <Button variant="contained" color="primary">Save</Button>
          </div>
        </div>
      ) : (
        <>
          {/* Expand/Collapse Button */}
          <div className="d-flex align-items-center mb-3">
            <Button
              onClick={handleToggle}
              variant="outlined"
              color="success"
              className="m-3"
              style={{
                borderRadius: "20px",
                minWidth: isExpanded ? "auto" : "50px",
                padding: isExpanded ? "6px 16px" : "6px",
              }}
              startIcon={<FaEye size={20} color="#28a745" />}
            >
              {isExpanded && <span className="text-success">Cost Sheet</span>}
            </Button>
          </div>

          {/* Cost Information Header & Pagination */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <h3 style={{ margin: 0 }}>Cost Information</h3>

            <div>
              <Button variant="contained" sx={{ mr: 1, backgroundColor: "#6a0dad", color: "white", "&:hover": { backgroundColor: "#4b0082" } }}>
                Previous
              </Button>

              <Button variant="contained" sx={{ mr: 1, backgroundColor: "#6a0dad", color: "white", "&:hover": { backgroundColor: "#4b0082" } }}>
                Next
              </Button>

              <span style={{ marginLeft: "10px" }}>Rows per Page:</span>
              <select style={{ marginLeft: "5px", padding: "5px", borderRadius: "5px" }}>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
              </select>
            </div>
          </div>

          {/* Table Display */}
          <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
            <Table sx={{ tableLayout: "auto", width: "100%" }}>
              <TableHead>
                <TableRow sx={{ bgcolor: "primary.main" }}>
                  {["RERA CARPET AREA (SQ FT)", "CONFIG (2 BHK, 3 BHK, 4 BHK)"].map((header, index) => (
                    <TableCell key={index} sx={{ color: "white", fontWeight: "bold" }}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.reraCarpetArea}</TableCell>
                    <TableCell>{row.config}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

  



<h3 className="pt-5">Developer Entries</h3>
<div className="button-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <Button 
    onClick={handleShowForm} 
    variant="contained" 
    // sx={{ backgroundColor: "blue", color: "white" }}
    className="bg-primary"
  >
   +  Create Developer Info
  </Button>

  <div className="right-buttons" style={{ display: 'flex', alignItems: 'center' }}>
    <Button 
      variant="contained" 
      color="secondary" 
      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
    >
      Previous
    </Button>
    <Button 
      variant="contained" 
      color="secondary" 
      onClick={() => setCurrentPage(prev => prev + 1)}
    >
      Next
    </Button>
    
    {/* Rows per Page Dropdown */}
    <div style={{ marginLeft: '20px' }}>
        Rows Per Page:
      <select 
        value={rowsPerPage} 
        onChange={(e) => setRowsPerPage(e.target.value)} 
        style={{ padding: '8px' }}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
    </div>
  </div>
</div>




{/* Table Container */}
<TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          {/* Table Header */}
          <TableHead>
            <TableRow sx={{ bgcolor: "primary.main" }}>
              <TableCell  sx={{ color: "white", fontWeight: "bold" }}>TIMESTAMP</TableCell>
              <TableCell  sx={{ color: "white", fontWeight: "bold" }}>VISIT RATE</TableCell>
              <TableCell  sx={{ color: "white", fontWeight: "bold" }}>BOOKING RATE</TableCell>
              <TableCell  sx={{ color: "white", fontWeight: "bold" }}>STAMP DUTY</TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.timestamp}</TableCell>
                <TableCell>{row.visitRate}</TableCell>
                <TableCell>{row.bookingRate}</TableCell>
                <TableCell>{row.stampDuty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


        </>
      )}
    </div>
  );
};

export default CostSheet;



