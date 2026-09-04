"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const projects = [
  {
    slug: "asfaltare-curte-general-berthelot",
    name: "Asfaltare Curte — Str. General Berthelot",
    area: "București",
    category: "Comercial",
    description: "Asfaltare curte în strada General Berthelot, București. Lucrare de asfaltare cu pregătire teren și strat de uzură.",
    image: "https://www.constructii-instalatii.ro/wp-content/uploads/2018/04/Asfaltare-Curte-in-strada-General-Berthelot-Bucuresti-1.jpg",
  },
  {
    slug: "asfaltare-parcare-cora-pantelimon",
    name: "Asfaltare Parcare — CORA Pantelimon",
    area: "Pantelimon, Ilfov",
    category: "Comercial",
    description: "Asfaltare parcare la CORA Pantelimon. Lucrare de mare anvergură pentru spațiu comercial.",
    image: "https://www.constructii-instalatii.ro/wp-content/uploads/2018/04/Asfaltare-Parcare-la-CORA-Pantelimon-3.jpg",
  },
  {
    slug: "asfaltare-parcare-romexpo",
    name: "Asfaltare Parcare și Plombare Gropi — ROMEXPO",
    area: "București",
    category: "Comercial",
    description: "Asfaltare parcare și plombare gropi la ROMEXPO. Lucrare de reparații și reabilitare infrastructură parcare.",
    image: "https://www.constructii-instalatii.ro/wp-content/uploads/2015/12/Asfaltare-Parcare-si-Plombare-Gropi-la-ROMEXPO-5.jpg",
  },
];

export default function PortfolioPage() {
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Portofoliu</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">Lucrările noastre</h1>
            <p className="text-lg text-ash max-w-2xl mx-auto">
              Construim, amenajăm, reabilităm, renovăm. Câteva dintre proiectele noastre ne recomandă.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => {
              const animations = [
                { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
                { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
                { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
              ];
              const anim = animations[i % 3];
              return (
                <motion.div
                  key={p.slug}
                  initial={anim.initial}
                  whileInView={anim.animate}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <Link
                    href={`/portofoliu/${p.slug}`}
                    className="group block glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 h-full"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold/20 text-gold">
                          {p.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-display text-lg font-bold text-cream leading-tight">{p.name}</h3>
                        <p className="text-xs text-gold tracking-wide mt-1 flex items-center gap-1">
                          <MapPin size={12} /> {p.area}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mt-16 glass rounded-2xl p-8 text-center"
          >
            <h3 className="font-display text-2xl font-bold text-cream mb-4">
              Aveți un proiect similar? Contactați-ne!
            </h3>
            <p className="text-ash mb-6">Echipa noastră vă poate ajuta cu un proiect la fel de reușit.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
            >
              Obțineți o cotație <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
