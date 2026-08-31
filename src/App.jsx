import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ProfilPage from './pages/ProfilPage';
import VisiMisiPage from './pages/VisiMisiPage';
import SejarahPage from './pages/SejarahPage';
import PengurusPage from './pages/PengurusPage';
import ProgramKerjaPage from './pages/ProgramKerjaPage';
import BeritaPage from './pages/BeritaPage';
import GaleriPage from './pages/GaleriPage';
import KontakPage from './pages/KontakPage';
import KeanggotaanPage from './pages/KeanggotaanPage';
import HelpDeskPage from './pages/HelpDeskPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang/profil" element={<ProfilPage />} />
            <Route path="/tentang/visi-misi" element={<VisiMisiPage />} />
            <Route path="/tentang/sejarah" element={<SejarahPage />} />
            <Route path="/pengurus" element={<PengurusPage />} />
            <Route path="/kegiatan/program-kerja" element={<ProgramKerjaPage />} />
            <Route path="/kegiatan/berita" element={<BeritaPage />} />
            <Route path="/galeri" element={<GaleriPage />} />
            <Route path="/kontak" element={<KontakPage />} />
            <Route path="/keanggotaan" element={<KeanggotaanPage />} />
            <Route path="/helpdesk-stra" element={<HelpDeskPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
