




import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

const Banker = () => {
  const [showForm, setShowForm] = useState(false);
  const [bankers, setBankers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    joiningDate: "",
    status: "Active",
  });

  const handleAddNew = () => setShowForm(true);
  const handleCancel = () => setShowForm(false);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAddBanker = () => {
    setBankers([...bankers, { bankerName: "", bankerMobile: "" }]);
  };

  const handleBankerChange = (index, field, value) => {
    const updatedBankers = [...bankers];
    updatedBankers[index][field] = value;
    setBankers(updatedBankers);
  };

  const handleRemoveBanker = (index) => {
    const updatedBankers = bankers.filter((_, i) => i !== index);
    setBankers(updatedBankers);
  };

  return (
    <div className="container my-4">
      <div className="row mb-3">
        <div className="col-md-6 d-flex flex-column align-items-start">
          <h2 className="mb-2 fs-6">Admin Module / Banker Details Management</h2>
          {!showForm && (
            <button className="btn btn-primary d-flex align-items-center" onClick={handleAddNew}>
              <FaPlus className="me-2" />
              Add Banker Details
            </button>
          )}
        </div>
        {!showForm && (
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <input type="text" className="form-control w-50" placeholder="Search..." />
          </div>
        )}
      </div>

      {showForm && (
        <div className="card p-4">
          <h4 className="mb-3">Add Banker Details</h4>
          <form>
            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Bank Name</label>
                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="col-md-4">
                <label className="form-label">Address</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="col-md-4">
                <label className="form-label">APF Letter</label>
                <input type="file" className="form-control" name="mobile" onChange={handleChange} required />
              </div>
            </div>

            {bankers.length > 0 && (
              <>
                {bankers.map((banker, index) => (
                  <div className="row mb-3" key={index}>
                    <div className="col-md-4">
                      <label className="form-label">Banker Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={banker.bankerName}
                        onChange={(e) => handleBankerChange(index, "bankerName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Mobile No:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={banker.bankerMobile}
                        onChange={(e) => handleBankerChange(index, "bankerMobile", e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-4 pt-4">
                      <button type="button" className="btn btn-danger mt-2" onClick={() => handleRemoveBanker(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}

            <div className="mb-3">
              <button type="button" className="btn btn-primary" onClick={handleAddBanker}>
                + Add Another Banker
              </button>
            </div>

            <div className="d-flex">
              <button type="submit" className="btn btn-success m-3">
                Submit
              </button>
              <button type="button" className="btn btn-secondary m-3" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Hide Table when form is open */}
      {!showForm && (
        <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
          <Table>
            <TableHead sx={{ bgcolor: "primary.main" }}>
              <TableRow>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Action</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Timestamp</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Bank Name</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Address</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Banker Name</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>	Mobile No</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>	APF Letter</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <IconButton color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Banker;
