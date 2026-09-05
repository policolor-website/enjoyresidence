// ============================================
// ENJOY RESIDENCE — Date proprietăți (10 anunțuri)
// ============================================

export type Transaction = "vanzare" | "inchiriere";
export type PropertyType = "apartament" | "casa-vila" | "garsoniera" | "teren" | "spatiu-birou" | "spatiu-comercial";

export interface Listing {
  id: number;
  externalId: string;
  title: string;
  transaction: Transaction;
  propertyType: PropertyType;
  price: number;
  priceUnit: string; // "€" sau "€/luna"
  plusTVA?: boolean;
  city: string;
  zone: string;
  rooms?: number;
  bathrooms?: number;
  surface?: number; // mp utili
  surfaceBuilt?: number;
  landSurface?: number;
  floor?: string;
  compartimentare?: string;
  confort?: string;
  kitchens?: number;
  balconies?: number;
  parkings?: number;
  garages?: number;
  yearBuilt?: number;
  yearRenovated?: number;
  structure?: string;
  buildingType?: string;
  buildingHeight?: string;
  energyClass?: string;
  frontStreetal?: number;
  frontCount?: number;
  orientation?: string;
  landClass?: string;
  tags: string[];
  hasVideo: boolean;
  videoUrl?: string;
  description: string;
  features: {
    utilities?: string[];
    heating?: string[];
    cooling?: string[];
    insulation?: string[];
    walls?: string[];
    floors?: string[];
    windows?: string[];
    doorEntry?: string;
    doorInterior?: string;
    state?: string;
    usefulSpaces?: string[];
    kitchen?: string[];
    metering?: string[];
    furnished?: string;
    building?: string[];
  };
  image: string;
  imageGallery: string[];
  status?: string; // "REZERVAT" etc.
}

