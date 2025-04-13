
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
        <h4 className="text-lg font-semibold text-navy mb-2">Cube Building – Room Z110</h4>
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
                <span className="font-medium text-navy">08:30 - 09:00</span>
                <span className="text-navy/80">Registration & Coffee</span>

                <span className="font-medium text-navy">09:00 - 09:30</span>
                <span className="text-navy/80">Opening Remarks</span>

                <span className="font-medium text-navy">09:30 - 12:30</span>
                <span className="text-navy/80">Morning Sessions</span>

                <span className="font-medium text-navy">12:30 - 13:30</span>
                <span className="text-navy/80">Lunch Break</span>

                <span className="font-medium text-navy">13:30 - 16:30</span>
                <span className="text-navy/80">Afternoon Sessions</span>

                <span className="font-medium text-navy">16:30 - 17:30</span>
                <span className="text-navy/80">Panel Discussion</span>

                <span className="font-medium text-navy">17:30 - 19:00</span>
                <span className="text-navy/80">Networking Reception</span>
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
