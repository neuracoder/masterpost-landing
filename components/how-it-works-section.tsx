import { Upload, Settings, Download } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      icon: Upload,
      title: 'UPLOAD',
      subtitle: 'Your ZIP',
      description: '📁 Drag your file with images',
      color: 'bg-[#FF6B35]',
    },
    {
      number: '2',
      icon: Settings,
      title: 'WE PROCESS',
      subtitle: 'Automatic',
      description: '⚙️ Our AI works for you in minutes',
      color: 'bg-[#FFD23F]',
    },
    {
      number: '3',
      icon: Download,
      title: 'DOWNLOAD',
      subtitle: 'Result',
      description: '📥 Link via email in 5-10 min',
      color: 'bg-[#A4DE02]',
    },
  ]

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3142] text-center mb-16 text-balance">
            🚀 Super Simple, 3 Steps
          </h2>

          {/* Steps Timeline */}
          <div className="relative">
            {/* Desktop Timeline - Horizontal */}
            <div className="hidden md:block">
              <div className="flex items-start justify-between relative">
                {/* Connection Line */}
                <div className="absolute top-16 left-0 right-0 h-1 bg-[#FF6B35] -z-10" style={{ margin: '0 12%' }} />

                {steps.map((step, index) => (
                  <div key={index} className="flex-1 text-center space-y-4 relative">
                    {/* Number Badge */}
                    <div className="flex justify-center mb-4">
                      <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center shadow-lg`}>
                        <span className="text-3xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>

                    {/* Arrow (not for last item) */}
                    {index < steps.length - 1 && (
                      <div className="absolute -right-8 top-16 text-[#FF6B35] text-4xl font-bold">
                        →
                      </div>
                    )}

                    {/* Icon */}
                    <div className="flex justify-center">
                      <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-md">
                        <step.icon className="w-10 h-10 text-[#2D3142]" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl font-bold text-[#2D3142]">{step.title}</h3>
                      <p className="text-lg text-[#2D3142]/70 font-medium">{step.subtitle}</p>
                    </div>

                    {/* Description */}
                    <p className="text-[#2D3142]/80 leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline - Vertical */}
            <div className="md:hidden space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  {/* Number Badge */}
                  <div className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md">
                        <step.icon className="w-7 h-7 text-[#2D3142]" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#2D3142]">{step.title}</h3>
                        <p className="text-[#2D3142]/70 font-medium">{step.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-[#2D3142]/80 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
