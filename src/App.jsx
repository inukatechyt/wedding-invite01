import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, ChevronDown, Calendar, Heart, Map as MapIcon, Mail, Sparkles } from 'lucide-react';

// --- 1. LUXURY BACKGROUND PARTICLES ---
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: '100vh', x: Math.random() * window.innerWidth, opacity: 0, scale: Math.random() * 0.5 + 0.5 }}
          animate={{
            y: '-10vh',
            x: `calc(${Math.random() * 100}vw)`,
            opacity: [0, 0.8, 0],
            rotate: 360
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
          className="absolute w-2 h-2 bg-gradient-to-tr from-[#d4af37] to-[#f3e7b3] rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

// --- 2. THE PALACE GATE ---
const PalaceGate = ({ onOpen }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex overflow-hidden bg-black"
      exit={{ opacity: 0, transition: { duration: 1, delay: 1.2 } }}
    >
      <motion.div
        exit={{ x: '-100%', transition: { duration: 1.8, ease: [0.76, 0, 0.24, 1] } }}
        className="w-1/2 h-full flex items-center justify-end relative shadow-[20px_0_50px_rgba(0,0,0,0.8)] z-20"
        style={{ background: 'linear-gradient(to right, #1a0f0a, #3e271a)', borderRight: '4px solid #d4af37' }}
      >
        <div className="absolute inset-4 border border-[#5c3a21] opacity-40 rounded-l-3xl"></div>
      </motion.div>

      <motion.div
        exit={{ x: '100%', transition: { duration: 1.8, ease: [0.76, 0, 0.24, 1] } }}
        className="w-1/2 h-full flex items-center justify-start relative shadow-[-20px_0_50px_rgba(0,0,0,0.8)] z-20"
        style={{ background: 'linear-gradient(to left, #1a0f0a, #3e271a)', borderLeft: '4px solid #d4af37' }}
      >
        <div className="absolute inset-4 border border-[#5c3a21] opacity-40 rounded-r-3xl"></div>
      </motion.div>

      <motion.div
        exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.4 } }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
      >
        <button
          onClick={onOpen}
          className="relative group w-44 h-44 flex flex-col items-center justify-center bg-[#fdfbf7] rounded-full shadow-[0_0_60px_rgba(212,175,55,0.3)] cursor-pointer hover:scale-105 transition-all duration-500 overflow-hidden border-[6px] border-[#3e271a]"
        >
          <div className="absolute inset-0 border-[4px] border-[#d4af37] rounded-full scale-90 opacity-50 group-hover:rotate-180 transition-transform duration-1000"></div>
          <h2 className="text-2xl font-serif text-[#3e271a] font-bold z-10 mb-1 tracking-widest">I <span className="text-[#d4af37] text-xl">&</span> I</h2>
          <p className="text-[#b49272] uppercase tracking-[0.3em] text-[8px] font-bold z-10 mt-4 flex items-center gap-1">
            <Sparkles size={10} /> Enter <Sparkles size={10} />
          </p>
        </button>
      </motion.div>
    </motion.div>
  );
};

// --- 3. PREMIUM FLIP COUNTDOWN ---
const FlipUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="relative bg-white/40 backdrop-blur-md border border-white/50 text-[#3e271a] w-[70px] h-[80px] rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ rotateX: 90, opacity: 0, y: -20 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          exit={{ rotateX: -90, opacity: 0, y: 20 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="absolute text-3xl font-serif"
        >
          {value.toString().padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
      <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#b49272]/20 to-transparent top-1/2"></div>
    </div>
    <span className="text-[10px] mt-3 tracking-[0.2em] uppercase opacity-80 text-[#5c3a21] font-bold">{label}</span>
  </div>
);

// --- 4. PRE-SHOOT CAROUSEL ---
const ImageCarousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80"
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx((p) => (p === images.length - 1 ? 0 : p + 1)), 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-[320px] mx-auto h-[450px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(62,39,26,0.2)] border-[8px] border-white bg-white/50">
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={images[idx]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};

