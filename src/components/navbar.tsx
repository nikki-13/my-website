import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react"; // Icons for mobile menu and social links

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-gray-900 bg-opacity-90 text-white shadow-md fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Social Links / Logo */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection("home")}
              className={`hover:text-purple-400 transition-colors ${activeSection === "home" ? "text-purple-400" : ""}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className={`hover:text-purple-400 transition-colors ${activeSection === "about" ? "text-purple-400" : ""}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("work")}
              className={`hover:text-purple-400 transition-colors ${activeSection === "work" ? "text-purple-400" : ""}`}
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className={`hover:text-purple-400 transition-colors ${activeSection === "contact" ? "text-purple-400" : ""}`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-3 py-4 text-center">
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("work")}>Work</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