export const listings: Listing[] = [
  {
    id: 630,
    externalId: "P244779",
    title: "VEZI VIDEO! Apartament 3 camere LUX | Imobil 2015 Exclusivist | 5/7 | TOTUL NOU",
    transaction: "vanzare",
    propertyType: "apartament",
    price: 250000,
    priceUnit: "€",
    city: "Bucuresti",
    zone: "Titan",
    rooms: 3,
    bathrooms: 2,
    surface: 96,
    floor: "Etaj 5",
    compartimentare: "Semidecomandat",
    confort: "Lux",
    kitchens: 2,
    yearBuilt: 2015,
    yearRenovated: 2024,
    structure: "Caramida",
    buildingType: "Bloc",
    buildingHeight: "P+7",
    tags: ["TOP", "Exclusivitate"],
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/474J5qjW-fQ",
    description: "Apartament cu 3 camere ultramodern, mobilat si utilat LUX. Numai mobilierul a costat peste 50.000 euro. Posibilitate achizitionare loc de parcare. Executat cu designer de interior. Supraveghere video 24/24. Comision 0. Centrala individuala, incalzire in pardoseala, instalatii aer conditionat, SMART TV-uri, 2 bucatarii high class, obiecte sanitare premium. ParkLake Mall in apropiere, metrou Titan 9 min.",
    features: {
      utilities: ["Curent", "Apa", "Canalizare", "Gaz", "CATV", "Acces internet", "Fibra optica"],
      heating: ["Centrala proprie", "Incalzire pardoseala"],
      cooling: ["Aer conditionat"],
      insulation: ["Exterior", "Interior", "Bloc izolat termic"],
      walls: ["Vopsea lavabila", "Faianta", "Vinarom"],
      floors: ["Parchet", "Gresie", "Marmura"],
      windows: ["PVC", "Termopan"],
      doorEntry: "Metal",
      doorInterior: "Lemn",
      usefulSpaces: ["Dressing"],
      kitchen: ["Mobilata", "Utilata"],
      metering: ["Apometre", "Contor caldura", "Contor gaz"],
      furnished: "Lux",
      building: ["Videointerfon", "Lift"],
    },
    image: "/enjoyresidence/images/listing-630-apt-3cam-titan.jpg",
    imageGallery: ["/enjoyresidence/images/listing-630-apt-3cam-titan.jpg"],
  },
  {
    id: 686,
    externalId: "P286933",
    title: "VEZI VIDEO! 2 Camere circular | 8/10 | BLOC REABILITAT TERMIC",
    transaction: "vanzare",
    propertyType: "apartament",
    price: 84900,
    priceUnit: "€",
    city: "Bucuresti",
    zone: "Titan",
    rooms: 2,
    bathrooms: 1,
    surface: 57,
    floor: "Etaj 8",
    compartimentare: "Circular",
    confort: "1",
    kitchens: 1,
    balconies: 1,
    yearBuilt: 1965,
    structure: "Beton",
    buildingType: "Bloc",
    buildingHeight: "P+10",
    tags: ["Exclusivitate"],
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/KZIcnAEzatQ",
    description: "2 Camere circular, reabilitat termic. Locatie: Titan - intre statiile de metrou Nicolae Grigorescu si Titan. Apartamentul urmeaza sa fie debarasat total pentru renovare. Super pozitie, totul la 6-7 min. Necesita renovare totala. Bloc izolat termic, scara intretinuta exemplar. Balcon inchis cu tamplarie PVC. ParkLake Mall 1km.",
    features: {
      utilities: ["Curent", "Apa", "Canalizare", "Gaz"],
      heating: ["Termoficare", "Calorifere"],
      cooling: ["Aer conditionat"],
      insulation: ["Exterior", "Bloc izolat termic"],
      walls: ["Var", "Faianta"],
      floors: ["Parchet"],
      state: "Necesita renovare",
      windows: ["PVC", "Termopan"],
      doorEntry: "Metal",
      doorInterior: "Lemn",
      usefulSpaces: ["Debara", "Dressing"],
      kitchen: ["Nemobilata", "Neutilata"],
      metering: ["Apometre", "Contor caldura"],
      furnished: "Partial",
      building: ["Interfon", "Lift"],
    },
    image: "/enjoyresidence/images/listing-686-apt-2cam-titan.jpg",
    imageGallery: ["/enjoyresidence/images/listing-686-apt-2cam-titan.jpg"],
  },
  {
    id: 687,
    externalId: "P286878",
    title: "VEZI VIDEO! Teren intravilan | TOATE UTILITATILE IN CURTE | 400mp",
    transaction: "vanzare",
    propertyType: "teren",
    price: 45000,
    priceUnit: "€",
    city: "Domnesti",
    zone: "Central",
    landSurface: 400,
    frontStreetal: 20,
    frontCount: 2,
    landClass: "Intravilan",
    buildingHeight: "P+1+M",
    tags: ["Exclusivitate"],
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/VLJsZhq7zCE",
    description: "3 Loturi teren intravilan de 400 mp in Domnesti - Curtea Domneasca. Comision 0. Toate utilitatile deja branșate in curte. Toate autorizatiile si avizele deja pregatite, incepi direct constructia. Posibilitate achizitionare extra 2 loturi teren 800mp total. Strada asfaltata noua. Utilitati: canalizare, apa curenta, gaz, electricitate, fibra optica. Apropiere A0.",
    features: {
      utilities: ["Curent", "Apa", "Canalizare", "Gaz", "Acces internet", "Fibra optica"],
    },
    image: "/enjoyresidence/images/listing-687-teren-domnesti.jpg",
    imageGallery: ["/enjoyresidence/images/listing-687-teren-domnesti.jpg"],
  },
  {
    id: 685,
    externalId: "P286463",
    title: "INCALZIRE GRATUITA! Apartament 2 camere | Pipera First Estates 2026",
    transaction: "vanzare",
    propertyType: "apartament",
    price: 144900,
    priceUnit: "€",
    city: "Bucuresti",
    zone: "Pipera",
    rooms: 2,
    bathrooms: 1,
    surface: 64,
    floor: "Etaj 8",
    compartimentare: "Semidecomandat",
    confort: "1",
    kitchens: 1,
    balconies: 1,
    yearBuilt: 2026,
    structure: "Caramida",
    buildingType: "Bloc",
    buildingHeight: "P+8",
    energyClass: "A",
    tags: ["Exclusivitate"],
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/eG4WXPggJNQ",
    description: "Primul complex care ofera incalzire gratuita. Complexul dispune de pompe de caldura geotermala + panouri fotovoltaice 640Kw. Incalzirea prin pardoseala este GRATUITA. Parchet SPC. Living spatios cu iesire balcon. Priveliste panoramica cu apusuri de soare. Complex Pipera Plaza 5 min.",
    features: {
      utilities: ["Curent", "Apa", "Canalizare", "Gaz"],
      heating: ["Centrala proprie", "Incalzire pardoseala"],
      insulation: ["Exterior", "Interior", "Bloc izolat termic"],
      walls: ["Vopsea lavabila", "Faianta"],
      floors: ["Parchet", "Gresie"],
      state: "Finisat",
      windows: ["PVC", "Termopan"],
      doorEntry: "Metal",
      doorInterior: "Lemn",
      usefulSpaces: ["Dressing"],
      kitchen: ["Nemobilata", "Neutilata"],
      metering: ["Apometre"],
      furnished: "Nemobilat",
      building: ["Videointerfon", "Lift", "Curte"],
    },
    image: "/enjoyresidence/images/listing-685-apt-2cam-pipera.jpg",
    imageGallery: ["/enjoyresidence/images/listing-685-apt-2cam-pipera.jpg"],
  },
  {
    id: 683,
    externalId: "P285811",
    title: "REZERVAT! Vila cu 4 camere, 2 bai | P+M | Domnesti - Teghes",
    transaction: "vanzare",
    propertyType: "casa-vila",
    price: 88000,
    priceUnit: "€",
    city: "Domnesti",
    zone: "Central",
    rooms: 4,
    bathrooms: 2,
    surface: 101,
    landSurface: 213,
    kitchens: 1,
    balconies: 1,
    parkings: 2,
    frontStreetal: 10.7,
    frontCount: 1,
    yearBuilt: 2010,
    structure: "Caramida",
    buildingHeight: "P+M",
    orientation: "Sud-Vest",
    status: "REZERVAT",
    tags: ["Exclusivitate"],
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/7HCGyZ86Www",
    description: "Oferta rezervata, vizionarile sunt sistate. Casa tip duplex + curte proprie in Domnesti-Teghes. Casa din caramida pe structura beton. Vedere impresionanta catre padure. Living generos cu geamuri mari, bucatarie mobilata/utilata, 3 dormitoare, 2 bai. Curte imprejmuita cu gard lemn, zona gratar cu nuc matur, gazon. Strada privata iluminata. Acoperis tabla BILKA. Apropiere A0.",
    features: {
      utilities: ["Curent", "Gaz", "Put", "Fosa septica", "CATV", "Telefon", "Acces internet", "Fibra optica", "Sistem irigatie"],
      heating: ["Centrala proprie", "Calorifere"],
      cooling: ["Aer conditionat"],
      insulation: ["Exterior", "Interior"],
      walls: ["Vopsea lavabila", "Faianta"],
      floors: ["Parchet", "Gresie"],
      state: "Finisat",
      windows: ["PVC", "Termopan"],
      doorEntry: "Metal",
      doorInterior: "Lemn",
      usefulSpaces: ["Spatiu depozitare", "Dressing", "WC Serviciu", "Anexe", "Dependinte"],
      kitchen: ["Mobilata", "Utilata"],
      metering: ["Contor gaz"],
      furnished: "Complet",
      building: ["Curte", "Gradina"],
    },
    image: "/enjoyresidence/images/listing-683-vila-4cam-domnesti.jpg",
    imageGallery: ["/enjoyresidence/images/listing-683-vila-4cam-domnesti.jpg"],
  },
  {
    id: 682,
    externalId: "P285285",
    title: "VEZI VIDEO Vila independentă energetic 5 camere | P+M | Domnesti",
    transaction: "vanzare",
    propertyType: "casa-vila",
    price: 175000,
    priceUnit: "€",
    city: "Domnesti",
    zone: "Central",
    rooms: 5,
    bathrooms: 3,
    surface: 126,
    landSurface: 427,
    kitchens: 1,
    parkings: 4,
    frontStreetal: 20,
    frontCount: 1,
    yearBuilt: 2010,
    structure: "Caramida",
    buildingHeight: "P+M",
    orientation: "Sud-Est",
    tags: ["Exclusivitate"],
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/Hwwfh5-ZlKQ",
    description: "Vila individuala cu panouri fotovoltaice + baterie de stocare 10Kw. Casa solida din caramida pe structura beton. Curte impresionanta cu vegetatie si arbori maturi. Terasa imensa inchisa cu geamuri glisante. Living suprafete vitrate enorme, bucatarie inchisa, dormitor matrimonial 24mp + dressing + baie proprie. Sistem aspersoare propriu. 4 locuri parcare. Apropiere A0.",
    features: {
      utilities: ["Curent", "Apa", "Gaz", "Put", "Fosa septica", "CATV", "Telefon", "Acces internet", "Fibra optica", "Sistem irigatie"],
      heating: ["Centrala proprie", "Calorifere"],
      cooling: ["Aer conditionat"],
      insulation: ["Exterior", "Interior"],
      walls: ["Vopsea lavabila", "Faianta"],
      floors: ["Parchet", "Gresie"],
      state: "Finisat",
      windows: ["PVC", "Termopan"],
      doorEntry: "Metal",
      doorInterior: "Lemn",
      usefulSpaces: ["Spatiu depozitare", "Dressing", "WC Serviciu", "Anexe", "Dependinte"],
      kitchen: ["Mobilata", "Utilata"],
      metering: ["Apometre", "Contor gaz"],
      building: ["Curte", "Gradina"],
    },
    image: "/enjoyresidence/images/listing-682-vila-5cam-domnesti.jpg",
    imageGallery: ["/enjoyresidence/images/listing-682-vila-5cam-domnesti.jpg"],
  },
  {
    id: 469,
    externalId: "P124749",
    title: "Vila impresionanta 605 mp, curte 2191 mp, dublu acces auto, garaj",
    transaction: "vanzare",
    propertyType: "casa-vila",
    price: 1300000,
    priceUnit: "€",
    city: "Bucuresti",
    zone: "Drumul Taberei",
    rooms: 10,
    bathrooms: 5,
    surface: 605,
    surfaceBuilt: 750,
    landSurface: 2191,
    kitchens: 2,
    balconies: 4,
    parkings: 10,
    garages: 1,
    frontStreetal: 22,
    frontCount: 2,
    yearBuilt: 2010,
    structure: "Beton",
    buildingHeight: "D+P+1+M",
    orientation: "Sud-Vest",
    tags: [],
    hasVideo: false,
    description: "Vila impresionanta cu design unic, acces din 2 strazi. D+P+1+Mansarda+Pod. Demisol: camera tehnica 2 centrale Keston 55KW, garaj 4 masini 57mp, spalatorie, sauna. Parter: living 72mp + dining 24mp inaltime 7m, bucatarie pro, dormitor oaspeti, birou. Etaj: dormitor matrimonial 24mp + dressing + baie, 3 dormitoare 20mp, 3 balcoane. Mansarda: apartament 2 camere decomandat. Curte: gazon, arbori maturi, foișor 10-15 pers, fantana arteziana. Ideal: centre medicale, sedii firme, scoli private.",
    features: {
      utilities: ["Curent", "Apa", "Canalizare", "Gaz", "CATV", "Telefon", "Acces internet", "Sistem irigatie"],
      heating: ["Centrala proprie", "Calorifere"],
      cooling: ["Aer conditionat"],
      insulation: ["Exterior"],
      walls: ["Vopsea lavabila", "Faianta", "Tapet"],
      floors: ["Parchet", "Gresie"],
      state: "Finisat",
      windows: ["PVC"],
      doorEntry: "Metal",
      doorInterior: "Lemn",
      usefulSpaces: ["Pivnita", "Spatiu depozitare", "Dressing", "WC Serviciu", "Anexe", "Dependinte"],
      kitchen: ["Mobilata", "Utilata"],
      metering: ["Apometre", "Contor caldura", "Contor gaz"],
      furnished: "Lux",
      building: ["Videointerfon", "Sauna", "Curte", "Gradina", "Uscatorie"],
    },
    image: "/enjoyresidence/images/listing-469-vila-10cam-drumultaberei.jpg",
    imageGallery: ["/enjoyresidence/images/listing-469-vila-10cam-drumultaberei.jpg"],
  },
  {
    id: 668,
    externalId: "P270267",
    title: "Garsoniere Militari Virtutii Orsova Lacul Morii IMOBIL NOU",
    transaction: "vanzare",
    propertyType: "garsoniera",
    price: 102000,
    priceUnit: "€",
    city: "Bucuresti",
    zone: "Lujerului",
    rooms: 1,
    bathrooms: 1,
    surface: 30,
    surfaceBuilt: 42,
    floor: "Mansarda",
    compartimentare: "Decomandat",
    confort: "1",
    kitchens: 1,
    balconies: 1,
    garages: 2,
    yearBuilt: 2021,
    buildingHeight: "P+5",
    tags: ["Exclusivitate"],
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/3TAe_YnD2FE",
    description: "Imobil nou D+P+5E+M. Suprafete 30-42mp. Lift hidraulic. Structura beton, caramida Porotherm A+. Balcoane tip logie cu LED multicolora. PVC Veka 7 camere. Centrala 24Kw Motan + AMBIENT wireless. AC Yamato BONUS. Usi Yale, usi interior import Germania. Parchet 12mm. Obiecte sanitare cu bideu, cabina dus hidromasaj. Preturi de la 102.000 Euro.",
    features: {
      utilities: ["Curent", "Apa", "Canalizare", "Gaz"],
      heating: ["Centrala proprie", "Calorifere"],
      cooling: ["Aer conditionat"],
      insulation: ["Exterior", "Interior", "Bloc izolat termic"],
      walls: ["Vopsea lavabila", "Faianta"],
      floors: ["Parchet", "Gresie"],
      state: "Finisat",
      windows: ["PVC", "Termopan"],
      doorEntry: "Metal",
      doorInterior: "Lemn",
      metering: ["Apometre", "Contor gaz"],
      furnished: "Nemobilat",
      building: ["Videointerfon", "Lift"],
    },
    image: "/enjoyresidence/images/listing-668-garsoniera-lujerului.jpg",
    imageGallery: ["/enjoyresidence/images/listing-668-garsoniera-lujerului.jpg"],
  },
  {
    id: 691,
    externalId: "P299886",
    title: "Garsoniera SUPER POZITIE | Plaza Mall - AFI Cotroceni | RENOVATA",
    transaction: "inchiriere",
    propertyType: "garsoniera",
    price: 450,
    priceUnit: "€/luna",
    city: "Bucuresti",
    zone: "Drumul Taberei",
    rooms: 1,
    bathrooms: 1,
    surface: 40,
    floor: "Parter",
    compartimentare: "Decomandat",
    confort: "1",
    kitchens: 1,
    yearBuilt: 1970,
    yearRenovated: 2022,
    structure: "Beton",
    buildingType: "Bloc",
    buildingHeight: "P+9",
    tags: ["Exclusivitate"],
    hasVideo: false,
    description: "Garsoniera renovata, super pozitie Drumul Taberei - Bd. Timișoara. Proprietate reconditionata total acum 4 ani. Instalatii electrice si sanitare schimbate. Mobilata/utilata complet. Pat matrimonial dublu, zona dining cu masa si scaune noi, TV LED, aragaz, masina de spalat. Pozitionata vizavi de Plazza Mall. Metrou Tudor Vladimirescu 7-10 min.",
    features: {
      utilities: ["Curent", "Apa", "Canalizare", "Gaz", "CATV", "Acces internet", "Fibra optica"],
      heating: ["Termoficare", "Calorifere"],
      insulation: ["Exterior", "Interior"],
      walls: ["Vopsea lavabila", "Var", "Faianta"],
      floors: ["Parchet", "Gresie"],
      state: "Renovat",
      windows: ["PVC", "Termopan"],
      doorEntry: "Metal",
      doorInterior: "Lemn",
      usefulSpaces: ["Dressing"],
      kitchen: ["Mobilata", "Utilata"],
      metering: ["Apometre", "Contor caldura"],
      building: ["Interfon", "Lift"],
    },
    image: "/enjoyresidence/images/listing-691-garsoniera-inch-drumultaberei.jpg",
    imageGallery: ["/enjoyresidence/images/listing-691-garsoniera-inch-drumultaberei.jpg"],
  },
  {
    id: 651,
    externalId: "P260586",
    title: "MODERNIZAT 2025! Apartament decomandat 2 camere NOU NOUT | Unirii",
    transaction: "inchiriere",
    propertyType: "apartament",
    price: 700,
    priceUnit: "€/luna",
    city: "Bucuresti",
    zone: "Unirii",
    rooms: 2,
    bathrooms: 1,
    surface: 50,
    floor: "Etaj 5",
    compartimentare: "Decomandat",
    confort: "1",
    kitchens: 1,
    balconies: 1,
    yearBuilt: 1972,
    yearRenovated: 2025,
    structure: "Beton",
    buildingType: "Bloc",
    buildingHeight: "P+10",
    tags: [],
    hasVideo: false,
    description: "2 camere decomandat - Palatul Parlamentului - Cantemir - Marasesti. Intreg apartamentul renovat in totalitate. Posibilitate loc de parcare ADP contracost. Canapea coltar noua, Smart TV, baie premium, pat matrimonial nou, bucatarie inchisa cu masina de spalat vase. Parchet SPC, 2x AC. Apropiere Palatul Parlamentului, Unirii, Parcul Carol.",
    features: {
      utilities: ["Curent", "Apa", "Canalizare", "Gaz", "CATV", "Telefon", "Acces internet", "Fibra optica"],
      heating: ["Termoficare", "Calorifere"],
      cooling: ["Aer conditionat"],
      insulation: ["Exterior", "Interior"],
      walls: ["Vopsea lavabila", "Var", "Faianta"],
      floors: ["Parchet", "Gresie"],
      windows: ["PVC", "Termopan"],
      doorEntry: "Metal",
      doorInterior: "Lemn",
      usefulSpaces: ["Dressing"],
      kitchen: ["Mobilata", "Utilata"],
      metering: ["Apometre", "Contor caldura"],
      building: ["Interfon", "Lift"],
    },
    image: "/enjoyresidence/images/listing-651-apt-2cam-inch-unirii.jpg",
    imageGallery: ["/enjoyresidence/images/listing-651-apt-2cam-inch-unirii.jpg"],
  },
];

