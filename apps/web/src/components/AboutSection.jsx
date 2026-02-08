
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, FileCheck } from 'lucide-react';

function AboutSection() {
  const certifications = [
    'AWS Certified Security - Specialty',
    'Certified Kubernetes Administrator (CKA)',
    'Certified Information Systems Security Professional (CISSP)',
    'Google Cloud Professional Security Engineer',
    'Microsoft Certified: Azure Security Engineer Associate'
  ];

  const achievements = [
    { icon: Briefcase, text: '4 Years in Cloud Security' },
    { icon: FileCheck, text: 'Compliance Expert (SOC2, ISO)' },
    { icon: Award, text: 'DevSecOps Specialist' }
  ];

  return (
    <section id="about" className="relative py-24 px-6 bg-[#457B9D]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F1FAEE]">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-lg bg-[#457B9D] border border-[#A8DADC]/30 shadow-lg">
              <h3 className="text-2xl font-bold text-[#E63946] mb-4">Professional Profile</h3>
              <p className="text-[#F1FAEE]/90 leading-relaxed mb-4">
                I have 4 years of experience in cloud security, DevSecOps, and compliance frameworks. My expertise lies in designing secure cloud architectures, implementing robust container security, and automating compliance controls for SOC2 and ISO 27001 standards.
              </p>
              <p className="text-[#F1FAEE]/90 leading-relaxed">
                I specialize in bridging the gap between development velocity and security requirements. By leveraging automation and Infrastructure as Code, I help organizations build resilient systems that are secure by design and compliant by default.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-[#457B9D] border border-[#A8DADC]/30 hover:border-[#E63946] transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-[#A8DADC]/20">
                    <achievement.icon className="w-6 h-6 text-[#F1FAEE]" />
                  </div>
                  <span className="text-lg font-semibold text-[#F1FAEE]">
                    {achievement.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-lg bg-[#457B9D] border border-[#A8DADC]/30 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#E63946] mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#A8DADC] group-hover:scale-125 transition-all duration-300" />
                  <span className="text-[#F1FAEE]/90 group-hover:text-[#F1FAEE] transition-colors duration-300">
                    {cert}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
