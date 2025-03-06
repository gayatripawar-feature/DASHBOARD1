

import React, { useState } from "react";
import { Button, TextField, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from "@mui/material";
import { FaEye, FaEdit } from "react-icons/fa";
import { MenuItem } from '@mui/material'; // Add this import at the top of your file

const Marketing = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  // const [formData, setFormData] = useState({

  //   marketingTitle: "",
  //   marketingDescription: "",
  //   date: "",
  // });
  const [formData, setFormData] = useState({
    sourceName: '', // Initialize sourceName with an empty string or default value
    startDate: '',
    endDate: '',
    expense: '',
    target: '',
    marketingDescription: '',
  });
  
  const marketingData = [
    {
      action: "Edit",
      timestamp: "2025-03-05 12:00:00",
      sourceName: "Facebook Ads",
      startDate: "2025-03-01",
      endDate: "2025-03-10",
      expense: "$500",
      target: "1000 People",
      noOfLeads: 50,
      costPerLead: "$10",
      noOfVisit: 30,
      costPerVisit: "$16.67",
      noOfBookings: 5,
      costPerBooking: "$100",
    },
  ];

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCreateMarketingInfo = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Marketing Info Submitted:", formData);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleEdit = (index) => {
    alert(`Edit clicked for row ${index}`);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md w-96 bg-white">
      <h2 className="fs-6 mb-4">Developer Module / Marketing Management</h2>

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
          {isExpanded && <span className="text-success">Display Marketing</span>}
        </Button>
      </div>

      {!showForm && (
        <div>
          <button className="bg-primary text-white py-2 px-4 rounded" onClick={handleCreateMarketingInfo}>
            + Create Marketing Info
          </button>
        </div>
      )}

      {!showForm && (
        <div className="mt-4">
          <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
            <Table>
              <TableHead>
                {/* <TableRow sx={{ bgcolor: "primary.main" }}> */}
                <TableRow sx={{ background: "linear-gradient(180deg, #3621a9 0%,rgb(139, 115, 243) 100%)" }}>
                  <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>ACTION</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold",whiteSpace: "nowrap" }}>TIMESTAMP</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>SOURCE NAME</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>START DATE</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>END DATE</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>EXPENSE</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>TARGET</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>NO. OF LEADS</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>COST PER LEAD</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>NO OF VISIT</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>COST PER VISIT</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>NO OF BOOKINGS</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" ,whiteSpace: "nowrap"}}>COST PER BOOKING</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {marketingData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleEdit(index)}
                      >
                        <FaEdit />
                      </IconButton>
                    </TableCell>
                    <TableCell>{row.timestamp}</TableCell>
                    <TableCell>{row.sourceName}</TableCell>
                    <TableCell>{row.startDate}</TableCell>
                    <TableCell>{row.endDate}</TableCell>
                    <TableCell>{row.expense}</TableCell>
                    <TableCell>{row.target}</TableCell>
                    <TableCell>{row.noOfLeads}</TableCell>
                    <TableCell>{row.costPerLead}</TableCell>
                    <TableCell>{row.noOfVisit}</TableCell>
                    <TableCell>{row.costPerVisit}</TableCell>
                    <TableCell>{row.noOfBookings}</TableCell>
                    <TableCell>{row.costPerBooking}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}

      {/* {showForm && (
        <div className="mt-4">
          <form onSubmit={handleSubmit}>
            <TextField label="Marketing Title" name="marketingTitle" value={formData.marketingTitle} onChange={handleChange} fullWidth className="mb-3" />
            <TextField label="Marketing Description" name="marketingDescription" value={formData.marketingDescription} onChange={handleChange} fullWidth multiline rows={4} className="mb-3" />
            <TextField label="" name="date" type="date" value={formData.date} onChange={handleChange} fullWidth className="mb-3" />
            <div className="d-flex justify-content-end">
              <Button variant="contained" color="primary" type="submit" className="mr-2 m-3">
                Submit
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleCancel} className="mr-2 m-3">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )} */}

{/* {showForm && (
  <div className="p-4" style={{ backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
    <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
   
      
      <TextField
        label="Source Name"
        name="sourceName"
        value={formData.sourceName}
        onChange={handleChange}
        select
        fullWidth
        className="mb-3"
        variant="outlined"
        style={{ maxWidth: "500px" }}
      >
        <MenuItem value="Actual Site">Actual Site</MenuItem>
        <MenuItem value="Hoarding">Hoarding</MenuItem>
        <MenuItem value="Facebook">Facebook</MenuItem>
      </TextField>


      
        <TextField
              label=""
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              fullWidth
              className="mb-3"
              variant="outlined"
              style={{ maxWidth: "500px" }}
            />

            
            <TextField
              label=""
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleChange}
              fullWidth
              className="mb-3"
              variant="outlined"
              style={{ maxWidth: "500px" }}
            />

          
            <TextField
              label="Expense"
              name="expense"
              value={formData.expense}
              onChange={handleChange}
              fullWidth
              className="mb-3"
              variant="outlined"
              style={{ maxWidth: "500px" }}
            />

      
            <TextField
              label="Target"
              name="target"
              value={formData.target}
              onChange={handleChange}
              fullWidth
              className="mb-3"
              variant="outlined"
              style={{ maxWidth: "500px" }}
            />


      <TextField
        label="Marketing Description"
        name="marketingDescription"
        value={formData.marketingDescription}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
        className="mb-3"
        variant="outlined"
        style={{ maxWidth: "500px" }}
      />
     
      <div className="d-flex justify-content-end">
        <Button variant="contained" color="primary" type="submit" className="mr-2 m-3">
          Submit
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleCancel} className="mr-2 m-3">
          Cancel
        </Button>
      </div>
    </form>
  </div>
)} */}

