import axios from "axios";
import * as cheerio from "cheerio";
import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: Request) {
  // Credentials
  const rawCreds = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!rawCreds) throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON missing");
  const creds = JSON.parse(rawCreds);
  creds.private_key = creds.private_key.replace(/\\n/g, "\n");

  // Authentication object
  const auth = new google.auth.GoogleAuth({
    credentials: creds,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  // Sheets
  const sheets = google.sheets({ version: "v4", auth });

  // Calling spreadsheet and using range
  const body = await req.json().catch(() => ({}));

  const resOne = await sheets.spreadsheets.values.get({
    spreadsheetId: "1DcNybZwq7WrXw-AwWCGpPzQf6mDYKAbm1Co3U882gGQ",
    range: `${"Jobs"}!${"A"}:${"A"}`,
  });

  const values = resOne.data.values?.flat() || []; // flatten to 1D array
  // First empty row = number of filled rows + 1
  const firstOpenRow = values.length + 1;
  //Set Date
  body.value[3] = getCurrentDateMMDDYY();

  const res = await sheets.spreadsheets.values.append({
    spreadsheetId: "1DcNybZwq7WrXw-AwWCGpPzQf6mDYKAbm1Co3U882gGQ",
    valueInputOption: "USER_ENTERED",
    range: `Jobs!A${firstOpenRow}:F${firstOpenRow}`,
    requestBody: { values: [body.value] },
  });

  return new Response(JSON.stringify(res.data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

function getCurrentDateMMDDYY() {
  const today = new Date();

  const month = String(today.getMonth() + 1).padStart(2, "0"); // months are 0-indexed
  const day = String(today.getDate()).padStart(2, "0");
  const year = String(today.getFullYear()).slice(-2); // last 2 digits

  return `${month}/${day}/${year}`;
}
