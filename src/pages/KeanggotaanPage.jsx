import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Download, Upload, ClipboardList, CheckCircle2 } from 'lucide-react';

const tagihanData = [
  { no: 1, nama: 'Ir. Ahmad Fauzi, IAI', jenis: 'Anggota Profesional', tahun: '2024', jumlah: 'Rp 500.000', status: 'Belum Lunas' },
  { no: 2, nama: 'Dewi Rahayu, S.Ars', jenis: 'Anggota Biasa', tahun: '2024', jumlah: 'Rp 300.000', status: 'Lunas' },
  { no: 3, nama: 'Ridwan Halim, IAI', jenis: 'Anggota Profesional', tahun: '2024', jumlah: 'Rp 500.000', status: 'Belum Lunas' },
  { no: 4, nama: 'Siti Nurhaliza, S.T', jenis: 'Anggota Biasa', tahun: '2023', jumlah: 'Rp 300.000', status: 'Lunas' },
  { no: 5, nama: 'Baharuddin, IAI', jenis: 'Anggota Profesional', tahun: '2024', jumlah: 'Rp 500.000', status: 'Belum Lunas' },
];

export default function KeanggotaanPage() {
  const [uploadFile, setUploadFile] = useState(null);
  const [searchNama, setSearchNama] = useState('');
  const [cicilanForm, setCicilanForm] = useState({ nama: '', noAnggota: '', jumlah: '', alasan: '' });
  const [cicilanSent, setCicilanSent] = useState(false);

  const filtered = tagihanData.filter(d =>
    d.nama.toLowerCase().includes(searchNama.toLowerCase())
  );

  const handleCicilanSubmit = (e) => {
    e.preventDefault();
    setCicilanSent(true);
  };

  return (
    <div>
      <PageHeader
        label="Layanan Anggota"
        title="Keanggotaan IAI Sultra"
        desc="Pendaftaran, informasi iuran, dan layanan administrasi keanggotaan IAI Daerah Sulawesi Tenggara."
        breadcrumbs={[{ label: 'Keanggotaan' }]}
      />

      <section className="py-14 sm:py-20 lg:py-28 bg-brand-warm">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

          {/* 1. PENDAFTARAN ANGGOTA BARU */}
          <div>
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
                Pendaftaran
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black mb-3">
                Anggota Baru
              </h2>
              <p className="text-brand-gray-600 text-base">
                Ikuti langkah berikut untuk mendaftarkan diri sebagai anggota IAI Sulawesi Tenggara.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:max-w-3xl">
              {/* Download Formulir */}
              <div className="bg-white border border-brand-gray-200 rounded-brand-lg p-7 shadow-subtle flex flex-col gap-4">
                <div className="w-10 h-10 rounded-brand bg-maroon-subtle flex items-center justify-center">
                  <Download className="w-5 h-5 text-maroon" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-brand-black mb-1">Download Formulir</h3>
                  <p className="text-sm text-brand-gray-600 mb-4">
                    Unduh formulir pendaftaran, isi dengan lengkap, dan siapkan berkas pendukung.
                  </p>
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="inline-flex items-center gap-2 bg-maroon text-white text-sm font-semibold px-5 py-2.5 rounded-brand hover:bg-maroon/90 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Unduh Formulir (.pdf)
                  </a>
                </div>
              </div>

              {/* Upload Berkas */}
              <div className="bg-white border border-brand-gray-200 rounded-brand-lg p-7 shadow-subtle flex flex-col gap-4">
                <div className="w-10 h-10 rounded-brand bg-maroon-subtle flex items-center justify-center">
                  <Upload className="w-5 h-5 text-maroon" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-brand-black mb-1">Upload Berkas</h3>
                  <p className="text-sm text-brand-gray-600 mb-4">
                    Kirim formulir yang sudah diisi beserta dokumen pendukung dalam format PDF/JPG.
                  </p>
                  <label className="cursor-pointer">
                    <span className="inline-flex items-center gap-2 border border-maroon text-maroon text-sm font-semibold px-5 py-2.5 rounded-brand hover:bg-maroon-subtle transition-colors">
                      <Upload className="w-4 h-4" />
                      {uploadFile ? uploadFile.name : 'Pilih File'}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                      onChange={e => setUploadFile(e.target.files[0])}
                    />
                  </label>
                  {uploadFile && (
                    <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> File siap dikirim
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 2. CEK TAGIHAN IURAN */}
          <div className="pt-12 sm:pt-16 border-t border-brand-gray-200">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
                Iuran Anggota
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black mb-3">
                Cek Tagihan Iuran
              </h2>
              <p className="text-brand-gray-600 text-base">
                Cari nama anggota untuk melihat status tagihan iuran tahunan.
              </p>
            </div>

            <div className="mb-5 w-full sm:max-w-sm">
              <input
                type="text"
                placeholder="Cari nama anggota..."
                value={searchNama}
                onChange={e => setSearchNama(e.target.value)}
                className="w-full border border-brand-gray-200 rounded-brand px-4 py-2.5 text-sm text-brand-gray-800 focus:outline-none focus:border-maroon transition-colors"
              />
            </div>

            <div className="overflow-x-auto rounded-brand-lg border border-brand-gray-200 shadow-subtle">
              <table className="min-w-[580px] w-full text-sm">
                <thead>
                  <tr className="bg-brand-off border-b border-brand-gray-200">
                    <th className="text-left px-3 sm:px-5 py-3 sm:py-3.5 font-semibold text-brand-gray-800 text-xs uppercase tracking-wider">No</th>
                    <th className="text-left px-3 sm:px-5 py-3 sm:py-3.5 font-semibold text-brand-gray-800 text-xs uppercase tracking-wider">Nama Anggota</th>
                    <th className="text-left px-3 sm:px-5 py-3 sm:py-3.5 font-semibold text-brand-gray-800 text-xs uppercase tracking-wider">Jenis</th>
                    <th className="text-left px-3 sm:px-5 py-3 sm:py-3.5 font-semibold text-brand-gray-800 text-xs uppercase tracking-wider">Tahun</th>
                    <th className="text-left px-3 sm:px-5 py-3 sm:py-3.5 font-semibold text-brand-gray-800 text-xs uppercase tracking-wider">Jumlah</th>
                    <th className="text-left px-3 sm:px-5 py-3 sm:py-3.5 font-semibold text-brand-gray-800 text-xs uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-gray-200 bg-white">
                  {filtered.length > 0 ? filtered.map((row) => (
                    <tr key={row.no} className="hover:bg-brand-warm transition-colors">
                      <td className="px-3 sm:px-5 py-3 sm:py-4 text-brand-gray-600">{row.no}</td>
                      <td className="px-3 sm:px-5 py-3 sm:py-4 font-medium text-brand-black">{row.nama}</td>
                      <td className="px-3 sm:px-5 py-3 sm:py-4 text-brand-gray-600">{row.jenis}</td>
                      <td className="px-3 sm:px-5 py-3 sm:py-4 text-brand-gray-600">{row.tahun}</td>
                      <td className="px-3 sm:px-5 py-3 sm:py-4 text-brand-gray-600">{row.jumlah}</td>
                      <td className="px-3 sm:px-5 py-3 sm:py-4">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
                          row.status === 'Lunas'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-600'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={6} className="px-5 py-8 text-center text-brand-gray-600 text-sm">
                        Tidak ada data yang cocok.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-brand-gray-600 mt-3">* Data di atas merupakan contoh. Data aktual dikelola oleh sekretariat IAI Sultra.</p>
          </div>

          {/* 3. PROGRAM CICILAN IURAN */}
          <div className="pt-12 sm:pt-16 border-t border-brand-gray-200">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
                Kemudahan Pembayaran
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black mb-3">
                Program Cicilan Iuran
              </h2>
              <p className="text-brand-gray-600 text-base">
                Ajukan permohonan cicilan iuran tahunan kepada sekretariat IAI Sultra.
              </p>
            </div>

            {cicilanSent ? (
              <div className="w-full sm:max-w-lg bg-white border border-brand-gray-200 rounded-brand-lg p-6 sm:p-8 shadow-subtle flex flex-col items-center text-center gap-4">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
                <h3 className="font-heading font-bold text-xl text-brand-black">Permohonan Terkirim</h3>
                <p className="text-brand-gray-600 text-sm">
                  Permohonan cicilan Anda telah kami terima. Sekretariat IAI Sultra akan menghubungi Anda dalam 1-3 hari kerja.
                </p>
                <button
                  onClick={() => { setCicilanSent(false); setCicilanForm({ nama: '', noAnggota: '', jumlah: '', alasan: '' }); }}
                  className="text-sm text-maroon font-semibold hover:underline"
                >
                  Ajukan lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleCicilanSubmit} className="w-full sm:max-w-lg bg-white border border-brand-gray-200 rounded-brand-lg p-6 sm:p-8 shadow-subtle space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-brand-black mb-1.5">Nama Lengkap</label>
                  <input
                    required
                    type="text"
                    value={cicilanForm.nama}
                    onChange={e => setCicilanForm({ ...cicilanForm, nama: e.target.value })}
                    placeholder="Nama sesuai kartu anggota"
                    className="w-full border border-brand-gray-200 rounded-brand px-4 py-2.5 text-sm text-brand-gray-800 focus:outline-none focus:border-maroon transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-black mb-1.5">Nomor Anggota</label>
                  <input
                    required
                    type="text"
                    value={cicilanForm.noAnggota}
                    onChange={e => setCicilanForm({ ...cicilanForm, noAnggota: e.target.value })}
                    placeholder="Contoh: IAI-SULTRA-0001"
                    className="w-full border border-brand-gray-200 rounded-brand px-4 py-2.5 text-sm text-brand-gray-800 focus:outline-none focus:border-maroon transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-black mb-1.5">Jumlah Tagihan yang Dicicil</label>
                  <input
                    required
                    type="text"
                    value={cicilanForm.jumlah}
                    onChange={e => setCicilanForm({ ...cicilanForm, jumlah: e.target.value })}
                    placeholder="Contoh: Rp 500.000"
                    className="w-full border border-brand-gray-200 rounded-brand px-4 py-2.5 text-sm text-brand-gray-800 focus:outline-none focus:border-maroon transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-black mb-1.5">Alasan Permohonan Cicilan</label>
                  <textarea
                    required
                    rows={4}
                    value={cicilanForm.alasan}
                    onChange={e => setCicilanForm({ ...cicilanForm, alasan: e.target.value })}
                    placeholder="Jelaskan alasan Anda mengajukan cicilan..."
                    className="w-full border border-brand-gray-200 rounded-brand px-4 py-2.5 text-sm text-brand-gray-800 focus:outline-none focus:border-maroon transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-maroon text-white font-semibold text-sm py-3 rounded-brand hover:bg-maroon/90 transition-colors flex items-center justify-center gap-2"
                >
                  <ClipboardList className="w-4 h-4" />
                  Kirim Permohonan Cicilan
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
