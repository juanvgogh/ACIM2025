
import React from 'react';

const Location = () => {
  return (
    <section id="location" className="bg-softWhite section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Location</h2>
        <p className="text-lg text-navy/80 mb-12 text-center max-w-3xl mx-auto">
          Join us at Tilburg University's modern facilities for a day of knowledge exchange and networking.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
  <div>
    <h3 className="text-2xl font-bold mb-4 text-navy">Venue Details</h3>
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-navy mb-2">Koopmans Building, Room K1201</h4>
        <p className="text-navy/80">
          Tilburg University<br />
          Warandelaan 2<br />
          5037 AB Tilburg<br />
          The Netherlands
        </p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-navy mb-2">Getting There</h4>
        <ul className="list-disc pl-5 text-navy/80">
          <li>5-minute walk from Tilburg Universiteit train station</li>
          <li>Paid parking available on campus</li>
          <li>Public transit: Bus lines 4 and 131 stop nearby</li>
          <li>Bicycle parking available next to the building</li>
        </ul>
      </div>
    </div>

            <div className="bg-lightBlue/30 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-navy mb-2">Conference Schedule</h4>
              <div className="grid grid-cols-[120px_1fr] gap-y-2">
              <span className="font-medium text-navy">09:00 – 09:15</span>
              <span className="text-navy/80">Registration & Coffee</span>

              <span className="font-medium text-navy">09:30 – 09:30</span>
              <span className="text-navy/80">Opening Remarks</span>

              <span className="font-medium text-navy">09:35 – 10:00</span>
              <span className="text-navy/80">
                Group 1 – <em>Governance in the Age of AI</em>: Managing Shadow IT in Global Enterprises
              </span>

              <span className="font-medium text-navy">10:25 – 10:50</span>
              <span className="text-navy/80">
                Group 2 – <em>Empowering SMEs in the AI Era</em>: Feasibility of No-/Low-Code Automation
              </span>

              <span className="font-medium text-navy">10:50 – 11:00</span>
              <span className="text-navy/80">Break</span>

              <span className="font-medium text-navy">11:00 – 11:25</span>
              <span className="text-navy/80">
                Group 3 – <em>Biomedical Data Sovereignty</em>: Governance and Cloud Control
              </span>

              <span className="font-medium text-navy">11:25 – 11:50</span>
              <span className="text-navy/80">
                Group 4 – <em>DB Schenker Case Study</em>: Carrier Ownership and Data Quality
              </span>

              <span className="font-medium text-navy">11:50 – 12:15</span>
              <span className="text-navy/80">
                Group 5 – <em>Student Trust in the Digital Age</em>: Data Responsibility in Education
              </span>

              <span className="font-medium text-navy">12:15 – 12:50</span>
              <span className="text-navy/80">Guest Speaker</span>

              <span className="font-medium text-navy">12:50 – 13:25</span>
              <span className="text-navy/80">Faculty Speaker</span>

              <span className="font-medium text-navy">13:25 – 13:30</span>
              <span className="text-navy/80">Closing Remarks</span>

              <span className="font-medium text-navy">13:30</span>
              <span className="text-navy/80">Lunch</span>
              </div>
            </div>
          </div>
          
          <div className="h-full">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=51.564972,5.044194&hl=en&z=14&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                title="Tilburg University Cube Building Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
