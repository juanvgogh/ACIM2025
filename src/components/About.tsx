
import React from 'react';

const About = () => {
  const topics = [
    {
      title: "AI in organizational decision-making",
      icon: "🤖"
    },
    {
      title: "Privacy & ethics in data-driven society",
      icon: "🔒"
    },
    {
      title: "Information governance in the public sector",
      icon: "🏛️"
    },
    {
      title: "Digital transformation in healthcare & education",
      icon: "🏥"
    },
    {
      title: "Algorithms in public policy",
      icon: "⚖️"
    }
  ];

  return (
    <section id="about" className="bg-softWhite section-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">About the Conference</h2>
        <p className="text-lg text-navy/80 mb-12 text-center">
          The 8th Annual Conference on Information Management (ACIM) brings together students, 
          academics, and industry professionals to explore cutting-edge topics in information 
          management.
        </p>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-navy">Organized by the Future of Information Management</h3>
          <p className="text-navy/80 mb-6">
            ACIM is organized by pre-master Information Management students at Tilburg University, 
            featuring presentations on pressing topics in the field. The conference aims to exchange 
            ideas and foster new insights in Information Management.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-navy">Featured Topics</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:translate-y-[-2px] border-l-4 border-navy"
              >
                <div className="flex items-start">
                  <span className="text-3xl mr-4">{topic.icon}</span>
                  <h4 className="text-lg font-medium text-navy">{topic.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 text-navy">Conference Goals</h3>
          <div className="bg-lightBlue/30 p-6 rounded-lg">
            <ul className="list-disc pl-5 space-y-2 text-navy/80">
              <li>Exchange innovative ideas between students and professionals</li>
              <li>Foster new insights in the rapidly evolving field of Information Management</li>
              <li>Bridge academic theory with industry practices</li>
              <li>Build a community of future information management professionals</li>
              <li>Explore interdisciplinary approaches to complex information challenges</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
