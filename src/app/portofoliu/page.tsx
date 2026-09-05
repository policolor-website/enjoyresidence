"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight, Building, Check } from "lucide-react";
import { ansambluri } from "@/lib/listings";

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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Ansambluri rezidențiale</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">Proiectele noastre</h1>
            <p className="text-lg text-ash max-w-2xl mx-auto">
              {ansambluri.length} ansambluri rezidențiale construite de Enjoy Residence. Vile duplex, apartamente boutique și complexuri rezidențiale cu finisaje premium.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ansambluri.map((p, i) => {
              const animations = [
                { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
                { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
                { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
              ];
              const anim = animations[i % 3];
              const isVandut = p.status.includes("VANDUT");
              const isPartial = p.status.includes("50%");
              return (
                <motion.div
                  key={p.id}
                  initial={anim.initial}
                  whileInView={anim.animate}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <Link
                    href={`/portofoliu/${p.id}`}
                    className="group block glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 h-full"
                  >
                    <div className="relative h-56 overflow-hidden bg-ink/50">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${isVandut ? "bg-stone/20 text-stone border border-stone/30" : isPartial ? "bg-gold text-ink" : "bg-gold/20 text-gold border border-gold/30"}`}>
                          {p.status}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="font-display text-base font-bold text-cream leading-tight line-clamp-2">{p.name}</h3>
                        <p className="text-xs text-gold tracking-wide mt-1 flex items-center gap-1">
                          <MapPin size={12} /> {p.city}, {p.zone}
                        </p>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-ash leading-relaxed mb-4 line-clamp-3">{p.description.split("\n")[0]}</p>
                      <div className="flex flex-wrap gap-2">
                        {p.details?.units && (
                          <span className="text-xs px-2 py-1 rounded bg-gold/10 text-gold">{p.details.units}</span>
                        )}
                        {p.details?.height && (
                          <span className="text-xs px-2 py-1 rounded bg-gold/10 text-gold">{p.details.height}</span>
                        )}
                        {p.details?.year && (
                          <span className="text-xs px-2 py-1 rounded bg-gold/10 text-gold">{p.details.year}</span>
                        )}
                        {p.details?.units2 && (
                          <span className="text-xs px-2 py-1 rounded bg-gold/10 text-gold">{p.details.units2}</span>
                        )}
                      </div>
                      <span className="text-gold text-sm flex items-center gap-1 group-hover:gap-2 transition-all mt-4">
                        Vezi detalii <ArrowRight size={14} />
                      </span>
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
              Vrei să vezi ofertele noastre active?
            </h3>
            <p className="text-ash mb-6">Descoperă proprietățile disponibile acum în București și Ilfov.</p>
            <Link
              href="/servicii"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
            >
              Vezi ofertele <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
