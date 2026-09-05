"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home, Building, MapPin, Award, ShieldCheck, Sparkles, TrendingUp, Briefcase, Clock, BedDouble, Bath, Maximize, Play } from "lucide-react";
import BuildingHero3D from "@/components/building-hero-3d";
import { brand } from "@/lib/brand";
import { listings, testimonials } from "@/lib/listings";

// ============================================
// CATEGORII — tipuri de proprietăți
// ============================================
const categories = [
  {
    slug: "apartament",
    icon: Building,
    title: "Apartamente",
    short: "2 și 3 camere, decomandate, semidecomandate",
    text: "Apartamente în imobile noi și reabilitate, în toate zonele Bucureștiului: Titan, Pipera, Theodor Pallady, Unirii, Lujerului și multe altele.",
    image: "/enjoyresidence/images/listing-630-apt-3cam-titan.jpg",
  },
  {
    slug: "casa-vila",
    icon: Home,
    title: "Case și Vile",
    short: "Vile individuale, duplex, cu curte proprie",
    text: "Case și vile în Domnești, Otopeni, Drumul Taberei. De la vile P+M cu curte proprie, până la proprietăți de lux cu panouri fotovoltaice și design unic.",
    image: "/enjoyresidence/images/listing-682-vila-5cam-domnesti.jpg",
  },
  {
    slug: "garsoniera",
    icon: BedDouble,
    title: "Garsoniere",
    short: "Studii, decomandate, imobile noi 2021-2026",
    text: "Garsoniere în imobile noi cu finisaje premium: Militari, Lujerului, Lacul Morii. Suprafețe 30-44 mp, lift, centrală individuală, finisaje moderne.",
    image: "/enjoyresidence/images/listing-668-garsoniera-lujerului.jpg",
  },
  {
    slug: "teren",
    icon: MapPin,
    title: "Terenuri",
    short: "Intravilan, cu utilități, autorizații pregătite",
    text: "Terenuri intravilane în Domnești și Ilfov, cu toate utilitățile branșate în curte și autorizații de construcție pregătite. Front stradal, acces asfaltat.",
    image: "/enjoyresidence/images/listing-687-teren-domnesti.jpg",
  },
  {
    slug: "inchirieri",
    icon: Briefcase,
    title: "Închirieri",
    short: "Garsoniere și apartamente mobilate/utilate",
    text: "Închirieri garsoniere și apartamente în București: Drumul Taberei, Unirii, Militari, Lujerului. Proprietăți renovate, mobilate și utilate complet.",
    image: "/enjoyresidence/images/listing-691-garsoniera-inch-drumultaberei.jpg",
  },
  {
    slug: "ansambluri",
    icon: Building,
    title: "Ansambluri Rezidențiale",
    short: "Complexuri proprii, vile duplex, boutique",
    text: "Ansambluri rezidențiale Enjoy Residence: Otopeni, Giulești, Lacul Morii, Militari, Drumul Taberei. Vile duplex și apartamente boutique cu finisaje premium.",
    image: "/enjoyresidence/images/listing-685-apt-2cam-pipera.jpg",
  },
];

