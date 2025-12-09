import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';
import { LETTER_CONTENT } from '../constants';

const LetterScreen: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  const content = LETTER_CONTENT[lang];
  const isChinese = lang === 'cn';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen py-12 px-4 md:px-8"
    >
      {/* Container */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full max-w-2xl bg-[#Fdfbf7]/90 backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.3)] rounded-lg overflow-hidden border border-[#e8dcc5] relative mx-auto"
      >
        {/* Decorative borders (C-Drama Style) - Responsive Sizes */}
        <div className="absolute top-0 left-0 w-10 h-10 md:w-16 md:h-16 border-t-4 border-l-4 border-drama-gold/40 rounded-tl-lg pointer-events-none" />
        <div className="absolute top-0 right-0 w-10 h-10 md:w-16 md:h-16 border-t-4 border-r-4 border-drama-gold/40 rounded-tr-lg pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-10 h-10 md:w-16 md:h-16 border-b-4 border-l-4 border-drama-gold/40 rounded-bl-lg pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-10 h-10 md:w-16 md:h-16 border-b-4 border-r-4 border-drama-gold/40 rounded-br-lg pointer-events-none" />

        {/* Header / Language Switch */}
        <div className="flex justify-center pt-8 pb-4 border-b border-gray-200/50 mx-4 md:mx-12">
          <div className="bg-gray-100/50 p-1 rounded-full flex relative">
            {/* Sliding Pill Background */}
            <motion.div
              layout
              className="absolute top-1 bottom-1 bg-white shadow-sm rounded-full"
              initial={false}
              animate={{
                left: lang === 'en' ? '4px' : '50%',
                width: 'calc(50% - 4px)',
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button
              onClick={() => setLang('en')}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-serif transition-colors ${lang === 'en' ? 'text-drama-red font-semibold' : 'text-gray-500'}`}
            >
              English
            </button>
            <button
              onClick={() => setLang('cn')}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-chinese transition-colors ${lang === 'cn' ? 'text-drama-red font-semibold' : 'text-gray-500'}`}
            >
              中文
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-12 min-h-[400px] flex flex-col justify-center relative">
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
            
            <AnimatePresence mode="wait">
            <motion.div
              key={lang}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className={`text-center space-y-6 ${isChinese ? 'font-chinese' : 'font-serif'}`}
            >
              <h2 className="text-2xl md:text-3xl text-drama-red mb-4 md:mb-8 font-bold tracking-wider">
                {content.greeting}
              </h2>

              <div className="space-y-4 md:space-y-6 text-gray-800 text-lg md:text-xl leading-loose">
                {content.body.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <div className="pt-8 md:pt-12 pb-4">
                <p className="text-drama-gold text-base italic mb-2">{content.closing}</p>
                <p className="text-xl md:text-2xl text-drama-red font-semibold">{content.signature}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Floating Lanterns (Simple aesthetic touch) */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 md:left-20 w-16 h-24 opacity-60 mix-blend-screen pointer-events-none hidden md:block"
      >
        <div className="w-full h-full bg-gradient-to-t from-orange-500 to-yellow-200 rounded-full blur-[20px]" />
      </motion.div>
       <motion.div 
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
        className="absolute top-20 right-10 md:right-32 w-12 h-16 opacity-40 mix-blend-screen pointer-events-none hidden md:block"
      >
        <div className="w-full h-full bg-gradient-to-t from-red-600 to-orange-300 rounded-full blur-[15px]" />
      </motion.div>

    </motion.div>
  );
};

export default LetterScreen;