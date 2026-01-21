import React, { useState } from 'react';
import Button from '../UI/Button';
import { Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', whatsapp: '', idea: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-brand-light border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-display font-medium text-5xl md:text-6xl mb-8 text-brand-black">
                Ready to make something fun?
              </h2>
              <p className="text-gray-500 text-lg mb-12 max-w-md leading-relaxed font-light">
                Tell us about your project. Whether it's a napkin sketch or a 50-page GDD, we're ready to add the fun factor.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-brand-black mt-1" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Email us</p>
                  <a href="mailto:accidentallyfunstudio@gmail.com" className="text-xl font-medium text-brand-black hover:text-gray-600 transition-colors">
                    accidentallyfunstudio@gmail.com
                  </a>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-black mt-1" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Visit us</p>
                  <p className="text-xl font-medium text-brand-black">
                    Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <h3 className="font-display font-semibold text-3xl mb-4">Message Sent</h3>
                <p className="text-gray-500">We'll get back to you shortly.</p>
                <Button variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Who are you?</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-black focus:outline-none focus:border-brand-black focus:bg-white transition-all"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-black focus:outline-none focus:border-brand-black focus:bg-white transition-all"
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">WhatsApp Number</label>
                    <input 
                      type="tel" 
                      id="whatsapp"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-black focus:outline-none focus:border-brand-black focus:bg-white transition-all"
                      placeholder="+62..."
                      value={formState.whatsapp}
                      onChange={(e) => setFormState({...formState, whatsapp: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="idea" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">What's the big idea?</label>
                  <textarea 
                    id="idea"
                    required
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-black focus:outline-none focus:border-brand-black focus:bg-white transition-all resize-none"
                    placeholder="Tell us about your project..."
                    value={formState.idea}
                    onChange={(e) => setFormState({...formState, idea: e.target.value})}
                  />
                </div>

                <Button 
                  type="submit" 
                  fullWidth 
                  disabled={isSubmitting}
                  className={isSubmitting ? 'opacity-75 cursor-wait' : ''}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
