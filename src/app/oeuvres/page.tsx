"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from "lucide-react"

// Types
type Category = "Toutes les œuvres" | "Peintures" | "Dessins / Croquis" | "Sculptures"

interface Artwork {
  id: string
  title: string
  date: string
  technique: string
  category: Category
  imageSrc: string
  description: string
}

// Dummy Data
const ARTWORKS: Artwork[] = [
  {
    id: "1",
    title: "Le Départ",
    date: "1985",
    technique: "Huile sur toile",
    category: "Peintures",
    imageSrc: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format&fit=crop",
    description: "Une représentation poignante du départ des paysans du Palatinat rhénan, laissant derrière eux leurs terres."
  },
  {
    id: "2",
    title: "Errements",
    date: "1986",
    technique: "Fusain",
    category: "Dessins / Croquis",
    imageSrc: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=800&auto=format&fit=crop",
    description: "Croquis rapide capturant l'attente incertaine dans le port de Dunkerque."
  },
  {
    id: "3",
    title: "La Stidia",
    date: "1990",
    technique: "Aquarelle",
    category: "Peintures",
    imageSrc: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop",
    description: "Le village de La Stidia naissant dans un environnement aride mais plein de promesses."
  },
  {
    id: "4",
    title: "Le Vigneron",
    date: "1992",
    technique: "Bronze",
    category: "Sculptures",
    imageSrc: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop",
    description: "Hommage au travail de la terre et à l'enracinement par la viticulture."
  },
  {
    id: "5",
    title: "Ombres de Guerre",
    date: "1995",
    technique: "Encre de Chine",
    category: "Dessins / Croquis",
    imageSrc: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=800&auto=format&fit=crop",
    description: "La résistance et le combat contre le nazisme, illustrés par des contrastes saisissants."
  },
  {
    id: "6",
    title: "Renaissance",
    date: "1998",
    technique: "Huile sur bois",
    category: "Peintures",
    imageSrc: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=800&auto=format&fit=crop",
    description: "L'espoir et la reconstruction de la famille après les épreuves des conflits mondiaux."
  }
]

const CATEGORIES: Category[] = ["Toutes les œuvres", "Peintures", "Dessins / Croquis", "Sculptures"]

export default function OeuvresPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Toutes les œuvres")
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  const filteredArtworks = ARTWORKS.filter(
    art => activeCategory === "Toutes les œuvres" || art.category === activeCategory
  )

  return (
    <div className="container mx-auto px-4 md:px-6">
      
      {/* Header */}
      <div className="text-center mb-16 pt-12">
        <h1 className="font-serif text-4xl md:text-6xl text-[#D4AF37] mb-4">
          Galerie d'Art & Œuvres
        </h1>
        <p className="font-sans text-lg text-[#FDFBF7]/80 max-w-2xl mx-auto">
          Découvrez l'univers visuel et les créations artistiques qui accompagnent le récit.
        </p>
        <div className="w-24 h-1 bg-[#FDFBF7]/20 mx-auto rounded-full mt-8"></div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all ${
              activeCategory === category
                ? "bg-[#D4AF37] text-[#1A1A1A]"
                : "bg-white/5 text-[#FDFBF7]/60 hover:bg-white/10 hover:text-[#FDFBF7]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredArtworks.map(artwork => (
            <motion.div
              key={artwork.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
              onClick={() => setSelectedArtwork(artwork)}
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-white/5 border border-white/10 mb-4">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${artwork.imageSrc})` }}
                />
                <div className="absolute inset-0 bg-[#1A1A1A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <ZoomIn className="text-[#D4AF37] w-12 h-12" />
                </div>
              </div>
              <h3 className="font-serif text-xl text-[#FDFBF7] group-hover:text-[#D4AF37] transition-colors">
                {artwork.title}
              </h3>
              <p className="text-[#FDFBF7]/50 text-sm mt-1">
                {artwork.technique} — {artwork.date}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-[#1A1A1A]/95 backdrop-blur-xl"
            onClick={() => setSelectedArtwork(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedArtwork(null)}
              aria-label="Fermer"
            >
              <X size={32} />
            </button>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row bg-[#222222] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <div 
                className="w-full md:w-2/3 h-[40vh] md:h-[80vh] bg-cover bg-center bg-no-repeat bg-[#111]"
                style={{ backgroundImage: `url(${selectedArtwork.imageSrc})` }}
              />
              <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                <span className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-2 block">
                  {selectedArtwork.category}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">
                  {selectedArtwork.title}
                </h2>
                <div className="flex items-center space-x-2 text-white/40 text-sm mb-8 pb-8 border-b border-white/10">
                  <span>{selectedArtwork.date}</span>
                  <span>•</span>
                  <span>{selectedArtwork.technique}</span>
                </div>
                
                <h3 className="text-white/80 font-serif text-xl mb-4">L'Histoire de l'Œuvre</h3>
                <p className="text-white/60 leading-relaxed font-sans">
                  {selectedArtwork.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
