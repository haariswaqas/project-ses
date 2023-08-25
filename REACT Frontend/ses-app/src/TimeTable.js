import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './NavBar';
import './Dashboard.css';

const TimeTable = () => {
  const [timetables, setTimetables] = useState([]);

  useEffect(() => {
    fetchTimetables();
  }, []);

  const fetchTimetables = async () => {
    try {
      const response = await fetch('http://localhost:8080/timetable/timetables'); // Backend API URL
      const data = await response.json();
      setTimetables(data);
    } catch (error) {
      console.error('Error fetching timetables:', error);
    }
  };

  // Function to group the data by the day attribute
  const groupDataByDay = (data) => {
    return data.reduce((groupedData, item) => {
      if (!groupedData[item.day]) {
        groupedData[item.day] = [];
      }
      groupedData[item.day].push(item);
      return groupedData;
    }, {});
  };

  // Group the timetables by day
  const groupedTimetables = groupDataByDay(timetables);

  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"
        />
      </Helmet>
      <Navbar />

      <div className="container">
        <h1 className="mt-5 dark">Timetable</h1>

        {/* Iterate over the grouped data to display timetable for each day */}
        {Object.keys(groupedTimetables).map((day) => (
          <div key={day}>
            <h2>{day}</h2>
            <table className="table mt-4">
              <thead>
                <tr>
                  <th scope="col">COURSE</th>
                  <th scope="col">ROOM</th>
                  <th scope="col">LECTURER</th>
                  <th scope="col">STARTS</th>
                  <th scope="col">ENDS</th>
                </tr>
              </thead>
              <tbody>
                {groupedTimetables[day].map((timetable) => (
                  <tr key={timetable.id}>
                    <td>{timetable.courseCode} - {timetable.courseTitle}</td>
                    <td>{timetable.room}</td>
                    <td>{timetable.lecturer}</td>
                    <td>{timetable.startTime}</td>
                    <td>{timetable.endTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeTable;
