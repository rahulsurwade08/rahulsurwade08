
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection.jsx';
import SkillsSection from '@/components/SkillsSection.jsx';
import ProjectsSection from '@/components/ProjectsSection.jsx';
import AboutSection from '@/components/AboutSection.jsx';
import ContactSection from '@/components/ContactSection.jsx';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Rahul Surwade - Cloud Security & DevSecOps Expert</title>
        <meta 
          name="description" 
          content="4 years of cloud security expertise, DevSecOps, SOC2 & ISO 27001 compliance, CWPP, CNAPP, and GitHub Security." 
        />
      </Helmet>

      <div className="relative">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </div>
    </>
  );
}

export default HomePage;
