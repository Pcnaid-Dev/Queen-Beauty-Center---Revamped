import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop" 
            alt="Salon Ambience" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--bg)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full border border-[var(--gold)] text-[var(--gold)] text-xs tracking-widest uppercase mb-6 backdrop-blur-sm bg-black/20">
              Welcome to Queen Hair Beauty Center
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
              Unleash Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold)] via-[var(--pink2)] to-[var(--gold)]">Inner Queen</span>
            </h1>
            <p className="font-light text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-arabic">
              اكتشفي جمالك الحقيقي في صالون بيوتي هاوس
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/booking" 
                className="w-full sm:w-auto px-8 py-4 bg-[var(--pink)] hover:bg-[var(--orchid)] text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-[var(--glow)]"
              >
                Book Appointment
              </Link>
              <Link 
                to="/ai-studio" 
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white rounded-full font-medium transition-all flex items-center justify-center gap-2 group"
              >
                <Sparkles size={18} className="text-[var(--gold)]" />
                <span>Try AI Studio</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Expert Styling", desc: "Professional hair care tailored to your unique style.", icon: "💇‍♀️" },
            { title: "Luxury Makeup", desc: "Premium products for a radiant, long-lasting look.", icon: "💄" },
            { title: "Bridal Packages", desc: "Complete pampering for your special day.", icon: "👰" },
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[var(--surface)] p-8 rounded-2xl shadow-[var(--shadowSoft)] border border-white/50 hover:border-[var(--pink)]/30 transition-colors group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{feature.icon}</div>
              <h3 className="font-serif text-xl font-bold mb-2 text-[var(--text)]">{feature.title}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="container mx-auto px-4">
        <div className="rounded-3xl bg-[var(--orchid)] overflow-hidden relative text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--pink)] blur-[100px] opacity-40 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--gold)] blur-[100px] opacity-20 rounded-full"></div>
          
          <div className="relative z-10 max-w-xl">
            <span className="text-[var(--gold)] font-bold tracking-wider text-sm uppercase mb-2 block">Special Offer</span>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Protein & Brazilian Treatment</h2>
            <p className="text-white/80 mb-6">Revitalize your hair with our premium treatments. Get 20% off your first session when you book online.</p>
            <div className="flex items-center gap-2 text-sm text-[var(--gold)]">
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <span className="text-white ml-2">Loved by 500+ clients</span>
            </div>
          </div>
          
          <div className="relative z-10">
             <Link 
                to="/services" 
                className="px-8 py-3 bg-white text-[var(--orchid)] hover:bg-[var(--pink)] hover:text-white rounded-full font-bold transition-colors"
              >
                View Services
              </Link>
          </div>
        </div>
      </section>

    </div>
  );
}