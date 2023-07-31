//component that displays testimonials as a carousel

// import React, { Component } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import './style.css';
// import { getTestimonials } from '@/app/GlobalRedux/store';
// import { useSelector, useDispatch } from 'react-redux';

// const Testimonials = () => {
//     const testimonials = useSelector((state) => state.testimonials); 
//     const dispatch = useDispatch();
//     console.log(testimonials);
//     return (
//         <Carousel className="carousel-container" showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000} showStatus={false}>
//             {testimonials.map((testimonial) => (
//                 <div className="carousel-item">
//                     <h3>{testimonial.name}</h3>
//                     <p>{testimonial.testimonial}</p>
//                 </div>
//             ))}
//         </Carousel>
//     );
// }

"use client"
import React, { useState } from 'react';


const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sapien quis dui interdum bibendum.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'Nullam commodo nunc sit amet metus aliquet, nec ullamcorper urna volutpat.',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
];

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  return (
    <div className="testimonials-carousel">
      <div className="testimonial">
        <p className="testimonial-text">{testimonialsData[currentTestimonial].text}</p>
        <p className="testimonial-author">- {testimonialsData[currentTestimonial].name}</p>
      </div>
      <div className="carousel-arrows">
        <button onClick={handlePrev}>&#8249;</button>
        <button onClick={handleNext}>&#8250;</button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;