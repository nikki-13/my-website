import { motion } from "framer-motion";

// Skills data with inline SVG icons
const skills = [
  {
    name: "Python",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 255" className="w-10 h-10">
        <linearGradient id="python-gradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="100%" stopColor="#FFD43B" />
        </linearGradient>
        <path fill="url(#python-gradient)" d="M126.9.2c-11.2.1-21.9 1-31.6 2.6-27.9 4.5-33 13.8-33 31.1v22.8h66v8.5H61.4c-17.3 0-32.6 10.4-37.4 30.1-5.5 22.8-5.8 37.1 0 61.4 4.2 17.6 14.2 30.1 31.4 30.1h20.5v-27c0-19.5 17-37.2 37.4-37.2h66c16.8 0 30.1-13.7 30.1-30.5V33.9c0-16.2-13.3-28.8-30.1-31.1-11.2-1.6-22.6-2.6-33.4-2.6h-.3zm-34.5 20.1c6.2 0 11.2 5 11.2 11.2s-5 11.2-11.2 11.2c-6.2 0-11.2-5-11.2-11.2s5-11.2 11.2-11.2zM199.5 66.4v26.8c0 20.6-16.7 37.1-37.4 37.1h-66c-16.5 0-30.1 13.8-30.1 30.5v59.3c0 16.2 13.7 25.7 30.1 30.5 19.1 5.2 37.4 6.2 66 0 15.1-3.1 30.1-9.2 30.1-30.5v-22.8h-66v-8.5h99c17.3 0 23.8-12.1 30.1-30.1 6.3-18 6-35.3 0-61.4-4.3-17.5-12.8-30.1-30.1-30.1h-26.6zm-34.7 140.8c6.2 0 11.2 5 11.2 11.2s-5 11.2-11.2 11.2c-6.2 0-11.2-5-11.2-11.2s5-11.2 11.2-11.2z"/>
      </svg>
    )
  },
  {
    name: "HTML5",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 361" className="w-10 h-10">
        <path fill="#E34F26" d="M127.6 360.5L23.7 329.6 0 0h256l-23.7 329.5-104.7 31z" />
        <path fill="#EF652A" d="M128 33.2v296.6l84.6-25.2L230 33.2H128z" />
        <path fill="#fff" d="M128 150.2H90.5l-2.8-31.5h40.3V88.1H57.5l.7 9.7 7 78.5H128v-25.9zm0 66.5l-.1.1-33.9-9.1-2.2-25h-28l4.3 48.3 59.8 16.6.1-.1v-30.8z" />
        <path fill="#EBEBEB" d="M128 150.2v25.9h36.8l-3.5 39.2-33.3 9.1v30.8l59.8-16.6.5-5.9 6.9-77.8.7-9.7H128v25.9zm0-62.1v30.6h68.3l.6-6.7 1.3-14.7.7-9.2H128z" />
      </svg>
    )
  },
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
    name: "Oracle SQL",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-10 h-10">
        <path fill="#F80000" d="M125.7 176.8h260.6c20.5 0 37.2 16.7 37.2 37.2v84c0 20.5-16.7 37.2-37.2 37.2H125.7c-20.5 0-37.2-16.7-37.2-37.2v-84c0-20.5 16.7-37.2 37.2-37.2zm-8.7 37.2v84c0 4.8 3.9 8.7 8.7 8.7h260.6c4.8 0 8.7-3.9 8.7-8.7v-84c0-4.8-3.9-8.7-8.7-8.7H125.7c-4.8 0-8.7 3.9-8.7 8.7z"/>
        <path fill="#F80000" d="M163.3 244.6h35.6c4.9 0 8.7-3.9 8.7-8.7s-3.9-8.7-8.7-8.7h-35.6c-4.9 0-8.7 3.9-8.7 8.7s3.8 8.7 8.7 8.7zm58.1 0h89.2c4.9 0 8.7-3.9 8.7-8.7s-3.9-8.7-8.7-8.7h-89.2c-4.9 0-8.7 3.9-8.7 8.7s3.9 8.7 8.7 8.7z"/>
      </svg>
    )
  },
  { 
    name: "PyTorch", 
    icon: (
      <svg
      className="w-10 h-10"
      viewBox="0 0 256 273"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M128.002.002 128 57.644l49.004 48.001v.002a62.372 62.372 0 0 1 18.29 44.59c0 16.64-6.482 32.274-18.26 44.033-11.759 11.76-27.392 18.242-44.032 18.242s-32.273-6.481-44.032-18.26c-11.76-11.758-18.242-27.391-18.242-44.031s6.482-32.274 18.26-44.033c5.901-5.901 12.939-10.384 20.67-13.32l-21.815-51.55C45.305 85.848 18.494 122.592 18.494 164.237c0 60.528 49.002 109.53 109.53 109.53s109.53-49.002 109.53-109.53c0-30.221-11.774-58.604-33.14-79.943L128.002.002Zm.01 155.927a17.147 17.147 0 1 1 0 34.295 17.147 17.147 0 0 1 0-34.295Z"
        fill="#EE4C2C"
      />
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
