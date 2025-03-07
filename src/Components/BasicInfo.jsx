

import React, { useState, useEffect } from 'react';
import {Input, Table, TableBody, TableCell, TableContainer, Typography,IconButton,TableHead, TableRow, Paper,Box,Tabs, Tab, Button, TextField, Grid } from '@mui/material';
import { FaEye, FaBuilding, FaFileDownload, FaPlus, FaTrash,FaUpload } from "react-icons/fa";
import FirmTable from './FirmTable';
import DisplayTable from "./DisplayTable";
import LandownerTable from "./LandownerTable";
import FlatAllotment from './FlatAllotement';
import { toast } from "react-toastify";

const fetchLoansData = async () => {
  const response = await fetch('/api/getOCRCollection');
  return response.json();
};

const sections = [
  { label: "Firm Display", icon: <FaBuilding size={20} />, createLabel: "Create Firm" },
  { label: "Project Display", icon: <FaBuilding size={20} />, createLabel: "Create Project" },
  { label: "LandOwner Display", icon: <FaBuilding size={20} />, createLabel: "Create Landowner Info" },
  { label: "Flat Allotement Display", icon: <FaBuilding size={20} />, createLabel: "Create Flat Allotment Info" },
  { label: "Download PDF", icon: <FaFileDownload size={20} />, createLabel: "" }
];




const tabNames = [ "firm", "display", "landowner","allotement"]; 
  
