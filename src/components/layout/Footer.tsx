import { Facebook, Instagram, Twitter, Linkedin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 pt-16 pb-8 border-t">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Vita Travels</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We curate the world's best wellness retreats, helping you disconnect to reconnect.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Safety Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cancellation Options</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Medical Info</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Newsletter</h4>
            <p className="text-sm text-muted-foreground">Subscribe for the latest travel inspiration.</p>
            {/* Simple form for footer, main newsletter section is separate */}
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 px-3 py-2 text-sm rounded-md border bg-background focus:ring-1 focus:ring-primary outline-none"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2024 Vita Travels Inc. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart size={12} className="text-red-500 fill-red-500" />
            <span>for explorers everywhere.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
