import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Are homeopathic medicines safe for children and pregnant women?",
      answer: "Yes, absolutely. Homeopathic medicines are highly diluted and completely natural. They are extremely safe for infants, children, pregnant women, and the elderly with no side effects."
    },
    {
      question: "How long does a homeopathic treatment take?",
      answer: "The duration depends on the nature of the illness. Acute problems like cold or fever can be cured in a few days. Chronic diseases may take a few months to fully resolve from the root."
    },
    {
      question: "Do I need to follow a strict diet while taking these medicines?",
      answer: "Generally, you only need to avoid strong-smelling substances like raw onion, garlic, or coffee immediately before and after taking the medicine, as strong odors can neutralize the effect."
    },
    {
      question: "Can I take homeopathy along with allopathic medicines?",
      answer: "Yes, homeopathy can be taken safely alongside conventional treatments. It won't interfere with your current medications. In fact, it often helps reduce the side effects of heavy allopathic drugs."
    },
    {
      question: "Do you offer online video consultations?",
      answer: "Yes, we offer comprehensive online video consultations for patients worldwide. Medicines can be shipped directly to your doorstep."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3">Got Questions?</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === index ? 'border-primary-200 bg-primary-50' : 'border-slate-200 bg-white hover:border-primary-200'}`}
            >
              <button
                className="w-full px-6 py-5 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-left text-slate-800 text-lg pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`text-primary-500 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-primary-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