// ============================================
// ANSAMBLURI REZIDENTIALE
// ============================================

export interface Ansamblu {
  id: number;
  name: string;
  city: string;
  zone: string;
  status: string; // "50% Vandut", "VANDUT INTEGRAL", etc.
  description: string;
  image: string;
  gallery: string[];
  details?: {
    units?: string;
    height?: string;
    year?: string;
    parking?: string;
    units2?: string;
  };
  features?: string[];
  areaInfo?: string;
}

export const ansambluri: Ansamblu[] = [
  {
    id: 445,
    name: "Enjoy Residence Otopeni - Vile tip duplex 126 mp, teren 220 mp, finisaje premium",
    city: "Otopeni",
    zone: "Central",
    status: "50% Vandut",
    description: `Ansamblu 14 unități locative - drum de acces privat
Teren 220 mp
P + 1 ( placă de beton peste etaj )
Încălzire în pardoseală cu distribuitoare + automatizare pe fiecare etaj
Tâmplărie PVC SALAMANDER cu geam tripan
Tavane extensibile, tip Barisol, GARANȚIE 10 ANI
Acoperiș tablă 0.5mm GARANȚIE MONTAJ 10 ANI
Instalație electrică cu fir ignifugat, aparaturi Schnider + Panasonic
PEREȚI DUBLI ÎNTRE UNITĂȚI - 90 CM`,
    image: "/enjoyresidence/images/ansamblu-445-otopeni-duplex.jpg",
    gallery: [
      "/enjoyresidence/images/ansambluri/445-1.jpg",
      "/enjoyresidence/images/ansambluri/445-2.jpg",
      "/enjoyresidence/images/ansambluri/445-3.jpg",
      "/enjoyresidence/images/ansambluri/445-4.jpg",
      "/enjoyresidence/images/ansambluri/445-5.jpg",
      "/enjoyresidence/images/ansambluri/445-6.jpg",
      "/enjoyresidence/images/ansambluri/445-7.jpg",
      "/enjoyresidence/images/ansambluri/445-8.jpg",
      "/enjoyresidence/images/ansambluri/445-9.jpg",
    ],
    details: { units: "14 unități", height: "P+1" },
    features: [
      "PEREȚI DUBLI 30 CM + IZOLAȚIE DUBLĂ POLISTIREN 10 CM + TENCUIALĂ DUBLĂ = APROX. 90 CM ÎNTRE UNITĂȚI PENTRU O ANTIFONARE SUPERIOARĂ",
      "Curte amenajată complet cu gazon natural + arbori/tuia decorativi",
      "Acoperiș din tablă 0,5 mm, gri antracit mat cu GARANȚIE 10 ani montaj/15 ani coroziune",
      "Tâmplărie PVC TRIPAN SALAMANDER 4 Seasons Low E cu feronerie ROTO de calitate superioară + mânere acustice din TITAN",
      "Încălzire în pardoseală cu distribuitoare de căldură + automatizare pentru fiecare etaj + pompe pe fiecare distribuitor",
      "Uși interior lemn masiv, modele minimaliste de culoare albă",
      "Uși exterioare solide de calitate superioară",
      "Gresie, faianță potelanata + rectificată modele 2025",
      "Obiecte sanitare calitate superioară + baterii Ferro GARANȚIE 10 ani",
      "Balcoane și terase placate cu gresie antiderapantă",
      "Prize, întrerupătoare, siguranțe și aparataje Schneider + Panasonic",
      "Instalații electrice cu fir de cupru ignifugat ( prize + întrerupătoare)",
      "Cablaje de putere mare încărcare autoturisme electrice preinstalate",
      "Tencuială efectuată MANUAL , net superioară celei mecanizate",
      "Cărămidă exterioară Porotherm 30 cm + izolație exterioară polistiren ignifugat 100 mm",
      "Canalizare + fosă septică (EXTRA), gaz, apă curentă, electricitate",
    ],
    areaInfo: `Complexul se află în imediata apropiere de DN1
Lidl, Penny și Mega Image în imediata apropiere
STB la 1 min mers pe jos - Școala generala Otopeni la 2-3 minute cu mașina
Grădinițe, after school la 2-3 min mers cu mașina
Piață Otopeni la 4-5 min cu mașina
Primăria Otopeni la 4-5 min cu mașina
Benzinărie 1 min cu mașina
Cafenele/ restaurante în imediata apropiere
Săli de forță/ fitness în zonă
Acces rapid DN1, Aeroportul Internațional Henri Coandă, Tunari
Apropiere de Băneasa Mall, Ikea, Pădurea Băneasa, Parcul Herăstrău`,
  },
  {
    id: 453,
    name: "Enjoy Residence Giulesti BOUTIQUE",
    city: "Bucuresti",
    zone: "Giulesti",
    status: "VANDUT INTEGRAL",
    description: `Imobil tip Boutique Giulesti - Sector 6

*** VANDUT INTEGRAL SI LOCUIT ***

Număr restrâns de apartamente : 5
Locuri de parcare GRATIS ( cadastrate individual )
Finisaje PREMIUM: încălzire în pardoseală, marmura, granit, tâmplărie PVC Salamander, Obiecte sanitare Cersanit

Oferta reprezentată și vândută integral exclusiv prin Enjoy Residence!`,
    image: "/enjoyresidence/images/ansamblu-453-giulesti-boutique.jpg",
    gallery: [
      "/enjoyresidence/images/ansambluri/453-1.jpg",
      "/enjoyresidence/images/ansambluri/453-2.jpg",
      "/enjoyresidence/images/ansambluri/453-3.jpg",
      "/enjoyresidence/images/ansambluri/453-4.jpg",
      "/enjoyresidence/images/ansambluri/453-5.jpg",
      "/enjoyresidence/images/ansambluri/453-6.jpg",
      "/enjoyresidence/images/ansambluri/453-7.jpg",
      "/enjoyresidence/images/ansambluri/453-8.jpg",
    ],
    details: { units: "5 apartamente", parking: "Locuri parcare GRATIS" },
    features: [
      "Încălzire în pardoseală",
      "Marmură și granit",
      "Tâmplărie PVC Salamander",
      "Obiecte sanitare Cersanit",
      "Locuri de parcare GRATIS cadastrate individual",
    ],
  },
  {
    id: 373,
    name: "Ansamblu 6 vile ( 12 unități ) tip duplex 2022, strada privata Otopeni, Ilfov",
    city: "Otopeni",
    zone: "Central",
    status: "VANDUT INTEGRAL",
    description: `Ansamblu rezidențial 12 vile tip duplex cu locuri de parcare si curți proprii

Zona: Otopeni - 23 August - Putna

VANDUTE SI LOCUITE INTEGRAL!`,
    image: "/enjoyresidence/images/ansamblu-373-otopeni-6vile.jpg",
    gallery: [
      "/enjoyresidence/images/ansambluri/373-1.jpg",
      "/enjoyresidence/images/ansambluri/373-2.jpg",
      "/enjoyresidence/images/ansambluri/373-3.jpg",
      "/enjoyresidence/images/ansambluri/373-4.jpg",
      "/enjoyresidence/images/ansambluri/373-5.jpg",
      "/enjoyresidence/images/ansambluri/373-6.jpg",
    ],
    details: { units: "12 vile", year: "2022" },
    features: [
      "12 vile tip duplex",
      "Locuri de parcare proprii",
      "Curți proprii",
      "Stradă privată",
    ],
  },
  {
    id: 300,
    name: "Enjoy Residence Virtutii - Lacul Morii - Lujerului",
    city: "Bucuresti",
    zone: "Militari",
    status: "VANDUT INTEGRAL",
    description: `Imobil 2017
Regim înălțime: D+P+4E+M
Număr unități : 50 de apartamente

VANDUT SI LOCUIT INTEGRAL`,
    image: "/enjoyresidence/images/ansamblu-300-virtutii-lacul-morii.jpg",
    gallery: [
      "/enjoyresidence/images/ansambluri/300-1.jpg",
      "/enjoyresidence/images/ansambluri/300-2.jpg",
      "/enjoyresidence/images/ansambluri/300-3.jpg",
      "/enjoyresidence/images/ansambluri/300-4.jpg",
    ],
    details: { units: "50 apartamente", height: "D+P+4E+M", year: "2017" },
  },
  {
    id: 299,
    name: "Enjoy Residence BOUTIQUE Lacul Morii - Virtutii - Orsova",
    city: "Bucuresti",
    zone: "Lacul Morii",
    status: "VANDUT INTEGRAL",
    description: `Imobil 2021 tip BOUTIQUE

Apartamente cu compartimentări curajoase și cu suprafețe vitrate enorme

FINALIZAT - LOCUIT INTEGRAL - VANDUT`,
    image: "/enjoyresidence/images/ansamblu-299-boutique-lacul-morii.jpg",
    gallery: ["/enjoyresidence/images/ansambluri/299-1.jpg"],
    details: { year: "2021" },
    features: [
      "Compartimentări curajoase",
      "Suprafețe vitrate enorme",
      "Tip BOUTIQUE",
    ],
  },
  {
    id: 298,
    name: "Enjoy Residence Private Villas - Drumul Taberei, Prelungirea Ghencea",
    city: "Bucuresti",
    zone: "Prelungirea Ghencea",
    status: "VANDUT INTEGRAL",
    description: `Ansamblu privat Vile Individuale construite după cele mai exigente standarde de calitate și siguranță

FINALIZAT - LOCUIT INTEGRAL - VANDUT`,
    image: "/enjoyresidence/images/ansamblu-298-private-villas-ghencea.jpg",
    gallery: [
      "/enjoyresidence/images/ansambluri/298-1.jpg",
      "/enjoyresidence/images/ansambluri/298-2.jpg",
      "/enjoyresidence/images/ansambluri/298-3.jpg",
      "/enjoyresidence/images/ansambluri/298-4.jpg",
    ],
    details: { units: "7 vile" },
    features: [
      "Vile individuale",
      "Standarde exigente de calitate și siguranță",
      "Ansamblu privat",
    ],
  },
  {
    id: 297,
    name: "Enjoy Residence Boutique Apartments Militari Pacii",
    city: "Bucuresti",
    zone: "Militari",
    status: "VANDUT INTEGRAL",
    description: `Imobil D+P+4+M Militari Păcii

Imobil: 2018
Locuri de parcare BONUS

FINALIZAT - VANDUT - LOCUIT INTEGRAL`,
    image: "/enjoyresidence/images/ansamblu-297-militari-pacii.jpg",
    gallery: [
      "/enjoyresidence/images/ansambluri/297-1.jpg",
      "/enjoyresidence/images/ansambluri/297-2.jpg",
      "/enjoyresidence/images/ansambluri/297-3.jpg",
    ],
    details: { height: "D+P+4+M", year: "2018", parking: "Locuri parcare BONUS" },
  },
  {
    id: 296,
    name: "Imobil P+3+M Enjoy Residence Lacul Morii - Orsova - Virtuții",
    city: "Bucuresti",
    zone: "Lacul Morii",
    status: "VANDUT INTEGRAL",
    description: `Imobil cu locuri de parcare acoperit

Militari - Lacul Morii - Orsova

Număr tronsoane: 2
Regim înălțime: P+3E+M

FINALIZAT - VANDUT - LOCUIT INTEGRAL`,
    image: "/enjoyresidence/images/ansamblu-296-p3m-lacul-morii.jpg",
    gallery: [
      "/enjoyresidence/images/ansambluri/296-1.jpg",
      "/enjoyresidence/images/ansambluri/296-2.jpg",
    ],
    details: { height: "P+3E+M", units: "2 tronsoane", parking: "Parcare acoperit" },
  },
  {
    id: 295,
    name: "Enjoy Residence Boutique Apartments Drumul Taberei - Metrou Raul Doamnei",
    city: "Bucuresti",
    zone: "Drumul Taberei",
    status: "VANDUT INTEGRAL",
    description: `Imobil tip vila cu un apartament pe etaj intr-o zona cu toate facilitățile

Drumul Taberei - Metrou Raul Doamnei

FINALIZAT - VANDUT INTEGRAL - LOCUIT`,
    image: "/enjoyresidence/images/ansamblu-295-drumul-taberei-raul-doamnei.jpg",
    gallery: ["/enjoyresidence/images/ansambluri/295-1.jpg"],
    features: [
      "Imobil tip vilă",
      "Un apartament pe etaj",
      "Zonă cu toate facilitățile",
      "Aproape de metrou Raul Doamnei",
    ],
  },
  {
    id: 294,
    name: "Enjoy Residence Boutique Apartments Ion Mihalache - Podul Constanta",
    city: "Bucuresti",
    zone: "Bucurestii Noi",
    status: "VANDUT INTEGRAL",
    description: `Imobil PREMIUM, cochet și intim cu un număr redus de unități locative

Ion Mihalache - Podul Constanta - Sector 1

Finisaje PREMIUM + locuri de parcare subterane BONUS

FINALIZAT - VANDUT INTEGRAL - LOCUIT INTEGRAL`,
    image: "/enjoyresidence/images/ansamblu-294-ion-mihalache-podul-constanta.jpg",
    gallery: ["/enjoyresidence/images/ansambluri/294-1.jpg"],
    features: [
      "Imobil PREMIUM",
      "Cochet și intim",
      "Număr redus de unități locative",
      "Finisaje PREMIUM",
      "Locuri de parcare subterane BONUS",
    ],
  },
  {
    id: 293,
    name: "Enjoy Residence Drumul Taberei - Ghencea - Valea Oltului",
    city: "Bucuresti",
    zone: "Drumul Taberei",
    status: "VANDUT INTEGRAL",
    description: `Ansamblu rezidențial intim - curte privata și locuri de parcare pentru toate unitățile

Drumul Taberei - Prelungirea Ghencea - Valea Oltului

Număr blocuri: 2
Regim înălțime: P+2E

FINALIZAT - VANDUT - LOCUIT INTEGRAL`,
    image: "/enjoyresidence/images/ansamblu-293-ghencea-valea-oltului.jpg",
    gallery: [
      "/enjoyresidence/images/ansambluri/293-1.jpg",
      "/enjoyresidence/images/ansambluri/293-2.jpg",
    ],
    details: { height: "P+2E", units: "2 blocuri", parking: "Parcare pentru toate unitățile" },
    features: [
      "Curte privată",
      "Locuri de parcare pentru toate unitățile",
      "Ansamblu intim",
    ],
  },
  {
    id: 292,
    name: "Happy Residence Militari 1 + 2 + 3 + 4 powered by ENJOY RESIDENCE",
    city: "Bucuresti",
    zone: "Militari",
    status: "VANDUT INTEGRAL",
    description: `Ansamblu rezidențial cochet format din 4 blocuri

MILITARI - APUSULUI - CHIAJNA

Imobil: 2014
Număr unități locative: 80 de apartamente cu locuri de parcare pentru fiecare apartament

FINALIZATE - VANDUTE INTEGRAL - LOCUITE INTEGRAL`,
    image: "/enjoyresidence/images/ansamblu-292-happy-residence-militari.jpg",
    gallery: [
      "/enjoyresidence/images/ansambluri/292-1.jpg",
      "/enjoyresidence/images/ansambluri/292-2.jpg",
      "/enjoyresidence/images/ansambluri/292-3.jpg",
    ],
    details: { units: "80 apartamente", year: "2014", units2: "4 blocuri", parking: "Parcare pentru fiecare apartament" },
  },
];

