import challengeImage from "../../assets/images/trophy.png"
import exploreImage from "../../assets/images/bulb.png"
import innovateImage from "../../assets/images/upGraph.png"
import excelImage from "../../assets/images/3ppl.png"
import HeroSection from "./HeroSection";

export default function Hero() {
    return(
        <section className="hero-div-container">
            <div className="hero-div">
                <HeroSection
                    imagePath={challengeImage}
                    heading="Challenge"
                    line="Test your knowledge with the best"
                    isLast={false} />
                <HeroSection
                    imagePath={exploreImage}
                    heading="Explore"
                    line="Discover new ideas and perspectives"
                    isLast={false} />
                <HeroSection
                    imagePath={innovateImage}
                    heading="Innovate"
                    line="Solve real-world problems and build the future"
                    isLast={false} />
                <HeroSection
                    imagePath={excelImage}
                    heading="Excel"
                    line="Achieve excellence in STEM disciplines"
                    isLast={true} />
            </div>
        </section>
    )
}