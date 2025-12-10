import React from 'react';
import { PenTool, Printer, Image, Users, Sticker, Shirt } from 'lucide-react';
import { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: '1',
      title: 'Logo & Identity',
      description: 'Memorable logos and complete brand identity packages that define your business.',
      icon: <PenTool size={32} />,
      imageUrl: 'https://picsum.photos/400/300?random=2'
    },
    {
      id: '2',
      title: 'Large Format Printing',
      description: 'High-quality banners, posters, and signage for events and businesses.',
      icon: <Printer size={32} />,
      imageUrl: 'https://picsum.photos/400/300?random=3'
    },
    {
      id: '3',
      title: 'Corporate Branding',
      description: 'Professional business cards, letterheads, and corporate stationery.',
      icon: <Users size={32} />,
      imageUrl: 'https://picsum.photos/400/300?random=4'
    },
    {
      id: '4',
      title: 'Photo Editing',
      description: 'Advanced retouching and manipulation to make your photos look perfect.',
      icon: <Image size={32} />,
      imageUrl: 'https://picsum.photos/400/300?random=5'
    },
    {
      id: '5',
      title: 'Custom Stickers',
      description: 'Die-cut stickers and labels for packaging, laptops, and marketing.',
      icon: <Sticker size={32} />,
      imageUrl: 'https://picsum.photos/400/300?random=6'
    },
    {
      id: '6',
      title: 'Apparel Printing',
      description: 'Custom t-shirt printing for schools, teams, events, and merchandise.',
      icon: <Shirt size={32} />,
      imageUrl: 'https://picsum.photos/400/300?random=7'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-orange-500 font-semibold tracking-wide uppercase text-sm">Our Expertise</h2>
        <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
          Professional Design & Print Services
        </h3>
        <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
          We offer a wide range of creative solutions tailored to meet the needs of businesses, NGOs, and individuals in Arua and beyond.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100">
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-indigo-900/0 transition-colors z-10"></div>
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 z-20 bg-white p-3 rounded-xl shadow-md text-orange-500">
                {service.icon}
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
