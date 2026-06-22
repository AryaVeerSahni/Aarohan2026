import "./Contacts.css"

export default function ContactCard({image, name, position, phone}) {
    return (
        <section className="contact-card-container">
            <div className="contact-card">
                <div className="image-container" style={{backgroundImage: `url(${image})`}}></div>
                <br />
                <h4>{name}</h4>
                <br />
                <h5>{position}</h5>
                <br />
                <h6>+91 {phone}</h6>
            </div>
        </section>
    )
}