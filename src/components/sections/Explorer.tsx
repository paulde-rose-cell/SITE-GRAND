"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const TABS = [
  { id: "auteur", label: "L'AUTEUR" },
  { id: "contexte", label: "CONTEXTE HISTORIQUE" },
  { id: "archives", label: "ARCHIVES" },
  { id: "presse", label: "PRESSE & ÉVÉNEMENTS" }
]

const CONTENT = {
  auteur: (
    <div className="space-y-4">
      <h3 className="font-serif text-2xl text-[#D4AF37] mb-4">À propos de Jean-Paul Mauer</h3>
      <p className="leading-relaxed">
        Ce récit s'inspire de l'histoire du beau-père de l'auteur, de ses origines allemandes au sein du réseau de renseignement Kléber, de son arrestation par la Gestapo, jusqu'à la reconstruction de 4 générations d'histoire de La Stidia.
      </p>
      <p className="leading-relaxed">
        Une plongée intime dans les archives familiales, révélant une fresque où les destins individuels se heurtent de plein fouet aux tragédies du XXe siècle.
      </p>
    </div>
  ),
  contexte: (
    <div className="space-y-4">
      <h3 className="font-serif text-2xl text-[#D4AF37] mb-4">La Grande Migration et la Colonisation</h3>
      <p className="leading-relaxed">
        Au milieu du XIXe siècle, l'Europe connaît des mouvements migratoires massifs. Fuyant la misère, de nombreux Allemands et Irlandais cherchent un nouvel eldorado.
      </p>
      <p className="leading-relaxed">
        C'est dans ce contexte que se développent les pôles de colonisation militaire comme La Stidia en Algérie. Sous la devise de Bugeaud, "par l'épée et par la charrue", ces colons bâtissent une nouvelle vie sur une terre inhospitalière.
      </p>
    </div>
  ),
  archives: (
    <div className="space-y-4">
      <h3 className="font-serif text-2xl text-[#D4AF37] mb-4">Documents Historiques</h3>
      <div className="bg-[#1A1A1A]/5 rounded-lg border border-[#1A1A1A]/10 p-4">
        {/* Placeholder for archive image */}
        <div 
          className="w-full h-64 bg-cover bg-center rounded-md mb-4"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop')" }}
        ></div>
        <p className="text-sm italic text-[#1A1A1A]/60">
          Vue historique du village et de sa structure particulière, entouré des vignobles florissants qui firent sa richesse avant les grands bouleversements du XXe siècle.
        </p>
      </div>
    </div>
  ),
  presse: (
    <div className="space-y-4">
      <h3 className="font-serif text-2xl text-[#D4AF37] mb-4">Actualités et Parutions</h3>
      <div className="bg-white p-6 rounded-lg border-l-4 border-[#D4AF37] shadow-sm">
        <span className="text-xs text-[#1A1A1A]/50 uppercase tracking-wider block mb-2">À venir</span>
        <h4 className="font-serif text-lg text-[#1A1A1A]">Lancement Officiel de "Trois Fois Déracinés"</h4>
        <p className="text-[#1A1A1A]/70 text-sm mt-2">
          Plus d'informations seront communiquées prochainement concernant les dates de dédicaces et la sortie en librairie.
        </p>
      </div>
    </div>
  )
}

export function Explorer() {
  const [activeTab, setActiveTab] = useState(TABS[0].id)

  return (
    <section className="py-24 bg-[#1A1A1A] text-[#FDFBF7]" id="explorer">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-[#FDFBF7] mb-4">
            Explorer l'Univers du Livre
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-[#FDFBF7] text-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap border-b border-[#1A1A1A]/10 bg-white">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[150px] py-4 md:py-6 px-4 text-xs md:text-sm font-medium tracking-widest transition-colors relative ${
                  activeTab === tab.id ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/40 hover:text-[#1A1A1A]/70'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4AF37]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8 md:p-12 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {CONTENT[activeTab as keyof typeof CONTENT]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  )
}
