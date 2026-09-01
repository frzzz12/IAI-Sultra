import React from 'react';
import PageHeader from '../components/PageHeader';
import { Building2, Users, Handshake } from 'lucide-react';
import { asset } from '../utils/asset';

const membershipTypes = [
  {
    num: "1.",
    title: "Anggota Kehormatan",
    en: "(Honorary Members)",
    desc: "Seseorang yang berwawasan ilmu/seni arsitektur dan dinilai organisasi sangat berjasa bagi peningkatan dan kemajuan dunia arsitektur serta lingkungan binaan di Indonesia."
  },
  {
    num: "2.",
    title: "Anggota Profesional",
    en: "(Corporate Members)",
    desc: "Arsitek lulusan D3/S1 teknik arsitektur yang memenuhi kualifikasi Arsitek Pratama, Arsitek Madya, atau Arsitek Utama serta mengikuti pembinaan keprofesian (PKB) berkelanjutan."
  },
  {
    num: "3.",
    title: "Anggota Biasa",
    en: "",
    desc: "Sarjana atau lulusan D-3 arsitektur dari perguruan tinggi yang mempraktikkan atau menerapkan ilmu arsitektur sejalan dengan Kode Etik & Kaidah Tata Laku Profesi Arsitek."
  },
  {
    num: "4.",
    title: "Anggota Mahasiswa",
    en: "(Student Members)",
    desc: "Mahasiswa jurusan arsitektur yang sekurang-kurangnya telah menyelesaikan pendidikan tingkat 3 (tiga) atau telah lulus minimal 100 SKS."
  },
  {
    num: "5.",
    title: "Mitra IAI",
    en: "(Associate Members)",
    desc: "Arsitek terdaftar sebagai anggota organisasi profesi internasional (ARCASIA / UIA) yang berminat bergabung dan memiliki Sertifikat Keahlian Sementara (SKAS) IAI untuk berpraktik di Indonesia."
  }
];

const highlights = [
  {
    icon: Building2,
    label: "Lingkungan Binaan",
    desc: "Mendorong arsitektur yang selaras budaya dan alam Sultra"
  },
  {
    icon: Users,
    label: "Pemberdayaan Anggota",
    desc: "Memperkuat kapasitas dan jaringan arsitek daerah"
  },
  {
    icon: Handshake,
    label: "Kemitraan Strategis",
    desc: "Bersinergi dengan pemerintah, akademisi, dan swasta"
  }
];

