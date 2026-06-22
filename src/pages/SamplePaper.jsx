import { useState } from "react";
import PDF from "../components/PDF/PDF";
import DownloadButton from "../components/DownloadButton/DownloadButton";
import "./Template.css";

export default function SamplePaper() {
    const [selectedPdf, setSelectedPdf] = useState("Aarohan_SQP_9th.pdf");

    const pdfFiles = [
        { label: "Class 9", filename: "Aarohan_SQP_9th.pdf" },
        { label: "Class 10", filename: "Aarohan_SQP_10th.pdf" },
        { label: "Class 11", filename: "Aarohan_SQP_11th.pdf" },
        { label: "Class 12", filename: "Aarohan_SQP_12th.pdf" }
    ];

    return (
        <>
            <div className="template-heading">
                <h2>SAMPLE PAPER</h2>
            </div>

            <div className="pdf-selector-container">
                {pdfFiles.map((pdf, index) => (
                    <button 
                        key={index} 
                        className={`pdf-selector-button ${selectedPdf === pdf.filename ? "active" : ""}`}
                        onClick={() => setSelectedPdf(pdf.filename)}
                    >
                        {pdf.label}<sup>th</sup>
                    </button>
                ))}
            </div>

            {selectedPdf && (
                <>
                    <PDF pdfName={selectedPdf} />
                    <DownloadButton name={selectedPdf} path={`./${selectedPdf}`} />
                </>
            )}
        </>
    );
}