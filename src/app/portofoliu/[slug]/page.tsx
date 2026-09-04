"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, MapPin, Building2 } from "lucide-react";

const projectsData: Record<string, {
  name: string;
  area: string;
  category: string;
  description: string;
  image: string;
}> = {
  "asfaltare-curte-general-berthelot": {
    name: "Asfaltare Curte — Str. General Berthelot",
    area: "București",
    category: "Comercial",
    description: "Asfaltare curte în strada General Berthelot, București. Lucrarea a inclus pregătirea terenului, aducerea de agregate și executarea stratului de uzură asfaltic. Asfaltarea curții a fost realizată cu utilaje proprii, respectând termenele stabilite cu beneficiarul.",
    image: "https://www.constructii-instalatii.ro/wp-content/uploads/2018/04/Asfaltare-Curte-in-strada-General-Berthelot-Bucuresti-1.jpg",
  },
  "asfaltare-parcare-cora-pantelimon": {
    name: "Asfaltare Parcare — CORA Pantelimon",
    area: "Pantelimon, Ilfov",
    category: "Comercial",
    description: "Asfaltare parcare la CORA Pantelimon. Lucrare de mare anvergură pentru un spațiu comercial cu suprafață mare de parcare. Am executat pregătirea terenului, structura rutieră și stratul de uzură asfaltic, asigurând durabilitate și rezistență la trafic intens.",
    image: "https://www.constructii-instalatii.ro/wp-content/uploads/2018/04/Asfaltare-Parcare-la-CORA-Pantelimon-3.jpg",
  },
  "asfaltare-parcare-romexpo": {
    name: "Asfaltare Parcare și Plombare Gropi — ROMEXPO",
    area: "București",
    category: "Comercial",
    description: "Asfaltare parcare și plombare gropi la ROMEXPO. Lucrare de reparații și reabilitare a infrastructurii de parcare. Am executat plombarea gropilor existente și reasfaltarea suprafețelor afectate, restaurând funcționalitatea parcării pentru evenimente de mare anvergură.",
    image: "https://www.constructii-instalatii.ro/wp-content/uploads/2015/12/Asfaltare-Parcare-si-Plombare-Gropi-la-ROMEXPO-5.jpg",
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug];

  if (!project) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-cream mb-4">Proiect negăsit</h1>
          <Link href="/portofoliu" className="text-gold hover:underline">← Înapoi la portofoliu</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink/70" />
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
              <span className="text-xs tracking-[0.25em] uppercase text-gold">{project.category}</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-4">{project.name}</h1>
            <p className="text-gold flex items-center justify-center gap-2">
              <MapPin size={16} /> {project.area}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <Link href="/portofoliu" className="inline-flex items-center gap-2 text-ash hover:text-gold transition-colors mb-8 text-sm">
            <ArrowLeft size={16} /> Toate proiectele
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">{project.name}</h2>
            <p className="text-lg text-ash leading-relaxed mb-12">{project.description}</p>

            <div className="glass rounded-2xl p-8 text-center">
              <h3 className="font-display text-xl font-bold text-cream mb-4">
                Ai un proiect similar? Contactează-ne!
              </h3>
              <p className="text-ash mb-6">Echipa noastră te poate ajuta cu un proiect la fel de reușit.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
              >
                Obțineți o cotație
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