{/* ------ */}
{/* 
{showForm && (
  <div className="p-4" style={{ backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
    <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">

      
      <TextField
        label="Source Name"
        name="sourceName"
        value={formData.sourceName}
        onChange={handleChange}
        select
        fullWidth
        className="mb-3"
        variant="outlined"
        style={{ maxWidth: "500px" }}
      >
        <MenuItem value="Actual Site">Actual Site</MenuItem>
        <MenuItem value="Hoarding">Hoarding</MenuItem>
        <MenuItem value="Facebook">Facebook</MenuItem>
      </TextField>

    
      <div className="d-flex justify-content-between w-100 mb-3">
        <TextField
          label="Start Date"
          name="startDate"
          type="date"
          value={formData.startDate}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          style={{ maxWidth: "230px", marginRight: "10px" }}  // Adjust width and margin
        />
        <TextField
          label="End Date"
          name="endDate"
          type="date"
          value={formData.endDate}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          style={{ maxWidth: "230px" }}  // Adjust width
        />
      </div>

      
      <div className="d-flex justify-content-between w-100 mb-3">
        <TextField
          label="Expense"
          name="expense"
          value={formData.expense}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          style={{ maxWidth: "230px", marginRight: "10px" }}  // Adjust width and margin
        />
        <TextField
          label="Target"
          name="target"
          value={formData.target}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          style={{ maxWidth: "230px" }}  // Adjust width
        />
      </div>

     
      <TextField
        label="Marketing Description"
        name="marketingDescription"
        value={formData.marketingDescription}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
        className="mb-3"
        variant="outlined"
        style={{ maxWidth: "500px" }}
      />

      <div className="d-flex justify-content-end">
        <Button variant="contained" color="primary" type="submit" className="mr-2 m-3">
          Submit
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleCancel} className="mr-2 m-3">
          Cancel
        </Button>
      </div>
    </form>
  </div>
)} */}

{/* ===== */}
{/* {showForm && (
  <div className="p-4" style={{ backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
    <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">

      <TextField
        label="Source Name"
        name="sourceName"
        value={formData.sourceName}
        onChange={handleChange}
        select
        fullWidth
        className="mb-3"
        variant="outlined"
        style={{ maxWidth: "500px" }}
      >
        <MenuItem value="Actual Site">Actual Site</MenuItem>
        <MenuItem value="Hoarding">Hoarding</MenuItem>
        <MenuItem value="Facebook">Facebook</MenuItem>
      </TextField>

      <div className="d-flex flex-wrap w-100 mb-3">
        <div className="col-6 pr-2">
          <TextField
            label="Start Date"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
        </div>
        <div className="col-6 pl-2">
          <TextField
            label="End Date"
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
        </div>
      </div>

     
      <div className="d-flex flex-wrap w-100 mb-3">
        <div className="col-6 pr-2">
          <TextField
            label="Expense"
            name="expense"
            value={formData.expense}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
        </div>
        <div className="col-6 pl-2">
          <TextField
            label="Target"
            name="target"
            value={formData.target}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
        </div>
      </div>

      <div className="d-flex flex-wrap w-100 mb-3">
        <div className="col-12">
          <TextField
            label="Marketing Description"
            name="marketingDescription"
            value={formData.marketingDescription}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            style={{ maxWidth: "500px" }}
          />
        </div>
      </div>

    
      <div className="d-flex justify-content-end">
        <Button variant="contained" color="primary" type="submit" className="mr-2 m-3">
          Submit
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleCancel} className="mr-2 m-3">
          Cancel
        </Button>
      </div>
    </form>
  </div>
)} */}
{/* 
{showForm && (
  <div className="p-4" style={{ backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
    <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">

  
      <div className="d-flex justify-content-center w-100 mb-3">
        <div className="col-6 pr-2 m-2">
          <TextField
            label="Source Name"
            name="sourceName"
            value={formData.sourceName}
            onChange={handleChange}
            select
            fullWidth
            variant="outlined"
          >
            <MenuItem value="Actual Site">Actual Site</MenuItem>
            <MenuItem value="Hoarding">Hoarding</MenuItem>
            <MenuItem value="Facebook">Facebook</MenuItem>
          </TextField>
        </div>
        <div className="col-6 pl-2 m-2">
          <TextField
            label=""
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
        </div>
      </div>

      
      <div className="d-flex justify-content-center w-100 mb-3">
        <div className="col-6 pr-2 m-2">
          <TextField
            label=""
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
        </div>
        <div className="col-6 pl-2 m-2">
          <TextField
            label="Expense"
            name="expense"
            value={formData.expense}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
        </div>
      </div>

      
      <div className="d-flex justify-content-center w-100 mb-3">
        <div className="col-6 m-2">
          <TextField
            label="Target"
            name="target"
            value={formData.target}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
        </div>
      </div>

      
      <div className="d-flex justify-content-center w-100 mt-3">
        <Button variant="contained" color="primary" type="submit" className="mr-2 m-3">
          Submit
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleCancel} className="ml-2 m-3">
          Cancel
        </Button>
      </div>
    </form>
  </div>
)} */}

