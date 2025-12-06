import { motion } from "framer-motion";

export function Stats() {
  return (
    <section id="about" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
             <div className="absolute left-0 bottom-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

      <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Not just trips, experiences that nurture body and soul.
             </h2>
             <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                Vita Travel is a premium wellness travel marketplace that blends the ease of booking with the feel of an editorial magazine. Discover curated programs, match them with exceptional stays, and book seamlessly.
             </p>
             <div className="grid grid-cols-2 gap-8">
                <div>
                    <div className="text-4xl font-bold mb-1">100+</div>
                    <div className="text-sm text-primary-foreground/70">Countries travelled</div>
                </div>
                <div>
                    <div className="text-4xl font-bold mb-1">1,472+</div>
                    <div className="text-sm text-primary-foreground/70">Retreats attended</div>
                </div>
             </div>
           </motion.div>
        </div>
        <div className="relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
             >
                <img 
                    src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=1000" 
                    alt="Meditation" 
                    className="w-full h-auto"
                />
             </motion.div>
        </div>
      </div>
    </section>
  );
}
