
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-background-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div className="space-y-12">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-xs font-black uppercase tracking-widest rounded-full mb-6">
                Always at Your Service
              </span>
              <h1 className="text-5xl sm:text-7xl font-black text-text-main dark:text-white leading-[0.9] tracking-tighter italic uppercase">
                Let's Get <br /> In <span className="text-primary not-italic">Touch.</span>
              </h1>
              <p className="text-xl text-text-muted dark:text-gray-400 font-medium mt-8 leading-relaxed">
                Got questions about your grass? Need to adjust your schedule? Our neighborly team is standing by to help you out.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors shrink-0">
                  <span className="material-symbols-outlined text-3xl">call</span>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-text-muted mb-1">Call Us Directly</h4>
                  <p className="text-2xl font-black italic dark:text-white">(727) 300-1963</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors shrink-0">
                  <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-text-muted mb-1">Email Our Team</h4>
                  <p className="text-2xl font-black italic dark:text-white">info@grassguylawns.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors shrink-0">
                  <span className="material-symbols-outlined text-3xl">location_on</span>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-text-muted mb-1">Our Main HQ</h4>
                  <p className="text-xl font-black italic dark:text-white">Clearwater, FL 33761</p>
                  <p className="text-sm font-bold text-primary mt-1">Opens 8:00 AM</p>
                </div>
              </div>
            </div>

            <div className="w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-inner">
               <img src="https://picsum.photos/seed/map/1000/600" alt="Map" className="w-full h-full object-cover opacity-50" />
            </div>
          </div>

          <div className="relative">
            {!submitted ? (
              <div className="bg-gray-50 dark:bg-gray-900 rounded-[3rem] p-10 lg:p-16 border border-gray-100 dark:border-gray-800 shadow-xl animate-in zoom-in duration-500">
                <h3 className="text-3xl font-black uppercase italic tracking-tighter dark:text-white mb-8">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Full Name</label>
                      <input required type="text" className="w-full bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 rounded-2xl p-4 focus:ring-primary focus:border-primary dark:text-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Phone Number</label>
                      <input required type="tel" className="w-full bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 rounded-2xl p-4 focus:ring-primary focus:border-primary dark:text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Email Address</label>
                    <input required type="email" className="w-full bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 rounded-2xl p-4 focus:ring-primary focus:border-primary dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">What's on your mind?</label>
                    <select className="w-full bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 rounded-2xl p-4 focus:ring-primary focus:border-primary dark:text-white">
                      <option>General Inquiry</option>
                      <option>Question about Service</option>
                      <option>Billing Issue</option>
                      <option>Rescheduling</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Your Message</label>
                    <textarea required rows={6} className="w-full bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 rounded-2xl p-4 focus:ring-primary focus:border-primary dark:text-white"></textarea>
                  </div>
                  <button disabled={loading} className="w-full bg-primary hover:bg-primary-dark text-background-dark py-5 rounded-full font-black text-lg shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                    {loading ? <span className="animate-spin material-symbols-outlined">sync</span> : 'SEND MESSAGE'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-primary p-12 lg:p-20 rounded-[3rem] text-center shadow-2xl animate-in slide-in-from-bottom-10 duration-500 flex flex-col items-center justify-center min-h-[500px]">
                <div className="w-24 h-24 bg-background-dark/10 rounded-full flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-6xl text-background-dark font-black">mark_email_read</span>
                </div>
                <h3 className="text-4xl font-black uppercase italic tracking-tighter text-background-dark mb-4 leading-none">Message <br /> Dispatched!</h3>
                <p className="text-background-dark/70 font-bold mb-10 text-lg">We've received your inquiry and will be in touch shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-background-dark text-primary px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  SEND ANOTHER
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
