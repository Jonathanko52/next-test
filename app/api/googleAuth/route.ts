import axios from "axios";
import * as cheerio from "cheerio";
import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: Request) {
  const { value } = await req.json();

  const creds = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON!);
  creds.private_key = creds.private_key.replace(/\\n/g, "\n");
  console.log(creds);
  const auth = new google.auth.GoogleAuth({
    credentials: creds,
    scopes: ["https://www.googleapis.com/auth/drive"],
  });

  const drive = google.drive({ version: "v3", auth });

  console.log("VALIE", value);
  // Return object
  return NextResponse.json({ test: "TEST" });
}
