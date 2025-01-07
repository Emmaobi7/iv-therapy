import React from "react";
import HeroSection from "../Components/Hero";
import HomeContent from "../Components/HomeContent";
import FAQSection from "../Components/Faq";
import TestimonialCarousel from "../Components/Testimonial";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <HomeContent />
            <TestimonialCarousel />
            <FAQSection />
        </div>
    );
}

export default Home;
