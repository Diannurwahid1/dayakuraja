import { useState } from 'react'
import { Search, Phone, Calendar, MapPin, Facebook, Instagram, ChevronDown, Menu, X, Ambulance, Building2, Stethoscope, FlaskConical, ScanLine, Scissors, Heart, Pill, UserRound } from 'lucide-react'
import { motion } from 'framer-motion'
import ChatBot from './components/ChatBot'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const installations = [
    { icon: Ambulance, title: 'Instalasi Gawat Darurat', desc: 'Layanan IGD 24 Jam', color: 'text-red-600', bg: 'bg-red-50' },
    { icon: Building2, title: 'Instalasi Rawat Inap', desc: 'Perawatan Pasien Rawat Inap', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: Stethoscope, title: 'Instalasi Rawat Jalan', desc: 'Poliklinik & Konsultasi', color: 'text-teal-600', bg: 'bg-teal-50' },
    { icon: FlaskConical, title: 'Instalasi Laboratorium', desc: 'Pemeriksaan Lab Lengkap', color: 'text-purple-600', bg: 'bg-purple-50' },
    { icon: ScanLine, title: 'Instalasi Radiologi', desc: 'Pemeriksaan Radiologi', color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { icon: Scissors, title: 'Instalasi Bedah Central', desc: 'Layanan Operasi', color: 'text-orange-600', bg: 'bg-orange-50' },
    { icon: Heart, title: 'Instalasi Care Unit (ICU)', desc: 'Perawatan Intensif', color: 'text-pink-600', bg: 'bg-pink-50' },
    { icon: Pill, title: 'Instalasi Farmasi', desc: 'Apotek & Obat-obatan', color: 'text-green-600', bg: 'bg-green-50' },
  ]

  const doctors = [
    { 
      name: 'dr. Franky Simarmata, M. Biomed., SP.Pd',
      specialty: 'Penyakit Dalam',
      schedule: 'Senin - Kamis',
      photo: '/franky.png'
    },
    { 
      name: 'dr. M. Irwan Arziansyah E., Sp.M',
      specialty: 'Mata',
      schedule: 'Selasa - Kamis',
      photo: '/irwan.jpg'
    },
    { 
      name: 'dr. Ferdian Eris Prianto, Sp.B',
      specialty: 'Bedah Umum',
      schedule: 'Senin - Jumat',
      photo: '/ferdian.png'
    },
    { 
      name: 'dr. Setya Girindra Wardana, Sp. OG',
      specialty: 'Kandungan',
      schedule: 'Selasa - Rabu',
      photo: '/setya.png'
    },
    { 
      name: 'dr. Devi Indah Permata Sari',
      specialty: 'Penyakit Dalam',
      schedule: 'Selasa - Jumat',
      photo: null
    },
    { 
      name: 'dr. Nenden Suliadiana Fajarini, Sp. An',
      specialty: 'Anestesi',
      schedule: 'Tersedia',
      photo: '/nenden.png'
    },
  ]

  const news = [
    {
      title: 'RSUD Dayaku Raja Gelar Capacity Building',
      date: 'Januari 2026',
      desc: 'Bersama SCB International Consulting untuk meningkatkan kualitas pelayanan',
      image: '/fotodayakuraja.png'
    },
    {
      title: 'Doa Bersama Persiapan Perpindahan Layanan',
      date: '14 Januari 2026',
      desc: 'Dalam rangka persiapan perpindahan layanan poliklinik di Gedung Kahoi',
      image: '/fotodoabersama.png'
    },
    {
      title: 'RSUD Dayaku Raja Gelar Fun Run 5K Perdana',
      date: '14 Desember 2025',
      desc: 'Kegiatan olahraga bersama untuk meningkatkan kesehatan masyarakat',
      image: '/fotofunrun.png'
    },
  ]

  const coreValues = [
    { title: 'Berorientasi pada Pelayanan', desc: 'Mengutamakan kepuasan dan kebutuhan pasien dalam setiap layanan', color: 'bg-teal-700' },
    { title: 'Akuntabel', desc: 'Bertanggung jawab penuh dalam setiap tindakan dan keputusan', color: 'bg-teal-800' },
    { title: 'Kompeten', desc: 'Tenaga medis profesional dengan keahlian terpercaya', color: 'bg-teal-600' },
    { title: 'Harmonis', desc: 'Menciptakan lingkungan kerja yang kondusif dan kolaboratif', color: 'bg-teal-700' },
    { title: 'Adaptif & Kolaboratif', desc: 'Siap beradaptasi dengan perkembangan dan bekerja sama untuk hasil terbaik', color: 'bg-teal-800' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="RSUD Dayaku Raja" className="h-8 md:h-12 w-auto" />
              <span className="text-base md:text-2xl font-bold text-teal-700">RSUD Dayaku Raja</span>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#layanan" className="text-gray-700 hover:text-teal-600">
                Layanan
              </a>
              <a href="#dokter" className="text-gray-700 hover:text-teal-600">
                Jadwal Dokter
              </a>
              <a href="#berita" className="text-gray-700 hover:text-teal-600">
                Berita
              </a>
              <a href="#profil" className="text-gray-700 hover:text-teal-600 flex items-center">
                Profil <ChevronDown className="ml-1 w-4 h-4" />
              </a>
            </nav>

            <div className="flex items-center space-x-2 md:space-x-4">
              <a href="tel:08134730255" className="px-3 md:px-6 py-1.5 md:py-2 bg-yellow-400 text-gray-900 rounded-full font-semibold hover:bg-yellow-500 flex items-center text-xs md:text-base">
                <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">IGD 24/7</span>
                <span className="sm:hidden">IGD</span>
              </a>
              <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-2">
              <a href="#layanan" className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Layanan</a>
              <a href="#dokter" className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Jadwal Dokter</a>
              <a href="#berita" className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Berita</a>
              <a href="#profil" className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Profil</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen md:h-screen">
        {/* Background Circles with Animation */}
        <motion.div 
          className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-teal-100 rounded-full opacity-30 blur-3xl translate-x-1/3 -translate-y-1/4"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-20 right-20 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-100 rounded-full opacity-20 blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-40 w-[150px] md:w-[250px] h-[150px] md:h-[250px] bg-teal-200 rounded-full opacity-15 blur-xl"
          animate={{ 
            scale: [1, 1.15, 1],
            x: [0, -20, 0],
            y: [0, 20, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4 py-8 md:py-16 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center w-full">
            <motion.div 
              className="z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-3xl md:text-5xl font-bold text-teal-800 mb-3 md:mb-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Rumah Sakit yang<br />
                <span className="text-teal-500">Berkualitas</span> dan Terpercaya
              </motion.h1>
              <motion.p 
                className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                "Menyapa dengan senyum, merawat dengan hati"
              </motion.p>
              <motion.p 
                className="text-sm md:text-base text-gray-600 mb-6 md:mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                RSUD Dayaku Raja melayani masyarakat Kutai Kartanegara dengan layanan kesehatan paripurna dan profesional.
              </motion.p>
            
              {/* Search Box */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg p-3 md:p-4 flex flex-col md:flex-row gap-3 md:gap-4 mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center flex-1 md:border-r md:pr-4">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-teal-600 mr-2" />
                  <select className="w-full outline-none text-gray-700 text-sm md:text-base">
                    <option>Dokter</option>
                    <option>Spesialis</option>
                    <option>Layanan</option>
                  </select>
                </div>
                <div className="flex items-center flex-1">
                  <input 
                    type="text" 
                    placeholder="Cari dokter atau layanan..." 
                    className="w-full outline-none text-gray-700 text-sm md:text-base"
                  />
                </div>
                <button className="bg-teal-600 text-white p-2 md:p-3 rounded-xl hover:bg-teal-700">
                  <Search className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </motion.div>

              {/* Quick Actions */}
              <motion.div 
                className="flex gap-2 md:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.a 
                  href="tel:08134730255" 
                  className="bg-white p-2 md:p-3 rounded-xl shadow-md hover:shadow-lg border border-gray-200 flex items-center gap-1 md:gap-2 flex-1 justify-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4 md:w-6 md:h-6 text-teal-600" />
                  <span className="text-xs md:text-sm font-semibold text-gray-700">Hubungi</span>
                </motion.a>
                <motion.button 
                  className="bg-teal-600 p-2 md:p-3 rounded-xl shadow-md hover:shadow-lg flex items-center gap-1 md:gap-2 px-3 md:px-4 flex-1 justify-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  <span className="text-xs md:text-sm font-semibold text-white">Jadwal</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Hero Image - Mepet Kanan */}
            <div className="relative md:absolute md:right-0 md:top-0 md:w-1/2 md:h-full flex items-center justify-end mt-6 md:mt-0">
              {/* Main Hero Image */}
              <motion.div 
                className="relative z-10 w-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <img 
                  src="/hero.png" 
                  alt="RSUD Dayaku Raja" 
                  className="w-full h-auto object-cover object-right"
                />
              </motion.div>

              {/* Floating Card - Telepon */}
              <motion.div 
                className="absolute bottom-4 md:bottom-20 left-2 md:left-8 bg-white p-2 md:p-4 rounded-xl md:rounded-2xl shadow-xl z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 md:w-6 md:h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-500">Telepon Informasi</p>
                    <p className="text-xs md:text-base font-bold text-gray-800">0813-4730-2554</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card - Jam Poliklinik */}
              <motion.div 
                className="absolute top-4 md:top-20 right-2 md:right-8 bg-yellow-50 border-2 border-yellow-200 p-2 md:p-3 rounded-xl md:rounded-2xl shadow-lg z-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center space-x-1 md:space-x-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs font-semibold text-gray-800">Jam Poliklinik</p>
                    <p className="text-[10px] md:text-xs text-teal-600 font-bold">09:00 - 16:00</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Installations Section */}
      <section id="layanan" className="container mx-auto px-4 py-8 md:py-16">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-teal-800 mb-3 md:mb-4">
            Instalasi & Layanan Medis
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl">
            RSUD Dayaku Raja menyediakan berbagai instalasi dan layanan medis yang lengkap untuk memenuhi kebutuhan kesehatan masyarakat Kutai Kartanegara.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8">
          {installations.map((installation, index) => {
            const IconComponent = installation.icon
            return (
              <div key={index} className="bg-white p-3 md:p-6 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
                  <div className={`w-10 h-10 md:w-16 md:h-16 ${installation.bg} rounded-xl md:rounded-2xl flex items-center justify-center`}>
                    <IconComponent className={`w-5 h-5 md:w-8 md:h-8 ${installation.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xs md:text-base font-bold text-gray-800 mb-1">{installation.title}</h3>
                    <p className="text-[10px] md:text-sm text-gray-600">{installation.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Doctors Schedule Section */}
      <section id="dokter" className="container mx-auto px-4 py-8 md:py-16">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-teal-800 mb-2">
            Jadwal Dokter Praktik
          </h2>
          <p className="text-sm md:text-base text-gray-600">Periode: 2 - 6 Februari 2026</p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8">
          {/* Left Side - Image & Info - Hidden on Mobile, shown on Desktop */}
          <div className="hidden md:block md:col-span-1">
            <div className="relative rounded-3xl overflow-hidden h-[400px] mb-6">
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800" 
                alt="Medical team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1">Tim Medis Profesional</h3>
                <p className="text-teal-100 text-sm">Dokter spesialis berpengalaman</p>
              </div>
            </div>

            {/* Calendar Widget */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-800">Februari 2026</h3>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">←</button>
                  <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">→</button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day, i) => (
                  <div key={i} className="text-gray-500 font-semibold text-xs">{day}</div>
                ))}
                {[...Array(28)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`p-2 rounded-lg cursor-pointer hover:bg-teal-50 ${
                      i >= 1 && i <= 5 ? 'bg-teal-600 text-white font-bold' : 'text-gray-700'
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs text-gray-600">
                  <span className="inline-block w-3 h-3 bg-teal-600 rounded mr-2"></span>
                  Jadwal Praktik Tersedia
                </p>
              </div>
            </div>

            {/* Info Box */}
            <div className="mt-6 bg-teal-50 p-4 rounded-xl">
              <p className="text-sm text-gray-700">
                <strong className="text-teal-800">Jam Pelayanan Poliklinik:</strong><br />
                <span className="text-teal-700">⏰ 09:00 - 16:00 WITA</span><br />
                <span className="text-gray-600">📅 Senin - Jumat</span>
              </p>
            </div>
          </div>

          {/* Mobile Only - Compact Header Image */}
          <div className="md:hidden mb-4">
            <div className="relative rounded-xl overflow-hidden h-[180px]">
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800" 
                alt="Medical team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="text-base font-bold mb-1">Tim Medis Profesional</h3>
                <p className="text-teal-100 text-xs">Dokter spesialis berpengalaman</p>
              </div>
            </div>
          </div>

          {/* Right Side - Doctor List */}
          <div className="md:col-span-2">
            {/* Filter Tabs */}
            <div className="flex gap-2 mb-4 md:mb-6 overflow-x-auto pb-2 scrollbar-hide">
              <button className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-600 text-white rounded-full text-xs md:text-sm font-semibold whitespace-nowrap">
                Semua Dokter
              </button>
              <button className="px-3 md:px-4 py-1.5 md:py-2 bg-white text-gray-700 rounded-full text-xs md:text-sm font-semibold hover:bg-gray-100 whitespace-nowrap border">
                Penyakit Dalam
              </button>
              <button className="px-3 md:px-4 py-1.5 md:py-2 bg-white text-gray-700 rounded-full text-xs md:text-sm font-semibold hover:bg-gray-100 whitespace-nowrap border">
                Bedah
              </button>
              <button className="px-3 md:px-4 py-1.5 md:py-2 bg-white text-gray-700 rounded-full text-xs md:text-sm font-semibold hover:bg-gray-100 whitespace-nowrap border">
                Mata
              </button>
              <button className="px-3 md:px-4 py-1.5 md:py-2 bg-white text-gray-700 rounded-full text-xs md:text-sm font-semibold hover:bg-gray-100 whitespace-nowrap border">
                Kandungan
              </button>
            </div>

            {/* Doctor Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {doctors.map((doctor, index) => (
                <div key={index} className="bg-white p-3 md:p-5 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-teal-200">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {doctor.photo ? (
                        <img 
                          src={doctor.photo} 
                          alt={doctor.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <UserRound className="w-6 h-6 md:w-8 md:h-8 text-teal-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-xs md:text-sm leading-tight">{doctor.name}</h3>
                      <p className="text-[10px] md:text-xs text-teal-600 font-semibold mb-1 md:mb-2">Spesialis {doctor.specialty}</p>
                      
                      <div className="flex items-center gap-1 md:gap-2 text-[10px] md:text-xs text-gray-600 mb-2">
                        <Calendar className="w-3 h-3" />
                        <span>{doctor.schedule}</span>
                      </div>

                      <div className="flex gap-2 mt-2 md:mt-3">
                        <button className="flex-1 px-2 md:px-3 py-1 md:py-1.5 bg-teal-600 text-white rounded-lg text-[10px] md:text-xs font-semibold hover:bg-teal-700">
                          Lihat Jadwal
                        </button>
                        <button className="px-2 md:px-3 py-1 md:py-1.5 border border-teal-600 text-teal-600 rounded-lg text-[10px] md:text-xs font-semibold hover:bg-teal-50">
                          Info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Only - Calendar & Info at Bottom */}
            <div className="md:hidden mt-6 space-y-4">
              {/* Calendar Widget */}
              <div className="bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-gray-800">Februari 2026</h3>
                  <div className="flex gap-2">
                    <button className="w-7 h-7 rounded-full hover:bg-gray-100 flex items-center justify-center text-sm">←</button>
                    <button className="w-7 h-7 rounded-full hover:bg-gray-100 flex items-center justify-center text-sm">→</button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day, i) => (
                    <div key={i} className="text-gray-500 font-semibold text-[10px]">{day}</div>
                  ))}
                  {[...Array(28)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`p-1.5 rounded-lg cursor-pointer text-xs ${
                        i >= 1 && i <= 5 ? 'bg-teal-600 text-white font-bold' : 'text-gray-700 hover:bg-teal-50'
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t">
                  <p className="text-[10px] text-gray-600 flex items-center">
                    <span className="inline-block w-2.5 h-2.5 bg-teal-600 rounded mr-2"></span>
                    Jadwal Praktik Tersedia
                  </p>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-teal-50 p-3 rounded-xl">
                <p className="text-xs text-gray-700">
                  <strong className="text-teal-800">Jam Pelayanan Poliklinik:</strong><br />
                  <span className="text-teal-700">⏰ 09:00 - 16:00 WITA</span><br />
                  <span className="text-gray-600">📅 Senin - Jumat</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="profil" className="bg-gray-50 py-10 md:py-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Mengapa Memilih <span className="text-teal-500">RSUD Dayaku Raja?</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl">
              RSUD Dayaku Raja berkomitmen memberikan pelayanan kesehatan terbaik dengan menjunjung tinggi nilai-nilai BerAKHLAK, 
              memadukan keahlian medis dengan kepedulian untuk memastikan setiap pasien merasa didukung dan dihargai.
            </p>
          </div>

          {/* Core Values Grid - 5 Cards with Images */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Card 1 - Large Left */}
            <div className="md:col-span-4 bg-gradient-to-br from-teal-700 to-teal-800 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
              <div className="p-5 md:p-8 h-full flex flex-col justify-between min-h-[350px] md:min-h-[500px]">
                <div>
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                    Berorientasi pada Pelayanan
                  </h3>
                  <p className="text-sm md:text-lg text-teal-100 leading-relaxed">
                    Mengutamakan kepuasan dan kebutuhan pasien dalam setiap layanan
                  </p>
                </div>
                <div className="mt-4 md:mt-6 flex-1 flex items-end">
                  <img 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop" 
                    alt="Pelayanan" 
                    className="w-full h-40 md:h-64 object-cover rounded-xl md:rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - 4 Cards in Grid */}
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Card 2 - Top Right */}
              <div className="bg-gradient-to-br from-teal-800 to-teal-900 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <div className="p-5 md:p-8 h-full flex flex-col justify-between min-h-[180px] md:min-h-[240px]">
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">
                      Akuntabel
                    </h3>
                    <p className="text-xs md:text-base text-teal-100 leading-relaxed">
                      Bertanggung jawab penuh dalam setiap tindakan dan keputusan
                    </p>
                  </div>
                  <div className="mt-3 md:mt-4 flex-1 flex items-end">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=200&fit=crop" 
                      alt="Akuntabel" 
                      className="w-full h-24 md:h-32 object-cover rounded-lg md:rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Card 3 - Top Right 2 */}
              <div className="bg-gradient-to-br from-teal-700 to-teal-800 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <div className="p-5 md:p-8 h-full flex flex-col justify-between min-h-[180px] md:min-h-[240px]">
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">
                      Kompeten
                    </h3>
                    <p className="text-xs md:text-base text-teal-100 leading-relaxed">
                      Tenaga medis profesional dengan keahlian terpercaya
                    </p>
                  </div>
                  <div className="mt-3 md:mt-4 flex-1 flex items-end">
                    <img 
                      src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=200&fit=crop" 
                      alt="Kompeten" 
                      className="w-full h-24 md:h-32 object-cover rounded-lg md:rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Card 4 - Bottom Left */}
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <div className="p-5 md:p-8 h-full flex flex-col justify-between min-h-[180px] md:min-h-[240px]">
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">
                      Harmonis
                    </h3>
                    <p className="text-xs md:text-base text-teal-100 leading-relaxed">
                      Menciptakan lingkungan kerja yang kondusif dan kolaboratif
                    </p>
                  </div>
                  <div className="mt-3 md:mt-4 flex-1 flex items-end">
                    <img 
                      src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=200&fit=crop" 
                      alt="Harmonis" 
                      className="w-full h-24 md:h-32 object-cover rounded-lg md:rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Card 5 - Bottom Right */}
              <div className="bg-gradient-to-br from-teal-800 to-teal-900 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <div className="p-5 md:p-8 h-full flex flex-col justify-between min-h-[180px] md:min-h-[240px]">
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">
                      Adaptif & Kolaboratif
                    </h3>
                    <p className="text-xs md:text-base text-teal-100 leading-relaxed">
                      Siap beradaptasi dengan perkembangan dan bekerja sama untuk hasil terbaik
                    </p>
                  </div>
                  <div className="mt-3 md:mt-4 flex-1 flex items-end">
                    <img 
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=200&fit=crop" 
                      alt="Adaptif & Kolaboratif" 
                      className="w-full h-24 md:h-32 object-cover rounded-lg md:rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="berita" className="bg-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Berita Terbaru</h2>
            <p className="text-sm md:text-base text-gray-600">Informasi dan kegiatan terkini RSUD Dayaku Raja</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {news.map((item, index) => (
              <a 
                key={index} 
                href={`/berita/${index + 1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all border border-gray-200"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title} 
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                      RSUD Dayaku Raja
                    </span>
                    <span className="text-xs text-gray-500">• {item.date}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight group-hover:text-teal-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-teal-600 font-semibold">
                      Kesehatan • 5 min read
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-teal-800 mb-3 md:mb-4">
            Bekerja Sama dengan Berbagai Asuransi
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            RSUD Dayaku Raja melayani pasien dengan berbagai jenis asuransi kesehatan
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 items-center">
          {[
            { name: 'BPJS Kesehatan', logo: '/bpjs.png' },
            { name: 'Allianz', logo: '/allianz.png' },
            { name: 'AXA Mandiri', logo: '/AXAmandiri.png' },
            { name: 'Prudential', logo: '/prudential.png' },
            { name: 'Manulife', logo: '/manulife.png' },
            { name: 'BCA Insurance', logo: '/bcainsurance.png' },
            { name: 'Cigna', logo: '/cigna.png' },
            { name: 'AIA', logo: '/aia.png' },
            { name: 'Sinarmas', logo: '/sinarmas.png' },
            { name: 'Jasa Raharja', logo: '/jasaraharja.png' }
          ].map((partner, i) => (
            <div key={i} className="flex items-center justify-center p-2 md:p-4 bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-8 md:h-12 w-auto object-contain hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Carousel */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 py-8 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">
            Layanan Unggulan Kami
          </h2>
          
          <div className="relative">
            {/* Carousel Container */}
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {/* Card 1 - IGD 24/7 */}
              <div className="min-w-[90%] md:min-w-[45%] lg:min-w-[30%] snap-start">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-full">
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="relative h-64 md:h-auto">
                      <img 
                        src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=500&h=400&fit=crop" 
                        alt="IGD 24/7" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent"></div>
                    </div>
                    <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-red-50 to-white">
                      <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4">
                        <Phone className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        IGD 24/7
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Layanan gawat darurat siap melayani Anda 24 jam sehari, 7 hari seminggu
                      </p>
                      <a 
                        href="tel:08134730255" 
                        className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Hubungi Sekarang
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Jadwal Dokter */}
              <div className="min-w-[90%] md:min-w-[45%] lg:min-w-[30%] snap-start">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-full">
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="relative h-64 md:h-auto">
                      <img 
                        src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&h=400&fit=crop" 
                        alt="Jadwal Dokter" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent"></div>
                    </div>
                    <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-teal-50 to-white">
                      <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-4">
                        <Calendar className="w-8 h-8 text-teal-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Jadwal Dokter Spesialis
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Cek jadwal praktik dokter spesialis dan buat janji konsultasi
                      </p>
                      <a 
                        href="#dokter" 
                        className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors"
                      >
                        <Calendar className="w-5 h-5 mr-2" />
                        Lihat Jadwal
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Layanan Medis */}
              <div className="min-w-[90%] md:min-w-[45%] lg:min-w-[30%] snap-start">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-full">
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="relative h-64 md:h-auto">
                      <img 
                        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=400&fit=crop" 
                        alt="Layanan Medis" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                    </div>
                    <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-white">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                        <Stethoscope className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Layanan Medis Lengkap
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Berbagai instalasi dan layanan medis untuk kebutuhan kesehatan Anda
                      </p>
                      <a 
                        href="#layanan" 
                        className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                      >
                        <Stethoscope className="w-5 h-5 mr-2" />
                        Lihat Layanan
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 - Informasi Umum */}
              <div className="min-w-[90%] md:min-w-[45%] lg:min-w-[30%] snap-start">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-full">
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="relative h-64 md:h-auto">
                      <img 
                        src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&h=400&fit=crop" 
                        alt="Informasi" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                    </div>
                    <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-purple-50 to-white">
                      <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                        <MapPin className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Jam Pelayanan
                      </h3>
                      <p className="text-gray-600 mb-2">
                        <strong>Poliklinik:</strong><br />
                        Senin - Jumat<br />
                        09:00 - 16:00 WITA
                      </p>
                      <p className="text-gray-600 mb-6">
                        <strong>IGD:</strong> 24 Jam
                      </p>
                      <a 
                        href="tel:08134730255" 
                        className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Hubungi Kami
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-3 md:mb-4">
                <img src="/logo.png" alt="RSUD Dayaku Raja" className="h-8 md:h-12 w-auto" />
                <span className="text-base md:text-xl font-bold">RSUD Dayaku Raja</span>
              </div>
              <p className="text-teal-200 text-xs md:text-sm mb-3 md:mb-4">
                Penyedia layanan kesehatan terkemuka yang berkomitmen pada keunggulan dalam perawatan medis
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center hover:bg-teal-600">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center hover:bg-teal-600">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Perusahaan</h3>
              <ul className="space-y-2 text-teal-200 text-xs md:text-sm">
                <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white">Karir</a></li>
                <li><a href="#" className="hover:text-white">Medis & Etika</a></li>
                <li><a href="#" className="hover:text-white">Penghargaan</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Spesialisasi</h3>
              <ul className="space-y-2 text-teal-200 text-xs md:text-sm">
                <li><a href="#" className="hover:text-white">Kardiologi</a></li>
                <li><a href="#" className="hover:text-white">Gastro</a></li>
                <li><a href="#" className="hover:text-white">Neurologi</a></li>
                <li><a href="#" className="hover:text-white">Ortopedi</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Layanan Medis</h3>
              <ul className="space-y-2 text-teal-200 text-xs md:text-sm">
                <li><a href="#" className="hover:text-white">Cari Dokter</a></li>
                <li><a href="#" className="hover:text-white">Buat Janji</a></li>
                <li><a href="#" className="hover:text-white">Layanan Darurat</a></li>
                <li><a href="#" className="hover:text-white">Asuransi & Pembayaran</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-teal-700 pt-6 md:pt-8 text-center text-teal-300 text-xs md:text-sm">
            <p>© 2026 RSUD Dayaku Raja. All rights reserved.</p>
            <p className="mt-2">Poros Kota Bangun, Tenggarong, Kutai Kartanegara, Kalimantan Timur</p>
            <p className="mt-1">Telepon: 0813-4730-2554 | Jam Pelayanan: 09:00 - 16:00 WITA</p>
          </div>
        </div>
      </footer>

      {/* Chat Bot */}
      <ChatBot />
    </div>
  )
}

export default App

