// src/components/P5Sketch.jsx 👈 Note the .jsx extension
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import sketch from '../sketch';

const P5Sketch = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const p5Instance = new p5(sketch, sketchRef.current);
    return () => {
      p5Instance.remove();
    };
  }, []);

  return (
    <div 
      ref={sketchRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        zIndex: -1 
      }}
    ></div>
  );
};

export default P5Sketch;
