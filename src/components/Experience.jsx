import React from 'react';
import AnimatedText  from './AnimatedText';
import TimelineItem from './TimelineItem';

const Experience = () => {
  const experiences = [
    {
      date: "July 2024 - Present",
      title: "Software Developer",
      company: "Zplus Cyber Secure Technologies Pvt.Ltd, Pune",
      description: "Designed and developed web applications using React.js, JavaScript, and Redux. Integrated RESTful APIs and implemented responsive UI using Tailwind CSS and Material-UI. Optimized application performance and fixed bugs to ensure a seamless user experience. Collaborated with cross-functional teams using GitHub and followed Agile methodologies."
    },
    {
      date: "April 2024 - June 2024",
      title: "React.js Developer",
      company: "BrainWave Matrix Solution",
      description: "Completed React.js certification and training. Developed responsive UI components and gained practical experience in modern frontend technologies. Worked on projects that enhanced technical skills and problem-solving abilities."
    },
    {
      date: "2020 - 2023",
      title: "Bachelor of Computer Applications",
      company: "Shreemati Nathibai Damodar Thackersey Women's University",
      description: "Completed Bachelor's degree with focus on computer science fundamentals, programming languages, and web development technologies. Worked on various academic projects to apply theoretical knowledge in practical scenarios."
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <AnimatedText 
          text="Experience & Education" 
          className="text-3xl md:text-4xl font-bold mb-2"
          variant="default"
        />
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
      </div>
      
      <div className="relative py-8">
        {/* Timeline Container */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index}
              index={index}
              date={exp.date}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;