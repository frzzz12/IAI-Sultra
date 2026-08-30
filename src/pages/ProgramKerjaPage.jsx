import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { programKerjaPillars, kompetensiArsitek } from '../data/programKerjaData';
import { FileText, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { asset } from '../utils/asset';

export default function ProgramKerjaPage() {
  const [activeKompetensi, setActiveKompetensi] = useState(kompetensiArsitek[0]);

  return (
    <div>
      {/* Page Header */}
      <PageHeader
        label="Arah Kebijakan"
        title="Program Kerja & Standar Kompetensi"
        desc="Pilar program strategis organisasi dan 13 Butir Standar Kompetensi Arsitek Indonesia."
        breadcrumbs={[{ label: 'Kegiatan', to: '/kegiatan/program-kerja' }, { label: 'Program Kerja' }]}
      />

      {/* Main Content */}
      <section className="py-20 sm:py-28 bg-brand-warm">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 space-y-32">
          
          {/* 1. PILAR PROGRAM KERJA */}
          <div>
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
                Program Strategis
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black mb-3">
                Pilar Program Kerja IAI Sultra
              </h2>
              <p className="text-brand-gray-600 text-base">
                Fokus utama pelaksanaan program kepengurusan daerah dalam memajukan profesi arsitektur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programKerjaPillars.map((pilar, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-brand-gray-200 rounded-brand-lg p-8 sm:p-10 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex items-start gap-6"
                >
                  <span className="font-heading font-bold text-3xl sm:text-4xl text-maroon shrink-0 leading-none">
                    {pilar.number}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-brand-black mb-3">
                      {pilar.title}
                    </h3>
                    <p className="text-brand-gray-600 text-sm sm:text-base leading-relaxed mb-0">
                      {pilar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. 13 BUTIR KOMPETENSI ARSITEK IAI (Docs / Editorial Style) */}
          <div className="pt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-3">
                  Standar Kualifikasi Sertifikasi
                </span>
                <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-brand-black tracking-tight leading-none">
                  13 Butir Kompetensi<br />Arsitek IAI.
                </h2>
              </div>
              <p className="text-brand-gray-600 font-medium max-w-sm md:text-right">
                Pedoman dasar keprofesian untuk Sertifikat Keahlian (SKA/STRA) Arsitek.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
              
              {/* Left Side: Minimalist List (Like Documentation Sidebar) */}
              <div className="w-full lg:w-1/3 flex flex-col gap-1 border-l border-brand-gray-200">
                {kompetensiArsitek.map((item, idx) => {
                  const isActive = activeKompetensi.id === item.id;
                  return (
                    <React.Fragment key={item.id}>
                      <button
                        onClick={() => setActiveKompetensi(item)}
                        className={`text-left pl-6 py-4 transition-all duration-300 border-l-2 -ml-[1px] w-full ${
                        isActive 
                          ? 'border-maroon bg-maroon-subtle' 
                          : 'border-transparent hover:border-brand-gray-300 hover:bg-brand-gray-100/50'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span className={`font-heading text-xs font-bold pt-1 ${isActive ? 'text-maroon' : 'text-brand-gray-400'}`}>
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <h4 className={`font-heading font-bold text-sm sm:text-base leading-snug ${isActive ? 'text-brand-black' : 'text-brand-gray-500'}`}>
                          {item.title.replace(/^\d+\.\s*/, '')}
                        </h4>
                      </div>
                    </button>
                    {/* Mobile Detail Panel (Accordion) */}
                    <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isActive ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-14 pr-4 py-2 border-l-2 border-maroon -ml-[1px]">
                        <p className="text-brand-gray-600 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </React.Fragment>
                );
                })}
              </div>

              {/* Right Side: Raw Typographic Panel (Desktop Only) */}
              <div className="hidden lg:block w-full lg:w-2/3 lg:sticky lg:top-32 py-4">
                <div className="max-w-2xl transition-all duration-500">
                  
                  <div className="flex items-center gap-4 mb-8">
                    <span className="font-heading text-4xl text-maroon font-bold">
                      {String(kompetensiArsitek.findIndex(k => k.id === activeKompetensi.id) + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px bg-brand-gray-200 flex-1"></div>
                  </div>
                  
                  <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-black mb-6 leading-tight tracking-tight">
                    {activeKompetensi.title.replace(/^\d+\.\s*/, '')}
                  </h3>
                  
                  <p className="text-brand-gray-600 text-lg sm:text-xl leading-relaxed font-medium">
                    {activeKompetensi.desc}
                  </p>
                  
                </div>
              </div>

            </div>
          </div>

          {/* 3. REGULASI & LISENSI PRAKTIK */}
          <div className="pt-16 border-t border-brand-gray-200">
            <div className="bg-brand-black text-white rounded-brand-lg p-8 sm:p-12 relative overflow-hidden">
              <div className="relative z-10 max-w-3xl space-y-6">
                <span className="text-xs font-semibold uppercase tracking-[2.5px] text-white/70 block">
                  Dasar Hukum & Regulasi
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-tight">
                  Undang-Undang Nomor 6 Tahun 2017 tentang Arsitek
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  Untuk berpraktek secara sah sebagai arsitek profesional di Indonesia, seorang arsitek wajib memiliki Surat Tanda Registrasi Arsitek (STRA) dan Lisensi Praktik Arsitek yang diterbitkan sesuai peraturan perundang-undangan.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={asset('/PROFIL IAI SULTRA.pdf')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-brand text-xs sm:text-sm font-semibold uppercase tracking-wider bg-maroon hover:bg-maroon-hover text-white transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Unduh Dokumen Profil & AD-ART (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
