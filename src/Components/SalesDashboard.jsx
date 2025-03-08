
import { useState } from "react";
import { Button, TextField, Box, Typography, Select, MenuItem } from "@mui/material";
import { FaChartLine, FaUsers, FaChartPie, FaMapMarkerAlt } from "react-icons/fa";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar
} from "recharts";

import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const SalesDashboard = () => {
  const buttons = [
    { label: "Lead Conversion", icon: <FaChartLine size={20} />, bgColor: "#ff5733" },
    { label: "Team Performance", icon: <FaUsers size={20} />, bgColor: "#3498db" },
    { label: "Source Base Report", icon: <FaChartPie size={20} />, bgColor: "#f1c40f" },
    { label: "Visit Tracker", icon: <FaMapMarkerAlt size={20} />, bgColor: "#2ecc71" },
  ];

  const [selectedTab, setSelectedTab] = useState("Lead Conversion"); // Default tab
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(""); // Added missing state
  const employeeOptions = ["Shubham Taware ", "Ashwini Khot", "Amol Pawar","Sachin Awale"]; 
  const handleFilter = () => {
    console.log("Filtering from:", startDate, "to", endDate);
  };

  const handleReset = () => {
    setStartDate("");
    setEndDate("");
  };

const chartData = [
  { date: "01/01/2025", leads: 10, plannedVisits: 5, actualVisits: 2, conversions: 1 },
  { date: "08/01/2025", leads: 30, plannedVisits: 20, actualVisits: 10, conversions: 5 },
  { date: "15/01/2025", leads: 50, plannedVisits: 35, actualVisits: 25, conversions: 10 },
  { date: "22/01/2025", leads: 80, plannedVisits: 50, actualVisits: 40, conversions: 20 },
  { date: "29/01/2025", leads: 100, plannedVisits: 65, actualVisits: 55, conversions: 30 },
  { date: "05/02/2025", leads: 130, plannedVisits: 85, actualVisits: 70, conversions: 40 },
  { date: "12/02/2025", leads: 150, plannedVisits: 95, actualVisits: 80, conversions: 50 },
  { date: "19/02/2025", leads: 170, plannedVisits: 110, actualVisits: 95, conversions: 60 },
  { date: "26/02/2025", leads: 190, plannedVisits: 130, actualVisits: 110, conversions: 70 },
  { date: "05/03/2025", leads: 210, plannedVisits: 145, actualVisits: 125, conversions: 80 },
  { date: "12/03/2025", leads: 230, plannedVisits: 160, actualVisits: 140, conversions: 90 },
  { date: "19/03/2025", leads: 250, plannedVisits: 175, actualVisits: 155, conversions: 100 },
  { date: "26/03/2025", leads: 270, plannedVisits: 190, actualVisits: 170, conversions: 110 },
  { date: "02/04/2025", leads: 290, plannedVisits: 205, actualVisits: 185, conversions: 120 },
  { date: "09/04/2025", leads: 310, plannedVisits: 220, actualVisits: 200, conversions: 130 },
];

const teamData = [
  {
    salesPerson: "John Doe",
    totalLeadAssigned: 15,
    visitAssigned: 10,
    lost: 3,
    hot: 5,
    warm: 4,
    cold: 2,
    undefined: 1
  }
];


const pieData = [
  { name: "Hot", value: 25 },
  { name: "Warm", value: 35 },
  { name: "Cold", value: 20 },
  { name: "Lost", value: 15 },
  { name: "Undefined", value: 5 }
];

const COLORS = ["#e74c3c", "#f1c40f", "#3498db", "#2ecc71", "#95a5a6"];




const barData = [
  { name: "Total Leads", count: 33, color: COLORS[0] },
  { name: "Visits", count: 18, color: COLORS[1] },
  { name: "Lost", count: 6, color: COLORS[2] },
  { name: "Hot", count: 5, color: COLORS[3] },
  { name: "Warm", count: 9, color: COLORS[4] },
  { name: "Cold", count: 8, color: COLORS[5] },
  { name: "Undefined", count: 6, color: COLORS[6] },
];


  return (
    <div>
     
      <div className="d-flex flex-wrap align-items-center mb-3">
        {buttons.map((btn, index) => (
          <div key={index} style={{ margin: "10px" }}>
           
        


<Button
  onClick={() => setSelectedTab(btn.label)}
  variant="outlined"
  color={selectedTab === btn.label ? "primary" : "success"}
  className="m-2"
  style={{
    borderRadius: "20px",
    minWidth: "150px",
    padding: "6px",
    display: "flex",  
    alignItems: "center",  
    gap: "8px",  
    backgroundColor: "transparent",
    border: "none",
  }}
>
  <div
    style={{
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      backgroundColor: btn.bgColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {btn.icon}
  </div>
  {btn.label}  {/* Display the label text here */}
</Button>

          </div>
        ))}
      </div>


      <Box mt={3} p={3} style={{ border: "1px solid #ddd", borderRadius: "10px" }}>
    

        {selectedTab === "Lead Conversion" && (
          <Box>
         
            <Box mb={3}>
              <TextField
                label="Start Date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                style={{ marginRight: "10px" }}
              />
              <TextField
                label="End Date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                style={{ marginRight: "10px" }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleFilter}
                style={{ marginRight: "10px" }}
              >
                Filter
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleReset}>
                Reset
              </Button>
            </Box>

  
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>
                Lead Conversion Trend
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend verticalAlign="top" height={36} />
                  <Line type="monotone" dataKey="leads" stroke="#ff5733" strokeWidth={3} name="Leads" />
                  <Line type="monotone" dataKey="plannedVisits" stroke="#3498db" strokeWidth={3} name="Planned Visits" />
                  <Line type="monotone" dataKey="actualVisits" stroke="#2ecc71" strokeWidth={3} name="Actual Visits" />
                  <Line type="monotone" dataKey="conversions" stroke="#f1c40f" strokeWidth={3} name="Conversions" />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        )}

{/*      

{selectedTab === "Team Performance" && (
  <Box>
    <Box mb={3}>
      <Typography variant="h6" gutterBottom>Select Employee</Typography>
      <Select
        value={selectedEmployee}
        onChange={(e) => setSelectedEmployee(e.target.value)}
        style={{ width: "200px", marginBottom: "20px" }}
      >
        {employeeOptions.map((emp) => (
          <MenuItem key={emp} value={emp}>{emp}</MenuItem>
        ))}
      </Select>
    </Box>

 
    <Box display="flex" justifyContent="space-between" alignItems="center" gap={4}>
    
      <Box width="50%" p={2} boxShadow={3} borderRadius={2} bgcolor="white">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            <text x="50%" y="10%" textAnchor="middle" fontSize={16} fontWeight="bold">
              Average Lead Status Distribution
            </text>
          </PieChart>
        </ResponsiveContainer>
      </Box>

   
      <Box width="50%" p={2} boxShadow={3} borderRadius={2} bgcolor="white">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
          
            <text x="50%" y="10%" textAnchor="middle" fontSize={16} fontWeight="bold">
              Total Lead Metrics Overview
            </text>

            <XAxis dataKey="name" />
            <YAxis
              domain={[0, 35]}
              tickInterval={5}
              label={{ value: "Total Count", angle: -90, position: "insideLeft" }}
              ticks={[0, 5, 10, 15, 20, 25, 30, 35]}
            />
            <Tooltip />
            <Bar dataKey="count">
              {barData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>


    <Box mt={3} p={2} boxShadow={3} borderRadius={2} bgcolor="white">
      <Typography variant="h6" gutterBottom>
        Sales Person Performance
      </Typography>
      <TableContainer component={Paper} style={{ maxHeight: '300px', overflowY: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sales Person</TableCell>
              <TableCell>Total Lead Assigned</TableCell>
              <TableCell>Visit Assigned</TableCell>
              <TableCell>Lost</TableCell>
              <TableCell>Hot</TableCell>
              <TableCell>Warm</TableCell>
              <TableCell>Cold</TableCell>
              <TableCell>Undefined</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teamData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.salesPerson}</TableCell>
                <TableCell>{row.totalLeadAssigned}</TableCell>
                <TableCell>{row.visitAssigned}</TableCell>
                <TableCell>{row.lost}</TableCell>
                <TableCell>{row.hot}</TableCell>
                <TableCell>{row.warm}</TableCell>
                <TableCell>{row.cold}</TableCell>
                <TableCell>{row.undefined}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </Box>git remote -v

)}


      */}

{/* ------------- */}
{/* 
{selectedTab === "Team Performance" && (
  <Box>
    <Box mb={3}>
      <Typography variant="h6" gutterBottom>Select Employee</Typography>
      <Select
        value={selectedEmployee}
        onChange={(e) => setSelectedEmployee(e.target.value)}
        style={{ width: "200px", marginBottom: "20px" }}
      >
        {employeeOptions.map((emp) => (
          <MenuItem key={emp} value={emp}>{emp}</MenuItem>
        ))}
      </Select>
    </Box>

   
    <Box display="flex" justifyContent="space-between" alignItems="center" gap={4}>
      
      <Box width="50%" p={2} boxShadow={3} borderRadius={2} bgcolor="white">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            <text x="50%" y="10%" textAnchor="middle" fontSize={16} fontWeight="bold">
              Average Lead Status Distribution
            </text>
          </PieChart>
        </ResponsiveContainer>
      </Box>

      <Box width="50%" p={2} boxShadow={3} borderRadius={2} bgcolor="white">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
     
            <text x="50%" y="10%" textAnchor="middle" fontSize={16} fontWeight="bold">
              Total Lead Metrics Overview
            </text>

            <XAxis dataKey="name" />
            <YAxis
              domain={[0, 35]}
              tickInterval={5}
              label={{ value: "Total Count", angle: -90, position: "insideLeft" }}
              ticks={[0, 5, 10, 15, 20, 25, 30, 35]}
            />
            <Tooltip />
            <Bar dataKey="count">
              {barData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>

    <Box mt={3} p={2} boxShadow={3} borderRadius={2} bgcolor="white">
      <Typography variant="h6" gutterBottom>
        Sales Person Performance
      </Typography>
      <TableContainer
        component={Paper}
        style={{
          maxHeight: '300px', 
          overflowY: 'auto', 
          display: 'block', 
          height: 'auto', 
          width: '100%',
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sales Person</TableCell>
              <TableCell>Total Lead Assigned</TableCell>
              <TableCell>Visit Assigned</TableCell>
              <TableCell>Lost</TableCell>
              <TableCell>Hot</TableCell>
              <TableCell>Warm</TableCell>
              <TableCell>Cold</TableCell>
              <TableCell>Undefined</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teamData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.salesPerson}</TableCell>
                <TableCell>{row.totalLeadAssigned}</TableCell>
                <TableCell>{row.visitAssigned}</TableCell>
                <TableCell>{row.lost}</TableCell>
                <TableCell>{row.hot}</TableCell>
                <TableCell>{row.warm}</TableCell>
                <TableCell>{row.cold}</TableCell>
                <TableCell>{row.undefined}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </Box>
)} */}


{/* ------ */}

{selectedTab === "Team Performance" && (
  <Box>
    <Box mb={3}>
      <Typography variant="h6" gutterBottom>Select Employee</Typography>
      <Select
        value={selectedEmployee}
        onChange={(e) => setSelectedEmployee(e.target.value)}
        style={{ width: "200px", marginBottom: "20px" }}
      >
        {employeeOptions.map((emp) => (
          <MenuItem key={emp} value={emp}>{emp}</MenuItem>
        ))}
      </Select>
    </Box>

    {/* Charts Section */}
    <Box display="flex" justifyContent="space-between" alignItems="center" gap={4}>
      {/* Pie Chart - Lead Status Distribution with Shadow */}
      <Box width="50%" p={2} boxShadow={3} borderRadius={2} bgcolor="white">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            <text x="50%" y="10%" textAnchor="middle" fontSize={16} fontWeight="bold">
              Average Lead Status Distribution
            </text>
          </PieChart>
        </ResponsiveContainer>
      </Box>

      {/* Bar Chart - Total Lead Metrics Overview with Shadow */}
      <Box width="50%" p={2} boxShadow={3} borderRadius={2} bgcolor="white">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            {/* Title for Bar Chart */}
            <text x="50%" y="10%" textAnchor="middle" fontSize={16} fontWeight="bold">
              Total Lead Metrics Overview
            </text>

            <XAxis dataKey="name" />
            <YAxis
              domain={[0, 35]}
              tickInterval={5}
              label={{ value: "Total Count", angle: -90, position: "insideLeft" }}
              ticks={[0, 5, 10, 15, 20, 25, 30, 35]}
            />
            <Tooltip />
            <Bar dataKey="count">
              {barData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>

    {/* Table Section */}
    <Box mt={3} p={2} boxShadow={3} borderRadius={2} bgcolor="white">
      <Typography variant="h6" gutterBottom>
        Sales Person Performance
      </Typography>
      <TableContainer
        component={Paper}
        style={{
          maxHeight: '300px',
          overflowY: 'auto',
          display: 'block',
          height: 'auto',
          width: '100%',
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sales Person</TableCell>
              <TableCell>Total Lead Assigned</TableCell>
              <TableCell>Visit Assigned</TableCell>
              <TableCell>Lost</TableCell>
              <TableCell>Hot</TableCell>
              <TableCell>Warm</TableCell>
              <TableCell>Cold</TableCell>
              <TableCell>Undefined</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teamData.length > 0 ? (
              teamData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.salesPerson}</TableCell>
                  <TableCell>{row.totalLeadAssigned}</TableCell>
                  <TableCell>{row.visitAssigned}</TableCell>
                  <TableCell>{row.lost}</TableCell>
                  <TableCell>{row.hot}</TableCell>
                  <TableCell>{row.warm}</TableCell>
                  <TableCell>{row.cold}</TableCell>
                  <TableCell>{row.undefined}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} align="center">No data available</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </Box>
)}


        {selectedTab === "Source Base Report" && <Typography>Source Base Report content here</Typography>}
        {selectedTab === "Visit Tracker" && <Typography>Visit Tracker content here</Typography>}
      </Box>
    </div>
  );
};

export default SalesDashboard;



