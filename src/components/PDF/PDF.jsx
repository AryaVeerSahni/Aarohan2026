import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./PDF.css";

pdfjs.GlobalWorkerOptions.workerSrc =
  `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDF = ({pdfName}) => {
  const [numPages, setNumPages] = useState(0);

  return (
    <div className="pdf-wrapper">
      <Document
        file={`${import.meta.env.BASE_URL}${pdfName}`}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from({ length: numPages }, (_, i) => (
          <Page
            key={i}
            pageNumber={i + 1}
            width={window.innerWidth < 768 ? 320 : 800}
          />
        ))}
      </Document>
    </div>
  );
};

export default PDF;