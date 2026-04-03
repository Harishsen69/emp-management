import React from 'react';

function Attendance() {
  const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    background: '#f4f6f9',
    minHeight: '100vh'
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333'
  };

  const cardContainer = {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '30px'
  };

  const cardStyle = {
    width: '150px',
    padding: '20px',
    borderRadius: '12px',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
  };

  const tableStyle = {
    width: '80%',
    margin: 'auto',
    borderCollapse: 'collapse',
    background: 'white',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  };

  const thTd = {
    padding: '12px',
    borderBottom: '1px solid #ddd',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Attendance Dashboard</h2>

      <div style={cardContainer}>
        <div style={{ ...cardStyle, background: '#28a745' }}>
          <h3>Present</h3>
          <p>22 Days</p>
        </div>

        <div style={{ ...cardStyle, background: '#dc3545' }}>
          <h3>Absent</h3>
          <p>3 Days</p>
        </div>

        <div style={{ ...cardStyle, background: '#ffc107', color: 'black' }}>
          <h3>Leave</h3>
          <p>2 Days</p>
        </div>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thTd, background: '#007bff', color: 'white' }}>Date</th>
            <th style={{ ...thTd, background: '#007bff', color: 'white' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={thTd}>01 Apr 2026</td>
            <td style={{ ...thTd, color: 'green', fontWeight: 'bold' }}>Present</td>
          </tr>
          <tr>
            <td style={thTd}>02 Apr 2026</td>
            <td style={{ ...thTd, color: 'red', fontWeight: 'bold' }}>Absent</td>
          </tr>
          <tr>
            <td style={thTd}>03 Apr 2026</td>
            <td style={{ ...thTd, color: 'orange', fontWeight: 'bold' }}>Leave</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;