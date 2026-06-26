"use client";

import { useState } from "react";
import ServiceCard from "./ServiceCard";

export default function ServiceCarousel({ services }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? services.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === services.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    if (!services || services.length === 0) {
        return null;
    }

    return (
        <div className="service-carousel">
            {services.length > 1 && (
                <button onClick={goToPrevious} className="carousel-control prev" aria-label="Previous service">
                    &#10094;
                </button>
            )}
            <div className="carousel-track-container">
                <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
            {services.length > 1 && (
                <button onClick={goToNext} className="carousel-control next" aria-label="Next service">
                    &#10095;
                </button>
            )}
        </div>
    );
}