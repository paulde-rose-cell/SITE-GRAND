"use client"

import { motion } from "framer-motion"

const PILLARS = [
  {
    title: "L’EXIL",
    numeral: "I",
    description: "Au milieu du XIXème siècle, des paysans de la Prusse rhénane fuient la misère et leur pays pour le Brésil.",
  },
  {
    title: "L’ERRANCE",
    numeral: "II",
    description: "Trompés par des passeurs, ils errent dans les grands ports de la mer du Nord avant d’être transportés en Algérie.",
  },
  {
    title: "L’ENRACINEMENT",
    numeral: "III",
    description: "Ces nouveaux colons luttent sur une terre rude et hostile qu’ils travaillent avec acharnement pour développer successivement la culture céréalière et la vigne.",
  },
  {
    title: "L’ENGAGEMENT",
    numeral: "IV",
    description: "Prussiens devenus Français, certains combattront sans relâche l’Allemagne nazie.",
  },
]

export function FourPillars() {
  return (
    <section className="py-24 bg-[#FDFBF7] bg-[url('/parchemin.jpg')] bg-cover bg-center" id="themes">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] mb-4">
            Une histoire vraie au cœur de l'Histoire
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </motion.div>

        {/* Image Plage */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-6xl relative group"
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
          <img 
            src="/imagelivre.png" 
            alt="Paysage côtier" 
            className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((pillar, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: "-10px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
              className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#1A1A1A]/5 hover:shadow-[0_8px_30px_rgb(212,175,55,0.15)] transition-all duration-300 group flex flex-col h-full"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="font-serif text-5xl text-[#D4AF37]/50 font-bold group-hover:text-[#D4AF37] transition-colors duration-500 italic">
                  {pillar.numeral}.
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A] tracking-wider mb-4">
                {pillar.title}
              </h3>
              <p className="text-[#1A1A1A]/70 leading-relaxed font-sans flex-grow">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
