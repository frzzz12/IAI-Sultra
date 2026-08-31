import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, ShieldCheck, Users, MapPin, Eye, Target } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import KaryaSlider from '../components/KaryaSlider';
import { beritaList } from '../data/beritaData';
import { asset } from '../utils/asset';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. HERO SLIDER */}
      <HeroSlider />

      {/* 2. PROFIL ORGANISASI RINGKAS */}
      <section className="py-20 sm:py-28 bg-brand-warm">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Text Col */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
                  Profil Organisasi
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black leading-tight">
                  Ikatan Arsitek Indonesia <br />
                  <span className="text-maroon">Provinsi Sulawesi Tenggara</span>
                </h2>
              </div>

              <p className="text-base sm:text-lg text-brand-gray-600 leading-relaxed">
                <strong>Ikatan Arsitek Indonesia (IAI) Daerah Sulawesi Tenggara</strong> merupakan organisasi resmi profesi arsitek yang berdedikasi tinggi dalam menjalankan praktik keprofesian arsitektur yang beretika, profesional, dan bertanggung jawab.
              </p>

              <p className="text-base text-brand-gray-600 leading-relaxed">
                Dengan semangat motto <em>"Veracity - Variety - Validity" (Kesungguhan - Keberagaman - Pengesahan)</em>, IAI Sultra terus menggalang kekuatan anggota dan bersinergi aktif bersama Pemerintah Daerah dalam mewujudkan tata kota yang berkelas serta berkelanjutan.
              </p>

              <div className="pt-2">
                <Link
                  to="/tentang/profil"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-maroon hover:text-maroon-dark group"
                >
                  <span>Lihat Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Image Col */}
            <div className="lg:col-span-6">
              <div className="rounded-brand-lg overflow-hidden shadow-card border border-brand-gray-200 group">
                <img
                  src={asset('/assets/img/5.jpg')}
                  alt="Kegiatan IAI Sulawesi Tenggara"
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. VISI & MISI PREVIEW */}
      <section className="bg-gradient-to-br from-[#66001a] via-maroon to-[#4a0013] text-white relative overflow-hidden">
        {/* Top Wave — animated */}
        <div className="w-full overflow-hidden leading-none -mt-px pointer-events-none h-16 sm:h-24 lg:h-28">
          <div className="flex h-full" style={{width:'200%', animation:'waveScroll 10s linear infinite', willChange:'transform'}}>
            <svg className="block shrink-0 text-brand-warm" style={{width:'50%',height:'100%'}} viewBox="0 0 1440 180" fill="none" preserveAspectRatio="none">
              <path d="M0,0 L1440,0 L1440,80 C1200,150 960,10 720,80 C480,150 240,10 0,80 Z" fill="currentColor"/>
            </svg>
            <svg className="block shrink-0 text-brand-warm" style={{width:'50%',height:'100%'}} viewBox="0 0 1440 180" fill="none" preserveAspectRatio="none">
              <path d="M0,0 L1440,0 L1440,80 C1200,150 960,10 720,80 C480,150 240,10 0,80 Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        {/* Glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[3px] text-white/70 block mb-2">
              Landasan Organisasi
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Visi &amp; Misi IAI Sultra
            </h2>
            <p className="text-white/80 text-sm sm:text-base">
              Arah dan cita-cita strategis dalam menjalankan amanah organisasi profesi arsitektur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card Visi */}
            <div className="bg-white text-brand-gray-800 rounded-brand-lg p-8 sm:p-10 shadow-card border-l-4 border-maroon hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-heading font-bold text-2xl text-brand-black mb-4 flex items-center gap-2.5">
                <Eye className="w-7 h-7 text-maroon" />
                Visi
              </h3>
              <p className="text-brand-gray-600 text-sm sm:text-base leading-relaxed mb-0">
                Menjadi organisasi yang profesional dalam menjalankan praktek arsitek yang beretika dan bertanggung jawab demi terwujudnya arsitek professional, inovatif, berdaya saing dan siap menghadapi Masyarakat Ekonomi Asean (MEA).
              </p>
            </div>

            {/* Card Misi */}
            <div className="bg-white text-brand-gray-800 rounded-brand-lg p-8 sm:p-10 shadow-card border-l-4 border-maroon hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-heading font-bold text-2xl text-brand-black mb-4 flex items-center gap-2.5">
                <Target className="w-7 h-7 text-maroon" />
                Misi
              </h3>
              <p className="text-brand-gray-600 text-sm sm:text-base leading-relaxed mb-0">
                Menggalang kekuatan anggota sebagai potensi dan bergandengan-tangan dengan semua pihak khususnya Pemerintah secara profesional.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Wave — animated (arah berlawanan, kecepatan berbeda) */}
        <div className="w-full overflow-hidden leading-none -mb-px pointer-events-none h-16 sm:h-24 lg:h-28">
          <div className="flex h-full" style={{width:'200%', animation:'waveScrollReverse 14s linear infinite', willChange:'transform'}}>
            <svg className="block shrink-0 text-white" style={{width:'50%',height:'100%'}} viewBox="0 0 1440 180" fill="none" preserveAspectRatio="none">
              <path d="M0,100 C240,30 480,170 720,100 C960,30 1200,170 1440,100 L1440,180 L0,180 Z" fill="currentColor"/>
            </svg>
            <svg className="block shrink-0 text-white" style={{width:'50%',height:'100%'}} viewBox="0 0 1440 180" fill="none" preserveAspectRatio="none">
              <path d="M0,100 C240,30 480,170 720,100 C960,30 1200,170 1440,100 L1440,180 L0,180 Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </section>

      {/* 4. KARYA SLIDER CAROUSEL */}
      <KaryaSlider />

      {/* 5. BERITA TERBARU */}
      <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
        {/* Tekstur Tenun Sultra - diagonal stepped (motif X khas tenun Sultra) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.09 }}
        >
          <defs>
            <pattern id="tenun" x="0" y="0" width="100" height="80" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#tenun)"/>
        </svg>

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon mb-2">Publikasi &amp; Kabar</p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black leading-tight">
                Berita &amp; Kegiatan Terbaru
              </h2>
              <p className="text-brand-gray-600 text-sm mt-2">
                Ikuti perkembangan terkini dari kegiatan dan program IAI Sulawesi Tenggara.
              </p>
            </div>
            <Link
              to="/kegiatan/berita"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-maroon hover:text-maroon-dark self-start sm:self-auto shrink-0"
            >
              Semua Berita <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Grid 6 kartu */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beritaList.slice(0, 6).map((berita) => (
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

                  {/* Link baca */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-maroon">
                    Baca Selengkapnya <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5 MITRA & REKANAN */}
      <section className="py-14 sm:py-16 bg-white border-t border-b border-brand-gray-200 overflow-hidden">
        {/* Title — tetap di dalam container */}
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
            Mitra & Rekanan
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-black">
            Didukung oleh Industri Terkemuka
          </h2>
        </div>

        {/* Track — full width, di luar container agar looping tanpa celah */}
        <div className="relative">
          {/* Fade kiri */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
          {/* Fade kanan */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* 3 set identik → animasi -33.33% = seamless */}
          <div
            className="flex"
            style={{
              animation: 'marqueeScroll 18s linear infinite',
              width: 'max-content',
            }}
          >
            {[
              { name: 'Dekkson', logo: '/assets/img/logo-dekkson.png', url: 'https://share.google/R4mPyilcZFYLrgTCo' },
              { name: 'ACP Seven', logo: '/assets/img/logo-acp-seven.png', url: 'https://share.google/0u5JW7UmwsgIJ3uZW' },
              { name: 'Onduline Indonesia', logo: '/assets/img/logo-onduline.png', url: 'https://share.google/J2HInnDFDwe6sJi8w' },
              { name: 'Nippon Paint', logo: '/assets/img/logo-nippont-paint.png', url: 'https://share.google/u8DXtsYfPKzqMu1UE' },
              /* Set 2 */
              { name: 'Dekkson', logo: '/assets/img/logo-dekkson.png', url: 'https://share.google/R4mPyilcZFYLrgTCo' },
              { name: 'ACP Seven', logo: '/assets/img/logo-acp-seven.png', url: 'https://share.google/0u5JW7UmwsgIJ3uZW' },
              { name: 'Onduline Indonesia', logo: '/assets/img/logo-onduline.png', url: 'https://share.google/J2HInnDFDwe6sJi8w' },
              { name: 'Nippon Paint', logo: '/assets/img/logo-nippont-paint.png', url: 'https://share.google/u8DXtsYfPKzqMu1UE' },
              /* Set 3 */
              { name: 'Dekkson', logo: '/assets/img/logo-dekkson.png', url: 'https://share.google/R4mPyilcZFYLrgTCo' },
              { name: 'ACP Seven', logo: '/assets/img/logo-acp-seven.png', url: 'https://share.google/0u5JW7UmwsgIJ3uZW' },
              { name: 'Onduline Indonesia', logo: '/assets/img/logo-onduline.png', url: 'https://share.google/J2HInnDFDwe6sJi8w' },
              { name: 'Nippon Paint', logo: '/assets/img/logo-nippont-paint.png', url: 'https://share.google/u8DXtsYfPKzqMu1UE' },
            ].map((partner, i) => (
              <a
                key={i}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-3 shrink-0 group px-4 sm:px-6"
                title={partner.name}
              >
                <div className="w-52 sm:w-64 h-28 sm:h-36 rounded-brand-lg border border-brand-gray-200 bg-white flex items-center justify-center px-6 py-4 shadow-subtle group-hover:shadow-card group-hover:-translate-y-1 transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-brand-gray-600 group-hover:text-maroon transition-colors text-center whitespace-nowrap">
                  {partner.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* 6. CALL TO ACTION BANNER */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-maroon-dark via-maroon to-[#6b001b] text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Ingin Berkonsultasi atau Bergabung dengan IAI Sultra?
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Hubungi sekretariat kami untuk informasi pendaftaran anggota, sertifikasi keahlian (STRA), dan layanan rekomendasi keprofesian.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-brand font-semibold text-sm uppercase tracking-wider text-maroon bg-white hover:bg-brand-warm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <MapPin className="w-4 h-4 text-maroon" />
              <span>Hubungi Sekretariat</span>
            </Link>
            <Link
              to="/tentang/profil"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-brand font-semibold text-sm uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm transition-all duration-300"
            >
              <span>Syarat Keanggotaan</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
