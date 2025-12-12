"use client";

import { useState } from "react";

export default function TextboxWithButton() {
  const [value, setValue] = useState("");
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async () => {
    const res = await fetch("/api/example", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    });

    const data = await res.json();
    setResponse(data.message);
  };

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text"
        style={{
          width: "600px",
          height: "40px",
          fontSize: "16px",
          padding: "0 12px",
        }}
      />
      <button onClick={handleSubmit}>Submit</button>

      {response && <span>{response}</span>}
    </div>
  );
}
