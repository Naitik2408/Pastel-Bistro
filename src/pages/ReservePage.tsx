import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowLeft, ArrowRight, Users, Calendar as CalendarIcon, Clock, Sofa, MapPin, Wind, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const guestOptions = ["1-2", "3-4", "5-6", "7+"];
const timeSlots = ["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];
const preferences = [
    { id: 'Indoor', icon: MapPin, label: 'Indoor' },
    { id: 'Outdoor', icon: Wind, label: 'Outdoor' },
    { id: 'Window', icon: Layout, label: 'Window' },
    { id: 'Sofa', icon: Sofa, label: 'Sofa' }
];

export default function ReservePage() {
    const [step, setStep] = useState(1);
    const [selections, setSelections] = useState({
        guests: '',
        date: '',
        time: '',
        preference: 'Indoor'
    });
    const [isRedirecting, setIsRedirecting] = useState(false);
    
    const containerRef = useRef<HTMLDivElement>(null);
    const stepRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.reserve-header', {
            y: -30,
            opacity: 0,
            duration: 1,
            ease: 'expo.out'
        });
    }, { scope: containerRef });

    useGSAP(() => {
        // Step transition animation
        gsap.fromTo(stepRef.current, 
            { x: 20, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
        );
    }, { dependencies: [step], scope: containerRef });

    const handleReserve = () => {
        setIsRedirecting(true);
        
        const message = `Hi, I’d like to reserve a table at Pastel Bistro.

• Guests: ${selections.guests}
• Date: ${selections.date}
• Time: ${selections.time}
• Preference: ${selections.preference}

Please confirm availability.`;

        const waUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
        
        setTimeout(() => {
            window.location.href = waUrl;
        }, 2000);
    };

    const isStepComplete = () => {
        if (step === 1) return selections.guests !== '';
        if (step === 2) return selections.date !== '';
        if (step === 3) return selections.time !== '';
        return true;
    };

    if (isRedirecting) {
        return (
            <div className="min-h-screen bg-soft-bg flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mb-8"></div>
                <h2 className="text-2xl font-serif italic mb-2 text-primary">Redirecting to WhatsApp</h2>
                <p className="text-primary/50 uppercase tracking-widest text-[10px]">Confirming your reservation details...</p>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="min-h-screen bg-soft-bg pt-20 pb-20">
            <div className="max-w-3xl mx-auto px-6">
                {/* Header */}
                <div className="reserve-header mb-12 text-center">
                    <Link to="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary/50 hover:text-accent transition-colors mb-6 group">
                        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>
                    <span className="section-label-gold">Concierge</span>
                    <h1 className="text-4xl md:text-6xl font-serif italic">The Art of Booking</h1>
                    
                    {/* Progress Bar */}
                    <div className="flex justify-center gap-2 mt-8">
                        {[1, 2, 3, 4].map((s) => (
                            <div 
                                key={s} 
                                className={cn(
                                    "h-1 transition-all duration-500 rounded-full",
                                    step >= s ? "bg-accent w-8" : "bg-black/5 w-4"
                                )}
                            />
                        ))}
                    </div>
                </div>

                {/* Step Container */}
                <div className="bg-white p-8 md:p-12 border border-black/5 shadow-sm rounded-sm min-h-[400px] flex flex-col">
                    <div ref={stepRef} className="flex-1">
                        {step === 1 && (
                            <div className="space-y-8">
                                <div className="text-center mb-10">
                                    <Users className="w-8 h-8 mx-auto mb-4 text-accent/50" />
                                    <h3 className="text-xl md:text-2xl font-serif">How many guests?</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {guestOptions.map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => setSelections({ ...selections, guests: opt })}
                                            className={cn(
                                                "py-6 border transition-all duration-300 group hover:scale-[1.02]",
                                                selections.guests === opt 
                                                    ? "bg-primary text-white border-primary" 
                                                    : "bg-soft-bg border-black/5 text-primary hover:border-accent"
                                            )}
                                        >
                                            <span className="text-lg font-bold tracking-widest">{opt}</span>
                                            {selections.guests === opt && <div className="text-[10px] mt-1 opacity-50">Selected</div>}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-8">
                                <div className="text-center mb-10">
                                    <CalendarIcon className="w-8 h-8 mx-auto mb-4 text-accent/50" />
                                    <h3 className="text-xl md:text-2xl font-serif">Choose a date</h3>
                                </div>
                                <div className="max-w-md mx-auto">
                                    <input 
                                        type="date" 
                                        min={new Date().toISOString().split('T')[0]}
                                        value={selections.date}
                                        onChange={(e) => setSelections({ ...selections, date: e.target.value })}
                                        className="w-full bg-soft-bg border border-black/5 p-6 text-xl font-serif focus:outline-none focus:border-accent text-center appearance-none"
                                    />
                                    <p className="text-center text-[10px] mt-4 opacity-40 uppercase tracking-widest">Select your arrival date</p>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-8">
                                <div className="text-center mb-10">
                                    <Clock className="w-8 h-8 mx-auto mb-4 text-accent/50" />
                                    <h3 className="text-xl md:text-2xl font-serif">Select a time</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelections({ ...selections, time })}
                                            className={cn(
                                                "py-6 border transition-all duration-300 hover:scale-[1.02]",
                                                selections.time === time 
                                                    ? "bg-primary text-white border-primary" 
                                                    : "bg-soft-bg border-black/5 text-primary hover:border-accent"
                                            )}
                                        >
                                            <span className="text-lg font-bold tracking-widest">{time}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="space-y-8">
                                <div className="text-center mb-10">
                                    <Sofa className="w-8 h-8 mx-auto mb-4 text-accent/50" />
                                    <h3 className="text-xl md:text-2xl font-serif">Seating Preference</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {preferences.map((pref) => (
                                        <button
                                            key={pref.id}
                                            onClick={() => setSelections({ ...selections, preference: pref.id })}
                                            className={cn(
                                                "py-6 border flex flex-col items-center gap-3 transition-all duration-300 hover:scale-[1.02]",
                                                selections.preference === pref.id 
                                                    ? "bg-primary text-white border-primary" 
                                                    : "bg-soft-bg border-black/5 text-primary hover:border-accent"
                                            )}
                                        >
                                            <pref.icon className={cn("w-6 h-6", selections.preference === pref.id ? "text-accent" : "text-primary/30")} />
                                            <span className="text-sm font-medium tracking-widest uppercase">{pref.label}</span>
                                        </button>
                                    ))}
                                </div>
                                <p className="text-[9px] text-center opacity-40 uppercase tracking-widest mt-8">Preference is subject to availability</p>
                            </div>
                        )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 mt-12 pt-8 border-t border-black/5">
                        {step > 1 && (
                            <button 
                                onClick={() => setStep(step - 1)}
                                className="flex-1 py-4 border border-black/10 text-primary/50 uppercase tracking-widest text-[10px] hover:bg-black/5 transition-colors"
                            >
                                Back
                            </button>
                        )}
                        {step < 4 ? (
                            <button 
                                disabled={!isStepComplete()}
                                onClick={() => setStep(step + 1)}
                                className={cn(
                                    "flex-[2] py-4 uppercase tracking-[4px] text-sm font-bold transition-all duration-500",
                                    isStepComplete() 
                                        ? "bg-primary text-white hover:bg-black" 
                                        : "bg-black/5 text-primary/20 cursor-not-allowed"
                                )}
                            >
                                Continue <ArrowRight className="inline-block w-4 h-4 ml-2" />
                            </button>
                        ) : (
                            <button 
                                onClick={handleReserve}
                                className="flex-[2] bg-accent text-white py-4 uppercase tracking-[4px] text-sm font-bold transition-all duration-500 hover:bg-accent/80"
                            >
                                Reserve Now
                            </button>
                        )}
                    </div>
                    <p className="text-[9px] text-center mt-6 text-primary/30 uppercase tracking-[2px]">
                        Will be confirmed via WhatsApp concierge
                    </p>
                </div>
            </div>
        </div>
    );
}
