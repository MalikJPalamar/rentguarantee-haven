import React, { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/performance/ErrorBoundary";

const GuaranteeSection = lazy(() => import("@/components/GuaranteeSection"));
const HiddenCostsSection = lazy(() => import("@/components/HiddenCostsSection"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const ROICalculator = lazy(() => import("@/components/ROICalculator"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const CallToAction = lazy(() => import("@/components/CallToAction"));

const SectionLoader = () => (
  <div className="py-16 flex justify-center items-center">
    <div className="critical-spinner"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <Hero />
        
        <ErrorBoundary fallback={<SectionLoader />}>
          <Suspense fallback={<SectionLoader />}>
            <HiddenCostsSection />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<SectionLoader />}>
          <Suspense fallback={<SectionLoader />}>
            <GuaranteeSection />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<SectionLoader />}>
          <Suspense fallback={<SectionLoader />}>
            <HowItWorks />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<SectionLoader />}>
          <Suspense fallback={<SectionLoader />}>
            <ROICalculator />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<SectionLoader />}>
          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<SectionLoader />}>
          <Suspense fallback={<SectionLoader />}>
            <CallToAction />
          </Suspense>
        </ErrorBoundary>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
