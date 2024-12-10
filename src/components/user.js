import React from "react";
import { AgGridReact } from "ag-grid-react";
import * as XLSX from "xlsx";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { userData } from "@/data/UserData";

export default function User() {
  const columns = Object.keys(userData[0]).map((key) => ({
    headerName: key,
    field: key,
    sortable: true,
    filter: true,
  }));

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(userData);
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
          rowData={userData}
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
