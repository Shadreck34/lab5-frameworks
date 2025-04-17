import React, { useState } from "react";

function Welcome({ name }) {
  const [showMsg, setShowMsg] = useState(true);

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <h1>Welcome, {name}!</h1>
      <button onClick={() => setShowMsg(!showMsg)}>
        {showMsg ? "Hide" : "Show"} Message
      </button>
      {showMsg && <p>This is a message you can toggle.</p>}
    </div>
  );
}

export default function App() {
  return <Welcome name="CSC 4035 Student" />;
}
