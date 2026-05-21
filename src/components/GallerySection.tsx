import { motion } from 'framer-motion';

const GallerySection = () => {
  const images = [
    "https://images.unsplash.com/photo-1725267882596-2d08e560b250?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZW9wYXRoeXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1671108503276-1d3d5ab23a3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvbWVvcGF0aHklMjBtZWRpY2luZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1208606305/photo/bottle-of-homeopathic-globules-mortar-of-green-nettle-and-mint-leaves-juniper-twigs.webp?a=1&b=1&s=612x612&w=0&k=20&c=VP8m-nqh0CtW83Q1Q7PXJkf1haVeCHaZ9aQNTNPrrno=",
    "https://plus.unsplash.com/premium_photo-1726750967675-e518e87fa361?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGhvbWVvcGF0aHklMjBtZWRpY2luZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1070960258/photo/pharmacist-holding-a-medicine-bottle-in-hand.webp?a=1&b=1&s=612x612&w=0&k=20&c=R7mfrVCrAaxB7i5azWMz_7iChWWh390CNpnIW3hwjKA=",
    "https://media.istockphoto.com/id/466628811/photo/alternative-medicine.webp?a=1&b=1&s=612x612&w=0&k=20&c=Tw9cUzXAZOjGA6DFbyRSeDzTL2PSQAVepmqcGZU7Vus="
  ];

  return (
    <section className="py-24 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3">Take a Tour</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Our Healing Environment
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group"
            >
              <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src={src} 
                alt={`Clinic view ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
