import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TestimonialCard from "./TestimonialCard";

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
    const containerRef1 = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".testimonial-container");
        const totalCards = cards.length;
        const lastCard = cards[totalCards - 1];
        
        const lastCardStart = 20 + (totalCards - 1) * 3;

        ScrollTrigger.create({
            trigger: ".testimonials-heading",
            start: "top 10%",
            endTrigger: lastCard,
            end: () => `top+=${window.innerHeight * 1.5}px ${lastCardStart}%`,
            pin: true,
            pinSpacing: false 
        });

        cards.forEach((card, index) => {
            const isLastCard = index === totalCards - 1;

            ScrollTrigger.create({
                trigger: card,
                start: `top ${20 + index * 3}%`,
                endTrigger: isLastCard ? null : lastCard,
                end: isLastCard 
                    ? () => `+=${window.innerHeight * 1.5}` 
                    : () => `top+=${window.innerHeight * 1.5}px ${lastCardStart}%`, 
                pin: true,
                pinSpacing: isLastCard
            });

            if (!isLastCard) {
                const innerCard = card.querySelector(".testimonial"); 
                
                gsap.to(innerCard, {
                    scale: 0.9, 
                    transformOrigin: "top center",
                    scrollTrigger: {
                        trigger: cards[index + 1],
                        start: "top 80%", 
                        end: `top ${20 + (index + 1) * 3}%`, 
                        scrub: true,
                    }
                });
            }
        });

        const fadeTl = gsap.timeline({
            scrollTrigger: {
                trigger: lastCard,
                start: `top ${lastCardStart}%`,
                end: () => `+=${window.innerHeight * 1.5}`,
                scrub: true,
            }
        });

        fadeTl.to([".testimonials-heading", ...cards], {
            opacity: 0,
            ease: "none",
            duration: 1
        }, 0.5);

    }, { scope: containerRef1 });

    return (
        <div ref={containerRef1}>
            <div className="testimonials-heading">
                <h2>TESTIMONIALS</h2>
            </div>

            <br />

            <TestimonialCard
                words="I participated in the Aarohan competition at BITS, Pilani in 2024. What impressed me most was the format - it was both challenging and unique, which made it a truly engaging experience. The competition also provided great exposure to BITS Pilani. The Apogee fest is also great with a multitude of events and lectures taking place. I even made some new friends and learned a lot from the experience. Aarohan was a rewarding competition that pushed my limits and helped me grow as a participant. Aarohan not only allowed me to showcase my abilities but also opened doors to new opportunities and connections. It was an unforgettable experience that I would highly recommend to anyone looking to challenge themselves, achieve recognition, and immerse themselves in a top-tier college festival environment."
                name="Amogh Achyut Hirve"
                standard={10}
            />

            <TestimonialCard
                words="The experience at BITS Pilani is truly surreal. The intricate planning of the Aarohan committee proved to be extraordinary. All types of intriguing events were hosted with the logic behind each one in mind. I got to learned various things throughout the entire round and was an unforgettable experience of learning and growing. This once in a lifetime experience is truly something very few get. Team Aarohan was helpful and supportive of everyone and explained everything perfectly to ensure every instruction was clear and concise. One thing remains, the experience of Aarohan Round 2 is very special and memorable. "
                name="Aarav"
                standard={9}
            />

            <TestimonialCard
                words="The second round was series of events like murder mystery, battleship, bidding wars, a genetic game, etc. We got to meet Mohit Chauhan, saw a rocket launch and had a QnA session with the rocket builders. We also had lots of fun in the Annual BITS PILANI fest going on at the time. The Bhaiyas and Didis were awesome too! Totally worth giving the exam! Good luck!"
                name="Nilay"
                standard={11}
            />

            <TestimonialCard
                words="It was an incredible experience. Team Aarohan creates such creative and innovative challenges based on real world application of sciences. Its not like any other exam and I would encourage everyone to give it a try. I feel very fortunate to have been able to attend the second round and APOGEE 2024, and interact with such great people from all across India."
                name="Abhiraj Pharate"
                standard={11}
            />

            <TestimonialCard
                words="Overall it was an amazing experience. The programme aimed at promoting creative thinking through brilliant puzzles and activities which is far from the rote learning in school. All the guides were really knowledgeable and helpful. The programme also gave us an opportunity to have a tour of the campus that too during the Technical fest organized. "
                name="Pranshu Goel"
                standard={10}
            />


            <TestimonialCard
                words="Its an excellent opportunity to explore math and science beyond school level. Not having a subjective written paper pattern makes this exam interesting. The entire exam is fun learning and tests our IQ which makes the entire exposure worth experiencing."
                name="Dherya Shreyashkumar Limbhetwala"
                standard={10}
            />
        </div>
    )
}