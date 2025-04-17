import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pattern text-white px-6 pt-16">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-4 inline-block h-1 w-16 bg-purple-500"></div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-accent">Nikhil</span>
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          I develop user interfaces for web and mobile applications.
        </p>

        <motion.button
          onClick={() => {
            const element = document.getElementById("work");
            console.log("Clicking View My Work button, target element:", element);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            } else {
              // Fallback: try to scroll to a specific position
              window.scrollTo({
                top: window.innerHeight * 2, // Approximately the position of the work section
                behavior: 'smooth'
              });
            }
          }}
          className="mt-6 inline-block bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button 
          onClick={() => {
            const element = document.getElementById("about");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="p-2 rounded-full border border-purple-500"
          title="Scroll to About section"
          aria-label="Scroll to About section"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

export default Home;
