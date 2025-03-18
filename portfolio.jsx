import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Nikhil Sai</h1>
        <Button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</Button>
      </header>

      <section className="p-6 text-center">
        <h2 className="text-xl font-semibold">About Me</h2>
        <p>Software Engineer | ML Enthusiast | React Developer</p>
      </section>

      <section className="p-6">
        <h2 className="text-xl font-semibold">Projects</h2>
        <ul>
          <li>🔹 <a href="https://github.com/nikki-13/project1" target="_blank">Project 1</a></li>
          <li>🔹 <a href="https://github.com/nikki-13/project2" target="_blank">Project 2</a></li>
        </ul>
      </section>

      <section className="p-6 text-center">
        <h2 className="text-xl font-semibold">Contact</h2>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/nikki-13" target="_blank"><FaGithub size={24} /></a>
          <a href="https://linkedin.com/in/nikhilsai" target="_blank"><FaLinkedin size={24} /></a>
          <a href="mailto:nikhilsai@example.com"><FaEnvelope size={24} /></a>
        </div>
      </section>
    </div>
  );
}
