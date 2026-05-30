import { MotionConfig } from "motion/react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Sobre } from "@/components/sections/Sobre"
import { Universos } from "@/components/sections/Universos"
import { Galeria } from "@/components/sections/Galeria"
import { ComoFunciona } from "@/components/sections/ComoFunciona"
import { Depoimentos } from "@/components/sections/Depoimentos"
import { Contato } from "@/components/sections/Contato"
import { ScrollToTop } from "@/components/shared/ScrollToTop"

function App() {
  // reducedMotion="never": anima sempre (decisão de produto), ignorando a
  // preferência "reduzir movimento" do SO/navegador. Trocar por "user" para
  // voltar a respeitar a preferência de acessibilidade.
  return (
    <MotionConfig reducedMotion="never">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Universos />
        <Galeria />
        <ComoFunciona />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <ScrollToTop />
    </MotionConfig>
  )
}

export default App
