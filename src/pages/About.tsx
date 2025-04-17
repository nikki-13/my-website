import { motion } from "framer-motion";

// Skills data
const skills = [
  { name: "React JS", icon: "react.svg" },
  { name: "TypeScript", icon: "typescript.svg" },
  { name: "JavaScript", icon: "javascript.svg" },
  { name: "Redux Toolkit", icon: "redux.svg" },
  { name: "Tailwind CSS", icon: "tailwind.svg" },
  { name: "AWS", icon: "aws.svg" },
  { name: "Android", icon: "android.svg" },
  { name: "iOS", icon: "ios.svg" }
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-pattern text-white px-6 py-20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold mb-8 text-white">
            Overview<span className="text-accent">.</span>
          </h2>
          <div className="space-y-4 text-gray-300 text-lg">
            <p>
              Front-end developer with 4 years of experience in website design and mobile platforms.
              Proficient in React, React Native, JavaScript, TypeScript, and blockchain technology.
            </p>
            <p>
              Seeking a collaborative work environment to continuously improve skills and knowledge.
              Committed to staying up-to-date with industry advancements and embracing new
              challenges in front-end development.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-accent">Skills & Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-2">
                  <div className="text-2xl text-accent">{skill.name.charAt(0)}</div>
                </div>
                <span className="text-sm text-gray-300">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
