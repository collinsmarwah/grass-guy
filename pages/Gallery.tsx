
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GALLERY_IMAGES = [
  {
    url: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/u7l9bxCV7nXBWNmJVZXP/media/68905ec318e40eeaf2b9fdae.png',
    category: 'Full Service',
    title: 'The Signature Estate'
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/54821ffa-34cc-4c8e-90a2-489243f8331e/Beforenafter2.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:2320,h:1742',
    category: 'Before & After',
    title: 'Elite Transformation'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0676/6896/7561/files/efls2-technology-for-precision-mowing.png?v=1754558963',
    category: 'Mowing',
    title: 'Precision Tech Mowing'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Pr3IerLSkPd0VN3bruKaU9xnzZy6fe4kuw&s',
    category: 'Nutrition',
    title: 'Deep Green Nutrition'
  },
  {
    url: 'https://kj1bcdn.b-cdn.net/media/47833/weed-management.jpeg',
    category: 'Weed Control',
    title: 'Total Weed Eradication'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmmJ8zqkDKM17x25wiDomNsW5TZgTztAEWQ&s',
    category: 'Cleanup',
    title: 'Seasonal Yard Refresh'
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/54821ffa-34cc-4c8e-90a2-489243f8331e/IMG_20230228_103622~2.jpg/:/cr=t:0%25,l:2.24%25,w:91.64%25,h:100%25/rs=w:2320,h:1160',
    category: 'Mowing',
    title: 'Precision Parallelism'
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/54821ffa-34cc-4c8e-90a2-489243f8331e/IMG_20230228_105628~2.jpg/:/cr=t:0%25,l:0%25,w:91.17%25,h:100%25/rs=w:2320,h:1160',
    category: 'Mowing',
    title: 'The Signature Stripe'
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/54821ffa-34cc-4c8e-90a2-489243f8331e/IMG_20220415_100349~3.jpg/:/cr=t:0%25,l:3.68%25,w:91.17%25,h:100%25/rs=w:2320,h:1160',
    category: 'Full Service',
    title: 'Estate Management'
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/54821ffa-34cc-4c8e-90a2-489243f8331e/IMG_20221111_091859~2.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:2320,h:1740',
    category: 'Cleanup',
    title: 'Winter Preparation'
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/54821ffa-34cc-4c8e-90a2-489243f8331e/PXL_20241207_144213087.jpg/:/rs=w:1160,h:1545',
    category: 'Full Service',
    title: 'Turf Excellence'
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/54821ffa-34cc-4c8e-90a2-489243f8331e/IMG_20230228_120131~2.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:2320,h:1063',
    category: 'Mowing',
    title: 'Masterclass Finish'
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/54821ffa-34cc-4c8e-90a2-489243f8331e/IMG_20230228_120153~2.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:2320,h:1063',
    category: 'Mowing',
    title: 'Obsessive Detailing'
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/54821ffa-34cc-4c8e-90a2-489243f8331e/PXL_20241121_203923086.jpg/:/rs=w:2320,h:1742',
    category: 'Full Service',
    title: 'Residential Masterpiece'
  }
];

const CATEGORIES = ['All', 'Mowing', 'Nutrition', 'Weed Control', 'Cleanup', 'Full Service', 'Before & After'];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-background-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-xs font-black uppercase tracking-widest rounded-full mb-6">
            Proof is in the Projects
          </span>
          <h1 className="text-5xl sm:text-7xl font-black text-text-main dark:text-white leading-[0.9] tracking-tighter italic uppercase">
            Visual <br /> <span className="text-primary not-italic">Masterpieces</span> <br /> Collection.
          </h1>
          <p className="text-xl text-text-muted dark:text-gray-400 font-medium mt-10 leading-relaxed max-w-2xl mx-auto">
            Explore the full collection of real-world results we deliver daily across Florida. Click any project to see it in full detail.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-primary text-background-dark shadow-lg shadow-primary/20 scale-105' 
                  : 'bg-gray-100 dark:bg-gray-800 text-text-muted hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedImg(img)}
              className="group relative overflow-hidden rounded-[2.5rem] aspect-square bg-gray-100 dark:bg-gray-800 animate-in fade-in zoom-in duration-500 cursor-pointer"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                 <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-2">{img.category}</span>
                 <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">{img.title}</h3>
                 <div className="mt-4 flex gap-4">
                   <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                     VIEW PROJECT
                   </span>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Lightbox */}
        {selectedImg && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10 animate-in fade-in duration-300">
            <div className="absolute inset-0 bg-background-dark/95 backdrop-blur-xl" onClick={() => setSelectedImg(null)}></div>
            <div className="relative max-w-5xl w-full bg-white dark:bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
              <button onClick={() => setSelectedImg(null)} className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-primary hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-2/3">
                  <img src={selectedImg.url} alt={selectedImg.title} className="w-full h-full object-cover aspect-video lg:aspect-auto" />
                </div>
                <div className="lg:w-1/3 p-10 flex flex-col justify-center">
                  <span className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4">{selectedImg.category}</span>
                  <h2 className="text-4xl font-black italic uppercase tracking-tighter dark:text-white mb-6 leading-none">{selectedImg.title}</h2>
                  <p className="text-text-muted dark:text-gray-400 font-medium mb-10 leading-relaxed">
                    A showcase of our obsessive attention to detail. This project utilizes our elite maintenance protocol to achieve industry-leading results for our clients.
                  </p>
                  <Link to="/estimate" onClick={() => setSelectedImg(null)} className="inline-block bg-primary text-background-dark px-10 py-5 rounded-full text-center font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                    BOOK SIMILAR
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {filteredImages.length === 0 && (
          <div className="text-center py-24">
            <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-700 mb-4">image_not_supported</span>
            <p className="text-text-muted font-black uppercase tracking-widest">No projects in this category yet.</p>
          </div>
        )}

        <div className="mt-24 text-center p-12 lg:p-20 bg-primary rounded-[3rem] shadow-2xl shadow-primary/20">
          <h2 className="text-4xl sm:text-5xl font-black text-background-dark italic uppercase tracking-tighter mb-8">Want Your Lawn Here?</h2>
          <p className="text-background-dark/70 text-xl font-bold max-w-xl mx-auto mb-10">
            Join the elite circle of homeowners who never worry about their curb appeal.
          </p>
          <Link to="/estimate" className="inline-block bg-background-dark text-primary px-10 py-5 rounded-full text-lg font-black hover:scale-105 transition-transform shadow-xl">
            GET YOUR FREE QUOTE
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Gallery;
