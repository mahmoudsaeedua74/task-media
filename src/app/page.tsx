"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Header from "@/components/Navbar.tsx/Header";
import tv from "../../public/croped-screen.png";
import logo from "../../public/logo.png";
import dog1 from "../../public/image-23-1.png";
import dog2 from "../../public/09d2c284fd54a90da1c9db9b00f87e97b1efff7b.png";
gsap.registerPlugin(ScrollTrigger);
export default function LandingPage() {
  const tvRef = useRef(null);
  const contentRef = useRef(null);
  const aboutRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(tvRef.current, {
        scale: 2,
        y: "1rem",
        duration: 1,
        scrollTrigger: {
          trigger: tvRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });
      gsap.to("#heroText", {
        opacity: 0,
        y: -100,
        scrollTrigger: {
          trigger: tvRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(contentRef.current, {
        display: "none",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(aboutRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="relative overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-[1000]">
        <Header />
      </div>
      <div className="relative h-screen w-full">
        <Image
          src={tv}
          alt="TV"
          fill
          className="object-cover"
          priority
          ref={tvRef}
        />

        <div
          id="heroText"
          ref={contentRef}
          className="absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center text-center text-white px-4 z-10"
        >
          <div className="mb-8">
            <Image src={logo} alt="Logo" width={180} height={100} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            we make it simple, but..
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">
            SIGNIFICANT
          </h2>
        </div>
      </div>
      <section
        ref={aboutRef}
        className="min-h-screen text-white px-6 py-20 relative z-20"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <Image src={dog1} alt="Dog 1" width={300} height={300} />
          <Image src={dog2} alt="Dog 2" width={300} height={300} />
        </div>
        <p className="mt-10 text-center max-w-3xl mx-auto text-lg">
          We are passionate about creativity and design. Our mission is to
          create simple, yet impactful media experiences that connect with
          people on a deeper level.
        </p>
                <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
      </section>
    </div>
  );
}
