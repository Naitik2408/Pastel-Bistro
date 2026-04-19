import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function GalleryPage() {
    const navigate = useNavigate();

    const galleryImages = [
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=70&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=70&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497644083578-611b798c60f3?q=70&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=70&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=70&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=70&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=70&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=70&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=70&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1624878359580-4d79cfc1e6b2?q=70&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1666770002650-053dd70866af?q=70&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=70&w=800&auto=format&fit=crop"
    ];

    return (
        <>
            <main className="pt-32 pb-24 px-6 md:px-[60px] bg-soft-bg min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <button 
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-accent font-bold uppercase tracking-[2px] text-xs mb-12 hover:gap-4 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                    </button>

                    <div className="mb-16">
                        <span className="section-label-gold">Visual Journey</span>
                        <h1 className="text-4xl md:text-7xl font-serif italic leading-tight">Chef's Gallery</h1>
                        <p className="text-primary/60 max-w-md mt-6 font-light leading-relaxed">
                            A curated collection of our finest culinary creations and the soul of our kitchen.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                        {galleryImages.map((src, i) => (
                            <div key={i} className="group relative aspect-square overflow-hidden bg-white rounded-sm">
                                <img 
                                    src={src} 
                                    alt={`Gallery Item ${i + 1}`} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
