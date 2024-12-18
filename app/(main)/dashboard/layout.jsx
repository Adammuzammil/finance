import React, { Suspense } from "react";
import Dashboard from "./page";
import PuffLoader from "react-spinners/PuffLoader";

const DashboardLayout = () => {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold tracking-tight gradient-title">
          Dashboard
        </h1>
      </div>

      <Suspense fallback={<PuffLoader color="#9333ea" />}>
        <Dashboard />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
