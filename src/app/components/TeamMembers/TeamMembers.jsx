

const teamMembers = [
  {
    name: "Jenni Schlosberg",
    role: "CEO & Founder",
    image: "./jenni.png", // Replace with actual image path
  },
  {
    name: "Pace Ellsworth",
    role: "CEO & Founder",
    image: "./pace.jpg", // Replace with actual image path
  },
  {
    name: "Gina Lansing",
    role: "CFO",
    image: "path_to_gina_image.jpg", // Replace with actual image path
  },
  {
    name: "Pash Lal",
    role: "COO",
    image: "path_to_pash_image.jpg", // Replace with actual image path
  },
  {
    name: "Holly Alsop",
    role: "Quality Assurance",
    image: "path_to_holly_image.jpg", // Replace with actual image path
  },
  {
    name: "Ken Cheng",
    role: "Construction Manager",
    image: "path_to_ken_image.jpg", // Replace with actual image path
  },
];

const TeamMembers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
          <p className="text-gray-600">{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
