import { asset } from '../utils/asset';

export const galeriKarya = [
  {
    id: "pasar-kota-lama",
    title: "Gedung Pasar Kota Lama Kendari",
    category: "Revitalisasi & Komersial",
    desc: "Perancangan revitalisasi kawasan perdagangan dan pusat perbelanjaan bersejarah di Kota Lama Kendari dengan memadukan nilai historis dan kenyamanan modern.",
    images: [
      { src: asset('/assets/img/gedung-pasar-kota-lama.png'), alt: "Tampak Utama" },
      { src: asset('/assets/img/pasar-kota-lama.png'), alt: "Tampak Sudut" },
      { src: asset('/assets/img/pasar-kota-lama2.png'), alt: "Perspektif Kawasan" }
    ]
  },
  {
    id: "kcc",
    title: "Kendari Convention Centre (KCC)",
    category: "Fasilitas Publik & MICE",
    desc: "Gedung konvensi dan pusat kegiatan skala besar dengan perancangan arsitektur modern berstandar internasional yang menjadi ikon pertemuan di Sulawesi Tenggara.",
    images: [
      { src: asset('/assets/img/kendari-convention-centre.png'), alt: "Tampak Depan" },
      { src: asset('/assets/img/kendari-convention-centre2.png'), alt: "Perspektif Fasad" },
      { src: asset('/assets/img/kendari-convention-centre3.png'), alt: "Kawasan KCC" }
    ]
  },
  {
    id: "rsud-muna",
    title: "Gedung RSUD Kabupaten Muna",
    category: "Fasilitas Kesehatan",
    desc: "Fasilitas pelayanan kesehatan masyarakat daerah dengan standar tata ruang medis terpadu, ramah lingkungan, dan efisiensi sirkulasi pasien.",
    images: [
      { src: asset('/assets/img/gedung-rsud-kabupaten-muna.png'), alt: "Perspektif Gedung RSUD Muna" }
    ]
  },
  {
    id: "bpmpd-sultra",
    title: "Kantor BPMPD Sulawesi Tenggara",
    category: "Gedung Pemerintahan",
    desc: "Gedung perkantoran dinas pemerintahan provinsi dengan konsep fasad modern, optimalisasi pencahayaan alami, dan efisiensi energi.",
    images: [
      { src: asset('/assets/img/bpmpd-sultra.png'), alt: "Tampak Fasad Kantor BPMPD Sultra" }
    ]
  },
  {
    id: "aula-bahteramas",
    title: "Gedung Aula Bahteramas Kendari",
    category: "Gedung Serbaguna",
    desc: "Gedung pertemuan dan aula serbaguna ikonik Pemerintah Provinsi Sulawesi Tenggara untuk berbagai agenda kenegaraan dan perhelatan akbar.",
    images: [
      { src: asset('/assets/img/aula-batheramas-kendari.png'), alt: "Perspektif Aula Bahteramas" }
    ]
  }
];

export const galeriDokumentasi = [
  { id: 1, title: "Musyawarah Daerah IAI Sultra", category: "Organisasi", image: asset('/assets/img/1.jpg') },
  { id: 2, title: "Penataran Kode Etik & Kaidah Tata Laku", category: "Pelatihan", image: asset('/assets/img/2.jpg') },
  { id: 3, title: "Kunjungan Lapangan & Sayembara Desain", category: "Kegiatan", image: asset('/assets/img/3.jpg') },
  { id: 4, title: "Kerjasama Akademis Arsitektur UHO", category: "Kemitraan", image: asset('/assets/img/7.jpeg') },
  { id: 5, title: "Sosialisasi UU Arsitek No. 6/2017", category: "Sosialisasi", image: asset('/assets/img/5.jpg') },
  { id: 6, title: "Pameran Karya Arsitektur Kendari", category: "Pameran", image: asset('/assets/img/kendari-convention-centre.png') }
];
