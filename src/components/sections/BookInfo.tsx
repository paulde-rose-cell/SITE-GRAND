"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/Button"
import { ShoppingCart, ExternalLink, ChevronLeft, ChevronRight, BookOpen } from "lucide-react"

const EXCERPTS = [
  {
    id: 1,
    chapter: "Chapitre 1",
    text: "Martin s’est retourné une dernière fois vers la maison familiale et ses champs qui descendent en pente douce vers la Nahe..."
  },
  {
    id: 2,
    chapter: "Chapitre 4",
    text: "Sur le territoire de la Stidia, à quatre lieues de Mostaganem, l’ordre est donné de dresser les tentes..."
  }
]

export function BookInfo() {
  const [currentExcerpt, setCurrentExcerpt] = useState(0)

  const nextExcerpt = () => setCurrentExcerpt((prev) => (prev + 1) % EXCERPTS.length)
  const prevExcerpt = () => setCurrentExcerpt((prev) => (prev - 1 + EXCERPTS.length) % EXCERPTS.length)

  return (
    <section className="py-24 bg-[#1A1A1A] text-[#FDFBF7]" id="le-livre">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Excerpts */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="flex items-center space-x-4 mb-8">
              <BookOpen className="text-[#D4AF37] w-8 h-8" />
              <h2 className="font-serif text-3xl md:text-4xl text-[#D4AF37]">EXTRAIT</h2>
            </div>
            
            <div className="relative bg-white/5 border border-[#D4AF37]/20 p-8 md:p-12 rounded-xl min-h-[300px] flex flex-col justify-center">
              <span className="absolute -top-6 left-8 text-[80px] font-serif text-[#D4AF37] opacity-20">"</span>
              <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-[#FDFBF7]/90 relative z-10">
                {EXCERPTS[currentExcerpt].text}
              </p>
              <div className="mt-8 flex justify-between items-end relative z-10">
                <span className="text-[#D4AF37] font-medium tracking-widest text-sm uppercase">
                  — {EXCERPTS[currentExcerpt].chapter}
                </span>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={prevExcerpt}
                    className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all"
                    aria-label="Extrait précédent"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextExcerpt}
                    className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all"
                    aria-label="Extrait suivant"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Book Specs & Buy Buttons */}
          <div className="w-full lg:w-1/2 space-y-10 lg:pl-10">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl mb-6">LE LIVRE</h2>
              <div className="w-16 h-1 bg-[#D4AF37] rounded-full mb-8"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 text-sm md:text-base">
                <div className="border-l-2 border-[#D4AF37]/30 pl-4">
                  <span className="block text-[#FDFBF7]/50 uppercase tracking-wider text-xs mb-1">Genre</span>
                  <span className="font-medium">Récit historique / Saga familiale</span>
                </div>
                <div className="border-l-2 border-[#D4AF37]/30 pl-4">
                  <span className="block text-[#FDFBF7]/50 uppercase tracking-wider text-xs mb-1">Période</span>
                  <span className="font-medium">1846 - 1946</span>
                </div>
                <div className="border-l-2 border-[#D4AF37]/30 pl-4">
                  <span className="block text-[#FDFBF7]/50 uppercase tracking-wider text-xs mb-1">Lieu</span>
                  <span className="font-medium">Allemagne – Algérie - France</span>
                </div>
                <div className="border-l-2 border-[#D4AF37]/30 pl-4">
                  <span className="block text-[#FDFBF7]/50 uppercase tracking-wider text-xs mb-1">Format</span>
                  <span className="font-medium">Broché et eBook</span>
                </div>
                <div className="border-l-2 border-[#D4AF37]/30 pl-4">
                  <span className="block text-[#FDFBF7]/50 uppercase tracking-wider text-xs mb-1">Nombre de pages</span>
                  <span className="font-medium">250</span>
                </div>
                <div className="border-l-2 border-[#D4AF37]/30 pl-4">
                  <span className="block text-[#FDFBF7]/50 uppercase tracking-wider text-xs mb-1">Date de parution</span>
                  <span className="text-[#D4AF37] font-semibold">À venir</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-[#FDFBF7]/10">
              <h3 className="text-xl font-serif mb-6 flex items-center">
                <ShoppingCart className="mr-3 text-[#D4AF37]" size={24} />
                ACHETER LE LIVRE
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="flex-1 justify-between group">
                  Amazon
                  <ExternalLink size={16} className="text-[#D4AF37] group-hover:text-[#1A1A1A]" />
                </Button>
                <Button variant="outline" className="flex-1 justify-between group">
                  Fnac
                  <ExternalLink size={16} className="text-[#D4AF37] group-hover:text-[#1A1A1A]" />
                </Button>
                <Button variant="outline" className="flex-1 justify-between group">
                  Decitre
                  <ExternalLink size={16} className="text-[#D4AF37] group-hover:text-[#1A1A1A]" />
                </Button>
              </div>
              <p className="text-center text-xs text-[#FDFBF7]/40 mt-4 italic">
                Les liens seront actifs à la date de parution.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
