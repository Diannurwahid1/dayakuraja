import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { GoogleGenAI } from '@google/genai'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Halo Kak! 😊 Saya Sari dari RSUD Dayaku Raja. Ada yang bisa saya bantu hari ini?'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      console.log('🚀 Memulai request ke Gemini API...')
      console.log('📝 User message:', userMessage)
      
      const ai = new GoogleGenAI({
        apiKey: 'AIzaSyCX9OO5NK7UQNeLPmAz0czcwErpg4GO35U'
      })
      console.log('✅ GoogleGenAI instance created')

      // Context untuk AI
      const context = `Kamu adalah Sari, petugas front desk RSUD Dayaku Raja yang ramah dan helpful. Kamu sudah bekerja di sini selama 3 tahun dan sangat mengenal rumah sakit ini.

CARA BICARA:
- Gunakan bahasa Indonesia yang natural dan hangat seperti berbicara langsung
- Sapa dengan ramah, gunakan "Kak" untuk memanggil pasien
- Gunakan emoji sesekali untuk terlihat lebih friendly (😊, 🏥, ⏰, 📞, dll)
- Jawab singkat dan to the point, tidak bertele-tele
- Kalau tidak tahu, jujur saja dan tawarkan untuk menghubungi pihak rumah sakit

INFORMASI RSUD DAYAKU RAJA:

📍 Lokasi: Poros Kota Bangun, Tenggarong, Kutai Kartanegara, Kalimantan Timur

📞 Kontak:
- Telepon/WhatsApp: 0813-4730-2554
- IGD 24 Jam (Emergency)

⏰ Jam Operasional:
- Poliklinik: Senin-Jumat, 09:00 - 16:00 WITA
- IGD: 24 jam setiap hari

🏥 Layanan Kami:
- IGD 24 Jam (Gawat Darurat)
- Rawat Inap (berbagai kelas)
- Rawat Jalan (Poliklinik)
- Laboratorium (cek darah, urine, dll)
- Radiologi (Rontgen, USG)
- Bedah Central (Operasi)
- ICU (Perawatan Intensif)
- Farmasi (Apotek)

👨‍⚕️ Dokter Spesialis:
- dr. Franky Simarmata, M. Biomed., SP.Pd (Penyakit Dalam) - Senin-Kamis
- dr. M. Irwan Arziansyah E., Sp.M (Mata) - Selasa-Kamis
- dr. Ferdian Eris Prianto, Sp.B (Bedah Umum) - Senin-Jumat
- dr. Setya Girindra Wardana, Sp. OG (Kandungan) - Selasa-Rabu
- dr. Devi Indah Permata Sari (Penyakit Dalam) - Selasa-Jumat
- dr. Nenden Suliadiana Fajarini, Sp. An (Anestesi) - Tersedia

💳 Pembayaran:
- BPJS Kesehatan
- Asuransi swasta (AIA, Allianz, Prudential, Manulife, dll)
- Tunai/Debit/Kredit

💝 Motto Kami: "Menyapa dengan senyum, merawat dengan hati"

Contoh jawaban yang baik:
❌ JANGAN: "Terima kasih atas pertanyaan Anda. RSUD Dayaku Raja memiliki layanan IGD yang beroperasi 24 jam..."
✅ LAKUKAN: "Halo Kak! 😊 IGD kami buka 24 jam kok, jadi kapan pun bisa langsung datang ya. Ada yang perlu dibantu lagi?"

Sekarang jawab pertanyaan ini dengan natural: ${userMessage}`

      console.log('📤 Mengirim request ke Gemini...')
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: context
      })
      console.log('📥 Response received:', response)
      
      const text = response.text
      console.log('✅ Text extracted:', text)

      // Add AI response
      setMessages(prev => [...prev, { role: 'assistant', content: text }])
      console.log('✅ Message added to state')
    } catch (error) {
      console.error('❌ Error details:', error)
      console.error('❌ Error message:', error.message)
      console.error('❌ Error stack:', error.stack)
      
      let errorMessage = 'Maaf, terjadi kesalahan. Silakan coba lagi.'
      
      if (error.message) {
        errorMessage += `\n\nDetail: ${error.message}`
      }
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: errorMessage
      }])
    } finally {
      setIsLoading(false)
      console.log('🏁 Request completed')
    }
  }

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 flex items-center gap-2 md:gap-3">
            {/* Greeting Text Bubble */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.5 }}
              className="hidden sm:block bg-white px-3 md:px-5 py-2 md:py-3 rounded-xl md:rounded-2xl shadow-xl border border-gray-200"
            >
              <p className="text-xs md:text-sm font-semibold text-gray-800 whitespace-nowrap">
                👋 Halo! Ada yang bisa dibantu?
              </p>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
            </motion.div>

            {/* AI Button */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center group overflow-hidden border-2 md:border-4 border-white"
              style={{
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3), 0 0 0 4px rgba(255, 255, 255, 0.1), inset 0 -5px 20px rgba(0, 0, 0, 0.2)'
              }}
            >
              <img src="/ai.png" alt="Chat AI" className="w-full h-full object-cover rounded-full" />
              
              {/* Red Notification Badge with Pulse */}
              <span className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-red-400 to-red-600 rounded-full animate-pulse shadow-lg flex items-center justify-center border-2 border-white">
                <span className="text-white text-[10px] md:text-xs font-bold">1</span>
              </span>
              
              {/* Animated Ring */}
              <span className="absolute inset-0 rounded-full border-2 border-red-500 animate-ping opacity-75"></span>
              
              {/* Glow Effect */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white opacity-20"></span>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 md:bottom-6 right-0 md:right-6 w-full md:w-96 h-[100vh] md:h-[600px] md:rounded-3xl bg-white shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-4 md:p-5 flex items-center justify-between">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/ai.png" alt="AI Assistant" className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white">Sari - Front Desk</h3>
                  <p className="text-[10px] md:text-xs text-teal-100">RSUD Dayaku Raja</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] md:max-w-[80%] p-2.5 md:p-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-teal-600 text-white rounded-br-sm'
                        : 'bg-white text-gray-800 rounded-bl-sm shadow-sm'
                    }`}
                  >
                    <p className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white p-2.5 md:p-3 rounded-2xl rounded-bl-sm shadow-sm">
                    <Loader2 className="w-4 h-4 md:w-5 md:h-5 text-teal-600 animate-spin" />
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={sendMessage} className="p-3 md:p-4 bg-white border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ketik pesan..."
                  disabled={isLoading}
                  className="flex-1 px-3 md:px-4 py-2 md:py-3 text-sm md:text-base bg-gray-100 rounded-full outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 md:w-12 md:h-12 bg-teal-600 text-white rounded-full flex items-center justify-center hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot
