import React, { useState } from 'react'
import { Calculator, AlertTriangle, DollarSign, Users, ArrowRight, Sparkles, TrendingUp } from 'lucide-react'

export default function LossCalculator({ onOpenModalWithData }) {
  const [alunos, setAlunos] = useState(350)
  const [ticket, setTicket] = useState(140)
  const [evasao, setEvasao] = useState(11)

  const faturamentoMensal = alunos * ticket
  const alunosPerdidosMes = Math.round(alunos * (evasao / 100))
  const alunosPerdidosAno = alunosPerdidosMes * 12
  const dinheiroDeixadoNaMesaAno = alunosPerdidosAno * ticket * 6
  const faturamentoRecuperavelAno = Math.round(dinheiroDeixadoNaMesaAno * 0.45)
  const faturamentoRecuperavelMes = Math.round(faturamentoRecuperavelAno / 12)

  const applyPreset = (a, t, e) => {
    setAlunos(a)
    setTicket(t)
    setEvasao(e)
  }

  return (
    <section id="calculadora" className="py-24 relative bg-[#020412] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Calculator className="w-4 h-4" />
            <span>TERMINAL DE SIMULAÇÃO DE CAIXA // PRÉ-MEET</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Simule o potencial de <span className="text-gradient-gold">Faturamento Oculto</span> da sua Academia em 30 dias
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Veja em tempo real quanto dinheiro sai pela sua catraca todo ano e o quanto você pode destravar no encontro de <strong className="text-white">14/07 às 13h</strong> sem investir em marketing:
          </p>

          {/* Quick Presets */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-mono text-slate-500 mr-1">Simular Porte:</span>
            <button 
              onClick={() => applyPreset(180, 160, 10)}
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 transition-all"
            >
              Studio / Pequeno Porte (180 alunos)
            </button>
            <button 
              onClick={() => applyPreset(450, 135, 12)}
              className="px-3.5 py-1.5 rounded-full bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/35 text-xs font-mono text-amber-300 transition-all"
            >
              Academia de Bairro (450 alunos)
            </button>
            <button 
              onClick={() => applyPreset(1100, 175, 11)}
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 transition-all"
            >
              Full Service (1.100 alunos)
            </button>
          </div>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls (7 Cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-9 rounded-[2rem] border border-white/10 flex flex-col justify-between space-y-7">
            
            <div className="space-y-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-amber-400">
                  PARÂMETROS ATUAIS DA SUA ACADEMIA
                </span>
                <span className="text-[11px] bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-mono">
                  Cálculo ao Vivo
                </span>
              </div>

              {/* Slider 1 */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm sm:text-base font-bold text-slate-200 flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-400" />
                    Número de Alunos Ativos:
                  </label>
                  <span className="text-xl sm:text-2xl font-black font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1 rounded-xl border border-emerald-500/25">
                    {alunos} alunos
                  </span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="2500" 
                  step="10" 
                  value={alunos} 
                  onChange={(e) => setAlunos(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>

              {/* Slider 2 */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm sm:text-base font-bold text-slate-200 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-amber-400" />
                    Mensalidade Média (Ticket):
                  </label>
                  <span className="text-xl sm:text-2xl font-black font-mono text-amber-300 bg-amber-500/10 px-3.5 py-1 rounded-xl border border-amber-500/25">
                    R$ {ticket} /mês
                  </span>
                </div>
                <input 
                  type="range" 
                  min="79" 
                  max="400" 
                  step="5" 
                  value={ticket} 
                  onChange={(e) => setTicket(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>

              {/* Slider 3 */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm sm:text-base font-bold text-slate-200 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                    Cancelamento / Não-Renovação Mensal:
                  </label>
                  <span className="text-xl sm:text-2xl font-black font-mono text-rose-400 bg-rose-500/10 px-3.5 py-1 rounded-xl border border-rose-500/25">
                    {evasao}% ao mês
                  </span>
                </div>
                <input 
                  type="range" 
                  min="4" 
                  max="25" 
                  step="1" 
                  value={evasao} 
                  onChange={(e) => setEvasao(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>
            </div>

            {/* Bottom Current Revenue Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#040717] border border-white/10 grid grid-cols-2 gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 block">Receita Bruta Atual:</span>
                <span className="text-lg sm:text-xl font-black text-white font-mono">
                  R$ {faturamentoMensal.toLocaleString('pt-BR')}/mês
                </span>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono uppercase text-slate-400 block">Evasão Anual na Catraca:</span>
                <span className="text-lg sm:text-xl font-black text-rose-400 font-mono">
                  -{alunosPerdidosAno} alunos/ano
                </span>
              </div>
            </div>

          </div>

          {/* Results (5 Cols) */}
          <div className="lg:col-span-5 glass-panel-gold p-6 sm:p-9 rounded-[2rem] border-2 border-amber-500/35 flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  FATURAMENTO PERDIDO COM EVASÃO E DESCONTOS
                </span>
                <div className="text-3xl sm:text-4xl font-black text-rose-400 font-mono mt-1">
                  - R$ {dinheiroDeixadoNaMesaAno.toLocaleString('pt-BR')} <span className="text-xs font-normal text-slate-400">/ano</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/35 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4" />
                  POTENCIAL DESTRAVADO SEM INVESTIR EM MARKETING:
                </div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
                  + R$ {faturamentoRecuperavelAno.toLocaleString('pt-BR')}
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Representa um acréscimo estimado de <strong className="text-white">+R$ {faturamentoRecuperavelMes.toLocaleString('pt-BR')}/mês no caixa</strong> blindando retenção e fechamento sem dar desconto.
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => onOpenModalWithData({
                  alunos,
                  ticket,
                  evasao,
                  faturamentoMensal,
                  dinheiroDeixadoNaMesaAno,
                  faturamentoRecuperavelAno
                })}
                className="w-full py-4 px-6 rounded-full btn-luxury-emerald text-white font-display font-black text-base uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
              >
                <span>Clique aqui e se cadastre</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-[11px] text-center font-mono text-amber-300/90">
                14/07 • TERÇA-FEIRA • 13H • MEET APENAS DONOS DE ACADEMIA
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
