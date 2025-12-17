"use client";

import { useState } from "react";
import { google } from "googleapis";

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

  // const googleTest = async () => {
  //   const res = await fetch("/api/googleAuth", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ value }),
  //   });
  // };

  const googleTest2 = async () => {
    let value = ["LinkedIn", companyName, jobPosting, 4, location, postingLink];

    const res = await fetch("/api/googleAuth2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    });
  };

  const linkedInCall = async () => {
    const res = await fetch("/api/example", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    });

    const data = await res.json();

    return {
      companyName: data.companyName,
      jobPosting: data.jobPosting,
      location: data.location,
      postingLink: data.postingLink,
    };
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
          Parse
        </button>
        {/* <button
          style={{
            width: "600px",
            height: "40px",
            fontSize: "1.2em",
            marginLeft: "2em",
          }}
          onClick={googleTest}>
          Google Auth
        </button> */}
        <br></br>
        <button
          style={{
            width: "600px",
            height: "40px",
            fontSize: "1.2em",
            marginLeft: "2em",
          }}
          onClick={googleTest2}>
          Submit to sheet
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
