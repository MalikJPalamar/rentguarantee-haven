
import { useState, useEffect, useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { cn } from "@/lib/utils";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  upgrade: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Homeowner in Bristol',
    content: "After installing solar panels through Green Homes Compare, our electricity bills dropped by over £400 a year. The comparison process made it so easy to find the right installer. Highly recommend!",
    rating: 5,
    upgrade: 'Solar Panels',
  },
  {
    id: 2,
    name: 'James T.',
    role: 'Homeowner in Manchester',
    content: "We were hesitant about a heat pump, but the savings calculator showed us the potential. Now we're saving money and our home is more comfortable than ever. The installers were professional and efficient.",
    rating: 5,
    upgrade: 'Heat Pump',
  },
  {
    id: 3,
    name: 'Emma & David',
    role: 'Homeowners in Edinburgh',
    content: "The insulation upgrade was the best investment we've made. Our home is warmer, quieter, and our heating bills have dropped significantly. Green Homes Compare made the whole process stress-free.",
    rating: 5,
    upgrade: 'Insulation',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const goToTestimonial = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => goToTestimonial((activeIndex + 1) % testimonials.length);
  const goToPrev = () => goToTestimonial((activeIndex - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    autoPlayRef.current = setInterval(goToNext, 6000);
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [activeIndex]);

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding theme-section relative overflow-hidden py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 theme-primary-text">What Homeowners Say</h2>
          <div className="accent-line mx-auto"></div>
          <p className="mt-6 text-lg text-foreground/80 max-w-3xl mx-auto">
            Real stories from homeowners who have transformed their homes with eco upgrades.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="rounded-2xl p-8 md:p-10 bg-white shadow-lg border border-gray-200 relative">
                      <span className="inline-block px-3 py-1 bg-[var(--theme-primary-light)] rounded-full text-sm font-medium theme-primary-text mb-6">
                        {testimonial.upgrade}
                      </span>
                      <div className="absolute top-4 left-6 opacity-10">
                        <Quote size={48} className="theme-accent-text" strokeWidth={1.5} />
                      </div>
                      <p className="text-lg text-foreground mb-8 relative z-10 pt-6">{testimonial.content}</p>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} fill={i < testimonial.rating ? "currentColor" : "none"} className={cn(i < testimonial.rating ? "theme-accent-text" : "text-gray-300")} />
                        ))}
                      </div>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-[var(--theme-primary-light)] flex items-center justify-center mr-4">
                          <User className="theme-primary-text" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold theme-primary-text">{testimonial.name}</p>
                          <p className="text-sm text-foreground/70">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={goToPrev} className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white z-10 border border-gray-100"><ChevronLeft size={24} /></button>
            <button onClick={goToNext} className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white z-10 border border-gray-100"><ChevronRight size={24} /></button>
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button key={index} onClick={() => goToTestimonial(index)} className={`w-2.5 h-2.5 rounded-full transition-all ${index === activeIndex ? 'theme-accent-bg w-8' : 'bg-gray-300'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
