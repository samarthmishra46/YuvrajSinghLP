import React from "react";

const skills = [
  "Copywriting",
  "Consumer psychology",
  "Persuasion",
  "Performance marketing",
  "Filmmaking",
  "Storytelling",
];

const SkillPills: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center mb-8">
      <h2 className="text-center text-lg mt-4 font-semibold mb-4">
        Skill Mix I Use:
      </h2>

      {/* Natural wrapping, same look as screenshot */}
      <div className="flex flex-wrap justify-center gap-3 max-w-sm">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-500/50 to-pink-400/50 p-[1px] rounded-full"
          >
            <div className="bg-white rounded-full px-5 py-2 text-sm font-medium text-gray-800 text-center whitespace-nowrap">
              {skill}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillPills;
