import React, { useState } from "react";

function EmployeeReport() {
  const [employees] = useState([
    { id: 1, name: "Vikas", role: "Developer", salary: 30000 },
    { id: 2, name: "Rahul", role: "Designer", salary: 25000 },
    { id: 3, name: "Amit", role: "Manager", salary: 40000 },
    { id: 4, name: "Neha", role: "HR", salary: 28000 },
  ]);

  const [search, setSearch] = useState("");

  // Filter employees
  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate total salary
  const totalSalary = filteredEmployees.reduce(
    (total, emp) => total + emp.salary,
    0
  );

  return (
    <div style={styles.container}>
      <h2>📊 Employee Report Dashboard</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />

      {/* Summary */}
      <div style={styles.summary}>
        <p><strong>Total Employees:</strong> {filteredEmployees.length}</p>
        <p><strong>Total Salary:</strong> ₹ {totalSalary}</p>
      </div>

      {/* Table */}
      <table style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Role</th>
            <th style={styles.th}>Salary</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((emp) => (
              <tr key={emp.id} style={styles.row}>
                <td style={styles.td}>{emp.id}</td>
                <td style={styles.td}>{emp.name}</td>
                <td style={styles.td}>{emp.role}</td>
                <td style={styles.td}>₹ {emp.salary}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={styles.noData}>
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeReport;

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
    maxWidth: "800px",
    margin: "auto",
  },
  input: {
    padding: "10px",
    width: "100%",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  summary: {
    marginBottom: "15px",
    background: "#f5f5f5",
    padding: "10px",
    borderRadius: "5px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  headerRow: {
    background: "#333",
    color: "#fff",
  },
  th: {
    padding: "10px",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  row: {
    textAlign: "center",
  },
  noData: {
    textAlign: "center",
    padding: "15px",
    color: "red",
  },
};