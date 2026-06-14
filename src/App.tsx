/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { HeroSection } from './components/HeroSection';
import { TrustBadges } from './components/TrustBadges';
import { ProblemSolution } from './components/ProblemSolution';
import { Benefits } from './components/Benefits';
import { PortfolioSection } from './components/PortfolioSection';
import { VideoTestimonials } from './components/VideoTestimonials';
import { ClientResults } from './components/ClientResults';
import { CompetitorAnalysis } from './components/CompetitorAnalysis';
import { LocalSEOAudit } from './components/LocalSEOAudit';
import { LocalSEOTips } from './components/LocalSEOTips';
import { Features } from './components/Features';
import { Metrics } from './components/Metrics';
import { PartnerMarquee } from './components/PartnerMarquee';
import { BlogSection } from './components/BlogSection';
import { FAQSection } from './components/FAQSection';
import { FAQStructuredData } from './components/FAQStructuredData';
import { SEOQuiz } from './components/SEOQuiz';
import { SEOChecklist } from './components/SEOChecklist';
import { ClientPortal } from './components/ClientPortal';
import { SEORankTracker } from './components/SEORankTracker';
import { PriceEstimator } from './components/PriceEstimator';
import { CallbackScheduler } from './components/CallbackScheduler';
import { PromotionalBanner } from './components/PromotionalBanner';
import { CaseStudySection } from './components/CaseStudySection';
import { FinalCTA } from './components/FinalCTA';
import { NewsletterSignup } from './components/NewsletterSignup';
import { WhatsAppFAB } from './components/WhatsAppFAB';
import { ShareWidget } from './components/ShareWidget';
import { ScrollToTop } from './components/ScrollToTop';
import { LiveChatWidget } from './components/LiveChatWidget';
import { DarkModeToggle } from './components/DarkModeToggle';
import { ServiceAreaMap } from './components/ServiceAreaMap';
import { ServiceLocation } from './components/ServiceLocation';

const FadeInSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-950 transition-colors">
      <ScrollProgressBar />
      <Navbar />
      <DarkModeToggle />
      <FAQStructuredData />
      <FadeInSection>
        <HeroSection />
      </FadeInSection>
      <FadeInSection>
        <TrustBadges />
      </FadeInSection>
      <FadeInSection>
        <ServiceAreaMap />
      </FadeInSection>
      <FadeInSection>
        <ServiceLocation />
      </FadeInSection>
      <FadeInSection>
        <ProblemSolution />
      </FadeInSection>
      <FadeInSection>
        <Benefits />
      </FadeInSection>
      <FadeInSection>
        <PortfolioSection />
      </FadeInSection>
      <FadeInSection>
        <ClientResults />
      </FadeInSection>
      <FadeInSection>
        <VideoTestimonials />
      </FadeInSection>
      <FadeInSection>
        <Metrics />
      </FadeInSection>
      <FadeInSection>
        <PartnerMarquee />
      </FadeInSection>
      <FadeInSection>
        <BlogSection />
      </FadeInSection>
      <FadeInSection>
        <FAQSection />
      </FadeInSection>
      <FadeInSection>
        <SEOChecklist />
      </FadeInSection>
      <FadeInSection>
        <SEOQuiz />
      </FadeInSection>
      <FadeInSection>
        <ClientPortal />
      </FadeInSection>
      <FadeInSection>
        <SEORankTracker />
      </FadeInSection>
      <FadeInSection>
        <CompetitorAnalysis />
      </FadeInSection>
      <FadeInSection>
        <LocalSEOAudit />
      </FadeInSection>
      <FadeInSection>
        <LocalSEOTips />
      </FadeInSection>
      <FadeInSection>
        <Features />
      </FadeInSection>
      <FadeInSection>
        <PriceEstimator />
      </FadeInSection>
      <FadeInSection>
        <PromotionalBanner />
      </FadeInSection>
      <FadeInSection>
        <CallbackScheduler />
      </FadeInSection>
      <FadeInSection>
        <CaseStudySection />
      </FadeInSection>
      <FadeInSection>
        <FinalCTA />
      </FadeInSection>
      <FadeInSection>
        <NewsletterSignup />
      </FadeInSection>
      <footer className="py-6 text-center text-gray-500 dark:bg-gray-900">
        &copy; {new Date().getFullYear()} Jasa Pembuatan Website Sedot WC Karawang.
      </footer>
      <WhatsAppFAB />
      <ShareWidget />
      <ScrollToTop />
      <LiveChatWidget />
    </div>
  );
}
