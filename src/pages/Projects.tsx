import { motion } from "framer-motion";

// Project data
const projects = [
  {
    title: "Pneumonia Detection using Chest X-rays",
    emoji: "",
    description: "Building an advanced deep learning model for pneumonia detection using Swin Transformer. Utilizing a Kaggle Chest X-ray Dataset and optimizing for a 30GB GPU RAM environment. Experimenting with data augmentation, hyperparameter tuning, and transfer learning for improved accuracy.",
    tags: ["Deep Learning", "Vision Transformers", "PyTorch"],
    githubUrl: "https://github.com/nikki-13/pneumonia_detection",
    liveUrl: "https://your-pneumonia-demo.vercel.app" // Update this with your actual live demo URL
  },
  {
    title: "Scalable Hybrid Chatbot",
    emoji: "",
    description: "Developed a chatbot that generates FAQ-based responses by retrieving relevant information from a vector database. Built on RAG architecture (Retrieval Augmented Generation). Used Streamlit, a Python framework, to develop the interactive chatbot's front end.",
    tags: ["LangChain", "Docker", "Streamlit", "Vector Databases", "Python"],
    githubUrl: "https://github.com/nikki-13/hybrid-chatbot"
  },
  {
    title: "Weather Application",
    emoji: "🌤️",
    description: "A modern weather application built with React, TypeScript, and Vite. Features include searching weather by location, current weather display with real-time information, multi-day forecasts, weather history tracking, and responsive design. Built with beautiful UI components and integrated with weather APIs for accurate data.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "API Integration"],
    githubUrl: "https://github.com/nikki-13/weather",
    liveUrl: "https://your-weather-app.vercel.app" // Update this with your actual live demo URL
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
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View on GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
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
