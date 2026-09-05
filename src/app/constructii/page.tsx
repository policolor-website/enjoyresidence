"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Building2, Home, Hammer, Ruler, ShieldCheck,
  Award, Clock, Users, HardHat, Wrench, Trees, Check, Phone, Mail, MapPin
} from "lucide-react";
import { brand } from "@/lib/brand";
import { ansambluri } from "@/lib/listings";

// ============================================
// SERVICII DE CONSTRUCȚII
// ============================================
const serviciiConstructii = [
  {
    icon: Home,
    title: "Construcții Case și Vile",
    text: "Construim case și vile duplex cu structură rezistentă, izolație termică superioară și finisaje premium. De la fundație până la acoperiș, fiecare etapă este executată conform standardelor ENJOY RESIDENCE.",
    features: ["Structură beton armat", "Zidărie Porotherm 30cm", "Izolație polistiren 100mm", "Acoperiș tablă 0.5mm"],
  },
  {
    icon: Building2,
    title: "Imobile Colective (Blocuri)",
    text: "Ansambluri rezidențiale și imobile boutique cu regim de înălțime variabil. Concepție arhitecturală modernă, compartimentări curajoase și suprafețe vitrate enorme.",
    features: ["Regim D+P+4E+M", "Parcare subterană/acoperită", "Încălzire în pardoseală", "Finisaje PREMIUM"],
  },
  {
    icon: Hammer,
    title: "Lucrări de Finisaje",
    text: "Finisaje interioare și exterioare executate manual: tencuieli, gresie, faianță, tavane extensibile Barisol, tâmplărie PVC Salamander cu geam tripan.",
    features: ["Tencuială manuală", "Tavane Barisol GARANȚIE 10 ANI", "Gresie/faianță rectificată", "Tâmplărie Salamander 4 Seasons"],
  },
  {
    icon: Ruler,
    title: "Proiectare și Arhitectură",
    text: "Proiectare arhitecturală și structurală personalizată. Soluții tehnice optimizate pentru fiecare proprietate, cu respectarea normelor P+I și a reglementărilor locale.",
    features: ["Proiect arhitectură", "Proiect structură", "Proiect instalații", "Autorizație construcție"],
  },
  {
    icon: Wrench,
    title: "Instalații și Utilități",
    text: "Instalații electrice cu fir ignifugat, instalații sanitare, încălzire în pardoseală cu distribuitoare și automatizare pe etaj. Cablaje preinstalate pentru autoturisme electrice.",
    features: ["Încălzire în pardoseală", "Fir ignifugat Schneider+Panasonic", "Automatizare pe etaj", "Preinstalare încărcare EV"],
  },
  {
    icon: Trees,
    title: "Amenajări Exterioare",
    text: "Amenajarea curților și a spațiilor comune: gazon natural, arbori și tuia decorativi, alei, parcări și drumuri de acces private.",
    features: ["Gazon natural", "Arbori decorativi", "Drumuri de acces private", "Parcări cadastrate"],
  },
];

// ============================================
// ETAPE CONSTRUCȚIE
// ============================================
const etape = [
  { num: "01", title: "Consultare și Proiectare", text: "Discutăm nevoile tale, elaborăm proiectul arhitectural și obținem autorizația de construcție." },
  { num: "02", title: "Fundație și Structură", text: "Săpătură, fundație din beton armat, structură rezistentă conform proiectului structural." },
  { num: "03", title: "Zidărie și Acoperiș", text: "Zidărie Porotherm 30cm, izolație exterioară polistiren 100mm, acoperiș tablă 0.5mm cu garanție 10 ani." },
  { num: "04", title: "Instalații și Tâmplărie", text: "Instalații electrice ignifugate, încălzire în pardoseală, tâmplărie PVC Salamander cu geam tripan." },
  { num: "05", title: "Finisaje Premium", text: "Tencuială manuală, gresie/faianță rectificată, tavane Barisol, uși lemn masiv, obiecte sanitare premium." },
  { num: "06", title: "Amenajare și Predare", text: "Amenajare curte, drum de acces, verificări finale și predarea locuinței gata de locuit." },
];

// ============================================
// GARANȚII
// ============================================
const garantii = [
  { icon: ShieldCheck, title: "Acoperiș tablă 0.5mm", text: "GARANȚIE 10 ani montaj / 15 ani coroziune" },
  { icon: ShieldCheck, title: "Tavane Barisol", text: "GARANȚIE 10 ani" },
  { icon: ShieldCheck, title: "Baterii Ferro", text: "GARANȚIE 10 ani" },
  { icon: ShieldCheck, title: "Structură beton", text: "Conform normelor P+I, rezistență 50+ ani" },
];

// ============================================
// STANDARDE
// ============================================
const standarde = [
  { icon: Award, title: "Pereți Dubli 90cm", text: "30cm zidărie + izolație dublă polistiren 10cm + tencuială dublă pentru antifonare superioară între unități." },
  { icon: HardHat, title: "Materiale Premium", text: "Porotherm, Salamander, ROTO, Schneider, Panasonic, Ferro, Cersanit — doar branduri verificate și premium." },
  { icon: Users, title: "Echipă Profesională", text: "Angajați profesioniști cu experiență în construcții rezidențiale și colaborare cu oamenii." },
  { icon: Clock, title: "Termene Respectate", text: "Planificare riguroasă și respectarea termenelor stabilite cu beneficiarul pentru fiecare etapă." },
];

