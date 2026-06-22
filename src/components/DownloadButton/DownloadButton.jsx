import "./DownloadButton.css"

export default function DownloadButton({ name, path }) {
    return (
        <div className="download-button-container">
            <a href={path} download={name}>Download PDF</a>
        </div>
    )
}