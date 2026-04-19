import { useState, useEffect } from 'react';
import { Instagram, Play, Heart, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InstagramPost {
    id: number;
    type: 'image' | 'reel';
    url: string; // Image URL for preview
    originalUrl: string; // Actual Instagram link
    aspectRatio: string;
    likes: string;
    comments: string;
}

const mockPosts: InstagramPost[] = [
    { 
        id: 1, 
        type: 'image', 
        url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80', 
        originalUrl: 'https://www.instagram.com/p/DXO_NT3E6W7/',
        aspectRatio: 'aspect-[3/4]', 
        likes: '243', 
        comments: '12' 
    },
    { 
        id: 2, 
        type: 'reel', 
        url: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80', 
        originalUrl: 'https://www.instagram.com/p/DXJzMG4E8Ge/',
        aspectRatio: 'aspect-square', 
        likes: '1.2k', 
        comments: '45' 
    },
    { 
        id: 3, 
        type: 'image', 
        url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80', 
        originalUrl: 'https://www.instagram.com/p/DXEm8ZGk9Bi/',
        aspectRatio: 'aspect-[9/16]', 
        likes: '890', 
        comments: '28' 
    },
    { 
        id: 4, 
        type: 'reel', 
        url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80', 
        originalUrl: 'https://www.instagram.com/p/DW88GixE1Dx/',
        aspectRatio: 'aspect-[3/4]', 
        likes: '3.4k', 
        comments: '112' 
    },
    { 
        id: 5, 
        type: 'image', 
        url: 'https://images.unsplash.com/photo-1521017432531-fbd92d744264?auto=format&fit=crop&q=80', 
        originalUrl: 'https://www.instagram.com/p/DW3vJRsGWSK/',
        aspectRatio: 'aspect-square', 
        likes: '567', 
        comments: '19' 
    },
    { 
        id: 6, 
        type: 'image', 
        url: 'https://images.unsplash.com/photo-1466633393038-c30227530671?auto=format&fit=crop&q=80', 
        originalUrl: 'https://www.instagram.com/p/DWtfeCeE5Z_/',
        aspectRatio: 'aspect-[3/2]', 
        likes: '312', 
        comments: '8' 
    },
    { 
        id: 7, 
        type: 'image', 
        url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80', 
        originalUrl: 'https://www.instagram.com/p/DWoUoVek3O9/',
        aspectRatio: 'aspect-[9/16]', 
        likes: '2.1k', 
        comments: '67' 
    },
    { 
        id: 8, 
        type: 'reel', 
        url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80', 
        originalUrl: 'https://www.instagram.com/p/DVyPOdykRrA/',
        aspectRatio: 'aspect-[3/4]', 
        likes: '1.5k', 
        comments: '34' 
    },
    { 
        id: 9, 
        type: 'image', 
        url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80', 
        originalUrl: 'https://www.instagram.com/p/DVvtm1yk9TC/',
        aspectRatio: 'aspect-square', 
        likes: '723', 
        comments: '25' 
    },
];

export const InstagramFeed = () => {
    const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="py-24 px-6 md:px-[60px] bg-soft-bg relative">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.01] -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="section-label-gold">Guest Moments</span>
                        <h2 className="text-4xl md:text-6xl font-serif italic mb-4">From Our Instagram</h2>
                        <p className="text-primary/60 max-w-md font-sans leading-relaxed">
                            A window into our daily craft, captured through the eyes of our community. 
                            Tag us <span className="text-accent font-medium">#PastelBistro</span> to be featured.
                        </p>
                    </div>
                    <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn-geometric px-10 flex items-center gap-3 group whitespace-nowrap"
                    >
                        <Instagram className="w-4 h-4 transition-transform group-hover:rotate-12" />
                        <span>Visit Profile</span>
                    </a>
                </div>

                {/* Pinterest Style Grid */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                    {isLoading ? (
                        Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className={`bg-black/5 rounded-sm border border-black/5 ${i % 3 === 0 ? 'h-80' : 'h-64'}`} />
                        ))
                    ) : (
                        mockPosts.map((post) => (
                            <div 
                                key={post.id} 
                                className="insta-card break-inside-avoid group relative overflow-hidden bg-white cursor-pointer rounded-sm border border-black/5 shadow-sm transition-all duration-300 hover:shadow-lg"
                                onClick={() => setSelectedPost(post)}
                            >
                                <div className={`${post.aspectRatio} relative overflow-hidden`}>
                                    <img 
                                        src={post.url} 
                                        alt="Pastel Bistro Instagram" 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                        referrerPolicy="no-referrer"
                                    />
                                    
                                    {/* Sublte Overlay */}
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Reels Icon */}
                                {post.type === 'reel' && (
                                    <div className="absolute top-4 right-4 text-white drop-shadow-md z-10">
                                        <Play className="w-5 h-5 fill-current" />
                                    </div>
                                )}

                                {/* Hover Info */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                    <div className="flex gap-6 text-white text-sm font-medium">
                                        <div className="flex items-center gap-2">
                                            <Heart className="w-5 h-5 fill-white" />
                                            <span>{post.likes}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MessageCircle className="w-5 h-5 fill-white" />
                                            <span>{post.comments}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="mt-16 text-center">
                    <button 
                        className="btn-geometric px-12 py-4 tracking-[4px] border border-primary hover:bg-white hover:text-primary transition-colors"
                        onClick={() => window.open('https://instagram.com', '_blank')}
                    >
                        View More on Instagram
                    </button>
                </div>
            </div>

            {/* Modal Preview */}
            <AnimatePresence>
                {selectedPost && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPost(null)}
                            className="absolute inset-0 bg-primary/95 backdrop-blur-sm"
                        />
                        
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative w-full max-w-4xl bg-white rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl z-10"
                        >
                            <button 
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors md:bg-transparent md:text-primary md:hover:bg-primary/5"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Image Container */}
                            <div className="w-full md:w-3/5 bg-soft-bg relative">
                                <img 
                                    src={selectedPost.url} 
                                    alt="Preview" 
                                    className="w-full h-full object-contain max-h-[70vh] md:max-h-none"
                                    referrerPolicy="no-referrer"
                                />
                                {selectedPost.type === 'reel' && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                                            <Play className="w-8 h-8 text-white fill-white" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar Info */}
                            <div className="w-full md:w-2/5 p-8 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-8 pb-8 border-b border-black/5">
                                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-serif text-xl italic">
                                            PB
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-sm tracking-wide">pastel_bistro</h3>
                                            <p className="text-[10px] text-primary/40 uppercase tracking-[1px]">Paris, France</p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-primary/70 text-sm leading-relaxed mb-6 font-sans">
                                        Indulge in our freshly made {selectedPost.id % 2 === 0 ? 'signature desserts' : 'house classics'}. 
                                        Every detail is crafted with passion to bring you the elegance you deserve. ✨
                                        <br /><br />
                                        <span className="text-accent cursor-pointer">#PastelBistro #ParisEats #AestheticCafe #LuxuryDining</span>
                                    </p>

                                    <div className="flex gap-4 items-center">
                                        <Heart className="w-5 h-5 text-primary/40 hover:text-red-500 cursor-pointer transition-colors" />
                                        <MessageCircle className="w-5 h-5 text-primary/40 hover:text-accent cursor-pointer transition-colors" />
                                        <Instagram className="w-5 h-5 text-primary/40 hover:text-accent cursor-pointer transition-colors" />
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-black/5">
                                    <button 
                                        className="w-full py-4 bg-primary text-white text-[11px] uppercase tracking-[2px] font-bold hover:bg-primary/90 transition-all"
                                        onClick={() => window.open(selectedPost.originalUrl, '_blank')}
                                    >
                                        View on Instagram
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

