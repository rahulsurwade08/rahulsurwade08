
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';

function ProjectsSection() {
  const projects = [
    {
      title: 'Multi-Cloud Security Architecture',
      description: 'Designed and implemented a unified security architecture across AWS, Azure, and GCP. Established centralized identity management, network security controls, and automated compliance monitoring for enterprise-scale infrastructure.',
      tools: ['Terraform', 'AWS Control Tower', 'Azure Policy', 'GCP Org Policy', 'Python'],
      link: '#'
    },
    {
      title: 'Automated Compliance Engine',
      description: 'Built an automated compliance engine for SOC2 and ISO 27001 controls. Integrated with cloud platforms to continuously monitor resource configuration and automatically remediate non-compliant assets.',
      tools: ['Python', 'AWS Config', 'Lambda', 'Cloud Custodian', 'Jira API'],
      link: '#'
    },
    {
      title: 'CNAPP & CWPP Implementation',
      description: 'Deployed Cloud Native Application Protection Platform (CNAPP) and Cloud Workload Protection Platform (CWPP) across multi-cloud environments. Automated threat detection and response for containerized workloads.',
      tools: ['Prisma Cloud', 'Sysdig', 'Kubernetes', 'Terraform', 'AWS Security Hub'],
      link: '#'
    },
    {
      title: 'GitHub Advanced Security Rollout',
      description: 'Led the implementation of GitHub Advanced Security for 500+ repositories. Configured secret scanning, code scanning (CodeQL), and dependency review workflows to shift security left.',
      tools: ['GitHub Actions', 'CodeQL', 'Dependabot', 'Python', 'Bash'],
      link: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="projects" className="relative py-24 px-6 bg-[#457B9D]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F1FAEE]">
            Featured Projects
          </h2>
          <p className="text-xl text-[#A8DADC]">
            Innovations in Cloud Security and Compliance Automation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;
