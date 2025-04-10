// src/components/Projects.tsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "Pneumonia Detection using Chest X-rays",
    emoji: "🏆",
    description: "Building an advanced deep learning model for pneumonia detection using Swin Transformer. Utilizing a Kaggle Chest X-ray Dataset and optimizing for a 30GB GPU RAM environment. Experimenting with data augmentation, hyperparameter tuning, and transfer learning for improved accuracy. Building a Website Using React Vite(Frontend) and Node.Js(Backend).",
    tags: ["Deep Learning", "Vision Transformers", "PyTorch"]
  },
  {
    title: "Scalable Hybrid Chatbot",
    emoji: "🤖",
    description: "Developed a chatbot that generates FAQ-based responses by retrieving relevant information from a vector database. Built on RAG architecture (Retrieval Augmented Generation). Used Streamlit, a Python framework, to develop the interactive chatbot's front end.",
    tags: ["LangChain", "Docker", "Streamlit", "Vector Databases", "Python"]
  }
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
            <p className="text-gray-400 mb-3">{project.description}</p>
            {project.tags && (
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="bg-teal-900 text-teal-200 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
