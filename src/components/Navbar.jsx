import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { asset } from '../utils/asset';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Body scroll lock saat drawer terbuka
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const toggleMobileDropdown = (name) =>
    setOpenDropdown(openDropdown === name ? null : name);

  const isTentangActive = ['/tentang/profil', '/tentang/visi-misi', '/tentang/sejarah'].includes(location.pathname);
  const isKegiatanActive = ['/kegiatan/program-kerja', '/kegiatan/berita'].includes(location.pathname);
  const isKeanggotaanActive = ['/keanggotaan'].includes(location.pathname);
  const isHelpDeskActive = ['/helpdesk-stra'].includes(location.pathname);

  const navBackground = isHome
    ? isScrolled
      ? 'bg-white/95 backdrop-blur-md shadow-md text-brand-gray-800'
      : 'bg-transparent text-white'
    : 'bg-white/95 backdrop-blur-md shadow-md text-brand-gray-800 border-b border-brand-gray-100';

  const logoSrc = asset('/assets/logo.png');
  const logoFilter = isHome && !isScrolled ? 'brightness(0) invert(1)' : 'none';

  const linkClass = (isActive) =>
    `transition-colors duration-200 relative py-2 ${
      isActive
        ? 'text-maroon font-semibold'
        : isHome && !isScrolled
        ? 'text-white/90 hover:text-white'
        : 'text-brand-gray-800 hover:text-maroon'
    }`;

  const dropdownBtnClass = (active) =>
    `flex items-center gap-1.5 py-2 transition-colors duration-200 focus:outline-none ${
      active
        ? 'text-maroon font-semibold'
        : isHome && !isScrolled
        ? 'text-white/90 hover:text-white'
        : 'text-brand-gray-800 hover:text-maroon'
    }`;

  return (
    <>
      {/* â”€â”€â”€ NAVBAR BAR â”€â”€â”€ */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBackground}`}>
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <img
              src={logoSrc}
              alt="Logo IAI Sulawesi Tenggara"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              style={{ filter: logoFilter }}
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-[0.9375rem]">
            <li>
              <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>
                {({ isActive }) => (
                  <>
                    Beranda
                    {isActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-maroon rounded-full" />}
                  </>
                )}
              </NavLink>
            </li>

            {/* Tentang Dropdown */}
            <li className="relative group">
              <button className={dropdownBtnClass(isTentangActive)}>
                Tentang
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                {isTentangActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-maroon rounded-full" />}
              </button>
              <div className="absolute top-full left-0 w-56 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-white rounded-brand-lg shadow-card border border-brand-gray-100 p-2 text-brand-gray-800">
                  <Link to="/tentang/profil" className="block px-4 py-2.5 rounded-brand text-sm hover:bg-maroon-subtle hover:text-maroon transition-colors">Profil Organisasi</Link>
                  <Link to="/tentang/visi-misi" className="block px-4 py-2.5 rounded-brand text-sm hover:bg-maroon-subtle hover:text-maroon transition-colors">Visi &amp; Misi</Link>
                  <Link to="/tentang/sejarah" className="block px-4 py-2.5 rounded-brand text-sm hover:bg-maroon-subtle hover:text-maroon transition-colors">Sejarah</Link>
                </div>
              </div>
            </li>

            <li>
              <NavLink to="/pengurus" className={({ isActive }) => linkClass(isActive)}>
                {({ isActive }) => (
                  <>
                    Pengurus
                    {isActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-maroon rounded-full" />}
                  </>
                )}
              </NavLink>
            </li>

            {/* Kegiatan Dropdown */}
            <li className="relative group">
              <button className={dropdownBtnClass(isKegiatanActive)}>
                Kegiatan
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                {isKegiatanActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-maroon rounded-full" />}
              </button>
              <div className="absolute top-full left-0 w-56 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-white rounded-brand-lg shadow-card border border-brand-gray-100 p-2 text-brand-gray-800">
                  <Link to="/kegiatan/program-kerja" className="block px-4 py-2.5 rounded-brand text-sm hover:bg-maroon-subtle hover:text-maroon transition-colors">Program Kerja</Link>
                  <Link to="/kegiatan/berita" className="block px-4 py-2.5 rounded-brand text-sm hover:bg-maroon-subtle hover:text-maroon transition-colors">Berita &amp; Kegiatan</Link>
                </div>
              </div>
            </li>

            {/* Keanggotaan Dropdown */}
            <li className="relative group">
              <button className={dropdownBtnClass(isKeanggotaanActive)}>
                Keanggotaan
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                {isKeanggotaanActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-maroon rounded-full" />}
              </button>
              <div className="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-white rounded-brand-lg shadow-card border border-brand-gray-100 p-2 text-brand-gray-800">
                  <Link to="/keanggotaan#pendaftaran" className="block px-4 py-2.5 rounded-brand text-sm hover:bg-maroon-subtle hover:text-maroon transition-colors">Pendaftaran Anggota Baru</Link>
                  <Link to="/keanggotaan#tagihan" className="block px-4 py-2.5 rounded-brand text-sm hover:bg-maroon-subtle hover:text-maroon transition-colors">Cek Tagihan Iuran</Link>
                  <Link to="/keanggotaan#cicilan" className="block px-4 py-2.5 rounded-brand text-sm hover:bg-maroon-subtle hover:text-maroon transition-colors">Program Cicilan Iuran</Link>
                </div>
              </div>
            </li>

            {/* Help Desk STRA Dropdown */}
            <li className="relative group">
              <button className={dropdownBtnClass(isHelpDeskActive)}>
                Help Desk STRA
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                {isHelpDeskActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-maroon rounded-full" />}
              </button>
              <div className="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-white rounded-brand-lg shadow-card border border-brand-gray-100 p-2 text-brand-gray-800">
                  <Link to="/helpdesk-stra" className="block px-4 py-2.5 rounded-brand text-sm hover:bg-maroon-subtle hover:text-maroon transition-colors">Pendaftaran ODS</Link>
                  <Link to="/helpdesk-stra" className="block px-4 py-2.5 rounded-brand text-sm hover:bg-maroon-subtle hover:text-maroon transition-colors">Kalkulator Nilai KUM</Link>
                  <Link to="/helpdesk-stra" className="block px-4 py-2.5 rounded-brand text-sm hover:bg-maroon-subtle hover:text-maroon transition-colors">Cek Jumlah KUM Saat Ini</Link>
                </div>
              </div>
            </li>

            <li>
              <NavLink to="/galeri" className={({ isActive }) => linkClass(isActive)}>
                {({ isActive }) => (
                  <>
                    Galeri
                    {isActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-maroon rounded-full" />}
                  </>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to="/kontak" className={({ isActive }) => linkClass(isActive)}>
                {({ isActive }) => (
                  <>
                    Kontak
                    {isActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-maroon rounded-full" />}
                  </>
                )}
              </NavLink>
            </li>
          </ul>

          {/* Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-brand focus:outline-none transition-colors ${
              isHome && !isScrolled ? 'text-white hover:bg-white/10' : 'text-brand-gray-800 hover:bg-brand-gray-100'
            }`}
            aria-label="Buka Menu Navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* â”€â”€â”€ MOBILE BACKDROP â€” di luar nav agar z-index bebas â”€â”€â”€ */}
      <div
        className={`fixed inset-0 bg-black/50 z-[90] md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* â”€â”€â”€ MOBILE DRAWER â€” di luar nav â”€â”€â”€ */}
      <div
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-[320px] bg-white z-[100] shadow-xl flex flex-col overflow-y-auto transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header Drawer */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-brand-gray-100 shrink-0">
          <img src={asset('/assets/logo.png')} alt="IAI Sultra" className="h-8 w-auto" />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-brand hover:bg-brand-gray-100 text-brand-gray-600 focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-col gap-0.5 px-4 py-4 text-base font-medium flex-1 overflow-y-auto">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-3 px-3 rounded-brand transition-colors ${
                  isActive ? 'bg-maroon-subtle text-maroon font-semibold' : 'text-brand-gray-800 hover:bg-brand-gray-100'
                }`
              }
            >
              Beranda
            </NavLink>
          </li>

          {/* Accordion Tentang */}
          <li>
            <button
              onClick={() => toggleMobileDropdown('tentang')}
              className={`w-full flex items-center justify-between py-3 px-3 rounded-brand transition-colors ${
                isTentangActive ? 'text-maroon font-semibold bg-maroon-subtle/50' : 'text-brand-gray-800 hover:bg-brand-gray-100'
              }`}
            >
              <span>Tentang</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'tentang' ? 'rotate-180 text-maroon' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${openDropdown === 'tentang' ? 'max-h-40' : 'max-h-0'}`}>
              <div className="pl-4 pr-1 pb-1 flex flex-col gap-0.5 border-l-2 border-maroon/30 ml-3 mt-1">
                <Link to="/tentang/profil" className="block py-2 px-3 text-sm rounded-brand hover:bg-maroon-subtle hover:text-maroon text-brand-gray-600">Profil Organisasi</Link>
                <Link to="/tentang/visi-misi" className="block py-2 px-3 text-sm rounded-brand hover:bg-maroon-subtle hover:text-maroon text-brand-gray-600">Visi &amp; Misi</Link>
                <Link to="/tentang/sejarah" className="block py-2 px-3 text-sm rounded-brand hover:bg-maroon-subtle hover:text-maroon text-brand-gray-600">Sejarah</Link>
              </div>
            </div>
          </li>

          <li>
            <NavLink
              to="/pengurus"
              className={({ isActive }) =>
                `block py-3 px-3 rounded-brand transition-colors ${
                  isActive ? 'bg-maroon-subtle text-maroon font-semibold' : 'text-brand-gray-800 hover:bg-brand-gray-100'
                }`
              }
            >
              Pengurus
            </NavLink>
          </li>

          {/* Accordion Kegiatan */}
          <li>
            <button
              onClick={() => toggleMobileDropdown('kegiatan')}
              className={`w-full flex items-center justify-between py-3 px-3 rounded-brand transition-colors ${
                isKegiatanActive ? 'text-maroon font-semibold bg-maroon-subtle/50' : 'text-brand-gray-800 hover:bg-brand-gray-100'
              }`}
            >
              <span>Kegiatan</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'kegiatan' ? 'rotate-180 text-maroon' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${openDropdown === 'kegiatan' ? 'max-h-28' : 'max-h-0'}`}>
              <div className="pl-4 pr-1 pb-1 flex flex-col gap-0.5 border-l-2 border-maroon/30 ml-3 mt-1">
                <Link to="/kegiatan/program-kerja" className="block py-2 px-3 text-sm rounded-brand hover:bg-maroon-subtle hover:text-maroon text-brand-gray-600">Program Kerja</Link>
                <Link to="/kegiatan/berita" className="block py-2 px-3 text-sm rounded-brand hover:bg-maroon-subtle hover:text-maroon text-brand-gray-600">Berita &amp; Kegiatan</Link>
              </div>
            </div>
          </li>

          {/* Accordion Keanggotaan */}
          <li>
            <button
              onClick={() => toggleMobileDropdown('keanggotaan')}
              className={`w-full flex items-center justify-between py-3 px-3 rounded-brand transition-colors ${
                isKeanggotaanActive ? 'text-maroon font-semibold bg-maroon-subtle/50' : 'text-brand-gray-800 hover:bg-brand-gray-100'
              }`}
            >
              <span>Keanggotaan</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'keanggotaan' ? 'rotate-180 text-maroon' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${openDropdown === 'keanggotaan' ? 'max-h-40' : 'max-h-0'}`}>
              <div className="pl-4 pr-1 pb-1 flex flex-col gap-0.5 border-l-2 border-maroon/30 ml-3 mt-1">
                <Link to="/keanggotaan" className="block py-2 px-3 text-sm rounded-brand hover:bg-maroon-subtle hover:text-maroon text-brand-gray-600">Pendaftaran Anggota Baru</Link>
                <Link to="/keanggotaan" className="block py-2 px-3 text-sm rounded-brand hover:bg-maroon-subtle hover:text-maroon text-brand-gray-600">Cek Tagihan Iuran</Link>
                <Link to="/keanggotaan" className="block py-2 px-3 text-sm rounded-brand hover:bg-maroon-subtle hover:text-maroon text-brand-gray-600">Program Cicilan Iuran</Link>
              </div>
            </div>
          </li>

          {/* Accordion Help Desk STRA */}
          <li>
            <button
              onClick={() => toggleMobileDropdown('helpdesk')}
              className={`w-full flex items-center justify-between py-3 px-3 rounded-brand transition-colors ${
                isHelpDeskActive ? 'text-maroon font-semibold bg-maroon-subtle/50' : 'text-brand-gray-800 hover:bg-brand-gray-100'
              }`}
            >
              <span>Help Desk STRA</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'helpdesk' ? 'rotate-180 text-maroon' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${openDropdown === 'helpdesk' ? 'max-h-40' : 'max-h-0'}`}>
              <div className="pl-4 pr-1 pb-1 flex flex-col gap-0.5 border-l-2 border-maroon/30 ml-3 mt-1">
                <Link to="/helpdesk-stra" className="block py-2 px-3 text-sm rounded-brand hover:bg-maroon-subtle hover:text-maroon text-brand-gray-600">Pendaftaran ODS</Link>
                <Link to="/helpdesk-stra" className="block py-2 px-3 text-sm rounded-brand hover:bg-maroon-subtle hover:text-maroon text-brand-gray-600">Kalkulator Nilai KUM</Link>
                <Link to="/helpdesk-stra" className="block py-2 px-3 text-sm rounded-brand hover:bg-maroon-subtle hover:text-maroon text-brand-gray-600">Cek Jumlah KUM Saat Ini</Link>
              </div>
            </div>
          </li>

          <li>
            <NavLink
              to="/galeri"
              className={({ isActive }) =>
                `block py-3 px-3 rounded-brand transition-colors ${
                  isActive ? 'bg-maroon-subtle text-maroon font-semibold' : 'text-brand-gray-800 hover:bg-brand-gray-100'
                }`
              }
            >
              Galeri
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/kontak"
              className={({ isActive }) =>
                `block py-3 px-3 rounded-brand transition-colors ${
                  isActive ? 'bg-maroon-subtle text-maroon font-semibold' : 'text-brand-gray-800 hover:bg-brand-gray-100'
                }`
              }
            >
              Kontak
            </NavLink>
          </li>
        </ul>

        {/* Footer Drawer */}
        <div className="px-5 py-5 border-t border-brand-gray-100 shrink-0">
          <p className="text-xs font-semibold text-brand-gray-800 mb-0.5">IAI Sulawesi Tenggara</p>
          <p className="text-xs text-brand-gray-400">Veracity - Variety - Validity</p>
        </div>
      </div>
    </>
  );
}

