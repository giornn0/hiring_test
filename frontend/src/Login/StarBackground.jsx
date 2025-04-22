import { useState } from 'react';

const StarBackground = () => {
  const [stars] = useState(() =>
    Array.from({ length: 400 }, () => ({
      id: Math.random().toString(36).substring(7),
      size: Math.random() * 3 + 1,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      opacity: Math.random() * 0.7 + 0.3,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      moveX: (Math.random() - 0.5) * 100, // Increased movement range
      moveY: (Math.random() - 0.5) * 50
    }))
  );

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-float"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            '--tw-translate-x': `${star.moveX}px`,
            '--tw-translate-y': `${star.moveY}px`
          }}
        />
      ))}
    </div>
  );
}
export default StarBackground