export default function ConstructiiPage() {
  const ansambluriFinalizate = ansambluri.filter(a => a.status.includes("VANDUT") || a.status.includes("FINALIZAT"));

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/enjoyresidence/images/ansamblu-445-otopeni-duplex.jpg" alt="Construcții Enjoy Residence" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink/75" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center max-w-3xl"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Firmă de Construcții</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">
              Construcții <span className="gold-text">Enjoy Residence</span>
            </h1>
            <p className="text-lg text-ash max-w-2xl mx-auto">
              Constructorul din spatele ansamblurilor rezidențiale Enjoy Residence. Case, vile și imobile boutique construite după cele mai exigente standarde de calitate și siguranță.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Despre firma de construcții */}
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
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Despre divizia de construcții</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
                Construim locuințe care <span className="gold-text">rezistă</span> în timp
              </h2>
              <p className="text-lg text-ash leading-relaxed mb-6">
                Enjoy Residence nu doar vinde și închiriază proprietăți — suntem și constructorul din spatele fiecărui ansamblu rezidențial pe care îl dezvoltăm. De la prima cărămidă până la predarea cheilor, controlăm fiecare etapă a procesului constructiv.
              </p>
              <p className="text-lg text-ash leading-relaxed mb-6">
                Cu peste <strong className="text-cream">10 ani de experiență</strong> în construcții rezidențiale, am livrat zeci de imobile și sute de unități locative în București, Otopeni și Ilfov. Fiecare proiect respectă standardele noastre exigente: structură rezistentă, izolație superioară, finisaje premium și materiale de la producători verificați.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Case și vile individuale", "Imobile colective boutique", "Ansambluri rezidențiale", "Finisaje premium", "Instalații complete", "Amenajări exterioare"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-ash">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/portofoliu" className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">
                Vezi ansamblurile construite <ArrowRight size={16} />
              </Link>
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
                  src="/enjoyresidence/images/ansamblu-373-otopeni-6vile.jpg"
                  alt="Construcții Enjoy Residence"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 hidden md:block">
                <p className="font-display text-4xl font-bold gold-text">12+</p>
                <p className="text-xs text-ash tracking-wide uppercase mt-1">Ansambluri construite</p>
              </div>
              <div className="absolute -top-6 -right-6 glass rounded-2xl p-6 hidden md:block">
                <p className="font-display text-4xl font-bold gold-text">200+</p>
                <p className="text-xs text-ash tracking-wide uppercase mt-1">Unități livrate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistici */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Building2, value: "12+", label: "Ansambluri construite" },
              { icon: Home, value: "200+", label: "Unități livrate" },
              { icon: Clock, value: "10+", label: "Ani experiență" },
              { icon: Award, value: "100%", label: "Finisaje premium" },
            ].map((stat, i) => (
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

      {/* Servicii de construcții */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Ce construim</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Servicii de construcții</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviciiConstructii.map((s, i) => {
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
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      <s.icon size={20} className="text-gold" />
                    </div>
                    <span className="font-display text-2xl font-bold text-stone">0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-cream mb-3">{s.title}</h3>
                  <p className="text-xs text-ash leading-relaxed mb-4">{s.text}</p>
                  <ul className="space-y-1.5">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-ash">
                        <Check size={12} className="text-gold mt-0.5 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Etape construcție */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">De la idee la locuință</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Etapele construcției</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {etape.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="glass rounded-2xl p-6 hover:border-gold/20 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-display text-3xl font-bold gold-text">{e.num}</span>
                  <div className="h-px flex-1 bg-gold/20" />
                </div>
                <h3 className="font-display text-lg font-bold text-cream mb-3">{e.title}</h3>
                <p className="text-xs text-ash leading-relaxed">{e.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standarde de calitate */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">De ce Enjoy Residence</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Standarde de calitate</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {standarde.map((s, i) => (
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
                    <s.icon size={20} className="text-gold" />
                  </div>
                  <span className="font-display text-2xl font-bold text-stone">0{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-cream mb-3">{s.title}</h3>
                <p className="text-xs text-ash leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanții */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Garanții</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Garanții oferite</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {garantii.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-gold/20 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <g.icon size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-cream">{g.title}</h3>
                  <p className="text-xs text-gold mt-1">{g.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portofoliu construit */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Portofoliu</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Ansambluri construite</h2>
            <p className="text-lg text-ash max-w-2xl mx-auto mt-4">
              {ansambluriFinalizate.length} ansambluri rezidențiale finalizate și locuite integral.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ansambluriFinalizate.slice(0, 8).map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ willChange: "transform, opacity" }}
              >
                <Link
                  href={`/portofoliu/${p.id}`}
                  className="group block glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 h-full"
                >
                  <div className="relative h-40 overflow-hidden bg-ink/50">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-xs text-gold flex items-center gap-1 mb-1">
                        <MapPin size={10} /> {p.city}, {p.zone}
                      </p>
                      <h3 className="font-display text-xs font-bold text-cream line-clamp-2">{p.name}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portofoliu"
              className="inline-flex items-center gap-2 px-8 py-4 glass text-gold font-semibold rounded-lg hover:border-gold/50 transition-all duration-300"
            >
              Vezi toate ansamblurile <ArrowRight size={18} />
            </Link>
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
            Vrei să construim <span className="gold-text">locuința ta</span>?
          </h2>
          <p className="text-lg text-ash mb-10">
            Contactează-ne pentru o consultanță personalizată. Discutăm despre proiectul tău, soluțiile tehnice potrivite și oferim o estimare clară.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-gold text-lg font-bold">
              <Phone size={18} /> {brand.phone}
            </a>
            <a href={`mailto:${brand.email}`} className="flex items-center gap-2 text-gold text-lg font-bold">
              <Mail size={18} /> {brand.email}
            </a>
          </div>
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
