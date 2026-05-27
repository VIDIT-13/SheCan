import { Globe, Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-primary" fill="currentColor" />
              <span className="font-bold text-xl tracking-tight">She Can</span>
            </div>
            <p className="text-muted-foreground text-center md:text-left max-w-sm italic">
              "Together we create opportunities and inspire change."
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Website</span>
                <Globe size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Email</span>
                <Mail size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Phone</span>
                <Phone size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Location</span>
                <MapPin size={24} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; 2026 She Can Foundation. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
