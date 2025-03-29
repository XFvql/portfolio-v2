import React from "react";
import { Check } from "lucide-react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Plans = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Anda bisa menambahkan konfigurasi di sini
  }, []);
  return (
    <div className="mx-auto container py-20">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div data-aos="zoom-in-down" className="w-96 h-[34rem] rounded-md border-blue-950 bg-gray-950 border-[0.5px]">
            <div className="flex justify-start mx-8 pt-5 items-start flex-col">
              <h1 className="pt-4 font-bold text-white text-xl">Basic</h1>
              <h1 className="pt-1 font-bold text-white text-2xl">IDR 15.0000</h1>
              <h1 className="pt-5 w-72 font-bold text-slate-400 text-sm">Perfect for small businesses just getting started online.</h1>
            </div>
            <div className="flex justify-center pt-10">
              <a className="bg-gray-800 text-slate-200 w-[90%] py-2 rounded-md text-center transition-all duration-300 hover:bg-gray-700" href="">
                Get Started
              </a>
            </div>
            <div className="pt-10">
              <div className="w-full h-40 bg-gray-900">
                <div className="flex justify-start items-start flex-col pt-5 mx-2 gap-2">
                  <p className="text-slate-300 font-semibold">
                    <Check color="#3b82f6" className="inline mx-2" /> Responsif Design
                  </p>
                  <p className="text-slate-300 font-semibold">
                    <Check color="#3b82f6" className="inline mx-2" /> 1 Page
                  </p>
                  <p className="text-slate-300 font-semibold">
                    <Check color="#3b82f6" className="inline mx-2" /> 1 Week Support
                  </p>
                  <p className="text-slate-300 font-semibold">
                    <Check color="#3b82f6" className="inline mx-2" /> Free Consult
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-down" className="w-96 h-[34rem] rounded-md border-blue-500 bg-gray-950 border-2 hover:scale-105 shadow  shadow-blue-500 transition-all duration-300">
            <div className="flex justify-start mx-8 pt-5 items-start flex-col">
              <h1 className="pt-4 font-bold text-white text-xl">Profesional</h1>
              <div className="relative -top-16 left-[260px]">
                <h1 className="text-blue-400 bg-blue-950 px-[9px] py-[4px] text-sm font-bold">Best Seller</h1>
              </div>
              <h1 className="pt-1 font-bold text-white text-2xl">IDR 75.0000</h1>
              <h1 className="pt-5 w-72 font-bold text-slate-400 text-sm">Ideal for growing businesses needing more features and customization.</h1>
            </div>
            <div className="flex justify-center pt-10">
              <a className="bg-blue-500 text-slate-200 w-[90%] py-2 rounded-md text-center transition-all duration-300 hover:bg-blue-600" href="">
                Get Started
              </a>
            </div>
            <div className="pt-10">
              <div className="w-full h-40 bg-gray-900">
                <div className="flex justify-start items-start flex-col pt-5 mx-2 gap-2">
                  <p className="text-slate-300 font-semibold">
                    <Check color="#3b82f6" className="inline mx-2" /> Everything in basic
                  </p>
                  <p className="text-slate-300 font-semibold">
                    <Check color="#3b82f6" className="inline mx-2" /> Up to 5 page
                  </p>
                  <p className="text-slate-300 font-semibold">
                    <Check color="#3b82f6" className="inline mx-2" /> 1 Moonth Support
                  </p>
                  <p className="text-slate-300 font-semibold">
                    <Check color="#3b82f6" className="inline mx-2" /> Performance Optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-down" className="w-96 h-[34rem] rounded-md border-blue-950 bg-gray-950 border-[0.5px]">
            <div className="flex justify-start mx-8 pt-5 items-start flex-col">
              <h1 className="pt-4 font-bold text-white text-xl">Coming Soon</h1>
              <h1 className="pt-1 font-bold text-white text-2xl">IDR ???.0000</h1>
              <h1 className="pt-5 w-72 font-bold text-slate-400 text-sm">Comprehensive solution for established businesses with complex needs.</h1>
            </div>
            <div className="flex justify-center pt-10">
              <a className="bg-gray-800 text-slate-200 w-[90%] py-2 rounded-md text-center transition-all duration-300 hover:bg-gray-700" href="">
                Get Started
              </a>
            </div>
            <div className="pt-10">
              <div className="w-full h-auto pb-3 rounded-b-xl bg-gray-900">
                <div className="flex justify-start items-start flex-col pt-5 mx-2 gap-2">
                  <p className="text-slate-300 font-semibold">
                    <Check color="#3b82f6" className="inline mx-2" /> Everything in Professional
                  </p>
                  <p className="text-slate-300 font-semibold">
                    <Check color="#3b82f6" className="inline mx-2" /> Unlimited Page
                  </p>
                  <p className="text-slate-300 font-semibold">
                    <Check color="#3b82f6" className="inline mx-2" /> 3 Month Support
                  </p>
                  <p className="text-slate-300 font-semibold">
                    <Check color="#3b82f6" className="inline mx-2" /> Custom Web Applications
                  </p>
                  <p className="text-slate-300 font-semibold">
                    <Check color="#3b82f6" className="inline mx-2" /> User Authentication
                  </p>
                  <p className="text-slate-300 font-semibold">
                    <Check color="#3b82f6" className="inline mx-2" /> Database Integration
                  </p>
                  <p className="text-slate-300 font-semibold">
                    <Check color="#3b82f6" className="inline mx-2" /> API Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
