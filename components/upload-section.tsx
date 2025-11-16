'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Upload, Clock, Mail } from 'lucide-react'

export default function UploadSection() {
  const [file, setFile] = useState<File | null>(null)
  const [email, setEmail] = useState('')
  const [isDragging, setIsDragging] = useState(false)
  const [imageCount, setImageCount] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const calculatePrice = (count: number) => {
    if (count <= 100) return count * 0.05
    if (count <= 500) return count * 0.04
    return count * 0.03
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.name.endsWith('.zip')) {
      setFile(droppedFile)
      // Simulate counting images (in real app, would extract and count)
      const simulatedCount = Math.floor(Math.random() * 200) + 10
      setImageCount(simulatedCount)
    } else {
      alert('Please upload a ZIP file')
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.name.endsWith('.zip')) {
      setFile(selectedFile)
      // Simulate counting images
      const simulatedCount = Math.floor(Math.random() * 200) + 10
      setImageCount(simulatedCount)
    } else {
      alert('Please upload a ZIP file')
    }
  }

  const handleSubmit = async () => {
    if (!file || !email) {
      alert('Please upload a file and provide your email')
      return
    }

    if (!email.includes('@')) {
      alert('Please enter a valid email')
      return
    }

    setIsProcessing(true)
    
    // Simulate upload process
    setTimeout(() => {
      setIsProcessing(false)
      setShowSuccess(true)
      
      // Reset after 5 seconds
      setTimeout(() => {
        setShowSuccess(false)
        setFile(null)
        setEmail('')
        setImageCount(0)
      }, 5000)
    }, 2000)
  }

  const estimatedPrice = imageCount > 0 ? calculatePrice(imageCount).toFixed(2) : '0.00'

  return (
    <section id="upload-section" className="py-20 bg-gradient-to-br from-[#FF6B35]/10 to-[#FFD23F]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3142] text-center mb-12 text-balance">
            📦 Process Your Images Now
          </h2>

          {/* Upload Box */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
            {/* Drag & Drop Zone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-4 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-200 ${
                isDragging
                  ? 'border-[#FFD23F] bg-[#FFD23F]/10 scale-105'
                  : 'border-[#FF6B35] bg-white hover:bg-[#FFD23F]/5'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".zip"
                onChange={handleFileSelect}
                className="hidden"
              />
              
              <Upload className="w-16 h-16 text-[#FF6B35] mx-auto mb-4" strokeWidth={2} />
              
              <p className="text-xl font-bold text-[#2D3142] mb-2">
                📁 Drag your ZIP here
              </p>
              <p className="text-[#2D3142]/70">
                or click to browse
              </p>

              {file && (
                <div className="mt-4 p-3 bg-[#A4DE02]/10 rounded-lg">
                  <p className="text-[#2D3142] font-medium">
                    ✓ File selected: {file.name}
                  </p>
                </div>
              )}
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[#2D3142] font-bold text-lg">
                <Mail className="w-5 h-5" />
                Your Email:
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="h-14 text-lg border-2 border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
              />
            </div>

            {/* Price Estimation */}
            {imageCount > 0 && (
              <div className="bg-[#FFD23F]/20 rounded-xl p-6 space-y-2">
                <p className="text-[#2D3142] text-lg">
                  💳 Estimated quantity: <span className="font-bold">{imageCount} images</span>
                </p>
                <p className="text-[#2D3142] text-2xl font-bold">
                  💰 Estimated cost: <span className="text-[#FF6B35]">${estimatedPrice} USD</span>
                </p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              disabled={isProcessing || !file || !email}
              className="w-full h-16 text-xl font-bold bg-[#A4DE02] hover:bg-[#A4DE02]/90 text-[#2D3142] shadow-xl hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isProcessing ? '⚙️ PROCESSING...' : '🚀 PROCESS IMAGES NOW →'}
            </Button>

            {/* Success Message */}
            {showSuccess && (
              <div className="bg-[#A4DE02] text-white rounded-xl p-6 text-center space-y-2 animate-in fade-in slide-in-from-bottom-4">
                <p className="text-2xl font-bold">✓ File Uploaded!</p>
                <p className="text-lg">You will receive the link in your email in 5-10 minutes</p>
              </div>
            )}

            {/* Time Info */}
            <div className="flex items-center justify-center gap-2 text-[#2D3142]/70">
              <Clock className="w-5 h-5 text-[#FFD23F]" />
              <p className="text-sm">
                ⏱️ You will receive the download link in 5-10 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
