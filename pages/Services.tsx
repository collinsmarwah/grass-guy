
import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-xs font-black uppercase tracking-widest rounded-full mb-6">
            Everything Your Lawn Needs
          </span>
          <h1 className="text-5xl sm:text-7xl font-black text-text-main dark:text-white leading-[0.9] tracking-tighter italic uppercase">
            Professional <br /> <span className="text-primary not-italic">Maintenance</span> <br /> Tier List.
          </h1>
          <p className="text-xl text-text-muted dark:text-gray-400 font-medium mt-10 leading-relaxed">
            From routine cuts to complete soil rehabilitation, we offer a specialized range of services to keep your property looking pristine and performing at its peak.
          </p>
        </div>

        <div className="space-y-32">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full relative">
                 <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                 <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                    <img src={service.imageUrl} alt={service.title} className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" />
                 </div>
              </div>
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                  </div>
                  <h2 className="text-4xl font-black italic uppercase tracking-tighter dark:text-white">{service.title}</h2>
                </div>
                <p className="text-xl text-text-muted dark:text-gray-300 font-medium leading-relaxed">
                  Our {service.title.toLowerCase()} service is the gold standard of the industry. We use commercial-grade equipment and eco-conscious methods to ensure the health of your soil and the vibrancy of your turf.
                </p>
                <div className="grid grid-cols-2 gap-4">
                   {['Eco-Friendly Products', 'Master Technicians', 'Next-Day Reports', 'Guaranteed Results'].map(feature => (
                     <div key={feature} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-sm font-bold">check</span>
                        <span className="text-xs font-black uppercase tracking-widest text-text-main dark:text-gray-400">{feature}</span>
                     </div>
                   ))}
                </div>
                <div className="pt-6">
                  <Link to="/estimate" className="inline-flex items-center gap-3 bg-background-dark dark:bg-white text-white dark:text-background-dark px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-background-dark transition-all transform hover:scale-105">
                    REQUEST THIS SERVICE
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-32 bg-gray-50 dark:bg-gray-900 rounded-[4rem] p-12 lg:p-20 text-center border border-gray-100 dark:border-gray-800">
           <h3 className="text-4xl sm:text-6xl font-black uppercase italic tracking-tighter dark:text-white leading-none mb-8">Ready to Level Up?</h3>
           <p className="text-xl text-text-muted dark:text-gray-400 font-medium max-w-2xl mx-auto mb-12">
             Don't wait for your lawn to decline. Join hundreds of Clearwater neighbors who trust The Grass Guy with their home's first impression.
           </p>
           <Link to="/estimate" className="inline-block bg-primary hover:bg-primary-dark text-background-dark px-12 py-6 rounded-full text-xl font-black transition-all shadow-xl shadow-primary/20">
             START YOUR JOURNEY
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
