import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';

const featureImage = 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFfmsVzC8-pK0YFT4pLSRoTcvPmAuIM9BKn4OSRJGkQiWmt4vCn2f-k3jHshF7OVwZLYJSBg43_eJ452QYbX28pE0PIJ7apsFuQbftcbPC3QN5kiW7IFK0Mj1g9_cIcMlOmxkTj=s1360-w1360-h1020-rw';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-beige">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-accent-light rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 font-medium text-sm mb-6 border border-primary-100">
              Dr. Lokesh Patidar's Homeopathy Clinic
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
              Natural Healing with <br/>
              <span className="text-gradient">Trusted Homeopathy</span> Care
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Experience holistic treatment without side effects. We treat the root cause, not just the symptoms, bringing balance back to your body naturally.
            </p>

            <div className="grid gap-3 sm:grid-cols-3 mb-8">
              <div className="rounded-3xl bg-white/90 border border-slate-200 p-4 shadow-sm">
                <div className="flex items-center gap-3 text-primary-600 mb-3">
                  <Sparkles size={20} />
                  <span className="font-semibold">100% Natural Care</span>
                </div>
                <p className="text-sm text-slate-600">Safe remedies for every age.</p>
              </div>
              <div className="rounded-3xl bg-white/90 border border-slate-200 p-4 shadow-sm">
                <div className="flex items-center gap-3 text-primary-600 mb-3">
                  <ShieldCheck size={20} />
                  <span className="font-semibold">Trusted Expertise</span>
                </div>
                <p className="text-sm text-slate-600">Professional care by experienced specialists.</p>
              </div>
              <div className="rounded-3xl bg-white/90 border border-slate-200 p-4 shadow-sm">
                <div className="flex items-center gap-3 text-primary-600 mb-3">
                  <HeartHandshake size={20} />
                  <span className="font-semibold">Personalized Treatment</span>
                </div>
                <p className="text-sm text-slate-600">Medication tailored to your body’s needs.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#appointment" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-medium transition-all shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.23)] hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Book Appointment
              </a>
              <a 
                href="#appointment" 
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-medium transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Contact Now
                <ArrowRight size={20} className="text-slate-400" />
              </a>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3,4].map((i) => (
                  <img key={i} className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-bold text-slate-800 flex items-center gap-2">
                  <span className="text-yellow-400">★★★★★</span>
                  5.0 rating from 1,000+ patients
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white p-2 border border-slate-100">
              <img 
                src={featureImage} 
                alt="Dr. Lokesh Patidar sitting at his clinic desk" 
                className="w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-auto rounded-[1.5rem] object-cover object-center sm:object-top"
              />

              {/* Floating Badge 1 (inside card) */}
              <motion.div 
                className="absolute top-2 left-2 sm:top-4 sm:left-4 md:top-6 md:left-6 glass-effect p-1.5 sm:p-2 sm:ps-3 rounded-2xl flex items-center gap-2 sm:gap-3 z-20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-accent-light flex items-center justify-center text-accent-dark text-xs sm:text-sm md:text-lg font-bold">
                  15+
                </div>
                <div>
                  <div className="font-bold text-slate-800">Years</div>
                  <div className="text-xs text-slate-500 font-medium">Experience</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 (inside card) */}
              <motion.div 
                className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-6 md:right-6 glass-effect p-1.5 sm:p-2 sm:ps-3 rounded-2xl flex items-center gap-2 sm:gap-3 z-20"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-slate-800">100% Natural</div>
                  <div className="text-xs text-slate-500 font-medium">No Side Effects</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
