"use client";

import { useState } from "react";
import { FiDownload, FiFilter, FiCalendar } from "react-icons/fi";

export default function LaporanPage() {
  const [filterType, setFilterType] = useState("bulanan");
  const [selectedMonth, setSelectedMonth] = useState("2024-01");

  const reportData = [
    {
      id: 1,
      judul: "Laporan Produksi Bulanan",
      periode: "Januari 2024",
      status: "Selesai",
      tanggal: "2024-01-31",
      file: "laporan-produksi-jan-2024.pdf",
    },
    {
      id: 2,
      judul: "Laporan Distribusi Bulanan",
      periode: "Januari 2024",
      status: "Selesai",
      tanggal: "2024-01-31",
      file: "laporan-distribusi-jan-2024.pdf",
    },
    {
      id: 3,
      judul: "Laporan Inventori Bahan Baku",
      periode: "Januari 2024",
      status: "Selesai",
      tanggal: "2024-01-30",
      file: "laporan-inventori-jan-2024.pdf",
    },
    {
      id: 4,
      judul: "Laporan Kinerja Pengguna",
      periode: "Januari 2024",
      status: "Proses",
      tanggal: "2024-01-28",
      file: "laporan-kinerja-jan-2024.pdf",
    },
  ];

  const stats = [
    { label: "Total Laporan", value: "24", icon: "📊" },
    { label: "Laporan Selesai", value: "22", icon: "✓" },
    { label: "Laporan Proses", value: "2", icon: "⏳" },
  ];

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Laporan</h1>
          <p className="text-slate-600">Kelola dan unduh laporan sistem MBG</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl p-6 hover:bg-white/90 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">
                    {stat.value}
                  </p>
                </div>
                <div className="text-4xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Chart Placeholder 1 */}
          <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Tren Produksi
            </h3>
            <div className="h-64 bg-gradient-to-br from-cyan-100/30 to-teal-100/30 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📈</div>
                <p className="text-slate-600">
                  Grafik tren produksi 6 bulan terakhir
                </p>
              </div>
            </div>
          </div>

          {/* Chart Placeholder 2 */}
          <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Distribusi per Wilayah
            </h3>
            <div className="h-64 bg-gradient-to-br from-cyan-100/30 to-teal-100/30 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="text-slate-600">Distribusi produk per wilayah</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mt-6 backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <FiFilter className="inline mr-2" />
                Tipe Laporan
              </label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-slate-800"
              >
                <option value="bulanan">Bulanan</option>
                <option value="mingguan">Mingguan</option>
                <option value="tahunan">Tahunan</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <FiCalendar className="inline mr-2" />
                Periode
              </label>
              <input
                type="month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-slate-800"
              />
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
              Terapkan Filter
            </button>
          </div>
        </div>

        {/* Reports Table */}
        <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20 bg-gradient-to-r from-cyan-500/10 to-teal-500/10">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-800">
                    Judul Laporan
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-800">
                    Periode
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-800">
                    Tanggal
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-800">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-800">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report) => (
                  <tr
                    key={report.id}
                    className="border-b border-white/10 hover:bg-white/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-slate-800 font-medium">
                      {report.judul}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {report.periode}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {new Date(report.tanggal).toLocaleDateString("id-ID")}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          report.status === "Selesai"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium">
                        <FiDownload size={16} />
                        Unduh
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
