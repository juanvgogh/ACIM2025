import React, { useState } from "react";

const guestSpeakers = [
  {
    name: "Remko van der Burght",
    title: "Chief Data Officer",
    organization: "Gemeente Den Haag",
    topic: "T.B.D",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQGExSz-mxrFOg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1655383670237?e=1750896000&v=beta&t=fRal3i56yFo9MxshCWMg_2EzrtB69G8qwNK5BhfuhgI",
  },
  {
    name: "TBD",
    title: "Business Unit Manager of CISOs",
    organization: "BMGRIP",
    topic: "Managementsystems and Certifications",
    image: "https://media.istockphoto.com/id/154956399/photo/anonymous-front-silhouette.jpg?s=612x612&w=0&k=20&c=JpSlXxv688SWY3kwLNtXbPuyWoCeJbW57QTioCS-2XA=",
  },
  {
    name: "TBD",
    title: "To Be Announced",
    organization: "Guest Speaker",
    topic: "Details Coming Soon",
    image: "https://media.istockphoto.com/id/154956399/photo/anonymous-front-silhouette.jpg?s=612x612&w=0&k=20&c=JpSlXxv688SWY3kwLNtXbPuyWoCeJbW57QTioCS-2XA="
  },
  {
    name: "TBD",
    title: "To Be Announced",
    organization: "Guest Speaker",
    topic: "Details Coming Soon",
    image: "https://media.istockphoto.com/id/154956399/photo/anonymous-front-silhouette.jpg?s=612x612&w=0&k=20&c=JpSlXxv688SWY3kwLNtXbPuyWoCeJbW57QTioCS-2XA="
  },
];

const speakerGroups = [
  {
    group: 1,
    title: "Governance in the Age of AI: Managing the Risks of Shadow IT in Global Enterprises",
    authors: "Stan Gaal, Sjors Kars, Robin Roos, Luuk Versteeg, Rutger van Eijck",
    summary:
      "This study explores how the unauthorized use of AI tools—such as ChatGPT, DeepSeek, and automation platforms—by employees introduces new risks in large enterprises. While these tools can boost productivity, they often bypass official IT governance, leading to vulnerabilities in security, compliance, and decision-making processes. Using surveys and interviews, the research investigates the scope of AI-driven Shadow IT and proposes governance strategies to help organizations balance innovation with security in the evolving AI landscape.",
  },
  {
    group: 2,
    title: "Empowering SMEs in the AI Era: Technical and Financial Feasibility of No-/Low-Code Platforms for Business Process Automation",
    authors: "Timo Floumen, Sem Meevis, Salvatore Caldara, Juan van Gogh",
    summary:
      "This paper explores the potential of no-code and low-code AI platforms to support digital transformation in small and medium-sized enterprises (SMEs). Through interviews and a broad survey of SMEs, the study examines the technical and financial feasibility of these platforms, along with adoption challenges such as integration with legacy systems, hidden costs, and skill gaps. The research offers a practical framework to help SMEs make informed decisions about implementing AI-driven automation solutions.",
  },
  {
    group: 3,
    title: "Biomedical Data Sovereignty: Governance, Ownership, and Control in the Cloud",
    authors: "Rogier In 't Veld, Thomas de Keijzer, Jens Krooswijk, Ikram Lemrini, Pieter Vegter",
    summary:
      "As healthcare systems increasingly rely on cloud infrastructure and global data sharing, questions around ownership, control, and governance of biomedical data grow more urgent. This study investigates stakeholder perceptions of data sovereignty, using legal analysis, interviews, and surveys to explore inconsistencies in current frameworks. The findings aim to support the development of ethically sound governance models that protect patient rights while enabling responsible digital innovation in healthcare.",
  },
  {
    group: 4,
    title: "DB Schenker Case Study: The Impact of Carrier Ownership Structure on Carrier Events' Data Quality",
    authors: "Abdrahmaan Hassan, Mouhssien Ait, Anastasia Basevych, Koen van Ernoel, Christiaan Verschoor",
    summary:
      "This study examines how the ownership structure of ocean freight carriers—vessel-owning, chartered, or hybrid—affects the quality and timeliness of event data shared within the supply chain. Based on insights from DB Schenker Nederland B.V. and Hapag Lloyd, the research highlights key differences in data governance and offers implications for freight forwarders, shipping companies, and policymakers.",
  },
  {
    group: 5,
    title: "Student Trust in the Digital Age: Perceptions of Data Responsibility in Educational Institutions",
    authors: "Hoang Cau Nguyen, Anouk Leijten, Quinny Li, Ebrar Eryigit, Lars van Berlo",
    summary:
      "This paper investigates how students perceive the way educational institutions handle their personal data and how these perceptions influence their trust in the institution. Using the CIA Triad (Confidentiality, Integrity, Availability) as a framework, the study combines survey data, case studies, and desk research to examine the relationship between data governance and institutional trust. The findings contribute to ongoing conversations about transparency and responsible data practices in the digital transformation of education.",
  },
];

const Speakers = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (idx) => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <section id="speakers" className="bg-navy text-softWhite py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center text-white mb-10">Featured Speakers</h2>

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-gold text-center">Guest Speakers</h3>
          <div className="grid gap-8 md:grid-cols-2 items-start">
            {guestSpeakers.map((speaker, idx) => (
              <div key={idx} className="bg-navy/40 p-6 rounded-lg border border-white/10 flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gold">
                  <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold text-gold mb-1">{speaker.name}</h4>
                  <p className="text-softWhite/70 mb-1">{speaker.title}</p>
                  <p className="text-softWhite/70 mb-2">{speaker.organization}</p>
                  <div className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm inline-block">{speaker.topic}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-gold text-center">Student Presentations</h3>
          <div className="grid gap-8 md:grid-cols-2 items-start">
          {speakerGroups.map((group, idx) => (
              <button
                key={group.group}
                onClick={() => toggleExpand(idx)}
                className="text-left w-full bg-navy/60 border border-gold/40 p-6 rounded-xl shadow-lg transition hover:scale-[1.02] focus:outline-none"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gold font-semibold text-lg">Group {group.group}</span>
                  <span className="text-gold text-xl">{expanded === idx ? "−" : "+"}</span>
                </div>
                <h4 className="font-bold text-xl mb-2 text-white">{group.title}</h4>
                <p className="mb-2 text-sm italic">{`Authors: ${group.authors}`}</p>
                {expanded === idx && <p className="text-base mt-2 transition-all">{group.summary}</p>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
