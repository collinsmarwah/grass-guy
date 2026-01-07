
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { generateSmartEstimate } from '../services/geminiService';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    lawnSize: '',
    notes: ''
  });

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // We redirect to the full estimate page with these details pre-filled or just show a quick preview
    // For now, let's process it and navigate to the estimate page to show the AI result
    try {
      // Small delay to simulate precision analysis
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/estimate', { state: { heroData: formData } });
    } finally {
      setLoading(false);
    }
  };

  const testimonials = [
    {
      id: 1,
      initial: 'G',
      color: 'bg-[#004e89]',
      stars: 5,
      text: '"Great service and very reliable, highly recommend. They showed up exactly when promised and did an excellent job."',
      author: 'Google Reviewer',
      date: 'Recent'
    },
    {
      id: 2,
      initial: 'V',
      color: 'bg-primary',
      stars: 5,
      text: '"Very pleased with their work. My lawn has never looked better. Professional and courteous team."',
      author: 'Verified Customer',
      date: '2 months ago'
    },
    {
      id: 3,
      initial: 'C',
      color: 'bg-[#b91c1c]',
      stars: 5,
      text: '"They have all these qualities but also… their prices are totally competitive. Best value in Clearwater."',
      author: 'Client',
      date: '4 months ago'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/u7l9bxCV7nXBWNmJVZXP/media/68905ec318e40eeaf2b9fdae.png" 
            alt="Beautiful green lawn" 
            className="w-full h-full object-cover brightness-[0.35] scale-105"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Hero Text */}
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-xs font-black uppercase tracking-widest rounded-full mb-6 border border-primary/30 backdrop-blur-sm">
                Florida's #1 Rated Lawn Care
              </span>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 italic uppercase">
                Your Lawn, <br />
                <span className="text-primary not-italic">Our Obsession.</span>
              </h1>
              <p className="text-xl text-gray-300 font-medium mb-10 max-w-xl leading-relaxed">
                Ditch the DIY drama. We deliver precision mowing and relentless weed control so you can actually enjoy your weekends.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-background-dark" alt="User" />
                    ))}
                  </div>
                  <div>
                    <div className="flex text-primary">
                      {[1,2,3,4,5].map(s => <span key={s} className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
                    </div>
                    <p className="text-[10px] text-white/60 font-black uppercase tracking-widest">500+ Neighbors Trust Us</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Form */}
            <div className="relative animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 sm:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-2">Get Your Quote</h2>
                  <p className="text-gray-300 text-sm font-bold uppercase tracking-widest mb-8">Instant AI Analysis in 60 Seconds</p>
                  
                  <form onSubmit={handleHeroSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/50 px-2">Your Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/5 border-white/10 rounded-2xl p-4 text-white focus:ring-primary focus:border-primary placeholder:text-white/20 transition-all" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/50 px-2">Phone Number</label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="(727) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-white/5 border-white/10 rounded-2xl p-4 text-white focus:ring-primary focus:border-primary placeholder:text-white/20 transition-all" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/50 px-2">Property Address</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="123 Oak Avenue"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        className="w-full bg-white/5 border-white/10 rounded-2xl p-4 text-white focus:ring-primary focus:border-primary placeholder:text-white/20 transition-all" 
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/50 px-2">Lawn Size</label>
                        <select
                          value={formData.lawnSize}
                          onChange={(e) => setFormData({...formData, lawnSize: e.target.value})}
                          className="w-full bg-white/5 border-white/10 rounded-2xl p-4 text-white focus:ring-primary focus:border-primary placeholder:text-white/20 transition-all [&>option]:bg-background-dark [&>option]:text-white appearance-none"
                        >
                          <option value="" disabled className="text-gray-500">Approx. Size</option>
                          <option value="Small (< 0.25 acre)">Small (&lt; 0.25 acre)</option>
                          <option value="Medium (0.25-0.5 acre)">Medium (0.25-0.5 acre)</option>
                          <option value="Large (0.5-1 acre)">Large (0.5-1 acre)</option>
                          <option value="Estate (> 1 acre)">Estate (&gt; 1 acre)</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                         <label className="text-[10px] font-black uppercase tracking-widest text-white/50 px-2">Additional Notes</label>
                         <textarea
                           placeholder="Pets, gate code..."
                           value={formData.notes}
                           onChange={(e) => setFormData({...formData, notes: e.target.value})}
                           rows={1}
                           className="w-full bg-white/5 border-white/10 rounded-2xl p-4 text-white focus:ring-primary focus:border-primary placeholder:text-white/20 transition-all resize-none overflow-hidden h-[58px]"
                         />
                      </div>
                    </div>
                    
                    <button 
                      disabled={loading}
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-background-dark py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 mt-4"
                    >
                      {loading ? (
                        <span className="animate-spin material-symbols-outlined">progress_activity</span>
                      ) : (
                        <>
                          GET MY ESTIMATE
                          <span className="material-symbols-outlined font-bold">arrow_forward</span>
                        </>
                      )}
                    </button>
                    
                    <p className="text-[9px] text-center text-white/40 font-bold uppercase tracking-widest mt-6">
                      <span className="material-symbols-outlined text-[10px] align-middle mr-1">security</span>
                      Your data is secured & never sold.
                    </p>
                  </form>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce duration-[3000ms]">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined font-bold">verified</span>
                </div>
                <div>
                  <p className="text-[10px] font-black text-text-main uppercase">Licensed & Insured</p>
                  <p className="text-[8px] font-bold text-text-muted uppercase">FL-STATE #49202</p>
                </div>
              </div>
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
