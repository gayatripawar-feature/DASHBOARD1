






import React, { useState, useRef , useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Grid, MenuItem } from '@mui/material';
import { FaEye, FaFileCsv, FaUpload, FaPlus, FaTrash } from "react-icons/fa";
import { Inventory } from '@mui/icons-material';
import InventoryTable from './InventoryTable';
// import { toast } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";



// API Call Function
const fetchLoansData = async () => {
  const response = await fetch('/api/getOCRCollection');
  return response.json();
};

// Dropdown Options
const statusOptions = ["Approved", "Unapproved"];
const owners = ["Landowner", "Developer", "Investor"];
const configurations = ["1 BHK", "1.5 BHK", "2 BHK", "2.5 BHK", "3 BHK", "3.5 BHK", "4 BHK", "4.5 BHK", "Flat", "Shop"];
const unitTypes = ["Residential", "Commercial"];


// Sidebar Sections
const sections = [
  { label: "Display Inventory", icon: <FaEye size={20} /> },
  { label: "Sample CSV", icon: <FaFileCsv size={20}/> },
  { label: "Upload Excel", icon: <FaUpload size={20}/> },
];

const ProjectInventory = () => {
  const [loans, setLoans] = useState([]);
  const [expandedSection, setExpandedSection] = useState(0);
  const [showFirmForm, setShowFirmForm] = useState(false);
  const [partners, setPartners] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [showFileInput, setShowFileInput] = useState(false);
  useEffect(() => {
    loadLoansData();
  }, []);

  const fileInputRef = useRef(null);


  const loadLoansData = async () => {
    const data = await fetchLoansData();
    setLoans(data);
  };

  

  const handleToggleSection = (index) => {
    if (index === 1) {
      // Download Sample CSV
      downloadSampleCsv();
    } else if (index === 2) {
      // Check if file input ref is defined before clicking
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    } else {
      setExpandedSection(index);
      setShowFileInput(false);
    }
  };
  
  
  const [inventoryData, setInventoryData] = useState([
    {
     
    },
    {
     
    },
  ]);

  // ✅ Function to handle deletion of a row
  const handleDelete = (index) => {
    setInventoryData(inventoryData.filter((_, i) => i !== index));
  };


  const downloadSampleCsv = () => {
    const sampleData = "Name,Email,Phone\nJohn Doe,john@example.com,1234567890";
    const blob = new Blob([sampleData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "sample.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

 
  return (
    <div className="main-content">
      <h6>Dashboard / Developer Module / Project Inventory</h6>

      {/* Sidebar Navigation */}
      <div className="d-flex align-items-center mb-3">
       


<div className="d-flex align-items-center mb-3">
  {sections.map((section, index) => (
    <Button
      key={index}
      onClick={() => handleToggleSection(index)}
      variant="outlined"
      color="primary"
      className="m-3"
      sx={{
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        '&:hover': { backgroundColor: '#9b4dca', color: '#fff' },
        borderColor: '#9b4dca',
        color: '#9b4dca',
      }}
      startIcon={expandedSection === index ? section.icon : <FaEye size={20} color="#9b4dca" />}
    >
      {expandedSection === index ? section.label : null} 
    </Button>
  ))}
</div>

{/* File Upload Input */}
{showFileInput && (
  <div className="m-3">
    <input type="file" accept=".csv, .xlsx" />
  </div>
)}

 {/* Hidden file input element */}
 <input
        type="file"
        accept=".csv, .xlsx"
        ref={fileInputRef}
        style={{ display: 'none' }} // Hidden input element
        onChange={(e) => {
          console.log('File selected:', e.target.files[0]);
        }}
      />



      </div>

      {/* Display Inventory Section */}
      {expandedSection === 0 && (
        <div className="content-container mt-3">
          {!showFirmForm ? (
            <>
              <div className="button-container">
                <Button variant="contained" color="primary" style={{ background: '#272ba8' }} onClick={() => setShowFirmForm(true)}>
                  + Inventory Info
                </Button>
                {/* Pagination Buttons */}
                <div className="right-buttons">
                  <Button variant="contained" color="secondary"  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
                    Previous
                  </Button>
                  <Button variant="contained" color="secondary"  onClick={() => setCurrentPage(prev => prev + 1)}>
                    Next
                  </Button>
                </div>
              </div>
              <div className="mt-3">
              <InventoryTable inventoryData={inventoryData} handleDelete={handleDelete} />
           </div>
            </>
          ) : (
            <div className="firm-form mt-4 p-3 border rounded" 
            style={{
              maxHeight: "500px",
              overflowY: "auto",
              backgroundColor: "#f8f9fa", 
              border: "1px solid #ccc", 
            }}
            >
              
              <Grid container spacing={2}>
                <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
                <Grid item xs={4}><TextField label="Wing" fullWidth /></Grid>
                <Grid item xs={4}><TextField label="Floor" fullWidth /></Grid>
                <Grid item xs={4}><TextField label="Flat No." fullWidth /></Grid>
                <Grid item xs={4}><TextField type="number" label="RERA Carpet Area (Sq Mtr)" fullWidth 
                inputProps={{ step: "0.01", min: "0.01" }}
                /></Grid>
                <Grid item xs={4}><TextField type="number" label="RERA Carpet Area (Sq Ft)" fullWidth inputProps={{ step: "0.01", min: "0.01" }}
                /></Grid>
                <Grid item xs={4}><TextField  type="number" label="Total Saleable Area (Sq. Fts)" fullWidth inputProps={{ step: "0.01", min: "0.01" }}
                /></Grid>
                <Grid item xs={4}><TextField  type="number" label="Saleable to Carpet Area Ratio (Sq. Fts)" fullWidth inputProps={{ step: "0.01", min: "0.01" }}/></Grid>

                {/* Type of Units Dropdown */}
                <Grid item xs={4}>
                  <TextField select label="Type of Units" fullWidth>
                    {unitTypes.map((type, idx) => (
                      <MenuItem key={idx} value={type}>{type}</MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Configuration Dropdown */}
                <Grid item xs={4}>
                  <TextField select label="Configuration" fullWidth>
                    {configurations.map((config, idx) => (
                      <MenuItem key={idx} value={config}>{config}</MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Status Dropdown */}
                <Grid item xs={4}>
                  <TextField select label="Status" fullWidth>
                    {statusOptions.map((status, idx) => (
                      <MenuItem key={idx} value={status}>{status}</MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Select Owner Dropdown */}
                <Grid item xs={4}>
                  <TextField select label="Select Owner" fullWidth>
                    {owners.map((owner, idx) => (
                      <MenuItem key={idx} value={owner}>{owner}</MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* <Grid item xs={4}><TextField type="number" label="ATT. Terrace Carpet Area (Sq Ft)" fullWidth /></Grid> */}
                <Grid item xs={4}>
  <TextField
    type="number"
    label="ATT. Terrace Carpet Area (Sq Ft)"
    fullWidth
    inputProps={{ step: "0.01", min: "0.01" }}
  />
</Grid>

                <Grid item xs={4}><TextField type="number" label="Balcony Area/Sitout Carpet Area (Sq Ft)" fullWidth 
                inputProps={{ step: "0.01", min: "0.01" }}/></Grid>
                <Grid item xs={4}><TextField type="number" label="Porch Area (Sq Ft)" fullWidth 
                inputProps={{ step: "0.01", min: "0.01" }}/></Grid>
                <Grid item xs={4}><TextField  type="number" label="Top Terrace Carpet Area (Sq Ft)" fullWidth inputProps={{ step: "0.01", min: "0.01" }}
                /></Grid>
                <Grid item xs={4}><TextField type="number" label="Super Built-up Area (Sq Ft)" fullWidth inputProps={{ step: "0.01", min: "0.01" }}
                /></Grid>
                <Grid item xs={4}><TextField label="OPEN/ENCLOSED BALCONY AS SANCTIONED" fullWidth /></Grid>
                <Grid item xs={4}><TextField label="PODIUM GARDE" fullWidth /></Grid>
              </Grid>

              {/* Partner Details */}
           
              {partners.map((_, index) => (
                <Grid container spacing={2} key={index}>
                  <Grid item xs={4}><TextField label="Name" fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="Age" fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="Occupation" fullWidth /></Grid>
                  <Grid item xs={4}>
                    <Button variant="contained" color="secondary" onClick={() => setPartners(partners.filter((_, i) => i !== index))}>
                      <FaTrash />
                    </Button>
                  </Grid>
                </Grid>
              ))}

             

          

<Button
  variant="contained"
  className="mt-3"
  color="success"
  onClick={() => {
    setShowFirmForm(false);
    toast.success("Firm details are submitted!", { position: "top-right", autoClose: 3000 });
  }}
>
  Submit
</Button>


            </div> 




          )}
        </div>
      )}

{expandedSection === 1 && (
        <div className="content-container mt-3">
          {!showFirmForm ? (
            <>
              <div className="button-container">
                <Button variant="contained" color="primary" onClick={() => setShowFirmForm(true)}>
                  + Inventory Info
                </Button>
                {/* Pagination Buttons */}
                <div className="right-buttons">
                  <Button variant="contained" color="secondary" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
                    Previous
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => setCurrentPage(prev => prev + 1)}>
                    Next
                  </Button>
                </div>
              </div>
              <div className="mt-3">
              <InventoryTable inventoryData={inventoryData} handleDelete={handleDelete} />
           </div>
            </>
          ) : (
            <div className="firm-form mt-4 p-3 border rounded" 
            style={{
              backgroundColor: "#f8f9fa", // Light background for contrast
              border: "1px solid #ccc", // Light gray border for separation
            }}
            >
              {/* <h5></h5> */}
              <Grid container spacing={2}>
                <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
                <Grid item xs={4}><TextField label="Wing" fullWidth /></Grid>
                <Grid item xs={4}><TextField label="Floor" fullWidth /></Grid>
                <Grid item xs={4}><TextField label="Flat No." fullWidth /></Grid>
                <Grid item xs={4}><TextField type="number" label="RERA Carpet Area (Sq Mtr)" fullWidth 
                inputProps={{ step: "0.01", min: "0.01" }}
                /></Grid>
                <Grid item xs={4}><TextField type="number" label="RERA Carpet Area (Sq Ft)" fullWidth inputProps={{ step: "0.01", min: "0.01" }}
                /></Grid>
                <Grid item xs={4}><TextField  type="number" label="Total Saleable Area (Sq. Fts)" fullWidth inputProps={{ step: "0.01", min: "0.01" }}
                /></Grid>
                <Grid item xs={4}><TextField  type="number" label="Saleable to Carpet Area Ratio (Sq. Fts)" fullWidth inputProps={{ step: "0.01", min: "0.01" }}/></Grid>

                {/* Type of Units Dropdown */}
                <Grid item xs={4}>
                  <TextField select label="Type of Units" fullWidth>
                    {unitTypes.map((type, idx) => (
                      <MenuItem key={idx} value={type}>{type}</MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Configuration Dropdown */}
                <Grid item xs={4}>
                  <TextField select label="Configuration" fullWidth>
                    {configurations.map((config, idx) => (
                      <MenuItem key={idx} value={config}>{config}</MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Status Dropdown */}
                <Grid item xs={4}>
                  <TextField select label="Status" fullWidth>
                    {statusOptions.map((status, idx) => (
                      <MenuItem key={idx} value={status}>{status}</MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Select Owner Dropdown */}
                <Grid item xs={4}>
                  <TextField select label="Select Owner" fullWidth>
                    {owners.map((owner, idx) => (
                      <MenuItem key={idx} value={owner}>{owner}</MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* <Grid item xs={4}><TextField type="number" label="ATT. Terrace Carpet Area (Sq Ft)" fullWidth /></Grid> */}
                <Grid item xs={4}>
  <TextField
    type="number"
    label="ATT. Terrace Carpet Area (Sq Ft)"
    fullWidth
    inputProps={{ step: "0.01", min: "0.01" }}
  />
</Grid>

                <Grid item xs={4}><TextField type="number" label="Balcony Area/Sitout Carpet Area (Sq Ft)" fullWidth 
                inputProps={{ step: "0.01", min: "0.01" }}/></Grid>
                <Grid item xs={4}><TextField type="number" label="Porch Area (Sq Ft)" fullWidth 
                inputProps={{ step: "0.01", min: "0.01" }}/></Grid>
                <Grid item xs={4}><TextField  type="number" label="Top Terrace Carpet Area (Sq Ft)" fullWidth inputProps={{ step: "0.01", min: "0.01" }}
                /></Grid>
                <Grid item xs={4}><TextField type="number" label="Super Built-up Area (Sq Ft)" fullWidth inputProps={{ step: "0.01", min: "0.01" }}
                /></Grid>
                <Grid item xs={4}><TextField label="OPEN/ENCLOSED BALCONY AS SANCTIONED" fullWidth /></Grid>
                <Grid item xs={4}><TextField label="PODIUM GARDE" fullWidth /></Grid>
              </Grid>

              {/* Partner Details */}
           
              {partners.map((_, index) => (
                <Grid container spacing={2} key={index}>
                  <Grid item xs={4}><TextField label="Name" fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="Age" fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="Occupation" fullWidth /></Grid>
                  <Grid item xs={4}>
                    <Button variant="contained" color="secondary" onClick={() => setPartners(partners.filter((_, i) => i !== index))}>
                      <FaTrash />
                    </Button>
                  </Grid>
                </Grid>
              ))}

             

              <Button variant="contained" className="mt-3" color="success" onClick={() => setShowFirmForm(false)}>
                Submit
              </Button>
             

            </div> 




          )}
        </div>
      )}


{expandedSection === 2 && (
        <div className="content-container mt-3">
          {!showFirmForm ? (
            <>
              <div className="button-container">
                <Button variant="contained" color="primary" onClick={() => setShowFirmForm(true)}>
                  + Display Inventory
                </Button>
                {/* Pagination Buttons */}
                <div className="right-buttons">
                  <Button variant="contained" color="secondary" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
                    Previous
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => setCurrentPage(prev => prev + 1)}>
                    Next
                  </Button>
                </div>
              </div>
              <div className="mt-3">
              <InventoryTable inventoryData={inventoryData} handleDelete={handleDelete} />
           </div>
            </>
          ) : (
            <div className="firm-form mt-4 p-3 border rounded">
              {/* <h5></h5> */}
              <Grid container spacing={2}>
                <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
                <Grid item xs={4}><TextField label="Wing" fullWidth /></Grid>
                <Grid item xs={4}><TextField label="Floor" fullWidth /></Grid>
                <Grid item xs={4}><TextField label="Flat No." fullWidth /></Grid>
                <Grid item xs={4}><TextField type="number" label="RERA Carpet Area (Sq Mtr)" fullWidth 
                inputProps={{ step: "0.01", min: "0.01" }}
                /></Grid>
                <Grid item xs={4}><TextField type="number" label="RERA Carpet Area (Sq Ft)" fullWidth inputProps={{ step: "0.01", min: "0.01" }}
                /></Grid>
                <Grid item xs={4}><TextField  type="number" label="Total Saleable Area (Sq. Fts)" fullWidth inputProps={{ step: "0.01", min: "0.01" }}
                /></Grid>
                <Grid item xs={4}><TextField  type="number" label="Saleable to Carpet Area Ratio (Sq. Fts)" fullWidth inputProps={{ step: "0.01", min: "0.01" }}/></Grid>

                {/* Type of Units Dropdown */}
                <Grid item xs={4}>
                  <TextField select label="Type of Units" fullWidth>
                    {unitTypes.map((type, idx) => (
                      <MenuItem key={idx} value={type}>{type}</MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Configuration Dropdown */}
                <Grid item xs={4}>
                  <TextField select label="Configuration" fullWidth>
                    {configurations.map((config, idx) => (
                      <MenuItem key={idx} value={config}>{config}</MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Status Dropdown */}
                <Grid item xs={4}>
                  <TextField select label="Status" fullWidth>
                    {statusOptions.map((status, idx) => (
                      <MenuItem key={idx} value={status}>{status}</MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Select Owner Dropdown */}
                <Grid item xs={4}>
                  <TextField select label="Select Owner" fullWidth>
                    {owners.map((owner, idx) => (
                      <MenuItem key={idx} value={owner}>{owner}</MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* <Grid item xs={4}><TextField type="number" label="ATT. Terrace Carpet Area (Sq Ft)" fullWidth /></Grid> */}
                <Grid item xs={4}>
  <TextField
    type="number"
    label="ATT. Terrace Carpet Area (Sq Ft)"
    fullWidth
    inputProps={{ step: "0.01", min: "0.01" }}
  />
</Grid>

                <Grid item xs={4}><TextField type="number" label="Balcony Area/Sitout Carpet Area (Sq Ft)" fullWidth 
                inputProps={{ step: "0.01", min: "0.01" }}/></Grid>
                <Grid item xs={4}><TextField type="number" label="Porch Area (Sq Ft)" fullWidth 
                inputProps={{ step: "0.01", min: "0.01" }}/></Grid>
                <Grid item xs={4}><TextField  type="number" label="Top Terrace Carpet Area (Sq Ft)" fullWidth inputProps={{ step: "0.01", min: "0.01" }}
                /></Grid>
                <Grid item xs={4}><TextField type="number" label="Super Built-up Area (Sq Ft)" fullWidth inputProps={{ step: "0.01", min: "0.01" }}
                /></Grid>
                <Grid item xs={4}><TextField label="OPEN/ENCLOSED BALCONY AS SANCTIONED" fullWidth /></Grid>
                <Grid item xs={4}><TextField label="PODIUM GARDE" fullWidth /></Grid>
              </Grid>

              {/* Partner Details */}
           
              {partners.map((_, index) => (
                <Grid container spacing={2} key={index}>
                  <Grid item xs={4}><TextField label="Name" fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="Age" fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="Occupation" fullWidth /></Grid>
                  <Grid item xs={4}>
                    <Button variant="contained" color="secondary" onClick={() => setPartners(partners.filter((_, i) => i !== index))}>
                      <FaTrash />
                    </Button>
                  </Grid>
                </Grid>
              ))}

             

              <Button variant="contained" className="mt-3" color="success" onClick={() => setShowFirmForm(false)}>
                Submit
              </Button>
            </div> 




          )}
        </div>
      )}
    </div>
  );
};

export default ProjectInventory;
