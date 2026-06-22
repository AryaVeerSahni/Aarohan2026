import aarohanLogoLarge from "../../assets/logos/Aarohan2.png"
import "./Registration.css"

export default function Registration() {
    return(
        <div className="registration-container">
            <div className="registration-div">
                <img src={aarohanLogoLarge} className="aarohan-intro-img" alt="Aarohan Logo" />

                <p className="aarohan-intro">A premier STEM Olympiad for high school students to challenge, explore and excel in the disciplines that shape our future.</p>
                <br />
                <a href="https://aarohan.bits-apogee.org/Registration" target="blank" className="registration-link">REGISTER NOW</a>
            </div>
        </div>
    )
}