import React from "react";

interface JobExperience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  imageUrl: string;
  link: string; // New: Link to details page or external resource
}

const experiences: JobExperience[] = [
  {
    id: 1,
    company: "Chamberlain Group",
    position: "Software Engineering Intern",
    startDate: "June 2023",
    endDate: "August 2023",
    description:
      "Developed new features for the MyQ mobile app, improving performance and usability.",
    imageUrl: "/images/chamberlain.jpeg",
    link: "https://www.chamberlain.com", // Example link
  },
  {
    id: 2,
    company: "Delta Air Lines",
    position: "Backend Developer Intern",
    startDate: "August 2022",
    endDate: "August 2024",
    description:
      "Designed and implemented REST APIs to optimize flight booking efficiency.",
    imageUrl: "/images/delta.jpg",
    link: "https://www.delta.com",
  },
  {
    id: 3,
    company: "ITP Aero",
    position: "Software Engineer Intern",
    startDate: "January 2025",
    endDate: "Apr 2025",
    description:
      "Built internal tools for aircraft engine analysis, increasing efficiency by 20%.",
    imageUrl: "/images/itpaero.jpeg",
    link: "https://www.itpaero.com",
  },
];

const WorkExperience: React.FC = () => {
    return (
      <section className="min-h-screen bg-gray-900 text-white flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center mb-12">
            Work <span className="text-amber-300">Experience</span>
          </h2>
  
          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((job) => (
              <a
                key={job.id}
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer hover:opacity-90"
              >
                {/* Image */}
                <img
                  src={job.imageUrl}
                  alt={job.company}
                  className="w-full h-48 object-cover"
                />
  
                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{job.position}</h3>
                  <p className="text-orange-300">{job.company}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    {job.startDate} - {job.endDate}
                  </p>
                  <p className="mt-4 text-gray-300">{job.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  };
  

export default WorkExperience;