const BasicInfo = () => {
  const [loans, setLoans] = useState([]);
  const [expandedSection, setExpandedSection] = useState(0); // Ensure expandedSection is defined here
  const [showFirmForm, setShowFirmForm] = useState(false);
  // const [partners, setPartners] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [phases, setPhases] = useState([]);
  const [showLandownerForm, setShowLandownerForm] = useState(false); 
  const [showFlatForm, setShowFlatForm] = useState(false); 
  const [selectedTab, setSelectedTab] = useState("firm");
  const [projectData, setProjectData] = useState([]);
  const[FlatAllotement , setFlatAllotement] = useState([false]);
  
  const [Flatdata, setFlatdata] = useState([]);

  const [partners, setPartners] = useState([
    { name: "", age: "", occupation: "", mobile: "", email: "", address: "", pan: "", aadhaar: "" }
  ]);
  
  useEffect(() => {
    console.log("Updated Selected Tab:", selectedTab);
    loadLoansData();
  }, []);

  const loadLoansData = async () => {
    const data = await fetchLoansData();
    setLoans(data);
  };


const handleTabClick = (index) => {
    console.log("Clicked Section Index:", index);
    console.log("Selected Tab Before Update:", selectedTab);
    setSelectedTab(tabNames[index]); 
};

  const handleTabChange = (_, newValue) => {
    setSelectedTab(newValue);
  };


  const handleToggleSection = (index) => {
    if (sections[index].label === "Download PDF") {
      handleDownloadPDF();
      return;
    }
    console.log("Clicked Section Index:", index);
    console.log("Selected Tab Before Update:", selectedTab);
    setExpandedSection(index);  

      // Set selected tab dynamically based on the section clicked
  if (sections[index].label === "Project Display") {
    setSelectedTab("display");
  } else if (sections[index].label === "Firm Display") {
    setSelectedTab("firm");
  } else if (sections[index].label === "LandOwner Display") {
    setSelectedTab("landowner");
  } else if (sections[index].label === "Flat Allotement Display") {
    setSelectedTab("allotement");
  }


  
    setShowFirmForm(false);
    setShowProjectForm(false); 
    setShowLandownerForm(false); 
    // setFlatAllotement(false);
    setShowFlatForm(false);
  };

  const [newPhase, setNewPhase] = useState({
    phaseNo: '',
    wingNo: '',
    mahareraNo: ''
  });

  
   {/* Table Section */}
   {selectedTab === "firm" && <FirmTable />}
   {selectedTab === "display" && <DisplayTable />}
   {selectedTab === "landowner" && <LandownerTable />}
   {selectedTab === "allotement" && <FlatAllotement/>}

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/path/to/demand_letter.pdf";
    link.download = "Demand_Letter.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddPartner = () => {
    setPartners([...partners, { name: "", age: "", occupation: "", mobile: "", email: "", address: "", pan: "", aadhaar: "" }]);
  };

  const handleRemovePartner = (index) => {
    setPartners(partners.filter((_, i) => i !== index));
  };

  const handleAddPhase = () => {
    setPhases([...phases, { phaseNo: "", wingNo: "", mahareraNo: "" }]); // Add default empty phase
  };

  const handleRemovePhase = (index) => {
    setPhases(phases.filter((_, i) => i !== index));
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleCreateFirm = () => {
    setShowFirmForm(false);
    setShowProjectForm(false);
  };

  const handleCreateProject = () => {
    setShowProjectForm(true);
  };


  return (
    <div className="main-content">
      <h6>Developer Module / Basic Information Management</h6>
     
   
 
    


      <div className="d-flex align-items-center mb-3">
        {sections.map((section, index) => (
          <Button
            key={index}
            onClick={() => handleToggleSection(index)}
            variant="outlined"
            color="success"
            className='m-3'
            style={{ borderRadius: '20px' }}
            startIcon={<FaEye size={20} color="#28a745" />}
          >
            {expandedSection === index ? section.label : null}
          </Button>
        ))}
      </div>

      {expandedSection === 0 &&  selectedTab === "firm" && (
        <div className="content-container mt-3">
          {!showFirmForm ? (
            <>
            <div className='button-container'>
            <Button variant="contained" color="primary" onClick={() => setShowFirmForm(true)}>
              + Create Firm
            </Button>

            
 {/* Previous and Next buttons on the right */}
 <div className="right-buttons">
      <Button variant="contained" color="secondary" onClick={handlePrevious}>
        Previous
      </Button>
      <Button variant="contained" color="secondary" onClick={handleNext}>
        Next
      </Button>
    </div>
</div>

             <div className="mt-3">
             {/* <FirmTable /> */}
             <FirmTable firms={loans} />
           </div>
           </>
          ) : (
   




<div className="firm-form mt-4 p-3" style={{ maxHeight: "500px", overflowY: "auto", paddingRight: "10px" }}>
      <Paper className="p-4" elevation={4} style={{ borderRadius: "12px", paddingBottom: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Firm Details
        </Typography>

        <Grid container spacing={2}>
          {["Firm Name", "Firm Address", "Firm PAN No", "Firm GST No"].map((label, index) => (
            <Grid item xs={6} key={index}>
              <TextField label={label} fullWidth variant="outlined" />
            </Grid>
          ))}

          {["Firm PAN No Document", "Firm GST No Document", "Firm Light Bill for Address Proof"].map((label, index) => (
            <Grid item xs={6} key={index}>
              <Typography variant="body2" gutterBottom>
                {label}
              </Typography>
              <label>
                <Input type="file" style={{ display: "none" }} />
                <IconButton color="primary" component="span">
                  <FaUpload />
                </IconButton>
              </label>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5" className="mt-4" gutterBottom>
          Partner Details
        </Typography>

        {partners.map((partner, index) => (
          <Paper key={index} className="p-3 mb-3" elevation={2} style={{ borderRadius: "10px" }}>
            <Grid container spacing={2}>
              {["Name", "Age", "Occupation", "Mobile No.", "Mail ID", "Residential Address", "PAN No.", "Aadhaar No."].map(
                (label, i) => (
                  <Grid item xs={6} key={i}>
                    <TextField label={label} fullWidth variant="outlined" />
                  </Grid>
                )
              )}

              {[
                "Residential Address Document",
                "PAN No Document",
                "Aadhaar No Document",
                "Photo Document",
                "Light Bill for Address Proof",
              ].map((label, i) => (
                <Grid item xs={6} key={i}>
                  <Typography variant="body2" gutterBottom>
                    {label}
                  </Typography>
                  <label>
                    <Input type="file" style={{ display: "none" }} />
                    <IconButton color="primary" component="span">
                      <FaUpload />
                    </IconButton>
                  </label>
                </Grid>
              ))}

              {partners.length > 1 && (
                <Grid item xs={12} className="text-right">
                  <Button variant="contained" color="error" onClick={() => handleRemovePartner(index)}>
                    <FaTrash /> Remove Partner
                  </Button>
                </Grid>
              )}
            </Grid>
          </Paper>
        ))}

        <Button className="m-3 m-2" variant="contained" color="primary" onClick={handleAddPartner}>
          <FaPlus /> Add Partner
        </Button>

      
            <Button
  variant="contained"
  className="m-3"
  color="success"
  onClick={() => {
    setShowFirmForm(false);
    toast.success(" details are submitted!", { position: "top-right", autoClose: 3000 });
  }}
>
  Submit
</Button>
      </Paper>
    </div>
          )}


         
        </div>
      )}

     



{expandedSection === 1 && selectedTab === "display" && (
  <div className="content-container mt-3">
   
    {!showProjectForm ? (
       <>
      
<div className='button-container'>
<Button variant="contained" color="primary" onClick={() => {
   console.log("Before:", showProjectForm);
   setShowProjectForm(true);
   console.log("After:", showProjectForm);
}}>
+ Create Project
</Button>


 <div className="right-buttons">
      <Button variant="contained" color="secondary" onClick={handlePrevious}>
        Previous
      </Button>
      <Button variant="contained" color="secondary" onClick={handleNext}>
        Next
      </Button>
    </div>
    </div>

<div className='mt-3'>
<DisplayTable data={projectData} />
</div>
   </>
    ) : (
     


      <div
  className="project-form mt-4 p-3"
  style={{
    maxHeight: "500px", 
    overflowY: "auto",
    paddingRight: "10px",
  }}
>
  <Paper className="p-4" elevation={4} style={{ borderRadius: "12px", paddingBottom: "20px" }}>
    <Typography variant="h5" gutterBottom>
      Project Details
    </Typography>

    <Grid container spacing={2}>
      {[
        "FIRM Name",
        "Project Name",
        "Project Address",
        "Old Survey Number",
        "New Survey Number",
        "Village",
        "Taluka",
        "District",
        "Sanction Authority",
        "East",
        "West",
        "North",
        "South",
        "Latitude",
        "Longitude",
        "Landmark",
      ].map((label, index) => (
        <Grid item xs={4} key={index}>
          <TextField label={label} fullWidth variant="outlined" />
        </Grid>
      ))}
    </Grid>

    <Typography variant="h5" className="mt-4" gutterBottom>
      Phase Details
    </Typography>

    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Phase No</TableCell>
            <TableCell>Wing No</TableCell>
            <TableCell>Maharera No</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {phases.map((phase, index) => (
            <TableRow key={index}>
              <TableCell>
                <TextField
                  fullWidth
                  value={phase.phaseNo}
                  onChange={(e) =>
                    setPhases(
                      phases.map((p, i) =>
                        i === index ? { ...p, phaseNo: e.target.value } : p
                      )
                    )
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  value={phase.wingNo}
                  onChange={(e) =>
                    setPhases(
                      phases.map((p, i) =>
                        i === index ? { ...p, wingNo: e.target.value } : p
                      )
                    )
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  value={phase.mahareraNo}
                  onChange={(e) =>
                    setPhases(
                      phases.map((p, i) =>
                        i === index ? { ...p, mahareraNo: e.target.value } : p
                      )
                    )
                  }
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleRemovePhase(index)}
                >
                  <FaTrash />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
      <Button className="m-2" variant="contained" color="primary" onClick={handleAddPhase}>
        <FaPlus /> Add Row
      </Button>

   
 <Button
  variant="contained"
  className="mt-3"
  color="success"
  onClick={() => {
    setShowFirmForm(false);
    toast.success("details are submitted!", { position: "top-right", autoClose: 3000 });
  }}
>
  Submit
</Button>
  
    </div>
  </Paper>
</div>

    )}
  </div>
)} 










{expandedSection === 2 && selectedTab === "landowner" && (
  <div className="content-container mt-3">
   
    {!showLandownerForm ? (
       <>
       <div className='button-container'>
      <Button variant="contained" color="primary" onClick={() => setShowLandownerForm(true)}>
        + Display LandOwner Info
      </Button>
  
  <div className="right-buttons">
      <Button variant="contained" color="secondary" onClick={handlePrevious}>
        Previous
      </Button>
      <Button variant="contained" color="secondary" onClick={handleNext}>
        Next
      </Button>
    </div>
    </div>
<div className='mt-3'>
<LandownerTable data={projectData} />
</div>
</>

    ) : (
      <div
        className="landowner-form mt-4 p-3 border rounded"
       
        style={{
          maxHeight: "500px",
          overflowY: "auto",
          backgroundColor: "#f8f9fa", 
          border: "1px solid #ccc", 
        }}
      >
        <h5>Landowner Details</h5>
        <Grid container spacing={2}>
          <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Mobile No." fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Landowner Name" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Age" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Occupation" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Mail ID" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Village" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="District" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Taluka" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Name of Bank" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Bank Address" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Account No." fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Aadhaar No." fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Residential Address" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="PAN No." fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Light Bill" fullWidth /></Grid>
          <Grid item xs={4}>
            <TextField type="file" accept="image/*" />
          </Grid>
        </Grid>

        <h5 className="mt-4">Bank Details</h5>
        <Grid container spacing={2}>
          <Grid item xs={4}><TextField label="Select a Bank" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Bank Address" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Account No." fullWidth /></Grid>
          <Grid item xs={4}><TextField label="IFSC Code" fullWidth /></Grid>
        </Grid>

       
        
<Button
  variant="contained"
  className="mt-3"
  color="success"
  onClick={() => {
    setShowFirmForm(false);
    toast.success("details are submitted!", { position: "top-right", autoClose: 3000 });
  }}
>
Submit Landowner Info
</Button>
      </div>
    )}
  </div>
)}


{expandedSection === 3 && selectedTab === "allotement" && (
  <div className="content-container mt-3">
    {!showFlatForm ? (
      <>
      
        
        <div className="button-container">
 
    <Button variant="contained" color="primary" onClick={() => setShowFlatForm(true)}>
      + Flat Allotment Info
    </Button>


    <div className="right-buttons">
      <Button variant="contained" color="secondary" onClick={handlePrevious}>
        Previous
      </Button>
      <Button variant="contained" color="secondary" onClick={handleNext}>
        Next
      </Button>
    </div>
  </div>


        <div className="mt-3">
          <FlatAllotment data={Flatdata} />
        </div>
      </>
    ) : (
      <div className="landowner-form mt-4 p-3 border rounded" style={{
        backgroundColor: "#f8f9fa", 
        border: "1px solid #ccc", 
      }}>
        <h5>Flat Allotement Display </h5>
        <Grid container spacing={2}>
          <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Name" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Mobile No." fullWidth /></Grid>
          <Grid item xs={4}><TextField label="No. of Flats Alloted" fullWidth /></Grid>
        </Grid>
        <h4 className="pt-3">Flat Details</h4>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "primary.main" }}>
                <TableCell  sx={{ color: "white", fontWeight: "bold" }}>RERA CARPET AREA (SQ FT)</TableCell>
                <TableCell  sx={{ color: "white", fontWeight: "bold" }}>WING</TableCell>
                <TableCell  sx={{ color: "white", fontWeight: "bold" }}>FLAT NO.</TableCell>
                <TableCell  sx={{ color: "white", fontWeight: "bold" }}> TYPE OF FLAT</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
            <TableCell><TextField fullWidth variant="outlined" /></TableCell>
        <TableCell><TextField fullWidth variant="outlined" /></TableCell>
        <TableCell><TextField fullWidth variant="outlined" /></TableCell>
        <TableCell><TextField fullWidth variant="outlined" /></TableCell>
      </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

       

<Button
  variant="contained"
  className="mt-3"
  color="success"
  onClick={() => {
    setShowFirmForm(false);
    toast.success("details are submitted!", { position: "top-right", autoClose: 3000 });
  }}
>
Submit Flat Allotement Info
</Button>
      </div>
    )}
  </div>
)}



  </div>
  )
}
   
 


export default BasicInfo;


