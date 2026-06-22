import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import maanasImg from "../../assets/images/maanasPopuri.jpg";
import bhoomiImg from "../../assets/images/bhoomiMotihar.jpg";
import amanImg from "../../assets/images/amanSharma.jpg";
import varenyamImg from "../../assets/images/varenyamBharti.jpg";
import anirvanImg from "../../assets/images/anirvanKanavi.jpg";
import ContactCard from "./ContactCard";

gsap.registerPlugin(ScrollTrigger);

export default function Contacts() {
    const containerRef2 = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".contact-card-container");
        const totalCards = cards.length;
        const lastCard = cards[totalCards - 1];
        
        const lastCardStart = 20 + (totalCards - 1) * 3;

        ScrollTrigger.create({
            trigger: ".contacts-heading",
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
                pinSpacing: isLastCard, 
            });

            if (!isLastCard) {
                const innerCard = card.querySelector(".contact-card"); 
                
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

        fadeTl.to([".contacts-heading", ...cards], {
            opacity: 0,
            ease: "none",
            duration: 1
        }, 0.5);

    }, { scope: containerRef2 });

    return (
        <div ref={containerRef2}>
            <div className="contacts-heading">
                <h2>CONTACT US</h2>
            </div>

            <ContactCard
                image={maanasImg}
                name="Maanas Popuri"
                position="Coordinator"
                phone={9886060434}
            />

            <ContactCard
                image={bhoomiImg}
                name="Bhoomi Motihar"
                position="Joint-Coordinator and Minifest Head"
                phone={9664390939}
            />

            <ContactCard
                image={amanImg}
                name="Aman Sharma"
                position="Knowledge Team Head"
                phone={8630314103}
            />

            <ContactCard
                image={varenyamImg}
                name="Varenyam Bharti"
                position="Sponsorship Head"
                phone={6289735341}
            />

            <ContactCard
                image={anirvanImg}
                name="Anirvan Kanavi"
                position="Joint-Coordinator"
                phone={9136072921}
            />
        </div>
    );
}