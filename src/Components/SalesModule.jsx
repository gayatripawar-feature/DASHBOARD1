





import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const SalesModule = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    joiningDate: "",
    status: "Active",
  });

  const handleAddNew = () => {
    setShowForm(true); // Show the form
  };

  const handleCancel = () => {
    setShowForm(false); // Hide the form and show the table
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setShowForm(false); // Hide form after submission
  };

  return (
    <div className="container my-4">
      <div className="row mb-3">
        {/* Left side: Title and Add Button */}
        <div className="col-md-6 d-flex flex-column align-items-start">
          <h2 className="mb-2 fs-6">Admin Module / Sales Person Management</h2>
          {!showForm && (
            <button className="btn btn-primary d-flex align-items-center" onClick={handleAddNew}>
              <FaPlus className="me-2" />
              Add New Sales Person
            </button>
          )}
        </div>
        {/* Right side: Search Bar */}
        {!showForm && (
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <input type="text" className="form-control w-50" placeholder="Search..." />
          </div>
        )}
      </div>

      {/* FORM */}
      {showForm ? (
        <div className="card p-4">
          <h4 className="mb-3">Add New Sales Person</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Mobile</label>
              <input type="text" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Designation</label>
              <input type="text" className="form-control" name="designation" value={formData.designation} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Joining Date</label>
              <input type="date" className="form-control" name="joiningDate" value={formData.joiningDate} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Status</label>
              <select className="form-control" name="status" value={formData.status} onChange={handleChange}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-success">Submit</button>
              <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      ) : (
        // TABLE
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Action</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Designation</th>
                <th>Joining Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button className="btn btn-sm btn-info me-2">
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm btn-danger">
                    <FaTrash />
                  </button>
                </td>
                {/* <td colSpan="6" className="text-center">No records available</td> */}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SalesModule;
