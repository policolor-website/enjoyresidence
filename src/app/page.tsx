"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home, Zap, Wrench, PaintBucket, Truck, Award, ShieldCheck, Sparkles, TrendingUp, Briefcase, Clock } from "lucide-react";
import BuildingHero3D from "@/components/building-hero-3d";
import { brand } from "@/lib/brand";

// ============================================
// SERVICII — 5 servicii LUCA HOME CONSTRUCT
// ============================================
const services = [
  {
    slug: "constructii-case",
    icon: Home,
    title: "Construcții Case",
    short: "Case parter, P+1, vile — la roșu, la gri sau la cheie",
    text: `Construim case și vile în ${brand.workArea}, de la fundație până la stadiul agreat cu beneficiarul. Lucrăm după proiectul tău sau te ajutăm să pornești lucrarea organizat.`,
    image: "/edil/service-case.png",
  },
  {
    slug: "instalatii-electrice",
    icon: Zap,
    title: "Instalații Electrice",
    short: "Case, vile, apartamente, birouri, spații comerciale",
    text: "Executăm instalații electrice pentru clădiri noi și existente: proiectare de execuție, montaj, refacere și punere în funcțiune, cu electricieni autorizați.",
    image: "/edil/service-instalatii.png",
  },
  {
    slug: "instalatii-sanitare",
    icon: Wrench,
    title: "Instalații Sanitare",
    short: "Apă-canal, termoficare, centrale termice, stații pompare",
    text: "Instalații apă-canal, termice, sanitare, centrale termice, stații de pompare. Mentenanță preventivă și corectivă pentru clădiri civile și industriale.",
    image: "/edil/service-amenajari.png",
  },
  {
    slug: "renovari-amenajari",
    icon: PaintBucket,
    title: "Renovări / Amenajări",
    short: "Consolidare structură, finisaje interioare și exterioare",
    text: "Servicii de renovări clădiri, de la consolidare structură până la finisaje. Amenajări interioare și exterioare pentru orice tip de imobil.",
    image: "/edil/hero.jpg",
  },
  {
    slug: "drumuri-poduri",
    icon: Truck,
    title: "Drumuri și Poduri",
    short: "Alei, trotuare, parcari, platforme betonate, asfaltări",
    text: "Construcții drumuri și poduri, alei și trotuare, parcări și platforme betonate, asfaltări. Infrastructură rutieră completă.",
    image: "/edil/art-temple.jpg",
  },
  {
    slug: "inchirieri-utilaje",
    icon: Briefcase,
    title: "Închirieri Utilaje",
    short: "Buldo, bobcat, basculante, excavatoare, freze asfalt",
    text: "Închiriem utilaje de construcții și oferim serviciile aferente: buldo, bobcat, basculante, cilindri compactori, freze asfalt/beton, autogreder, excavatoare.",
    image: "/edil/service-proiectare.png",
  },
];

