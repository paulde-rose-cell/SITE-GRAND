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
    <section className="py-24 bg-[#FDFBF7]" id="chronologie">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] mb-4">
            Le Destin d'une Famille au Fil du Temps
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#D4AF37]/30 transform md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {TIMELINE_NODES.map((node, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  node.alignment === 'right' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Node Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#FDFBF7] transform -translate-x-1/2 mt-1.5 md:mt-0 z-10 shadow-sm"></div>

                {/* Content Box */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${node.alignment === 'left' ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-[#1A1A1A]/5 hover:border-[#D4AF37]/30 transition-colors group">
                    <span className="inline-block px-3 py-1 bg-[#1A1A1A] text-[#D4AF37] text-sm font-bold tracking-wider rounded-full mb-3">
                      {node.year}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {node.title}
                    </h3>
                    <p className="text-[#1A1A1A]/70 text-sm md:text-base leading-relaxed">
                      {node.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
