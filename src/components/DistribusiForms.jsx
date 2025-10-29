"use client";

import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";

export default function DistribusiForm({ onClose, onSubmit, editingData }) {
  const [formData, setFormData] = useState({
    nomorPengiriman: "",
    lokasi: "",
    tanggal: "",
    jumlahProduk: "",
    status: "Pending",
  });

  useEffect(() => {
    if (editingData) {
      setFormData(editingData);
    }
  }, [editingData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.nomorPengiriman &&
      formData.lokasi &&
      formData.tanggal &&
      formData.jumlahProduk
    ) {
      onSubmit(formData);
      setFormData({
        nomorPengiriman: "",
        lokasi: "",
        tanggal: "",
        jumlahProduk: "",
        status: "Pending",
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="backdrop-blur-xl bg-white/95 border border-white/20 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            {editingData ? "Edit Distribusi" : "Tambah Distribusi"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <FiX size={24} className="text-slate-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Nomor Pengiriman
            </label>
            <input
              type="text"
              name="nomorPengiriman"
              value={formData.nomorPengiriman}
              onChange={handleChange}
              placeholder="DST-001"
              className="w-full px-4 py-2 backdrop-blur-xl bg-white/80 border border-white/20 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Lokasi Tujuan
            </label>
            <input
              type="text"
              name="lokasi"
              value={formData.lokasi}
              onChange={handleChange}
              placeholder="Jakarta Pusat"
              className="w-full px-4 py-2 backdrop-blur-xl bg-white/80 border border-white/20 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Tanggal Pengiriman
            </label>
            <input
              type="date"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleChange}
              className="w-full px-4 py-2 backdrop-blur-xl bg-white/80 border border-white/20 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Jumlah Produk
            </label>
            <input
              type="number"
              name="jumlahProduk"
              value={formData.jumlahProduk}
              onChange={handleChange}
              placeholder="150"
              className="w-full px-4 py-2 backdrop-blur-xl bg-white/80 border border-white/20 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 backdrop-blur-xl bg-white/80 border border-white/20 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            >
              <option value="Pending">Pending</option>
              <option value="Dalam Perjalanan">Dalam Perjalanan</option>
              <option value="Terkirim">Terkirim</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-slate-200 text-slate-800 rounded-lg font-semibold hover:bg-slate-300 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              {editingData ? "Update" : "Tambah"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
