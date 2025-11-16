import HeroSection from '@/components/hero-section'
import WhatWeDoSection from '@/components/what-we-do-section'
import HowItWorksSection from '@/components/how-it-works-section'
import PricingSection from '@/components/pricing-section'
import UploadSection from '@/components/upload-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhatWeDoSection />
      <HowItWorksSection />
      <PricingSection />
      <UploadSection />
      <Footer />
    </main>
  )
}
