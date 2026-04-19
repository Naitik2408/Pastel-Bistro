import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { InstagramFeed } from '../components/InstagramFeed';
import { Link, useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

// --- Sections ---

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
  
    useGSAP(() => {
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out'
      });
  
      gsap.to('.hero-visual', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
        scale: 1.1,
        ease: 'none'
      });
    }, { scope: heroRef });
  
    return (
      <section ref={heroRef} className="relative min-h-screen pt-[80px] grid lg:grid-cols-[1fr_400px]">
        <div className="hero-content p-6 md:p-[60px] flex flex-col justify-center border-r border-black/5">
          <div className="mb-6">
              <span className="inline-block px-3 py-1 border border-accent text-accent text-[9px] uppercase tracking-wider mb-6">Since 1994</span>
          </div>
          <div ref={textRef}>
              <h1 className="text-5xl md:text-7xl lg:text-[82px] leading-[0.95] text-primary mb-6 font-serif">
                  Elegance Meets<br/>Flavours.
              </h1>
              <p className="text-base md:text-lg text-primary/60 max-w-[400px] leading-relaxed mb-10">
                  More than food — an experience crafted with sophistication and seasonal mastery.
              </p>
              <div className="flex gap-4 mb-10">
                  <button onClick={() => navigate('/reserve')} className="btn-geometric">Book Your Table</button>
                  <button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} className="btn-geometric bg-transparent border-primary text-primary hover:bg-primary hover:text-white px-8">Explore Menu</button>
              </div>
              <div className="hero-visual w-full h-[250px] md:h-[320px] rounded-sm overflow-hidden bg-muted relative">
                  <img 
                      src="https://images.unsplash.com/photo-1481833761820-0509d3217039?q=70&w=1200&auto=format&fit=crop" 
                      alt="Bistro Atmosphere" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="eager"
                      decoding="async"
                  />
              </div>
          </div>
          <div className="mt-auto pt-10 flex gap-6 text-[10px] text-primary/30 uppercase tracking-widest hidden lg:flex">
               <span>© 2024 Pastel Bistro</span>
               <span>Avenue Montaigne, Paris</span>
               <span>Connect: @pastelbistro</span>
          </div>
        </div>
        <aside className="bg-white p-[40px] flex flex-col gap-[30px] hidden lg:flex">
          <div>
              <span className="section-label-gold">Signature Dishes</span>
              <div className="flex flex-col gap-8">
                  {[
                      { title: "Parsi Style Egg Akuri", desc: "Spiced scrambled eggs, brioche.", img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=75&w=200&auto=format&fit=crop" },
                      { title: "Israeli Falafel Veg", desc: "Traditional falafel, pita pockets.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=75&w=200&auto=format&fit=crop" },
                      { title: "Korean Mushroom Omelet", desc: "Earthy mushrooms, Korean zest.", img: "https://images.unsplash.com/photo-1704524853986-605716a8e775?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
                  ].map((dish, i) => (
                      <div key={i} className="flex gap-4 items-center pb-6 border-b border-black/5 last:border-0">
                          <img 
                              src={dish.img} 
                              alt={dish.title}
                              className="w-[70px] h-[70px] rounded-full flex-shrink-0 object-cover"
                              loading="lazy"
                              decoding="async"
                          />
                          <div>
                              <h4 className="text-base font-serif mb-1">{dish.title}</h4>
                              <p className="text-xs text-primary/50">{dish.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
          <div className="mt-auto bg-soft-bg p-6 border border-black/5">
              <span className="section-label-gold">Quick Reserve</span>
              <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-white border border-black/10 p-2 text-[11px]">Date: Nov 24</div>
                  <div className="bg-white border border-black/10 p-2 text-[11px]">Guests: 2</div>
                  <div className="bg-white border border-black/10 p-2 text-[11px] col-span-2">Time: 20:30</div>
              </div>
              <button onClick={() => navigate('/reserve')} className="btn-geometric w-full tracking-[3px]">Confirm Booking</button>
              <p className="text-[9px] text-center mt-3 opacity-50 uppercase">OR RESERVE VIA WHATSAPP</p>
          </div>
        </aside>
      </section>
    );
  };
  
const CulinaryHighlights = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
  
    const dishes = [
      { 
        title: "Creamy Alfredo Pasta", 
        desc: "Hand-rolled fettuccine in velvet truffle sauce, finished with aged parmesan and fresh herbs.", 
        img: "https://images.unsplash.com/photo-1761168941826-7efda859bdae?q=75&w=1200&auto=format&fit=crop",
        category: "Mains"
      },
      { 
        title: "Lotus Stem Falafel", 
        desc: "Crisp lotus stem medallions paired with house-made tahini and pickled artisanal vegetables.", 
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=75&w=1200&auto=format&fit=crop",
        category: "Entrées"
      },
      { 
        title: "Crispy Portuguese Chicken", 
        desc: "Golden-crusted organic chicken infused with authentic spices and a hint of peri-peri zest.", 
        img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=75&w=1200&auto=format&fit=crop",
        category: "Signature"
      },
      { 
        title: "Avocado Matcha Smoothie", 
        desc: "A silky, balanced fusion of ceremonial grade matcha and buttery organic avocado.", 
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=75&w=1200&auto=format&fit=crop",
        category: "Wellness"
      },
    ];
  
    return (
      <section ref={sectionRef} className="py-24 px-6 md:px-[60px] bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center md:text-left">
                <span className="section-label-gold">Seasonal Focus</span>
                <h2 className="text-4xl md:text-7xl font-serif italic leading-tight">Culinary Highlights</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                {dishes.map((dish, i) => (
                    <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'md:mt-24' : ''}`}>
                        <div className="group relative overflow-hidden bg-muted aspect-[4/5] mb-8">
                            <img 
                                src={dish.img} 
                                alt={dish.title} 
                                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                loading="lazy"
                                decoding="async"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-6 left-6">
                                <span className="bg-white/90 backdrop-blur-sm px-4 py-1 text-[10px] uppercase tracking-[2px] font-bold text-primary">
                                    {dish.category}
                                </span>
                            </div>
                        </div>
                        <div>
                            <span className="text-[11px] uppercase tracking-[3px] text-accent font-bold mb-3 block">0{i + 1} // selection</span>
                            <h3 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">{dish.title}</h3>
                            <p className="text-primary/60 text-lg font-light leading-relaxed mb-8 max-w-sm">
                                {dish.desc}
                            </p>
                            <button 
                                onClick={() => navigate('/menu')} 
                                className="group flex items-center gap-3 text-[11px] uppercase tracking-[2px] font-bold border-b border-primary/20 pb-2 hover:border-accent transition-colors"
                            >
                                <span>Discover Dish</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-24 pt-12 border-t border-black/5 flex flex-col items-center">
                <p className="text-primary/40 text-sm italic font-serif mb-8 text-center">View our full curated seasonal menu</p>
                <button 
                    onClick={() => navigate('/menu')} 
                    className="btn-geometric px-16 py-5 bg-primary text-white hover:bg-white hover:text-primary border border-primary transition-all shadow-xl"
                >
                    The Complete Menu
                </button>
            </div>
        </div>
      </section>
    );
};

const Experience = () => {
    const experienceRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
  
    useGSAP(() => {
      gsap.from('.exp-text', {
        scrollTrigger: {
          trigger: experienceRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1
      });
    }, { scope: experienceRef });
  
    return (
      <section id="experience" ref={experienceRef} className="py-24 px-6 md:px-[60px] bg-soft-bg border-b border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="exp-text">
              <span className="section-label-gold">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl mb-8 md:mb-10 leading-tight font-serif italic">More than food — <br className="hidden md:block"/><span className="text-accent underline decoration-black/5 underline-offset-8">An experience</span></h2>
              <p className="text-lg md:text-xl text-primary/70 leading-relaxed font-light mb-8 md:mb-10 max-w-xl">
              At Pastel Bistro, we believe that dining is an art form. Every dish is a brushstroke, every flavour a note in a symphony. We combine traditional techniques with modern elegance.
              </p>
              <button 
                  onClick={() => navigate('/story')}
                  className="btn-geometric"
              >
                  The Full Story
              </button>
          </div>
          <div className="relative mt-12 md:mt-0">
              <div className="absolute inset-0 border border-accent/20 translate-x-4 translate-y-4"></div>
              <img 
                  src="https://images.unsplash.com/photo-1768777273143-570e6c7db344?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Fine Dining Experience" 
                  className="relative z-10 w-full rounded-sm shadow-xl"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
              />
          </div>
        </div>
      </section>
    );
  };
  
const Chef = () => {
    const chefRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
  
    useGSAP(() => {
      gsap.from('.chef-img', {
        scrollTrigger: {
          trigger: chefRef.current,
          start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 1.2
      });
      gsap.from('.chef-content', {
        scrollTrigger: {
          trigger: chefRef.current,
          start: 'top 80%',
        },
        x: 50,
        opacity: 0,
        duration: 1.2
      });
    }, { scope: chefRef });
  
    return (
      <section id="chef" ref={chefRef} className="py-24 px-6 md:px-[60px] bg-white border-b border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.2fr] items-center gap-16 md:gap-24">
          <div className="chef-img relative mb-12 md:mb-0">
              <div className="absolute -inset-4 bg-pastel-sage/30 -z-10 rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=70&w=1000&auto=format&fit=crop" 
                alt="Executive Chef" 
                className="w-full rounded-sm"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
          </div>
          <div className="chef-content">
            <span className="section-label-gold">Executive Chef</span>
            <h2 className="text-4xl md:text-6xl mb-6 md:mb-8 font-serif leading-tight">Julian Vandermere</h2>
            <p className="text-base md:text-lg text-primary/70 leading-relaxed font-light mb-6 md:mb-8 max-w-lg">
              With 15 years in Michelin-starred kitchens across Paris and Tokyo, Julian brings a disciplined fusion of elegance and raw flavour to Pastel Bistro. 
            </p>
            <div className="p-6 md:p-8 border-l-2 border-accent bg-soft-bg mb-8 md:mb-10">
              <p className="text-lg text-primary/80 italic font-serif">
                  "Food should be effortless to enjoy, yet impossible to forget."
              </p>
            </div>
            <button 
                onClick={() => navigate('/gallery')}
                className="btn-geometric px-12"
            >
                Chef's Gallery
            </button>
          </div>
        </div>
      </section>
    );
  };
  
const MenuPreview = () => {
    const navigate = useNavigate();

    const menuItems = [
      { name: "Truffle Shroom Pasta", price: "₹555", desc: "Creamy mushroom sauce & truffle essence.", category: "Pasta" },
      { name: "Israeli Falafel Veg", price: "₹345", desc: "Mediterranean feast for the soul.", category: "Breakfast" },
      { name: "Lotus Stem Falafel", price: "₹495", desc: "Crispy textured small plates.", category: "Starters" },
      { name: "Blueberry Cheesecake", price: "₹349", desc: "Velvety cheesecake with wild berries.", category: "Desserts" },
    ];
  
    return (
      <section id="menu" className="py-24 px-6 md:px-[60px] bg-soft-bg border-b border-black/5">
        <div className="text-center mb-12 md:mb-20">
          <span className="section-label-gold">Seasonal Menu</span>
          <h2 className="text-4xl md:text-6xl italic font-serif">Culinary Selection</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10 max-w-5xl mx-auto">
          {menuItems.map((item, i) => (
            <div key={i} className="group flex justify-between gap-6 pb-6 border-b border-black/5 cursor-pointer">
              <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2 block">{item.category}</span>
                  <h4 className="text-lg md:text-xl font-serif group-hover:text-accent transition-colors">{item.name}</h4>
                  <p className="text-primary/50 text-xs md:text-sm font-light mt-1">{item.desc}</p>
              </div>
              <div className="text-base md:text-lg font-bold font-serif pt-4">{item.price}</div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate('/menu')} 
            className="btn-geometric px-12 bg-transparent border border-primary text-primary hover:bg-primary hover:text-white"
          >
              Explore All Dishes
          </button>
        </div>
      </section>
    );
};

const BookingSummary = () => {
    const navigate = useNavigate();
    return (
        <section className="py-24 px-6 md:px-[60px] bg-white border-b border-black/5">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <div className="bg-soft-bg p-6 md:p-12 border border-black/5 w-full relative">
                    <div className="absolute top-0 right-0 p-8 opacity-5 hidden md:block">
                        <Calendar className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                        <span className="section-label-gold text-center">Reservations</span>
                        <h2 className="text-3xl md:text-6xl text-center mb-8 md:mb-10 font-serif">Book Your Moment</h2>
                        <p className="text-center text-primary/60 mb-10 max-w-lg mx-auto leading-relaxed">
                            Experience effortless dining. Reserve your table in seconds via our automated concierge.
                        </p>
                        <div className="text-center">
                            <button onClick={() => navigate('/reserve')} className="btn-geometric px-16 py-5 text-sm tracking-[4px]">Start Reservation</button>
                        </div>
                        <p className="text-[9px] text-center mt-6 opacity-30 uppercase tracking-[2px]">INSTANT WHATSAPP CONFIRMATION</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function Home() {
    return (
        <div className="selection:bg-accent selection:text-white">
            <Hero />
            <CulinaryHighlights />
            <Experience />
            <Chef />
            <InstagramFeed />
            <MenuPreview />
            <BookingSummary />
        </div>
    );
}