{showForm && (
  <div
    className="p-4"
    style={{
      background: "linear-gradient(135deg, #f8f9fa,rgb(227, 221, 249))",
      borderRadius: "12px",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
      maxWidth: "700px",
      margin: "auto",
    }}
  >
    <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
      {/* Source Name at center */}
      <div className="d-flex justify-content-center w-100 mb-3">
        <div className="col-8 m-2">
          <TextField
            label="Source Name"
            name="sourceName"
            value={formData.sourceName}
            onChange={handleChange}
            select
            fullWidth
            variant="outlined"
            style={{ backgroundColor: "#fff", borderRadius: "8px" }}
            InputLabelProps={{ shrink: true, style: {  width: "100%" } }}
          >
            <MenuItem value="Actual Site">Actual Site</MenuItem>
            <MenuItem value="Hoarding">Hoarding</MenuItem>
            <MenuItem value="Facebook">Facebook</MenuItem>
            <MenuItem value="Facebook">Insta</MenuItem>
            <MenuItem value="Facebook">Website</MenuItem>

            <MenuItem value="Facebook">Print Media</MenuItem>
            <MenuItem value="Facebook">Radio</MenuItem>
            <MenuItem value="Facebook">Google Add</MenuItem>
            <MenuItem value="Facebook">Exhibition</MenuItem>
            <MenuItem value="Facebook">Online Portal</MenuItem>
            <MenuItem value="Facebook">Direct Call</MenuItem>
            <MenuItem value="Facebook">Pamphlet</MenuItem>
            <MenuItem value="Facebook">Channel Partner</MenuItem>
            <MenuItem value="Facebook">Reference</MenuItem>
            <MenuItem value="Facebook">Other</MenuItem>


          </TextField>
        </div>
      </div>

  
      <div className="d-flex justify-content-center w-100 mb-3">
        <div className="col-6 pr-2 m-2">
          <TextField
            label="Start Date"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            style={{ backgroundColor: "#fff", borderRadius: "8px" }}
            InputLabelProps={{ shrink: true, style: {  width: "100%" } }}
          />
        </div>
        <div className="col-6 pl-2 m-2">
          <TextField
            label="End Date"
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            style={{ backgroundColor: "#fff", borderRadius: "8px" }}
            InputLabelProps={{ shrink: true, style: {  width: "100%" } }}
          /> 
          

        </div>
      </div>

      {/* Expense and Target in the last row */}
      <div className="d-flex justify-content-center w-100 mb-3">
        <div className="col-6 pr-2 m-2">
          <TextField
            label="Expense"
            name="expense"
            value={formData.expense}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            style={{ backgroundColor: "#fff", borderRadius: "8px" }}
            InputLabelProps={{ shrink: true, style: {  width: "100%" } }}
          />
        </div>
        <div className="col-6 pl-2 m-2">
          <TextField
            name="target"
            value={formData.target}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            style={{ backgroundColor: "#fff", borderRadius: "8px"}}
            InputLabelProps={{ shrink: true, style: {  width: "100%" } }}
            inputProps={{ style: { textAlign: "center" } }}
            label="Target"
          />
        </div>
      </div>

      {/* Submit and Cancel buttons */}
      <div className="d-flex justify-content-center w-100 mt-3">
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="mr-2 m-3"
          style={{
            backgroundColor: "#007bff",
            borderRadius: "8px",
            padding: "10px 20px",
            transition: "0.3s",
          }}
        >
          Submit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleCancel}
          className="ml-2 m-3"
          style={{
            borderColor: "#007bff",
            color: "#007bff",
            borderRadius: "8px",
            padding: "10px 20px",
            transition: "0.3s",
          }}
        >
          Cancel
        </Button>
      </div>
    </form>
  </div>
)}


    </div>
  );
};

export default Marketing;
