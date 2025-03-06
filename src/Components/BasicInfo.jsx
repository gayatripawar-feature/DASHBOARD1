

import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Box,Tabs, Tab, Button, TextField, Grid } from '@mui/material';
import { FaEye, FaBuilding, FaFileDownload, FaPlus, FaTrash } from "react-icons/fa";
import FirmTable from './FirmTable';
import DisplayTable from "./DisplayTable";
import LandownerTable from "./LandownerTable";
import FlatAllotment from './FlatAllotement';


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
  const [partners, setPartners] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [phases, setPhases] = useState([]);
  const [showLandownerForm, setShowLandownerForm] = useState(false); 
  const [showFlatForm, setShowFlatForm] = useState(false); 
  const [selectedTab, setSelectedTab] = useState("firm");
  const [projectData, setProjectData] = useState([]);
  const[FlatAllotement , setFlatAllotement] = useState([false]);
  
  const [Flatdata, setFlatdata] = useState([]);


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


          {/* <table>
            <tr>
              <th>wd</th>
              <th>ssd</th>
            </tr>
          </table> */}
        </div>
      )}

     
{/* 
 {expandedSection === 1 && (
  <div className="content-container mt-3">
    {!showProjectForm ? (
      <Button variant="contained" color="primary" onClick={() => setShowProjectForm(true)}>
        + Create Project
      </Button>
    ) : (
      <div className="project-form mt-4 p-3 border rounded">
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
          <Button variant="contained" color="primary" onClick={handleAddPhase}>
            Add
          </Button>
        </TableCell>
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

     
      </div>
    )}
  </div>
)} */}


{expandedSection === 1 && selectedTab === "display" && (
  <div className="content-container mt-3">
   
    {!showProjectForm ? (
       <>
      {/* <Button variant="contained" color="primary" onClick={() => setShowProjectForm(true)}>
        + Create Project
      </Button> */}
<div className='button-container'>
<Button variant="contained" color="primary" onClick={() => {
   console.log("Before:", showProjectForm);
   setShowProjectForm(true);
   console.log("After:", showProjectForm);
}}>
+ Create Project
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

<div className='mt-3'>
<DisplayTable data={projectData} />
</div>
   </>
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

{expandedSection === 2 && selectedTab === "landowner" && (
  <div className="content-container mt-3">
   
    {!showLandownerForm ? (
       <>
       <div className='button-container'>
      <Button variant="contained" color="primary" onClick={() => setShowLandownerForm(true)}>
        + Display LandOwner Info
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
<div className='mt-3'>
<LandownerTable data={projectData} />
</div>
</>

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
{/* 
{expandedSection === 3 && selectedTab === "allotement" && (
    <div className="content-container mt-3">
     
      {! showFlatForm? (
         <>
      
        <Button variant="contained" color="primary" onClick={() => setShowFlatForm(true)}>
  + Flat Allotement Info
</Button>

<div className='mt-3'>
<FlatAllotment data={Flatdata} />
</div>

</>
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
     
    </TableBody>
  </Table>
</TableContainer>

          
  
          
  
          <Button className="m-3" variant="contained" color="success">
            Submit Landowner Info
          </Button>
        </div>
      )}
    </div>
  )} */}

{expandedSection === 3 && selectedTab === "allotement" && (
  <div className="content-container mt-3">
    {!showFlatForm ? (
      <>
        {/* <Button variant="contained" color="primary" onClick={() => setShowFlatForm(true)}>
          + Flat Allotement Info
        </Button>
  
         
         <Button variant="contained" color="secondary" onClick={handlePrevious}>
          Previous
        </Button>
        <Button variant="contained" color="secondary" onClick={handleNext}>
          Next */}
        {/* </Button>    */}
        
        <div className="button-container">
    {/* Flat Allotment Info button on the left */}
    <Button variant="contained" color="primary" onClick={() => setShowFlatForm(true)}>
      + Flat Allotment Info
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
          <FlatAllotment data={Flatdata} />
        </div>
      </>
    ) : (
      <div className="landowner-form mt-4 p-3 border rounded">
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
        <TableCell></TableCell> 
        <TableCell></TableCell> 
        <TableCell></TableCell> 
        <TableCell></TableCell> 
      </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Button className="m-3" variant="contained" color="success">
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


