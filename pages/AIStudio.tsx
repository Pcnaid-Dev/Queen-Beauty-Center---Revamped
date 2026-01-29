import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Camera, Upload } from 'lucide-react';

export default function AIStudio() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--orchid)] via-black to-[var(--pink)] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-md border border-white/20">
            <Sparkles className="text-[var(--gold)] mr-2" />
            <span className="font-bold tracking-wide">AI Beauty Studio</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl mb-6">Try Before You Commit</h1>
          <p className="text-gray-300 text-lg">
            Upload your photo and see how our styles look on you instantly using the power of Google Gemini AI.
          </p>
        </div>

        {/* Demo Interface */}
        <div className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
            {/* Left: Controls */}
            <div className="p-8 border-r border-white/10 flex flex-col justify-center gap-6">
              <div className="space-y-2">
                <h3 className="font-bold text-xl">1. Choose a Style</h3>
                <div className="flex flex-wrap gap-2">
                  {['Blonde Balayage', 'Red Velvet', 'Bridal Updo', 'Soft Glam Makeup', 'Bold Lip'].map(tag => (
                    <button key={tag} className="px-4 py-2 rounded-lg bg-white/5 hover:bg-[var(--pink)] hover:text-white transition-colors text-sm border border-white/10">
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                 <h3 className="font-bold text-xl">2. Upload Photo</h3>
                 <div className="border-2 border-dashed border-white/20 rounded-xl h-48 flex flex-col items-center justify-center cursor-pointer hover:bg-white/5 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Camera className="text-[var(--gold)]" />
                    </div>
                    <span className="text-sm text-gray-400">Take a selfie or upload</span>
                 </div>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-[var(--pink)] to-[var(--orchid)] rounded-xl font-bold text-lg shadow-lg hover:shadow-[var(--glow)] transition-all">
                Generate Look
              </button>
            </div>

            {/* Right: Preview */}
            <div className="relative bg-black flex items-center justify-center">
               <div className="text-center text-gray-500">
                  <Sparkles size={48} className="mx-auto mb-4 opacity-20" />
                  <p>Preview will appear here</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}