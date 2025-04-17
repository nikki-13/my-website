import { motion } from "framer-motion";

// Project data
const projects = [
  {
    title: "Pneumonia Detection using Chest X-rays",
    emoji: "",
    description: "Building an advanced deep learning model for pneumonia detection using Swin Transformer. Utilizing a Kaggle Chest X-ray Dataset and optimizing for a 30GB GPU RAM environment. Experimenting with data augmentation, hyperparameter tuning, and transfer learning for improved accuracy.",
    tags: ["Deep Learning", "Vision Transformers", "PyTorch"]
  },
  {
    title: "Scalable Hybrid Chatbot",
    emoji: "",
    description: "Developed a chatbot that generates FAQ-based responses by retrieving relevant information from a vector database. Built on RAG architecture (Retrieval Augmented Generation). Used Streamlit, a Python framework, to develop the interactive chatbot's front end.",
    tags: ["LangChain", "Docker", "Streamlit", "Vector Databases", "Python"]
  }
];

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-pattern text-white px-6 py-20">
      <div className="container mx-auto max-w-5xl">
        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-white">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.emoji} {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
