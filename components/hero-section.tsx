'use client'

import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export default function HeroSection() {
  const scrollToUpload = () => {
    const uploadSection = document.getElementById('upload-section')
    uploadSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FF6B35] to-[#FFD23F]">
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
              <span className="text-2xl">📦</span>
            </div>
            <h1 className="text-3xl font-bold text-white">MASTERPOST.IO</h1>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance">
            Perfect Images for Amazon in Less Than 10 Minutes
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/95 font-light max-w-2xl mx-auto text-balance">
            Remove backgrounds + Optimize for marketplaces + Meet compliance standards
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              onClick={scrollToUpload}
              size="lg"
              className="bg-[#A4DE02] hover:bg-[#A4DE02]/90 text-[#2D3142] text-lg px-8 py-6 h-auto font-bold shadow-2xl hover:scale-105 transition-transform duration-200"
            >
              📦 PROCESS MY IMAGES NOW →
            </Button>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-white">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#A4DE02]" strokeWidth={3} />
              <span className="font-medium">No registration</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#A4DE02]" strokeWidth={3} />
              <span className="font-medium">Pay per use</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#A4DE02]" strokeWidth={3} />
              <span className="font-medium">100% Automatic</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
    </section>
  )
}
