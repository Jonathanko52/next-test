"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button";

export default function TodoMain() {
  const [value, setValue] = useState("");
  const [companyName, setCompanyName] = useState<string | null>(null);
  const [jobPosting, setJobPosting] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [postingLink, setPostingLink] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const mainWindow = async () => {
    //First call. Retrieve the company name, position, link and such from linkedin.
    const resOne = await fetch("/api/linkedInGet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    });

    //Convert the retrieved data into Json
    const dataOne = await resOne.json();

    setCompanyName(dataOne.companyName);
    setJobPosting(dataOne.jobPosting);
    setLocation(dataOne.location);

    //Second call. Send data to google sheets to be written.
    const resTwo = await fetch("/api/moddedSheetsPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dataOne }),
    });

    //If successful, resets all values on page.
    if (resTwo.status == 200) {
      setValue("Successfully submitted!");
      setSubmitted(false);
      setCompanyName(dataOne.companyName);
      setJobPosting(dataOne.jobPosting);
      setLocation(dataOne.location);
      setPostingLink("");
    }
  };

  const test = async () => {
    //First call. Retrieve the company name, position, link and such from linkedin.
    const resOne = await fetch("/api/linkedInGet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    });

    //Convert the retrieved data into Json
    const dataOne = await resOne.json();

    setSubmitted(false);
    setCompanyName(dataOne.companyName);
    setJobPosting(dataOne.jobPosting);
    setLocation(dataOne.location);
  };

  return (
    <div>
      <div
        style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}></div>
    </div>
  );
}
