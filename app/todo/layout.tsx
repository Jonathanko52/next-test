"use client";

import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import TextboxWithButton from "./../textinput/page";
import Header from "./components/Header";
import { Button } from "@/app/ui/button";
import { useState } from "react";
import { StateProvider } from "@/app/context/StateContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [jobScraperOpen, setJobScraperOpen] = useState(false);
  const [buttonDiv, setButtonDiv] = useState(true);

  const toggleRightSidebar = () => {
    if (rightSidebarOpen) {
      setButtonDiv(true);
      setRightSidebarOpen(false);
      setJobScraperOpen(true);
    } else {
      setButtonDiv(false);
      setRightSidebarOpen(true);
      setJobScraperOpen(false);
    }
  };

  const toggleScraperSidebar = () => {
    if (jobScraperOpen) {
      setButtonDiv(true);
      setRightSidebarOpen(true);
      setJobScraperOpen(false);
    } else {
      setButtonDiv(false);
      setRightSidebarOpen(false);
      setJobScraperOpen(true);
    }
  };

  const toggleButtonDiv = () => {
    if (buttonDiv) {
      setButtonDiv(false);
      setRightSidebarOpen(true);
      setJobScraperOpen(true);
    } else {
      setButtonDiv(true);
      setRightSidebarOpen(false);
      setJobScraperOpen(false);
    }
  };

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <StateProvider>
          <div className="grid min-h-screen grid-cols-[240px_1fr_240px] grid-rows-[auto_1fr]">
            <div className="col-start-2 row-start-1">
              <Header />
            </div>
            <div className="col-start-1 row-span-2">
              <Sidebar />
            </div>
            <main className="col-start-2 row-start-2 p-4">{children}</main>
            {buttonDiv ? (
              <div>
                <Button
                  className="bg-success justify-center"
                  style={{
                    width: "200px",
                    height: "40px",
                    fontSize: "1.2em",
                    margin: "1em",
                    marginLeft: "2em",
                  }}
                  onClick={toggleRightSidebar}>
                  RightSidebar
                </Button>
                <Button
                  className="bg-success justify-center"
                  style={{
                    width: "200px",
                    height: "40px",
                    fontSize: "1.2em",
                    margin: "1em",
                    marginLeft: "2em",
                  }}
                  onClick={toggleScraperSidebar}>
                  Job Scraper
                </Button>
              </div>
            ) : null}
            {jobScraperOpen ? (
              <div className="col-start-3 row-span-2">
                <TextboxWithButton />
                <Button
                  className="bg-success justify-center"
                  style={{
                    width: "200px",
                    height: "40px",
                    fontSize: "1.2em",
                    margin: "1em",
                    marginLeft: "2em",
                  }}
                  onClick={toggleRightSidebar}>
                  RightSidebar
                </Button>
                <Button
                  className="bg-success justify-center"
                  style={{
                    width: "200px",
                    height: "40px",
                    fontSize: "1.2em",
                    margin: "1em",
                    marginLeft: "2em",
                  }}
                  onClick={toggleScraperSidebar}>
                  Job Scraper
                </Button>
              </div>
            ) : null}
            {rightSidebarOpen ? (
              <div className="col-start-3 row-span-2">
                <RightSidebar />{" "}
                <Button
                  className="bg-success justify-center"
                  style={{
                    width: "200px",
                    height: "40px",
                    fontSize: "1.2em",
                    margin: "1em",
                    marginLeft: "2em",
                  }}
                  onClick={toggleRightSidebar}>
                  RightSidebar
                </Button>
                <Button
                  className="bg-success justify-center"
                  style={{
                    width: "200px",
                    height: "40px",
                    fontSize: "1.2em",
                    margin: "1em",
                    marginLeft: "2em",
                  }}
                  onClick={toggleScraperSidebar}>
                  Job Scraper
                </Button>
              </div>
            ) : null}
          </div>
        </StateProvider>
      </body>
    </html>
  );
}

// Row(VendorID='1', tpep_pickup_datetime='2019-01-01 00:46:40', tpep_dropoff_datetime='2019-01-01 00:53:20', passenger_count='1', trip_distance='1.50', RatecodeID='1', store_and_fwd_flag='N', PULocationID='151', DOLocationID='239', payment_type='1', fare_amount='7', extra='0.5', mta_tax='0.5', tip_amount='1.65', tolls_amount='0', improvement_surcharge='0.3', total_amount='9.95', congestion_surcharge=None),
// Row(VendorID='1', tpep_pickup_datetime='2019-01-01 00:59:47', tpep_dropoff_datetime='2019-01-01 01:18:59', passenger_count='1', trip_distance='2.60', RatecodeID='1', store_and_fwd_flag='N', PULocationID='239', DOLocationID='246', payment_type='1', fare_amount='14', extra='0.5', mta_tax='0.5', tip_amount='1', tolls_amount='0', improvement_surcharge='0.3', total_amount='16.3', congestion_surcharge=None),
// Row(VendorID='2', tpep_pickup_datetime='2018-12-21 13:48:30', tpep_dropoff_datetime='2018-12-21 13:52:40', passenger_count='3', trip_distance='.00', RatecodeID='1', store_and_fwd_flag='N', PULocationID='236', DOLocationID='236', payment_type='1', fare_amount='4.5', extra='0.5', mta_tax='0.5', tip_amount='0', tolls_amount='0', improvement_surcharge='0.3', total_amount='5.8', congestion_surcharge=None),
// Row(VendorID='2', tpep_pickup_datetime='2018-11-28 15:52:25', tpep_dropoff_datetime='2018-11-28 15:55:45', passenger_count='5', trip_distance='.00', RatecodeID='1', store_and_fwd_flag='N', PULocationID='193', DOLocationID='193', payment_type='2', fare_amount='3.5', extra='0.5', mta_tax='0.5', tip_amount='0', tolls_amount='0', improvement_surcharge='0.3', total_amount='7.55', congestion_surcharge=None),
// Row(VendorID='2', tpep_pickup_datetime='2018-11-28 15:56:57', tpep_dropoff_datetime='2018-11-28 15:58:33', passenger_count='5', trip_distance='.00', RatecodeID='2', store_and_fwd_flag='N', PULocationID='193', DOLocationID='193', payment_type='2', fare_amount='52', extra='0', mta_tax='0.5', tip_amount='0', tolls_amount='0', improvement_surcharge='0.3', total_amount='55.55', congestion_surcharge=None)
