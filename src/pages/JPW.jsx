import React from "react";
import Nav from "../components/Nav";
import FeaturesGrid from "../components/FeatureGrid";
import Plans from "../components/Plans";
import TestimonialsGrid from "../components/TestimonialsGrid";
import Footer from "../components/Footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const JPW = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Anda bisa menambahkan konfigurasi di sini
  }, []);
  return (
    <div className="w-auto h-auto bg-[#060606]">
      <Nav />
      <div className="w-auto min-h-screen bg-[#060606] flex items-center">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between pt-20 lg:pt-32">
          {/* Left Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-sm font-bold text-blue-400 bg-blue-950 rounded-3xl px-4 py-2 inline-block">Website Development Service</h1>
            <h1 className="text-4xl md:text-6xl font-bold text-white pt-6 leading-tight">
              Transform Your <span className="text-blue-500">Digital Presence</span> <br /> With Custom Websites
            </h1>
            <p className="pt-6 font-serif text-lg text-slate-400 max-w-lg mx-auto lg:mx-0">We build stunning, high-performance websites tailored to your business needs and goals.</p>
            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="https://wa.me/6281217100477" data-aos="fade-up" className="px-8 py-3 rounded-md font-bold text-sm bg-blue-500 text-white hover:scale-105 transition-all">Get Started</Link>
              <Link to="#" data-aos="fade-up" className="px-8 py-3 rounded-md font-bold text-sm border-2 border-blue-500 text-white hover:bg-blue-500 transition-all duration-300">Learn More</Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
            {/* Placeholder for an image or illustration */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 hidden md:block bg-[#00000063] rounded-lg">
              <img src={logo} className="w-full h-full" alt="" />
            </div>
          </div>
        </div>
      </div>
      s
      <div className="pt-10">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-blue-400 bg-blue-950 rounded-3xl px-[9px] py-[4px] text-sm font-bold">Our Service</h1>
          <h1 className="pt-5 text-white font-bold text-3xl text-center">Comprehensive Web Solutions</h1>
          <p className="text-sm font-semibold text-slate-400 pt-3 text-center">We offer end-to-end web development services to help your business thrive online.</p>
        </div>
        <div className="pt-20">
          <FeaturesGrid />
        </div>
      </div>
      <div className="pt-40">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-blue-400 bg-blue-950 rounded-3xl px-[9px] py-[4px] text-sm font-bold">Pricing Plans</h1>
          <h1 className="pt-5 text-white font-bold text-3xl">Chose Your Perfect Plan</h1>
          <p className="text-sm font-semibold text-slate-400 pt-3 text-center mx-2 md:mx-0">Flexible pricing options designed to accommodate businesses of all sizes and needs.</p>
        </div>
        <Plans />
      </div>
      <div className="pt-40">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-blue-400 bg-blue-950 rounded-3xl px-[9px] py-[4px] text-sm font-bold">Testimonials</h1>
          <h1 className="pt-5 text-white font-bold text-3xl text-center">What Our Clients Say</h1>
          <p className="text-sm font-semibold text-slate-400 pt-3 text-center mx-2 md:mx-0">Don't just take our word for it - hear from some of our satisfied clients.</p>
        </div>
      </div>
      <div className="pt-16">
        <TestimonialsGrid />
      </div>
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
};

export default JPW;
