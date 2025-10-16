"use client";

import { FiMenu, FiBell } from "react-icons/fi";

export default function Topbar({ onMenuClick }) {
  return (
    <div className="h-16 bg-gradient-to-r from-white/90 to-cyan-50/90 backdrop-blur-xl border-b border-white/60 flex items-center justify-between px-6 shadow-sm">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-slate-100/60 rounded-lg transition-colors text-slate-600 hover:text-slate-900"
        >
          <FiMenu className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-bold text-slate-800">Dasbor Utama</h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-slate-100/60 rounded-lg transition-colors text-slate-600 hover:text-slate-900 relative">
          <FiBell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="text-right">
            <p className="text-sm font-medium text-slate-800">Admin</p>
            <p className="text-xs text-slate-500">Administrator</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white font-bold shadow-lg">
            A
          </div>
        </div>
      </div>
    </div>
  );
}
