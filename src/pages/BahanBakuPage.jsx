"use client";

import { useState } from "react";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiSearch,
  FiBox,
  FiDatabase,
  FiActivity,
  FiDroplet,
  FiAperture,
  FiFeather,
  FiSmile,
} from "react-icons/fi";
import BahanBakuForm from "../components/BahanBakuForms";

// Map kategori ke icon & warna
const kategoriStyles = {
  "Biji-bijian": { icon: FiDatabase, color: "text-amber-600 bg-amber-100/70" },
  Protein: { icon: FiActivity, color: "text-rose-600 bg-rose-100/70" },
  Minyak: { icon: FiDroplet, color: "text-teal-600 bg-teal-100/70" },
  Bumbu: { icon: FiAperture, color: "text-purple-600 bg-purple-100/70" },
  Sayuran: { icon: FiFeather, color: "text-green-600 bg-green-100/70" },
  "Buah-buahan": { icon: FiSmile, color: "text-orange-600 bg-orange-100/70" },
  Default: { icon: FiBox, color: "text-slate-600 bg-slate-100/70" },
};

export default function BahanBakuPage() {
  const [bahanBakuList, setBahanBakuList] = useState([
    {
      id: 1,
      nama: "Beras Putih",
      kategori: "Biji-bijian",
      stok: 5000,
      satuan: "kg",
      harga: 8500,
    },
    {
      id: 2,
      nama: "Telur Ayam",
      kategori: "Protein",
      stok: 2000,
      satuan: "butir",
      harga: 2500,
    },
    {
      id: 3,
      nama: "Minyak Goreng",
      kategori: "Minyak",
      stok: 1500,
      satuan: "liter",
      harga: 12000,
    },
    {
      id: 4,
      nama: "Garam Halus",
      kategori: "Bumbu",
      stok: 800,
      satuan: "kg",
      harga: 5000,
    },
    {
      id: 5,
      nama: "Gula Pasir",
      kategori: "Bumbu",
      stok: 3000,
      satuan: "kg",
      harga: 11000,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredList = bahanBakuList.filter(
    (item) =>
      item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.kategori.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddOrUpdate = (data) => {
    if (editingId) {
      setBahanBakuList(
        bahanBakuList.map((item) =>
          item.id === editingId ? { ...data, id: editingId } : item
        )
      );
      setEditingId(null);
    } else {
      setBahanBakuList([...bahanBakuList, { ...data, id: Date.now() }]);
    }
    setShowForm(false);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setBahanBakuList(bahanBakuList.filter((item) => item.id !== id));
  };

  const editingItem = editingId
    ? bahanBakuList.find((item) => item.id === editingId)
    : null;

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Bahan Baku</h1>
            <p className="text-slate-500 text-sm mt-1">
              Kelola inventori bahan baku untuk produksi MBG
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
            Tambah Bahan Baku
          </button>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <BahanBakuForm
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
              Total Jenis Bahan
            </p>
            <p className="text-3xl font-bold text-slate-800">
              {bahanBakuList.length}
            </p>
          </div>
          <div className="bg-white/50 backdrop-blur-2xl rounded-2xl border border-white/60 p-6 shadow-lg">
            <p className="text-slate-600 text-sm font-medium mb-2">
              Total Stok
            </p>
            <p className="text-3xl font-bold text-slate-800">
              {bahanBakuList
                .reduce((sum, item) => sum + item.stok, 0)
                .toLocaleString("id-ID")}
            </p>
          </div>
          <div className="bg-white/50 backdrop-blur-2xl rounded-2xl border border-white/60 p-6 shadow-lg">
            <p className="text-slate-600 text-sm font-medium mb-2">
              Nilai Inventori
            </p>
            <p className="text-3xl font-bold text-slate-800">
              Rp{" "}
              {bahanBakuList
                .reduce((sum, item) => sum + item.stok * item.harga, 0)
                .toLocaleString("id-ID")}
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Cari bahan baku..."
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
                  Nama Bahan
                </th>
                <th className="text-left py-4 px-4 text-slate-700 font-semibold text-sm">
                  Kategori
                </th>
                <th className="text-left py-4 px-4 text-slate-700 font-semibold text-sm">
                  Stok
                </th>
                <th className="text-left py-4 px-4 text-slate-700 font-semibold text-sm">
                  Harga/Unit
                </th>
                <th className="text-center py-4 px-4 text-slate-700 font-semibold text-sm">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredList.map((item) => {
                const { icon: Icon, color } =
                  kategoriStyles[item.kategori] || kategoriStyles.Default;
                return (
                  <tr
                    key={item.id}
                    className="border-b border-white/40 hover:bg-white/40 transition-colors"
                  >
                    <td className="py-4 px-4 text-slate-800 font-medium">
                      {item.nama}
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${color}`}
                      >
                        <Icon className="w-4 h-4" />
                        {item.kategori}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-800">
                      {item.stok} {item.satuan}
                    </td>
                    <td className="py-4 px-4 text-slate-800 font-medium">
                      Rp {item.harga.toLocaleString("id-ID")}
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
                );
              })}
            </tbody>
          </table>
          {filteredList.length === 0 && (
            <div className="text-center py-8 text-slate-500">
              Tidak ada bahan baku yang ditemukan
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