// ============================================
// VALORI — Enjoy Residence
// ============================================
const values = [
  { icon: ShieldCheck, title: "Exclusivitate", text: "Oferim oferte exclusive, supuse unor termeni și condiții. Ne rezervăm dreptul de a selecta clienții pentru a asigura calitatea tranzacției." },
  { icon: Award, title: "Profesionalism", text: "O companie cu angajați profesioniști care au o bună și reușită experiență în tranzacții imobiliare și în colaborarea cu oamenii." },
  { icon: Sparkles, title: "Ghidare Completă", text: "Facem tot ce trebuie ca tu să fii „enjoy\", liniștit și împlinit în noua locuință. Îți identificăm nevoile, îți arătăm soluțiile, apoi ne ocupăm până la final." },
  { icon: TrendingUp, title: "Rezultate Rapide", text: "Timpul tău este prețios. Ne ocupăm de toate procedurile necesare încheierii tranzacției, ca să poți folosi timpul în alte scopuri prioritare." },
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

  // Top 4 listings for featured section
  const featuredListings = listings.filter(l => l.tags.includes("TOP") || l.tags.includes("Exclusivitate")).slice(0, 4);

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
              <span className="text-cream text-3xl md:text-5xl italic font-normal">Vânzări și închirieri imobiliare în București și Ilfov</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-ash max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Apartamente, case, vile, garsoniere și terenuri. Te ajutăm să găsești locuința potrivită, cu oferte exclusive și consultanță completă până la finalul tranzacției.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto"
            >
              <Link
                href="/servicii"
                className="inline-flex items-center gap-2 px-8 py-4 glass text-gold font-semibold rounded-lg hover:border-gold/50 hover:shadow-[0_4px_30px_rgba(255,107,0,0.25)] transition-all duration-300"
              >
                Vezi ofertele <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 glass text-cream font-semibold rounded-lg hover:border-gold/50 hover:shadow-[0_4px_30px_rgba(255,107,0,0.25)] transition-all duration-300"
              >
                Contactează-ne
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
      {/* OFERTE FEATURED */}
      {/* ============================================ */}
      <section className="py-24 px-6 relative bg-canvas">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Oferte de top</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Proprietăți recomandate</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredListings.map((prop, i) => {
              const animations = [
                { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
                { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
                { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
                { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
              ];
              const anim = animations[i % 4];
              return (
                <motion.div
                  key={prop.id}
                  initial={anim.initial}
                  whileInView={anim.animate}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (i % 4) * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <Link
                    href={`/servicii/${prop.id}`}
                    className="group block glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 h-full"
                  >
                    <div className="relative h-56 overflow-hidden bg-ink/50">
                      <img
                        src={prop.image}
                        alt={prop.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        {prop.tags.includes("TOP") && (
                          <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-gold text-ink">TOP</span>
                        )}
                        {prop.tags.includes("Exclusivitate") && (
                          <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-gold/20 text-gold border border-gold/30">Exclusivitate</span>
                        )}
                        {prop.hasVideo && (
                          <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-red-600/80 text-white flex items-center gap-1">
                            <Play size={10} /> VIDEO
                          </span>
                        )}
                        {prop.status === "REZERVAT" && (
                          <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-red-900/80 text-white">REZERVAT</span>
                        )}
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="font-display text-xl font-bold gold-text">{prop.price.toLocaleString("ro")} {prop.priceUnit}</p>
                        <p className="text-xs text-ash flex items-center gap-1 mt-1">
                          <MapPin size={10} /> {prop.city}, {prop.zone}
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-sm font-bold text-cream mb-3 line-clamp-2 leading-tight">{prop.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-ash">
                        {prop.rooms && <span className="flex items-center gap-1"><BedDouble size={12} /> {prop.rooms}</span>}
                        {prop.bathrooms && <span className="flex items-center gap-1"><Bath size={12} /> {prop.bathrooms}</span>}
                        {prop.surface && <span className="flex items-center gap-1"><Maximize size={12} /> {prop.surface} mp</span>}
                        {prop.landSurface && <span className="flex items-center gap-1"><Maximize size={12} /> {prop.landSurface} mp</span>}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* DESPRE COMPANIE */}
      {/* ============================================ */}
      <section className="py-24 px-6 relative bg-surface">
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
                Facem tot ce trebuie ca tu să fii <span className="gold-text">„enjoy"</span> în noua locuință
              </h2>
              <p className="text-lg text-ash leading-relaxed mb-6">
                O companie cu angajați profesioniști care au o bună și reușită experiență în tranzacții imobiliare, în colaborarea cu oamenii și cu unitățile necesare încheierii procedurilor.
              </p>
              <p className="text-lg text-ash leading-relaxed mb-6">
                Îți identificăm nevoile, îți arătăm soluțiile, apoi ne ocupăm până la final de tranzacția ta. La sfârșitul tranzacției să te simți ACASĂ în noul tău cămin.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Apartamente de vânzare", "Case și vile", "Garsoniere", "Terenuri", "Închirieri", "Ansambluri rezidențiale"].map((item, i) => (
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
                  src="/enjoyresidence/images/listing-630-apt-3cam-titan.jpg"
                  alt={brand.name}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 hidden md:block">
                <p className="font-display text-4xl font-bold gold-text">63+</p>
                <p className="text-xs text-ash tracking-wide uppercase mt-1">Oferte active</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* STATISTICI */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-canvas">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Home, value: "57", label: "Oferte vânzare" },
              { icon: Briefcase, value: "6", label: "Oferte închiriere" },
              { icon: Building, value: "14", label: "Ansambluri rezidențiale" },
              { icon: Clock, value: "24/7", label: "Consultanță imobiliară" },
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
      <section className="py-24 px-6 bg-surface">
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
      {/* CATEGORII (în loc de servicii) */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Ce oferim</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Tipuri de proprietăți</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => {
              const animations = [
                { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
                { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
                { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
              ];
              const anim = animations[i % 3];
              const href = cat.slug === "inchirieri" ? "/inchirieri-utilaje" : cat.slug === "ansambluri" ? "/portofoliu" : "/servicii";
              return (
                <motion.div
                  key={cat.slug}
                  initial={anim.initial}
                  whileInView={anim.animate}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <Link
                    href={href}
                    className="group block glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 h-full"
                  >
                    <div className="relative h-48 overflow-hidden bg-ink/50 flex items-center justify-center">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                          <cat.icon size={20} className="text-gold" />
                        </div>
                        <h3 className="font-display text-lg font-bold text-cream">{cat.title}</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-ash leading-relaxed mb-4">{cat.text}</p>
                      <span className="text-gold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Vezi ofertele <ArrowRight size={14} />
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
      {/* TESTIMONIALE */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Ce spun clienții</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Testimoniale</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => {
              const animations = [
                { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
                { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
                { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
              ];
              const anim = animations[i % 3];
              return (
                <motion.div
                  key={i}
                  initial={anim.initial}
                  whileInView={anim.animate}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  style={{ willChange: "transform, opacity" }}
                  className="glass rounded-2xl p-6 hover:border-gold/20 transition-all duration-500"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-gold text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-ash leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                  <p className="text-xs text-gold font-semibold tracking-wide">— {t.name}</p>
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
            Găsește <span className="gold-text">locuința</span> potrivită
          </h2>
          <p className="text-lg text-ash mb-10">
            Sună-ne sau completează formularul de contact și te ajutăm să găsești proprietatea ideală, cu consultanță completă până la finalul tranzacției.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 text-lg"
          >
            Contactează-ne <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
