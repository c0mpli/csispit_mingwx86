"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import MapOne from "../Maps/MapOne";

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="col-span-12 xl:col-span-8">
        <TableOne />
      </div>
    </>
  );
};

export default ECommerce;
