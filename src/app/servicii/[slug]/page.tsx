"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRight, ArrowLeft, MapPin, BedDouble, Bath, Maximize, Building, Calendar, Check, Play, Phone, Mail, Home as HomeIcon } from "lucide-react";
import { brand } from "@/lib/brand";
import { listings } from "@/lib/listings";

export default function PropertyDetailPage() {
  const params = useParams();
  const idParam = params.slug as string;
  const property = listings.find(l => String(l.id) === idParam);

  if (!property) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-cream mb-4">Proprietate negăsită</h1>
          <Link href="/servicii" className="text-gold hover:underline">← Înapoi la oferte</Link>
        </div>
      </main>
    );
  }

  const relatedListings = listings.filter(l => l.id !== property.id && l.transaction === property.transaction).slice(0, 3);

  // Caracteristici principale
  const characteristics: { label: string; value?: string | number }[] = [
    { label: "Nr. camere", value: property.rooms },
    { label: "S. utilă", value: property.surface ? `${property.surface} mp` : undefined },
    { label: "S. teren", value: property.landSurface ? `${property.landSurface} mp` : undefined },
    { label: "S. construită", value: property.surfaceBuilt ? `${property.surfaceBuilt} mp` : undefined },
    { label: "Compartimentare", value: property.compartimentare },
    { label: "Confort", value: property.confort },
    { label: "Etaj", value: property.floor },
    { label: "Nr. băi", value: property.bathrooms },
    { label: "Nr. bucătării", value: property.kitchens },
    { label: "Nr. balcoane", value: property.balconies },
    { label: "Nr. parcări", value: property.parkings },
    { label: "Nr. garaje", value: property.garages },
    { label: "An construcție", value: property.yearBuilt },
    { label: "An renovare", value: property.yearRenovated },
    { label: "Structură", value: property.structure },
    { label: "Tip imobil", value: property.buildingType },
    { label: "Regim înălțime", value: property.buildingHeight },
    { label: "Clasă energetică", value: property.energyClass },
    { label: "Front stradal", value: property.frontStreetal ? `${property.frontStreetal} m` : undefined },
    { label: "Orientare", value: property.orientation },
    { label: "Clasificare teren", value: property.landClass },
  ].filter(c => c.value !== undefined);

  return (
    <main className="pt-20">
      {/* Hero cu imagine */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink/70" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center max-w-3xl"
          >
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs text-ash mb-4">
              <Link href="/" className="hover:text-gold">Acasă</Link>
              <span>/</span>
              <Link href="/servicii" className="hover:text-gold">Vânzări</Link>
              <span>/</span>
              <span className="text-gold">{property.zone}</span>
            </div>
            {/* Tags */}
            <div className="flex justify-center gap-2 mb-4">
              {property.tags.includes("TOP") && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold text-ink">TOP</span>
              )}
              {property.tags.includes("Exclusivitate") && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold/20 text-gold border border-gold/30">Exclusivitate</span>
              )}
              {property.hasVideo && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-600/80 text-white flex items-center gap-1">
                  <Play size={12} /> VEZI VIDEO
                </span>
              )}
              {property.status === "REZERVAT" && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-900/80 text-white">REZERVAT</span>
              )}
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-cream mb-4">{property.title}</h1>
            <p className="text-lg text-ash flex items-center justify-center gap-2 mb-4">
              <MapPin size={16} className="text-gold" /> {property.city}, {property.zone}
            </p>
            <p className="font-display text-4xl md:text-5xl font-bold gold-text">
              {property.price.toLocaleString("ro")} {property.priceUnit}
            </p>
            <p className="text-xs text-stone mt-2">ID: {property.externalId}</p>
          </motion.div>
        </div>
      </section>

      {/* Caracteristici + Descriere */}
      <section className="py-20 px-6 bg-canvas">
        <div className="max-w-5xl mx-auto">
          <Link href="/servicii" className="inline-flex items-center gap-2 text-ash hover:text-gold transition-colors mb-8 text-sm">
            <ArrowLeft size={16} /> Toate ofertele
          </Link>

          {/* Caracteristici */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 mb-12"
          >
            <h2 className="font-display text-xl font-bold text-cream mb-6">Caracteristici</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {characteristics.map((c, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xs text-stone uppercase tracking-wide">{c.label}</span>
                  <span className="text-sm text-cream font-semibold">{c.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Descriere */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-cream mb-6">Descriere</h2>
            <div className="text-ash leading-relaxed whitespace-pre-line">{property.description}</div>
          </motion.div>

          {/* Video */}
          {property.hasVideo && property.videoUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-bold text-cream mb-6 flex items-center gap-2">
                <Play size={20} className="text-gold" /> Video prezentare
              </h2>
              <div className="glass rounded-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="500"
                  src={property.videoUrl}
                  title={`Video ${property.title}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full"
                />
              </div>
            </motion.div>
          )}

          {/* Specificații */}
          {(property.features.utilities || property.features.heating || property.features.cooling || property.features.insulation || property.features.walls || property.features.floors || property.features.windows || property.features.usefulSpaces || property.features.kitchen || property.features.building) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-6 mb-12"
            >
              <h2 className="font-display text-2xl font-bold text-cream mb-6">Specificații</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {property.features.utilities && property.features.utilities.length > 0 && (
                  <div>
                    <h3 className="text-sm font-bold text-gold mb-3 uppercase tracking-wide">Utilități generale</h3>
                    <ul className="space-y-2">
                      {property.features.utilities.map((u, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-ash">
                          <Check size={12} className="text-gold mt-0.5 shrink-0" /> {u}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {(property.features.heating || property.features.cooling) && (
                  <div>
                    <h3 className="text-sm font-bold text-gold mb-3 uppercase tracking-wide">Încălzire / Climatizare</h3>
                    <ul className="space-y-2">
                      {property.features.heating?.map((h, i) => (
                        <li key={`h${i}`} className="flex items-start gap-2 text-xs text-ash">
                          <Check size={12} className="text-gold mt-0.5 shrink-0" /> {h}
                        </li>
                      ))}
                      {property.features.cooling?.map((c, i) => (
                        <li key={`c${i}`} className="flex items-start gap-2 text-xs text-ash">
                          <Check size={12} className="text-gold mt-0.5 shrink-0" /> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {(property.features.walls || property.features.floors || property.features.windows || property.features.state) && (
                  <div>
                    <h3 className="text-sm font-bold text-gold mb-3 uppercase tracking-wide">Finisaje</h3>
                    <ul className="space-y-2">
                      {property.features.walls?.map((w, i) => (
                        <li key={`w${i}`} className="flex items-start gap-2 text-xs text-ash">
                          <Check size={12} className="text-gold mt-0.5 shrink-0" /> Pereti: {w}
                        </li>
                      ))}
                      {property.features.floors?.map((f, i) => (
                        <li key={`f${i}`} className="flex items-start gap-2 text-xs text-ash">
                          <Check size={12} className="text-gold mt-0.5 shrink-0" /> Podele: {f}
                        </li>
                      ))}
                      {property.features.windows?.map((w, i) => (
                        <li key={`fw${i}`} className="flex items-start gap-2 text-xs text-ash">
                          <Check size={12} className="text-gold mt-0.5 shrink-0" /> Ferestre: {w}
                        </li>
                      ))}
                      {property.features.state && (
                        <li className="flex items-start gap-2 text-xs text-ash">
                          <Check size={12} className="text-gold mt-0.5 shrink-0" /> Stare: {property.features.state}
                        </li>
                      )}
                    </ul>
                  </div>
                )}
                {(property.features.usefulSpaces || property.features.kitchen) && (
                  <div>
                    <h3 className="text-sm font-bold text-gold mb-3 uppercase tracking-wide">Dotări</h3>
                    <ul className="space-y-2">
                      {property.features.usefulSpaces?.map((s, i) => (
                        <li key={`s${i}`} className="flex items-start gap-2 text-xs text-ash">
                          <Check size={12} className="text-gold mt-0.5 shrink-0" /> {s}
                        </li>
                      ))}
                      {property.features.kitchen?.map((k, i) => (
                        <li key={`k${i}`} className="flex items-start gap-2 text-xs text-ash">
                          <Check size={12} className="text-gold mt-0.5 shrink-0" /> Bucătărie: {k}
                        </li>
                      ))}
                      {property.features.furnished && (
                        <li className="flex items-start gap-2 text-xs text-ash">
                          <Check size={12} className="text-gold mt-0.5 shrink-0" /> Mobilat: {property.features.furnished}
                        </li>
                      )}
                    </ul>
                  </div>
                )}
                {property.features.building && property.features.building.length > 0 && (
                  <div>
                    <h3 className="text-sm font-bold text-gold mb-3 uppercase tracking-wide">Imobil</h3>
                    <ul className="space-y-2">
                      {property.features.building.map((b, i) => (
                        <li key={`b${i}`} className="flex items-start gap-2 text-xs text-ash">
                          <Check size={12} className="text-gold mt-0.5 shrink-0" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Contact agent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="font-display text-2xl font-bold text-cream mb-4">
              Vrei mai multe informații?
            </h3>
            <p className="text-ash mb-6">
              Contactează-ne pentru detalii despre ID {property.externalId}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-gold text-lg font-bold">
                <Phone size={18} /> {brand.phone}
              </a>
              <a href={`mailto:${brand.email}`} className="flex items-center gap-2 text-gold text-lg font-bold">
                <Mail size={18} /> {brand.email}
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
            >
              Contactează-ne <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Recomandări */}
      {relatedListings.length > 0 && (
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-cream mb-8 text-center">Recomandări</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedListings.map((prop, i) => (
                <motion.div
                  key={prop.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    href={`/servicii/${prop.id}`}
                    className="group block glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="font-display text-lg font-bold gold-text">{prop.price.toLocaleString("ro")} {prop.priceUnit}</p>
                        <p className="text-xs text-ash flex items-center gap-1 mt-1">
                          <MapPin size={10} /> {prop.city}, {prop.zone}
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-sm font-bold text-cream line-clamp-2">{prop.title}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
