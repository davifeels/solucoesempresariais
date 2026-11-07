import React, { useState, useEffect } from 'react'
import { Calendar, Clock, Video } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#030514]/90 backdrop-blur-2xl border-b border-white/[0.08] py-2.5 sm:py-3 shadow-2xl' 
        : 'bg-[#030514]/65 backdrop-blur-md border-b border-white/[0.05] py-3 sm:py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        
        {/* Brand Title */}
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
          <div className="w-1.5 sm:w-2 h-4 sm:h-5 rounded-full bg-gradient-to-b from-amber-400 to-emerald-500 shrink-0" />
          <span className="font-display font-extrabold text-[11px] sm:text-xs md:text-sm tracking-[0.14em] sm:tracking-widest text-white uppercase truncate">
            EXCLUSIVO PARA DONOS DE ACADEMIA
          </span>
        </div>

        {/* Compact Mobile Event Pill */}
        <div className="flex md:hidden items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[10px] font-mono text-amber-300 shrink-0">
          <Calendar className="w-3 h-3 text-amber-400" />
          <span>14/07 • 13H</span>
        </div>

        {/* Desktop Event Info Right */}
        <div className="hidden md:flex items-center gap-4 lg:gap-5 text-xs font-mono text-slate-300 shrink-0">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <strong>14/07 • TERÇA-FEIRA</strong>
          </span>
          <span className="text-slate-700">|</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <strong>13H</strong>
          </span>
          <span className="text-slate-700">|</span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <Video className="w-3.5 h-3.5" />
            <strong>MEET APENAS DONOS DE ACADEMIA</strong>
          </span>
        </div>

      </div>
    </header>
  )
}
