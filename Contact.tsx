import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-extrabold mb-6">Let's Create Together</h2>
          <p className="text-slate-400 text-lg mb-8">
            Ready to start your next project? Visit us in Arua City or send us a message. 
            We respond quickly to all inquiries.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-orange-500 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Our Location</h3>
                <p className="text-slate-400">Main Street, Near Arua Hill Roundabout<br />Arua City, Uganda</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-orange-500 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Call Us</h3>
                <p className="text-slate-400">+256 700 123 456<br />+256 772 987 654</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-orange-500 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Email Us</h3>
                <p className="text-slate-400">hello@aruartzone.co.ug</p>
              </div>
            </div>
            
             <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-orange-500 shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Working Hours</h3>
                <p className="text-slate-400">Mon - Sat: 8:00 AM - 6:00 PM<br />Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl text-slate-900">
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                placeholder="you@example.com"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">How can we help?</label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your project..."
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all ${
                submitted ? 'bg-green-600' : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {submitted ? (
                <>Message Sent!</>
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
