"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin, Building2, Check, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { brand } from "@/lib/brand";
import { ansambluri } from "@/lib/listings";

export default function ProjectDetailPage() {
  const params = useParams();
  const idParam = params.slug as string;
  const project = ansambluri.find(a => String(a.id) === idParam);
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-cream mb-4">Ansamblu negăsit</h1>
          <Link href="/portofoliu" className="text-gold hover:underline">← Înapoi la ansambluri</Link>
        </div>
      </main>
    );
  }

  const isVandut = project.status.includes("VANDUT");
  const isPartial = project.status.includes("50%");
  const gallery = project.gallery.length > 0 ? project.gallery : [project.image];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % gallery.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length);

  return (
    <main className="pt-20">
      {/* Hero cu galerie */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={gallery[currentImage]} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink/60" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 backdrop-blur-sm mb-6">
              <Building2 size={14} className="text-gold" />
              <span className="text-xs tracking-[0.25em] uppercase text-gold">{project.status}</span>
            </div>
            <h1 className="font-display text-2xl md:text-4xl font-bold text-cream mb-4 leading-tight">{project.name}</h1>
            <p className="text-gold flex items-center justify-center gap-2">
              <MapPin size={16} /> {project.city}, {project.zone}
            </p>
          </motion.div>
        </div>

        {/* Navigare galerie */}
        {gallery.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-gold hover:bg-gold/20 transition-all"
              aria-label="Imaginea anterioară"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-gold hover:bg-gold/20 transition-all"
              aria-label="Imaginea următoare"
            >
              <ChevronRight size={24} />
            </button>
            {/* Thumbnail dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {gallery.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? "bg-gold w-6" : "bg-cream/40"}`}
                  aria-label={`Imaginea ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Thumbnail strip */}
      {gallery.length > 1 && (
        <section className="py-4 px-6 bg-ink/50 border-b border-gold/10">
          <div className="max-w-5xl mx-auto flex gap-2 overflow-x-auto">
            {gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${idx === currentImage ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"}`}
              >
                <img src={img} alt={`${project.name} ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Conținut */}
      <section className="py-20 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <Link href="/portofoliu" className="inline-flex items-center gap-2 text-ash hover:text-gold transition-colors mb-8 text-sm">
            <ArrowLeft size={16} /> Toate ansamblurile
          </Link>

          {/* Descriere */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-cream mb-6">Descriere</h2>
            <div className="text-ash leading-relaxed whitespace-pre-line text-base">{project.description}</div>
          </motion.div>

          {/* Detalii ansamblu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-6 mb-8"
          >
            <h3 className="font-display text-xl font-bold text-cream mb-4">Detalii ansamblu</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.details?.units && (
                <div>
                  <span className="text-xs text-stone uppercase tracking-wide">Unități</span>
                  <p className="text-sm text-cream font-semibold">{project.details.units}</p>
                </div>
              )}
              {project.details?.units2 && (
                <div>
                  <span className="text-xs text-stone uppercase tracking-wide">Blocuri</span>
                  <p className="text-sm text-cream font-semibold">{project.details.units2}</p>
                </div>
              )}
              {project.details?.height && (
                <div>
                  <span className="text-xs text-stone uppercase tracking-wide">Regim înălțime</span>
                  <p className="text-sm text-cream font-semibold">{project.details.height}</p>
                </div>
              )}
              {project.details?.year && (
                <div>
                  <span className="text-xs text-stone uppercase tracking-wide">An construcție</span>
                  <p className="text-sm text-cream font-semibold">{project.details.year}</p>
                </div>
              )}
              {project.details?.parking && (
                <div>
                  <span className="text-xs text-stone uppercase tracking-wide">Parcare</span>
                  <p className="text-sm text-cream font-semibold">{project.details.parking}</p>
                </div>
              )}
              <div>
                <span className="text-xs text-stone uppercase tracking-wide">Oraș</span>
                <p className="text-sm text-cream font-semibold">{project.city}</p>
              </div>
              <div>
                <span className="text-xs text-stone uppercase tracking-wide">Zona</span>
                <p className="text-sm text-cream font-semibold">{project.zone}</p>
              </div>
              <div>
                <span className="text-xs text-stone uppercase tracking-wide">Status</span>
                <p className={`text-sm font-semibold ${isVandut ? "text-stone" : "text-gold"}`}>{project.status}</p>
              </div>
            </div>
          </motion.div>

          {/* Dotări și finisaje */}
          {project.features && project.features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-6 mb-8"
            >
              <h3 className="font-display text-xl font-bold text-cream mb-4">Dotări și finisaje</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ash">
                    <Check size={14} className="text-gold mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Facilități zonă */}
          {project.areaInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-2xl p-6 mb-8"
            >
              <h3 className="font-display text-xl font-bold text-cream mb-4">Facilități zonă</h3>
              <div className="text-sm text-ash leading-relaxed whitespace-pre-line">{project.areaInfo}</div>
            </motion.div>
          )}

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 text-center"
          >
            <h3 className="font-display text-2xl font-bold text-cream mb-4">
              Vrei informații despre acest ansamblu?
            </h3>
            <p className="text-ash mb-6">Contactează-ne pentru detalii.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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

      {/* Alte ansambluri */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-cream mb-8 text-center">Alte ansambluri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ansambluri.filter(a => a.id !== project.id).slice(0, 3).map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/portofoliu/${a.id}`}
                  className="group block glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={a.image} alt={a.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-semibold ${a.status.includes("VANDUT") ? "bg-stone/20 text-stone" : "bg-gold text-ink"}`}>
                        {a.status}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-xs text-gold flex items-center gap-1 mb-1">
                        <MapPin size={10} /> {a.city}, {a.zone}
                      </p>
                      <h3 className="font-display text-sm font-bold text-cream line-clamp-2">{a.name}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
