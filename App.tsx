import React, { useState } from 'react';
import SakuraParticles from './components/SakuraParticles';
import UnlockScreen from './components/UnlockScreen';
import LetterScreen from './components/LetterScreen';

// Using a high-quality C-drama aesthetic background image (mountains/mist/blossoms)
const BG_IMAGE = "https://images.unsplash.com/photo-1518544866385-8a96495b597c?q=80&w=2070&auto=format&fit=crop";

const App: React.FC = () => {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-sans text-gray-900">
      
      {/* Background Image - Fixed so it doesn't scroll */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />
      
      {/* Background Overlays for Cinematic Feel - Fixed */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/40 via-drama-red/10 to-black/60 mix-blend-multiply" />
      <div className="fixed inset-0 bg-drama-red/10 mix-blend-overlay" />
      
      {/* Falling Sakura Petals - (Already fixed in component) */}
      <SakuraParticles />

      {/* Main Content */}
      <main className="relative z-10 w-full">
        {!unlocked ? (
          <UnlockScreen onUnlock={() => setUnlocked(true)} />
        ) : (
          <LetterScreen />
        )}
      </main>

      {/* Audio hint (Visual only) */}
      <div className="fixed bottom-4 right-4 z-20 text-white/50 text-xs font-serif italic pointer-events-none">
        Best viewed with gentle music
      </div>
    </div>
  );
};

export default App;