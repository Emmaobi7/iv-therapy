import React from "react";
import HeroSection from "../Components/Hero";
import HomeContent from "../Components/HomeContent";
import FAQSection from "../Components/Faq";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <HomeContent />
            <FAQSection />
        </div>
    );
}

export default Home;
