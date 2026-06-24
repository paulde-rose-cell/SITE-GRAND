import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function OeuvresLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1A]">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        {children}
      </main>
      <Footer />
    </div>
  )
}
