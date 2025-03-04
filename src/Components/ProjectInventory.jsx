






import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Grid } from '@mui/material';
import { FaEye, FaBuilding, FaFileDownload, FaPlus, FaTrash } from "react-icons/fa";

const fetchLoansData = async () => {
  const response = await fetch('/api/getOCRCollection');
  return response.json();
};

const sections = [
  { label: "Display Inventory", icon: <FaBuilding size={20} />, createLabel: "Display Inventory" },
  { label: "Sample CSV", icon: <FaBuilding size={20} />, createLabel: "Sample CSV" },
  { label: "Upload Excel", icon: <FaBuilding size={20} />, createLabel: "Upload Excel" },
  
];


  
const ProjectInventory = () => {
  const [loans, setLoans] = useState([]);
  const [expandedSection, setExpandedSection] = useState(0); // Ensure expandedSection is defined here
  const [showFirmForm, setShowFirmForm] = useState(false);
  const [partners, setPartners] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [phases, setPhases] = useState([]);
  const [showLandownerForm, setShowLandownerForm] = useState(false); 
  const [showFlatForm, setShowFlatForm] = useState(false); 
  useEffect(() => {
    loadLoansData();
  }, []);

  const loadLoansData = async () => {
    const data = await fetchLoansData();
    setLoans(data);
  };

  const handleToggleSection = (index) => {
    if (sections[index].label === "Download PDF") {
      handleDownloadPDF();
      return;
    }

    setExpandedSection(index);  
    setShowFirmForm(false);
    setShowProjectForm(false); 
    setShowLandownerForm(false); 
  };

  const [newPhase, setNewPhase] = useState({
    phaseNo: '',
    wingNo: '',
    mahareraNo: ''
  });

  

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
    setPhases([...phases, { phaseNo: "", wingNo: "", mahareraNo: "" }]); 
  };

  const handleRemovePhase = (index) => {
    setPhases(phases.filter((_, i) => i !== index));
  };

  const handleCreateFirm = () => {
    setShowFirmForm(false);
  };

  return (
    <div className="main-content">
      <h6>Dashboard / Developer Module / Project Inventory</h6>
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

      {expandedSection === 0 && (
        <div className="content-container mt-3">
          {!showFirmForm ? (
            <Button variant="contained" color="primary" onClick={() => setShowFirmForm(true)}>
              + Create Firm
            </Button>
          ) : (
            <div className="firm-form mt-4 p-3 border rounded">
              <h5>Firm Details</h5>
              <Grid container spacing={2}>
                <Grid item xs={4}><TextField label="Firm Name" fullWidth /></Grid>
                <Grid item xs={4}><TextField label="Firm Address" fullWidth /></Grid>
                <Grid item xs={4}><TextField label="Firm PAN No" fullWidth /></Grid>
                <Grid item xs={4}><TextField label="Firm GST No" fullWidth /></Grid>
                <Grid item xs={4}><TextField type="file" /> Firm PAN No Document</Grid>
                <Grid item xs={4}><TextField type="file" /> Firm GST No Document</Grid>
              </Grid>

              <h5 className="mt-4">Partner Details</h5>
              {partners.map((partner, index) => (
                <Grid container spacing={2} key={index}>
                  <Grid item xs={4}><TextField label="Name" fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="Age" fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="Occupation" fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="Mobile No." fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="Mail ID" fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="Residential Address" fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="PAN No." fullWidth /></Grid>
                  <Grid item xs={4}><TextField label="Aadhaar No." fullWidth /></Grid>
                  <Grid item xs={4}><Button variant="contained" color="secondary" onClick={() => handleRemovePartner(index)}><FaTrash /></Button></Grid>
                </Grid>
              ))}

              <Button className="m-3" variant="contained" color="primary" onClick={handleAddPartner}>
                <FaPlus />  Add Partner
              </Button>

              <Button className="m-3" variant="contained" color="success" onClick={handleCreateFirm}>
                Save Firm
              </Button>
            </div>
          )}
        </div>
      )}

  

{expandedSection === 1 && (
  <div className="content-container mt-3">
    {!showProjectForm ? (
      <Button variant="contained" color="primary" onClick={() => setShowProjectForm(true)}>
        + Create Project
      </Button>
    ) : (
      <div className="project-form mt-4 p-3 border rounded" style={{ maxHeight: '500px', overflowY: 'auto' }}>
        <h5>Project Details</h5>
        <Grid container spacing={2}>
          <Grid item xs={4}><TextField label="FIRM Name" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Project Address" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Old Survey Number" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="New Survey Number" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Village" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Taluka" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="District" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Sanction Authority" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="East" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="West" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="North" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="South" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Latitude" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Longitude" fullWidth /></Grid>
          <Grid item xs={4}><TextField label="Landmark" fullWidth /></Grid>
        </Grid>

        <h5 className="mt-4">Phase Details</h5>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Phase No</TableCell>
                <TableCell>Wing No</TableCell>
                <TableCell>Maharera No</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField fullWidth placeholder="Enter Phase No" value={newPhase.phaseNo} 
                    onChange={(e) => setNewPhase({ ...newPhase, phaseNo: e.target.value })} 
                  />
                </TableCell>
                <TableCell>
                  <TextField fullWidth placeholder="Enter Wing No" value={newPhase.wingNo} 
                    onChange={(e) => setNewPhase({ ...newPhase, wingNo: e.target.value })} 
                  />
                </TableCell>
                <TableCell>
                  <TextField fullWidth placeholder="Enter Maharera No" value={newPhase.mahareraNo} 
                    onChange={(e) => setNewPhase({ ...newPhase, mahareraNo: e.target.value })} 
                  />
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={handleRemovePhase}>
                 Remove
                  </Button>
                </TableCell>
              
              </TableRow>
              <Button variant='contained' className="m-3 " color='primary'onClick={handleRemovePhase}>Add Row</Button>
              <Button variant='contained' className="m-3 " color='primary'onClick={handleRemovePhase}>Submit</Button>
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
      </div>
    )}
  </div>
)} 









      {/* Add further sections here */}
      {/* {expandedSection === 2 && (
  <div className="content-container mt-3">
    {!showLandownerForm ? (
     <Button variant="contained" color="primary" onClick={() => setShowLandownerForm(true)}>
     + Display LandOwner Info
   </Button>
   
    ) : (
      <div className="landowner-form mt-4 p-3 border rounded">
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

        <Button className="m-3" variant="contained" color="success">
          Submit Landowner Info
        </Button>
      </div>
    )}
  </div>
)} */}

{expandedSection === 2 && (
  <div className="content-container mt-3">
    {!showLandownerForm ? (
      <Button variant="contained" color="primary" onClick={() => setShowLandownerForm(true)}>
        + Display LandOwner Info
      </Button>
    ) : (
      <div
        className="landowner-form mt-4 p-3 border rounded"
        style={{ maxHeight: "500px", overflowY: "auto" }} // Added styles for vertical scrollbar
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

        <Button className="m-3" variant="contained" color="success">
          Submit Landowner Info
        </Button>
      </div>
    )}
  </div>
)}

{expandedSection === 3 && (
    <div className="content-container mt-3">
      {!showLandownerForm ? (
        <Button variant="contained" color="primary" onClick={() => setShowLandownerForm(true)}>
          + Flat Allotement Info
        </Button>
      ) : (
        <div className="landowner-form mt-4 p-3 border rounded">
          <h5>Flat Allotement Display </h5>
          <Grid container spacing={2}>
            <Grid item xs={4}><TextField label="Project Name" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Name" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Mobile No." fullWidth /></Grid>
            <Grid item xs={4}><TextField label="No. of Flats Alloted" fullWidth /></Grid>
      
            </Grid>
          <h4 className='pt-3'>Flat Details</h4>
          <TableContainer component={Paper}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>RERA CARPET AREA (SQ FT)</TableCell>
        <TableCell>WING</TableCell>
        <TableCell>FLAT NO.</TableCell>
        <TableCell>TYPE OF FLAT</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {/* Add table rows dynamically here if needed */}
    </TableBody>
  </Table>
</TableContainer>

          
  
          
  
          <Button className="m-3" variant="contained" color="success">
            Submit Landowner Info
          </Button>
        </div>
      )}
    </div>
  )}

{/* 
{expandedSection === 4 && (
    <div className="content-container mt-3">
      {setShowFlatForm? (
        <Button variant="contained" color="primary" onClick={() => setShowLandownerForm(true)}>
          + Flat Allotement Info
        </Button>
      ) : (
        <div className="landowner-form mt-4 p-3 border rounded">
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
              <input type="file" accept="image/*" />
            </Grid>
          </Grid>
  
          <h5 className="mt-4">Bank Details</h5>
          <Grid container spacing={2}>
            <Grid item xs={4}><TextField label="Select a Bank" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Bank Address" fullWidth /></Grid>
            <Grid item xs={4}><TextField label="Account No." fullWidth /></Grid>
            <Grid item xs={4}><TextField label="IFSC Code" fullWidth /></Grid>
          </Grid>
  
          <Button className="m-3" variant="contained" color="success">
            Submit Landowner Info
          </Button>
        </div>
      )}
    </div>
  )} */}

  </div>
  )
}
   
 


export default ProjectInventory;
