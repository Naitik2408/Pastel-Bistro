export const WHATSAPP_NUMBER = '919876543210';

export default function Footer() {
    return (
        <footer className="py-16 px-6 md:px-[60px] bg-primary text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="flex flex-col items-start">
                        <h3 className="text-2xl font-serif font-bold italic text-white mb-6">Pastel Bistro</h3>
                        <p className="text-white/60 text-sm leading-relaxed font-light">
                            Where elegance meets flavours. A culinary sanctuary since 1994.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-serif text-lg mb-6 italic">Navigate</h4>
                        <ul className="space-y-3 text-sm text-white/70 font-light">
                            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="/#menu" className="hover:text-white transition-colors">Menu</a></li>
                            <li><a href="/#chef" className="hover:text-white transition-colors">The Chef</a></li>
                            <li><a href="/story" className="hover:text-white transition-colors">Our Story</a></li>
                            <li><a href="/gallery" className="hover:text-white transition-colors">Gallery</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-serif text-lg mb-6 italic">Connect</h4>
                        <p className="text-white/70 text-sm font-light mb-4">
                            <span className="block">Avenue Montaigne, Paris</span>
                            <span className="block mt-2">@pastelbistro</span>
                            <span className="block mt-2">WhatsApp: +91 98765 43210</span>
                        </p>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-white/50 uppercase tracking-[2px]">
                    <span>© 2024 Pastel Bistro. All rights reserved.</span>
                    <span className="mt-4 md:mt-0">Crafted with elegance and passion</span>
                </div>
            </div>
        </footer>
    );
}
