
import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Shield, GitBranch, Box, FileCheck, Container, Lock, Server, Github } from 'lucide-react';
import SkillCard from './SkillCard.jsx';

function SkillsSection() {
  const skillGroups = [
    {
      title: "Cloud Platforms",
      skills: [
        { icon: Cloud, name: 'AWS', description: 'Security services, IAM, VPC, Architecture' },
        { icon: Cloud, name: 'Azure', description: 'Security Center, Key Vault, Enterprise Solutions' },
        { icon: Cloud, name: 'GCP', description: 'Cloud Security, IAM, Infrastructure' },
      ]
    },
    {
      title: "Security Tools",
      skills: [
        { icon: Shield, name: 'CSPM', description: 'Cloud Security Posture Management' },
        { icon: Server, name: 'CWPP', description: 'Cloud Workload Protection Platforms' },
        { icon: Lock, name: 'CNAPP', description: 'Cloud Native Application Protection' },
        { icon: Github, name: 'GitHub Security', description: 'Advanced Security, Dependabot, Secret Scanning' },
      ]
    },
    {
      title: "Container & Orchestration",
      skills: [
        { icon: Box, name: 'Kubernetes', description: 'Cluster hardening, Pod Security, Network Policies' },
        { icon: Container, name: 'Container Security', description: 'Image scanning, Runtime protection' },
        { icon: GitBranch, name: 'CI/CD', description: 'Secure pipelines, SAST/DAST integration' },
      ]
    },
    {
      title: "Compliance",
      skills: [
        { icon: FileCheck, name: 'SOC2 Compliance', description: 'Control implementation, Audit preparation, Monitoring' },
        { icon: Shield, name: 'ISO 27001', description: 'ISMS implementation, Risk assessment, Policy management' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="relative py-24 px-6 bg-[#457B9D]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F1FAEE]">
            Technical Expertise
          </h2>
          <p className="text-xl text-[#A8DADC]">
            Comprehensive security skills across Cloud, DevOps, and Compliance
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-[#E63946] mb-8 border-b border-[#A8DADC] pb-2 inline-block"
              >
                {group.title}
              </motion.h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {group.skills.map((skill, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <SkillCard {...skill} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
