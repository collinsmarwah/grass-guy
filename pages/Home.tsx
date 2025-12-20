
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      initial: 'T',
      color: 'bg-[#004e89]',
      stars: 5,
      text: '"Quick and affordable lawn care service. Will be using them in t..."',
      author: 'Tyrone Clark',
      date: '11/13/2025'
    },
    {
      id: 2,
      initial: '',
      color: 'bg-black',
      stars: 2,
      text: '"The Grass guy cut my grass for about 3 years. They did a dec..."',
      author: 'Casey Gordon',
      date: '11/10/2025'
    },
    {
      id: 3,
      initial: 'J',
      color: 'bg-[#b91c1c]',
      stars: 5,
      text: '"Great service and very reliable, highly recommend"',
      author: 'Jessica Cervera',
      date: '6/12/2025'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/u7l9bxCV7nXBWNmJVZXP/media/68905ec318e40eeaf2b9fdae.png" 
            alt="Beautiful green lawn" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-xs font-black uppercase tracking-widest rounded-full mb-6 border border-primary/30">
              Florida's #1 Rated Lawn Care
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 italic uppercase">
              Your Lawn, <br />
              <span className="text-primary not-italic">Our Obsession.</span>
            </h1>
            <p className="text-xl text-gray-300 font-medium mb-10 max-w-xl leading-relaxed">
              Ditch the DIY drama. We deliver precision mowing, expert fertilization, and relentless weed control so you can actually enjoy your weekends.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/estimate" className="bg-primary hover:bg-primary-dark text-background-dark px-10 py-5 rounded-full text-lg font-black transition-all transform hover:scale-105 shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
                GET A FREE QUOTE
                <span className="material-symbols-outlined font-bold">arrow_forward</span>
              </Link>
              <Link to="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full text-lg font-black transition-all flex items-center justify-center">
                OUR SERVICES
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Stats */}
        <div className="hidden lg:block absolute bottom-12 right-12 z-10 animate-in fade-in slide-in-from-right-10 duration-1000">
           <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl grid grid-cols-2 gap-10">
              <div>
                <p className="text-primary text-4xl font-black">500+</p>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mt-1">Happy Lawns</p>
              </div>
              <div>
                <p className="text-primary text-4xl font-black">4.9/5</p>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mt-1">Star Rating</p>
              </div>
           </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all">
          {['LAWN TECH', 'GREEN MASTERS', 'TURF EXPERTS', 'ROOTS INC', 'GARDEN PROS'].map(brand => (
            <span key={brand} className="text-2xl font-black tracking-tighter dark:text-white">{brand}</span>
          ))}
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Professional Maintenance</h2>
            <h3 className="text-4xl sm:text-6xl font-black tracking-tight text-text-main dark:text-white">Built for High Performance.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-8 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                  <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                </div>
                <h4 className="text-xl font-black mb-4 dark:text-white">{service.title}</h4>
                <p className="text-text-muted dark:text-gray-400 font-medium leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/services" className="text-sm font-black text-primary flex items-center gap-2 group/link">
                  LEARN MORE
                  <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Impact Quote */}
      <section className="py-32 bg-primary flex items-center justify-center text-center overflow-hidden relative">
        <span className="absolute text-[30rem] font-black text-black/5 -bottom-40 left-0 select-none">GRASS</span>
        <div className="max-w-5xl px-4 relative z-10">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-background-dark leading-tight tracking-tighter uppercase italic">
            "The best time to plant a lawn was twenty years ago. The second best time is <span className="underline decoration-black underline-offset-8">right now</span>."
          </h2>
          <div className="mt-12 flex flex-col items-center">
             <div className="w-20 h-20 rounded-full border-4 border-background-dark overflow-hidden mb-4 shadow-xl">
               <img src="https://picsum.photos/seed/founder/200/200" alt="Founder" />
             </div>
             <p className="text-xl font-black text-background-dark uppercase tracking-widest">GARY GREEN - FOUNDER</p>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION - BASED ON IMAGE */}
      <section className="relative py-24 overflow-hidden">
        {/* Grass Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2000&auto=format&fit=crop" 
            alt="Lush Grass" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header Rating */}
          <div className="flex flex-col items-center mb-16 text-white text-center">
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-white p-1.5 rounded-full flex items-center justify-center shadow-lg">
                <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" className="w-8 h-8" />
              </div>
              <span className="text-6xl font-light tracking-tight">4.8</span>
              <div className="flex flex-col items-start">
                <p className="text-lg font-medium leading-none mb-1">The Grass Guy</p>
                <div className="flex text-[#ffb400]">
                  {[1, 2, 3, 4, 5].map(s => (
                    <span key={s} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-xs font-medium mt-1">13 Reviews</p>
              </div>
            </div>
          </div>

          {/* Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-lg p-10 shadow-2xl flex flex-col items-center text-center transform transition-transform hover:-translate-y-2">
                <div className={`w-32 h-32 rounded-full ${t.color} flex items-center justify-center text-white text-5xl font-medium mb-8 shadow-inner overflow-hidden`}>
                  {t.initial || <div className="w-full h-full bg-black"></div>}
                </div>
                
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map(s => (
                    <span key={s} className={`material-symbols-outlined text-2xl ${s <= t.stars ? 'text-[#ffb400]' : 'text-gray-200'}`} style={{ fontVariationSettings: s <= t.stars ? "'FILL' 1" : "" }}>
                      star
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 font-medium text-lg leading-relaxed mb-8 flex-grow">
                  {t.text}
                </p>

                <button className="text-[#10b981] font-bold flex items-center gap-1 hover:gap-2 transition-all mb-8">
                  Read full review <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>

                <div className="flex items-center gap-3 pt-6 border-t border-gray-100 w-full justify-center">
                  <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="G" className="w-5 h-5" />
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-tight">
                    {t.author} - {t.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://img1.wsimg.com/isteam/ip/54821ffa-34cc-4c8e-90a2-489243f8331e/PXL_20241121_203923086.jpg/:/rs=w:2320,h:1742" alt="Manicured lawn" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-xs font-black uppercase tracking-widest text-primary mb-2">Winter Garden Estate</p>
                <h4 className="text-3xl font-black italic">The Masterclass Series</h4>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <h3 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-text-main dark:text-white uppercase">
              Elite Aesthetics. <br />
              Zero Hassle.
            </h3>
            <p className="text-xl text-text-muted dark:text-gray-300 font-medium leading-relaxed">
              We don't just cut grass. We engineer outdoor spaces that increase property value and turn heads. Every service includes our signature triple-check quality inspection.
            </p>
            <ul className="space-y-6">
              {[
                {icon: 'verified', label: '100% Satisfaction Guarantee'},
                {icon: 'timer', label: 'Reliable Recurring Schedules'},
                {icon: 'cloud_done', label: 'Live Weather-Smart Updates'},
              ].map(item => (
                <li key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined font-bold">{item.icon}</span>
                  </div>
                  <span className="text-lg font-black dark:text-white uppercase tracking-tight">{item.label}</span>
                </li>
              ))}
            </ul>
            <Link to="/estimate" className="inline-block bg-primary hover:bg-primary-dark text-background-dark px-10 py-5 rounded-full text-lg font-black transition-all shadow-xl shadow-primary/20">
              CLAIM YOUR ESTIMATE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
