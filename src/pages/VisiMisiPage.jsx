import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Compass, Flag, Sparkles, ChevronDown, CheckCircle2 } from 'lucide-react';

const misiList = [
  { no: 1, judul: 'Kemandirian dan Penguatan Sistem Keuangan IAI', isi: ['IAI Provinsi Sulawesi Tenggara berkomitmen membangun sistem keuangan organisasi yang mandiri, sehat, dan berkelanjutan melalui penataan manajemen keuangan yang profesional, pengembangan kegiatan produktif dan kreatif, serta kerja sama strategis dengan vendor, sektor swasta, dan pemerintah.', 'Akan ditetapkan saldo minimal organisasi sebesar Rp50–100 juta sebagai dana cadangan operasional, sehingga organisasi tidak lagi berada dalam kondisi keuangan kosong ketika program harus dijalankan.', 'IAI Sultra akan memperkuat peran sekretariat sebagai pusat layanan organisasi melalui pengelolaan yang profesional, tertib administrasi, dan didukung fasilitas kerja yang memadai.'] },
  { no: 2, judul: 'Transparansi Anggaran dan Kemudahan Pembayaran Iuran Anggota', isi: ['Transparansi keuangan menjadi prinsip utama pengelolaan organisasi. Seluruh pemasukan dan pengeluaran akan disajikan secara terbuka dan dapat dipantau oleh anggota melalui sistem digital.', 'Pembayaran iuran tahunan akan difasilitasi melalui sistem berbasis website yang mudah diakses, aman, dan akuntabel.'] },
  { no: 3, judul: 'Akselerasi Penerbitan STRA dan Pengupayaan Lisensi Arsitek Sulawesi Tenggara', isi: ['IAI Sultra akan membuka help desk khusus di sekretariat bagi anggota yang memenuhi persyaratan penerbitan STRA, sebagai pusat pendampingan administrasi, konsultasi, pemantauan KUM, dan percepatan proses.', 'IAI Sultra akan aktif mengupayakan terbitnya lisensi Arsitek Sulawesi Tenggara sebagai penguatan identitas dan kewenangan profesi di tingkat daerah.', 'Memperbanyak kegiatan di daerah untuk mempermudah pemohon mendapatkan pemenuhan nilai KUM PKB Wajib dan Pilihan.', 'Menyelenggarakan ODS (One Daily Service) sebagai sarana percepatan penerbitan STRA.', 'Membuat kegiatan Bimbingan Teknis, Pembelajaran Modul Tes Ujikom, dan Pendampingan magang peserta EPARM.'] },
  { no: 4, judul: 'Penyelenggaraan Kegiatan Lokal, Nasional dan Pengupayaan RAKERNAS/MUNAS di Sulawesi Tenggara', isi: ['IAI Sultra akan memaksimalkan kegiatan peningkatan kapasitas SDM anggota, termasuk seminar berkelanjutan, talkshow, pelatihan BIM/Revit, podcast, sayembara, dan lainnya.', 'IAI Sultra menargetkan Sulawesi Tenggara menjadi tuan rumah kegiatan berskala nasional seperti Kendari Architecture Week, RAKERNAS, dan/atau MUNAS IAI.', 'Penyelenggaraan kegiatan nasional menjadi sarana memperkenalkan potensi budaya, pariwisata, dan karakter lokal Sulawesi Tenggara kepada komunitas arsitek nasional.'] },
  { no: 5, judul: 'Peningkatan Kualitas dan Evaluasi Kinerja Pengurus Secara Terukur', isi: ['Setiap pengurus akan menandatangani pakta integritas dan wajib membuat program kerja turunan sesuai bidangnya. Pengurus akan didominasi oleh anggota berSTRA sebagai tanda arsitek profesional.', 'Kinerja pengurus akan dievaluasi secara berkala dengan indikator yang jelas dan terukur, dengan mekanisme pergantian sesuai ketentuan organisasi bila terjadi ketidaksesuaian.'] },
  { no: 6, judul: 'Penguatan Sistem Digitalisasi, Dokumentasi dan Jurnalistik', isi: ['IAI Sultra akan meningkatkan kualitas dokumentasi dan pengarsipan seluruh kegiatan organisasi secara sistematis dan berkelanjutan melalui sistem digital.', 'IAI Sultra mewadahi anggota jurnalistik untuk membantu sharing informasi dan menjembatani penulisan buku karya arsitektur bagi anggota yang memiliki bakat menulis.', 'Publikasi kegiatan dilakukan melalui media cetak, elektronik, website resmi, dan media sosial (Facebook, Instagram, TikTok, WhatsApp) dengan dukungan admin profesional.'] },
  { no: 7, judul: 'Penguatan Kerjasama Pendidikan, Penelitian dan Pengabdian Profesi Arsitek', isi: ['IAI Sultra akan memperkuat kerja sama dengan perguruan tinggi negeri dan swasta yang memiliki program studi arsitektur, serta melibatkan tenaga pendidik, CSR, dan vendor.', 'Kerja sama diarahkan pada pendidikan, penelitian, dan pengabdian kepada masyarakat, termasuk kontribusi terhadap pembangunan sarana ibadah dan dukungan desain fasilitas umum.', 'Mempercepat pelaksanaan Program Studi Pendidikan Profesi Arsitek (PPAr) di Fakultas Teknik UHO agar penyerapan tenaga kerja lulusan arsitektur Sulawesi Tenggara lebih maksimal.'] },
  { no: 8, judul: 'Membangun Sinergitas Strategis antara IAI, Pemerintah Daerah dan Nasional', isi: ['IAI Sultra berkomitmen menjadi mitra strategis pemerintah daerah dan provinsi dalam bidang perencanaan, penataan, dan pembangunan wilayah melalui pemberian pertimbangan profesional, kritik konstruktif, saran, dan solusi.', 'IAI Sultra akan aktif membangun komunikasi dengan wilayah lain di tingkat nasional maupun internasional melalui forum-forum resmi, kunjungan kerja, dan partisipasi dalam kegiatan RAKERNAS dan MUNAS.'] },
];

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className={`border rounded-brand-lg overflow-hidden transition-all duration-300 ${isOpen ? 'border-maroon/30 shadow-card' : 'border-brand-gray-200 shadow-subtle'}`}>
      <button onClick={onToggle} className={`w-full flex items-center gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left transition-colors duration-200 ${isOpen ? 'bg-maroon-subtle/40' : 'bg-white hover:bg-brand-off'}`}>
        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-200 ${isOpen ? 'bg-maroon text-white' : 'bg-brand-off text-brand-gray-600 border border-brand-gray-200'}`}>{item.no}</span>
        <span className={`flex-1 font-heading font-semibold text-sm sm:text-base leading-snug ${isOpen ? 'text-maroon' : 'text-brand-black'}`}>{item.judul}</span>
        <ChevronDown className={`shrink-0 w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-maroon' : 'text-brand-gray-600'}`} />
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1200px]' : 'max-h-0'}`}>
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 bg-white space-y-3 border-t border-brand-gray-100">
          {item.isi.map((para, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-maroon shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-brand-gray-600 leading-relaxed">{para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function VisiMisiPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div>
      <PageHeader label="Landasan Organisasi" title="Visi, Misi & Tujuan" desc="Arah dan cita-cita IAI Sulawesi Tenggara dalam menjalankan amanah organisasi profesi arsitektur." breadcrumbs={[{ label: 'Tentang', to: '/tentang/profil' }, { label: 'Visi & Misi' }]} />

      <section className="py-14 sm:py-20 lg:py-28 bg-brand-warm">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 space-y-14 sm:space-y-20">

          {/* VISI */}
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">Visi Organisasi</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black">Visi IAI Sulawesi Tenggara</h2>
            </div>
            <div className="bg-gradient-to-br from-maroon to-[#4a0013] rounded-brand-lg p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-card">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
              <div className="relative z-10 flex items-start gap-4 sm:gap-5">
                <div className="shrink-0 w-11 h-11 bg-white/15 rounded-brand-lg flex items-center justify-center mt-0.5">
                  <Compass className="w-5 h-5 text-white" />
                </div>
                <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
                  Mewujudkan IAI SULTRA yang <strong className="font-bold">Mandiri, Transparan, Profesional, Adaptif dan Kolaboratif</strong> untuk meningkatkan pelayanan, kompetensi, serta kesejahteraan anggota dan memperkuat peran profesi arsitek dalam pembangunan Sulawesi Tenggara.
                </p>
              </div>
            </div>
          </div>

          {/* MISI ACCORDION */}
          <div>
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">Misi Organisasi</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black mb-2">8 Misi IAI Sulawesi Tenggara</h2>
              <p className="text-brand-gray-600 text-base">Klik setiap misi untuk melihat penjelasan lengkapnya.</p>
            </div>
            <div className="space-y-3">
              {misiList.map((item, i) => (
                <AccordionItem key={i} item={item} isOpen={openIndex === i} onToggle={() => toggle(i)} />
              ))}
            </div>
          </div>

          {/* TUJUAN & MOTTO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-brand-gray-200">
            <div className="bg-white border border-brand-gray-200 rounded-brand-lg p-7 sm:p-8 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-brand bg-maroon-subtle flex items-center justify-center shrink-0"><Flag className="w-4 h-4 text-maroon" /></div>
                <span className="text-xs font-bold uppercase tracking-widest text-maroon">Tujuan Organisasi</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-black mb-3">Tujuan IAI Sultra</h3>
              <p className="text-brand-gray-600 text-sm sm:text-base leading-relaxed">Berpartisipasi aktif dalam mewujudkan Kota yang berkelas, serta mengembangkan pengetahuan dan kemampuan arsitek profesional seiring kemajuan teknologi agar mampu mengabdikan ilmunya bagi dunia arsitektur Indonesia serta mampu bersaing dan diakui secara internasional.</p>
            </div>
            <div className="bg-gradient-to-br from-brand-off to-white border border-brand-gray-200 rounded-brand-lg p-7 sm:p-8 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-brand bg-maroon-subtle flex items-center justify-center shrink-0"><Sparkles className="w-4 h-4 text-maroon" /></div>
                <span className="text-xs font-bold uppercase tracking-widest text-maroon">Motto Organisasi</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-maroon mb-1">Veracity - Variety - Validity</h3>
              <p className="text-brand-gray-800 font-medium text-sm mb-3">Kesungguhan - Keberagaman - Pengesahan</p>
              <p className="text-brand-gray-600 text-sm leading-relaxed">Semboyan luhur profesi arsitek Indonesia yang mencerminkan integritas kejujuran karya (Veracity), kekayaan kreativitas desain (Variety), serta pengakuan hukum dan sertifikasi keahlian (Validity).</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
