import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const exportPdf = async (namadesa) => {
  const element = document.getElementById("content-export-pdf");
  const canvas = await html2canvas(element);
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");
  const imgWidth = 210;
  const pageHeight = 295;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft >= 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save(`${namadesa}.pdf`);
};

export default exportPdf;
