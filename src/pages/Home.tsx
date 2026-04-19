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
                      src="https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Bistro Atmosphere" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="eager"
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
                      { title: "Parsi Style Egg Akuri", desc: "Spiced scrambled eggs, brioche.", color: "#E6DED1" },
                      { title: "Israeli Falafel Veg", desc: "Traditional falafel, pita pockets.", color: "#E2E7E1" },
                      { title: "Korean Mushroom Omelet", desc: "Earthy mushrooms, Korean zest.", color: "#F1E5E5" }
                  ].map((dish, i) => (
                      <div key={i} className="flex gap-4 items-center pb-6 border-b border-black/5 last:border-0">
                          <div className="w-[70px] h-[70px] rounded-full flex-shrink-0" style={{ backgroundColor: dish.color }}></div>
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
  
const DishesScroll = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
  
    const dishes = [
      { title: "Creamy Alfredo Pasta", desc: "Hand-rolled fettuccine in velvet truffle sauce.", img: "https://images.unsplash.com/photo-1761168941826-7efda859bdae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { title: "Lotus Stem Falafel", desc: "Unique twist on falafel using crisp lotus stem.", img: "https://picsum.photos/seed/falafel/800/1000" },
      { title: "Crispy Portuguese Chicken", desc: "Golden fried chicken with authentic Portuguese spices.", img: "https://picsum.photos/seed/chicken/800/1000" },
      { title: "Avocado Matcha Smoothie", desc: "A silky fusion of earth and cream.", img: "https://picsum.photos/seed/smoothie/800/1000" },
    ];
  
    useGSAP(() => {
      const panels = gsap.utils.toArray('.dish-panel');
      
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + containerRef.current?.offsetWidth,
        }
      });
  
      panels.forEach((panel: any) => {
        gsap.from(panel.querySelector('.dish-content'), {
          opacity: 0,
          scale: 0.95,
          duration: 2,
          scrollTrigger: {
            trigger: panel,
            start: "left center",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, { scope: sectionRef });
  
    return (
      <section ref={sectionRef} className="overflow-hidden bg-primary py-12 md:py-20 border-y border-white/5">
        <div ref={containerRef} className="flex h-[60vh] md:h-[80vh] w-[400vw]">
          {dishes.map((dish, i) => (
            <div key={i} className="dish-panel w-screen h-full flex items-center justify-center px-4 md:px-24">
              <div className="dish-content grid md:grid-cols-2 bg-white rounded-sm overflow-hidden border border-black/5 max-w-6xl w-full shadow-lg mx-2 md:mx-0 h-full md:h-auto max-h-[95%] md:max-h-none">
                <div className="h-[40%] md:h-full overflow-hidden">
                  <img 
                    src={dish.img} 
                    alt={dish.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 md:p-16 flex flex-col justify-center text-primary overflow-hidden">
                  <span className="section-label-gold text-[9px] md:text-[10px] mb-1 md:mb-2">Dish 0{i + 1}</span>
                  <h3 className="text-xl md:text-5xl mb-2 md:mb-6 font-serif leading-tight">{dish.title}</h3>
                  <p className="text-primary/60 text-xs md:text-xl font-light leading-relaxed max-w-md line-clamp-2 md:line-clamp-none">{dish.desc}</p>
                  <div className="mt-3 md:mt-8">
                      <button 
                        onClick={() => navigate('/menu')} 
                        className="btn-geometric py-2 md:py-3 px-4 md:px-6 text-[9px] md:text-[11px]"
                      >
                        Learn More
                      </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

const Experience = () => {
    const experienceRef = useRef<HTMLDivElement>(null);
  
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
              <button className="btn-geometric">The Full Story</button>
          </div>
          <div className="relative mt-12 md:mt-0">
              <div className="absolute inset-0 border border-accent/20 translate-x-4 translate-y-4"></div>
              <img 
                  src="https://picsum.photos/seed/bistro-interiors/800/1000" 
                  alt="Atmosphere" 
                  className="relative z-10 w-full rounded-sm shadow-xl"
                  referrerPolicy="no-referrer"
              />
          </div>
        </div>
      </section>
    );
  };
  
const Chef = () => {
    const chefRef = useRef<HTMLDivElement>(null);
  
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
                src="https://picsum.photos/seed/chef-portrait/800/1000" 
                alt="Executive Chef" 
                className="w-full rounded-sm"
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
            <button className="btn-geometric px-12">Chef's Gallery</button>
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
            <DishesScroll />
            <Experience />
            <Chef />
            <InstagramFeed />
            <MenuPreview />
            <BookingSummary />
        </div>
    );
}
