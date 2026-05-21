import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const features = [
    'B.H.M.S, (Homeopathy)',
    '5+ Years of Clinical Experience',
    'Certified in Advanced Homeotherapeutics',
    'Specialist in Chronic Diseases',
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image Side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative block behind image */}
              <div className="absolute inset-0 bg-primary-100 rounded-3xl transform -rotate-3 scale-105 z-0"></div>

              <img
                src="https://lh3.googleusercontent.com/p/AF1QipOucCDG4KWSScxBeb65u2j7wphTbS6-GHY5V1Ee=s1360-w1360-h1020-rw"
                alt="Doctor Portrait"
                className="relative z-10 w-full h-[600px] object-cover rounded-3xl shadow-xl"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3">About The Doctor</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Dr. Lokesh Patidar
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              With over 5 years of dedicated experience in homeopathic medicine, Dr. Patidar believes in treating the patient as a whole rather than just addressing isolated symptoms.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              His gentle, natural approach to healing has helped thousands of patients recover from chronic ailments, skin conditions, and respiratory issues, restoring their quality of life without harsh chemicals or side effects.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-primary-500 flex-shrink-0" size={24} />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 bg-beige rounded-2xl border border-slate-100 relative">
              <div className="text-4xl text-primary-200 absolute top-4 left-4 font-serif">"</div>
              <p className="text-slate-700 italic relative z-10 pl-8 font-medium">
                Our mission is to provide safe, gentle, and effective homeopathic care that empowers the body's natural healing processes.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
