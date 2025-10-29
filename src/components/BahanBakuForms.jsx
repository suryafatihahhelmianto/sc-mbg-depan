"use client"

import { useState } from "react"
import { FiX } from "react-icons/fi"

export default function BahanBakuForm({ onSubmit, onCancel, initialData }) {
  const [formData, setFormData] = useState(
    initialData || {
      nama: "",
      kategori: "Biji-bijian",
      stok: "",
      satuan: "kg",
      harga: "",
    },
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "stok" || name === "harga" ? Number.parseInt(value) || "" : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.nama && formData.stok && formData.harga) {
      onSubmit(formData)
    }
  }

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-white/60 shadow-2xl p-8 w-full max-w-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800">{initialData ? "Edit Bahan Baku" : "Tambah Bahan Baku"}</h2>
        <button onClick={onCancel} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <FiX className="w-5 h-5 text-slate-600" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Nama Bahan</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="Contoh: Beras Putih"
            className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Kategori</label>
          <select
            name="kategori"
            value={formData.kategori}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
          >
            <option>Biji-bijian</option>
            <option>Protein</option>
            <option>Minyak</option>
            <option>Bumbu</option>
            <option>Sayuran</option>
            <option>Buah</option>
            <option>Lainnya</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Stok</label>
            <input
              type="number"
              name="stok"
              value={formData.stok}
              onChange={handleChange}
              placeholder="0"
              className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Satuan</label>
            <select
              name="satuan"
              value={formData.satuan}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            >
              <option>kg</option>
              <option>gram</option>
              <option>liter</option>
              <option>butir</option>
              <option>box</option>
              <option>pack</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Harga per Unit (Rp)</label>
          <input
            type="number"
            name="harga"
            value={formData.harga}
            onChange={handleChange}
            placeholder="0"
            className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            required
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium"
          >
            Batal
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all font-medium"
          >
            {initialData ? "Simpan Perubahan" : "Tambah"}
          </button>
        </div>
      </form>
    </div>
  )
}
