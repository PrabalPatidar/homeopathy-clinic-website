import { motion } from 'framer-motion';
import { Activity, Wind, Bug, Brain, Stethoscope, Droplet, Baby, Heart, Frown, ShieldAlert } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    { icon: <Droplet size={32} />, title: 'Skin Problems', desc: 'Acne, Eczema, Psoriasis, and other chronic skin conditions treated from the root.' },
    { icon: <Wind size={32} />, title: 'Hair Loss', desc: 'Natural remedies for hair fall, alopecia, and scalp issues.' },
    { icon: <Bug size={32} />, title: 'Allergy', desc: 'Build immunity against dust, pollen, food, and environmental allergies.' },
    { icon: <Brain size={32} />, title: 'Migraine', desc: 'Long-lasting relief from severe headaches and migraine attacks.' },
    { icon: <Activity size={32} />, title: 'Thyroid', desc: 'Holistic management of Hypo and Hyperthyroidism.' },
    { icon: <Stethoscope size={32} />, title: 'Diabetes', desc: 'Supportive homeopathic care to manage blood sugar levels naturally.' },
    { icon: <Baby size={32} />, title: 'Child Care', desc: 'Safe and gentle treatments for childhood asthma, immunity issues, and growth.' },
    { icon: <Heart size={32} />, title: 'Women Health', desc: 'PCOS, irregular periods, menopause, and other gynecological concerns.' },
    { icon: <Frown size={32} />, title: 'Stress & Anxiety', desc: 'Calm the mind and restore emotional balance without habit-forming pills.' },
    { icon: <ShieldAlert size={32} />, title: 'Chronic Diseases', desc: 'Comprehensive care for long-standing illnesses and auto-immune disorders.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="treatments" className="py-24 bg-beige relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3">Our Expertise</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Treatments & Services
          </h2>
          <p className="text-slate-600 text-lg">
            We offer specialized homeopathic treatments for a wide range of acute and chronic conditions, focusing on permanent cures rather than temporary suppression.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
