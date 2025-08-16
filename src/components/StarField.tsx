import React from 'react';

const StarField = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Background Stars */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${20 + Math.random() * 20}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default StarField;