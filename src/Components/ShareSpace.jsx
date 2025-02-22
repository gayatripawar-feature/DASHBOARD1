



import React, { useState } from 'react';
import { FaProjectDiagram, FaShareAlt, FaEdit, FaEye } from 'react-icons/fa';

const ShareSpace = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [showTable, setShowTable] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [rows, setRows] = useState([{}]);
  const [formData, setFormData] = useState({
    shareTo: [],
    documentType: '',
    document: null,
  });

  // Toggle function for icons
  const handleToggle = (iconName) => {
    setActiveIcon(activeIcon === iconName ? null : iconName);
  };

  // Handle checkbox change (Share To)
  const handleShareToChange = (event, index) => {
    const { value, checked } = event.target;
    const updatedRows = [...rows];
    updatedRows[index] = {
      ...updatedRows[index],
      shareTo: checked
        ? [...(updatedRows[index].shareTo || []), value]
        : updatedRows[index].shareTo?.filter((role) => role !== value),
    };
    setRows(updatedRows);
  };

  // Handle Type of Document change
  const handleDocumentTypeChange = (event, index) => {
    const updatedRows = [...rows];
    updatedRows[index] = {
      ...updatedRows[index],
      documentType: event.target.value,
    };
    setRows(updatedRows);
  };

  // Handle file selection
  const handleFileChange = (event, index) => {
    const updatedRows = [...rows];
    updatedRows[index] = {
      ...updatedRows[index],
      document: event.target.files[0],
    };
    setRows(updatedRows);
  };

  // Handle "Out Share" button click to show the form
  const handleOutShare = () => {
    setShowForm(true);
    setShowTable(false);
  };

  // Handle "Cancel" button click to show the table
  const handleCancel = () => {
    setShowForm(false);
    setShowTable(true);
  };

  // Add a new row to the table
  const addRow = () => {
    setRows([...rows, {}]);
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log('Form submitted:', rows);
  };

  // Handle row removal
  const handleRemoveRow = (index) => {
    const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
    setRows(updatedRows);
  };

  // Handle editing a row
  const handleEditRow = (index) => {
    const updatedRows = [...rows];
    updatedRows[index] = { ...updatedRows[index], isEditing: !updatedRows[index].isEditing };
    setRows(updatedRows);
  };

  return (
    <div className="container my-4">
      {/* Title */}
      <h2 className="fs-6 mb-3">Developer Module / Share Space</h2>

      {/* Icons in One Row */}
      <div className="d-flex align-items-center gap-4">
        {/* Project Display Icon */}
        <div className="d-flex flex-column align-items-center" onClick={() => handleToggle('project')}>
          <FaProjectDiagram size={26} color="#ff5733" style={{ cursor: 'pointer' }} />
          {activeIcon !== 'project' && <span className="mt-1">Project Display</span>}
        </div>

        {/* Shared With Me Icon */}
        <div className="d-flex flex-column align-items-center" onClick={() => handleToggle('shared')}>
          <FaShareAlt size={26} color="#3498db" style={{ cursor: 'pointer' }} />
          {activeIcon !== 'shared' && <span className="mt-1">Shared With Me</span>}
        </div>
      </div>

      {/* Out Share Button */}
      <button className="btn btn-primary mt-4" onClick={handleOutShare}>Out Share</button>

      {/* Form Section */}
      {showForm && (
        <div className="mt-4">
          <h4>Add Share Information</h4>
          <form>
            {/* Table for Form Fields */}
            <table className="table table-bordered table-sm">
              <thead>
                <tr>
                  <th className='fw-bold bg-primary text-center'>Share To</th>
                  <th className='fw-bold bg-primary text-center'> Type of Document</th>
                  <th className='fw-bold bg-primary text-center'>Document</th>
                  <th className='fw-bold bg-primary text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td>
                      {/* Share To Column with Checkboxes */}
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
                        <option value="">PAN Card</option>
                        <option value="">Shop Act (Form G)</option>
                        <option value="">Shop Act (Form F)</option>
                        <option value="">Udhyam Aadhar</option>
                        <option value="">TAN Certificate</option>
                        <option value="">GST Certifiacte</option>
                        <option value="">RERA Bank Account Details</option>
                        <option value="">7/12</option>
                        <option value="">Paper Notice</option>
                        <option value="">Sale Deed</option>
                        <option value="">POA</option>
                        <option value="">Mutation Entry</option>
                        <option value="">Development Agreement</option>
                        <option value="">Power of Attorney</option>
                        <option value="">Garden NOC</option>
                        <option value="">Water NOC</option>
                        <option value="">Drainage  NOC</option>
                        <option value="">Fire NOC</option>
                        <option value="">Pollution NOC</option>
                        <option value="">Highway Authority</option>
                        <option value="">EC (IA)</option>
                        <option value="">Aviation NOC</option>
                        <option value="">NA Order</option>
                        <option value="">Brouchure</option>
                        <option value="">Google Location</option>
                        <option value="">Demarcation Plan</option>
                        <option value="">Sanctioned Plan</option>
                        <option value="">Draft Agreement</option>
                        <option value="">TAX NOC</option>
                        <option value="">Soil Testing Report</option>
                        <option value="">DP Opinion</option>
                        <option value="">Zone Certificate</option>

                        <option value="">Rain Water Harvesting Certificate</option>
                        <option value="">Solar Installation Certificate</option>
                        <option value="">STP Plant Installation Certificate</option>
                        <option value="">Plinth Level certificate</option>
                        <option value="">PMC Work Order</option>
                        <option value="">Certificate Of Incorporation</option>
                        <option value="">Partnership Deed</option>
                        <option value="">Supplementary Deed</option>
                        <option value="">Search and Title Report</option>
                            <option value="">Letterhead</option>
                            <option value="">Commencement Certificate</option>
                            <option value="">IOD Issue Copy</option>
                            <option value="">Google Plot Image</option>
                            <option value="">Rent Agreement</option>
                            <option value="">Table F</option>
                            <option value="">Old Legal Documents SD</option>
                            <option value="">ITR</option>
                            <option value="">Sales MIS</option>
                            <option value="">Cash flow & Schedule</option>
                            <option value="">CF Data</option>
                            <option value="">SRO Certificate</option>
                            <option value="">MOU Attach Annexure</option>
                            <option value="">Cost sheet</option>
                            <option value="">Mail</option>
                            <option value="">Old to New Certifiacte All</option>
                            <option value="">Architect Certificate(Quartely) </option>
                            <option value="">Engineer Certificate(Quartely) </option>
                            <option value="">CA Certificate(Quartely) </option>


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
                      {/* Action Column - Remove and Edit Buttons */}
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

      {/* Table Section - Project Display */}
      {showTable && (
        <div className="mt-4">
          <h4>Project Display</h4>
          <div className="table-responsive">
            <table className="table table-striped table-bordered mt-3">
              <thead>
                <tr>
                  <th className='fw-bold bg-primary text-center'>Action</th>
                  <th className='fw-bold bg-primary text-center'>Timestamp</th>
                  <th className='fw-bold bg-primary text-center'>Share To</th>
                  <th className='fw-bold bg-primary text-center'> Type of Document</th>
                  <th className='fw-bold bg-primary text-center'>Document</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <button
                        className="btn btn-sm btn-warning"
                        onClick={() => handleEditRow(index)}
                      >
                        <FaEdit />
                      </button>
                    </td>
                    <td>{new Date().toLocaleString()}</td> {/* Timestamp */}
                    <td>{row.shareTo?.join(', ')}</td>
                    <td>{row.documentType}</td>
                    <td>
                      {/* Document Column with File Upload */}
                      {row.document ? (
                        <div className="d-flex align-items-center">
                          <span>{row.document.name}</span>
                          <button
                            className="btn btn-sm btn-info ms-2"
                            onClick={() => window.open(URL.createObjectURL(row.document), '_blank')}
                          >
                            <FaEye /> View
                          </button>
                        </div>
                      ) : (
                        ''
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareSpace;
