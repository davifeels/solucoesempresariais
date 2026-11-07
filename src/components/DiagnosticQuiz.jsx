import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import { ArrowRight, Sparkles, Trophy, RotateCcw, Dumbbell, Building2, Users, Flame, ShieldAlert, TrendingUp } from 'lucide-react'

export default function DiagnosticQuiz({ onOpenModalWithData }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState({ tipo: '', gargalo: '', meta: '' })
  const [completed, setCompleted] = useState(false)

  const stepsData = [
    {
      step: 1,
      title: "01. Qual é o formato da sua operação hoje?",
      subtitle: "Selecione o perfil para personalizar seu diagnóstico para o Meet de 14/07 às 13h:",
      options: [
        { id: "bairro", code: "01", title: "Academias de bairro", desc: "Academias tradicionais e familiares que buscam crescer mesmo com a chegada das low costs." },
        { id: "full_service", code: "02", title: "Academias full service", desc: "Academias de múltiplos serviços que querem adquirir novos alunos e expandir a operação." },
        { id: "studio", code: "03", title: "Studios de personal trainer", desc: "Atendimento diferenciado que busca sair da estagnação e conquistar lucro real." },
        { id: "rede", code: "04", title: "2 ou mais unidades", desc: "Operação que já possui mais de uma unidade e busca padronização e escala." }
      ]
    },
    {
      step: 2,
      title: "02. Qual é o principal desafio travando o seu faturamento?",
      subtitle: "Qual dessas situações você quer resolver nos próximos 30 dias?",
      options: [
        { id: "concorrencia", code: "A", title: "Perda de alunos para a concorrência", desc: "Redes low cost ou concorrentes próximos forçando guerra de preços." },
        { id: "desconto", code: "B", title: "Precisar dar desconto para fechar", desc: "Dificuldade em fechar planos sem reduzir margem na recepção." },
        { id: "sazonalidade", code: "C", title: "Sofrer com a sazonalidade do ano", desc: "Faturamento oscila muito e falta previsibilidade todos os meses." },
        { id: "trafego", code: "D", title: "Gastar em anúncios sem retorno real", desc: "Cansado de investir em marketing ou eventos sem sentido que não geram lucro." }
      ]
    },
    {
      step: 3,
      title: "03. Qual é o seu principal objetivo para os próximos meses?",
      subtitle: "Última etapa para liberar seu diagnóstico pré-Meet:",
      options: [
        { id: "30dias", code: "I", title: "Aumentar faturamento e alunos em 30 dias", desc: "Destravar receita imediata usando a estrutura que já tenho hoje." },
        { id: "lucro", code: "II", title: "Multiplicar o lucro líquido do negócio", desc: "Fazer sobrar dinheiro de verdade no caixa todos os meses." },
        { id: "expansao", code: "III", title: "Crescer e abrir novas unidades", desc: "Estruturar processos sólidos para expandir com segurança." }
      ]
    }
  ]

  const handleSelectOption = (value) => {
    if (currentStep === 1) {
      setAnswers(prev => ({ ...prev, tipo: value }))
      setCurrentStep(2)
    } else if (currentStep === 2) {
      setAnswers(prev => ({ ...prev, gargalo: value }))
      setCurrentStep(3)
    } else {
      const finalAnswers = { ...answers, meta: value }
      setAnswers(finalAnswers)
      setCompleted(true)
      try {
        confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } })
      } catch (err) {}
    }
  }

  return (
    <section id="diagnostico" className="py-24 bg-[#030516] border-t border-white/[0.06] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>DIAGNÓSTICO DE PERFIL // PRÉ-MEET 14/07 ÀS 13H</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Veja se sua Academia está pronta para o <span className="text-gradient-emerald">Salto de 30 Dias</span>
          </h2>
        </div>

        {!completed ? (
          <div className="glass-panel p-6 sm:p-10 rounded-[2rem] border border-white/10 space-y-6">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/10 pb-4">
              <span>ETAPA 0{currentStep} DE 03</span>
              <span className="text-amber-400 font-bold">{Math.round((currentStep / 3) * 100)}% COMPLETO</span>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-black text-white">
                {stepsData[currentStep - 1].title}
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                {stepsData[currentStep - 1].subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {stepsData[currentStep - 1].options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.title)}
                  className="text-left p-5 rounded-2xl bg-[#070C24]/90 hover:bg-[#0B1233] border border-white/10 hover:border-amber-400/60 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/35 font-mono text-xs font-bold text-amber-300">
                        OPÇÃO {opt.code}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {opt.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="glass-panel-gold p-8 sm:p-12 rounded-[2rem] border-2 border-amber-500/45 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mx-auto">
              <Trophy className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/15 px-3.5 py-1 rounded-full border border-emerald-500/30">
                PERFIL 100% COMPATÍVEL COM O MÉTODO
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-black text-white pt-2">
                Você está qualificado para o Meet Exclusivo de 14/07 às 13h
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
              <div className="p-4 rounded-xl bg-[#040717] border border-white/10">
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Seu Modelo:</span>
                <span className="text-sm font-bold text-white block mt-1">{answers.tipo}</span>
              </div>
              <div className="p-4 rounded-xl bg-[#040717] border border-white/10">
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Foco de Resolução:</span>
                <span className="text-sm font-bold text-amber-300 block mt-1">{answers.gargalo}</span>
              </div>
              <div className="p-4 rounded-xl bg-[#040717] border border-white/10">
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Objetivo:</span>
                <span className="text-sm font-bold text-emerald-400 block mt-1">{answers.meta}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenModalWithData({ quizData: answers })}
                className="w-full sm:w-auto px-9 py-4 rounded-full btn-luxury-emerald text-white font-display font-black text-base uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
              >
                <span>Clique aqui e se cadastre</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  setCurrentStep(1)
                  setCompleted(false)
                  setAnswers({ tipo: '', gargalo: '', meta: '' })
                }}
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 py-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Refazer
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
