import React from "react";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        padding: "20px",
        textAlign: "center",
        borderRadius: "8px",
      }}
    >
      <h1 style={{ color: "darkblue", fontSize: "2rem" }}>
        Hello, React with Inline CSS!
      </h1>
      <button
        style={{
          backgroundColor: "darkblue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
