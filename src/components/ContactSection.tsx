import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="appointment" className="py-24 bg-beige relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
          
          {/* Contact Info Panel */}
          <div className="w-full lg:w-2/5 bg-primary-900 text-white p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Contact Information</h3>
              <p className="text-primary-100 mb-12 text-lg">
                Fill up the form and our Team will get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 bg-primary-800/50 rounded-full flex items-center justify-center flex-shrink-0 text-primary-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Phone</div>
                    <div className="text-primary-100">
                      <a href="tel:+919826623981" className="hover:text-primary-300 transition-colors">+91 98266 23981</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 bg-primary-800/50 rounded-full flex items-center justify-center flex-shrink-0 text-primary-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Email</div>
                    <div className="text-primary-100">
                      <a href="mailto:contact@patidarhomeoclinic.com" className="hover:text-primary-300 transition-colors">contact@patidarhomeoclinic.com</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 bg-primary-800/50 rounded-full flex items-center justify-center flex-shrink-0 text-primary-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Location</div>
                    <div className="text-primary-100 leading-relaxed">
                      Dashpur Kunj Road, near BPL Square,<br />
                      Mandsaur, Madhya Pradesh - 458001
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Dashpur+Kunj+Road+near+BPL+Square+Mandsaur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex mt-3 items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 transition-colors"
                    >
                      Open in Google Maps
                    </a>
                    <a
                      href="https://wa.me/919826623981?text=Hello%20Dr.%20Patidar%2C%20I%20would%20like%20to%20book%20an%20appointment."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex mt-3 items-center rounded-full bg-emerald-500 px-4 py-2 text-sm text-white hover:bg-emerald-600 transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form Panel */}
          <div className="w-full lg:w-3/5 p-10 lg:p-16">
            <h3 className="text-3xl font-bold text-slate-800 mb-8">Book an Appointment</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="+91 98266 23981" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50 focus:bg-white" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message or Health Concern</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50 focus:bg-white resize-none" placeholder="Briefly describe your symptoms..."></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl shadow-lg transition-colors text-lg"
              >
                Confirm Appointment
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
