import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function ObjectionFAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: "Minha academia é pequena / de bairro, esse método funciona para o meu tamanho?",
      a: "Sim, e é exatamente onde o impacto é mais rápido. O próprio Eduardo começou com 300 alunos em uma academia tradicional. Academias de bairro têm a maior arma do mundo: proximidade e comunidade com o aluno — algo que redes bilionárias impessoais jamais conseguirão entregar quando você aplica os processos certos."
    },
    {
      q: "Tem uma grande rede Low Cost aberta perto de mim. Como não perder alunos para o preço baixo deles?",
      a: "Tentando brigar por preço, você quebra. As redes Low Cost cobram barato porque operam no modelo de volume com catraca lotada e sem acompanhamento. No Método Lustosa, você aprende a posicionar o valor do seu atendimento, criar esteiras de planos onde o aluno percebe que pagar mais barato no concorrente é na verdade perder dinheiro e saúde."
    },
    {
      q: "Minha equipe de recepção é fraca e muda muito. Como fazer eles fecharem mais matrículas?",
      a: "O problema nunca é a pessoa da recepção, e sim a falta de um Script de Fechamento Passo a Passo. Nós entregamos os roteiros exatos para recepção: como recepcionar, qual pergunta fazer para descobrir o objetivo do aluno, e como conduzir o fechamento para o plano anual sem gaguejar e sem ceder a descontos."
    },
    {
      q: "Eu preciso gastar dinheiro com anúncios no Instagram ou contratar agência?",
      a: "Não! A grande promessa e realidade do Método Lustosa é aumentar faturamento e alunos SEM depender de gastar rios de dinheiro em tráfego. Primeiro extraímos todo o potencial de renovação e indicação da sua base atual. Anúncio só entra depois que sua casa está 100% lucrativa e arrumada."
    },
    {
      q: "Em quanto tempo eu começo a sentir a diferença no faturamento?",
      a: "As primeiras melhorias em fechamento de balcão e contenção de evasão já são sentidas nos primeiros 7 a 15 dias após a aplicação dos scripts e do alinhamento da equipe. Em até 30 dias você terá clareza total dos novos números de caixa."
    }
  ]

  return (
    <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider">
          <HelpCircle className="w-4 h-4 text-emerald-400" />
          <span>Dúvidas Frequentes</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Perguntas Frequentes de Donos de Academia
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div 
              key={index}
              className={`rounded-2xl transition-all border ${
                isOpen ? 'bg-slate-900 border-emerald-500/40 shadow-lg' : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/80 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
