
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Mail, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/9779826048177?text=Hello";
  const GMAIL_ICON = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png";
  const WHATSAPP_ICON = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/662px-WhatsApp_icon.png";
  const EMAIL = "noreply@authorize.qzz.io";

  return (
    <SectionWrapper id="contact" className="bg-gray-900 text-white overflow-hidden relative">
      {/* Abstract background shapes */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="grid lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Contact</h4>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8">Let's build <br /><span className="text-gray-400">something iconic.</span></h2>
          <p className="text-gray-400 text-xl max-w-md leading-relaxed mb-12">
            Have a groundbreaking idea? Let's turn it into reality. I'm currently taking on select projects for Q3 2026.
          </p>

          <div className="space-y-6">
            <a 
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-6 p-4 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="p-3 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform">
                <img src={GMAIL_ICON} alt="Gmail" className="w-8 h-8" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email me at</p>
                <p className="text-lg font-bold">{EMAIL}</p>
              </div>
            </a>

            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-4 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all group shadow-lg shadow-[#25D366]/5"
            >
              <div className="p-1 bg-white rounded-2xl group-hover:scale-110 transition-transform">
                <img src={WHATSAPP_ICON} alt="WhatsApp" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <p className="text-xs text-green-400 uppercase font-bold tracking-widest">WhatsApp Direct</p>
                <p className="text-lg font-bold">977-9826048177</p>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 backdrop-blur-xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Company</label>
                <input type="text" placeholder="Acme Inc." className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-primary transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Service Required</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option className="bg-dark">Full-Stack Development</option>
                  <option className="bg-dark">UI/UX Design</option>
                  <option className="bg-dark">Consulting</option>
                </select>
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea rows={4} placeholder="Tell me about your vision..." className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
            </div>
            <button className="w-full py-5 bg-primary rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-600 transition-colors shadow-xl shadow-primary/20">
              Send Proposal <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
