import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Krishna Sengar",
      condition: "Period Problem",
      text: "If you are tired of taking many medicines and not getting relief, you must visit this clinic. Doctor is very nice and takes time. Homeopathic medicine has no side effects. Best doctor — calm and humble. I had period problems and took treatment at many places, but only this treatment helped me a lot. Thank you so much.",
      image: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwd29tZW58ZW58MHx8MHx8fDA%3D",
      source: "Google Review"
    },
    {
      id: 2,
      name: "Mrs. Patidar's Mother",
      condition: "Knee Pain",
      text: "My mother is 55 years old and got relief from 15 years of knee pain without any operation or surgery. Great for knees problem.",
      image: "https://media.istockphoto.com/id/1293903541/photo/young-woman-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=UdxFAngDV5MeDQ5f3Ff5CavYTh1Fu-RnQ3PsY6SER3s=",
      source: "Patient Testimonial"
    },
    {
      id: 3,
      name: "Ravi Patel",
      condition: "Appendicitis",
      text: "My elder brother suddenly developed abdominal pain. Sonography revealed appendicitis and the surgeon suggested surgery. Dr. Lokesh cured my brother's appendix with homeopathic treatment, eliminating the need for surgery. Thank you, Dr. Patidar.",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      source: "Verified Case"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-primary-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-800 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-dark rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-primary-300 font-semibold tracking-wider uppercase text-sm mb-3">Patient Reviews</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted Care from Real Patients</h2>
          <p className="max-w-2xl mx-auto text-primary-300 text-base md:text-lg">
            Read real stories from patients who found relief through safe, natural homeopathy at Dr. Lokesh Patidar's clinic.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-[2rem] p-6 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.8)] hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary-500"
                />
                <div>
                  <div className="font-semibold text-white">{review.name}</div>
                  <div className="text-primary-300 text-sm">{review.condition}</div>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="text-yellow-400" size={16} />
                ))}
                <span className="text-sm text-primary-200 font-medium">5.0</span>
              </div>

              <p className="text-sm leading-7 text-primary-100 mb-6">{review.text}</p>

              <div className="text-xs uppercase tracking-[0.22em] text-primary-300">{review.source}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
