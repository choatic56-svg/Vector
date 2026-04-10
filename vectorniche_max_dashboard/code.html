import React, { useState, useEffect } from 'react';
import { 
  Palette, Search, Image as ImageIcon, Download, Copy, 
  RefreshCw, Layers, Layout, CheckCircle2, AlertCircle, 
  Loader2, Eraser, TrendingUp, FileJson, Zap, Sparkles, 
  Archive, PlusCircle, MinusCircle, MousePointerClick
} from 'lucide-react';

const VectorStudio = () => {
  // --- STATE MANAJEMEN ---
  const [niche, setNiche] = useState('Back to School');
  const [category, setCategory] = useState('Education');
  const [vectorStyle, setVectorStyle] = useState('Flat Design');
  const [bgStyle, setBgStyle] = useState('White Background');
  const [batchCount, setBatchCount] = useState(1); 
  
  const [concepts, setConcepts] = useState([]);
  const [selectedConcepts, setSelectedConcepts] = useState([]);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [trendingNiches, setTrendingNiches] = useState([]);
  
  const [loading, setLoading] = useState(false);
  const [generatingImages, setGeneratingImages] = useState(false);
  const [currentGenStatus, setCurrentGenStatus] = useState(""); 
  const [removingBgId, setRemovingBgId] = useState(null);
  const [searchingTrends, setSearchingTrends] = useState(false);
  const [downloadingZip, setDownloadingZip] = useState(false);
  const [error, setError] = useState(null);

  const niches = ['Back to School', 'Business & Tech', 'Health & Wellness', 'Travel & Nature', 'Food & Culinary', 'Sustainability', 'Mental Health', 'Custom Trend...'];
  const categories = ['Education', 'Technology', 'Healthcare', 'Lifestyle', 'Corporate', 'Abstract', 'Characters'];
  const styles = ['Flat Design', 'Kawaii Style', 'Isometric', 'Line Art', 'Watercolor Vector', '3D Clay Style', 'Retro Vintage'];
  const backgrounds = ['White Background', 'Solid Color', 'Soft Gradient'];

  const findTrendingNiches = () => {
    setSearchingTrends(true);
    // Mocking for preview
    setTimeout(() => {
        setTrendingNiches(['Cyberpunk City', 'Sustainable Living', 'Remote Work', 'Mindfulness', 'Electric Vehicles']);
        setSearchingTrends(false);
    }, 1000);
  };

  const handleTrendClick = (trendName) => {
    setNiche(trendName);
    findConcepts(trendName); 
  };

  const findConcepts = (customNicheQuery = null) => {
    setLoading(true);
    // Mocking for preview
    setTimeout(() => {
        setConcepts([
            { id: 1, title: 'School Bus', prompt_base: 'yellow school bus' },
            { id: 2, title: 'Stack of Books', prompt_base: 'colorful stack of books' },
            { id: 3, title: 'Pencil Case', prompt_base: 'stationary items in a case' }
        ]);
        setSelectedConcepts([1, 2, 3]);
        setLoading(false);
    }, 1000);
  };

  const generateImages = () => {
    setGeneratingImages(true);
    // Mocking for preview
    setTimeout(() => {
        setGeneratedImages([
            { id: '1', title: 'School Bus', url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=400', prompt: 'yellow school bus', hasBg: true },
            { id: '2', title: 'Stack of Books', url: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=400', prompt: 'colorful stack of books', hasBg: true }
        ]);
        setGeneratingImages(false);
    }, 2000);
  };

  const removeBackground = (imageObj) => {
    setRemovingBgId(imageObj.id);
    setTimeout(() => {
        setGeneratedImages(prev => prev.map(img => 
          img.id === imageObj.id ? { ...img, hasBg: false } : img
        ));
        setRemovingBgId(null);
    }, 1000);
  };

  const copyToClipboard = (text) => { alert('Copied: ' + text); };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] p-4 md:p-6 lg:p-8 font-sans">
      <nav className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-200">
            <Zap className="text-white fill-white" size={20} />
          </div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">
            VECTOR<span className="text-blue-600">NICHE</span>
            <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full align-top ml-1">MAX</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-3 bg-white p-1 rounded-2xl shadow-sm border border-slate-200">
          <button 
            onClick={findTrendingNiches}
            disabled={searchingTrends}
            className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50 rounded-xl transition-all text-sm font-semibold text-slate-600 disabled:opacity-50"
          >
            {searchingTrends ? <Loader2 className="animate-spin text-amber-500" size={16} /> : <TrendingUp size={16} className="text-amber-500" />}
            Cek Tren Pasar
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto flex flex-col gap-6">
        {trendingNiches.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl animate-in slide-in-from-top-4 shadow-sm w-full">
            <div className="flex justify-between items-center mb-4">
               <h3 className="text-sm font-bold text-amber-800 flex items-center gap-2">
                <Sparkles size={16} className="text-amber-500 fill-amber-500" /> Sedang Tren (Klik untuk langsung generate)
              </h3>
              <button onClick={() => setTrendingNiches([])} className="text-xs text-amber-600 font-medium hover:underline px-2">Tutup</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {trendingNiches.map((trend, i) => (
                 <button 
                   key={i} 
                   onClick={() => handleTrendClick(trend)}
                   className="flex items-center gap-2 bg-white hover:bg-amber-100 border border-amber-300 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold transition-colors shadow-sm group"
                 >
                   <MousePointerClick size={14} className="text-amber-400 group-hover:text-amber-600" />
                   {trend}
                 </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
              <h2 className="text-lg font-bold mb-5 flex items-center gap-2 uppercase tracking-wide text-slate-500 text-xs">Konfigurasi Aset</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-400 uppercase ml-1 block mb-1">Niche Tema</label>
                    <select value={niche} onChange={e => setNiche(e.target.value)} className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none transition-shadow">
                      {niches.map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-400 uppercase ml-1 block mb-1">Kategori</label>
                    <select value={category} onChange={e => setCategory(e.target.value)} className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none transition-shadow">
                      {categories.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-400 uppercase ml-1 block mb-1">Style Desain</label>
                  <select value={vectorStyle} onChange={e => setVectorStyle(e.target.value)} className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none">
                    {styles.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <button 
                  onClick={() => findConcepts()}
                  disabled={loading}
                  className="w-full mt-2 bg-slate-900 hover:bg-black text-white font-bold py-3.5 rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95 disabled:opacity-50"
                >
                  {loading ? <Loader2 className="animate-spin text-amber-400" size={18} /> : <Search size={18} className="text-amber-400" />}
                  BUAT IDE KONSEP
                </button>
              </div>
            </div>

            {concepts.length > 0 && (
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 animate-in fade-in zoom-in-95">
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100">
                  <h3 className="font-bold text-sm text-slate-800">Pilih Konsep ({selectedConcepts.length})</h3>
                </div>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2 mb-6">
                  {concepts.map(c => (
                    <label key={c.id} className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${selectedConcepts.includes(c.id) ? 'border-blue-500 bg-blue-50' : 'border-slate-100 hover:bg-slate-50'}`}>
                      <input type="checkbox" checked={selectedConcepts.includes(c.id)} onChange={() => setSelectedConcepts(prev => prev.includes(c.id) ? prev.filter(i => i !== c.id) : [...prev, c.id])} className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer" />
                      <span className="text-sm font-semibold text-slate-700">{c.title}</span>
                    </label>
                  ))}
                </div>
                <button 
                  onClick={generateImages}
                  disabled={generatingImages || selectedConcepts.length === 0}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 flex items-center justify-center gap-2 transition-transform active:scale-95 disabled:opacity-50"
                >
                  {generatingImages ? <Loader2 className="animate-spin" size={20} /> : <ImageIcon size={20} />}
                  GENERATE GAMBAR
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-8">
            {generatedImages.length === 0 && !generatingImages ? (
              <div className="bg-white border-2 border-dashed border-slate-200 rounded-[40px] h-full min-h-[500px] flex flex-col items-center justify-center p-8 text-center mt-0 lg:mt-0">
                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                  <Layers size={48} className="text-slate-300" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Mass Vector Generator</h2>
                <p className="text-slate-500 mt-2 max-w-sm text-sm">Gunakan fitur Tren, sesuaikan jumlah variasi batch, dan buat puluhan aset vektor berkualitas tinggi secara otomatis.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {generatedImages.map((img) => (
                    <div key={img.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col group animate-in zoom-in-95">
                      <div className="aspect-square bg-[#f1f5f9] relative overflow-hidden flex items-center justify-center">
                        <img src={img.url} alt={img.title} className="w-full h-full object-contain p-4 relative z-10 transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex flex-col items-center justify-center gap-2 backdrop-blur-sm">
                          <button onClick={() => removeBackground(img)} disabled={removingBgId === img.id || !img.hasBg} className="w-[80%] py-2 bg-white rounded-xl font-bold text-[11px] text-slate-900 hover:bg-blue-600 hover:text-white">
                            {removingBgId === img.id ? <Loader2 size={12} className="animate-spin" /> : (img.hasBg ? 'Hapus BG' : 'Transparan')}
                          </button>
                        </div>
                      </div>
                      <div className="p-3 border-t border-slate-100">
                        <h4 className="font-bold text-slate-800 text-xs line-clamp-1">{img.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default VectorStudio;