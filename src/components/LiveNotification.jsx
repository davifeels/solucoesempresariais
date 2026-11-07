import React, { useState, useEffect } from 'react'
import { TrendingUp, Users, CheckCircle } from 'lucide-react'

export default function LiveNotification() {
  const [notification, setNotification] = useState(null)
  const [visible, setVisible] = useState(false)

  const notifications = [
    { text: "Dono de Academia em Campinas/SP simulou R$ 68.400 em vazamento de caixa.", time: "há 3 minutos", icon: TrendingUp, color: "text-rose-400" },
    { text: "Studio Personal em Belo Horizonte/MG solicitou diagnóstico estratégico.", time: "há 6 minutos", icon: CheckCircle, color: "text-emerald-400" },
    { text: "Academia em Curitiba/PR recuperou 42 alunos cancelados no 1º mês.", time: "há 11 minutos", icon: Users, color: "text-blue-400" },
    { text: "Gestor de Academia Full Service em Goiânia/GO agendou sessão VIP.", time: "há 14 minutos", icon: CheckCircle, color: "text-emerald-400" },
    { text: "Academia de Bairro em Porto Alegre/RS aumentou o ticket de R$ 110 para R$ 180.", time: "há 18 minutos", icon: TrendingUp, color: "text-emerald-400" }
  ]

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setNotification(notifications[index])
      setVisible(true)

      // Hide after 5 seconds
      setTimeout(() => {
        setVisible(false)
      }, 5000)

      index = (index + 1) % notifications.length
    }, 11000)

    // Initial trigger after 4s
    const initialTimer = setTimeout(() => {
      setNotification(notifications[0])
      setVisible(true)
      setTimeout(() => setVisible(false), 5000)
    }, 3500)

    return () => {
      clearInterval(interval)
      clearTimeout(initialTimer)
    }
  }, [])

  if (!notification || !visible) return null

  const IconComponent = notification.icon

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm hidden sm:block animate-bounce-short">
      <div className="glass-panel p-3.5 rounded-2xl border border-slate-700/80 shadow-2xl flex items-start gap-3 bg-[#0A0F1D]/90">
        <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
          <IconComponent className={`w-4 h-4 ${notification.color}`} />
        </div>
        <div>
          <p className="text-xs text-slate-200 font-medium leading-snug">
            {notification.text}
          </p>
          <span className="text-[10px] text-slate-400 mt-1 block font-mono">
            {notification.time} • Verificado
          </span>
        </div>
      </div>
    </div>
  )
}
