
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { generateSmartEstimate } from '../services/geminiService';

const Estimate: React.FC = () => {
  const routerLocation = useLocation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    description: '',
    phone: '',
  });
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [locating, setLocating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiPreview, setAiPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Pre-fill data from hero if available
  useEffect(() => {
    const heroData = routerLocation.state?.heroData;
    if (heroData) {
      const names = heroData.name.split(' ');
      
      // Construct description from notes and lawn size
      let description = heroData.notes || '';
      if (heroData.lawnSize) {
        description = `[Size: ${heroData.lawnSize}] ${description}`;
      }

      setFormData(prev => ({
        ...prev,
        firstName: names[0] || '',
        lastName: names.slice(1).join(' ') || '',
        address: heroData.address || '',
        phone: heroData.phone || '',
        description: description.trim()
      }));

      // Optionally auto-trigger estimate if enough info is provided
      if (heroData.address) {
        // Triggering automatic analysis for hero leads
        const autoSubmit = async () => {
           setLoading(true);
           try {
             const promptDesc = `Lawn Size: ${heroData.lawnSize || 'Unknown'}. User Notes: ${heroData.notes || 'None'}. Standard lawn care analysis requested.`;
             const preview = await generateSmartEstimate(heroData.address, promptDesc);
             setAiPreview(preview);
             setSubmitted(true);
           } catch (e) { console.error(e); }
           setLoading(false);
        };
        autoSubmit();
      }
    }
  }, [routerLocation.state]);

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLocating(false);
      },
      (error) => {
        console.error("Error fetching location:", error);
        alert("Unable to retrieve your location. Please enter your address manually.");
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const preview = await generateSmartEstimate(
        formData.address, 
        formData.description, 
        location || undefined
      );
      setAiPreview(preview);
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
      setAiPreview("We've received your request! Our team will reach out with a detailed quote soon.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-32 pb-24 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <div className="space-y-10">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-xs font-black uppercase tracking-widest rounded-full mb-6">
                No-Obligation Quotes
              </span>
              <h1 className="text-5xl sm:text-7xl font-black text-text-main dark:text-white leading-[0.9] tracking-tighter italic uppercase">
                The Grass <br /> Is <span className="text-primary not-italic">Greener</span> <br /> Right Here.
              </h1>
              <p className="text-xl text-text-muted dark:text-gray-400 font-medium mt-8 leading-relaxed max-w-lg">
                Our AI-assisted system will provide an instant overview of your lawn's needs while our team works on a formal proposal.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: 'bolt', title: 'FAST QUOTE', text: 'Get a preview in seconds' },
                { icon: 'satellite_alt', title: 'IMAGERY DRIVEN', text: 'We use high-res satellite data' },
                { icon: 'contract_delete', title: 'NO CONTRACTS', text: 'Pay as you go convenience' },
                { icon: 'check_circle', title: 'SATISFACTION', text: 'Guaranteed quality service' },
              ].map(item => (
                <div key={item.title} className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4">{item.icon}</span>
                  <h4 className="font-black text-xs uppercase tracking-widest mb-1 dark:text-white">{item.title}</h4>
                  <p className="text-text-muted text-xs font-bold uppercase">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {!submitted ? (
              <div className="bg-white dark:bg-gray-900 rounded-[3rem] p-10 shadow-2xl border border-gray-100 dark:border-gray-800 animate-in fade-in zoom-in duration-500">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">First Name</label>
                      <input required name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-2xl p-4 focus:ring-primary focus:border-primary dark:text-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Last Name</label>
                      <input required name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-2xl p-4 focus:ring-primary focus:border-primary dark:text-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Email Address</label>
                      <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-2xl p-4 focus:ring-primary focus:border-primary dark:text-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Phone Number</label>
                      <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-2xl p-4 focus:ring-primary focus:border-primary dark:text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Property Address</label>
                      <button 
                        type="button" 
                        onClick={handleDetectLocation}
                        className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-1 transition-colors ${location ? 'text-primary' : 'text-blue-500 hover:text-blue-600'}`}
                      >
                        <span className="material-symbols-outlined text-sm">{locating ? 'sync' : 'my_location'}</span>
                        {locating ? 'LOCATING...' : location ? 'LOCATION DETECTED' : 'USE MY LOCATION'}
                      </button>
                    </div>
                    <input required name="address" value={formData.address} onChange={handleChange} type="text" placeholder="2519 McMullen Booth Rd" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-2xl p-4 focus:ring-primary focus:border-primary dark:text-white" />
                    {location && (
                      <p className="text-[9px] font-bold text-primary uppercase tracking-tighter">
                        Coordinates: {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Lawn Condition / Notes</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} rows={4} placeholder="Describe any current issues like weeds, bare spots, or overgrown areas..." className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-2xl p-4 focus:ring-primary focus:border-primary dark:text-white"></textarea>
                  </div>
                  <button 
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary-dark text-background-dark py-5 rounded-full font-black text-lg shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <span className="animate-spin material-symbols-outlined">progress_activity</span>
                    ) : (
                      <>
                        CALCULATE MY QUOTE
                        <span className="material-symbols-outlined font-bold">analytics</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-900 rounded-[3rem] p-10 shadow-2xl border border-gray-100 dark:border-gray-800 animate-in slide-in-from-bottom-10 duration-700">
                <div className="text-center mb-10">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                    <span className="material-symbols-outlined text-5xl font-bold">check_circle</span>
                  </div>
                  <h2 className="text-3xl font-black italic uppercase tracking-tighter dark:text-white">Estimate Received!</h2>
                  <p className="text-text-muted font-bold mt-2 uppercase text-xs">A technician will reach out within 24 hours.</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
                  <h3 className="font-black text-xs uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">smart_toy</span>
                    AI Preview Analysis
                  </h3>
                  <div className="prose prose-sm dark:prose-invert max-w-none text-text-muted font-medium whitespace-pre-wrap">
                    {aiPreview}
                  </div>
                </div>

                <button 
                  onClick={() => setSubmitted(false)}
                  className="w-full mt-10 border-2 border-primary text-text-main dark:text-white hover:bg-primary hover:text-background-dark py-4 rounded-full font-black transition-all"
                >
                  START NEW QUOTE
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estimate;
