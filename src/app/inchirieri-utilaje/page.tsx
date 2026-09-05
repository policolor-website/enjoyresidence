"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, BedDouble, Bath, Maximize, Search } from "lucide-react";
import { brand } from "@/lib/brand";
import { listings } from "@/lib/listings";

const sortOptions = [
  { value: "newest", label: "Cele mai noi" },
  { value: "price-asc", label: "Preț crescător" },
  { value: "price-desc", label: "Preț descrescător" },
];

export default function InchirieriUtilajePage() {
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");

  const rentalListings = useMemo(() => listings.filter(l => l.transaction === "inchiriere"), []);

  const filtered = useMemo(() => {
    let result = rentalListings;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(l => l.title.toLowerCase().includes(q) || l.zone.toLowerCase().includes(q) || l.city.toLowerCase().includes(q));
    }
    if (sortBy === "price-asc") result = [...result].sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") result = [...result].sort((a, b) => b.price - a.price);
    else result = [...result].sort((a, b) => b.id - a.id);
    return result;
  }, [rentalListings, sortBy, searchQuery]);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/enjoyresidence/images/listing-691-garsoniera-inch-drumultaberei.jpg" alt="Închirieri" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink/70" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center max-w-3xl"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Imobiliare de închiriat</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-4">
              Închirieri <span className="gold-text">imobiliare</span>
            </h1>
            <p className="text-lg text-ash">
              {filtered.length} oferte disponibile. Garsoniere și apartamente mobilate/utilate în București.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lista închirieri */}
      <section className="py-20 px-6 bg-canvas min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Filtru */}
          <div className="glass rounded-2xl p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-stone uppercase tracking-wide mb-2 block">Căutare</label>
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone" />
                  <input
                    type="text"
                    placeholder="Titlu, zonă..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-ink/50 border border-gold/10 rounded-lg text-sm text-cream placeholder:text-stone focus:outline-none focus:border-gold/30"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-stone uppercase tracking-wide mb-2 block">Sortare</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-ink/50 border border-gold/10 rounded-lg text-sm text-cream focus:outline-none focus:border-gold/30"
                >
                  {sortOptions.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-ash text-lg">Nu am găsit proprietăți cu aceste filtre.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((prop, i) => {
                const animations = [
                  { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
                  { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
                  { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
                ];
                const anim = animations[i % 3];
                return (
                  <motion.div
                    key={prop.id}
                    initial={anim.initial}
                    whileInView={anim.animate}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
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
                        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                          {prop.tags.includes("Exclusivitate") && (
                            <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-gold/20 text-gold border border-gold/30">Exclusivitate</span>
                          )}
                        </div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <p className="font-display text-xl font-bold gold-text">{prop.price} {prop.priceUnit}</p>
                          <p className="text-xs text-ash flex items-center gap-1 mt-1">
                            <MapPin size={10} /> {prop.city}, {prop.zone}
                          </p>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-display text-sm font-bold text-cream mb-3 line-clamp-2 leading-tight">{prop.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-ash mb-3">
                          {prop.rooms && <span className="flex items-center gap-1"><BedDouble size={12} /> {prop.rooms} cam.</span>}
                          {prop.bathrooms && <span className="flex items-center gap-1"><Bath size={12} /> {prop.bathrooms} băi</span>}
                          {prop.surface && <span className="flex items-center gap-1"><Maximize size={12} /> {prop.surface} mp</span>}
                          {prop.floor && <span className="text-stone">{prop.floor}</span>}
                        </div>
                        <span className="text-gold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          Vezi detalii <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mt-16 glass rounded-2xl p-8 text-center"
          >
            <h3 className="font-display text-2xl font-bold text-cream mb-4">
              Nu ai găsit ce cauți? Sună-ne!
            </h3>
            <p className="text-ash mb-6">
              <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="text-gold text-2xl font-bold">{brand.phone}</a>
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
            >
              Contactează-ne <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
