




import React, { useState } from 'react';
import { FaProjectDiagram, FaShareAlt, FaEdit, FaEye } from 'react-icons/fa';

const ShareSpace = () => {
  const [activeIcon, setActiveIcon] = useState('project');
  const [showForm, setShowForm] = useState(false);
  const [showProjectTable, setShowProjectTable] = useState(true); // Show Project Display Table by default
  const [rows, setRows] = useState([{}]);
  const [sharedWithMeRows, setSharedWithMeRows] = useState([
    {
      sharedFrom: "Sales",
      timestamp: "2024-02-24 10:30 AM",
      shareTo: "CRM",
      documentType: "PAN Card",
      document: "pan_card.pdf",
    },
    {
      sharedFrom: "Sales",
      timestamp: "2024-02-23 02:15 PM",
      shareTo: "Sales",
      documentType: "GST Certificate",
      document: "gst_certificate.pdf",
    }
  ]);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleToggle = (iconName) => {
    setActiveIcon(iconName);
  };

  // Out Share Button handler
  const handleOutShare = () => {
    setShowForm(true); // Show the form when Out Share button is clicked
    setShowProjectTable(false); // Hide the Project Display Table
    // Hide the Shared With Me Table if it's visible
    if (activeIcon === 'shared') {
      setSharedWithMeRows([]); // Clear the Shared With Me Table
    }
  };

  // Cancel Button handler
  const handleCancel = () => {
    setShowForm(false); // Hide the form when Cancel button is clicked
    setShowProjectTable(true); // Show the Project Display Table again
  };

  // Handle share to change (Checkboxes)
  const handleShareToChange = (e, index) => {
    const newRows = [...rows];
    if (e.target.checked) {
      newRows[index].shareTo = [...(newRows[index].shareTo || []), e.target.value];
    } else {
      newRows[index].shareTo = newRows[index].shareTo.filter((item) => item !== e.target.value);
    }
    setRows(newRows);
  };

  // Handle document type change
  const handleDocumentTypeChange = (e, index) => {
    const newRows = [...rows];
    newRows[index].documentType = e.target.value;
    setRows(newRows);
  };

  // Handle file change
  const handleFileChange = (e, index) => {
    const newRows = [...rows];
    newRows[index].document = e.target.files[0];
    setRows(newRows);
  };

  // Add new row
  const addRow = () => {
    setRows([...rows, {}]);
  };

  // Handle form submission
  const handleSubmit = () => {
    // Handle the submit action (you can send data to the server or save it)
    console.log(rows);
    setShowForm(false);
    setShowProjectTable(true);
  };

  // Remove row
  const handleRemoveRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when rows per page is changed
  };

  // Pagination calculation (calculating the rows to display for current page)
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sharedWithMeRows.slice(indexOfFirstRow, indexOfLastRow);

  // Page numbers based on the total rows and rows per page
  const totalPages = Math.ceil(sharedWithMeRows.length / rowsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container my-4">
      <h2 className="fs-6 mb-3">Developer Module / Share Space</h2>

      {/* Icons Row */}
      <div className="d-flex align-items-center gap-4">
        {/* Project Display Icon */}
        <div
          className="d-flex align-items-center gap-2 p-2"
          onClick={() => handleToggle('project')}
          style={{
            cursor: 'pointer',
            borderRadius: '20px',
            background: activeIcon === 'project' ? '#f8f9fa' : 'transparent',
          }}
        >
          <div className="d-flex justify-content-center align-items-center rounded-circle bg-white p-2 shadow">
            <FaProjectDiagram size={26} color="#ff5733" />
          </div>
          {activeIcon === 'project' && <span>Project Display</span>}
        </div>

        {/* Shared With Me Icon */}
        <div
          className="d-flex align-items-center gap-2 p-2"
          onClick={() => handleToggle('shared')}
          style={{
            cursor: 'pointer',
            borderRadius: '20px',
            background: activeIcon === 'shared' ? '#f8f9fa' : 'transparent',
          }}
        >
          <div className="d-flex justify-content-center align-items-center rounded-circle bg-white p-2 shadow">
            <FaShareAlt size={26} color="#28a745" />
          </div>
          {activeIcon === 'shared' && <span>Shared With Me</span>}
        </div>
      </div>

      {/* Out Share Button and Pagination Controls in One Row */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        {/* Out Share Button */}
        <button className="btn btn-primary" onClick={handleOutShare}>Out Share</button>

        {/* Pagination Controls */}
        <div className="d-flex align-items-center">
          <label className="me-2">Rows per page:</label>
          <input
            type="number"
            className="form-control"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            style={{ width: '80px' }}
          />

     
     

<button
  className="btn btn-secondary ms-2"
  disabled={currentPage === 1}
  onClick={() => handlePageChange(currentPage - 1)}
>
  Previous
</button>

<span className="ms-2">
  {currentPage} of {totalPages}
</span>




<button
  className="btn btn-secondary ms-2"
  disabled={currentPage === totalPages}
  onClick={() => handlePageChange(currentPage + 1)}
>
  Next
</button>
</div>
</div>


      {showForm && (
        <div className="mt-4">
          <h4>Add Share Information</h4>
          <form>
            
            <table className="table table-bordered table-sm">
              <thead>
                <tr>
                  <th className='fw-bold bg-primary text-center fs-5 '>Share To</th>
                  <th className='fw-bold bg-primary text-center fs-5 '>Type of Document</th>
                  <th className='fw-bold bg-primary text-center fs-5 '>Document</th>
                  <th className='fw-bold bg-primary text-center fs-5 '>Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td>
                
                      <div className="d-flex flex-column gap-2">
                        <div>
                          <input
                            type="checkbox"
                            value="Sales"
                            onChange={(e) => handleShareToChange(e, index)}
                            checked={row.shareTo?.includes('Sales')}
                          />
                          <label className="ms-2">Sales</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            value="CRM"
                            onChange={(e) => handleShareToChange(e, index)}
                            checked={row.shareTo?.includes('CRM')}
                          />
                          <label className="ms-2">CRM</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            value="Admin"
                            onChange={(e) => handleShareToChange(e, index)}
                            checked={row.shareTo?.includes('Admin')}
                          />
                          <label className="ms-2">Admin</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            value="Legal"
                            onChange={(e) => handleShareToChange(e, index)}
                            checked={row.shareTo?.includes('Legal')}
                          />
                          <label className="ms-2">Legal</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            value="Engineering"
                            onChange={(e) => handleShareToChange(e, index)}
                            checked={row.shareTo?.includes('Engineering')}
                          />
                          <label className="ms-2">Engineering</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            value="Accounting"
                            onChange={(e) => handleShareToChange(e, index)}
                            checked={row.shareTo?.includes('Accounting')}
                          />
                          <label className="ms-2">Accounting</label>
                        </div>
                      </div>
                    </td>
                    <td>
                      {/* Type of Document Column with Dropdown */}
                      <select
                        className="form-control"
                        value={row.documentType || ''}
                        onChange={(e) => handleDocumentTypeChange(e, index)}
                      >
                       <option value="">Select Type</option>
                          <option value="MCA certificate">MCA certificate</option>
                          <option value="PAN Card">PAN Card</option>
                          <option value="Shop Act (Form G)">Shop Act (Form G)</option>
                          <option value="Shop Act (Form F)">Shop Act (Form F)</option>
                          <option value="Udhyam Aadhar">Udhyam Aadhar</option>
                          <option value="TAN Certificate">TAN Certificate</option>
                          <option value="GST Certifiacte">GST Certifiacte</option>
                          <option value="RERA Bank Account Details">RERA Bank Account Details</option>
                          <option value="7/12">7/12</option>
                          <option value="Paper Notice">Paper Notice</option>
                          <option value="Sale Deed">Sale Deed</option>
                          <option value="POA">POA</option>
                          <option value="Mutation Entry">Mutation Entry</option>
                          <option value="Development Agreement">Development Agreement</option>
                          <option value="Power of Attorney">Power of Attorney</option>
                          <option value="Garden NOC">Garden NOC</option>
                          <option value="Water NOC<">Water NOC</option>
                          <option value="Drainage  NOC">Drainage  NOC</option>
                          <option value="Fire NOC">Fire NOC</option>
                          <option value="Pollution NOC">Pollution NOC</option>
                          <option value="Highway Authority">Highway Authority</option>
                          <option value="EC (IA)">EC (IA)</option>
                          <option value="Aviation NOC">Aviation NOC</option>
                          <option value=">NA Order">NA Order</option>
                          <option value="Brouchure">Brouchure</option>
                          <option value="Google Location">Google Location</option>
                          <option value="Demarcation Plan">Demarcation Plan</option>
                          <option value="Sanctioned Plan">Sanctioned Plan</option>
                          <option value="Draft Agreement">Draft Agreement</option>
                          <option value="TAX NOC<">TAX NOC</option>
                          <option value="Soil Testing Report">Soil Testing Report</option>
                        <option value="DP Opinion">DP Opinion</option>                         <option value="Zone Certificate">Zone Certificate</option>

                          <option value="Rain Water Harvesting Certificate">Rain Water Harvesting Certificate</option>
                         <option value="Solar Installation Certificate">Solar Installation Certificate</option>
                         <option value="STP Plant Installation Certificate">STP Plant Installation Certificate</option>
                         <option value="Plinth Level certificate">Plinth Level certificate</option>
                          <option value="PMC Work Order">PMC Work Order</option>
                         <option value="Certificate Of Incorporation">Certificate Of Incorporation</option>
                          <option value="Partnership Deed">Partnership Deed</option>
                          <option value="Supplementary Deed">Supplementary Deed</option>
                          <option value="Search and Title Report">Search and Title Report</option>
                              <option value="Letterhead">Letterhead</option>
                              <option value="Commencement Certificate">Commencement Certificate</option>
                              <option value="IOD Issue Copy">IOD Issue Copy</option>
                             <option value="Google Plot Image">Google Plot Image</option>
                              <option value="Rent Agreement">Rent Agreement</option>
                              <option value="Table F">Table F</option>
                              <option value="Old Legal Documents SD">Old Legal Documents SD</option>
                              <option value="ITR">ITR</option>
                              <option value="Sales MIS">Sales MIS</option>
                              <option value="Cash flow & Schedule">Cash flow & Schedule</option>
                             <option value="CF Data">CF Data</option>
                              <option value="SRO Certificate">SRO Certificate</option>
                              <option value="MOU Attach Annexure">MOU Attach Annexure</option>
                              <option value="Cost sheet">Cost sheet</option>
                              <option value="Mail">Mail</option>
                              <option value="Old to New Certifiacte All">Old to New Certifiacte All</option>
                              <option value="Architect Certificate(Quartely) ">Architect Certificate(Quartely) </option>
                              <option value="Engineer Certificate(Quartely) ">Engineer Certificate(Quartely) </option>
                            <option value="CA Certificate(Quartely) ">CA Certificate(Quartely) </option>
                      </select>
                    </td>
                    <td>
                      {/* Document Column with File Upload */}
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => handleFileChange(e, index)}
                      />
                    </td>
                    <td>
                      {/* Action Column - Remove Button */}
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleRemoveRow(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>

          {/* Add Row Button */}
          <button className="btn btn-secondary me-2" onClick={addRow}>Add Row</button>
          {/* Submit and Cancel Buttons */}
          <button className="btn btn-success me-2" onClick={handleSubmit}>Submit</button>
          <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        </div>
      )}

   

{showProjectTable && activeIcon === 'project' && (
  <div className="mt-4">
    {/* Table */}
    <table className="table table-bordered table-sm">
      <thead>
        <tr>
          <th className="fw-bold bg-primary text-center fs-5">Action</th>
          <th className="fw-bold bg-primary text-center fs-5">Timestamp</th>
          <th className="fw-bold bg-primary text-center fs-5">Share To</th>
          <th className="fw-bold bg-primary text-center fs-5">Type of Document</th>
          <th className="fw-bold bg-primary text-center fs-5">Document</th>
        </tr>
      </thead>
      <tbody>
        {currentRows.map((row, index) => (
          <tr key={index}>
            <td>
              {/* Edit Icon in the Action Column */}
              <button
                className="btn btn-warning btn-sm"
                onClick={() => {
                  // You can define the edit logic here, for example:
                  console.log('Editing action:', row);
                  // Maybe open an edit form or modal
                }}
              >
                <FaEdit size={20} />
              </button>
            </td>
            <td>{row.timestamp}</td>
            <td>{row.shareTo}</td>
            <td>{row.documentType}</td>
            <td>
              {/* View Icon in the Document Column */}
              <button
                className="btn btn-info btn-sm"
                onClick={() => {
                  // Define the view logic here, for example:
                  console.log('Viewing document:', row.document);
                  // Maybe open the document in a modal or new tab
                }}
              >
                <FaEye size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}


{/* Shared With Me Table (Visible when 'Shared With Me' is selected) */}
{activeIcon === 'shared' && (
  <div className="mt-4">
    {/* Table */}
    <table className="table table-bordered table-sm">
      <thead>
        <tr>
          <th className="fw-bold bg-primary text-center fs-5">Shared From</th>
          <th className="fw-bold bg-primary text-center fs-5">Timestamp</th>
          <th className="fw-bold bg-primary text-center fs-5">Share To</th>
          <th className="fw-bold bg-primary text-center fs-5">Type of Document</th>
          <th className="fw-bold bg-primary text-center fs-5">Document</th>
          <th className="fw-bold bg-primary text-center fs-5">Action</th> {/* Add this column */}
        </tr>
      </thead>
      <tbody>
        {currentRows.map((row, index) => (
          <tr key={index}>
            <td>{row.sharedFrom}</td>
            <td>{row.timestamp}</td>
            <td>{row.shareTo}</td>
            <td>{row.documentType}</td>
            <td>{row.document}</td>
            <td>
              {/* View Icon in the Action Column */}
              <button
                className="btn btn-info btn-sm"
                onClick={() => {
                  // You can define a function here to handle viewing the document
                  console.log('Viewing document:', row.document);
                  // For example, you can open the document or show a modal
                }}
              >
                <FaEye size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}


    </div>
  );
};

export default ShareSpace;

