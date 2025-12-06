import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Quiz() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="container px-4 mx-auto text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto space-y-8"
            >
                 {/* Decorative polaroids or cards could go here as BG, keeping it simple for now */}
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    Can't find the perfect retreat?<br />
                    <span className="text-primary/80">Take our 1-minute quiz.</span>
                </h2>
                <p className="text-xl text-white/70">
                    We'll match you with the perfect experiences based on your travel style and goals.
                </p>
                <div className="pt-4">
                    <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90 text-lg px-10 h-14 rounded-full">
                        Inspire Me
                    </Button>
                </div>
            </motion.div>
        </div>
    </section>
  );
}
