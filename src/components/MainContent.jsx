import SummaryCard from "./SummaryCard";
import ChartPlaceholder from "./ChartPlaceholder";
import { FiBox, FiTruck, FiCheckCircle } from "react-icons/fi";

export default function MainContent() {
  const summaryData = [
    {
      title: "Jumlah Bahan Baku",
      value: "2,450",
      icon: FiBox,
      gradient: "from-green-400 to-blue-500",
    },
    {
      title: "Paket Diproduksi",
      value: "1,280",
      icon: FiTruck,
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      title: "Paket Terkirim",
      value: "980",
      icon: FiCheckCircle,
      gradient: "from-emerald-400 to-teal-500",
    },
  ];

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {summaryData.map((item, index) => (
            <SummaryCard key={index} {...item} />
          ))}
        </div>

        {/* Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartPlaceholder className="text-green-800" title="Tren Produksi" />
          <ChartPlaceholder
            className="text-green-800"
            title="Distribusi Wilayah"
          />
        </div>

        {/* Table Section */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
          <h2 className="text-lg font-bold text-green-800 mb-4">
            Aktivitas Terbaru
          </h2>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors"
              >
                <div>
                  <p className="text-green-600 font-medium">
                    Pengiriman #{1000 + item}
                  </p>
                  <p className="text-green-800 text-sm">
                    Ke Wilayah Jakarta Selatan
                  </p>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-green-800 rounded-full text-xs font-medium">
                  Terkirim
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
