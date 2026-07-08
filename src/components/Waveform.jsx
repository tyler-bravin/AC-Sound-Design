import React, { useState } from 'react';

const Waveform = () => {
  // Heights are generated once per mount — not on every render.
  const [heights] = useState(() =>
    Array.from({ length: 20 }, () => Math.random() * 60 + 20)
  );

  return (
    <div className="waveform-container" aria-hidden="true">
      {heights.map((h, i) => (
        <div
          key={i}
          className="waveform-bar"
          style={{ animationDelay: `${i * 0.1}s`, height: `${h}px` }}
        />
      ))}
    </div>
  );
};

export default Waveform;
