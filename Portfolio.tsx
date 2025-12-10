import React from 'react';
import { PortfolioItem } from '../types';

const Portfolio: React.FC = () => {
  const items: PortfolioItem[] = [
    { id: '1', title: 'Modern Coffee Shop Branding', category: 'Branding', imageUrl: 'https://picsum.photos/600/600?random=10' },
    { id: '2', title: 'Music Festival Poster', category: 'Poster Design', imageUrl: 'https://picsum.photos/600/800?random=11' },
    { id: '3', title: 'Tech Startup Logo', category: 'Logo Design', imageUrl: 'https://picsum.photos/600/600?random=12' },
    { id: '4', title: 'Custom T-Shirt Print', category: 'Apparel', imageUrl: 'https://picsum.photos/600/800?random=13' },
    { id: '5', title: 'NGO Annual Report', category: 'Layout', imageUrl: 'https://picsum.photos/600/600?random=14' },
    { id: '6', title: 'Restaurant Menu', category: 'Print Design', imageUrl: 'https://picsum.photos/600/800?random=15' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Featured Projects</h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          A showcase of our recent work helping clients in Arua City and beyond stand out from the crowd.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-orange-400 text-sm font-bold uppercase tracking-wider mb-1">
                {item.category}
              </span>
              <h3 className="text-white text-xl font-bold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="px-8 py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all">
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
