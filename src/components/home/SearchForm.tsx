import { Search, MapPin, Calendar, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { motion } from "framer-motion";

export function SearchForm() {
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Search simulated! In a real app, this would filter results.");
    }, 1500);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      onSubmit={handleSearch}
      className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4"
    >
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative group">
          <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-white/70 group-focus-within:text-white" />
          <Input 
            glass 
            placeholder="Where to?" 
            className="pl-10" 
          />
        </div>
        <div className="relative group">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/70 group-focus-within:text-white" />
          <Input 
            glass 
            placeholder="Activity (Yoga, Surf...)" 
            className="pl-10" 
          />
        </div>
        <div className="relative group">
          <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-white/70 group-focus-within:text-white" />
          <Input 
            glass 
            placeholder="Dates" 
            className="pl-10" 
          />
        </div>
        <div className="relative group">
          <Wallet className="absolute left-3 top-2.5 h-5 w-5 text-white/70 group-focus-within:text-white" />
          <Input 
            glass 
            type="number"
            placeholder="Budget ($)" 
            className="pl-10" 
          />
        </div>
      </div>
      <Button 
        size="lg" 
        className="w-full md:w-auto bg-white text-primary hover:bg-white/90 font-semibold"
        disabled={loading}
      >
        {loading ? "Searching..." : "Explore"}
      </Button>
    </motion.form>
  );
}
