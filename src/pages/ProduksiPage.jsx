"use client";

import { useState } from "react";
import { FiPlus, FiEdit2, FiTrash2, FiSearch } from "react-icons/fi";
import ProduksiForm from "../components/ProduksiForms";

export default function ProduksiPage() {
  const [produksiList, setProduksiList] = useState([
    {
      id: 1,
      nama: "Nasi Kuning MBG",
      status: "Selesai",
      tanggal: "2025-10-28",
      jumlah: 500,
      satuan: "porsi",
      penanggungJawab: "Budi Santoso",
    },
    {
      id: 2,
      nama: "Sayur Asem MBG",
      status: "Proses",
      tanggal: "2025-10-29",
      jumlah: 300,
      satuan: "porsi",
      penanggungJawab: "Siti Nurhaliza",
    },
    {
      id: 3,
      nama: "Ikan Goreng MBG",
      status: "Pending",
      tanggal: "2025-10-30",
      jumlah: 200,
      satuan: "porsi",
      penanggungJawab: "Ahmad Wijaya",
    },
    {
      id: 4,
      nama: "Tahu Goreng MBG",
      status: "Selesai",
      tanggal: "2025-10-27",
      jumlah: 400,
      satuan: "porsi",
      penanggungJawab: "Dewi Lestari",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredList = produksiList.filter(
    (item) =>
      item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.penanggungJawab.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddOrUpdate = (data) => {
    if (editingId) {
      setProduksiList(
        produksiList.map((item) =>
          item.id === editingId ? { ...data, id: editingId } : item
        )
      );
      setEditingId(null);
    } else {
      setProduksiList([...produksiList, { ...data, id: Date.now() }]);
    }
    setShowForm(false);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setProduksiList(produksiList.filter((item) => item.id !== id));
  };

  const editingItem = editingId
    ? produksiList.find((item) => item.id === editingId)
    : null;

  const getStatusColor = (status) => {
    switch (status) {
      case "Selesai":
        return "bg-green-100/60 text-green-700";
      case "Proses":
        return "bg-blue-100/60 text-blue-700";
      case "Pending":
        return "bg-yellow-100/60 text-yellow-700";
      default:
        return "bg-slate-100/60 text-slate-700";
    }
  };

  const totalProduksi = produksiList.reduce(
    (sum, item) => sum + item.jumlah,
    0
  );
  const produksiSelesai = produksiList.filter(
    (item) => item.status === "Selesai"
  ).length;
  const produksiProses = produksiList.filter(
    (item) => item.status === "Proses"
  ).length;

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Produksi</h1>
            <p className="text-slate-500 text-sm mt-1">
              Kelola proses produksi makanan bergizi gratis
            </p>
          </div>
          <button
            onClick={() => {
              setEditingId(null);
              setShowForm(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
          >
            <FiPlus className="w-5 h-5" />
            Tambah Produksi
          </button>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <ProduksiForm
              onSubmit={handleAddOrUpdate}
              onCancel={() => {
                setShowForm(false);
                setEditingId(null);
              }}
              initialData={editingItem}
            />
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/50 backdrop-blur-2xl rounded-2xl border border-white/60 p-6 shadow-lg">
            <p className="text-slate-600 text-sm font-medium mb-2">
              Total Produksi
            </p>
            <p className="text-3xl font-bold text-slate-800">
              {totalProduksi.toLocaleString("id-ID")}
            </p>
            <p className="text-xs text-slate-500 mt-2">porsi</p>
          </div>
          <div className="bg-white/50 backdrop-blur-2xl rounded-2xl border border-white/60 p-6 shadow-lg">
            <p className="text-slate-600 text-sm font-medium mb-2">
              Produksi Selesai
            </p>
            <p className="text-3xl font-bold text-green-600">
              {produksiSelesai}
            </p>
            <p className="text-xs text-slate-500 mt-2">batch</p>
          </div>
          <div className="bg-white/50 backdrop-blur-2xl rounded-2xl border border-white/60 p-6 shadow-lg">
            <p className="text-slate-600 text-sm font-medium mb-2">
              Produksi Proses
            </p>
            <p className="text-3xl font-bold text-blue-600">{produksiProses}</p>
            <p className="text-xs text-slate-500 mt-2">batch</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Cari produksi atau penanggung jawab..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white/50 backdrop-blur-xl border border-white/60 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
          />
        </div>

        {/* Table */}
        <div className="bg-white/50 backdrop-blur-2xl rounded-2xl border border-white/60 p-6 shadow-lg overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/60">
                <th className="text-left py-4 px-4 text-slate-700 font-semibold text-sm">
                  Nama Produksi
                </th>
                <th className="text-left py-4 px-4 text-slate-700 font-semibold text-sm">
                  Status
                </th>
                <th className="text-left py-4 px-4 text-slate-700 font-semibold text-sm">
                  Tanggal
                </th>
                <th className="text-left py-4 px-4 text-slate-700 font-semibold text-sm">
                  Jumlah
                </th>
                <th className="text-left py-4 px-4 text-slate-700 font-semibold text-sm">
                  Penanggung Jawab
                </th>
                <th className="text-center py-4 px-4 text-slate-700 font-semibold text-sm">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredList.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-white/40 hover:bg-white/40 transition-colors"
                >
                  <td className="py-4 px-4 text-slate-800 font-medium">
                    {item.nama}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    {new Date(item.tanggal).toLocaleDateString("id-ID")}
                  </td>
                  <td className="py-4 px-4 text-slate-800">
                    {item.jumlah} {item.satuan}
                  </td>
                  <td className="py-4 px-4 text-slate-800">
                    {item.penanggungJawab}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-2 text-teal-600 hover:bg-teal-100/50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <FiEdit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 text-red-600 hover:bg-red-100/50 rounded-lg transition-colors"
                        title="Hapus"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredList.length === 0 && (
            <div className="text-center py-8 text-slate-500">
              Tidak ada produksi yang ditemukan
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
