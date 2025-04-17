import { motion } from "framer-motion";

// Skills data with inline SVG icons
const skills = [
  { 
    name: "React JS", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10">
        <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
        <path d="M12 21.5C18.3513 21.5 23.5 17.1944 23.5 12C23.5 6.80558 18.3513 2.5 12 2.5C5.64873 2.5 0.5 6.80558 0.5 12C0.5 17.1944 5.64873 21.5 12 21.5Z" stroke="#61DAFB" strokeWidth="1" fill="none"/>
        <path d="M12 21.5C15.3513 21.5 18 17.1944 18 12C18 6.80558 15.3513 2.5 12 2.5C8.64873 2.5 6 6.80558 6 12C6 17.1944 8.64873 21.5 12 21.5Z" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
        <path d="M12 21.5C15.3513 21.5 18 17.1944 18 12C18 6.80558 15.3513 2.5 12 2.5C8.64873 2.5 6 6.80558 6 12C6 17.1944 8.64873 21.5 12 21.5Z" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    )
  },
  { 
    name: "TypeScript", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10">
        <rect width="24" height="24" rx="2" fill="#3178C6"/>
        <path d="M14.4 12.04V14.4H12.72V21.6H10.32V14.4H8.64V12.04H14.4ZM21.6 14.64C21.6 15.2 21.44 15.68 21.12 16.08C20.8 16.48 20.36 16.8 19.8 17.04C19.24 17.28 18.6 17.4 17.88 17.4C17.36 17.4 16.88 17.36 16.44 17.28C16 17.2 15.56 17.04 15.12 16.8V14.76C15.6 15.04 16.08 15.24 16.56 15.36C17.04 15.48 17.48 15.56 17.88 15.56C18.16 15.56 18.36 15.52 18.48 15.44C18.6 15.36 18.68 15.24 18.68 15.08C18.68 14.96 18.64 14.84 18.56 14.76C18.48 14.68 18.32 14.56 18.08 14.44C17.84 14.32 17.48 14.16 17 13.96C16.56 13.76 16.2 13.56 15.92 13.36C15.64 13.16 15.44 12.92 15.28 12.64C15.12 12.36 15.04 12 15.04 11.56C15.04 10.84 15.32 10.28 15.88 9.88C16.44 9.48 17.2 9.28 18.16 9.28C18.56 9.28 18.96 9.32 19.36 9.4C19.76 9.48 20.16 9.6 20.56 9.76L19.92 11.52C19.6 11.4 19.28 11.28 18.96 11.2C18.64 11.12 18.36 11.08 18.12 11.08C17.88 11.08 17.68 11.12 17.56 11.2C17.44 11.28 17.36 11.4 17.36 11.52C17.36 11.64 17.4 11.76 17.48 11.84C17.56 11.92 17.72 12.04 17.96 12.16C18.2 12.28 18.56 12.44 19.04 12.64C19.52 12.84 19.88 13.04 20.16 13.24C20.44 13.44 20.64 13.68 20.8 13.96C20.96 14.24 21.04 14.56 21.04 14.96L21.6 14.64Z" fill="white"/>
      </svg>
    )
  },
  { 
    name: "JavaScript", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10">
        <rect width="24" height="24" rx="2" fill="#F7DF1E"/>
        <path d="M6.8 17.9L8.6 16.8C8.9 17.4 9.2 17.8 9.8 17.8C10.4 17.8 10.8 17.6 10.8 16.8V10H13V16.8C13 19 11.7 20 9.9 20C8.3 20 7.3 19.1 6.8 17.9ZM14.3 17.7L16.1 16.6C16.5 17.3 17 17.8 17.9 17.8C18.7 17.8 19.2 17.4 19.2 16.8C19.2 16.1 18.7 15.8 17.8 15.4L17.3 15.2C15.9 14.6 15 13.8 15 12.2C15 10.7 16.2 9.6 17.8 9.6C19 9.6 19.9 10 20.5 11.1L18.8 12.3C18.5 11.7 18.2 11.4 17.8 11.4C17.4 11.4 17.1 11.7 17.1 12.1C17.1 12.6 17.4 12.9 18.2 13.3L18.7 13.5C20.3 14.2 21.2 15 21.2 16.6C21.2 18.4 19.8 19.7 18 19.7C16.2 19.7 15 18.9 14.3 17.7Z" fill="black"/>
      </svg>
    )
  },
  { 
    name: "Tailwind CSS", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M12.001 4.8C9.601 4.8 8.101 6.2 7.501 9C8.401 7.8 9.501 7.2 10.801 7.2C12.901 7.2 14.001 8.4 15.001 9.5C16.001 10.6 17.001 11.5 19.001 11.5C21.401 11.5 22.901 10.1 23.501 7.3C22.601 8.5 21.501 9.1 20.201 9.1C18.101 9.1 17.001 7.9 16.001 6.8C15.001 5.7 14.001 4.8 12.001 4.8ZM7.501 11.5C5.101 11.5 3.601 12.9 3.001 15.7C3.901 14.5 5.001 13.9 6.301 13.9C8.401 13.9 9.501 15.1 10.501 16.2C11.501 17.3 12.501 18.2 14.501 18.2C16.901 18.2 18.401 16.8 19.001 14C18.101 15.2 17.001 15.8 15.701 15.8C13.601 15.8 12.501 14.6 11.501 13.5C10.501 12.4 9.501 11.5 7.501 11.5Z" fill="#38BDF8"/>
      </svg>
    )
  },
  { 
    name: "PyTorch", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M12.005 7.5C12.005 9.1575 10.6625 10.5 9.005 10.5C7.3475 10.5 6.005 9.1575 6.005 7.5C6.005 5.8425 7.3475 4.5 9.005 4.5C10.6625 4.5 12.005 5.8425 12.005 7.5Z" fill="#EE4C2C"/>
        <path d="M17.255 14.5C17.255 16.1575 15.9125 17.5 14.255 17.5C12.5975 17.5 11.255 16.1575 11.255 14.5C11.255 12.8425 12.5975 11.5 14.255 11.5C15.9125 11.5 17.255 12.8425 17.255 14.5Z" fill="#EE4C2C"/>
        <path d="M14.255 7.5C14.255 9.1575 15.5975 10.5 17.255 10.5C18.9125 10.5 20.255 9.1575 20.255 7.5C20.255 5.8425 18.9125 4.5 17.255 4.5C15.5975 4.5 14.255 5.8425 14.255 7.5Z" fill="#EE4C2C"/>
      </svg>
    )
  }
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
              Passionate student Who's interested in machine learning and front-end development.
              Experienced in building web applications using React, TypeScript, and Tailwind CSS.
              Strong foundation in Python and PyTorch for machine learning projects.
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
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-2">
                  {skill.icon}
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
