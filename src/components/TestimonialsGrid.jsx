import { Quote } from "lucide-react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const TestimonialCard = ({ text, name, company }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Anda bisa menambahkan konfigurasi di sini
  }, []);
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="p-6 rounded-lg bg-[#0A0A0A] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-blue-500">
      <Quote color="#3b82f6" className="h-8 w-8 text-blue-500 mb-4" />
      <p className="text-lg mb-4">{text}</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
        <div>
          <h3 className="font-bold text-white">{name}</h3>
          <p className="text-gray-400">{company}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsGrid = () => {
  const testimonials = [
    {
      text: "XFazzDev transformed our online presence completely. Our new website has increased our leads by 150% in just three months!",
      name: "TheDranxX",
      company: "Brafinex Company",
    },
    {
      text: "The team delivered our e-commerce site ahead of schedule and the attention to detail was impressive. Sales are up 200% from our old site.",
      name: "Bremset",
      company: "Cryspieal Network",
    },
    {
      text: "Working with XFazzSolutions was a breeze. They understood our vision immediately and executed it perfectly. Highly recommended!",
      name: "Theslowaja",
      company: "Prova Network",
    },
  ];

  return (
    <section className="py-12 px-4 md:py-20 bg-[#060606]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;
