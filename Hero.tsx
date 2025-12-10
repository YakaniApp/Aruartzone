import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Overlay with Image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Creative Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-orange-300 font-medium text-sm">
              <Star size={16} fill="currentColor" />
              <span>#1 Branding Agency in Arua City</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Where Quality <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                Counts
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-xl">
              From corporate branding to custom t-shirts, AruArtZone brings your ideas to life with modern digital artwork, fast delivery, and premium quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="px-8 py-4 rounded-full bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/40 flex items-center justify-center gap-2"
              >
                Explore Services <ArrowRight size={20} />
              </a>
              <a
                href="#ai-designer"
                className="px-8 py-4 rounded-full bg-white text-indigo-900 font-bold text-lg hover:bg-slate-100 transition-all flex items-center justify-center"
              >
                Ask AI Assistant
              </a>
            </div>
          </div>

          <div className="hidden md:block relative">
            {/* Abstract visual composition */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl rotate-6 opacity-80 blur-lg"></div>
              <img 
                src="https://picsum.photos/600/600?random=1" 
                alt="Graphic Design Showcase" 
                className="relative rounded-2xl shadow-2xl border-4 border-white/10 z-10 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                  98%
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Client Satisfaction</p>
                  <p className="text-slate-900 font-bold">Trusted by 500+ Businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;