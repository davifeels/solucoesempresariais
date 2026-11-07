import React from 'react'
import { Building2, Dumbbell, Users, XCircle, ArrowRight } from 'lucide-react'

export default function EcosystemTabs({ onOpenModal }) {
  const profiles = [
    {
      id: 'bairro',
      title: 'Academias de bairro',
      copy: 'Academias tradicionais e familiares que trabalham para manter o negócio funcionando, mesmo com toda essa concorrência e a chegada das low costs.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85',
      icon: Dumbbell
    },
    {
      id: 'full_service',
      title: 'Academias full service',
      copy: 'Academias de múltiplos serviços que hoje tem dificuldade de adquirir novos alunos e de expandir sua operação.',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=85',
      icon: Building2
    },
    {
      id: 'studios',
      title: 'Studios de personal trainer',
      copy: 'Profissionais que colocaram seu sonho em um local afim de prestar um serviço diferenciado e não conseguem ter lucro real com o negócio.',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=85',
      icon: Users
    }
  ]

  return (
    <section id="para-quem-e" className="py-14 sm:py-20 lg:py-24 relative overflow-hidden border-t border-white/[0.06] bg-[#04061B]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-amber-400 font-semibold block">
            Para quem é:
          </span>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            DONOS DE <span className="text-gradient-gold">ACADEMIA OU STUDIO</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-base lg:text-lg leading-relaxed px-1">
            Para donos de <strong className="text-white font-semibold">ACADEMIAS ou STUDIOS</strong>, que querem faturar e lucrar mais em seus negócios e até para aqueles que querem crescer e abrir novas unidades.
          </p>
        </div>

        {/* 3 Clean Visual Cards — Responsive 1 -> 2 -> 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 mb-10 sm:mb-12">
          {profiles.map((prof) => {
            const Icon = prof.icon
            return (
              <div
                key={prof.id}
                className="group rounded-2xl sm:rounded-3xl overflow-hidden glass-panel border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden bg-slate-950">
                    <img
                      src={prof.image}
                      alt={prof.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070B1E] via-[#070B1E]/25 to-transparent" />
                    <div className="absolute top-3.5 right-3.5 w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-slate-950/80 border border-white/15 flex items-center justify-center text-amber-400 backdrop-blur-md">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 lg:p-7">
                    <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-white">
                      {prof.title}
                    </h3>
                    <p className="mt-2 sm:mt-2.5 text-slate-300/90 text-xs sm:text-sm lg:text-[15px] leading-relaxed">
                      {prof.copy}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Disqualifier Banner */}
        <div className="max-w-4xl mx-auto rounded-xl sm:rounded-2xl p-4 sm:p-5 bg-rose-950/30 border border-rose-500/30 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
            <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
            <p className="font-display text-xs sm:text-base lg:text-lg font-semibold text-white leading-snug">
              <strong className="text-rose-400">NÃO é</strong> para donos de academia que querem se manter estagnados fazendo mais do mesmo.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full btn-luxury-emerald text-white font-display font-extrabold text-sm sm:text-base uppercase tracking-wider hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 group"
          >
            <span>Clique aqui e se cadastre</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  )
}