// ============================================
// TESTIMONIALE
// ============================================

export const testimonials = [
  {
    name: "Georgel A.",
    text: "Cu ajutorul Enjoy Residence am reusit in patru zile sa gasim locuinta dorita si sa facem si actele. Multumim mult si mult succes in continuare!",
  },
  {
    name: "Izabella A.",
    text: "E prima experiență cu o agenție imobiliară, dar când spun prima, mă refer la prima experiență plăcută! Felicitări pentru seriozitatea și munca depusă! Am observat un lucru foarte important: să lucrezi cu multă plăcere în domeniul ales și profesionalism = mulțumirea clientului. Continuați tot așa cu încredere! Recomand din suflet!",
  },
  {
    name: "Tavi V.",
    text: "Am găsit această firmă imobiliară pe internet. Am avut placerea sa interacționez cu Enjoy Residence care mi-a oferit o gamă largă de informații și care mi-a prezentat numai oameni de o buna calitate morală fapt ce a dus la o foarte bună rezolvare a cerintei intr-un timp scurt, fapt pentru care țin să le mulțumesc pe această cale si sa acord 5 stele.",
  },
  {
    name: "Bogdan B.",
    text: "Oameni seriosi care cauta sa colaboreze cu oameni seriosi. Sunt foarte multumit de calitatea serviciilor. Recomand.",
  },
  {
    name: "Georgiana R.",
    text: "Experienta a fost una foarte placuta! Profesionalism, rapiditate si corectitudine! Ii recomand cu toata caldura.",
  },
];

