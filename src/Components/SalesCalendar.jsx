
// import React, { useState, useEffect } from 'react';
// import BigCalendar from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import { Calendar, momentLocalizer } from 'react-big-calendar';


// BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));


// const localizer = momentLocalizer(moment);


// const SalesCalendar = () => {
//   const [events, setEvents] = useState([]);

//   // Example event data
//   const sampleEvents = [
//     {
//       title: 'Meeting with Bob',
//       start: new Date(2025, 2, 6, 10, 0), 
//       end: new Date(2025, 2, 6, 11, 0), 
//     },
//     {
//       title: 'Lunch Break',
//       start: new Date(2025, 2, 6, 12, 0), 
//       end: new Date(2025, 2, 6, 13, 0), 
//     },
//     {
//       title: 'Client Call',
//       start: new Date(2025, 2, 7, 15, 0), 
//       end: new Date(2025, 2, 7, 16, 0), 
//     },
//   ];

//   useEffect(() => {
  
//     setEvents(sampleEvents);
//   }, []);

//   return (
//     <div>
//       <h2>My Calendar</h2>
//       <BigCalendar
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//       />
//     </div>
//   );
// };

// export default SalesCalendar;
