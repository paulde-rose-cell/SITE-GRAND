"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#FDFBF7] pt-16 pb-8 border-t border-[#D4AF37]/20" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Newsletter */}
          <div className="space-y-4">
            <h3 className="font-serif text-[#D4AF37] text-2xl">Restez informé</h3>
            <p className="text-sm text-[#FDFBF7]/80 leading-relaxed">
              Inscrivez-vous à notre newsletter pour être alerté de nos actualités et des événements à venir autour du livre.
            </p>
            <form className="flex mt-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Votre adresse email"
                className="bg-[#FDFBF7]/5 border border-[#D4AF37]/30 text-[#FDFBF7] px-4 py-2 rounded-l-md focus:outline-none focus:border-[#D4AF37] w-full"
                required
              />
              <Button type="submit" className="rounded-l-none">
                S'inscrire
              </Button>
            </form>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4 md:ml-12">
            <h3 className="font-serif text-[#D4AF37] text-xl">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-[#FDFBF7]/80 hover:text-[#D4AF37] transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#le-livre" className="text-sm text-[#FDFBF7]/80 hover:text-[#D4AF37] transition-colors">
                  Le Livre
                </Link>
              </li>
              <li>
                <Link href="#explorer" className="text-sm text-[#FDFBF7]/80 hover:text-[#D4AF37] transition-colors">
                  Contexte & Archives
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Credits */}
          <div className="space-y-4">
            <h3 className="font-serif text-[#D4AF37] text-xl">Légal & Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mentions-legales" className="text-sm text-[#FDFBF7]/80 hover:text-[#D4AF37] transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/cgu" className="text-sm text-[#FDFBF7]/80 hover:text-[#D4AF37] transition-colors">
                  Conditions Générales
                </Link>
              </li>
              <li className="text-sm text-[#FDFBF7]/80 pt-4">
                contact@trois-fois-deracines.fr
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#FDFBF7]/10 flex flex-col md:flex-row justify-between items-center text-xs text-[#FDFBF7]/50">
          <p>© {new Date().getFullYear()} François Tron. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0">
            Créé pour la publication de "Des Prussiens en Algérie"
          </p>
        </div>
      </div>
    </footer>
  )
}