// ============================================
// VALORI — 4 valori LUCA HOME CONSTRUCT
// ============================================
const values = [
  { icon: ShieldCheck, title: "Garanția Calității", text: "Oferim cele mai eficiente soluții pentru toate etapele proiectului, astfel încât la finalizare să realizați o economie considerabilă fără a face rabat de la calitate." },
  { icon: Award, title: "Experiență Bogată", text: "Companie cu experiență în domeniu, cu parteneriate strategice care ne ajută să vă oferim un raport calitate-pret imbatabil." },
  { icon: Sparkles, title: "Profesioniști", text: "Echipe formate din profesioniști în domeniu. Costuri reduse pentru toată gama de lucrări, cu personal specializat și atestat." },
  { icon: TrendingUp, title: "Creativitate", text: "Una dintre calitățile noastre este creativitatea. Profitati de ea pentru a obține soluții optimale pentru proiectul dumneavoastră." },
];

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 4;
      const animRange = heroHeight - window.innerHeight;
      setScrollProgress(Math.max(0, Math.min(1, scrollY / animRange)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fade out hero text as assembly begins (0 → 0.15 scroll)
  const heroTextOpacity = scrollProgress < 0.15
    ? 1 - (scrollProgress / 0.15)
    : 0;

  return (
    <main>
      {/* ============================================ */}
      {/* HERO — 3D Building animation */}
      {/* ============================================ */}
      <section className="relative h-[400vh] bg-ink">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <BuildingHero3D />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/40 via-transparent to-ink/80 pointer-events-none" />

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-4xl text-center px-6 pointer-events-none transition-opacity duration-300"
            style={{ opacity: heroTextOpacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs tracking-[0.25em] uppercase text-gold">{brand.tagline}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="font-display text-6xl md:text-8xl font-bold leading-[0.95] mb-6"
            >
              <span className="gold-text">{brand.name}</span>
              <br />
              <span className="text-cream text-3xl md:text-5xl italic font-normal">Construim și amenajăm spații comerciale și rezidențiale</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-ash max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Specialisti în construcții și instalații moderne. Realizăm lucrări de mare anvergură în domeniul construcțiilor civile, industriale și rezidențiale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto"
            >
              <Link
                href="/portofoliu"
                className="inline-flex items-center gap-2 px-8 py-4 glass text-gold font-semibold rounded-lg hover:border-gold/50 hover:shadow-[0_4px_30px_rgba(255,107,0,0.25)] transition-all duration-300"
              >
                Lucrări recente <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 glass text-cream font-semibold rounded-lg hover:border-gold/50 hover:shadow-[0_4px_30px_rgba(255,107,0,0.25)] transition-all duration-300"
              >
                Obțineți o cotație
              </Link>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
            <span className="text-xs tracking-[0.3em] uppercase text-stone">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* DESPRE COMPANIE */}
      {/* ============================================ */}
      <section className="py-24 px-6 relative bg-canvas">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ willChange: "transform, opacity" }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Cine suntem</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
                Construim <span className="gold-text">viitorul</span> cu experiență și preturi accesibile
              </h2>
              <p className="text-lg text-ash leading-relaxed mb-6">
                Societatea noastră activează cu succes pe piața lucrărilor de construcții-montaj, realizând lucrări de mare anvergură în domeniul construcțiilor civile, industriale și rezidențiale, precum și al construcțiilor de drumuri, poduri și restaurărilor clădirilor istorice.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Construcții case și vile", "Instalații electrice", "Instalații sanitare", "Renovări și amenajări", "Drumuri și poduri", "Închirieri utilaje"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-ash">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/despre-noi" className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">
                Despre noi <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden glass">
                <img
                  src="/edil/about.png"
                  alt={brand.name}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 hidden md:block">
                <p className="font-display text-4xl font-bold gold-text">20+</p>
                <p className="text-xs text-ash tracking-wide uppercase mt-1">Ani experiență</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* STATISTICI */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Home, value: "20+", label: "Ani experiență" },
              { icon: Briefcase, value: "100+", label: "Lucrări realizate" },
              { icon: Award, value: "ISO", label: "Certificare calitate" },
              { icon: Clock, value: "24/7", label: "Disponibilitate echipe" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 mx-auto">
                  <stat.icon size={24} className="text-gold" />
                </div>
                <p className="font-display text-4xl font-bold gold-text mb-2">{stat.value}</p>
                <p className="text-xs text-ash tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* VALORI */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">De ce să ne alegi</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Calitățile noastre</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="glass rounded-2xl p-6 hover:border-gold/20 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <val.icon size={20} className="text-gold" />
                  </div>
                  <span className="font-display text-2xl font-bold text-stone">0{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-cream mb-3">{val.title}</h3>
                <p className="text-xs text-ash leading-relaxed">{val.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SERVICII */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Ce facem</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Serviciile noastre</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv, i) => {
              const animations = [
                { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
                { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
                { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
              ];
              const anim = animations[i % 3];
              return (
                <motion.div
                  key={srv.slug}
                  initial={anim.initial}
                  whileInView={anim.animate}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <Link
                    href={srv.slug === "inchirieri-utilaje" ? "/inchirieri-utilaje" : `/servicii/${srv.slug}`}
                    className="group block glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 h-full"
                  >
                    <div className="relative h-48 overflow-hidden bg-ink/50 flex items-center justify-center">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                          <srv.icon size={20} className="text-gold" />
                        </div>
                        <h3 className="font-display text-lg font-bold text-cream">{srv.title}</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-ash leading-relaxed mb-4">{srv.text}</p>
                      <span className="text-gold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Vezi mai mult <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA */}
      {/* ============================================ */}
      <section className="py-32 px-6 bg-canvas">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ willChange: "transform, opacity" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
            Construim <span className="gold-text">viitorul</span> împreună
          </h2>
          <p className="text-lg text-ash mb-10">
            Aveți un proiect de realizat? Solicitați o cotație de preț și vă răspundem în cel mai scurt timp.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 text-lg"
          >
            Obțineți o cotație <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
