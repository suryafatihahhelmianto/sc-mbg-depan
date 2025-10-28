export default function ChartPlaceholder({ title }) {
  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl">
      <h3 className="text-lg font-bold text-green-800 mb-6">{title}</h3>
      <div className="h-64 bg-gradient-to-b from-cyan-500/10 to-teal-500/10 rounded-xl border border-white/10 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
            <div className="w-12 h-12 rounded-full border-2 border-white/20 border-t-cyan-400 animate-spin"></div>
          </div>
          <p className="text-green-600 text-sm">
            Grafik akan ditampilkan di sini
          </p>
        </div>
      </div>
    </div>
  );
}
