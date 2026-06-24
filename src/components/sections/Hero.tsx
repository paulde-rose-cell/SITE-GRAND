"use client"

import React from "react"
import { Button } from "@/components/ui/Button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const scrollToBook = () => {
    document.getElementById("le-livre")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: "url('/hero-bg.png')"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 text-center mt-20">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#FDFBF7] max-w-5xl mx-auto leading-tight mb-6">
          Une famille. Trois générations. <span className="text-[#D4AF37] italic">Trois exils.</span>
        </h1>
        
        <p className="font-sans text-lg md:text-xl text-[#FDFBF7]/90 max-w-3xl mx-auto leading-relaxed mb-10">
          Une histoire vraie dans la tourmente de l’Histoire. Du Palatinat rhénan à la Déportation, jusqu'à l'Indépendance : une saga de courage, d'engagement et de résilience.
        </p>
        
        <Button 
          size="lg" 
          onClick={scrollToBook}
          className="text-lg tracking-wider uppercase px-8 py-6"
        >
          DÉCOUVRIR LE LIVRE
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button onClick={scrollToBook} className="text-[#D4AF37] opacity-80 hover:opacity-100 transition-opacity" aria-label="Scroll down">
          <ChevronDown size={40} strokeWidth={1} />
        </button>
      </div>
    </section>
  )
}
