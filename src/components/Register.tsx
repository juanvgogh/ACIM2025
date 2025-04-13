
import React from 'react';

const Register = () => {
  return (
    <section id="register" className="bg-navy text-softWhite section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center text-softWhite">Registration</h2>
        <p className="text-lg text-softWhite/80 mb-16 text-center max-w-3xl mx-auto">
          Secure your place at the 8th ACIM Conference and be part of the conversation 
          shaping the future of information management. The conference is <span className="font-bold">free to attend</span>, but registration is required.
        </p>
        
        <div className="bg-navy/40 border border-gold/30 backdrop-blur-sm p-8 rounded-xl">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSdvC0OOTpqHzvCSazDYxRzdKVl5ASBoVD465fDERnOzcDU9ug/viewform?embedded=true" 
            width="100%" 
            height="2100" 
            className="mx-auto rounded-lg"
            title="Registration Form"
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0">
            Loading registration form...
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Register;
