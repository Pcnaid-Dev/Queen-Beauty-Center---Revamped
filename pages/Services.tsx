import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/services';
import { ServiceCategory } from '../types';

export default function ServicesPage() {
  const categories: {id: ServiceCategory; label: string}[] = [
    { id: 'hair', label: 'Hair Care' },
    { id: 'makeup', label: 'Makeup' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'nails', label: 'Nails & Spa' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-4 text-[var(--text)]">Our Services</h1>
        <p className="text-[var(--muted)]">Explore our comprehensive menu of beauty treatments designed to help you look and feel your absolute best.</p>
      </div>

      <div className="space-y-20">
        {categories.map((cat) => {
          const catServices = SERVICES.filter(s => s.category === cat.id);
          if (catServices.length === 0) return null;

          return (
            <div key={cat.id} id={cat.id} className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-serif text-3xl text-[var(--orchid)]">{cat.label}</h2>
                <div className="h-[1px] bg-[var(--gold)]/30 flex-grow"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {catServices.map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all flex gap-4 md:gap-6 group"
                  >
                    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                      <img 
                        src={service.image} 
                        alt={service.nameEn} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-grow flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-[var(--text)]">{service.nameEn}</h3>
                        <span className="font-serif font-bold text-[var(--pink)] whitespace-nowrap">
                          {service.priceStart ? `${service.priceStart} JOD` : 'Ask'}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--muted)] line-clamp-2 mb-2">{service.descriptionEn}</p>
                      <p className="text-xs text-gray-400 font-arabic text-right">{service.nameAr}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}