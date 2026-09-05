"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck, Sparkles, TrendingUp, Home, Briefcase, Clock, Building } from "lucide-react";
import { brand } from "@/lib/brand";
import { testimonials } from "@/lib/listings";

const values = [
  { icon: ShieldCheck, title: "Exclusivitate", text: "Oferim oferte exclusive, supuse unor termeni și condiții. Ne rezervăm dreptul de a selecta clienții pentru a asigura calitatea tranzacției." },
  { icon: Award, title: "Profesionalism", text: "O companie cu angajați profesioniști care au o bună și reușită experiență în tranzacții imobiliare și în colaborarea cu oamenii." },
  { icon: Sparkles, title: "Ghidare Completă", text: "Facem tot ce trebuie ca tu să fii „enjoy\", liniștit și împlinit în noua locuință. Îți identificăm nevoile, îți arătăm soluțiile, apoi ne ocupăm până la final." },
  { icon: TrendingUp, title: "Rezultate Rapide", text: "Timpul tău este prețios. Ne ocupăm de toate procedurile necesare încheierii tranzacției, ca să poți folosi timpul în alte scopuri prioritare." },
];

const stats = [
  { icon: Home, value: "57", label: "Oferte vânzare" },
  { icon: Briefcase, value: "6", label: "Oferte închiriere" },
  { icon: Building, value: "14", label: "Ansambluri" },
  { icon: Clock, value: "24/7", label: "Consultanță" },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/enjoyresidence/images/listing-682-vila-5cam-domnesti.jpg" alt={brand.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink/70" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center max-w-3xl"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Despre Noi</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-4">
              Facem tot ce trebuie ca tu să fii <span className="gold-text">„enjoy"</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Despre companie */}
      <section className="py-24 px-6 bg-canvas">
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
                Tranzacții imobiliare în <span className="gold-text">{brand.workArea}</span>
              </h2>
              <p className="text-lg text-ash leading-relaxed mb-6">
                O companie cu angajați profesioniști care au o bună și reușită experiență în tranzacții imobiliare, în colaborarea cu oamenii și cu unitățile necesare încheierii procedurilor.
              </p>
              <p className="text-lg text-ash leading-relaxed mb-6">
                <strong className="text-cream">Care este scopul nostru?</strong> Facem tot ce trebuie ca tu să fii „enjoy", liniștit și împlinit în noua locuință. Îți identificăm nevoile, îți arătăm soluțiile, apoi ne ocupăm până la final de tranzacția ta.
              </p>
              <p className="text-lg text-ash leading-relaxed mb-6">
                <strong className="text-cream">Ce ne face pe noi să fim „enjoy"?</strong> La sfârșitul tranzacției să te simți ACASĂ în noul tău cămin, să simțim că munca noastră a fost de folos și a venit în sprijinul tău pentru a-ți prețui timpul și ca să-l poți folosi în alte scopuri prioritare.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Apartamente de vânzare", "Case și vile", "Garsoniere", "Terenuri", "Închirieri", "Ansambluri rezidențiale"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-ash">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" /> {item}
                  </li>
                ))}
              </ul>
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

      {/* Statistici */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
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

      {/* Valori */}
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

      {/* Testimoniale */}
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

      {/* CTA */}
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
            Găsește <span className="gold-text">locuința</span> potrivită!
          </h2>
          <p className="text-lg text-ash mb-10">
            Completează formularul de contact sau sună-ne și vei primi consultanță din partea echipei noastre.
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
