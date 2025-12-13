"use client";

import { useState } from "react";

export default function TextboxWithButton() {
  const [value, setValue] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [companyName, setCompanyName] = useState<string | null>(null);
  const [jobPosting, setJobPosting] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [postingLink, setPostingLink] = useState<string | null>(null);

  const handleSubmit = async () => {
    const res = await fetch("/api/example", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    });

    const data = await res.json();

    setCompanyName(data.companyName);
    setJobPosting(data.jobPosting);
    setLocation(data.location);
    setPostingLink(data.postingLink);
  };

  return (
    <div>
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
            margin: "2em",
          }}
        />
      </div>
      <div>
        <button
          style={{
            width: "600px",
            height: "40px",
            fontSize: "1.2em",
            marginLeft: "2em",
          }}
          onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <br></br>
      <div
        style={{
          width: "600px",
          height: "40px",
          fontSize: "1.2em",
        }}>
        {companyName && <span style={{ padding: "2em" }}> {companyName} </span>}
        <br></br> <br></br>
        {jobPosting && <span style={{ padding: "2em" }}> {jobPosting} </span>}
        <br></br> <br></br>
        {location && <span style={{ padding: "2em" }}> {location} </span>}
        <br></br> <br></br>
        {postingLink && <span style={{ padding: "2em" }}> {postingLink} </span>}
        <br></br>
      </div>
    </div>
  );
}
