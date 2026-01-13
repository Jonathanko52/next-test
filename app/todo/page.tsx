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

  const test = async () => {};

  return <div></div>;
}
