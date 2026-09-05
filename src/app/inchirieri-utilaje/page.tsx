"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Truck, Wrench, Package, Cog } from "lucide-react";
import { brand } from "@/lib/brand";

const utilaje = [
  { name: "Buldo", desc: "Buldoexcavatoare pentru săpături și nivelare terenuri" },
  { name: "Bobcat", desc: "Minicargator pentru manipulare materiale și demolări" },
  { name: "Basculante 8×4", desc: "Transport agregate, materiale de construcții, deșeuri" },
  { name: "Basculante articulate 6×4", desc: "Transport pe terenuri dificile și accese restrânse" },
  { name: "Cilindri compactori", desc: "Compactare terasamente, pământ, agregate — orice greutate" },
  { name: "Vibratoare", desc: "Compactare straturi asfaltice și agregate" },
  { name: "Freze asfalt / beton", desc: "Decapare asfalt și beton pentru reparații și reabilitări" },
  { name: "Autogreder", desc: "Nivelare și profilare terasamente, drumuri, platforme" },
  { name: "Excavatoare", desc: "Săpături, demolări, manipulare materiale grele" },
  { name: "Scule și unelte", desc: "Echipamente auxiliare pentru lucrări de construcții" },
];

export default function InchirieriUtilajePage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/edil/hero.jpg" alt="Închirieri Utilaje" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink/70" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center max-w-3xl"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Închirieri Utilaje</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-4">
              Închirieri <span className="gold-text">Utilaje</span> de Construcții
            </h1>
            <p className="text-lg text-ash">
              Telefon: <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="text-gold font-bold">{brand.phone}</a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lista utilaje */}
      <section className="py-20 px-6 bg-canvas min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-6">Utilaje disponibile</h2>
            <p className="text-lg text-ash max-w-2xl mx-auto">
              Societatea noastră închiriază utilaje de construcții și oferă serviciile aferente acestora. Zona de lucru: {brand.workArea}.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {utilaje.map((u, i) => {
              const animations = [
                { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
                { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
                { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
              ];
              const anim = animations[i % 3];
              return (
                <motion.div
                  key={u.name}
                  initial={anim.initial}
                  whileInView={anim.animate}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  style={{ willChange: "transform, opacity" }}
                  className="glass rounded-2xl p-6 hover:border-gold/30 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      <Truck size={20} className="text-gold" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-cream">{u.name}</h3>
                  </div>
                  <p className="text-sm text-ash leading-relaxed">{u.desc}</p>
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
              Ai nevoie de un utilaj? Sună-ne!
            </h3>
            <p className="text-ash mb-6">
              <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="text-gold text-2xl font-bold">{brand.phone}</a>
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
            >
              Solicită ofertă <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
