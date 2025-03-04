import React from "react";
import "./index.css";

const projects = [
  { id: 1, name: "BUDDY SYSTEM", image: "./BDS.jpeg", link: " https://buddy-system-chi.vercel.app/" },
  { id: 2, name: "CBCS SELECTION", image: "./CBCS.jpeg", link: "https://sathyabama-cbcs.vercel.app/" },
  { id: 3, name: "STUDENT MARK ANALYSIS", image: "./MARK ANALYSIS.jpeg", link: "https://student-mark-analysis-r7ar.onrender.com/" },
  { id: 4, name: "ARREAR NOTES", image: "/ARREAR MANEGEMENT.jpeg", link: "https://project-setup-1.onrender.com/" },
  { id: 5, name: "ARREAR MANAGEMENT SYSTEM", image: "/AMS.jpeg", link: "https://arrear-managament.onrender.com/" },
  { id: 6, name: "IT-SEMINAR HALL BOOKING", image: "/SEMINAR HALL.jpeg", link: "https://it-dept-event-hall-booking.vercel.app/" },
  { id: 7, name: "MENTOR-MENTEE", image: "/mentor.jpeg", link: "https://drive.google.com/file/d/1l2P2OEOaiAjmKZtIIMxYoF0HVwtKl2Gq/view?ts=67c67b28&pli=1" },

];

export default function App() {
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: "url('/bg.jpg')" }}>
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4 ">Welcome to Digital IT Connect</h1>
        <button
          onClick={scrollToProjects}
          className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-lg "
        >
          Explore Smart Solution
        </button>
      </div>

      {/* Projects Section */}
      <div id="projects" className="w-full py-16 text-center bg-opacity-60">
        <h2 className="text-3xl font-bold text-white mb-6">Our Projects</h2>
        <div className="flex flex-wrap justify-center gap-6 px-8">
  {projects.map((project, index) => (
    <div key={project.id} className="p-4 rounded-lg shadow-lg bg-gray-800 bg-opacity-80 w-80">
      <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
      <a
        href={project.link}
        className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        View
      </a>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
