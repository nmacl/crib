import React from 'react';

const circles = {
  waves: '#F3F4F3',
  'dark-waves': '#9E9A98',
  grainy: '#AC8B5D',
  bland: '#917E7A',
  'dark-bland': '#3A3743'
};

const positionsLeft = [15, 30, 45, 60, 75];
// First, let's define some variables that we'll use in the animation
const period = 1000; // This is the time it takes for each circle to complete one up-and-down motion

// Now, let's define the animation function
function animateCircs() {
  const circs = document.querySelectorAll('.circle');
  circs.forEach((circ, index) => {
    // Calculate the new position for each circle based on the current time
    const y = 15 * Math.sin(Date.now() / period + index);

    // Use the calculated y value to update the circle's position
    circ.style.transform = `translateY(${y+330}px)`;
  });

  // Schedule the next frame of the animation
  requestAnimationFrame(animateCircs);
}
// Start the animation
animateCircs();





const Circle = ({ color, position }) => (
  <div className="circle"
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: `radial-gradient(circle, ${circles[color]}, ${circles[color]})`,
      position: 'absolute',
      transform: 'translate(-50%, 400%)',
      left: positionsLeft[position]+'%',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0), 0 12px 20px 0 rgba(0, 0, 0, 0.5)'
    }}
  />
);

const Background = () => (
  <div style={{ position: 'relative' }}>
        <Circle color="waves" position={0} />
        <Circle color="dark-waves" position={1} />
        <Circle color="grainy" position={2} />
        <Circle color="bland" position={3}/>
        <Circle color="dark-bland" position={4}/>
  </div>
);



export default Background;
