import {
  FiHome,
  FiBox,
  FiTruck,
  FiUsers,
  FiBarChart3,
  FiSettings,
} from "react-icons/fi";

export default function Sidebar({ isOpen, setIsOpen }) {
  const menuItems = [
    { icon: FiHome, label: "Dasbor Utama", id: "dashboard" },
    { icon: FiBox, label: "Bahan Baku", id: "bahan-baku" },
    { icon: FiTruck, label: "Produksi", id: "produksi" },
    { icon: FiTruck, label: "Distribusi", id: "distribusi" },
    { icon: FiUsers, label: "Pengguna", id: "pengguna" },
    { icon: FiBarChart3, label: "Laporan", id: "laporan" },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300 bg-gradient-to-b from-white/90 to-cyan-50/90 backdrop-blur-xl border-r border-white/60 flex flex-col p-4 overflow-y-auto shadow-sm`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center mb-8 h-12">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-lg hover:shadow-xl transition-shadow">
          M
        </div>
        {isOpen && (
          <span className="ml-3 font-bold text-slate-800 text-lg">MBG</span>
        )}
      </div>

      {/* Menu Items */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-slate-600 hover:text-slate-900 transition-all duration-200 hover:bg-white/60 group"
          >
            <item.icon className="w-5 h-5 flex-shrink-0 group-hover:text-teal-600 transition-colors" />
            {isOpen && (
              <span className="text-sm font-medium">{item.label}</span>
            )}
          </button>
        ))}
      </nav>

      {/* Settings */}
      <button className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-slate-600 hover:text-slate-900 transition-all duration-200 hover:bg-white/60 group mt-auto">
        <FiSettings className="w-5 h-5 flex-shrink-0 group-hover:text-teal-600 transition-colors" />
        {isOpen && <span className="text-sm font-medium">Pengaturan</span>}
      </button>
    </div>
  );
}
