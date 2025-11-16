import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export default function PricingSection() {
  const scrollToUpload = () => {
    const uploadSection = document.getElementById('upload-section')
    uploadSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3142] text-center mb-4 text-balance">
            💰 Transparent Pricing
          </h2>
          <p className="text-center text-[#2D3142]/70 text-lg mb-16">
            💡 No hidden fees or subscriptions
          </p>

          {/* Single Centered Price Card */}
          <div className="max-w-md mx-auto">
            <div className="rounded-3xl p-12 bg-gradient-to-br from-white to-gray-50 border-4 border-[#FF6B35] shadow-2xl">
              {/* Price Display */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-7xl md:text-8xl font-bold text-[#FF6B35]">$0.05</span>
                  <span className="text-3xl text-[#2D3142]/70 font-semibold">/img</span>
                </div>
                <p className="text-[#2D3142]/60 text-lg font-medium mt-4">
                  Simple, transparent pricing
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 py-8 border-t border-b border-gray-200">
                {['No background removal', 'Image optimization', 'Meets platform standards', 'Fast processing', 'Pay as you go'].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-[#A4DE02] flex-shrink-0" strokeWidth={3} />
                    <span className="text-[#2D3142] text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                onClick={scrollToUpload}
                className="w-full h-14 text-xl font-bold bg-[#A4DE02] hover:bg-[#A4DE02]/90 text-[#2D3142] mt-8 shadow-lg hover:shadow-xl transition-all"
              >
                GET STARTED NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
