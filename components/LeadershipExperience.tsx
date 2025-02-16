import React from "react";

interface LeadershipRole {
  id: number;
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  description: string[];
  imageUrl?: string; // Optional image
}

const leadershipRoles: LeadershipRole[] = [
  {
    id: 1,
    title: "Study And Work Abroad",
    organization: "University Of Cincinnati",
    startDate: "January 2024",
    endDate: "Present",
    description: [
      "Currently studying abroad in Spain while working as a Data Science Intern at ITP Aero, gaining hands-on experience in an international work environment and adapting to cross-cultural collaboration",
      "Developing technical solutions in a global setting, collaborating with international teams in Spain to optimize data acquisition systems and improve visualization tools in an aerospace environment",
      "Expanding technical and professional skills through a study abroad program in Spain, integrating academic learning with real-world applications in data science and software development."
    ],
    imageUrl: "/images/Spain.jpeg",
  },
  {
    id: 2,
    title: "Community Service Chair",
    organization: "Delta Air Lines",
    startDate: "May 2023",
    endDate: "August 2023",
    description: [
      "Coordinated a 24-hour coding competition with over 300 participants, providing workshops and mentorship opportunities for attendees.",
      "Managed logistics, sponsorships, and event scheduling to ensure a seamless experience for all participants.",
      "Facilitated a judging panel with industry experts, awarding over $10,000 in prizes to top-performing teams.",
    ],
    imageUrl: "/images/Cmchair.jpeg",
  },
  {
    id: 3,
    title: "Student Orientation leader",
    organization: "University Of Cincinnati",
    startDate: "April 2021",
    endDate: "May 2024",
    description: [
      "Coordinated a 24-hour coding competition with over 300 participants, providing workshops and mentorship opportunities for attendees.",
      "Managed logistics, sponsorships, and event scheduling to ensure a seamless experience for all participants.",
      "Facilitated a judging panel with industry experts, awarding over $10,000 in prizes to top-performing teams.",
    ],
    imageUrl: "/images/Cmchair.jpeg",
  },
];

const LeadershipExperience: React.FC = () => {
    return (
      <section className="min-h-screen bg-gray-900 text-white flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center mb-10">
            Leadership <span className="text-amber-300">Experience</span>
          </h2>
  
          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipRoles.map((role) => (
              <div
                key={role.id}
                className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 h-[500px] flex flex-col justify-between"
              >
                {/* Image */}
                {role.imageUrl && (
                  <img
                    src={role.imageUrl}
                    alt={role.organization}
                    className="w-full h-48 object-cover"
                  />
                )}
  
                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold">{role.title}</h3>
                    <p className="text-orange-300">{role.organization}</p>
                    <p className="text-sm text-gray-400 mt-2">
                      {role.startDate} - {role.endDate}
                    </p>
                  </div>
  
                  {/* Description Paragraphs */}
                  <div>
                    {role.description.map((paragraph, index) => (
                      <p key={index} className="mt-4 text-gray-300">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default LeadershipExperience;
  