import { Palette, Sparkles, Package } from 'lucide-react'

export default function WhatWeDoSection() {
  const features = [
    {
      icon: Palette,
      title: 'Remove Backgrounds',
      description: 'We remove your product backgrounds with advanced AI in seconds',
      color: 'bg-[#FFD23F]',
    },
    {
      icon: Sparkles,
      title: 'Optimize Size',
      description: 'We adjust to exact marketplace dimensions automatically',
      color: 'bg-[#FF6B35]',
    },
    {
      icon: Package,
      title: 'Meet Standards',
      description: 'Guarantees compliance with Amazon, eBay and other marketplaces',
      color: 'bg-[#A4DE02]',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3142] text-center mb-16 text-balance">
            ⚡ What We Do For You
          </h2>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center space-y-4 group hover:scale-105 transition-transform duration-200"
              >
                {/* Icon Circle */}
                <div className="flex justify-center">
                  <div className={`w-24 h-24 rounded-full ${feature.color} flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-12 h-12 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#2D3142]">{feature.title}</h3>

                {/* Description */}
                <p className="text-[#2D3142]/80 text-lg leading-relaxed max-w-xs mx-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
