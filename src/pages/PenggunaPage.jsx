"use client";

import { useState } from "react";
import { FiPlus, FiSearch, FiEdit2, FiTrash2, FiX } from "react-icons/fi";
import { FiUsers, FiUserCheck, FiUserX } from "react-icons/fi";
import PenggunaForm from "../components/PenggunaForms";

export default function PenggunaPage() {
  const [pengguna, setPengguna] = useState([
    {
      id: 1,
      nama: "Budi Santoso",
      email: "budi@mbg.com",
      telepon: "081234567890",
      role: "Admin",
      status: "Aktif",
      bergabung: "2024-01-15",
    },
    {
      id: 2,
      nama: "Siti Nurhaliza",
      email: "siti@mbg.com",
      telepon: "082345678901",
      role: "Manager",
      status: "Aktif",
      bergabung: "2024-02-20",
    },
    {
      id: 3,
      nama: "Ahmad Wijaya",
      email: "ahmad@mbg.com",
      telepon: "083456789012",
      role: "Staff",
      status: "Aktif",
      bergabung: "2024-03-10",
    },
    {
      id: 4,
      nama: "Rina Kusuma",
      email: "rina@mbg.com",
      telepon: "084567890123",
      role: "Staff",
      status: "Nonaktif",
      bergabung: "2024-01-05",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    role: "Staff",
    status: "Aktif",
  });

  const filteredPengguna = pengguna.filter(
    (p) =>
      p.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPengguna = pengguna.length;
  const totalAktif = pengguna.filter((p) => p.status === "Aktif").length;
  const totalNonaktif = pengguna.filter((p) => p.status === "Nonaktif").length;

  const handleAddClick = () => {
    setEditingId(null);
    setFormData({
      nama: "",
      email: "",
      telepon: "",
      role: "Staff",
      status: "Aktif",
    });
    setShowForm(true);
  };

  const handleEditClick = (p) => {
    setEditingId(p.id);
    setFormData({
      nama: p.nama,
      email: p.email,
      telepon: p.telepon,
      role: p.role,
      status: p.status,
    });
    setShowForm(true);
  };

  const handleDeleteClick = (id) => {
    setPengguna(pengguna.filter((p) => p.id !== id));
  };

  const handleSave = (data) => {
    if (editingId) {
      setPengguna(
        pengguna.map((p) => (p.id === editingId ? { ...p, ...data } : p))
      );
    } else {
      setPengguna([
        ...pengguna,
        {
          id: Math.max(...pengguna.map((p) => p.id), 0) + 1,
          ...data,
          bergabung: new Date().toISOString().split("T")[0],
        },
      ]);
    }
    setShowForm(false);
  };

  const getRoleColor = (role) => {
    switch (role) {
      case "Admin":
        return "bg-red-100/80 text-red-700";
      case "Manager":
        return "bg-blue-100/80 text-blue-700";
      case "Staff":
        return "bg-green-100/80 text-green-700";
      default:
        return "bg-gray-100/80 text-gray-700";
    }
  };

  const getStatusColor = (status) => {
    return status === "Aktif"
      ? "bg-emerald-100/80 text-emerald-700"
      : "bg-slate-100/80 text-slate-700";
  };

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Manajemen Pengguna
            </h1>
            <p className="text-slate-600 mt-1">
              Kelola pengguna dan akses sistem
            </p>
          </div>
          <button
            onClick={handleAddClick}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <FiPlus size={20} />
            Tambah Pengguna
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="backdrop-blur-xl bg-white/90 border border-white/20 rounded-2xl p-6 hover:bg-white/95 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">
                  Total Pengguna
                </p>
                <p className="text-3xl font-bold text-slate-800 mt-2">
                  {totalPengguna}
                </p>
              </div>
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl">
                <FiUsers size={28} className="text-cyan-600" />
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/90 border border-white/20 rounded-2xl p-6 hover:bg-white/95 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">
                  Pengguna Aktif
                </p>
                <p className="text-3xl font-bold text-emerald-600 mt-2">
                  {totalAktif}
                </p>
              </div>
              <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl">
                <FiUserCheck size={28} className="text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/90 border border-white/20 rounded-2xl p-6 hover:bg-white/95 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">
                  Pengguna Nonaktif
                </p>
                <p className="text-3xl font-bold text-slate-600 mt-2">
                  {totalNonaktif}
                </p>
              </div>
              <div className="p-3 bg-gradient-to-br from-slate-500/20 to-gray-500/20 rounded-xl">
                <FiUserX size={28} className="text-slate-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="backdrop-blur-xl bg-white/90 border border-white/20 rounded-2xl p-4">
          <div className="flex items-center gap-3 text-slate-600">
            <FiSearch size={20} />
            <input
              type="text"
              placeholder="Cari berdasarkan nama atau email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent outline-none text-slate-800 placeholder-slate-400"
            />
          </div>
        </div>

        {/* Table */}
        <div className="backdrop-blur-xl bg-white/90 border border-white/20 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Nama
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Telepon
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Bergabung
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPengguna.map((p) => (
                  <tr
                    key={p.id}
                    className="border-b border-white/10 hover:bg-white/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-slate-800 font-medium">
                      {p.nama}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{p.email}</td>
                    <td className="px-6 py-4 text-slate-600">{p.telepon}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getRoleColor(
                          p.role
                        )}`}
                      >
                        {p.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          p.status
                        )}`}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-sm">
                      {p.bergabung}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditClick(p)}
                          className="p-2 hover:bg-blue-100/80 rounded-lg transition-colors duration-200 text-blue-600"
                        >
                          <FiEdit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(p.id)}
                          className="p-2 hover:bg-red-100/80 rounded-lg transition-colors duration-200 text-red-600"
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
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="backdrop-blur-xl bg-white/95 border border-white/20 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-800">
                {editingId ? "Edit Pengguna" : "Tambah Pengguna Baru"}
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="p-1 hover:bg-slate-100 rounded-lg transition-colors duration-200"
              >
                <FiX size={24} className="text-slate-600" />
              </button>
            </div>
            <PenggunaForm
              initialData={formData}
              onSave={handleSave}
              onCancel={() => setShowForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
