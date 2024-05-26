
import React, { useState } from "react";
const TimeLine: React.FC = () => {
  const years = Array.from({ length: 15 }, (_, i) => 2010 + i);

  const descriptions = [
    "Started my journey as a product designer, focusing on learning the basics of user experience and interface design.",
    "Worked on my first major project, redesigning a local business's website to improve user engagement.",
    "Joined a startup team, where I led the design of a new mobile app aimed at simplifying personal finance management.",
    "Focused on improving my skills in prototyping and wireframing, taking several online courses and workshops.",
    "Collaborated with a cross-functional team to launch a new e-commerce platform, enhancing the overall user experience.",
    "Explored the world of user research, conducting surveys and interviews to better understand user needs.",
    "Started experimenting with new design tools and methodologies to streamline the design process.",
    "Led a project to redesign a major component of a popular social media platform, improving user retention.",
    "Mentored junior designers and conducted design workshops within the company.",
    "Focused on integrating accessibility into design practices, ensuring inclusivity in all projects.",
    "Took on a leadership role, managing a team of designers and overseeing multiple projects.",
    "Worked on an innovative project that combined AI and design to personalize user experiences.",
    "Started exploring the potential of VR and AR in product design, working on several experimental projects.",
    "Contributed to open-source design projects, sharing knowledge and learning from the community.",
    "Focused on sustainability in design, creating products that are not only user-friendly but also environmentally responsible.",
  ];

  const [isNearBottom, setIsNearBottom] = useState(false);

  const handleMouseEnter = (index: number) => {
    if (index >= Math.floor(years.length * 0.4)) {
      setIsNearBottom(false);
    } else {
      setIsNearBottom(true);
    }
  };

  return (
    <div className="w-full">
      <ul className="flex w-24 items-center justify-center flex-col-reverse transform">
        <li className="relative flex flex-row gap-2 py-1">
          <p className="text-xl font-regular text-accent">Present</p>
        </li>
        {years.map((year, index) => (
          <li
          onMouseEnter={() => handleMouseEnter(index)}
            className="relative group flex flex-row gap-2 py-1 ease-in-out duration-300"
            key={year}
          >
            <div className="flex flex-col items-center gap-2 transition-all ">
              <span className="w-8 border-b-2 border-muted-foreground group-hover:w-10 group-hover:border-accent duration-300" />
              <span className="w-8 border-b-2 border-muted-foreground group-hover:w-12 group-hover:border-accent duration-300" />
              <span className="w-8 border-b-2 border-muted-foreground group-hover:w-10 group-hover:border-accent duration-300" />
            </div>
            <div className={`absolute opacity-0 group-hover:opacity-100 ml-2 ${isNearBottom ? 'bottom-0' : 'top-0'} top-0 left-14 flex ${isNearBottom ? 'flex-col-reverse' : 'flex-col'} gap-2 rounded-md duration-300 ease-in-out px-2 py-2 items-start`}>
              <span className="bg-secondary text-secondary-foreground rounded-sm px-2 py-1">
                {year}
              </span>
              <p className="w-[200px] md:w-[600px] text-accent-foreground bg-accent p-2 rounded-md">
                {descriptions[index]}
              </p>
            </div>
          </li>
        ))}
        <li className="relative flex flex-row gap-2 py-1">
          <p className="text-xl font-regular text-accent">Past</p>
        </li>
      </ul>
    </div>
  );
};

export default TimeLine;


