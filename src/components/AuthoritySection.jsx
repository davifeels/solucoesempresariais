import React from 'react'
import { Award, Building2, Users, Trophy, Mic, Compass, ArrowRight, Calendar, Clock, Video } from 'lucide-react'

export default function AuthoritySection({ onOpenModal }) {
  const credentials = [
    {
      icon: Building2,
      text: "Proprietário de 3 Academias",
      highlight: "3 unidades próprias em operação real",
      featured: true
    },
    {
      icon: Users,
      text: "Mais de 7mil alunos ativos",
      highlight: "De 300 para +7.000 alunos recorrentes"
    },
    {
      icon: Award,
      text: "3x premiado pelo Sebrae",
      highlight: "Excelência em gestão e competitividade"
    },
    {
      icon: Trophy,
      text: "Referência nacional em gestão fitness",
      highlight: "Metodologia replicável de escala"
    },
    {
      icon: Mic,
      text: "Palestrante nos maiores eventos Fitness do Brasil.",
      highlight: "Presença nos principais palcos do setor"
    },
    {
      icon: Award,
      text: "Premiado pela Ultra Academias em 2024 e 2025",
      highlight: "Destaque nacional por dois anos seguidos"
    },
    {
      icon: Compass,
      text: "Consultor de dezenas de academias pelo Brasil.",
      highlight: "Dezenas de operações destravadas"
    }
  ]

  return (
    <section id="especialista" className="relative pt-20 pb-14 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#000321] via-[#050920] to-[#020314]">
      
      {/* Real Original Background (/hero-bg.jpeg) + Architectural Grid */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="/hero-bg.jpeg" 
          alt="" 
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000321]/80 via-[#000321]/85 to-[#020314]" />
      </div>
      <div className="absolute inset-0 bg-grid-luxury bg-radial-mask -z-10 pointer-events-none" />

      {/* Subtle Ambient Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[650px] h-[300px] sm:h-[380px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP HEADLINE BLOCK (FIRST ON THE PAGE — MAX 3 LINES ON DESKTOP, FLUID ON MOBILE) */}
        <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 mb-4 sm:mb-5">
            <span className="text-[10px] sm:text-xs font-display font-extrabold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-amber-300">
              EXCLUSIVO PARA DONOS DE ACADEMIA
            </span>
          </div>

          <h1 className="font-display text-xl sm:text-3xl lg:text-[2.35rem] xl:text-[2.6rem] font-extrabold text-white tracking-tight leading-[1.25] sm:leading-[1.22]">
            Descubra como aumentar o <span className="text-gradient-gold">FATURAMENTO</span> da sua <span className="text-gradient-emerald">ACADEMIA</span>
            <br className="hidden md:inline" />{' '}
            e o número de Alunos em até <span className="underline decoration-amber-400/80 decoration-2 underline-offset-4">30 dias</span>{' '}
            <span className="text-amber-300">sem investir em Marketing.</span>
          </h1>

          <p className="mt-3.5 sm:mt-4 text-xs sm:text-base lg:text-lg text-slate-300/90 font-normal leading-relaxed max-w-3xl mx-auto px-1">
            O método que me fez ir de <strong className="text-white font-semibold">300 alunos para +7.000 alunos</strong>. E que usei em dezenas de academias que eu aconselhei.
          </p>
        </div>

        {/* MENTOR & ESTRATEGISTA + CREDENTIALS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Column (5 Cols): Official Portrait of Eduardo Lustosa (/eduardo-lustosa.png) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-md">
              
              {/* Soft Outer Glow */}
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-amber-500/20 via-emerald-500/10 to-blue-500/20 blur-xl pointer-events-none" />

              {/* Ultra-Fine Luxury Showcase Frame */}
              <div className="relative rounded-[1.75rem] sm:rounded-[2rem] glass-panel-gold p-4 sm:p-5 border border-amber-500/30 shadow-2xl overflow-hidden">
                
                {/* Background Texture Inside Frame */}
                <img 
                  src="/hero-bg.jpeg" 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover opacity-55"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050819] via-[#050819]/35 to-transparent" />

                {/* Top Frame Badge: Explicitly shows DONO DE 3 ACADEMIAS + 7.000 ALUNOS */}
                <div className="relative z-10 flex items-center justify-between gap-2 mb-2.5 pb-2.5 border-b border-white/[0.08]">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-amber-300 font-semibold">
                    DONO DE 3 ACADEMIAS
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 text-[10px] font-mono font-semibold">
                    +7.000 ALUNOS
                  </span>
                </div>

                {/* Official Image (/eduardo-lustosa.png) */}
                <div className="relative z-10 py-1 sm:py-2 flex items-center justify-center">
                  <img 
                    src="/eduardo-lustosa.png" 
                    alt="Eduardo Lustosa - Proprietário de 3 Academias" 
                    className="w-full max-w-[290px] sm:max-w-[360px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] transition-transform duration-500"
                  />
                </div>

                {/* Bottom Trophy Strip */}
                <div className="relative z-10 mt-3 p-3 rounded-xl bg-[#040717]/90 border border-white/[0.08] grid grid-cols-3 divide-x divide-white/10 text-center">
                  <div className="px-1">
                    <span className="font-display font-extrabold text-xs sm:text-sm text-amber-400 block">3 Academias</span>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono block mt-0.5">Proprietário</span>
                  </div>
                  <div className="px-1">
                    <span className="font-display font-extrabold text-xs sm:text-sm text-white block">3x Sebrae</span>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono block mt-0.5">Premiado</span>
                  </div>
                  <div className="px-1">
                    <span className="font-display font-extrabold text-xs sm:text-sm text-emerald-400 block">2024 & 2025</span>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono block mt-0.5">Ultra Academias</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column (7 Cols): Exact Credentials & Event Invitation */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-widest mb-2">
                QUEM VAI CONDUZIR O ENCONTRO
              </span>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
                EDUARDO <span className="text-gradient-gold">LUSTOSA</span>
              </h2>
            </div>

            {/* 7 Exact Credential Cards — Fine 1px Borders, Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-left">
              {credentials.map((cred, idx) => {
                const Icon = cred.icon
                return (
                  <div 
                    key={idx}
                    className={`p-3 sm:p-3.5 rounded-xl glass-panel transition-all flex items-start gap-3 ${
                      cred.featured 
                        ? 'border border-amber-400/40 bg-amber-500/[0.06]' 
                        : idx === credentials.length - 1 
                        ? 'sm:col-span-2 border border-emerald-500/25 bg-emerald-950/20' 
                        : 'border border-white/[0.07] hover:border-white/20'
                    }`}
                  >
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      cred.featured 
                        ? 'bg-amber-500 text-slate-950' 
                        : 'bg-amber-500/10 border border-amber-500/25 text-amber-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display font-bold text-xs sm:text-sm md:text-[15px] text-white leading-snug">
                        {cred.text}
                      </h3>
                      <span className="text-[11px] sm:text-xs text-slate-400 block mt-0.5 leading-tight">
                        {cred.highlight}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Event Callout & Button ("Clique aqui e se cadastre") */}
            <div className="pt-1">
              <div className="p-4 sm:p-5 rounded-2xl glass-panel-emerald border border-emerald-500/30 space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-[11px] sm:text-xs md:text-sm font-mono">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      14/07 • TERÇA-FEIRA
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1.5 text-white font-semibold">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      ÀS 13H
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <Video className="w-3.5 h-3.5" />
                    MEET APENAS DONOS DE ACADEMIA
                  </span>
                </div>

                <button
                  onClick={onOpenModal}
                  className="w-full py-3.5 sm:py-4 px-6 rounded-full btn-luxury-emerald text-white font-display font-extrabold text-sm sm:text-base uppercase tracking-wider hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 group"
                >
                  <span>Clique aqui e se cadastre</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
