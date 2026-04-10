import React, { useState } from 'react';

export default function DashboardWithSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [generatedAssets, setGeneratedAssets] = useState([
    { id: 1, title: 'Cyberpunk Cityscape', theme: 'Cyberpunk City', category: 'Lifestyle', style: 'Isometric', created: '2024-04-08' },
    { id: 2, title: 'Eco Forest', theme: 'Sustainable Living', category: 'Nature', style: 'Flat Design', created: '2024-04-07' },
    { id: 3, title: 'Remote Workspace', theme: 'Remote Work', category: 'Business', style: 'Line Art', created: '2024-04-06' },
    { id: 4, title: 'Zen Meditation', theme: 'Mindfulness', category: 'Wellness', style: 'Minimalist', created: '2024-04-05' },
  ]);
  const [customPrompt, setCustomPrompt] = useState('');

  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', active: true },
    { icon: 'trending_up', label: 'Trends' },
    { icon: 'folder_special', label: 'Collections' },
    { icon: 'image', label: 'My Assets' },
  ];

  const accountItems = [
    { icon: 'settings', label: 'Settings' },
  ];

  const trendingTopics = [
    { emoji: '🏙️', name: 'Cyberpunk City', primary: true },
    { emoji: '🌍', name: 'Sustainable Living' },
    { emoji: '💻', name: 'Remote Work' },
    { emoji: '🌸', name: 'Mindfulness' },
    { emoji: '🚗', name: 'Electric Vehicles' },
    { emoji: '🚀', name: 'Future Tech' },
    { emoji: '🌿', name: 'Nature Patterns' },
  ];

  const configOptions = {
    themes: ['Back to School', 'Summer', 'Halloween', 'Autumn Colors', 'Winter Season'],
    categories: ['Education', 'Business', 'Lifestyle', 'Technology', 'Creative'],
    styles: ['Flat Design', 'Isometric', 'Line Art', 'Minimalist', 'Detailed'],
  };

  const [selectedTheme, setSelectedTheme] = useState('Back to School');
  const [selectedCategory, setSelectedCategory] = useState('Education');
  const [selectedStyle, setSelectedStyle] = useState('Flat Design');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateAsset = (e) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate generation delay
    setTimeout(() => {
      const newAsset = {
        id: generatedAssets.length + 1,
        title: customPrompt || `${selectedTheme} - ${selectedCategory}`,
        theme: selectedTheme,
        category: selectedCategory,
        style: selectedStyle,
        created: new Date().toISOString().split('T')[0],
      };
      setGeneratedAssets([newAsset, ...generatedAssets]);
      setIsGenerating(false);
      setShowGenerateModal(false);
      setCustomPrompt('');
    }, 2000);
  };

  return (
    <div className="flex min-h-screen bg-white text-slate-900 font-sans">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 bg-slate-900 text-slate-300 flex flex-col transition-all duration-300 z-50 ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        {/* Logo Section */}
        <div className="p-6 flex items-center gap-2 border-b border-slate-800">
          <div className="flex-shrink-0">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
              V
            </div>
          </div>
          {sidebarOpen && <span className="font-bold text-lg text-white truncate">VECTORNICHEMAX</span>}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mx-4 mt-4 p-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-300"
          title={sidebarOpen ? 'Collapse' : 'Expand'}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={sidebarOpen ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
            />
          </svg>
        </button>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                item.active
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span className="flex-shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  {item.icon === 'dashboard' && <path d="M3 13h2v8H3zm4-8h2v16H7zm4-2h2v18h-2zm4 4h2v14h-2zm4-4h2v18h-2z" />}
                  {item.icon === 'trending_up' && <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12v-6z" />}
                  {item.icon === 'folder_special' && <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 8h-5v5h-2v-5H7v-2h5V7h2v5h5v2z" />}
                  {item.icon === 'image' && <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />}
                </svg>
              </span>
              {sidebarOpen && <span className="truncate">{item.label}</span>}
            </a>
          ))}

          {sidebarOpen && (
            <div className="pt-4 pb-2">
              <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">Account</p>
            </div>
          )}

          {accountItems.map((item, index) => (
            <a
              key={`account-${index}`}
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <span className="flex-shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.14 12.94c.4-.3.86-.48 1.36-.48 1.66 0 3-1.34 3-3s-1.34-3-3-3c-.5 0-.96.18-1.36.48.6.9.94 1.97.94 3.12s-.34 2.22-.94 3.12zM16 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-8-2c1.66 0 2.99-1.34 2.99-3S9.66 4 8 4C6.34 4 5 5.34 5 7c0 1.66 1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </span>
              {sidebarOpen && <span className="truncate">{item.label}</span>}
            </a>
          ))}
        </nav>

        {/* User Profile Section */}
        <div className="p-4 border-t border-slate-800">
          <div className={`flex items-center gap-3 ${!sidebarOpen && 'justify-center'}`}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              AD
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">Alex Designer</p>
                <p className="text-xs text-slate-500 truncate">Free Plan</p>
              </div>
            )}
          </div>
          {sidebarOpen && (
            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Upgrade Pro
            </button>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Top Navigation */}
        <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-200">
          <div className="text-sm font-semibold text-slate-900">Dashboard</div>
          <div className="flex items-center gap-8 text-sm font-semibold">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Pusat Bantuan
            </a>
            <button className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors">
              Keluar
            </button>
          </div>
        </nav>

        {/* Content Area */}
        <div className="overflow-auto">
          {/* Hero Section */}
          <header className="text-center py-16 px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              AI-Powered Vector Asset Generation
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto font-light">
              Buat aset vektor berkualitas tinggi secara otomatis dengan tren pasar terbaru.
            </p>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-transform hover:scale-105">
              Cek Tren Pasar
            </button>
          </header>

          {/* Trending Section */}
          <section className="max-w-5xl mx-auto px-4 mb-16">
            <div className="flex flex-col items-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Sedang Tren</h2>
              <p className="text-sm text-slate-500">Klik untuk langsung generate</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {trendingTopics.map((topic, index) => (
                <button
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    topic.primary
                      ? 'bg-slate-900 text-white hover:bg-blue-600'
                      : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200'
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
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <h3 className="text-2xl font-bold mb-8">Konfigurasi Aset</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-3">Niche Tema</label>
                  <select
                    value={selectedTheme}
                    onChange={(e) => setSelectedTheme(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 bg-white hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  >
                    {configOptions.themes.map((theme) => (
                      <option key={theme} value={theme}>
                        {theme}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-3">Kategori</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 bg-white hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  >
                    {configOptions.categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-3">Style Desain</label>
                  <select
                    value={selectedStyle}
                    onChange={(e) => setSelectedStyle(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 bg-white hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  >
                    {configOptions.styles.map((style) => (
                      <option key={style} value={style}>
                        {style}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold uppercase tracking-wide text-sm hover:bg-slate-800 transition-colors">
                  Buat Ide Konsep
                </button>
              </div>
            </div>
          </section>

          {/* Mass Generator Banner */}
          <section className="max-w-5xl mx-auto px-4 mb-20">
            <div className="bg-blue-50 rounded-xl p-12 text-center border border-blue-200">
              <div className="flex justify-center mb-6">
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Mass Vector Generator</h2>
              <p className="text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
                Gunakan fitur Tren, sesuaikan jumlah variasi batch, dan buat puluhan aset vektor berkualitas tinggi secara otomatis.
              </p>
              <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                Mulai Generate Massal
              </button>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <h4 className="font-semibold text-slate-900 mb-6">Quick Links</h4>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li><a href="#" className="hover:text-slate-900 transition-colors">Tren Pasar</a></li>
                  <li><a href="#" className="hover:text-slate-900 transition-colors">Fitur</a></li>
                  <li><a href="#" className="hover:text-slate-900 transition-colors">Harga</a></li>
                  <li><a href="#" className="hover:text-slate-900 transition-colors">Masuk</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-6">Contact Info</h4>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li>Vector NicheMax</li>
                  <li>Contact NicheMax</li>
                  <li><a href="mailto:anjo@vectornichemax.com" className="hover:text-slate-900 transition-colors">anjo@vectornichemax.com</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-6">Social Media</h4>
                <div className="flex gap-4">
                  {[
                    { name: 'Facebook', path: 'M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z' },
                    { name: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="bg-white border border-slate-200 p-2 rounded-full hover:bg-slate-100 transition-colors"
                    >
                      <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
              <p>© 2024 VectorNicheMax - ALL RIGHTS RESERVED</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-slate-700 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-slate-700 transition-colors">Terms of Service</a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
