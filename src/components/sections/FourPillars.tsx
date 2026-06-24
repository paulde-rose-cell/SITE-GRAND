"use client"

import React from "react"
import { Compass, Ship, Wheat, Shield } from "lucide-react"

const PILLARS = [
  {
    title: "L’EXIL",
    icon: Compass,
    description: "Au milieu du XIXème siècle, des paysans de la Prusse rhénane fuient la misère et leur pays pour le Brésil.",
  },
  {
    title: "L’ERRANCE",
    icon: Ship,
    description: "Trompés par des passeurs, ils errent dans les grands ports de la mer du Nord avant d’être transportés en Algérie.",
  },
  {
    title: "L’ENRACINEMENT",
    icon: Wheat,
    description: "Ces nouveaux colons luttent sur une terre rude et hostile qu’ils travaillent avec acharnement pour développer successivement la culture céréalière puis la vigne.",
  },
  {
    title: "L’ENGAGEMENT",
    icon: Shield,
    description: "Prussiens devenus Français, certains combattront sans relâche l’Allemagne nazie.",
  },
]

export function FourPillars() {
  return (
    <section className="py-24 bg-[#FDFBF7]" id="themes">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] mb-4">
            Une Histoire Vraie au Cœur de l'Histoire
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#1A1A1A]/5 hover:shadow-[0_8px_30px_rgb(212,175,55,0.15)] transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300">
                <pillar.icon className="w-8 h-8 text-[#D4AF37] group-hover:text-[#1A1A1A] transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A] tracking-wider mb-4">
                {pillar.title}
              </h3>
              <p className="text-[#1A1A1A]/70 leading-relaxed font-sans flex-grow">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
