import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Heart } from 'lucide-react';
import { SECRET_KEY } from '../constants';

interface UnlockScreenProps {
  onUnlock: () => void;
}

const UnlockScreen: React.FC<UnlockScreenProps> = ({ onUnlock }) => {
  const [key, setKey] = useState('');
  const [error, setError] = useState(false);

  const handleAttempt = (e: React.FormEvent) => {
    e.preventDefault();
    if (key.trim().toLowerCase() === SECRET_KEY.toLowerCase()) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500); // Reset shake animation
    }
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-6 md:p-12 text-center"
      >
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-drama-red/20 rounded-full border border-drama-gold/30">
            <Lock className="w-8 h-8 text-drama-gold" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-serif text-white mb-2 tracking-wide drop-shadow-md">
          Love's Promise
        </h1>
        <p className="text-white/70 mb-8 font-light italic">Enter the key to our heart</p>

        <form onSubmit={handleAttempt} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Secret Key..."
              className="w-full bg-black/20 border-b-2 border-white/30 text-center text-white placeholder-white/40 focus:outline-none focus:border-drama-gold transition-colors py-3 text-lg"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
            type="submit"
            className="w-full bg-gradient-to-r from-drama-red to-[#5e0b0b] text-white py-3 rounded-xl font-serif tracking-widest shadow-lg hover:shadow-drama-red/40 transition-all flex items-center justify-center gap-2 group"
          >
            <span>UNLOCK</span>
            <Heart className="w-4 h-4 fill-current group-hover:animate-ping" />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default UnlockScreen;