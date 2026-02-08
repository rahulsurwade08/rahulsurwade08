
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/rahul-surwade', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/rahulsurwade08', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:rahul@example.com', label: 'Email' }
  ];

  return (
    <section id="contact" className="relative py-24 px-6 bg-[#457B9D]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F1FAEE]">
            Get In Touch
          </h2>
          <p className="text-xl text-[#A8DADC] font-medium">
            Let's discuss your cloud security needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#F1FAEE] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#457B9D] border border-[#A8DADC]/40 focus:border-[#E63946] text-[#F1FAEE] placeholder-[#F1FAEE]/40 transition-all duration-300 outline-none shadow-inner"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#F1FAEE] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#457B9D] border border-[#A8DADC]/40 focus:border-[#E63946] text-[#F1FAEE] placeholder-[#F1FAEE]/40 transition-all duration-300 outline-none shadow-inner"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#F1FAEE] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-[#457B9D] border border-[#A8DADC]/40 focus:border-[#E63946] text-[#F1FAEE] placeholder-[#F1FAEE]/40 transition-all duration-300 outline-none resize-none shadow-inner"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 rounded-lg bg-[#E63946] hover:bg-[#A8DADC] hover:text-[#457B9D] text-[#F1FAEE] font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-lg bg-[#457B9D] border border-[#A8DADC]/30 shadow-lg">
              <h3 className="text-2xl font-bold text-[#E63946] mb-6">Connect With Me</h3>
              <p className="text-[#F1FAEE]/90 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, collaborations, or just talking about cloud security and DevSecOps. Feel free to reach out through any of these channels!
              </p>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-[#457B9D] border border-[#A8DADC]/30 hover:bg-[#A8DADC] transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-full transition-all duration-300 bg-[#A8DADC]/20">
                      <social.icon className="w-6 h-6 text-[#E63946] group-hover:text-[#F1FAEE] transition-colors duration-300" />
                    </div>
                    <span className="text-lg font-semibold text-[#F1FAEE] group-hover:text-[#457B9D] transition-colors duration-300">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-lg bg-[#457B9D]/50 border border-[#A8DADC]/30">
              <p className="text-center text-[#F1FAEE]/90 leading-relaxed">
                <span className="text-[#E63946] font-bold">Available for:</span>
                <br />
                Cloud Security Consulting • DevSecOps Implementation • Security Audits • Training & Workshops
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
