import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function StoryPage() {
    const navigate = useNavigate();

    return (
        <main className="pt-32 pb-24 px-6 md:px-[60px] bg-white min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <button 
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-accent font-bold uppercase tracking-[2px] text-xs mb-12 hover:gap-4 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Home</span>
                    </button>

                <span className="section-label-gold">Our Philosophy</span>
                <h1 className="text-4xl md:text-7xl font-serif italic mb-12 leading-tight">The Full Story <br/><span className="text-accent underline decoration-black/5 underline-offset-8 font-serif">of Pastel Bistro</span></h1>
                
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div className="aspect-[4/5] bg-muted overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1613870112860-53f75650c6c3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="The beginning" 
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-serif mb-6 italic">A Legacy Since 1994</h2>
                        <p className="text-primary/70 leading-relaxed mb-6 font-light">
                            Born in the heartbeat of Jalandhar, Pastel Bistro began as a small vision: to create a space where the elegance of traditional culinary arts meets the vibrancy of modern expression.
                        </p>
                        <p className="text-primary/70 leading-relaxed font-light">
                            Over three decades, we have evolved from a local gem into a sanctuary for food lovers. Our journey is defined by a relentless pursuit of perfection in every grain, every spice, and every moment shared across our tables.
                        </p>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none text-primary/70 font-light leading-relaxed space-y-8">
                    <p>
                        At Pastel Bistro, we believe that dining is more than just sustenance; it is a brushstroke on the canvas of daily life. Our philosophy centers on "The Art of Slow Living" — an invitation to disconnect from the chaos and reconnect with the simple joys of a perfectly brewed coffee or a meticulously crafted meal.
                    </p>
                    <div className="bg-soft-bg p-8 md:p-12 border-l-4 border-accent my-12 italic font-serif text-2xl text-primary/80">
                        "We don't just serve food; we serve memories, plated with elegance and seasoned with passion."
                    </div>
                    <p>
                        Our ingredients are sourced with a conscience, prioritizing seasonal mastery and regional craftsmanship. Whether it's our signature sourdough or our internationally inspired dishes, everything carries the "Pastel" mark of authenticity.
                    </p>
                </div>

                <div className="mt-20 pt-12 border-t border-black/5 mb-16">
                    <h3 className="text-2xl font-serif mb-8 italic">Our Culinary Journey</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="aspect-square bg-muted overflow-hidden rounded-sm">
                            <img 
                                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=75&w=800&auto=format&fit=crop" 
                                alt="Culinary Excellence" 
                                className="w-full h-full object-cover"
                                loading="lazy"
                                decoding="async"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="aspect-square bg-muted overflow-hidden rounded-sm">
                            <img 
                                src="https://images.unsplash.com/photo-1497644083578-611b798c60f3?q=75&w=800&auto=format&fit=crop" 
                                alt="Fresh Ingredients" 
                                className="w-full h-full object-cover"
                                loading="lazy"
                                decoding="async"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="aspect-square bg-muted overflow-hidden rounded-sm">
                            <img 
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=75&w=800&auto=format&fit=crop" 
                                alt="Kitchen Craft" 
                                className="w-full h-full object-cover"
                                loading="lazy"
                                decoding="async"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-black/5">
                    <h3 className="text-2xl font-serif mb-8 italic">Cultivating Community</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <span className="text-accent font-bold text-3xl mb-2 block">1994</span>
                            <p className="text-xs uppercase tracking-[1px] text-primary/40">The Foundation</p>
                        </div>
                        <div>
                            <span className="text-accent font-bold text-3xl mb-2 block">50k+</span>
                            <p className="text-xs uppercase tracking-[1px] text-primary/40">Happy Guests</p>
                        </div>
                        <div>
                            <span className="text-accent font-bold text-3xl mb-2 block">30+</span>
                            <p className="text-xs uppercase tracking-[1px] text-primary/40">Signature Dishes</p>
                        </div>
                    </div>
                </div>
                </div>
            </main>
    );
}
