import AboutHero from "../components/AboutHero";
import StatsSection from "../components/StatsSection";
import EducationTimeline from "../components/EducationTimeline";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import CertificatesSection from "../components/CertificatesSection";
import ResumeSection from "../components/ResumeSection";
import Footer from "../components/Footer";
export default function About() {
  return (
    <>
      <AboutHero />
      <StatsSection />
      <EducationTimeline />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      <ResumeSection />
      <Footer />
    </>
  );
}