// --- 5. MAIN APP ---
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
        setTimeLeft({
          days: Math.floor(distance / 86400000),
          hours: Math.floor((distance % 86400000) / 3600000),
          minutes: Math.floor((distance % 3600000) / 60000),
          seconds: Math.floor((distance % 60000) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRSVP = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const phone = form.get('phone');
    const waNum = "94771234567"; 
    const text = `*Wedding Invitation Reply*%0A%0A*Guest Name:* ${name}%0A*Contact:* ${phone}%0A*Status:* ${attendance === 'yes' ? 'Joyfully Accepts 🎉' : 'Regretfully Declines 😔'}`;
    window.open(`https://wa.me/${waNum}?text=${text}`, '_blank');
  };

  // Scroll Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="bg-[#111] min-h-screen font-sans flex justify-center text-[#3e271a] selection:bg-[#b49272] selection:text-white">
      <AnimatePresence>
        {!isGateOpen && <PalaceGate onOpen={() => setIsGateOpen(true)} />}
      </AnimatePresence>

      <div className="w-full max-w-[420px] bg-[#fcf9f5] min-h-screen shadow-2xl relative overflow-x-hidden">
        
        {/* --- HERO SECTION (Soft Gradient Background) --- */}
        <section className="min-h-[100svh] flex flex-col items-center justify-center p-8 text-center relative z-10 bg-gradient-to-b from-[#f3e7b3]/20 via-[#fcf9f5] to-[#fcf9f5]">
          <FloatingParticles />
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="w-full relative z-10">
            <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }}>
              <Sparkles className="mx-auto text-[#d4af37] mb-6" size={24} strokeWidth={1} />
            </motion.div>
            
            <p className="text-[10px] tracking-[0.4em] text-[#a68a77] mb-10 font-bold uppercase">Our Wedding Day</p>
            
            <div className="w-full max-w-[280px] mx-auto mb-10 relative">
              <div className="absolute inset-0 bg-[#d4af37] blur-[30px] opacity-20 rounded-full"></div>
              <img src=/slcouple.jpg" alt="Couple" className="w-full h-auto relative z-10 drop-shadow-2xl" />
            </div>

            <h1 className="text-5xl font-serif text-[#3e271a] mb-2 tracking-wide">Inuka</h1>
            <p className="text-[#b49272] text-sm font-serif mb-2 italic">සහ</p>
            <h1 className="text-5xl font-serif text-[#3e271a] mb-8 tracking-wide">Idushi</h1>
            <p className="text-[#8c7462] tracking-[0.3em] text-[11px] font-bold uppercase">May 09 . 2026</p>
          </motion.div>

          <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }} className="absolute bottom-8 flex flex-col items-center text-[#b49272]">
            <ChevronDown size={24} strokeWidth={1.5} />
          </motion.div>
        </section>

        {/* --- INVITATION MESSAGE (Glassmorphism) --- */}
        <section className="py-24 px-8 text-center relative z-10 bg-white/50 backdrop-blur-xl border-y border-white">
           <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="font-serif text-2xl text-[#b49272] mb-3">Dear {guestName},</h3>
              <h2 className="text-4xl font-serif text-[#3e271a] mb-8">You are Invited</h2>
              <p className="text-sm leading-[2] text-gray-600 mb-8 font-medium px-4">
                අපගේ ජීවිතයේ සුන්දරම පරිච්ඡේදය ආරම්භ වන මේ සුවිශේෂී දිනයේ, අපගේ ආදරණීයයන් වන ඔබ සැමගේ ආශිර්වාදය අපට මහත් සතුටකි.
              </p>
              <div className="w-12 h-[2px] bg-[#d4af37] mx-auto mb-6"></div>
              <h3 className="font-serif text-xl text-[#3e271a]">Inuka & Idushi</h3>
           </motion.div>
        </section>

        {/* --- OUR STORY (Animated Line) --- */}
        <section className="py-24 px-8 relative z-10 bg-gradient-to-b from-[#fcf9f5] to-[#f7f0e6]">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-serif text-center text-[#3e271a] mb-16">Our Story</h2>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-0 relative">
              
              {/* Connecting Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#d4af37] via-[#e6d5c3] to-[#d4af37] opacity-50"></div>

              {[
                { title: "First Met", desc: "We met in an unexpected way, and it turned into the most beautiful chapter.", date: "August 2020", icon: <Heart size={16} /> },
                { title: "First Date", desc: "A simple coffee turned into hours of endless conversations.", date: "October 2020", icon: <Heart size={16} /> },
                { title: "He Proposed", desc: "A magical moment when two souls promised to be one forever.", date: "December 2025", icon: <Sparkles size={16} /> }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="relative z-10 py-8 flex flex-col items-center text-center px-4 bg-white/40 backdrop-blur-sm rounded-3xl mx-4 my-6 shadow-sm border border-white/60">
                  <div className="w-10 h-10 bg-[#3e271a] text-[#fcf9f5] rounded-full flex items-center justify-center shadow-lg mb-4 ring-4 ring-white">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-serif text-[#3e271a] mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{item.desc}</p>
                  <p className="text-[9px] text-[#b49272] font-bold uppercase tracking-[0.2em] bg-white px-3 py-1 rounded-full shadow-sm">{item.date}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* --- COUNTDOWN (Glass Theme) --- */}
        <section className="py-20 px-4 text-center relative z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-[#f7f0e6]">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-[11px] tracking-[0.3em] text-[#b49272] uppercase mb-12 font-bold">Countdown to Forever</h2>
            <div className="flex justify-center gap-2 md:gap-4">
              <FlipUnit value={timeLeft.days} label="Days" />
              <FlipUnit value={timeLeft.hours} label="Hours" />
              <FlipUnit value={timeLeft.minutes} label="Mins" />
              <FlipUnit value={timeLeft.seconds} label="Secs" />
            </div>
          </motion.div>
        </section>

        {/* --- MEMORIES (Carousel) --- */}
        <section className="py-24 px-6 text-center relative z-10 bg-white">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-serif text-[#3e271a] mb-12">Memories</h2>
            <ImageCarousel />
          </motion.div>
        </section>

        {/* --- TIMELINE SECTION --- */}
        <section className="py-24 px-8 bg-[#fcf9f5] relative z-10 border-t border-white">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-serif text-center text-[#3e271a] mb-16">Event Timeline</h2>
            
            <div className="relative border-l-[3px] border-[#e6d5c3] ml-6 space-y-14 pb-4">
              {[
                { time: "පෙ.ව. 10:00", title: "පැමිණීම", desc: "මනමාල මහතාගේ පැමිණීම" },
                { time: "පෙ.ව. 10:45", title: "පෝරුවේ චාරිත්‍ර", desc: "සාම්ප්‍රදායික පෝරුවේ චාරිත්‍ර වාරිත්‍ර" },
                { time: "ප.ව. 12:00", title: "නර්තන හා ආශිර්වාද", desc: "සම්ප්‍රදායික නර්තන හා ආශිර්වාද ගැන්වීම" },
                { time: "ප.ව. 01:00", title: "දිවා ආහාරය", desc: "ප්‍රධාන භෝජන සංග්‍රහය" },
                { time: "ප.ව. 02:30", title: "නර්තන වේදිකාව", desc: "නර්තන වේදිකාව විවෘත කිරීම" },
                { time: "ප.ව. 04:00", title: "පිටවීම", desc: "නව යුවළ පිටත්ව යාම" }
              ].map((event, index) => (
                <div key={index} className="relative pl-10 group">
                  <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-[#3e271a] border-[4px] border-[#fcf9f5] shadow-md group-hover:bg-[#b49272] transition-colors duration-300"></div>
                  <h4 className="text-[10px] text-[#b49272] font-bold tracking-[0.15em] mb-2 flex items-center gap-2 bg-white w-max px-3 py-1 rounded-full shadow-sm"><Clock size={12}/> {event.time}</h4>
                  <h3 className="text-xl font-serif text-[#3e271a] mb-1">{event.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">{event.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* --- MAP & CALENDAR (PREMIUM PILL BUTTONS) --- */}
        <section className="py-20 px-8 text-center relative z-10 bg-white">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-serif text-[#3e271a] mb-4">Venue</h2>
            <p className="text-gray-500 text-sm mb-10 font-bold uppercase tracking-widest">Hilton Colombo, Sri Lanka</p>
            
            {/* Show Map Button (Outlined Pill) */}
            <button 
              onClick={() => setIsMapOpen(!isMapOpen)}
              className="flex items-center justify-center gap-2 w-full mx-auto py-4 bg-transparent border-[1.5px] border-[#b49272] text-[#b49272] rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#b49272] hover:text-white transition-all duration-300 mb-4 active:scale-95"
            >
              <MapIcon size={16} strokeWidth={2} /> {isMapOpen ? 'Hide Map' : 'Show Map'}
            </button>

            {/* Add to Calendar Button (Dark Outlined Pill) */}
            <a 
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Inuka+and+Idushi+Wedding&dates=20260509T043000Z/20260509T103000Z&details=Join+us+for+our+wedding+celebration!&location=Hilton+Colombo,+Sri+Lanka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-transparent border-[1.5px] border-[#3e271a] text-[#3e271a] rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#3e271a] hover:text-white transition-all duration-300 mb-8 active:scale-95"
            >
              <Calendar size={16} strokeWidth={2} /> Add to Google Calendar
            </a>

            {/* Collapsible Map Container */}
            <AnimatePresence>
              {isMapOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="w-full h-80 bg-gray-200 rounded-[2rem] overflow-hidden shadow-2xl mb-6 border-[6px] border-[#fcf9f5]">
                    <iframe 
                      title="Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.676646872583!2d79.84157157500588!3d6.929215093069818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25925a259b1db%3A0xc6bf31b87b7a2d61!2sHilton%20Colombo!5e0!3m2!1sen!2slk!4v1714018800000!5m2!1sen!2slk" 
                      width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
                    </iframe>
                  </div>
                  
                  {/* Open in Google Maps Button (Solid Dark Pill) */}
                  <a 
                    href="https://maps.app.goo.gl/placeholderlink" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#3e271a] text-white rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#2c1a12] hover:shadow-lg transition-all duration-300 active:scale-95 mb-4"
                  >
                    <MapPin size={16} strokeWidth={2} /> Open in Google Maps
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* --- RSVP SECTION (DARK THEME CONTRAST) --- */}
        <section className="py-24 px-8 bg-[#3e271a] relative z-10 overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37] opacity-5 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4af37] opacity-5 rounded-full blur-[80px]"></div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10">
            <h2 className="text-4xl font-serif text-center text-white mb-4">Please Confirm</h2>
            <p className="text-center text-[10px] text-[#b49272] mb-12 uppercase tracking-[0.3em] font-bold">Kindly respond by May 01, 2026</p>
            
            {/* Click to RSVP Button (Solid Gold/Brown Pill) */}
            <button 
              onClick={() => setIsRSVPOpen(!isRSVPOpen)}
              className="flex items-center justify-center gap-2 w-full py-5 bg-[#b49272] text-white rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#a68a77] hover:shadow-[0_10px_30px_rgba(180,146,114,0.3)] transition-all duration-300 active:scale-95"
            >
              <Mail size={16} strokeWidth={2} /> {isRSVPOpen ? 'Close Form' : 'Click to RSVP'}
            </button>

            {/* Collapsible RSVP Form */}
            <AnimatePresence>
              {isRSVPOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0, y: -20 }}
                  animate={{ height: 'auto', opacity: 1, y: 0, marginTop: '2.5rem' }}
                  exit={{ height: 0, opacity: 0, y: -20, marginTop: 0 }}
                  className="overflow-hidden"
                >
                  <form onSubmit={handleRSVP} className="space-y-6 bg-white/5 backdrop-blur-md p-6 rounded-[2rem] border border-white/10">
                    <div>
                      <label className="block text-[10px] font-bold text-[#b49272] uppercase tracking-[0.15em] mb-4 text-center">Will You Attend?</label>
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setAttendance('yes')}
                          className={`flex-1 py-4 rounded-full text-[10px] uppercase tracking-wider font-bold transition-all border-2 ${attendance === 'yes' ? 'bg-[#d4af37] text-[#3e271a] border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.3)]' : 'bg-transparent text-white/70 border-white/20 hover:border-white/50'}`}
                        >
                          Joyfully Accept
                        </button>
                        <button
                          type="button"
                          onClick={() => setAttendance('no')}
                          className={`flex-1 py-4 rounded-full text-[10px] uppercase tracking-wider font-bold transition-all border-2 ${attendance === 'no' ? 'bg-[#d4af37] text-[#3e271a] border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.3)]' : 'bg-transparent text-white/70 border-white/20 hover:border-white/50'}`}
                        >
                          Decline
                        </button>
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        name="name"
                        defaultValue={guestName !== 'Our Beloved Guest' ? guestName : ''}
                        required
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-full focus:outline-none focus:border-[#d4af37] text-white text-sm placeholder-white/50 transition-all text-center"
                        placeholder="Full Name"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-full focus:outline-none focus:border-[#d4af37] text-white text-sm placeholder-white/50 transition-all text-center"
                        placeholder="Contact Number"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 py-5 bg-white text-[#3e271a] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl text-xs active:scale-95"
                    >
                      Send via WhatsApp
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* 9. PREMIUM FOOTER (INUKA TECH) */}
        <footer className="py-10 px-6 text-center bg-[#111] z-10 relative">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-semibold">
            © 2026 All rights reserved by Inuka & Idushi
          </p>
          <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400">
            <span>Powered By</span>
            <a 
              href="https://inukatech.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#d4af37] font-bold tracking-widest uppercase hover:text-white transition-colors flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
            >
              Inuka Tech
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}
