import { useState } from "react";
import PDF from "../components/PDF/PDF";
import DownloadButton from "../components/DownloadButton/DownloadButton";
import "./Template.css";

export default function AnswerKey() {
    const [selectedPdf, setSelectedPdf] = useState("Aarohan 2026 Class 9 Solutions.pdf");

    const pdfFiles = [
        { label: "Class 9", filename: "Aarohan 2026 Class 9 Solutions.pdf" },
        { label: "Class 10", filename: "Aarohan 2026 Class 10 Solutions.pdf" },
        { label: "Class 11", filename: "Aarohan 2026 Class 11 Solutions.pdf" },
        { label: "Class 12", filename: "Aarohan 2026 Class 12 Solutions.pdf" }
    ];

    return (
        <>
            <div className="template-heading">
                <h2>ANSWER KEY</h2>
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