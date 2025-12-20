
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-xs font-black uppercase tracking-widest rounded-full">
              Our Roots Run Deep
            </span>
            <h1 className="text-5xl sm:text-7xl font-black text-text-main dark:text-white leading-[0.9] tracking-tighter italic uppercase">
              Born in the <br /> <span className="text-primary not-italic">Florida Sun.</span>
            </h1>
            <p className="text-xl text-text-muted dark:text-gray-300 font-medium leading-relaxed">
              Started as a two-man operation with a push mower and a dream, The Grass Guy has grown into Springfield's most trusted name in high-performance lawn care. We don't just mow; we maintain the standard for neighborhood excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4">
               <img src="https://picsum.photos/seed/about1/600/800" alt="Work" className="rounded-3xl shadow-xl hover:-rotate-2 transition-transform" />
               <div className="bg-primary p-6 rounded-3xl text-center">
                 <p className="text-3xl font-black text-background-dark">12+</p>
                 <p className="text-[10px] font-bold text-background-dark/70 uppercase tracking-widest">Years Experience</p>
               </div>
             </div>
             <div className="space-y-4 pt-12">
               <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-3xl text-center">
                 <p className="text-3xl font-black text-primary">100%</p>
                 <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Neighbor Approved</p>
               </div>
               <img src="https://picsum.photos/seed/about2/600/800" alt="Work" className="rounded-3xl shadow-xl hover:rotate-2 transition-transform" />
             </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-[4rem] p-12 lg:p-24 mb-32">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { title: 'INTEGRITY', text: 'We show up when we say we will. We charge what we quoted. No hidden fees, no games.' },
                { title: 'EXPERTISE', text: 'Every technician is trained in soil science and Florida-specific turf management.' },
                { title: 'QUALITY', text: 'We triple-check every edge, every trim, and every square foot before we leave.' },
              ].map(val => (
                <div key={val.title}>
                  <h3 className="text-3xl font-black italic text-primary uppercase tracking-tighter mb-4">{val.title}</h3>
                  <p className="text-text-muted dark:text-gray-400 font-medium leading-relaxed">{val.text}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
           <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Meet the Pros</h2>
           <h3 className="text-4xl sm:text-6xl font-black tracking-tight text-text-main dark:text-white mb-20 uppercase">The Crew Behind the Green.</h3>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Marcus G.', role: 'Chief of Turf', img: 'https://picsum.photos/seed/team1/400/500' },
                { name: 'Sarah L.', role: 'Scheduling Lead', img: 'https://picsum.photos/seed/team2/400/500' },
                { name: 'David K.', role: 'Soil Specialist', img: 'https://picsum.photos/seed/team3/400/500' },
                { name: 'Chris T.', role: 'Senior Tech', img: 'https://picsum.photos/seed/team4/400/500' },
              ].map(person => (
                <div key={person.name} className="group cursor-pointer">
                   <div className="relative rounded-3xl overflow-hidden mb-6 aspect-[4/5]">
                     <img src={person.img} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                     <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   </div>
                   <h4 className="text-xl font-black dark:text-white uppercase italic tracking-tighter">{person.name}</h4>
                   <p className="text-xs font-black text-primary uppercase tracking-widest mt-1">{person.role}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
