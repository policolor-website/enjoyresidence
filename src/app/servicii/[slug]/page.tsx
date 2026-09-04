"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRight, ArrowLeft, Home, Zap, Wrench, PaintBucket, Truck, Check } from "lucide-react";
import { brand } from "@/lib/brand";

const servicesData: Record<string, {
  icon: any;
  title: string;
  hero: string;
  description: string;
  features: string[];
  image: string;
}> = {
  "constructii-case": {
    icon: Home,
    title: "Construcții Case",
    hero: "Construcții Case",
    description: "Construim case și vile în București și Ilfov, de la fundație până la stadiul agreat cu beneficiarul: la roșu, la gri sau la cheie. Lucrăm după proiectul tău sau te ajutăm să pornești lucrarea organizat, cu ofertă clară și termene. Responsabilul tehnic cu execuția (RTE) colaborează cu noi pentru a asigura calitatea lucrării.",
    features: [
      "Case parter, P+1, vile",
      "Fundații, structură, zidărie",
      "Planșee, acoperiș, termoizolație",
      "Case la roșu, la gri și la cheie",
      "Modificări și extinderi pe clădiri existente",
      "RTE autorizați care respectă proiectul de execuție",
      "Ofertă clară și termene asumate",
    ],
    image: "/edil/service-case.png",
  },
  "instalatii-electrice": {
    icon: Zap,
    title: "Instalații Electrice",
    hero: "Instalații Electrice",
    description: "Executăm instalații electrice pentru case, vile, apartamente, birouri și spații comerciale. Lucrăm la clădiri noi și la instalații existente: proiectare de execuție, montaj, refacere și punere în funcțiune, împreună cu electricieni autorizați.",
    features: [
      "Instalații electrice pentru case noi",
      "Refacere și modernizare instalație existentă",
      "Tablouri electrice",
      "Prize, întrerupătoare, doze, circuite",
      "Iluminat interior și exterior",
      "Circuite dedicate pentru climatizare, electrocasnice sau atelier",
      "Instalații electrice pentru spații nerezidențiale",
      "Verificări și remedieri la instalații existente",
      "Personal autorizat / parteneri atestați",
    ],
    image: "/edil/service-instalatii.png",
  },
  "instalatii-sanitare": {
    icon: Wrench,
    title: "Instalații Sanitare",
    hero: "Instalații Sanitare",
    description: "Executăm instalații apă-canal, termoficare, centrale termice, stații de pompare. Oferim mentenanță preventivă și corectivă pentru clădiri civile și industriale. Utilizăm cele mai noi tehnologii în procedurile de montaj pentru instalațiile de climatizare, ventilatie, încălzire centrală, sanitare, stingere incendiu, pompe de căldură.",
    features: [
      "Instalații rețele de apă și canalizare",
      "Racorduri canal, modelarea sistemelor de alimentare cu apă",
      "Instalații termice — montaj radiatoare, conducte, centrale termice",
      "Centrale termice pe gaz sau pe lemne (autorizate ANRGN)",
      "Stații de pompare — casele pompelor complete",
      "Boilere, vase de expansiune, supape de siguranță",
      "Automatizări în funcție de temperaturile interioară și exterioară",
      "Pompe de circulație, pompe submersibile, hidrofoare",
      "Stații dedurizare și filtre, panouri solare",
      "Mentenanță preventivă, predictivă și corectivă",
    ],
    image: "/edil/service-amenajari.png",
  },
  "renovari-amenajari": {
    icon: PaintBucket,
    title: "Renovări / Amenajări",
    hero: "Renovări și Amenajări",
    description: "Servicii de renovări clădiri, de la consolidare structură până la finisaje. Amenajări interioare și exterioare pentru orice tip de imobil. Aplicăm soluții moderne de recompartimentare a spațiilor interioare, executăm lucrări de placare, izolații, vopsitorie, zugrăveli decorative, instalații termice și sanitare, lucrări de tâmplărie.",
    features: [
      "Consolidare structură și fundație",
      "Recompartimentare spații interioare",
      "Placare pereți cu gips-carton",
      "Izolații termice, fonice, hidroizolații",
      "Placări gresie, faianță, marmură",
      "Vopsitorie, zugrăveli decorative",
      "Montaj parchet, pardoseli, lambriu",
      "Montaj tâmplărie PVC cu geam termopan",
      "Amenajări exterioare: termosistem, vopsitorii, tencuieli",
    ],
    image: "/edil/hero.jpg",
  },
  "drumuri-poduri": {
    icon: Truck,
    title: "Drumuri și Poduri",
    hero: "Drumuri și Poduri",
    description: "Construcții drumuri și poduri, alei și trotuare, parcări și platforme betonate, asfaltări. Realizăm infrastructură rutieră completă, de la terasamente la stratul de uzură. Avem experiență în lucrări de mare anvergură: asfaltări parcări comerciale (CORA Pantelimon, ROMEXPO), asfaltări curți și străzi.",
    features: [
      "Construcții drumuri și poduri",
      "Alei și trotuare",
      "Parcări și platforme betonate",
      "Asfaltări — parcări, curți, străzi",
      "Plombare gropi și reparații asfalt",
      "Terasamente și infrastructură rutieră",
      "Lucrări de mare anvergură (parcări comerciale, ROMEXPO)",
    ],
    image: "/edil/art-temple.jpg",
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug];

  if (!service) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-cream mb-4">Serviciu negăsit</h1>
          <Link href="/servicii" className="text-gold hover:underline">← Înapoi la servicii</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink/70" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center max-w-3xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-gold/20 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto">
              <service.icon size={32} className="text-gold" />
            </div>
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">{brand.name}</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-4">{service.hero}</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <Link href="/servicii" className="inline-flex items-center gap-2 text-ash hover:text-gold transition-colors mb-8 text-sm">
            <ArrowLeft size={16} /> Toate serviciile
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">{service.title}</h2>
            <p className="text-lg text-ash leading-relaxed mb-12">{service.description}</p>

            <h3 className="font-display text-xl font-bold text-cream mb-6">Ce oferim:</h3>
            <div className="space-y-3">
              {service.features.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-gold" />
                  </span>
                  <span className="text-cream text-sm leading-relaxed">{feat}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mt-16 glass rounded-2xl p-8 text-center"
          >
            <h3 className="font-display text-2xl font-bold text-cream mb-4">
              Vrei o ofertă personalizată? Apelează-ne!
            </h3>
            <p className="text-ash mb-6">
              <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="text-gold text-2xl font-bold">{brand.phone}</a>
              <span className="mx-2 text-stone">/</span>
              <a href={`tel:${brand.phone2.replace(/\s/g, "")}`} className="text-gold text-2xl font-bold">{brand.phone2}</a>
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
            >
              Cere o ofertă <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
