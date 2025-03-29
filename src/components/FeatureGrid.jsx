import { Globe, Zap, Database, Layers, Compass, Code } from "lucide-react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const FeatureCard = ({ icon, title, description }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Anda bisa menambahkan konfigurasi di sini
  }, []);
  return (
    <div data-aos="zoom-in" className="p-6 rounded-lg bg-card text-card-foreground shadow-sm transition-all hover:shadow-md hover:shadow-blue-500 duration-300 bg-gray-950 hover:scale-105 hover:border hover:border-blue-500 hover:cursor-pointer">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-slate-100">{title}</h3>
      <p className="text-muted-foreground text-slate-400 font-semibold">{description}</p>
    </div>
  );
};

const FeaturesGrid = () => {
  const features = [
    { icon: <Globe color="#3b82f6" className="h-10 w-10 text-purple-500" />, title: "Responsive Design", description: "Websites that look and function perfectly on all devices, from desktops to smartphones." },
    { icon: <Zap color="#3b82f6" className="h-10 w-10 text-purple-500" />, title: "Performance Optimization", description: "Lightning-fast loading speeds and optimized user experience for maximum engagement." },
    { icon: <Database color="#3b82f6" className="h-10 w-10 text-purple-500" />, title: "CMS Integration", description: "Easy content management with custom WordPress, Shopify, or headless CMS solutions." },
    { icon: <Layers color="#3b82f6" className="h-10 w-10 text-purple-500" />, title: "E-commerce Solutions", description: "Fully-featured online stores with secure payment processing and inventory management." },
    { icon: <Compass color="#3b82f6" className="h-10 w-10 text-purple-500" />, title: "SEO Optimization", description: "Built-in search engine optimization to improve your visibility and rankings." },
    { icon: <Code color="#3b82f6" className="h-10 w-10 text-purple-500" />, title: "Custom Development", description: "Tailor-made web applications and features to meet your specific business requirements." }
  ];

  return (
    <section className="py-12 px-4 md:py-10 bg-background">
      <div className="container mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
