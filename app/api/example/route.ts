import axios from "axios";
import * as cheerio from "cheerio";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { value } = await req.json();

  // Clean URL
  const url = new URL(value);
  const cleanUrl = `${url.origin}${url.pathname}`;

  //Scrape the page
  const { data } = await axios.get(cleanUrl);
  const $ = cheerio.load(data);

  const link = $('a[href*="linkedin.com/company"]').first();
  let companyName = link.text();
  let postingLink = cleanUrl;

  const jobPosting = $("h3").first().text();

  const location = $("span").eq(5).text();

  console.log("COMPANY: ", companyName);
  console.log("LINK: ", postingLink);
  console.log("JOB POSTING: ", jobPosting);
  console.log("LOCATION: ", location);

  return NextResponse.json({
    companyName: companyName,
    jobPosting: jobPosting,
    location: location,
    postingLink: postingLink,
  });
}
