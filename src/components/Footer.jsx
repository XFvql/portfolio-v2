const Footer = () => {
  return (
    <footer className="bg-[#060606] text-gray-400 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo & Description */}
        <div>
          <h2 className="text-white text-xl font-bold flex items-center">
            <span className="text-blue-500 text-2xl mr-2">&lt;/&gt;</span> XFazzSolutions
          </h2>
          <p className="mt-4">
            Creating stunning, high-performance websites for businesses of all sizes.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <i className="fab fa-facebook text-xl"></i>
            <i className="fab fa-instagram text-xl"></i>
            <i className="fab fa-twitter text-xl"></i>
            <i className="fab fa-github text-xl"></i>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Web Design</li>
            <li>Web Development</li>
            <li>E-commerce</li>
            <li>CMS Integration</li>
            <li>SEO Optimization</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Our Work</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>123 Web Street</li>
            <li>San Francisco, CA 94107</li>
            <li>contact@xfazzdev.com</li>
            <li>(123) 456-7890</li>
          </ul>
        </div>
      </div>

      {/* Copyright & Policies */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-8 px-6">
        <p className="text-sm">&copy; 2025 XFazzDev. All rights reserved.</p>
        <div className="flex space-x-6 text-sm">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
