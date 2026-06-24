"use client"

import React from "react"
import { motion } from "framer-motion"

const TIMELINE_NODES = [
  {
    year: "1846",
    title: "Départ du Palatinat rhénan",
    description: "Une fuite motivée par la misère vers un espoir de vie meilleure.",
    alignment: "left"
  },
  {
    year: "1846-1870",
    title: "Une rude vie de colon",
    description: "L'arrivée en Algérie et les premières années d'installation difficiles.",
    alignment: "right"
  },
  {
    year: "1870–1910",
    title: "Le développement de la vigne et la prospérité",
    description: "La transformation de la terre et l'essor économique.",
    alignment: "left"
  },
  {
    year: "1920–1939",
    title: "L’envol vers la métropole",
    description: "Une nouvelle génération part vers la France métropolitaine.",
    alignment: "right"
  },
  {
    year: "1937–1946",
    title: "Le combat d’un soldat de l’ombre contre l’Allemagne nazie",
    description: "L'engagement dans la résistance et la libération.",
    alignment: "left"
  }
]

export function Timeline() {
  return (
    <section className="py-24 bg-[#FDFBF7] bg-[url('/parchemin.jpg')] bg-cover bg-center" id="chronologie">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] mb-4">
            Le Destin d'une Famille au Fil du Temps
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="relative w-full pb-12 pt-8">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
            <div className="relative flex justify-between items-center min-h-[350px] md:min-h-[450px]">
              {/* Horizontal Line */}
              <div className="absolute left-0 right-0 h-0.5 bg-[#D4AF37]/30 top-1/2 transform -translate-y-1/2 z-0"></div>

              {TIMELINE_NODES.map((node, index) => {
                const isTop = index % 2 === 0;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: isTop ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex flex-col items-center flex-1 z-10"
                  >
                    {/* Node Dot */}
                    <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#D4AF37] border-2 md:border-4 border-[#FDFBF7] shadow-sm z-20"></div>

                    {/* Content Box */}
                    {isTop ? (
                      <div className="absolute w-[120px] sm:w-[150px] md:w-[200px] lg:w-[220px] flex flex-col items-center bottom-full">
                        <div className="bg-white p-3 md:p-6 rounded-xl shadow-sm border border-[#1A1A1A]/5 hover:border-[#D4AF37]/30 transition-colors group text-center w-full">
                          <span className="inline-block px-2 md:px-3 py-0.5 md:py-1 bg-[#1A1A1A] text-[#D4AF37] text-[9px] md:text-xs font-bold tracking-wider rounded-full mb-1 md:mb-3">
                            {node.year}
                          </span>
                          <h3 className="font-serif text-[11px] sm:text-sm md:text-lg font-bold text-[#1A1A1A] mb-1 md:mb-2 group-hover:text-[#D4AF37] transition-colors leading-tight">
                            {node.title}
                          </h3>
                          <p className="text-[#1A1A1A]/70 text-[9px] md:text-sm leading-relaxed hidden sm:block">
                            {node.description}
                          </p>
                        </div>
                        <div className="w-0.5 h-4 md:h-8 bg-[#D4AF37]/50 mt-2 md:mt-4"></div>
                      </div>
                    ) : (
                      <div className="absolute w-[120px] sm:w-[150px] md:w-[200px] lg:w-[220px] flex flex-col items-center top-full">
                        <div className="w-0.5 h-4 md:h-8 bg-[#D4AF37]/50 mb-2 md:mb-4"></div>
                        <div className="bg-white p-3 md:p-6 rounded-xl shadow-sm border border-[#1A1A1A]/5 hover:border-[#D4AF37]/30 transition-colors group text-center w-full">
                          <span className="inline-block px-2 md:px-3 py-0.5 md:py-1 bg-[#1A1A1A] text-[#D4AF37] text-[9px] md:text-xs font-bold tracking-wider rounded-full mb-1 md:mb-3">
                            {node.year}
                          </span>
                          <h3 className="font-serif text-[11px] sm:text-sm md:text-lg font-bold text-[#1A1A1A] mb-1 md:mb-2 group-hover:text-[#D4AF37] transition-colors leading-tight">
                            {node.title}
                          </h3>
                          <p className="text-[#1A1A1A]/70 text-[9px] md:text-sm leading-relaxed hidden sm:block">
                            {node.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
