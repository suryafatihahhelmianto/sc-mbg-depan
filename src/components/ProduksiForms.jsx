"use client";

import { useState } from "react";
import { FiX } from "react-icons/fi";

export default function ProduksiForm({ onSubmit, onCancel, initialData }) {
  const [formData, setFormData] = useState(
    initialData || {
      nama: "",
      status: "Pending",
      tanggal: new Date().toISOString().split("T")[0],
      jumlah: "",
      satuan: "porsi",
      penanggungJawab: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "jumlah" ? Number.parseInt(value) || "" : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nama && formData.jumlah && formData.penanggungJawab) {
      onSubmit(formData);
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-2xl rounded-2xl border border-white/60 p-8 shadow-2xl w-full max-w-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          {initialData ? "Edit Produksi" : "Tambah Produksi"}
        </h2>
        <button
          onClick={onCancel}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600"
        >
          <FiX className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Nama Produksi
          </label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="Contoh: Nasi Kuning MBG"
            className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            >
              <option value="Pending">Pending</option>
              <option value="Proses">Proses</option>
              <option value="Selesai">Selesai</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Tanggal
            </label>
            <input
              type="date"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Jumlah
            </label>
            <input
              type="number"
              name="jumlah"
              value={formData.jumlah}
              onChange={handleChange}
              placeholder="0"
              className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Satuan
            </label>
            <select
              name="satuan"
              value={formData.satuan}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            >
              <option value="porsi">Porsi</option>
              <option value="kg">Kg</option>
              <option value="liter">Liter</option>
              <option value="box">Box</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Penanggung Jawab
          </label>
          <input
            type="text"
            name="penanggungJawab"
            value={formData.penanggungJawab}
            onChange={handleChange}
            placeholder="Nama penanggung jawab"
            className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            required
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-2 bg-slate-200/50 text-slate-700 rounded-lg hover:bg-slate-300/50 transition-colors font-medium"
          >
            Batal
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
          >
            {initialData ? "Update" : "Tambah"}
          </button>
        </div>
      </form>
    </div>
  );
}
