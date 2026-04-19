import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowLeft, ArrowRight, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuCategories = [
  {
    title: "Le Matin — Breakfast",
    items: [
      { name: "Avocado Toast", price: "₹455", desc: "Fresh avocado on crusty sourdough with signature seasoning." },
      { name: "Parsi Style Egg Akuri Brioche", price: "₹299", desc: "Spiced scrambled eggs served on buttery brioche." },
      { name: "Israeli Falafel Breakfast Veg", price: "₹345", desc: "Traditional falafel with mediterranean accompaniments." },
      { name: "Korean Mushroom Omelet", price: "₹325", desc: "Fluffy eggs with earthy mushrooms and Korean spices." },
      { name: "Nashiville Breakfast", price: "₹375", desc: "Bold and spicy morning classic." }
    ]
  },
  {
    title: "L'Entrée — Small Plates",
    items: [
      { name: "Lotus Stem Falafel", price: "₹495", desc: "Unique twist on falafel using crisp lotus stem." },
      { name: "Edamame Ricotta Kebab", price: "₹575", desc: "Silky ricotta and edamame fusion kebabs." },
      { name: "Adana Kebab", price: "₹525", desc: "Spiced minced meat grilled to perfection." },
      { name: "Korean Cottage Cheese Poppers", price: "₹525", desc: "Crunchy poppers with a zesty Korean glaze." },
      { name: "Pesto Dahi Kebab", price: "₹465", desc: "Traditional dahi kebabs infused with fresh basil pesto." }
    ]
  },
  {
    title: "La Pasta — Italian Selection",
    items: [
      { name: "Truffle Shroom Pasta", price: "₹555", desc: "Creamy mushroom sauce with a luxurious truffle finish." },
      { name: "Butter Chicken Pasta", price: "₹595", desc: "Italian pasta meeting the rich flavours of the East." },
      { name: "Pesto Pasta", price: "₹495", desc: "Freshly pounded basil and pine nut sauce." },
      { name: "Pink Sauce Pasta", price: "₹455", desc: "Harmonious blend of tangy red and creamy white sauces." }
    ]
  },
  {
    title: "Le Plat — Signature Mains",
    items: [
      { name: "Crispy Portuguese Chicken", price: "₹625", desc: "Golden fried chicken with authentic Portuguese spices." },
      { name: "Grilled Fish Lemon Butter", price: "₹685", desc: "Delicate fish fillet with a zesty butter emulsion." },
      { name: "Grilled Forest Chicken", price: "₹625", desc: "Herbed chicken served with earthy woodland mushrooms." },
      { name: "Fish & Chips", price: "₹695", desc: "Classic English staple with our signature house dip." }
    ]
  },
  {
    title: "Les Pizzas — Stone Hearth",
    items: [
      { name: "Chicken Makhani Pizza", price: "₹575", desc: "Creamy makhani base with succulent chicken tandoori." },
      { name: "Pulled BBQ Chicken Pizza", price: "₹555", desc: "Slow-cooked BBQ chicken with smoky accents." },
      { name: "Chargrilled Veggie", price: "₹455", desc: "Seasonal garden vegetables with house-made marinara." },
      { name: "Pesto Pepper Pizza", price: "₹475", desc: "Vibrant basil pesto base with sweet bell peppers." }
    ]
  },
  {
    title: "Les Boissons — Mocktails & Coffee",
    items: [
      { name: "Berry Basil Fizz", price: "₹375", desc: "Vibrant berry blend with fresh aromatic basil." },
      { name: "Blueberry Lavender Fizz", price: "₹375", desc: "Floral lavender notes with tart blueberry sparklers." },
      { name: "Spanish Ice Latte", price: "₹279", desc: "Sweet and creamy iced coffee with a Spanish flair." },
      { name: "Honey Cinnamon Latte", price: "₹245", desc: "Warm and comforting brew with natural sweetness." }
    ]
  },
  {
    title: "Le Dessert — Sweets",
    items: [
      { name: "Blueberry Cheesecake", price: "₹349", desc: "Velvety cheesecake topped with wild blueberry compote." },
      { name: "Biscoff Cheesecake", price: "₹379", desc: "Rich caramelised biscuit flavour on a buttery base." },
      { name: "Chef Special Pannacotta", price: "₹225", desc: "Silky cooked cream with seasonal fruit reduction." },
      { name: "Choco Lava", price: "₹175", desc: "Oozing warm chocolate heart inside a moist cake." }
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
