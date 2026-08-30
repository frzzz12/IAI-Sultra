import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { beritaList } from '../data/beritaData';
import { ArrowRight } from 'lucide-react';

export default function BeritaPage() {
  return (
    <div>
      {/* Page Header */}
      <PageHeader
        label="Informasi & Agenda"
        title="Berita & Kegiatan"
        desc="Kabar terkini, liputan seminar arsitektur, musyawarah daerah, dan agenda IAI Sulawesi Tenggara."
        breadcrumbs={[{ label: 'Kegiatan', to: '/kegiatan/program-kerja' }, { label: 'Berita & Kegiatan' }]}
      />

      {/* Main Content */}
      <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
        {/* Tekstur Tenun Sultra - diagonal stepped (motif X khas tenun Sultra) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.09 }}
        >
          <defs>
            <pattern id="tenun-berita" x="0" y="0" width="100" height="80" patternUnits="userSpaceOnUse">
              {/* Border zigzag atas — segitiga naik */}
              <polyline points="0,8 5,0 10,8 15,0 20,8 25,0 30,8 35,0 40,8 45,0 50,8 55,0 60,8 65,0 70,8 75,0 80,8 85,0 90,8 95,0 100,8" stroke="#6b0020" strokeWidth="2.5" fill="none"/>
              <line x1="0" y1="8" x2="100" y2="8" stroke="#6b0020" strokeWidth="1"/>
              {/* Border zigzag bawah — segitiga naik dari bawah */}
              <polyline points="0,72 5,80 10,72 15,80 20,72 25,80 30,72 35,80 40,72 45,80 50,72 55,80 60,72 65,80 70,72 75,80 80,72 85,80 90,72 95,80 100,72" stroke="#6b0020" strokeWidth="2.5" fill="none"/>
              <line x1="0" y1="72" x2="100" y2="72" stroke="#6b0020" strokeWidth="1"/>
              {/* Motif badan — diagonal stepped membentuk X (khas tenun Sultra) */}
              {/* TL → BR (tangga turun-kanan) */}
              <path d="M20,10 H25 V15 H30 V20 H35 V25 H40 V30 H45 V35 H50 V40 H55 V45 H60 V50 H65 V55 H70 V60 H75 V65 H80 V70" stroke="#6b0020" strokeWidth="2" fill="none" strokeLinecap="square"/>
              {/* TR → BL (tangga turun-kiri) */}
              <path d="M80,10 H75 V15 H70 V20 H65 V25 H60 V30 H55 V35 H50 V40 H45 V45 H40 V50 H35 V55 H30 V60 H25 V65 H20 V70" stroke="#6b0020" strokeWidth="2" fill="none" strokeLinecap="square"/>
              {/* Diamond tengah */}
              <path d="M50,30 L60,40 L50,50 L40,40 Z" stroke="#6b0020" strokeWidth="1.5" fill="none"/>
              <path d="M50,36 L54,40 L50,44 L46,40 Z" fill="#6b0020"/>
              {/* Aksen diamond kiri & kanan */}
              <path d="M10,40 L15,35 L20,40 L15,45 Z" stroke="#6b0020" strokeWidth="1.2" fill="none"/>
              <path d="M80,40 L85,35 L90,40 L85,45 Z" stroke="#6b0020" strokeWidth="1.2" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tenun-berita)"/>
        </svg>

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          {/* Grid berita */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beritaList.map((berita) => (
              <Link
                key={berita.id}
                to="/kegiatan/berita"
                className="group block bg-white border border-gray-200 overflow-hidden hover:border-maroon/30 transition-colors duration-300"
                style={{ borderRadius: '2px' }}
              >
                {/* Thumbnail */}
                <div className="w-full h-48 overflow-hidden bg-gray-100">
                  <img
                    src={berita.image}
                    alt={berita.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Konten */}
                <div className="p-5">
                  {/* Kategori + tanggal */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-maroon">
                      {berita.category}
                    </span>
                    <span className="text-[10px] text-gray-400 tracking-wide">{berita.date}</span>
                  </div>

                  {/* Judul */}
                  <h3 className="font-heading font-bold text-[15px] leading-snug text-brand-black group-hover:text-maroon transition-colors line-clamp-2 mb-2">
                    {berita.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2">
                    {berita.excerpt}
                  </p>

                  {/* Footer kartu */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 font-medium">Publikasi BPD IAI Sultra</span>
                    <div className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-maroon">
                      Detail Berita <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
  
