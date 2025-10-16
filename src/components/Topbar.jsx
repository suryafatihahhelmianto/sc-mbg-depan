"use client";

import { FiMenu, FiBell } from "react-icons/fi";

export default function Topbar({ onMenuClick }) {
  return (
    <div className="h-16 bg-gradient-to-r from-slate-800/30 to-teal-800/30 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/70 hover:text-white"
        >
          <FiMenu className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-bold text-white">Dasbor Utama</h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/70 hover:text-white relative">
          <FiBell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-white/10">
          <div className="text-right">
            <p className="text-sm font-medium text-white">Admin</p>
            <p className="text-xs text-white/50">Administrator</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-white font-bold shadow-lg">
            A
          </div>
        </div>
      </div>
    </div>
  );
}
