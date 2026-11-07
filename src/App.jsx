import React, { useState } from 'react'
import Navbar from './components/Navbar'
import AuthoritySection from './components/AuthoritySection'
import Hero from './components/Hero'
import EcosystemTabs from './components/EcosystemTabs'
import Footer from './components/Footer'
import LeadModal from './components/LeadModal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => setModalOpen(true)
  const handleCloseModal = () => setModalOpen(false)

  return (
    <div className="min-h-screen bg-[#020314] text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Top Bar */}
      <Navbar onOpenModal={handleOpenModal} />

      <main>
        {/* 1. Topo: MENTOR & ESTRATEGISTA EDUARDO LUSTOSA + 7 Credenciais + 14/07 13H Meet */}
        <AuthoritySection onOpenModal={handleOpenModal} />

        {/* 2. Promessa Principal + Os 6 Pilares */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 3. Para quem é: DONOS DE ACADEMIA OU STUDIO (3 Cards com Imagens + Aviso) */}
        <EcosystemTabs onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Registration Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}
