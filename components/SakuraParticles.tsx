import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Generates random properties for petals
const generatePetals = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // percentage
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 10,
    size: 10 + Math.random() * 20,
  }));
};

const SakuraParticles: React.FC = () => {
  const [petals, setPetals] = useState<{ id: number; x: number; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    setPetals(generatePetals(25));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: -50, x: `${petal.x}vw`, opacity: 0, rotate: 0 }}
          animate={{
            y: '110vh',
            opacity: [0, 1, 1, 0],
            rotate: 360,
            x: [`${petal.x}vw`, `${petal.x + (Math.random() * 10 - 5)}vw`], // Slight horizontal drift
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
          style={{
            width: petal.size,
            height: petal.size,
            position: 'absolute',
          }}
          className="bg-drama-pink/60 rounded-tl-3xl rounded-br-3xl blur-[1px]"
        />
      ))}
    </div>
  );
};

export default SakuraParticles;