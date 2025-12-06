import { CATEGORIES } from "@/lib/constants";
import { motion } from "framer-motion";

export function Categories() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-bold mb-6"
          >
            We've vetted retreats in more than 100 countries
          </motion.h2>
          <p className="text-muted-foreground text-lg">
            Whether you're looking to meditate in the mountains or surf in the ocean, we have the perfect category for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, index) => (
            <motion.div 
               key={cat.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                 <div className="flex justify-between items-center text-sm font-medium text-white/80">
                    <span>{cat.title}</span>
                    <span>{cat.count}</span>
                 </div>
                 <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-flex items-center text-sm font-semibold border-b border-white pb-0.5">
                       Explore <span className="ml-2">→</span>
                    </span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
