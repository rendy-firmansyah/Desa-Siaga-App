import React from "react";
import exportPdf from "../utils/exportPdf";

const ExportButton = ({ namadesa }) => {
  return (
    <button
      className="w-full py-3 ms-2 bg-green-500 rounded-md hover:bg-green-400 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out"
      onClick={() => exportPdf(namadesa)}
    >
      Export to PDF
    </button>
  );
};

export default ExportButton;
