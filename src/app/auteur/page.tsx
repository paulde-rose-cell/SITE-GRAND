"use client"

import React from "react"
import { Mail } from "lucide-react"

export default function AuteurPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] pt-32 pb-16 px-4 md:px-6 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D4AF37] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-[#D4AF37] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl md:text-5xl text-[#D4AF37] mb-4">François Tron</h1>
          <div className="w-16 h-1 bg-white/20 mx-auto rounded-full mb-6"></div>
          <p className="text-[#FDFBF7]/80 text-lg md:text-xl font-sans">
            Auteur de "Des Prussiens en Algérie : Une destinée Française"
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-center text-[#FDFBF7]/70 italic mb-8">
            Pour suivre l'actualité de l'auteur, échanger ou découvrir les coulisses du livre, retrouvez-le sur ses réseaux professionnels et personnels :
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/francois_tron/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white/5 hover:bg-[#D4AF37] border border-white/10 hover:border-[#D4AF37] text-[#FDFBF7] hover:text-[#1A1A1A] transition-all duration-300 rounded-xl px-8 py-4 font-medium tracking-wide group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/fran%C3%A7ois-tron-3a1abbb8/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white/5 hover:bg-[#D4AF37] border border-white/10 hover:border-[#D4AF37] text-[#FDFBF7] hover:text-[#1A1A1A] transition-all duration-300 rounded-xl px-8 py-4 font-medium tracking-wide group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
