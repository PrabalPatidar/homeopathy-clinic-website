import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, UserCheck, Stethoscope, Wallet, Video } from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    { icon: <UserCheck size={28} />, title: 'Personalized Treatment', desc: 'Every patient is unique. We provide customized medicines based on individual constitution.' },
    { icon: <Leaf size={28} />, title: 'Natural Medicine', desc: 'Our remedies are derived from natural sources, making them safe for all ages.' },
    { icon: <ShieldCheck size={28} />, title: 'No Side Effects', desc: 'Highly diluted homeopathic medicines are completely non-toxic and side-effect free.' },
    { icon: <Stethoscope size={28} />, title: 'Experienced Doctor', desc: 'Expert care from highly qualified professionals with years of clinical success.' },
    { icon: <Wallet size={28} />, title: 'Affordable Care', desc: 'High-quality healthcare that doesn\'t burn a hole in your pocket.' },
    { icon: <Video size={28} />, title: 'Online Consultation', desc: 'Consult with our doctors from the comfort of your home, anywhere in the world.' },
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Side */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3">Why Choose Us</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
              A gentle path to complete wellness.
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We believe in healing that is safe, effective, and lasting. Our holistic approach ensures that you achieve true health, rather than just temporary suppression of symptoms.
            </p>
            <a 
              href="#appointment" 
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg"
            >
              Start Your Healing Journey
            </a>
          </motion.div>

          {/* Cards Side */}
          <motion.div 
            className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="bg-beige p-6 rounded-3xl border border-transparent hover:border-primary-200 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary-600 mb-4 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{reason.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
