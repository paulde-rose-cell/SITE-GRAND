"use client"

import React, { useState, useEffect } from "react"
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
      <h3 className="font-serif text-2xl text-[#D4AF37] mb-4">À propos de François Tron</h3>
      <p className="leading-relaxed">
        Tout est parti de l’histoire d’un homme qui m’est proche, mon beau-père. Homme solitaire, sobre et silencieux, il était particulièrement peu disert sur son histoire familiale et son engagement pendant la seconde guerre mondiale. Je savais qu’il était d’origine pied-noir et allemande. Je savais aussi qu’il avait été torturé et déporté pour son appartenance à un réseau de lutte contre l’occupant nazi, le réseau Kléber. Sa propre famille notamment ses enfants n’en savait pas plus ou en parlait peu.
      </p>
      <p className="leading-relaxed">
        Dans un premier temps, j’ai reconstitué son histoire familiale, c’est-à-dire celle de ses ancêtres sur quatre générations. Son histoire, leur histoire, est un épisode très particulier de la colonisation de l’Algérie qui est méconnu en dehors des descendants des hommes et des femmes qui ont partagé la même aventure. 
      </p>
      <p className="leading-relaxed">
        Cette aventure c’est celle de paysans, nombreux, près d’un millier, originaires de la Prusse rhénane qui, poussés par la misère, émigrent par accident en Algérie et créent un centre de colonisation, La Stidia, sous l’autorité de l’armée d’Afrique.  C’est donc une colonie allemande dont la réussite est des plus incertaine tant les obstacles et les épreuves sont multiples et cruels. Ils réussiront. Dans mon livre, les ascendants de mon beau-père sont la ligne de force de cette histoire collective.
      </p>
      <p className="leading-relaxed">
        Dans un deuxième temps, j’ai reconstitué le trajet de mon beau-père au sein du Service de renseignement de l’armée française de 1937 à 1946. L’histoire de ce Service sous l’occupation est peu connue. Et pourtant, elle mérite de l’être car les hommes de ce Service bien qu’appartenant à l’armée d’armistice se sont engagés tôt, dès juillet 1940, dans la lutte contre l’occupant et ont payé un lourd tribut à leur combat.
      </p>
      <p className="leading-relaxed">
        L’ironie de l’histoire est que mon beau-père d’origine allemande (son père est né prussien) combat le pays de ses ancêtres et, arrêté par la Gestapo, est considéré comme un traître et subit tortures et déportation.
      </p>
      <p className="leading-relaxed">
        Il y a là une destinée humaine à méditer car elle souligne les incertitudes des destins, les conflits intimes que suscitent les situations et la violence de l’Histoire.
      </p>
    </div>
  ),
  contexte: (
    <div className="space-y-4">
      <h3 className="font-serif text-2xl text-[#D4AF37] mb-4">La Grande Migration et la Colonisation</h3>
      <p className="leading-relaxed">
        Deux grands thèmes sont abordés à travers l’aventure de ces migrants prussiens. Le premier est l’émigration européenne du milieu du XIXème siècle, toujours incertaine et dangereuse, remplie d’aléas qui modifient ou broient les destinées. L’Allemagne et l’Irlande connaissent des départs massifs vers les Etats-Unis, le Brésil, l’Australie. Aucun état allemand n’échappe à ce vaste mouvement de populations. L’aventure des familles prussiennes décrite dans ce livre en est un exemple frappant et douloureux.
      </p>
      <p className="leading-relaxed">
        Le deuxième thème est la colonisation de l’Algérie par des hommes et des femmes qui, placés sous la tutelle de l’armée d’Afrique, créent un centre de colonisation homogène culturellement car uniquement peuplé de Prussiens. Ce qui explique la longue persistance de leur tradition et pourtant leur assimilation progressive dans la nation française. Des expériences identiques ont été faites avec des colons alsaciens, varois ou encore parisiens avec l’idée que des centres de colonisations peuplés de colons issus d’un même village ou d’une même région avaient plus de chance de conduire à leur développement et à leur succès. Il faut dire que les échecs étaient nombreux tant les obstacles et les épreuves étaient grands. La faillite de ces centres est une préoccupation constante de l’armée et des officiers qui leurs sont affectés. Le rôle de la charrue est tout aussi important que celui de l’épée. Rappelons-nous la devise de Bugeaud.
      </p>
      <p className="leading-relaxed">
        A cet égard, l’histoire de La Stidia est une parfaite illustration des difficultés auxquelles sont confrontés les colons et l’armée.
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
          style={{ backgroundImage: "url('/stidia-archive.png')" }}
        ></div>
        <p className="text-sm italic text-[#1A1A1A]/60">
          Photographie de La Stidia au début du XXème siècle. On voit au premier plan les vignes de la Vallée et derrière le village les vignes du Plateau. On discerne bien la structure en rectangle du village avec sa rue principale qui n’est rien d’autre que la route Mostaganem-Oran et ses quartiers délimités par les rues perpendiculaires.
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

  useEffect(() => {
    const handleTabChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail && TABS.some(t => t.id === customEvent.detail)) {
        setActiveTab(customEvent.detail);
      }
    };

    window.addEventListener('changeExplorerTab', handleTabChange);
    return () => window.removeEventListener('changeExplorerTab', handleTabChange);
  }, []);

  return (
    <section className="py-24 bg-[#1A1A1A] text-[#FDFBF7]" id="explorer">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-[#FDFBF7] mb-4">
            Explorer l'Univers du Livre
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-[#FDFBF7] bg-[url('/parchemin.jpg')] bg-cover bg-center text-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl">
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
