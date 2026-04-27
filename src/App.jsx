import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Map as MapIcon, Sparkles, Star, Volume2, VolumeX } from 'lucide-react';

// --- 1. TRADITIONAL SRI LANKAN LOTUS MOTIF (සාම්ප්‍රදායික මෝස්තරය) ---
const TraditionalLotus = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M12 22c-4-4-6-8-6-12a6 6 0 0 1 12 0c0 4-2 8-6 12z" fill="rgba(212,175,55,0.1)"/>
    <path d="M12 22c-6-4-10-9-10-14a4 4 0 0 1 8-2c0 2 2 2 2 2" />
    <path d="M12 22c6-4 10-9 10-14a4 4 0 0 0-8-2c0 2-2 2-2 2" />
  </svg>
);

// --- 2. LUXURY ANIMATED BACKGROUND ---
const AnimatedBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#0f0c0a]">
    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-[20%] -left-[20%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-r from-[#d4af37]/20 to-[#8a6528]/10 blur-[100px]" />
    <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[40%] -right-[30%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-l from-[#f3e7b3]/10 to-[#5c3a21]/20 blur-[120px]" />
    <motion.div animate={{ y: [0, -50, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-[20%] left-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-t from-[#3e271a]/30 to-transparent blur-[80px]" />
    
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: '100vh', x: Math.random() * window.innerWidth, opacity: 0, scale: Math.random() * 0.5 + 0.5 }}
        animate={{ y: '-10vh', opacity: [0, 1, 0], rotate: 360 }}
        transition={{ duration: Math.random() * 15 + 10, repeat: Infinity, delay: Math.random() * 5 }}
        className="absolute text-[#d4af37]/30"
      >
        <Star size={Math.random() * 8 + 4} fill="currentColor" />
      </motion.div>
    ))}
  </div>
);

// --- 3. 3D PALACE GATE ANIMATION ---
const PalaceGate = ({ onOpen }) => (
  <motion.div className="fixed inset-0 z-50 flex bg-black perspective-[2000px]" exit={{ opacity: 0, transition: { duration: 1.5, delay: 1.5 } }}>
    <motion.div exit={{ rotateY: -90, opacity: 0 }} transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }} className="w-1/2 h-full border-r-[4px] border-[#d4af37] origin-left z-20 shadow-[20px_0_50px_rgba(0,0,0,0.9)]" style={{ background: 'linear-gradient(135deg, #2c1a12 0%, #1a0f0a 100%)' }}>
      <div className="absolute inset-6 border border-[#d4af37]/30 rounded-l-3xl shadow-inner flex items-center justify-end pr-4">
         <TraditionalLotus className="w-32 h-32 text-[#d4af37]/20 -mr-16" />
      </div>
    </motion.div>

    <motion.div exit={{ rotateY: 90, opacity: 0 }} transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }} className="w-1/2 h-full border-l-[4px] border-[#d4af37] origin-right z-20 shadow-[-20px_0_50px_rgba(0,0,0,0.9)]" style={{ background: 'linear-gradient(-135deg, #2c1a12 0%, #1a0f0a 100%)' }}>
      <div className="absolute inset-6 border border-[#d4af37]/30 rounded-r-3xl shadow-inner flex items-center justify-start pl-4">
         <TraditionalLotus className="w-32 h-32 text-[#d4af37]/20 -ml-16" />
      </div>
    </motion.div>

    <motion.div exit={{ scale: 0, opacity: 0, transition: { duration: 0.6, ease: "backIn" } }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
      <button onClick={onOpen} className="relative group w-44 h-44 flex flex-col items-center justify-center bg-gradient-to-br from-[#2c1a12] to-[#1a0f0a] rounded-full shadow-[0_0_80px_rgba(212,175,55,0.6)] border-[4px] border-[#d4af37] cursor-pointer hover:scale-110 transition-all duration-500 overflow-hidden">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-[2px] border-dashed border-[#d4af37]/50 rounded-full scale-90"></motion.div>
        <h2 className="text-3xl font-serif text-[#d4af37] font-bold z-10 mb-1 drop-shadow-lg">T <span className="text-white text-xl">&</span> P</h2>
        <p className="text-white/80 uppercase tracking-[0.3em] text-[9px] font-bold z-10 mt-4 flex items-center gap-1 animate-pulse">
          <Sparkles size={12} className="text-[#d4af37]" /> Enter
        </p>
      </button>
    </motion.div>
  </motion.div>
);

// --- 4. 3D FLIP COUNTDOWN ---
const FlipUnit = ({ value, label }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
    <div className="relative bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-xl border border-white/20 text-white w-[70px] h-[80px] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden" style={{ perspective: "1000px" }}>
      <AnimatePresence mode="popLayout">
        <motion.span key={value} initial={{ rotateX: 90, opacity: 0, y: -20 }} animate={{ rotateX: 0, opacity: 1, y: 0 }} exit={{ rotateX: -90, opacity: 0, y: 20 }} transition={{ duration: 0.6, type: "spring", bounce: 0.4 }} className="absolute text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#d4af37] to-[#f3e7b3]">
          {value.toString().padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
      <div className="absolute w-full h-[2px] bg-black/40 top-1/2 shadow-[0_1px_2px_rgba(255,255,255,0.2)]"></div>
    </div>
    <span className="text-[10px] mt-4 tracking-[0.3em] uppercase opacity-90 text-[#d4af37] font-bold">{label}</span>
  </motion.div>
);

// --- 5. MAIN APP COMPONENT ---
export default function App() {
  const [isGateOpen, setIsGateOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [guestName, setGuestName] = useState('Our Beloved Guest'); 
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Google Calendar URL Generator (Times converted to UTC for standard compatibility)
  const calendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Tharindu+%26+Paboda's+Wedding&dates=20260516T123000Z/20260516T173000Z&details=Join+us+to+celebrate+our+special+day!&location=Shiney+Lake+Side,+Hikkaduwa";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('guest');
    if (name) setGuestName(decodeURIComponent(name)); 
  }, []);

  useEffect(() => {
    const target = new Date("May 16, 2026 18:00:00").getTime();
    const interval = setInterval(() => {
      const distance = target - new Date().getTime();
      if (distance > 0) {
        setTimeLeft({ days: Math.floor(distance / 86400000), hours: Math.floor((distance % 86400000) / 3600000), minutes: Math.floor((distance % 3600000) / 60000), seconds: Math.floor((distance % 60000) / 1000) });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleEnterGate = () => {
    setIsGateOpen(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(err => console.log("Audio play blocked by browser", err));
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const fadeUpBounce = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, type: "spring", bounce: 0.4 } }
  };

  return (
    <div className="bg-[#0f0c0a] min-h-screen font-sans flex justify-center text-white selection:bg-[#d4af37] selection:text-black">
      <AnimatedBackground />

      {/* Background Audio Element */}
      <audio ref={audioRef} src="/wedding-song.mp3" loop />

      {/* Floating Audio Toggle Button */}
      {isGateOpen && (
        <motion.button 
          initial={{ opacity: 0, scale: 0 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 2 }}
          onClick={toggleAudio} 
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-black/50 backdrop-blur-md border border-[#d4af37]/50 rounded-full flex items-center justify-center text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:bg-[#d4af37]/20 transition-all"
        >
          {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </motion.button>
      )}

      <AnimatePresence>
        {!isGateOpen && <PalaceGate onOpen={handleEnterGate} />}
      </AnimatePresence>

      <div className="w-full max-w-[420px] min-h-screen relative overflow-x-hidden border-x border-white/5 shadow-[0_0_100px_rgba(0,0,0,1)] bg-black/20 backdrop-blur-[2px]">
        
        {/* --- HERO SECTION --- */}
        <section className="min-h-[100svh] flex flex-col items-center justify-center p-8 text-center relative z-10">
          <motion.div variants={fadeUpBounce} initial="hidden" animate="visible" className="w-full relative z-10">
            
            <TraditionalLotus className="mx-auto w-12 h-12 text-[#d4af37] mb-6 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
            
            <p className="text-[11px] tracking-[0.4em] text-[#d4af37] mb-10 font-bold uppercase drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">Our Wedding Day</p>
            
            <motion.div whileHover={{ scale: 1.02 }} className="w-full max-w-[280px] mx-auto mb-12 relative group">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute -inset-2 bg-gradient-to-tr from-[#d4af37] to-transparent rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-70 transition-opacity"></motion.div>
              <img src="/slcouple.jpg" alt="Couple" className="w-full h-auto relative z-10 rounded-[2rem] border-[4px] border-white/20 shadow-2xl" />
            </motion.div>

            <h1 className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-[#d4af37] mb-2 tracking-wider">Tharindu</h1>
            <p className="text-[#d4af37] text-md font-serif mb-2 italic">සහ</p>
            <h1 className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-[#d4af37] mb-10 tracking-wider">Paboda</h1>
            
            <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 inline-block">
              <p className="text-white tracking-[0.3em] text-[12px] font-bold uppercase">May 16 . 2026</p>
            </div>
          </motion.div>
        </section>

        {/* --- INVITATION MESSAGE --- */}
        <section className="py-24 px-8 text-center relative z-10 bg-gradient-to-b from-transparent via-[#1a0f0a]/80 to-transparent">
           <motion.div variants={fadeUpBounce} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="font-serif text-2xl text-[#d4af37] mb-4 drop-shadow-md">Dear {guestName},</h3>
              <h2 className="text-4xl font-serif text-white mb-8 tracking-wide">You are Invited</h2>
              <p className="text-sm leading-[2] text-white/80 mb-10 font-light px-2">
                අපගේ ජීවිතයේ සුන්දරම පරිච්ඡේදය ආරම්භ වන මේ සුවිශේෂී දිනයේ, අපගේ ආදරණීයයන් වන ඔබ සැමගේ ආශිර්වාදය අපට මහත් සතුටකි.
              </p>
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8"></div>
              <h3 className="font-serif text-2xl text-[#d4af37]">Tharindu & Paboda</h3>
           </motion.div>
        </section>

        {/* --- COUNTDOWN --- */}
        <section className="py-24 px-4 text-center relative z-10 bg-black/40 backdrop-blur-md border-y border-white/10">
          <motion.div variants={fadeUpBounce} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-[12px] tracking-[0.4em] text-[#d4af37] uppercase mb-16 font-bold drop-shadow-md">Countdown to Forever</h2>
            <div className="flex justify-center gap-2 md:gap-4">
              <FlipUnit value={timeLeft.days} label="Days" />
              <FlipUnit value={timeLeft.hours} label="Hours" />
              <FlipUnit value={timeLeft.minutes} label="Mins" />
              <FlipUnit value={timeLeft.seconds} label="Secs" />
            </div>
          </motion.div>
        </section>

        {/* --- MAP & CALENDAR --- */}
        <section className="py-24 px-8 text-center relative z-10 bg-black/40 backdrop-blur-lg border-y border-white/10">
          <motion.div variants={fadeUpBounce} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl font-serif text-white mb-4">Venue</h2>
            <p className="text-[#d4af37] text-sm mb-2 font-bold uppercase tracking-widest">Shiney Lake Side, Hikkaduwa</p>
            <p className="text-white/80 text-[11px] mb-12 uppercase tracking-widest font-bold">6:00 PM to 11:00 PM</p>
            
            <button onClick={() => setIsMapOpen(!isMapOpen)} className="flex items-center justify-center gap-3 w-full mx-auto py-5 bg-transparent border-[2px] border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#d4af37] hover:text-black transition-all duration-300 mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <MapIcon size={18} /> {isMapOpen ? 'Hide Map' : 'Show Map'}
            </button>

            <a href={calendarUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-5 bg-white text-black rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-gray-200 transition-all duration-300 mb-10 shadow-xl">
              <Calendar size={18} /> Add to Calendar
            </a>

            <AnimatePresence>
              {isMapOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="w-full h-80 bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 border-[4px] border-white/10">
                    <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.676646872583!2d79.84157157500588!3d6.929215093069818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25925a259b1db%3A0xc6bf31b87b7a2d61!2sHilton%20Colombo!5e0!3m2!1sen!2slk!4v1714018800000!5m2!1sen!2slk" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                  </div>
                  <a href="https://maps.app.goo.gl/placeholderlink" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-black rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 mb-4">
                    <MapPin size={18} /> Open in Google Maps
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="py-12 px-6 text-center bg-black z-10 relative border-t border-white/10">
          <TraditionalLotus className="mx-auto w-8 h-8 text-[#d4af37]/50 mb-4" />
          <p className="text-[10px] text-white/40 uppercase tracking-widest mb-4 font-bold">© 2026 All rights reserved by Tharindu & Paboda</p>
          <div className="flex items-center justify-center gap-2 text-[10px] text-white/50">
            <span>Powered By</span>
            <a href="inukatechyt.github.io/inuka_tech/" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] font-bold tracking-widest uppercase flex items-center gap-1 bg-[#d4af37]/10 px-4 py-2 rounded-full border border-[#d4af37]/30 hover:bg-[#d4af37]/20 transition-colors">
              Inuka Tech
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}
