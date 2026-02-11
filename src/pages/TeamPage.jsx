
import { Link } from "react-router-dom";
export default function TeamPage() {
  const teamMembers = [
    {
      name: "Gökhan Özdemir",
      role: "Project Manager",
      image: "https://via.placeholder.com/300x300?text=Gökhan",
      linkedin: "https://linkedin.com/in/gokhan-ozdemir"
    },
    {
      name: "Doğa Karaosmanoğlu",
      role: "Full Stack Developer",
      image: "https://via.placeholder.com/300x300?text=Doga",
      linkedin: "#"
    },
    {
      name: "Üye 1",
      role: "Frontend Developer",
      image: "https://via.placeholder.com/300x300?text=Üye1",
      linkedin: "#"
    },
    {
      name: "Üye 2",
      role: "UI/UX Designer",
      image: "https://via.placeholder.com/300x300?text=Üye2",
      linkedin: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Ekibimiz</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600 mt-1">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}