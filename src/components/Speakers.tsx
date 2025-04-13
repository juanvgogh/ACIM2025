
import React from 'react';

type Speaker = {
  name: string;
  title: string;
  organization: string;
  topic: string;
  image: string;
  type: 'guest' | 'group';
};

const Speakers = () => {
  const speakers: Speaker[] = [
    {
      name: "Dr. Sarah Johnson",
      title: "Professor of Information Systems",
      organization: "Tilburg University",
      topic: "Ethics in AI Decision Systems",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=faces",
      type: "guest"
    },
    {
      name: "Mark Reeves",
      title: "Chief Data Officer",
      organization: "Global Tech Solutions",
      topic: "Information Governance Frameworks",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=400&fit=crop&crop=faces",
      type: "guest"
    },
    {
      name: "Dr. Elena Rodriguez",
      title: "Associate Professor of Digital Ethics",
      organization: "Oxford University",
      topic: "Privacy Implications of Emerging Technologies",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces",
      type: "guest"
    },
    {
      name: "James Chen",
      title: "AI Policy Director",
      organization: "European Commission",
      topic: "Regulatory Frameworks for AI Governance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
      type: "guest"
    },
    {
      name: "Group Alpha",
      title: "Pre-master Information Management",
      organization: "Tilburg University",
      topic: "AI in Organizational Decision-Making",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&crop=faces",
      type: "group"
    },
    {
      name: "Group Beta",
      title: "Pre-master Information Management",
      organization: "Tilburg University",
      topic: "Privacy & Ethics in Data-Driven Society",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop&crop=faces",
      type: "group"
    },
    {
      name: "Group Gamma",
      title: "Pre-master Information Management",
      organization: "Tilburg University",
      topic: "Information Governance in the Public Sector",
      image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=400&h=400&fit=crop&crop=faces",
      type: "group"
    },
    {
      name: "Group Delta",
      title: "Pre-master Information Management",
      organization: "Tilburg University",
      topic: "Digital Transformation in Healthcare",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop&crop=faces",
      type: "group"
    },
    {
      name: "Group Epsilon",
      title: "Pre-master Information Management",
      organization: "Tilburg University",
      topic: "Digital Transformation in Education",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&crop=faces",
      type: "group"
    },
    {
      name: "Group Zeta",
      title: "Pre-master Information Management",
      organization: "Tilburg University",
      topic: "Algorithms in Public Policy",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=400&fit=crop&crop=faces",
      type: "group"
    }
  ];

  const guestSpeakers = speakers.filter(speaker => speaker.type === 'guest');
  const studentGroups = speakers.filter(speaker => speaker.type === 'group');

  return (
    <section id="speakers" className="bg-navy text-softWhite section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center text-softWhite">Featured Speakers</h2>
        <p className="text-lg text-softWhite/80 mb-16 text-center max-w-3xl mx-auto">
          Learn from industry professionals and academics at the forefront of information management,
          alongside exceptional student research presentations on cutting-edge topics.
        </p>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gold text-center">Guest Speakers</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {guestSpeakers.map((speaker, index) => (
              <div key={index} className="bg-navy/40 p-6 rounded-lg backdrop-blur-sm border border-white/10 flex flex-col md:flex-row items-center md:items-start gap-6 hover:shadow-xl hover:shadow-gold/5 transition-all">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-lightBlue/30 border-2 border-gold">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold text-gold mb-1">{speaker.name}</h4>
                  <p className="text-softWhite/70 mb-1">{speaker.title}</p>
                  <p className="text-softWhite/70 mb-3">{speaker.organization}</p>
                  <div className="bg-gold/20 text-gold inline-block px-3 py-1 rounded-full text-sm">
                    {speaker.topic}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-gold text-center">Student Groups</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentGroups.map((speaker, index) => (
              <div key={index} className="bg-navy/40 p-6 rounded-lg backdrop-blur-sm border border-white/10 flex flex-col items-center gap-6 hover:shadow-xl hover:shadow-gold/5 transition-all">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-lightBlue/30">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-softWhite mb-1">{speaker.name}</h4>
                  <p className="text-softWhite/70 mb-1">{speaker.title}</p>
                  <p className="text-softWhite/70 mb-3">{speaker.organization}</p>
                  <div className="bg-lightBlue/20 text-lightBlue inline-block px-3 py-1 rounded-full text-sm">
                    {speaker.topic}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
