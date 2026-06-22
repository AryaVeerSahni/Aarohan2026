import quotationImage from "../../assets/images/invertedCommas.png"
import "./TestimonialCard.css"

export default function TestimonialCard({words, name, standard}) {
    return (
        <section className="testimonial-container">
            <div className="testimonial">
                <img src={quotationImage} alt="Quotation Mark" />
                <br />
                <p>{words}<br /><br /></p>
                <h3><br />{name}, Class {standard}<sup>th</sup></h3>
            </div>
        </section>
    )
}