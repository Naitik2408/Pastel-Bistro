import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Phone as WhatsApp } from 'lucide-react';
import { cn } from './lib/utils';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Pages
import Home from './pages/Home';
import ReservePage from './pages/ReservePage';
import MenuPage from './pages/MenuPage';
import StoryPage from './pages/StoryPage';
import GalleryPage from './pages/GalleryPage';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// --- Shared Components ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const scrollTo = (id: string) => {
      setIsMenuOpen(false);
      if (isHome) {
          const el = document.getElementById(id);
          if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
          }
      } else {
          window.location.href = `/#${id}`;
      }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] z-[100] transition-all duration-300">
      <div className="flex items-center justify-between px-6 md:px-[60px] h-full backdrop-blur-md bg-glass border-b border-black/5">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img 
            src="/assets/logo.jpg" 
            alt="Pastel Bistro" 
            className="h-[60px] w-auto"
          />
          <span className="text-xl font-serif font-bold italic tracking-wider text-primary hidden sm:block">Pastel Bistro</span>
        </Link>
        <div className="hidden md:flex items-center gap-[40px] text-[11px] uppercase tracking-[2px] font-medium">
          <button onClick={() => scrollTo('experience')} className="hover:text-accent transition-colors">Experience</button>
          <button onClick={() => scrollTo('menu')} className="hover:text-accent transition-colors">Menu</button>
          <button onClick={() => scrollTo('chef')} className="hover:text-accent transition-colors">The Chef</button>
          <Link to="/reserve" className="btn-geometric">Book Your Table</Link>
        </div>
        <button className="md:hidden p-2 text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-[80px] bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <button onClick={() => scrollTo('experience')} className="text-3xl font-serif">Experience</button>
        <button onClick={() => scrollTo('menu')} className="text-3xl font-serif">Menu</button>
        <button onClick={() => scrollTo('chef')} className="text-3xl font-serif">The Chef</button>
        <Link to="/reserve" className="btn-geometric text-lg mt-4" onClick={() => setIsMenuOpen(false)}>Book Your Table</Link>
      </div>
    </nav>
  );
};

const WhatsAppCTA = () => {
    return (
        <div className="py-16 bg-soft-bg flex flex-col items-center justify-center gap-8 border-b border-black/5">
            <span className="section-label-gold mb-0">Direct Concierge</span>
            <a 
                href="https://wa.me/919056014963?text=Hi,%20I'd%20like%20to%20book%20a%20table%20at%20Pastel%20Bistro" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-4 text-xl font-serif text-primary hover:text-accent transition-all group"
            >
                <WhatsApp className="w-6 h-6 animate-pulse" /> 
                <span className="border-b border-black/10 group-hover:border-accent">9056014963</span>
            </a>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="py-12 md:py-20 px-6 md:px-[60px] bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 items-start">
                <div className="max-w-md">
                    <h3 className="text-2xl md:text-3xl font-serif italic mb-6">Pastel Bistro</h3>
                    <p className="text-primary/50 text-sm font-light leading-relaxed mb-8">
                        Where every plate tells a story and every evening is an masterpiece. Established in 1994 to bring avant-garde culinary arts to Punjabi hearts.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/pastelbistroindia/?hl=en" target="_blank" rel="noreferrer" className="p-3 border border-black/5 hover:bg-primary hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
                        <a href="https://www.threads.com/@pastelbistroindia?xmt=AQF0VB1sQpsE0esFhifWioNj5BL1O_qnIojq3Wr-o5YVUsg" target="_blank" rel="noreferrer" className="p-3 border border-black/5 hover:bg-primary hover:text-white transition-all">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12 21.6C6.7 21.6 2.4 17.3 2.4 12C2.4 6.7 6.7 2.4 12 2.4C17.3 2.4 21.6 6.7 21.6 12C21.6 17.3 17.3 21.6 12 21.6ZM12 4.8C8 4.8 4.8 8 4.8 12C4.8 16 8 19.2 12 19.2C16 19.2 19.2 16 19.2 12C19.2 8 16 4.8 12 4.8ZM16.2 12C16.2 14.3 14.3 16.2 12 16.2C9.7 16.2 7.8 14.3 7.8 12C7.8 9.7 9.7 7.8 12 7.8C14.3 7.8 16.2 9.7 16.2 12Z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    <div>
                        <span className="section-label-gold">Location</span>
                        <p className="text-primary/60 text-sm leading-relaxed">
                            1st Floor, SCO 100C, Phase 2, <br/>Urban Estate phase II, Jalandhar, <br/>Punjab 144005
                        </p>
                    </div>
                    <div>
                        <span className="section-label-gold">Inquiries</span>
                        <p className="text-primary/60 text-sm leading-relaxed mb-1">
                            hello@pastelbistro.in
                        </p>
                        <p className="text-primary/60 text-sm leading-relaxed">
                            +91 90560-14963
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto mt-12 md:mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-primary/30 uppercase tracking-[2px] gap-4">
                <p>© 2024 Pastel Bistro. Jalandhar.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-accent transition-colors">Privacy</a>
                    <a href="#" className="hover:text-accent transition-colors">Legal</a>
                </div>
            </div>
        </footer>
    );
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// --- Main App ---

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div ref={scrollRef} className="relative w-full overflow-x-hidden selection:bg-accent selection:text-white bg-soft-bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserve" element={<ReservePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
        <WhatsAppCTA />
        <Footer />
      </div>
    </Router>
  );
}