// ============================================
// ZONE DISPONIBILE (pentru filtrare)
// ============================================

export const zones = [
  "Alexandriei", "Antiaeriana", "Aparatorii Patriei", "Baneasa", "Berceni",
  "Brancoveanu", "Central", "Cotroceni", "Crangasi", "Domenii", "Dristor",
  "Drumul Taberei", "Est", "Gai", "Gara de Nord", "Gorjului", "Grozavesti",
  "Iancu Nicolae", "Lacul Morii", "Lujerului", "Militari", "Muncii",
  "Nordului", "Pacii", "Pantelimon", "Parcul Carol", "Periferie", "Pipera",
  "Prelungirea Ghencea", "Romana", "Salaj", "Sebastian", "Theodor Pallady",
  "Titan", "Unirii", "Valea Ialomitei", "Vitan",
];

// ============================================
// BRAND CONFIG
// ============================================

export const enjoyBrand = {
  name: "Enjoy Residence",
  phone: "0721.522.411",
  agentPhone: "0747088699",
  email: "office@enjoyresidence.ro",
  agentEmail: "enjoyresidence@gmail.com",
  address: "Str. Dreptatii, nr. 127, Sector 6, Bucuresti",
  website: "enjoyresidence.ro",
  partner: "ImmoFlux",
  partnerUrl: "https://immoflux.ro",
};
