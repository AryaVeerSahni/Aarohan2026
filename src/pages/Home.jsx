import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import Registration from "../components/Registration/Registration"
import Hero from "../components/Hero/Hero"
import AboutUs from "../components/AboutUs/AboutUs"
import RoadToAarohan from "../components/RoadToAarohan/RoadToAarohan"
import Rounds from "../components/Rounds/Rounds"
import AboutApogee from "../components/AboutApogee/AboutApogee"
import Testimonials from "../components/Testimonials/Testimonials"
import Contacts from "../components/Contacts/Contacts"
import Questions from "../components/Questions/Questions"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    const containerRef = useRef(null)

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual"
        }
        window.scrollTo(0, 0)
    }, [])

    useGSAP(() => {
        ScrollTrigger.normalizeScroll({allowNestedScroll: true})
        ScrollTrigger.config({ ignoreMobileResize: true });

        gsap.to(".registration-div", {
            x: -1000,
            ease: "none",
            scrollTrigger: {
                trigger: '.registration-container',
                start: "top 15%",
                end: "+=500",
                scrub: 2,
                pin: true,
                pinSpacing: false,
                refreshPriority: 2
            }
        })

        gsap.to(".hero-div", {
            opacity: 0,
            scrollTrigger: {
                trigger: ".hero-div",
                start: "top 50%",
                end: "top 5%",
                scrub: true
            }
        })

        gsap.to(".about-div", {
            x: 1000,
            ease: "none",
            opacity: 0,
            scrollTrigger: {
                trigger: ".about-container",
                start: "top 15%",
                end: "+=600",
                scrub: true,
                pin: ".about-div",
                refreshPriority: 2
            }
        })

        gsap.to(".road-div", {
            x: -1000,
            ease: "none",
            opacity: 0,
            scrollTrigger: {
                trigger: ".road-div-container",
                start: "top 15%",
                end: "+=600",
                scrub: true,
                pin: ".road-div",
                refreshPriority: 2
            }
        })

        gsap.from(".process-div", {
            rotateX: 90,
            ease: "none",
            scrollTrigger: {
                trigger: ".process-div",
                start: "top 80%",
                end: "top 30%",
                scrub: 1
            }
        })

        gsap.to(".process-div", {
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".process-div",
                start: "top 15%",
                end: "top 7%",
                scrub: true
            }
        })

        gsap.to(".round1", {
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".round1",
                start: "top 20%",
                end: "top 10%",
                scrub: 1
            }
        })

        gsap.to(".round2", {
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".round2",
                start: "top 20%",
                end: "top 10%",
                scrub: 1
            }
        })

        gsap.to(".about-apogee-div", {
            rotateX: 90,
            transformOrigin:"center top",
            ease: "none",
            scrollTrigger: {
                trigger: ".about-apogee-container",
                start: "top 15%",
                end: "+=300",
                scrub: true,
                pin: true,
                refreshPriority: 2
            }
        })

        document.fonts.ready.then(() => {
            ScrollTrigger.refresh();
        });

        const layoutFix = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 200);

        return () => {
            clearTimeout(layoutFix);
        };
    }, {scope: containerRef})

    return (
        <div ref={containerRef}>
            <Registration />

            <Hero />

            <AboutUs />

            <RoadToAarohan />

            <Rounds />

            <AboutApogee />

            <Testimonials />

            <Contacts />

            <Questions />
        </div>
    )
}