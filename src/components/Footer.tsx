import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock } from 'lucide-react';
import clinicLogo from '../assets/clinic_logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={clinicLogo} 
                alt="Patidar Homeopathic Clinic Logo" 
                className="w-12 h-12 rounded-full object-cover bg-white p-0.5 border border-slate-700 shadow-md"
              />
              <span className="font-bold text-xl tracking-tight text-white">
                Patidar<span className="text-primary-500">Homeo</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mt-4">
              Providing holistic and natural homeopathic treatments for a healthier, balanced life. Trust Dr. Lokesh Patidar's expertise for your well-being.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Doctor', 'Our Treatments', 'Patient Reviews', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                    <span className="text-primary-500 text-xs">▸</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-500 mt-1 flex-shrink-0" size={18} />
                <span>Dashpur Kunj Road, near BPL Square, Mandsaur - 458001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-500 flex-shrink-0" size={18} />
                <a href="tel:+919826623981" className="hover:text-primary-400 transition-colors">+91 98266 23981</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-500 flex-shrink-0" size={18} />
                <a href="mailto:contact@patidarhomeoclinic.com" className="hover:text-primary-400 transition-colors">contact@patidarhomeoclinic.com</a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
              Working Hours
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between border-b border-slate-700 pb-2">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-primary-500" />
                  <span>Mon - Sat</span>
                </div>
                <span className="text-white">10:00 AM - 07:00 PM</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-primary-500" />
                  <span>Sunday</span>
                </div>
                <span className="text-red-400 font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Patidar Homeopathic Clinic. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-primary-400">Privacy Policy</a>
            <span className="text-slate-600">|</span>
            <a href="#" className="hover:text-primary-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
