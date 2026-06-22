import PDF from "../components/PDF/PDF"
import DownloadButton from "../components/DownloadButton/DownloadButton"
import "./Template.css"

export default function Brochure() {
    return (
        <>
            <div className="template-heading">
                <h2>BROCHURE</h2>
            </div>

            <PDF pdfName="Aarohan_SQP_9th.pdf" />

            <DownloadButton name="Brochure.pdf" path="./Aarohan_SQP_9th.pdf" />
        </>
    )
}