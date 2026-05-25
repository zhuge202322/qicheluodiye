"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Truck } from "lucide-react";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = ['/images/hero1.jpg', '/images/hero2.jpg', '/images/hero3.jpg'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen font-sans bg-darker">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b-4 border-accent">
        {/* Logo */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-30">
          <img 
            src="/images/logo.jpg" 
            alt="Suleiteng Auto Parts" 
            className="w-20 md:w-32 h-auto object-contain bg-white p-1 md:p-2 industrial-border" 
          />
        </div>

        {/* Background Carousel */}
        {heroImages.map((img, index) => (
          <div 
            key={img}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${currentSlide === index ? 'opacity-50' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-overlay"></div>
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(2.5rem,8vw,5rem)] font-bold text-white uppercase leading-tight text-shadow mb-12 tracking-wider"
          >
            Let's take you<br/>on a journey.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-row justify-center gap-3 sm:gap-6 md:gap-8 w-full px-2"
          >
            <img src="/images/log1.jpg" alt="SGMW" className="w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain p-2 md:p-0 industrial-border bg-white" />
            <img src="/images/log2.jpg" alt="Geely" className="w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain p-2 md:p-0 industrial-border bg-white" />
            <img src="/images/log3.jpg" alt="Changan" className="w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain p-2 md:p-0 industrial-border bg-white" />
          </motion.div>
        </div>
        
        <motion.a 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          href="https://wa.me/77712381763" 
          target="_blank"
          className="absolute bottom-8 left-4 right-4 md:left-auto md:bottom-12 md:right-12 bg-accent text-white px-4 py-3 md:px-6 md:py-4 flex items-center justify-center gap-2 md:gap-3 industrial-border hover:bg-dark hover:text-accent border-2 border-accent transition-colors font-bold uppercase tracking-wider group text-sm md:text-base"
        >
          <MessageCircle size={20} className="md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
          <span>Chat on WhatsApp</span>
          <ArrowRight size={20} className="md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </section>

      {/* About Us Section */}
      <section className="bg-industrial text-white py-20 px-4 md:px-8 lg:px-16 border-b border-steel/30 relative">
        <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-accent mb-12 uppercase flex flex-col">
              <span>О нас</span>
              <span className="text-steel text-2xl tracking-widest">(About us)</span>
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 border-l-4 border-accent pl-4">
                Suleiteng Auto Parts — Professional Partner with 20 Years of Excellence
              </h3>
              <p className="text-lg text-light-steel leading-relaxed">
                Nanjing Suleiteng Auto Parts Co., Ltd. is a premier professional wholesaler of Chinese automobile spare parts with <strong className="text-white">20 years</strong> of profound industry experience.
              </p>
              <p className="text-lg text-light-steel leading-relaxed">
                As a leading player in the Chinese market, we have established an impeccable reputation and high brand recognition, particularly specializing in the <strong className="text-white">Changan</strong> and <strong className="text-white">Geely</strong> sectors.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="relative group overflow-hidden industrial-border">
                <img 
                  src="/images/2.png"
                  alt="Warehouse Worker"  
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Advantages Section */}
      <section className="bg-dark text-white py-20 px-4 md:px-8 lg:px-16 border-b border-steel/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-accent mb-12 uppercase flex flex-col text-right">
              <span>Основные преимущества</span>
              <span className="text-steel text-2xl tracking-widest">Core Advantage</span>
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} className="order-2 md:order-1">
              <div className="relative group overflow-hidden industrial-border">
                <img 
                  src="/images/3.png" 
                  alt="Warehouse" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>
            </FadeIn>
            <div className="space-y-8 order-1 md:order-2">
              {[
                { title: "Two Decades of Expertise", desc: "20 years of dedicated operation in the auto parts industry, providing deep technical knowledge and market insight." },
                { title: "Massive Inventory", desc: "We operate a <strong class='text-white'>5,000-square-meter</strong> professional warehouse, ensuring high stock availability and rapid order fulfillment." },
                { title: "Professional Team", desc: "A dedicated team of <strong class='text-white'>20 full-time experts</strong> committed to providing seamless service from procurement to global logistics." },
                { title: "Proven Track Record", desc: "With an annual sales volume exceeding <strong class='text-white'>50 million RMB</strong>, we are a trusted partner for large-scale international trade." }
              ].map((item, index) => (
                <FadeIn key={index} delay={0.1 * index} className="bg-industrial p-6 industrial-border hover:border-accent transition-colors">
                  <h4 className="text-xl font-bold text-accent mb-3 uppercase tracking-wide">{item.title}</h4>
                  <p className="text-light-steel" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[url('/images/1.png')] bg-cover bg-fixed bg-center relative py-24 px-4 md:px-8 lg:px-16 border-b-4 border-accent">
        <div className="absolute inset-0 bg-dark/90 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-accent mb-8 uppercase">
              Почему мы выбрали SUD?<br/>
              <span className="text-white text-2xl tracking-widest">Why choose Suleiteng?</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl text-light-steel leading-relaxed mb-12 max-w-4xl mx-auto border-y border-steel/30 py-8">
              We are not just a supplier; we are your strategic partner in China. Whether you require original components or high-quality OEM parts, Suleiteng's 20-year legacy ensures reliability, professionalism, and the highest standards of integrity for every shipment.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4} className="bg-industrial inline-block p-8 industrial-border">
            <h3 className="text-3xl font-bold text-white mb-4 uppercase">Contact Us Today</h3>
            <p className="text-lg text-light-steel mb-4">Join our global network of satisfied partners in Central Asia, the Middle East, and beyond.</p>
            <p className="text-xl font-bold text-accent">Suleiteng Auto Parts — 20 Years of Professionalism at Your Service.</p>
          </FadeIn>
        </div>
      </section>

      {/* Products Section - SGMW */}
      <ProductSection 
        title="Частные запасные части для автомобилей"
        subtitle="SGMW automobile parts"
        images={['4.jpg', '5.jpg', '6.jpg', '7.jpg']}
      />

      {/* Products Section - Geely */}
      <ProductSection 
        title="Автомобильные запчасти Geely"
        subtitle="Geely automobile parts"
        images={['8.jpg', '9.jpg', '10.jpg', '11.jpg']}
        dark
      />

      {/* Products Section - Changan */}
      <ProductSection 
        title="Запасные части для автомобилей."
        subtitle="CHANGAN automobile parts"
        images={['12.jpg', '13.jpg', '14.jpg', '15.jpg']}
      />

      {/* Contact Us Section */}
      <section className="relative py-24 px-4 md:px-8 lg:px-16 text-white border-t-4 border-accent">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/42/1920/1080')] bg-cover bg-center opacity-20 grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black text-transparent flex flex-col text-center mb-16" style={{ WebkitTextStroke: '2px #ff3b30' }}>
              <span className="uppercase">Связаться с нами</span>
              <span className="text-3xl text-white tracking-[0.2em]" style={{ WebkitTextStroke: '0px' }}>CONTACT US</span>
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <FadeIn delay={0.2} className="space-y-10 bg-industrial/80 p-8 industrial-border backdrop-blur-md">
              <div>
                <h3 className="text-xl font-bold text-accent mb-3 uppercase flex items-center gap-2 border-b border-steel/30 pb-2">
                  <span className="w-2 h-2 bg-accent inline-block"></span>
                  почтовый адрес (Mail address)
                </h3>
                <p className="text-lg text-light-steel mt-4">
                  Building 40, Xianlin Automobile Parts City, Qixia District, Nanjing City, Jiangsu, China Province
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-accent mb-3 uppercase flex items-center gap-2 border-b border-steel/30 pb-2">
                  <span className="w-2 h-2 bg-accent inline-block"></span>
                  Телефон (Telephone)
                </h3>
                <div className="mt-4 space-y-4 text-light-steel">
                  <div>
                    <p className="text-white font-bold">Китайская компания (Chinese company):</p>
                    <p className="text-xl font-mono text-accent mt-1">+86 13584064241</p>
                  </div>
                  <div>
                    <p className="text-white font-bold">Казахстанский филиал (Kazakhstan branch):</p>
                    <p className="text-xl font-mono text-accent mt-1">+7 7712381763</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} className="space-y-10 bg-industrial/80 p-8 industrial-border backdrop-blur-md">
              <div>
                <h3 className="text-xl font-bold text-accent mb-3 uppercase flex items-center gap-2 border-b border-steel/30 pb-2">
                  <span className="w-2 h-2 bg-accent inline-block"></span>
                  почтовый ящик (Mailbox)
                </h3>
                <p className="text-lg text-light-steel mt-4 font-mono">xiongdajian888@gmail.com</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-accent mb-3 uppercase flex items-center gap-2 border-b border-steel/30 pb-2">
                  <span className="w-2 h-2 bg-accent inline-block"></span>
                  WhatsApp account
                </h3>
                <p className="text-xl font-mono text-accent mt-4 mb-6">+7 7712381763</p>
                <a 
                  href="https://wa.me/77712381763" 
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-dark transition-colors industrial-border w-full justify-center group"
                >
                  <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-steel py-8 px-4 text-center border-t border-steel/20">
        <p className="font-mono text-sm uppercase tracking-widest">&copy; 2026 Suleiteng Auto Parts Co., Ltd. All rights reserved.</p>
      </footer>
    </main>
  );
}

function ProductSection({ title, subtitle, images, dark = false }: { title: string, subtitle: string, images: string[], dark?: boolean }) {
  const bgClass = dark ? "bg-industrial border-y border-steel/30" : "bg-darker";
  
  return (
    <section className={`${bgClass} text-white py-20 px-4 md:px-8 lg:px-16`}>
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-6 mb-12">
            <div className="h-px bg-accent flex-grow hidden md:block"></div>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-white uppercase text-center md:text-left flex flex-col">
              <span>{title}</span>
              <span className="text-accent text-xl tracking-widest">{subtitle}</span>
            </h2>
            <div className="h-px bg-accent flex-grow hidden md:block"></div>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {images.map((img, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <div className="group flex flex-col items-center bg-white p-6 industrial-border hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                
                <div className="h-48 w-full flex items-center justify-center mb-6 overflow-hidden">
                  <img 
                    src={`/images/${img}`}
                    alt={`${subtitle} ${index + 1}`} 
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="w-12 h-12 rounded-none bg-dark flex items-center justify-center text-accent industrial-border group-hover:bg-accent group-hover:text-white transition-colors">
                  <Truck size={24} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
