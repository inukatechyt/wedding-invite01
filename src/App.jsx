import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, ChevronDown, Calendar, Heart, Map as MapIcon, Mail, Sparkles, Star } from 'lucide-react';

// --- 1. LUXURY ANIMATED BACKGROUND (Glowing Orbs & Particles) ---
const AnimatedBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#0f0c0a]">
    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-[20%] -left-[20%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-r from-[#d4af37]/20 to-[#8a6528]/10 blur-[100px]" />
    <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[40%] -right-[30%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-l from-[#f3e7b3]/10 to-[#5c3a21]/20 blur-[120px]" />
    <motion.div animate={{ y: [0, -50, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-[20%] left-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-t from-[#3e271a]/40 to-transparent blur-[80px]" />
    
    {/* Floating Stars */}
    {Array.from({ length: 25 }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: '100vh', x: Math.random() * window.innerWidth, opacity: 0, scale: Math.random() * 0.5 + 0.5 }}
        animate={{ y: '-10vh', opacity: [0, 1, 0], rotate: 360 }}
        transition={{ duration: Math.random() * 15 + 10, repeat: Infinity, delay: Math.random() * 5 }}
        className="absolute text-[#d4af37]/40"
      >
        <Star size={Math.random() * 10 + 5} fill="currentColor" />
      </motion.div>
    ))}
  </div>
);

// --- 2. 3D PALACE GATE ANIMATION ---
const PalaceGate = ({ onOpen }) => (
  <motion.div className="fixed inset-0 z-50 flex bg-black perspective-[2000px]" exit={{ opacity: 0, transition: { duration: 1.5, delay: 1.5 } }}>
    {/* LEFT 3D DOOR */}
    <motion.div
      exit={{ rotateY: -90, opacity: 0 }}
      transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
      className="w-1/2 h-full border-r-[4px] border-[#d4af37] origin-left z-20 shadow-[20px_0_50px_rgba(0,0,0,0.9)]"
      style={{ background: 'linear-gradient(135deg, #2c1a12 0%, #1a0f0a 100%)' }}
    >
      <div className="absolute inset-6 border border-[#d4af37]/30 rounded-l-3xl shadow-inner"></div>
    </motion.div>

    {/* RIGHT 3D DOOR */}
    <motion.div
      exit={{ rotateY: 90, opacity: 0 }}
      transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
      className="w-1/2 h-full border-l-[4px] border-[#d4af37] origin-right z-20 shadow-[-20px_0_50px_rgba(0,0,0,0.9)]"
      style={{ background: 'linear-gradient(-135deg, #2c1a12 0%, #1a0f0a 100%)' }}
    >
      <div className="absolute inset-6 border border-[#d4af37]/30 rounded-r-3xl shadow-inner"></div>
    </motion.div>

    {/* GLOWING CENTER BUTTON */}
    <motion.div exit={{ scale: 0, opacity: 0, transition: { duration: 0.6, ease: "backIn" } }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
      <button onClick={onOpen} className="relative group w-44 h-44 flex flex-col items-center justify-center bg-gradient-to-br from-[#2c1a12] to-[#1a0f0a] rounded-full shadow-[0_0_80px_rgba(212,175,55,0.6)] border-[4px] border-[#d4af37] cursor-pointer hover:scale-110 transition-all duration-500 overflow-hidden">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-[2px] border-dashed border-[#d4af37]/50 rounded-full scale-90"></motion.div>
        <h2 className="text-3xl font-serif text-[#d4af37] font-bold z-10 mb-1 drop-shadow-lg">I <span className="text-white text-xl">&</span> I</h2>
        <p className="text-white/80 uppercase tracking-[0.3em] text-[9px] font-bold z-10 mt-4 flex items-center gap-1 animate-pulse">
          <Sparkles size={12} className="text-[#d4af37]" /> Enter
        </p>
      </button>
    </motion.div>
  </motion.div>
);

// --- 3. 3D FLIP COUNTDOWN ---
const FlipUnit = ({ value, label }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
    <div className="relative bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-xl border border-white/20 text-white w-[75px] h-[85px] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden" style={{ perspective: "1000px" }}>
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

// --- 4. PRE-SHOOT CAROUSEL WITH GLOW ---
const ImageCarousel = () => {
  const images = ["https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80", "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80"];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx((p) => (p === images.length - 1 ? 0 : p + 1)), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[320px] mx-auto h-[450px] rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.2)] border-[4px] border-white/20 bg-black/40 backdrop-blur-sm">
      <AnimatePresence mode="wait">
        <motion.img key={idx} src={images[idx]} initial={{ opacity: 0, scale: 1.2, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 1.5, ease: "easeInOut" }} className="absolute inset-0 w-full h-full object-cover" />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
    </div>
  );
};

// --- 5. MAIN APP COMPONENT ---
export default function App() {
  const [isGateOpen, setIsGateOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [guestName, setGuestName] = useState('Our Beloved Guest'); 
  const [attendance, setAttendance] = useState('yes');
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('guest');
    if (name) setGuestName(decodeURIComponent(name)); 
  }, []);

  useEffect(() => {
    const target = new Date("May 09, 2026 16:00:00").getTime();
    const interval = setInterval(() => {
      const distance = target - new Date().getTime();
      if (distance > 0) {
        setTimeLeft({ days: Math.floor(distance / 86400000), hours: Math.floor((distance % 86400000) / 3600000), minutes: Math.floor((distance % 3600000) / 60000), seconds: Math.floor((distance % 60000) / 1000) });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRSVP = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const waNum = "94702619911"; 
    const text = `*Wedding Invitation Reply*%0A%0A*Guest Name:* ${form.get('name')}%0A*Contact:* ${form.get('phone')}%0A*Status:* ${attendance === 'yes' ? 'Joyfully Accepts 🎉' : 'Regretfully Declines 😔'}`;
    window.open(`https://wa.me/${waNum}?text=${text}`, '_blank');
  };

  // Advanced Animation Variants
  const fadeUpBounce = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, type: "spring", bounce: 0.4 } }
  };

  return (
    <div className="bg-[#0f0c0a] min-h-screen font-sans flex justify-center text-white selection:bg-[#d4af37] selection:text-black">
      <AnimatedBackground />

      <AnimatePresence>
        {!isGateOpen && <PalaceGate onOpen={() => setIsGateOpen(true)} />}
      </AnimatePresence>

      <div className="w-full max-w-[420px] min-h-screen relative overflow-x-hidden border-x border-white/5 shadow-[0_0_100px_rgba(0,0,0,1)] bg-black/20 backdrop-blur-[2px]">
        
        {/* --- HERO SECTION --- */}
        <section className="min-h-[100svh] flex flex-col items-center justify-center p-8 text-center relative z-10">
          <motion.div variants={fadeUpBounce} initial="hidden" animate="visible" className="w-full relative z-10">
            <motion.div animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }}>
              <Sparkles className="mx-auto text-[#d4af37] mb-8" size={28} strokeWidth={1} />
            </motion.div>
            
            <p className="text-[11px] tracking-[0.4em] text-[#d4af37] mb-10 font-bold uppercase drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">Our Wedding Day</p>
            
            <div className="w-full max-w-[280px] mx-auto mb-12 relative group">
              {/* Glowing Frame Behind Image */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -inset-2 bg-gradient-to-tr from-[#d4af37] to-transparent rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-70 transition-opacity"></motion.div>
              {/* IMPORTANT: Make sure slcouple.jpg is inside the public/ folder! */}
              <img src="/slcouple.jpg" alt="Couple" className="w-full h-auto relative z-10 rounded-[2rem] border-[4px] border-white/20 shadow-2xl" />
            </div>

            <h1 className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-[#d4af37] mb-2 tracking-wider">Inuka</h1>
            <p className="text-[#d4af37] text-md font-serif mb-2 italic">සහ</p>
            <h1 className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-[#d4af37] mb-10 tracking-wider">Idushi</h1>
            
            <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 inline-block">
              <p className="text-white tracking-[0.3em] text-[12px] font-bold uppercase">May 09 . 2026</p>
            </div>
          </motion.div>

          <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }} className="absolute bottom-8 flex flex-col items-center text-[#d4af37]">
            <ChevronDown size={28} strokeWidth={1.5} className="drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
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
              <h3 className="font-serif text-2xl text-[#d4af37]">Inuka & Idushi</h3>
           </motion.div>
        </section>

        {/* --- OUR STORY --- */}
        <section className="py-24 px-8 relative z-10">
          <motion.div variants={fadeUpBounce} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl font-serif text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-[#d4af37] mb-16">Our Story</h2>
            <div className="space-y-0 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#d4af37]/0 via-[#d4af37] to-[#d4af37]/0 opacity-50 shadow-[0_0_15px_#d4af37]"></div>
              {[
                { title: "First Met", desc: "We met in an unexpected way, and it turned into the most beautiful chapter.", date: "August 2020", icon: <Heart size={16} className="text-white" /> },
                { title: "First Date", desc: "A simple coffee turned into hours of endless conversations.", date: "October 2020", icon: <Heart size={16} className="text-white" /> },
                { title: "He Proposed", desc: "A magical moment when two souls promised to be one forever.", date: "December 2025", icon: <Sparkles size={16} className="text-[#d4af37]" /> }
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, type: "spring" }} viewport={{ once: true }} className="relative z-10 py-8 flex flex-col items-center text-center px-6 bg-white/5 backdrop-blur-xl rounded-[2rem] mx-2 my-8 border border-white/10 hover:border-[#d4af37]/50 transition-colors shadow-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#8a6528] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)] mb-6 ring-4 ring-white/10">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-3">{item.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed mb-4">{item.desc}</p>
                  <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 px-4 py-1.5 rounded-full">
                    <p className="text-[10px] text-[#d4af37] font-bold uppercase tracking-[0.2em]">{item.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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

        {/* --- TIMELINE --- */}
        <section className="py-24 px-8 relative z-10">
          <motion.div variants={fadeUpBounce} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl font-serif text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-[#d4af37] mb-16">Event Timeline</h2>
            <div className="relative border-l-[3px] border-[#d4af37]/30 ml-6 space-y-16 pb-4">
              {[
                { time: "පෙ.ව. 10:00", title: "පැමිණීම", desc: "මනමාල මහතාගේ පැමිණීම" },
                { time: "පෙ.ව. 10:45", title: "පෝරුවේ චාරිත්‍ර", desc: "සාම්ප්‍රදායික පෝරුවේ චාරිත්‍ර වාරිත්‍ර" },
                { time: "ප.ව. 12:00", title: "නර්තන හා ආශිර්වාද", desc: "සම්ප්‍රදායික නර්තන හා ආශිර්වාද ගැන්වීම" },
                { time: "ප.ව. 01:00", title: "දිවා ආහාරය", desc: "ප්‍රධාන භෝජන සංග්‍රහය" },
                { time: "ප.ව. 04:00", title: "පිටවීම", desc: "නව යුවළ පිටත්ව යාම" }
              ].map((event, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="relative pl-12 group">
                  <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-black border-[4px] border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.8)] group-hover:scale-125 transition-transform duration-300"></div>
                  <h4 className="text-[11px] text-white/90 font-bold tracking-[0.2em] mb-3 flex items-center gap-2 bg-[#d4af37]/20 border border-[#d4af37]/40 w-max px-4 py-1.5 rounded-full shadow-lg backdrop-blur-sm"><Clock size={12} className="text-[#d4af37]"/> {event.time}</h4>
                  <h3 className="text-2xl font-serif text-white mb-2">{event.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed font-light">{event.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* --- MAP & CALENDAR --- */}
        <section className="py-24 px-8 text-center relative z-10 bg-black/40 backdrop-blur-lg border-y border-white/10">
          <motion.div variants={fadeUpBounce} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl font-serif text-white mb-4">Venue</h2>
            <p className="text-[#d4af37] text-sm mb-12 font-bold uppercase tracking-widest">Hilton Colombo, Sri Lanka</p>
            
            <button onClick={() => setIsMapOpen(!isMapOpen)} className="flex items-center justify-center gap-3 w-full mx-auto py-5 bg-transparent border-[2px] border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#d4af37] hover:text-black transition-all duration-300 mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <MapIcon size={18} /> {isMapOpen ? 'Hide Map' : 'Show Map'}
            </button>

            <a href="https://calendar.google.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-5 bg-white text-black rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-gray-200 transition-all duration-300 mb-10 shadow-xl">
              <Calendar size={18} /> Add to Calendar
            </a>

            <AnimatePresence>
              {isMapOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="w-full h-80 bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 border-[4px] border-white/10">
                    <iframe title="Map" src="https://www.google.com/maps/place/Hilton+Colombo/data=!4m10!3m9!1s0x3ae259132e85493d:0x9d5e04ea64814a8!5m2!4m1!1i2!8m2!3d6.9325497!4d79.8447402!16s%2Fg%2F1vn_xd7b!19sChIJPUmFLhNZ4joRqBRIpk7g1Qk?authuser=0&hl=en&rclk=1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                  </div>
                  <a href="https://maps.app.goo.gl/placeholderlink" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-black rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 mb-4">
                    <MapPin size={18} /> Open in Google Maps
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* --- RSVP FORM --- */}
        <section className="py-24 px-8 relative z-10">
          <motion.div variants={fadeUpBounce} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10">
            <h2 className="text-4xl font-serif text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-[#d4af37] mb-4">Please Confirm</h2>
            <p className="text-center text-[10px] text-white/60 mb-12 uppercase tracking-[0.3em] font-bold">Kindly respond by May 01, 2026</p>
            
            <button onClick={() => setIsRSVPOpen(!isRSVPOpen)} className="flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-black rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300">
              <Mail size={18} /> {isRSVPOpen ? 'Close Form' : 'Click to RSVP'}
            </button>

            <AnimatePresence>
              {isRSVPOpen && (
                <motion.div initial={{ height: 0, opacity: 0, scale: 0.95 }} animate={{ height: 'auto', opacity: 1, scale: 1, marginTop: '2.5rem' }} exit={{ height: 0, opacity: 0, scale: 0.95, marginTop: 0 }} className="overflow-hidden">
                  <form onSubmit={handleRSVP} className="space-y-6 bg-white/10 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                    <div>
                      <label className="block text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.2em] mb-4 text-center">Will You Attend?</label>
                      <div className="flex gap-4">
                        <button type="button" onClick={() => setAttendance('yes')} className={`flex-1 py-4 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border-2 ${attendance === 'yes' ? 'bg-[#d4af37] text-black border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'bg-transparent text-white/70 border-white/20'}`}>Accept</button>
                        <button type="button" onClick={() => setAttendance('no')} className={`flex-1 py-4 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border-2 ${attendance === 'no' ? 'bg-[#d4af37] text-black border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'bg-transparent text-white/70 border-white/20'}`}>Decline</button>
                      </div>
                    </div>
                    <div>
                      <input type="text" name="name" defaultValue={guestName !== 'Our Beloved Guest' ? guestName : ''} required className="w-full px-6 py-4 bg-black/40 border border-white/20 rounded-full focus:outline-none focus:border-[#d4af37] text-white text-sm placeholder-white/40 text-center transition-all" placeholder="Full Name" />
                    </div>
                    <div>
                      <input type="tel" name="phone" required className="w-full px-6 py-4 bg-black/40 border border-white/20 rounded-full focus:outline-none focus:border-[#d4af37] text-white text-sm placeholder-white/40 text-center transition-all" placeholder="Contact Number" />
                    </div>
                    <button type="submit" className="w-full py-5 bg-white text-black font-bold tracking-[0.2em] uppercase rounded-full hover:bg-gray-200 transition-all duration-300 shadow-xl text-xs">Send via WhatsApp</button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="py-12 px-6 text-center bg-black z-10 relative border-t border-white/10">
          <p className="text-[10px] text-white/40 uppercase tracking-widest mb-4 font-bold">© 2026 All rights reserved</p>
          <div className="flex items-center justify-center gap-2 text-[10px] text-white/50">
            <span>Powered By</span>
            <a href="https://inukatechyt.github.io/inuka_tech/" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] font-bold tracking-widest uppercase flex items-center gap-1 bg-[#d4af37]/10 px-4 py-2 rounded-full border border-[#d4af37]/30 hover:bg-[#d4af37]/20 transition-colors">
              Inuka Tech
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}
