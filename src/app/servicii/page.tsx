"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home, Zap, Wrench, PaintBucket, Truck } from "lucide-react";
import { brand } from "@/lib/brand";

const services = [
  {
    slug: "constructii-case",
    icon: Home,
    title: "Construcții Case",
    text: `Construim case și vile în ${brand.workArea}, de la fundație până la stadiul agreat: la roșu, la gri sau la cheie. Lucrăm după proiectul tău sau te ajutăm să pornești lucrarea organizat.`,
    image: "/edil/service-case.png",
  },
  {
    slug: "instalatii-electrice",
    icon: Zap,
    title: "Instalații Electrice",
    text: "Executăm instalații electrice pentru case, vile, apartamente, birouri și spații comerciale. Proiectare, montaj, refacere și punere în funcțiune, cu electricieni autorizați.",
    image: "/edil/service-instalatii.png",
  },
  {
    slug: "instalatii-sanitare",
    icon: Wrench,
    title: "Instalații Sanitare",
    text: "Instalații apă-canal, termoficare, centrale termice, stații de pompare. Mentenanță preventivă și corectivă pentru clădiri civile și industriale.",
    image: "/edil/service-amenajari.png",
  },
  {
    slug: "renovari-amenajari",
    icon: PaintBucket,
    title: "Renovări / Amenajări",
    text: "Servicii de renovări clădiri, de la consolidare structură până la finisaje. Amenajări interioare și exterioare pentru orice tip de imobil.",
    image: "/edil/hero.jpg",
  },
  {
    slug: "drumuri-poduri",
    icon: Truck,
    title: "Drumuri și Poduri",
    text: "Construcții drumuri și poduri, alei și trotuare, parcări și platforme betonate, asfaltări. Infrastructură rutieră completă.",
    image: "/edil/art-temple.jpg",
  },
  {
    slug: "inchirieri-utilaje",
    icon: ArrowRight,
    title: "Închirieri Utilaje",
    text: "Închiriem utilaje de construcții și oferim serviciile aferente: buldo, bobcat, basculante, cilindri compactori, freze asfalt/beton, autogreder, excavatoare.",
    image: "/edil/service-proiectare.png",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-20 px-6 bg-canvas min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Ce facem</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">Serviciile noastre</h1>
            <p className="text-lg text-ash max-w-2xl mx-auto">
              Servicii complete de construcții, instalații, amenajări, finisaje. Suntem orientați spre a găsi cele mai bune soluții pentru clienții noștri.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv, i) => {
              const animations = [
                { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
                { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
                { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
              ];
              const anim = animations[i % 3];
              const href = srv.slug === "inchirieri-utilaje" ? "/inchirieri-utilaje" : `/servicii/${srv.slug}`;
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
                    href={href}
                    className="group block glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 h-full"
                  >
                    <div className="relative h-48 overflow-hidden bg-ink/50">
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
    </main>
  );
}
