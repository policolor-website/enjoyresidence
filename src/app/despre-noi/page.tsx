"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck, Sparkles, TrendingUp, Home, Briefcase, Clock } from "lucide-react";
import { brand } from "@/lib/brand";

const values = [
  { icon: ShieldCheck, title: "Garanția Calității", text: "Oferim cele mai eficiente soluții pentru toate etapele proiectului, astfel încât la finalizare să realizați o economie considerabilă fără a face rabat de la calitate." },
  { icon: Award, title: "Experiență Bogată", text: "Companie cu 20 de ani de experiență, cu parteneriate strategice care ne ajută să vă oferim un raport calitate-pret imbatabil." },
  { icon: Sparkles, title: "Profesioniști", text: "Echipe formate din profesioniști în domeniu. Costuri reduse pentru toată gama de lucrări, cu personal specializat și atestat." },
  { icon: TrendingUp, title: "Creativitate", text: "Una dintre calitățile noastre este creativitatea. Profitati de ea pentru a obține soluții optimale pentru proiectul dumneavoastră." },
];

const stats = [
  { icon: Home, value: "20+", label: "Ani experiență" },
  { icon: Briefcase, value: "100+", label: "Lucrări realizate" },
  { icon: Award, value: "ISO", label: "Certificare calitate" },
  { icon: Clock, value: "24/7", label: "Disponibilitate echipe" },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/edil/about.png" alt={brand.name} className="w-full h-full object-cover" />
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
              Constructori cu <span className="gold-text">experiență</span>
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
                Construcții și Instalații <span className="gold-text">București și România</span>
              </h2>
              <p className="text-lg text-ash leading-relaxed mb-6">
                Societatea noastră realizează lucrări de mare anvergură în domeniul construcțiilor civile, industriale și rezidențiale, precum și al construcțiilor de drumuri, poduri și restaurărilor clădirilor istorice.
              </p>
              <p className="text-lg text-ash leading-relaxed mb-6">
                Suntem mândri de calitatea serviciilor oferite clienților, avem echipe formate din profesioniști în domeniu. Pe parcursul celor 20 de ani de experiență am realizat o serie de parteneriate strategice care ne ajută să vă putem oferi un raport calitate-pret imbatabil.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Construcții case și vile", "Instalații electrice", "Instalații sanitare", "Renovări și amenajări", "Drumuri și poduri", "Închirieri utilaje"].map((item, i) => (
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

      {/* CTA */}
      <section className="py-32 px-6 bg-surface">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ willChange: "transform, opacity" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
            Aveți un proiect de realizat? <span className="gold-text">Solicitați o cotație!</span>
          </h2>
          <p className="text-lg text-ash mb-10">
            Completați formularul de contact sau sunați la numărul de telefon afișat și veți primi o ofertă din partea echipei noastre.
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
