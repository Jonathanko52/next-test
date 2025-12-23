"use client";

import { useState } from "react";
import { google } from "googleapis";

export default function TextboxWithButton() {
  const [value, setValue] = useState("");
  const [companyName, setCompanyName] = useState<string | null>(null);
  const [jobPosting, setJobPosting] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [postingLink, setPostingLink] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const linkedInGet = async () => {
    const res = await fetch("/api/linkedInGet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    });

    const data = await res.json();
    setSubmitted(false);
    setCompanyName(data.companyName);
    setJobPosting(data.jobPosting);
    setLocation(data.location);
    setPostingLink(data.postingLink);
  };

  const sheetsPost = async () => {
    let value = ["LinkedIn", companyName, jobPosting, 4, location, postingLink];

    const res = await fetch("/api/sheetsPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    });

    if (res.status == 200) {
      setValue("");
      setCompanyName("");
      setJobPosting("");
      setLocation("");
      setPostingLink("");
      setSubmitted(true);
    }
  };

  const test = async () => {
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
      console.log(dataOne);
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
          onClick={linkedInGet}>
          Parse
        </button>
        <br></br>
        <br></br>

        <button
          style={{
            width: "600px",
            height: "40px",
            fontSize: "1.2em",
            marginLeft: "2em",
          }}
          onClick={sheetsPost}>
          Submit to sheet
        </button>
        <br></br>
        <br></br>

        <button
          style={{
            width: "600px",
            height: "40px",
            fontSize: "1.2em",
            marginLeft: "2em",
          }}
          onClick={test}>
          TEST
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