export default function ProfilPage() {
  return (
    <div>
      {/* Page Header */}
      <PageHeader
        label="Tentang Kami"
        title="Sambutan Calon Ketua IAI Sultra"
        desc="Pesan dan harapan dari Calon Ketua Ikatan Arsitek Indonesia Daerah Sulawesi Tenggara Periode 2026–2030."
        breadcrumbs={[{ label: 'Tentang', to: '/tentang/profil' }, { label: 'Sambutan Ketua' }]}
      />

      {/* Sambutan Section */}
      <section className="py-20 sm:py-28 bg-brand-warm">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">

            {/* Left — Foto & Identitas Ketua */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6">
              <div className="w-full max-w-sm lg:max-w-full">
                <div className="rounded-brand-lg overflow-hidden shadow-card border border-brand-gray-200 h-[420px]">
                  <img
                    src={asset('/assets/img/ketua-iai-sultra.png')}
                    alt="Calon Ketua IAI Sulawesi Tenggara - Ar. I Made Krisna A.D., IAI"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Nama & Jabatan */}
              <div className="text-center lg:text-left w-full max-w-sm lg:max-w-full">
                <p className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon mb-1">
                  Calon Ketua IAI Sulawesi Tenggara
                </p>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-black leading-snug">
                  Ar. I Made Krisna A.D., IAI
                </h3>
                <p className="text-sm text-brand-gray-600 mt-1">
                  Periode 2026 – 2030
                </p>
              </div>

              {/* Highlights */}
              <div className="w-full max-w-sm lg:max-w-full border-t border-brand-gray-200 pt-5 space-y-4">
                {highlights.map(({ icon: Icon, label, desc }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="shrink-0 w-8 h-8 rounded-brand bg-maroon-subtle flex items-center justify-center mt-0.5">
                      <Icon className="w-4 h-4 text-maroon" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-black">{label}</p>
                      <p className="text-xs text-brand-gray-600 leading-snug">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Teks Sambutan */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-3">
                  Sambutan & Pesan
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black leading-tight">
                  Bersama Membangun Arsitektur yang Bermartabat
                </h2>
              </div>

              {/* Isi Sambutan */}
              <div className="space-y-5 text-base text-brand-gray-600 leading-[1.85]">
                <p>
                  Assalamu'alaikum Warahmatullahi Wabarakatuh, salam sejahtera untuk kita semua.
                </p>
                <p>
                  Puji syukur kita panjatkan ke hadirat Allah SWT atas segala limpahan rahmat dan
                  kesempatan yang diberikan kepada kita untuk terus berkarya, berinovasi, dan
                  berkontribusi bagi kemajuan dunia arsitektur di Sulawesi Tenggara.
                </p>
                <p>
                  Atas nama pengurus dan seluruh anggota <strong className="text-brand-black">Ikatan Arsitek Indonesia Daerah Sulawesi Tenggara</strong>,
                  saya menyampaikan selamat datang di ruang digital kami. Kehadiran website ini adalah
                  wujud nyata komitmen kami untuk terus terbuka, transparan, dan hadir di tengah-tengah
                  masyarakat yang kami layani.
                </p>
                <p>
                  Sulawesi Tenggara adalah daerah yang kaya, kaya alam, kaya budaya, dan kaya potensi.
                  Menjadi bagian dari proses pembangunan di tanah ini adalah sebuah amanah yang kami
                  emban dengan penuh tanggung jawab. IAI Sultra hadir bukan hanya untuk para arsitek,
                  tetapi untuk seluruh lapisan masyarakat yang berhak atas lingkungan binaan yang
                  berkualitas, aman, dan bermartabat.
                </p>
                <p>
                  Kepada seluruh anggota, teruslah berkarya dengan integritas. Kepada pemerintah dan
                  mitra strategis, kami siap bergandengan tangan dalam setiap langkah pembangunan.
                  Dan kepada generasi arsitek muda, masa depan profesi ini ada di tangan kalian,
                  jangan pernah berhenti belajar dan jangan pernah takut bermimpi besar.
                </p>
                <p>
                  Semoga IAI Sulawesi Tenggara senantiasa menjadi wadah yang produktif, organisasi
                  yang dipercaya, dan keluarga besar yang saling menguatkan. Bersama kita bisa
                  mewujudkan Sulawesi Tenggara yang lebih baik dari hari ke hari.
                </p>
                <p>
                  Wassalamu'alaikum Warahmatullahi Wabarakatuh.
                </p>
              </div>

              {/* Tanda tangan */}
              <div className="pt-4 border-t border-brand-gray-200">
                <p className="text-sm text-brand-gray-600">Kendari, 2024</p>
                <p className="font-heading font-bold text-lg text-brand-black mt-2">
                  H. Arief Saleh Sjamsu, IAI
                </p>
                <p className="text-sm text-maroon font-medium">
                  Ketua IAI Daerah Sulawesi Tenggara
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* KEANGGOTAAN IAI */}
      <section className="py-20 sm:py-28 bg-brand-off border-t border-brand-gray-200">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
              Keanggotaan Organisasi
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black mb-3">
              Jenis & Kualifikasi Keanggotaan IAI
            </h2>
            <p className="text-base sm:text-lg text-brand-gray-600">
              Berdasarkan Anggaran Rumah Tangga IAI, keanggotaan IAI bersifat perorangan dan aktif.
            </p>
          </div>

          {/* Clean Non-Card Structured List */}
          <div className="max-w-4xl border-t border-brand-gray-200 divide-y divide-brand-gray-200">
            {membershipTypes.map((item, idx) => (
              <div key={idx} className="py-7 grid grid-cols-[40px_1fr] sm:grid-cols-[56px_1fr] gap-4 sm:gap-6 items-start">
                <span className="font-heading font-bold text-xl sm:text-2xl text-maroon leading-snug">
                  {item.num}
                </span>
                <div className="space-y-1.5">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-black">
                    {item.title}{' '}
                    {item.en && <span className="font-normal text-sm sm:text-base text-brand-gray-600">{item.en}</span>}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-gray-600 leading-relaxed max-w-3xl mb-0">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
