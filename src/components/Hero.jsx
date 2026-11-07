import React from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function Hero() {
  const benefits = [
    "Sem perder alunos para a concorrência.",
    "Sem dar desconto para fechar matrículas.",
    "Sem depender da sazonalidade para o mês ser bom.",
    "Sem precisar de um time comercial grande.",
    "Sem fazer promoções ou eventos sem sentido.",
    "Sem precisar de gastar rios de dinheiro em tráfego."
  ]

  return (
    <section className="relative py-10 sm:py-14 lg:py-16 border-t border-white/[0.06] overflow-hidden bg-[#030518]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 6 Pillars Ultra-Fine Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-left">
          {benefits.map((text, idx) => (
            <div 
              key={idx}
              className="rounded-xl sm:rounded-2xl p-4 sm:p-5 glass-panel border border-white/[0.07] hover:border-amber-400/35 transition-all flex items-center gap-3 sm:gap-3.5"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="font-display font-semibold text-xs sm:text-sm md:text-[15px] text-slate-100 leading-snug">
                {text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
