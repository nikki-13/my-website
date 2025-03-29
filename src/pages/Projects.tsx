// src/components/Projects.tsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "Pneumonia Detection using Swin Transformers",
    emoji: "🏆",
    description: "Deep learning-based pneumonia detection using medical imaging.",
  },
  {
    title: "Loan Agent Dashboard using ML",
    emoji: "💻",
    description: "An AI-powered dashboard for optimizing loan approvals.",
  },
  {
    title: "Chronicles of Exoplanet Exploration - NASA Space Apps",
    emoji: "🚀",
    description: "A data-driven visualization project for NASA's exoplanet research.",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 py-12">
      <motion.h2
        className="text-4xl font-extrabold text-teal-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-teal-300 mb-2">
              {project.emoji} {project.title}
            </h3>
            <p className="text-gray-400">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
