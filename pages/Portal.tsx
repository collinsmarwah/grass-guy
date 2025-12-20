
import React, { useState } from 'react';

const Portal: React.FC = () => {
  const [selectedVisit, setSelectedVisit] = useState<any>(null);

  const visits = [
    { id: 1, date: 'May 12', service: 'Standard Mow & Edge', tech: 'Marcus G.', status: 'Scheduled', details: 'Full precision mow with edging along driveway and walkways. Weed whacking around fence perimeter.' },
    { id: 2, date: 'Apr 28', service: 'Standard Mow & Edge', tech: 'Marcus G.', status: 'Completed', details: 'Service completed successfully. Clippings bagged as requested. Slight browning noted on west corner—monitoring fertilization needs.' },
    { id: 3, date: 'Apr 14', service: 'Spring Fertilizer App', tech: 'Marcus G.', status: 'Completed', details: 'Standard spring nitrogen boost applied. Irrigation recommended for 15 minutes per zone tomorrow morning.' },
    { id: 4, date: 'Mar 31', service: 'Standard Mow & Edge', tech: 'Marcus G.', status: 'Completed', details: 'First cut of the season. Set blades to 3.5 inches. Property edges redefined.' },
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50 dark:bg-background-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black tracking-tighter uppercase italic dark:text-white">Client Portal</h1>
            <p className="text-text-muted font-medium mt-1">Manage your service, billing, and schedule.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-2xl font-black text-sm uppercase dark:text-white shadow-sm">LOG OUT</button>
            <button onClick={() => alert('Redirecting to secure payment processor...')} className="bg-primary text-background-dark px-6 py-3 rounded-2xl font-black text-sm uppercase shadow-lg shadow-primary/20">MAKE PAYMENT</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"></div>
               <div className="flex items-center gap-6 relative z-10">
                 <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-4xl overflow-hidden border-2 border-primary">
                   <img src="https://picsum.photos/seed/customer1/200/200" alt="Avatar" />
                 </div>
                 <div>
                   <h2 className="text-2xl font-black dark:text-white uppercase tracking-tight">John Doe</h2>
                   <p className="text-text-muted text-sm font-bold uppercase tracking-widest">Premium Monthly Plan • Springfield, FL</p>
                 </div>
               </div>
               
               <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
                 {[
                   { label: 'Next Visit', val: 'May 12', color: 'text-primary' },
                   { label: 'Balance', val: '$45.00', color: 'text-red-500' },
                   { label: 'Visits', val: '24', color: 'text-text-main dark:text-white' },
                   { label: 'Plan', val: 'Pro-Care', color: 'text-text-main dark:text-white' },
                 ].map(stat => (
                   <div key={stat.label}>
                     <p className="text-[10px] font-black uppercase text-text-muted tracking-[0.2em] mb-1">{stat.label}</p>
                     <p className={`text-xl font-black italic ${stat.color}`}>{stat.val}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="text-xl font-black uppercase italic tracking-tighter dark:text-white mb-8">Service History</h3>
              <div className="space-y-6">
                {visits.map((visit) => (
                  <div 
                    key={visit.id} 
                    onClick={() => setSelectedVisit(visit)}
                    className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-800 last:border-0 group cursor-pointer hover:px-2 transition-all"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-12 text-center">
                        <p className="text-[10px] font-black text-text-muted uppercase leading-none">{visit.date.split(' ')[0]}</p>
                        <p className="text-lg font-black dark:text-white">{visit.date.split(' ')[1]}</p>
                      </div>
                      <div>
                        <h4 className="font-bold dark:text-white group-hover:text-primary transition-colors">{visit.service}</h4>
                        <p className="text-xs font-medium text-text-muted uppercase">Serviced by {visit.tech}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 text-[10px] font-black uppercase rounded-full ${
                        visit.status === 'Completed' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      }`}>
                        {visit.status}
                      </span>
                      <span className="material-symbols-outlined text-gray-300">chevron_right</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-primary p-8 rounded-[3rem] shadow-xl shadow-primary/20">
              <h3 className="text-background-dark text-2xl font-black uppercase italic leading-none mb-4">Refer a <br /> Neighbor</h3>
              <p className="text-background-dark/70 font-bold text-sm leading-tight mb-8">Get $20 credit for every friend you refer who books a monthly plan.</p>
              <button onClick={() => alert('Referral link copied to clipboard!')} className="w-full bg-background-dark text-primary py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">SHARE MY LINK</button>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="text-xl font-black uppercase italic tracking-tighter dark:text-white mb-6">Support</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-transparent hover:border-primary transition-all">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">chat_bubble</span>
                    <span className="font-black text-xs uppercase tracking-widest dark:text-white">Chat with us</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">arrow_forward</span>
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-transparent hover:border-primary transition-all">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">edit_calendar</span>
                    <span className="font-black text-xs uppercase tracking-widest dark:text-white">Change Schedule</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">arrow_forward</span>
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-transparent hover:border-primary transition-all">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">history</span>
                    <span className="font-black text-xs uppercase tracking-widest dark:text-white">Billing History</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedVisit && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-background-dark/80 backdrop-blur-sm" onClick={() => setSelectedVisit(null)}></div>
          <div className="relative bg-white dark:bg-gray-900 max-w-lg w-full rounded-[2.5rem] p-10 shadow-2xl border border-gray-100 dark:border-gray-800 animate-in zoom-in-95 duration-300">
             <div className="flex justify-between items-start mb-8">
                <div>
                   <p className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-1">{selectedVisit.date}</p>
                   <h3 className="text-2xl font-black italic uppercase tracking-tighter dark:text-white">{selectedVisit.service}</h3>
                </div>
                <button onClick={() => setSelectedVisit(null)} className="text-gray-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
             </div>
             <div className="space-y-6">
                <div className="flex gap-10">
                   <div>
                      <p className="text-[10px] font-black uppercase text-text-muted mb-1">Technician</p>
                      <p className="font-bold dark:text-white">{selectedVisit.tech}</p>
                   </div>
                   <div>
                      <p className="text-[10px] font-black uppercase text-text-muted mb-1">Status</p>
                      <p className="font-bold text-primary">{selectedVisit.status}</p>
                   </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                   <p className="text-[10px] font-black uppercase text-text-muted mb-3 tracking-widest">Technician Notes</p>
                   <p className="text-sm font-medium leading-relaxed dark:text-gray-300">{selectedVisit.details}</p>
                </div>
                <button onClick={() => setSelectedVisit(null)} className="w-full bg-background-dark dark:bg-white text-white dark:text-background-dark py-4 rounded-2xl font-black uppercase tracking-widest text-xs">
                  CLOSE VIEW
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portal;
