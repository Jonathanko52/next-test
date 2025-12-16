import axios from "axios";
import * as cheerio from "cheerio";
import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: Request) {
  // Optional: read dynamic range from request
  const body = await req.json().catch(() => ({}));
  const range = body.range || "Jobs!A2:B2";

  const rawCreds = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!rawCreds) throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON missing");

  const creds = JSON.parse(rawCreds);
  creds.private_key = creds.private_key.replace(/\\n/g, "\n");

  const auth = new google.auth.GoogleAuth({
    credentials: creds,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: "1DcNybZwq7WrXw-AwWCGpPzQf6mDYKAbm1Co3U882gGQ",
    range,
  });

  console.log("TEST", res.data.values);
  return res.data.values || [];
}
