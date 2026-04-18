import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowLeft, ArrowRight, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuCategories = [
  {
    title: "Le Matin — Breakfast",
    items: [
      { name: "Pain au Chocolat", price: "€8", desc: "Double-layered butter pastry, dark Belgian core." },
      { name: "Avocado & Truffle", price: "€18", desc: "Sourdough, shaved truffles, poached organic egg." },
      { name: "Smoothie Bowl", price: "€14", desc: "Acai, wild berries, gold-dusted granola." }
    ]
  },
  {
    title: "L'Entrée — Starters",
    items: [
      { name: "Burrata Bloom", price: "€22", desc: "Honey-glazed figs, balsamic pearls, micro-basil." },
      { name: "Lobster Bisque", price: "€24", desc: "Cognac-infused velvet soup, lobster chunks." },
      { name: "Beef Carpaccio", price: "€26", desc: "Wagyu thin slices, caper dust, parmesan cloud." }
    ]
  },
  {
    title: "Le Plat — Mains",
    items: [
      { name: "Saffron Risotto", price: "€34", desc: "Arborio rice, gold leaf, 24-month aged parmesan." },
      { name: "Velvet Salmon", price: "€38", desc: "Maple glaze, asparagus ribbons, lemon foam." },
      { name: "Duck Confit", price: "€42", desc: "Slow-rendered leg, cherry reduction, parsnip puree." },
      { name: "Truffle Linguine", price: "€36", desc: "House-made pasta, black truffle sauce, chives." }
    ]
  },
  {
    title: "Le Dessert — Sweets",
    items: [
      { name: "Golden Lava", price: "€18", desc: "Warm citrus heart, vanilla bean glace, gold leaf." },
      { name: "Matcha Tiramisu", price: "€16", desc: "Ceremonial grade matcha, mascarpone, ladyfingers." },
      { name: "Parisian Soufflé", price: "€20", desc: "Grand Marnier, orange zest, airy perfection." }
    ]
  }
];

export default function MenuPage() {
    const pageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.menu-header', {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
        
        gsap.from('.category-block', {
            opacity: 0,
            y: 40,
            stagger: 0.2,
            duration: 1,
            ease: 'expo.out',
            scrollTrigger: {
                trigger: '.menu-container',
                start: 'top 80%',
            }
        });
    }, { scope: pageRef });

    return (
        <div ref={pageRef} className="min-h-screen bg-soft-bg pt-20 pb-20">
            <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
                {/* Header */}
                <div className="menu-header mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="max-w-2xl">
                        <Link to="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary/50 hover:text-accent transition-colors mb-6 group">
                            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back to Essence
                        </Link>
                        <span className="section-label-gold">Full Selection</span>
                        <h1 className="text-5xl md:text-8xl font-serif italic mb-6">Culinary Mastery</h1>
                        <p className="text-lg md:text-xl text-primary/60 leading-relaxed font-light">
                            Crafted by Executive Chef Julian Vandermere. A journey through seasonal textures and avant-garde techniques.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Link to="/reserve" className="btn-geometric">Book Your Table</Link>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="menu-container grid md:grid-cols-2 gap-x-16 gap-y-20">
                    {menuCategories.map((cat, i) => (
                        <div key={i} className="category-block">
                            <h2 className="text-2xl md:text-3xl font-serif border-b border-black/5 pb-4 mb-8 flex justify-between items-center group cursor-default">
                                {cat.title}
                                <Utensils className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                            </h2>
                            <div className="space-y-10">
                                {cat.items.map((item, idx) => (
                                    <div key={idx} className="group relative">
                                        <div className="flex justify-between items-start gap-4 mb-2">
                                            <h4 className="text-lg md:text-xl font-serif group-hover:text-accent transition-colors">{item.name}</h4>
                                            <span className="text-lg font-bold font-serif">{item.price}</span>
                                        </div>
                                        <p className="text-primary/50 text-sm md:text-base font-light pr-12 line-clamp-2">{item.desc}</p>
                                        
                                        {/* Hover line effect */}
                                        <div className="absolute -left-4 top-0 w-[2px] h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Footer */}
                <div className="mt-24 p-12 bg-white border border-black/5 rounded-sm flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="max-w-md text-center md:text-left">
                        <h4 className="text-xl font-serif mb-4 italic">Dietary Requirements?</h4>
                        <p className="text-sm text-primary/50 leading-relaxed">
                            Our menu evolves with the seasons. Please inform your server about any allergies or specific dietary needs before ordering.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 w-full md:w-auto">
                        <Link to="/reserve" className="btn-geometric w-full py-4 px-12 text-center group">
                            Book Experience <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <p className="text-[10px] text-center opacity-40 tracking-[2px]">ESTABLISHED IN PARIS — 1994</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
