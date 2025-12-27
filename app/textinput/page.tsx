"use client";

import { useState } from "react";

export default function TextboxWithButton() {
  const [value, setValue] = useState("");
  const [companyName, setCompanyName] = useState<string | null>(null);
  const [jobPosting, setJobPosting] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [postingLink, setPostingLink] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const scrapeAndSubmit = async () => {
    const resOne = await fetch("/api/linkedInGet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    });

    const dataOne = await resOne.json();

    const resTwo = await fetch("/api/moddedSheetsPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dataOne }),
    });

    if (resTwo.status == 200) {
      setValue("");
      setSubmitted(true);
      setCompanyName(dataOne.companyName);
      setJobPosting("");
      setLocation("");
      setPostingLink("");
    }
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
          onClick={scrapeAndSubmit}>
          Scrape and submit
        </button>
      </div>
      <br></br>
      <div
        style={{
          width: "600px",
          height: "40px",
          fontSize: "1.2em",
          padding: "2em",
        }}>
        {submitted ? (
          <div>
            <span>Successfully submitted!</span>
            <br></br>
            <span>to: {companyName} </span>
          </div>
        ) : (
          <div>
            {companyName && <span> {companyName} </span>}
            <br></br> <br></br>
            {jobPosting && <span> {jobPosting} </span>}
            <br></br> <br></br>
            {location && <span> {location} </span>}
            <br></br> <br></br>
            {postingLink && <span> {postingLink} </span>}
            <br></br>
          </div>
        )}
      </div>
    </div>
  );
}
