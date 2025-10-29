"use client";

import { useState } from "react";
import { FiSave, FiLock, FiBell, FiGlobe, FiDatabase } from "react-icons/fi";

export default function PengaturanPage() {
  const [activeTab, setActiveTab] = useState("profil");
  const [settings, setSettings] = useState({
    namaPerusahaan: "MBG Indonesia",
    email: "admin@mbg.id",
    telepon: "+62 812 3456 7890",
    alamat: "Jl. Merdeka No. 123, Jakarta",
    notifikasiEmail: true,
    notifikasiSMS: false,
    notifikasiPush: true,
    bahasa: "id",
    zona: "Asia/Jakarta",
    backupOtomatis: true,
    frekuensiBackup: "harian",
  });

  const [passwordForm, setPasswordForm] = useState({
    passwordLama: "",
    passwordBaru: "",
    konfirmasiPassword: "",
  });

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handlePasswordChange = (key, value) => {
    setPasswordForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    alert("Pengaturan berhasil disimpan!");
  };

  const handleChangePassword = () => {
    if (passwordForm.passwordBaru !== passwordForm.konfirmasiPassword) {
      alert("Password baru tidak cocok!");
      return;
    }
    alert("Password berhasil diubah!");
    setPasswordForm({
      passwordLama: "",
      passwordBaru: "",
      konfirmasiPassword: "",
    });
  };

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Pengaturan</h1>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 border-b border-white/20">
          {[
            { id: "profil", label: "Profil", icon: FiGlobe },
            { id: "keamanan", label: "Keamanan", icon: FiLock },
            { id: "notifikasi", label: "Notifikasi", icon: FiBell },
            { id: "backup", label: "Backup", icon: FiDatabase },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 font-medium transition-all ${
                  activeTab === tab.id
                    ? "text-teal-600 border-b-2 border-teal-600"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {/* Profil Tab */}
          {activeTab === "profil" && (
            <div className="space-y-6">
              <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold text-slate-800 mb-4">
                  Informasi Perusahaan
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nama Perusahaan
                    </label>
                    <input
                      type="text"
                      value={settings.namaPerusahaan}
                      onChange={(e) =>
                        handleSettingChange("namaPerusahaan", e.target.value)
                      }
                      className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) =>
                        handleSettingChange("email", e.target.value)
                      }
                      className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Telepon
                    </label>
                    <input
                      type="tel"
                      value={settings.telepon}
                      onChange={(e) =>
                        handleSettingChange("telepon", e.target.value)
                      }
                      className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Alamat
                    </label>
                    <textarea
                      value={settings.alamat}
                      onChange={(e) =>
                        handleSettingChange("alamat", e.target.value)
                      }
                      className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      rows="3"
                    />
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold text-slate-800 mb-4">
                  Preferensi Sistem
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Bahasa
                    </label>
                    <select
                      value={settings.bahasa}
                      onChange={(e) =>
                        handleSettingChange("bahasa", e.target.value)
                      }
                      className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="id">Bahasa Indonesia</option>
                      <option value="en">English</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Zona Waktu
                    </label>
                    <select
                      value={settings.zona}
                      onChange={(e) =>
                        handleSettingChange("zona", e.target.value)
                      }
                      className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="Asia/Jakarta">Asia/Jakarta (WIB)</option>
                      <option value="Asia/Makassar">
                        Asia/Makassar (WITA)
                      </option>
                      <option value="Asia/Jayapura">Asia/Jayapura (WIT)</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                <FiSave size={18} />
                Simpan Perubahan
              </button>
            </div>
          )}

          {/* Keamanan Tab */}
          {activeTab === "keamanan" && (
            <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-semibold text-slate-800 mb-6">
                Ubah Password
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Password Lama
                  </label>
                  <input
                    type="password"
                    value={passwordForm.passwordLama}
                    onChange={(e) =>
                      handlePasswordChange("passwordLama", e.target.value)
                    }
                    className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Password Baru
                  </label>
                  <input
                    type="password"
                    value={passwordForm.passwordBaru}
                    onChange={(e) =>
                      handlePasswordChange("passwordBaru", e.target.value)
                    }
                    className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Konfirmasi Password Baru
                  </label>
                  <input
                    type="password"
                    value={passwordForm.konfirmasiPassword}
                    onChange={(e) =>
                      handlePasswordChange("konfirmasiPassword", e.target.value)
                    }
                    className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <button
                  onClick={handleChangePassword}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  <FiLock size={18} />
                  Ubah Password
                </button>
              </div>
            </div>
          )}

          {/* Notifikasi Tab */}
          {activeTab === "notifikasi" && (
            <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-semibold text-slate-800 mb-6">
                Preferensi Notifikasi
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-800">
                      Notifikasi Email
                    </p>
                    <p className="text-sm text-slate-600">
                      Terima notifikasi melalui email
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.notifikasiEmail}
                    onChange={(e) =>
                      handleSettingChange("notifikasiEmail", e.target.checked)
                    }
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-800">Notifikasi SMS</p>
                    <p className="text-sm text-slate-600">
                      Terima notifikasi melalui SMS
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.notifikasiSMS}
                    onChange={(e) =>
                      handleSettingChange("notifikasiSMS", e.target.checked)
                    }
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-800">
                      Notifikasi Push
                    </p>
                    <p className="text-sm text-slate-600">
                      Terima notifikasi push di aplikasi
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.notifikasiPush}
                    onChange={(e) =>
                      handleSettingChange("notifikasiPush", e.target.checked)
                    }
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all mt-4"
                >
                  <FiSave size={18} />
                  Simpan Preferensi
                </button>
              </div>
            </div>
          )}

          {/* Backup Tab */}
          {activeTab === "backup" && (
            <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-semibold text-slate-800 mb-6">
                Pengaturan Backup
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-800">
                      Backup Otomatis
                    </p>
                    <p className="text-sm text-slate-600">
                      Aktifkan backup otomatis data sistem
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.backupOtomatis}
                    onChange={(e) =>
                      handleSettingChange("backupOtomatis", e.target.checked)
                    }
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>
                {settings.backupOtomatis && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Frekuensi Backup
                    </label>
                    <select
                      value={settings.frekuensiBackup}
                      onChange={(e) =>
                        handleSettingChange("frekuensiBackup", e.target.value)
                      }
                      className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="harian">Harian</option>
                      <option value="mingguan">Mingguan</option>
                      <option value="bulanan">Bulanan</option>
                    </select>
                  </div>
                )}
                <div className="p-4 bg-blue-50/50 border border-blue-200/50 rounded-lg">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold">Backup Terakhir:</span> 28
                    Oktober 2025, 14:30 WIB
                  </p>
                </div>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  <FiSave size={18} />
                  Simpan Pengaturan
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
