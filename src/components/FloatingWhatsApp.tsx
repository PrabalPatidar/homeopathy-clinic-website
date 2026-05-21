import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/919826623981?text=Hello%20Dr.%20Lokesh%20Patidar,%20I%20would%20like%20to%20inquire%20about%20homeopathic%20treatment."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-colors flex items-center justify-center group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
    >
      <MessageCircle size={32} />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium pointer-events-none">
        Chat with us!
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-8 border-transparent border-l-white"></span>
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
