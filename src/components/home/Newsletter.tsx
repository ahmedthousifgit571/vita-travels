import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    // Simulate API
    setTimeout(() => {
        setStatus("success");
        setEmail("");
        // Reset after 3s
        setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="bg-primary/5 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="h-8 w-8 ml-1" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Travel inspiration, delivered.</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Get the latest deals, hidden gems, and travel tips straight to your inbox. No spam, ever.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                    <Input 
                        placeholder="Your email address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-background h-12"
                        required
                        type="email"
                    />
                    <Button type="submit" size="lg" disabled={status === "loading" || status === "success"} className="h-12 min-w-[120px]">
                        {status === "loading" ? "..." : status === "success" ? "Subscribed!" : "Subscribe"}
                    </Button>
                </form>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
