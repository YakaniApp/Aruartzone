import React from 'react';
import { Palette, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Palette className="text-orange-500" size={24} />
              <span className="text-2xl font-bold text-white">
                Aru<span className="text-orange-500">Art</span>Zone
              </span>
            </div>
            <p className="max-w-sm">
              Your partner for professional graphics, branding, and printing in Arua City. 
              We blend creativity with technology to deliver outstanding results.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Logo Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Large Format Print</a></li>
              <li><a href="#" className="hover:text-white transition-colors">T-Shirt Branding</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stickers & Labels</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AruArtZone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
