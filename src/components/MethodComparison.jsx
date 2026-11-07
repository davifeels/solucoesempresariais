import React from 'react'
import { XCircle, CheckCircle2, Zap, ArrowRight, ShieldCheck } from 'lucide-react'

export default function MethodComparison({ onOpenModal }) {
  const comparisons = [
    {
      criterio: "Preço e Matrícula",
      arcaico: "Dá desconto para não perder o aluno e tenta brigar por preço contra redes Low Cost bilionárias.",
      lustosa: "Vende pelo Valor Percebido com script validado na recepção, sem dar 1 real de desconto."
    },
    {
      criterio: "Captação de Alunos",
      arcaico: "Queima milhares de reais em anúncios genéricos do Instagram que só trazem curiosos desqualificados.",
      lustosa: "Máquina de indicação ativa espontânea e campanhas de ativação local sem gastar fortunas em tráfego."
    },
    {
      criterio: "Retenção na Catraca",
      arcaico: "O aluno para de ir na academia e ninguém percebe até ele cancelar a mensalidade 60 dias depois.",
      lustosa: "Protocolo Antievasão com esteira de relacionamento e intervenção rápida antes do cancelamento."
    },
    {
      criterio: "Equipe de Recepção",
      arcaico: "Recepcionista que só entrega tabela de preço, anota recado e não bate metas de fechamento.",
      lustosa: "Time treinado como consultores de fechamento, sabendo contornar qualquer objeção na hora."
    },
    {
      criterio: "Sazonalidade",
      arcaico: "Vive na montanha-russa: faturamento estoura em janeiro/fevereiro e quebra o caixa no inverno.",
      lustosa: "Planos recorrentes de alto valor com receita previsível e lucro estável o ano inteiro."
    }
  ]

  return (
    <section id="comparativo" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <Zap className="w-4 h-4" />
            <span>Por que o Método Funciona</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            O Velho Jeito Arcaico vs. <span className="text-gradient-emerald">O Método Lustosa</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Veja a diferença entre tentar sobreviver na base da sorte e aplicar um sistema de gestão profissional e lucrativo.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card: O Velho Jeito */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-rose-500/20 bg-rose-950/10 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-rose-500/20 pb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">O Jeito Tradicional Arcaico</h3>
                  <span className="text-xs text-rose-400 font-medium">Margem baixa, estresse e risco de falência</span>
                </div>
              </div>

              <div className="space-y-4">
                {comparisons.map((c, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                      {c.criterio}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {c.arcaico}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center text-xs text-rose-300 font-semibold">
              ⚠️ Resultado: Dono de academia trabalhando 14 horas por dia para pagar contas e sem sobrar lucro no fim do mês.
            </div>
          </div>

          {/* Card: O Método Lustosa */}
          <div className="glass-panel-glow p-6 sm:p-8 rounded-3xl border-2 border-emerald-500/40 bg-emerald-950/10 flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">O Método Eduardo Lustosa</h3>
                    <span className="text-xs text-emerald-400 font-medium">Testado em +7.000 alunos e dezenas de academias</span>
                  </div>
                </div>
                <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold uppercase">
                  Recomendado
                </span>
              </div>

              <div className="space-y-4">
                {comparisons.map((c, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-900/80 border border-emerald-500/30 space-y-1 shadow-sm">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                      {c.criterio}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      {c.lustosa}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 relative z-10">
              <button
                onClick={onOpenModal}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-emerald-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-5 h-5" />
                <span>Quero Implementar Esse Método na Minha Academia</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
