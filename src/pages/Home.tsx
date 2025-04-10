// src/components/Home.tsx
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-teal-400 mb-4">
          Hi, I'm <span className="text-teal-300">Nikhil Sai</span>
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm a **passionate developer** exploring AI, Machine Learning, and Full Stack Development.  
          I love building **impactful software** and solving real-world problems.
        </p>

        <motion.a
          href="/projects"
          className="mt-6 inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View My Projects 🚀
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Home;
