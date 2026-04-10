import React, { useState } from 'react';

export default function VectorNicheMaxLanding() {
  const [selectedTheme, setSelectedTheme] = useState('Back to School');
  const [selectedCategory, setSelectedCategory] = useState('Education');
  const [selectedStyle, setSelectedStyle] = useState('Flat Design');

  const themes = ['Back to School', 'Summer', 'Halloween', 'Autumn Colors', 'Winter Season'];
  const categories = ['Education', 'Business', 'Lifestyle', 'Technology', 'Creative'];
  const styles = ['Flat Design', 'Isometric', 'Line Art', 'Minimalist', 'Detailed'];

  const trendingTopics = [
    { emoji: '🏙️', name: 'Cyberpunk City', primary: true },
    { emoji: '🌍', name: 'Sustainable Living' },
    { emoji: '💻', name: 'Remote Work' },
    { emoji: '🌸', name: 'Mindfulness' },
    { emoji: '🚗', name: 'Electric Vehicles' },
    { emoji: '🚀', name: 'Future Tech' },
    { emoji: '🌿', name: 'Nature Patterns' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tight">VECTORNICHEMAX</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-gray-900 transition-colors">Tren Pasar</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Fitur</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Harga</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Masuk</a>
          <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Daftar
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          AI-Powered Vector Asset Generation
        </h1>
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto font-light">
          Buat aset vektor berkualitas tinggi secara otomatis dengan tren pasar terbaru.
        </p>
        <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          Cek Tren Pasar
        </button>
      </header>

      {/* Trending Section */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Sedang Tren</h2>
          <p className="text-sm text-gray-500">Klik untuk langsung generate</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {trendingTopics.map((topic, index) => (
            <button
              key={index}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                topic.primary
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              <span>{topic.emoji}</span>
              <span>{topic.name}</span>
              <span className="text-xs opacity-50">→</span>
            </button>
          ))}
        </div>
      </section>

      {/* Configuration Section */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h3 className="text-2xl font-bold mb-8">Konfigurasi Aset</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Themes Dropdown */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Niche Tema</label>
              <select
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              >
                {themes.map((theme) => (
                  <option key={theme} value={theme}>
                    {theme}
                  </option>
                ))}
              </select>
            </div>

            {/* Categories Dropdown */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Kategori</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Styles Dropdown */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Style Desain</label>
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              >
                {styles.map((style) => (
                  <option key={style} value={style}>
                    {style}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold uppercase tracking-wide text-sm hover:bg-gray-800 transition-colors">
              Buat Ide Konsep
            </button>
          </div>
        </div>
      </section>

      {/* Mass Generator Banner */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <div className="bg-gray-50 rounded-xl p-12 text-center border border-gray-200">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Mass Vector Generator</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
            Gunakan fitur Tren, sesuaikan jumlah variasi batch, dan buat puluhan aset vektor berkualitas tinggi secara otomatis.
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Mulai Generate Massal
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Tren Pasar</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Fitur</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Harga</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Masuk</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Contact Info</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>Vector NicheMax</li>
              <li>Contact NicheMax</li>
              <li><a href="mailto:anjo@vectornichemax.com" className="hover:text-gray-900 transition-colors">anjo@vectornichemax.com</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Social Media</h4>
            <div className="flex gap-4">
              {[
                { name: 'Facebook', path: 'M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z' },
                { name: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.197-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { name: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="bg-white border border-gray-200 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-6xl mx-auto border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 VectorNicheMax - ALL RIGHTS RESERVED</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-700 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
