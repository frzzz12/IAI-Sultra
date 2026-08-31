import React from 'react';
import PageHeader from '../components/PageHeader';
import { ExternalLink, Clock, FileInput, Calculator, BadgeCheck } from 'lucide-react';

const helpItems = [
  {
    icon: FileInput,
    label: 'Pendaftaran ODS',
    desc: 'One Daily Service (ODS) adalah layanan pendaftaran dan pengurusan STRA secara online. Fitur ini sedang dalam proses pengembangan.',
    link: null,
    linkLabel: 'Buka ODS',
  },
  {
    icon: Calculator,
    label: 'Kalkulator Nilai KUM',
    desc: 'Hitung nilai KUM (Kredit Unit Maksimum) Anda berdasarkan kegiatan PKB yang telah diikuti. Segera hadir.',
    link: null,
    linkLabel: 'Buka Kalkulator',
  },
  {
    icon: BadgeCheck,
    label: 'Cek Jumlah KUM Anda Saat Ini',
    desc: 'Lihat rekap total nilai KUM yang sudah terkumpul berdasarkan data PKB terakhir Anda di sistem IAI.',
    link: null,
    linkLabel: 'Cek KUM Saya',
  },
];

export default function HelpDeskPage() {
  return (
    <div>
      <PageHeader
        label="Layanan STRA"
        title="Help Desk STRA"
        desc="Pusat layanan dan informasi terkait Sertifikat Tanda Registrasi Arsitek (STRA) IAI Sulawesi Tenggara."
        breadcrumbs={[{ label: 'Help Desk STRA' }]}
      />

      <section className="py-14 sm:py-20 lg:py-28 bg-brand-warm">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">

          <div className="max-w-2xl mb-10 sm:mb-14">
            <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
              Layanan Online
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black mb-3">
              Akses Layanan STRA
            </h2>
            <p className="text-brand-gray-600 text-base">
              Beberapa layanan berikut sedang dalam tahap pengembangan. Kami akan memberitahu anggota segera setelah layanan aktif.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {helpItems.map(({ icon: Icon, label, desc, link, linkLabel }, i) => (
              <div
                key={i}
                className="bg-white border border-brand-gray-200 rounded-brand-lg p-8 shadow-subtle flex flex-col justify-between hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="w-11 h-11 rounded-brand bg-maroon-subtle flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-maroon" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-brand-black mb-2">{label}</h3>
                  <p className="text-sm text-brand-gray-600 leading-relaxed mb-6">{desc}</p>
                </div>

                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-maroon text-white text-sm font-semibold px-5 py-2.5 rounded-brand hover:bg-maroon/90 transition-colors self-start"
                  >
                    {linkLabel}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-gray-600 bg-brand-off border border-brand-gray-200 px-4 py-2 rounded-brand self-start">
                    <Clock className="w-3.5 h-3.5" />
                    Dalam Proses...
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Info banner */}
          <div className="mt-10 sm:mt-14 bg-white border border-brand-gray-200 rounded-brand-lg p-5 sm:p-6 shadow-subtle flex items-start gap-4 lg:max-w-2xl">
            <Clock className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-brand-black mb-1">Butuh bantuan segera?</p>
              <p className="text-sm text-brand-gray-600">
                Untuk urusan STRA yang mendesak, silakan hubungi sekretariat IAI Sultra langsung melalui halaman{' '}
                <a href="/#/kontak" className="text-maroon font-semibold hover:underline">Kontak</a>.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
