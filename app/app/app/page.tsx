'use client';

import { useState } from 'react';
import { Trophy, TrendingUp, DollarSign, Users, Phone, Mail, Globe, Star, Zap, Gift } from 'lucide-react';

const salesData = [
  { rep: "M6", team: "Montreal", ytd: 2855733, growth: -5.0 },
  { rep: "M8", team: "Montreal", ytd: 2522459, growth: 5.0 },
  { rep: "T8", team: "Toronto", ytd: 2323993, growth: 10.4 },
  { rep: "T6", team: "Toronto", ytd: 2026369, growth: 0.6 },
  { rep: "T3", team: "Toronto", ytd: 1731769, growth: -6.1 },
  { rep: "T2", team: "Toronto", ytd: 1703941, growth: -1.5 },
  { rep: "M1", team: "Montreal", ytd: 1646900, growth: -23 },
  { rep: "T7", team: "Toronto", ytd: 1335597, growth: 6.3 },
  { rep: "M3", team: "Montreal", ytd: 1322941, growth: 3.3 },
  { rep: "T4", team: "Toronto", ytd: 1325595, growth: 3.3 },
  { rep: "CC1", team: "Call Center", ytd: 682579, growth: -17.2 },
  { rep: "M7", team: "Montreal", ytd: 1082079, growth: -10.5 },
  { rep: "M10", team: "Montreal", ytd: 1597569, growth: -8.1 },
  { rep: "M4", team: "Montreal", ytd: 1060799, growth: -9.2 },
  { rep: "T5", team: "Toronto", ytd: 1150799, growth: -8.2 }
];

export default function CandesaDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const podio = [...salesData].sort((a, b) => b.growth - a.growth).slice(0, 3);
  const totalYTD = salesData.reduce((acc, v) => acc + v.ytd, 0).toLocaleString('es-CA');

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'} font-sans`}>
      {/* HEADER */}
      <header className="bg-white shadow-2xl border-b-8 border-candesaRed">
        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <img src="https://i.imgur.com/8eZ7Y0K.png" alt="Candesa Foods" className="h-28" />
            <div>
              <h1 className="text-6xl font-black text-candesaRed">CANDESA FOODS</h1>
              <p className="text-3xl text-gray-700">33 Years Ethnic Food Distributor</p>
            </div>
          </div>
          <button onClick={() => setDarkMode(!darkMode)} className="p-4 bg-gray-200 rounded-full text-3xl">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      {/* HERO */}
      <div className="bg-gradient-to-r from-candesaRed to-candesaGreen text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-7xl font-black">DASHBOARD 2025</h2>
          <p className="text-5xl mt-8">YTD Octubre: ${totalYTD}</p>
        </div>
      </div>

      {/* PODIO */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-7xl font-black text-center mb-20">PODIO CRECIMIENTO</h2>
        <div className="grid grid-cols-3 gap-16">
          {podio.map((v, i) => (
            <div key={v.rep} className={`rounded-3xl p-16 text-center ${
              i === 0 ? 'bg-gradient-to-b from-yellow-400 to-yellow-600' :
              i === 1 ? 'bg-gradient-to-b from-gray-400 to-gray-600' :
              'bg-gradient-to-b from-orange-400 to-orange-600'
            } text-white shadow-3xl`}>
              <Trophy className="w-40 h-40 mx-auto mb-8" />
              <p className="text-9xl font-black">{i + 1}°</p>
              <p className="text-8xl font-black mt-8">{v.rep}</p>
              <p className="text-5xl">{v.team}</p>
              <p className="text-9xl font-black mt-10">+{v.growth}%</p>
            </div>
          ))}
        </div>
      </div>

      {/* CATÁLOGO */}
      <div className="bg-gray-100 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-7xl font-black text-center mb-24">CATÁLOGO 2025</h2>
          <div className="grid grid-cols-4 gap-16">
            {["SUGAR CANE", "GUAVA PASTE", "CASSAVA", "CORN AREPAS", "SANCOCHO", "PLANTAIN LEAVES", "CHEESE BREAD", "ALMOJÁBANA"].map(p => (
              <div key={p} className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-candesaRed to-candesaGreen h-72 flex items-center justify-center">
                  <span className="text-white text-5xl font-black">{p}</span>
                </div>
                <div className="p-10 text-center">
                  <p className="text-candesaGreen text-6xl font-black">+28%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-candesaRed text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-6xl font-black">1-877-270-0032 • sales@candesa.ca</p>
        </div>
      </footer>
    </div>
  );
}
