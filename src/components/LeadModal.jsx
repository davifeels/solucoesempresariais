import React, { useState } from 'react'
import { X, Calendar, Clock, Video, CheckCircle2, ShieldCheck, Building2, Phone, User, MapPin, ArrowRight } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function LeadModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    nome: '',
    academia: '',
    whatsapp: '',
    cidade: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    let message = `Olá! Quero confirmar meu cadastro no *MEET APENAS DONOS DE ACADEMIA (14/07 Terça-feira às 13h)*.\n\n`
    message += `*Nome:* ${formData.nome}\n`
    message += `*Academia / Studio:* ${formData.academia}\n`
    message += `*Cidade:* ${formData.cidade}\n`
    message += `*WhatsApp:* ${formData.whatsapp}\n`

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)

      try {
        confetti({
          particleCount: 110,
          spread: 80,
          origin: { y: 0.6 }
        })
      } catch (err) {}

      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://api.whatsapp.com/send?phone=5511999999999&text=${encodedMessage}`
      window.open(whatsappUrl, '_blank')
    }, 800)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-[2rem] glass-panel-gold bg-[#060A1E] border border-amber-500/35 p-5 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.95)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Event Pass Header */}
            <div className="space-y-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-300 text-[11px] font-mono font-bold uppercase tracking-wider">
                <Video className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                MEET APENAS DONOS DE ACADEMIA
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
                Garanta sua vaga gratuita no encontro fechado
              </h3>

              {/* Mini Event Pill */}
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-amber-300 font-bold">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  14/07 • TERÇA-FEIRA
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  ÀS 13H (AO VIVO NO MEET)
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Digite seu nome..."
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#040717] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                  Nome da Academia ou Studio
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Academia Ultra Fit"
                  value={formData.academia}
                  onChange={(e) => setFormData({ ...formData, academia: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#040717] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    Seu WhatsApp (com DDD)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#040717] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    Cidade / Estado
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Brasília / DF"
                    value={formData.cidade}
                    onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#040717] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl btn-luxury-emerald text-white font-display font-black text-base uppercase tracking-wider hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Confirmando Inscrição...</span>
                  ) : (
                    <>
                      <span>Confirmar Vaga no Meet (14/07 às 13h)</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>O link exclusivo do Google Meet será enviado para o seu WhatsApp.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-black text-white">Cadastro Confirmado!</h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
              Sua vaga para o <strong>MEET APENAS DONOS DE ACADEMIA (14/07 • Terça-feira às 13h)</strong> está pré-reservada para a <strong>{formData.academia}</strong>.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors"
            >
              Voltar para a Página
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
