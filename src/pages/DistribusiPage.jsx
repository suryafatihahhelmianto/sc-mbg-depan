"use client";

import { useState } from "react";
import { FiPlus, FiEdit2, FiTrash2, FiSearch } from "react-icons/fi";
import { FiTruck, FiPackage, FiCheckCircle } from "react-icons/fi";
import DistribusiForm from "../components/DistribusiForms";

export default function DistribusiPage() {
  const [distribusi, setDistribusi] = useState([
    {
      id: 1,
      nomorPengiriman: "DST-001",
      lokasi: "Jakarta Pusat",
      tanggal: "2024-01-15",
      jumlahProduk: 150,
      status: "Terkirim",
    },
    {
      id: 2,
      nomorPengiriman: "DST-002",
      lokasi: "Bandung",
      tanggal: "2024-01-16",
      jumlahProduk: 200,
      status: "Dalam Perjalanan",
    },
    {
      id: 3,
      nomorPengiriman: "DST-003",
      lokasi: "Surabaya",
      tanggal: "2024-01-17",
      jumlahProduk: 180,
      status: "Pending",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDistribusi = distribusi.filter(
    (d) =>
      d.nomorPengiriman.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.lokasi.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddDistribusi = (newDistribusi) => {
    if (editingId) {
      setDistribusi(
        distribusi.map((d) =>
          d.id === editingId ? { ...newDistribusi, id: editingId } : d
        )
      );
      setEditingId(null);
    } else {
      setDistribusi([...distribusi, { ...newDistribusi, id: Date.now() }]);
    }
    setShowForm(false);
  };

  const handleDeleteDistribusi = (id) => {
    setDistribusi(distribusi.filter((d) => d.id !== id));
  };

  const handleEditDistribusi = (distribusiItem) => {
    setEditingId(distribusiItem.id);
    setShowForm(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Terkirim":
        return "bg-green-100/80 text-green-700 border-green-200";
      case "Dalam Perjalanan":
        return "bg-blue-100/80 text-blue-700 border-blue-200";
      case "Pending":
        return "bg-yellow-100/80 text-yellow-700 border-yellow-200";
      default:
        return "bg-gray-100/80 text-gray-700 border-gray-200";
    }
  };

  const stats = [
    {
      label: "Total Distribusi",
      value: distribusi.length,
      icon: FiTruck,
      color: "from-cyan-400 to-blue-500",
    },
    {
      label: "Dalam Perjalanan",
      value: distribusi.filter((d) => d.status === "Dalam Perjalanan").length,
      icon: FiPackage,
      color: "from-blue-400 to-cyan-500",
    },
    {
      label: "Terkirim",
      value: distribusi.filter((d) => d.status === "Terkirim").length,
      icon: FiCheckCircle,
      color: "from-teal-400 to-green-500",
    },
  ];

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Manajemen Distribusi
          </h1>
          <p className="text-slate-600">
            Kelola pengiriman dan distribusi produk MBG
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/90 border border-white/20 rounded-2xl p-6 hover:bg-white/95 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-600 text-sm font-medium mb-1">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold bg-gradient-to-r {stat.color} bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`bg-gradient-to-br ${stat.color} p-3 rounded-xl`}
                  >
                    <Icon className="text-white text-2xl" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Search and Add Button */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari nomor pengiriman atau lokasi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 backdrop-blur-xl bg-white/90 border border-white/20 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            />
          </div>
          <button
            onClick={() => {
              setEditingId(null);
              setShowForm(true);
            }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <FiPlus /> Tambah Distribusi
          </button>
        </div>

        {/* Table */}
        <div className="backdrop-blur-xl bg-white/90 border border-white/20 rounded-2xl overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-50 to-blue-50 border-b border-white/20">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Nomor Pengiriman
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Lokasi Tujuan
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Tanggal
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Jumlah Produk
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredDistribusi.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-white/10 hover:bg-cyan-50/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-slate-800 font-medium">
                      {item.nomorPengiriman}
                    </td>
                    <td className="px-6 py-4 text-slate-700">{item.lokasi}</td>
                    <td className="px-6 py-4 text-slate-700">{item.tanggal}</td>
                    <td className="px-6 py-4 text-slate-700">
                      {item.jumlahProduk} unit
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditDistribusi(item)}
                          className="p-2 hover:bg-blue-100 rounded-lg transition-colors text-blue-600"
                        >
                          <FiEdit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteDistribusi(item.id)}
                          className="p-2 hover:bg-red-100 rounded-lg transition-colors text-red-600"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Form Modal */}
        {showForm && (
          <DistribusiForm
            onClose={() => {
              setShowForm(false);
              setEditingId(null);
            }}
            onSubmit={handleAddDistribusi}
            editingData={
              editingId ? distribusi.find((d) => d.id === editingId) : null
            }
          />
        )}
      </div>
    </div>
  );
}
