import {
  FiHome,
  FiBox,
  FiTruck,
  FiUsers,
  FiBarChart,
  FiSettings,
} from "react-icons/fi";

export default function Sidebar({ isOpen, setIsOpen }) {
  const menuItems = [
    { icon: FiHome, label: "Dasbor Utama", id: "dashboard" },
    { icon: FiBox, label: "Bahan Baku", id: "bahan-baku" },
    { icon: FiTruck, label: "Produksi", id: "produksi" },
    { icon: FiTruck, label: "Distribusi", id: "distribusi" },
    { icon: FiUsers, label: "Pengguna", id: "pengguna" },
    { icon: FiBarChart, label: "Laporan", id: "laporan" },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300 bg-gradient-to-b from-slate-800/40 to-teal-900/40 backdrop-blur-xl border-r border-white/10 flex flex-col p-4 overflow-y-auto`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center mb-8 h-12">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
          M
        </div>
        {isOpen && (
          <span className="ml-3 font-bold text-white text-lg">MBG</span>
        )}
      </div>

      {/* Menu Items */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-white/70 hover:text-white transition-all duration-200 hover:bg-white/10 group"
          >
            <item.icon className="w-5 h-5 flex-shrink-0 group-hover:text-cyan-400 transition-colors" />
            {isOpen && (
              <span className="text-sm font-medium">{item.label}</span>
            )}
          </button>
        ))}
      </nav>

      {/* Settings */}
      <button className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-white/70 hover:text-white transition-all duration-200 hover:bg-white/10 group mt-auto">
        <FiSettings className="w-5 h-5 flex-shrink-0 group-hover:text-cyan-400 transition-colors" />
        {isOpen && <span className="text-sm font-medium">Pengaturan</span>}
      </button>
    </div>
  );
}
