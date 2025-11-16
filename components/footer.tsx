import { Mail, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2D3142] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <span className="text-xl">📦</span>
            </div>
            <h3 className="text-2xl font-bold">MASTERPOST.IO</h3>
          </div>

          <p className="text-white/70 text-lg">
            Automatic image processing for e-commerce
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 py-6">
            <a
              href="mailto:info@neuracoder.com"
              className="flex items-center gap-2 text-[#FFD23F] hover:text-[#FF6B35] transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>info@neuracoder.com</span>
            </a>
            <a
              href="https://neuracoder.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#FFD23F] hover:text-[#FF6B35] transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span>neuracoder.com</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-white/60">
              © 2025 Neuracoder - Argentina 🇦🇷
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
