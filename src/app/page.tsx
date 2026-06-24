import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/sections/Hero"
import { FourPillars } from "@/components/sections/FourPillars"
import { BookInfo } from "@/components/sections/BookInfo"
import { Timeline } from "@/components/sections/Timeline"
import { Explorer } from "@/components/sections/Explorer"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FourPillars />
        <BookInfo />
        <Timeline />
        <Explorer />
      </main>
      <Footer />
    </>
  )
}
