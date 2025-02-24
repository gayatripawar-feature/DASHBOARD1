
import React, { useState } from "react";
import { FaEye, FaPlus, FaEdit, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const columns = [
  { id: "action", label: "Action" },
  { id: "lastFollowup", label: "Last Follow Up" },
  { id: "status", label: "Status" },
  { id: "remark", label: "Remark" },
  { id: "nextFollowup", label: "Next Follow Up" },
  { id: "assignedTo", label: "Assigned To" },
  { id: "enquiryNo", label: "Enquiry No" },
  { id: "leadNo", label: "Lead No" },
  { id: "name", label: "Name" },
  { id: "salesExecMobile", label: "Sales Exec. Mobile" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "alternateContact", label: "Alternate Contact" },
  { id: "email", label: "Email" },
  { id: "address", label: "Address" },
  { id: "occupation", label: "Occupation" },
  { id: "company", label: "Company" },
  { id: "interested", label: "Interested" },
  { id: "budget", label: "Budget" },
  { id: "reason", label: "Reason" },
  { id: "reference", label: "Reference" },
  { id: "nameOfCP", label: "Name of CP" },
  { id: "planningToBuy", label: "Planning to Buy" },
  { id: "followupDetails", label: "Followup Details" },
];

const rows = [
  { action: "Edit", lastFollowup: "2024-02-20", status: "Pending", remark: "Call again", nextFollowup: "2024-02-25", assignedTo: "John Doe", enquiryNo: "E001", leadNo: "L001", name: "Customer A" },
  { action: "View", lastFollowup: "2024-02-18", status: "Closed", remark: "Not interested", nextFollowup: "N/A", assignedTo: "Jane Smith", enquiryNo: "E002", leadNo: "L002", name: "Customer B" },
];

const LostVisitsModule = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleFilter = () => {
    console.log("Filtering data...");
  };

  const handleReset = () => {
    setFromDate("");
    setToDate("");
    setRowsPerPage(10);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mt-3">
      <h3 className="fs-6">Sales Module / Lost Enquiry Follow Up Management</h3>

      {/* Pending Followup Button */}
      <div className="d-flex align-items-center mb-2">
        <button
          onClick={handleCollapseToggle}
          className="btn btn-light d-flex align-items-center gap-2"
          style={{ borderRadius: "20px" }}
        >
          <div className="rounded-circle p-2" style={{ background: "#f0f0f0" }}>
            <FaEye size={20} color="#28a745" />
          </div>
          {!isCollapsed && <span className="text-success">Pending Followup</span>}
        </button>
      </div>

      
      <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
       
          <button
          className="btn btn-primary"
          style={{
            borderRadius: '5px',
            padding: '17px 20px',
            width: 'auto',
          }}
        >
          <FaPlus size={16} style={{ marginRight: '8px' }} />
          New Followup
        </button>

     
        <div>
          <label>From:</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="form-control"
            style={{ width: "150px" }}
          />
        </div>

        <div>
          <label>To:</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="form-control"
            style={{ width: "150px" }}
          />
        </div>

     
     <button
          className="btn btn-success"
          onClick={handleFilter}
          style={{
            borderRadius: '5px',
            padding: '13px 20px',
            width: 'auto',
          }}
        >
          Filter
        </button>
        
        <button
          className="btn btn-secondary"
          onClick={handleReset}
          style={{
            borderRadius: '5px',
            padding: '13px 20px',
            width: 'auto',
          }}
        >
          Reset
        </button>

      
       <button
          className="btn btn-secondary"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            borderRadius: '5px',
            padding: '13px 20px',
            width: 'auto',
          }}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of 2
        </span>

        <button
          className="btn btn-secondary"
          onClick={() => handlePageChange(currentPage + 1)}
          style={{
            borderRadius: '5px',
            padding: '13px 20px',
            width: 'auto',
          }}
        >
          Next
        </button>


        <div>
          <label>Rows per page:</label>
          <input type="number" className="form-control" value={rowsPerPage} onChange={handleRowsPerPageChange} style={{ width: "80px" }} />
        </div>
      </div>

      
 


<div
  className="table-responsive"
  style={{
    maxHeight: "400px",
    overflowY: "auto",
    overflowX: "auto",
    margin: "30px 10px",
    padding: "10px",
    maxWidth: "100%",
    paddingRight: "70px", 
  }}
>
  <table
    className="table table-striped table-bordered"
    style={{
      width: "100%",
      minWidth: "1600px",  
   
    }}
  >
    <thead className="table-primary">
      <tr>
        {columns.map((column) => (
          <th
            key={column.id}
            style={{
              padding: "12px 8px",
              textAlign: "center",
              wordWrap: "break-word",  
              whiteSpace: "nowrap",    
            }}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, index) => (
        <tr key={index}>
          {columns.map((column, colIndex) => (
            <td
              key={column.id}
              style={{
                padding: "12px 8px",
                textAlign: "center",
                wordWrap: "break-word",  
                whiteSpace: "nowrap",    
                paddingRight: colIndex === columns.length - 1 ? "16px" : "8px", 
              }}
            >
              {column.id === "action" ? (
                <div className="d-flex gap-2">
                  <FaEdit size={20} color="#007bff" style={{ cursor: "pointer" }} />
                  <FaWhatsapp size={20} color="#25d366" style={{ cursor: "pointer" }} />
                  <FaEnvelope size={20} color="#dc3545" style={{ cursor: "pointer" }} />
                </div>
              ) : (
                row[column.id] || "-"
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>






    </div>
  );
};

export default LostVisitsModule;

      
