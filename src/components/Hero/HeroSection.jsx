import "./HeroSection.css"

export default function HeroSection({imagePath, heading, line, isLast}) {
    const last = isLast ? "hero-section last" : "hero-section"

    return (
        <section className={last}>
            <img src={imagePath} alt={heading} />
            <article>
                <h3>{heading}</h3>
                <p>{line}</p>
            </article>
        </section>
    )
}