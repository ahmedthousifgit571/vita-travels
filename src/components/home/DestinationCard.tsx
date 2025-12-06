import { MapPin, Users, Star, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

interface DestinationCardProps {
  destination: {
    id: number;
    title: string;
    location: string;
    price: number;
    duration: string;
    image: string;
    rating: number;
    reviews: number;
    category: string;
  };
  index: number;
}

export function DestinationCard({ destination, index }: DestinationCardProps) {
  return (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden border-0 shadow-lg group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative h-64 overflow-hidden">
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="glass" className="backdrop-blur-md">
              {destination.category}
            </Badge>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
             <div className="flex items-center text-white/90 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                {destination.location}
             </div>
          </div>
        </div>

        <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {destination.title}
                </h3>
            </div>
        </CardHeader>
        
        <CardContent className="pb-4 flex-grow">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
             <div className="flex items-center gap-2">
                 <span className="flex items-center text-yellow-500 font-medium">
                     <Star className="h-4 w-4 fill-current mr-1" />
                     {destination.rating}
                 </span>
                 <span>({destination.reviews})</span>
             </div>
             <div>{destination.duration}</div>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
             <Users className="h-4 w-4 mr-2" />
             Trusted by {10 + Math.floor(Math.random() * 200)}+ travelers
          </div>
        </CardContent>

        <CardFooter className="pt-0 border-t bg-muted/20 p-6 flex items-center justify-between">
            <div>
                <span className="text-xs text-muted-foreground block">from</span>
                <span className="text-xl font-bold text-primary">${destination.price.toLocaleString()}</span>
            </div>
            <Button size="sm" className="group-hover:translate-x-1 transition-transform">
                Details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
