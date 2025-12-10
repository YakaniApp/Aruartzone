import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Logos', projects: 120 },
  { name: 'Branding', projects: 85 },
  { name: 'Posters', projects: 200 },
  { name: 'Apparel', projects: 150 },
  { name: 'Web', projects: 60 },
];

const ImpactStats: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Impact in Numbers</h2>
            <p className="text-slate-600 mb-8 text-lg">
              We've helped hundreds of businesses across Uganda elevate their brand presence. 
              Our commitment to fast delivery and quality shows in our project volume.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-xl">
                <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
                <div className="text-slate-600 font-medium">Happy Clients</div>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl">
                <div className="text-4xl font-bold text-orange-500 mb-2">12yrs</div>
                <div className="text-slate-600 font-medium">Of Excellence</div>
              </div>
            </div>
          </div>

          <div className="h-[300px] w-full">
            <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">Projects Completed by Category</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }} 
                />
                <Tooltip 
                  cursor={{ fill: '#f1f5f9' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="projects" radius={[6, 6, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#4f46e5' : '#f97316'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;