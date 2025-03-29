// src/components/About.tsx
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl text-center space-y-6">
        <h2 className="text-4xl font-bold text-teal-400">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Hello! I'm <span className="text-teal-300 font-semibold">Nikhil Sai</span>,  
          a passionate **developer** who enjoys building impactful software.  
          I thrive on challenges and continuously explore new technologies to grow.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
