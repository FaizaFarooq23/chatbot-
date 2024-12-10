import React from "react";
import { AgGridReact } from "ag-grid-react";
import * as XLSX from "xlsx";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { dummyData } from "@/data/dummyData";

export default function Statistics() {
  const columns = Object.keys(dummyData[0]).map((key) => ({
    headerName: key,
    field: key,
    sortable: true,
    filter: true,
  }));

  // Export to Excel function
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(dummyData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, "AdminDashboardData.xlsx");
  };
  return (
    <div className="flex flex-col w-full items-center justify-center p-10">
      <div className="flex w-full justify-end mb-4">
        <button
          onClick={exportToExcel}
          className="bg-gradient-to-r from-[#5899E2] to-pepsi-blue duration-300 transition-colors hover:from-pepsi-blue hover:to-[#5899E2] cursor-pointer text-white px-4 py-2 text-sm rounded-md font-bold"
        >
          Export to Excel
        </button>
      </div>
      <div
        className="w-full h-full ag-theme-quartz "
        style={{ height: "400px" }}
      >
        <AgGridReact
          rowData={dummyData}
          columnDefs={columns}
          defaultColDef={{
            flex: 1,
            minWidth: 100,
            resizable: true,
            filter: true,
            sortable: true,
          }}
        />
      </div>
    </div>
  );
}
