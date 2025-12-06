import { TESTIMONIALS } from "@/lib/constants";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";

export function Testimonials() {
  // Transform the existing TESTIMONIALS data to match the new component's format
  const testimonials = TESTIMONIALS.map((t) => ({
    author: {
      name: t.name,
      handle: `@${t.role.toLowerCase().replace(/\s+/g, '')}`,
      avatar: t.image,
    },
    text: t.quote,
  }));

  return (
    <TestimonialsSection
      title="Loved by travelers worldwide"
      description="Join thousands of travelers who have discovered their perfect wellness retreat with Vita Travels"
      testimonials={testimonials}
    />
  );
}
