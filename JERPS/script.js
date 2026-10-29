"use strict";

/*
 JERP Motors & Residency — Birthday Upgrade
 Boss: JOSEPH UGOMBA
 Keep the existing asset paths and verified WhatsApp number.
*/

const JERP_CONFIG = {
  whatsappNumber: "255686300761"
};

const vehicles = [
  { name: "Featured Vehicle 01", description: "Contact our team for vehicle specifications and availability.", image: "assets/cars/car3.PNG", alt: "Vehicle displayed by JERP Motors", tag: "JERP MOTORS" },
  { name: "Featured Vehicle 02", description: "Ask our team about details, condition and availability.", image: "assets/cars/car-2.PNG", alt: "Second vehicle displayed by JERP Motors", tag: "JERP MOTORS" },
  { name: "Featured Vehicle 03", description: "Get in touch for more information about this vehicle.", image: "assets/cars/car-3.PNG", alt: "Third vehicle displayed by JERP Motors", tag: "JERP MOTORS" }
];

const properties = [
  { name: "Featured Residence 01", type: "JERP RESIDENCY", description: "Contact our team to learn about this property and its availability.", image: "assets/residency/residence-1.PNG", alt: "Property presented by JERP Residency" },
  { name: "Featured Residence 02", type: "JERP RESIDENCY", description: "Explore the property and request further information from our team.", image: "assets/residency/residence-5.PNG", alt: "Second property presented by JERP Residency" },
  { name: "Featured Residence 03", type: "JERP RESIDENCY", description: "Enquire for property details, location and availability.", image: "assets/residency/residence-6.PNG", alt: "Third property presented by JERP Residency" }
];

const translations = {
  en: {
    navHome:"Home", navMotors:"Motors", navResidency:"Residency", navAbout:"About us", navContact:"Contact us",
    eyebrow:"MOTORS & RESIDENCY", heroTitle:"Move with", heroTitleAccent:"confidence.",
    heroDescription:"Discover exceptional vehicles and explore places designed for living. Welcome to the JERP experience.",
    exploreVehicles:"Explore our vehicles", discoverResidency:"Discover residency",
    introEyebrow:"ONE BRAND. TWO EXPERIENCES.", introTitle:"More than a destination.", introAccent:"A better experience.",
    introCopy:"From finding your next vehicle to discovering your next home, JERP brings two essential journeys together through service, quality and attention to detail.",
    motorsCardEyebrow:"01 / AUTOMOTIVE", motorsCardDescription:"Find a vehicle that matches your ambition.", exploreVehiclesLink:"Explore vehicles",
    residencyCardEyebrow:"02 / REAL ESTATE", residencyCardDescription:"Discover spaces where life feels at home.", exploreResidences:"Explore residences",
    motorsEyebrow:"JERP MOTORS / OUR COLLECTION", motorsTitle:"Find your next", motorsAccent:"drive.",
    motorsDescription:"Explore our available vehicles and contact our team for specifications, pricing and availability.",
    featuredVehicles:"FEATURED VEHICLES", pricingNote:"Pricing available on enquiry", enquireVehicle:"Enquire about a vehicle",
    residencyEyebrow:"JERP RESIDENCY / FIND YOUR SPACE", residencyTitle:"Space to live.", residencyAccent:"Room to grow.",
    residencyDescription:"Explore properties presented by JERP Residency. Contact our team to learn more about available residences.",
    residencyCtaEyebrow:"YOUR NEXT CHAPTER STARTS HERE", residencyCtaTitle:"Looking for a place to call your own?", enquireProperty:"Enquire about a property",
    aboutEyebrow:"THE JERP EXPERIENCE", aboutTitle:"Built around what", aboutAccent:"matters to you.",
    aboutCopy:"We bring motors and residency together in one convenient destination. Get in touch with our team to start your journey.",
    contactEyebrow:"LET'S CONNECT", contactTitle:"Your next move", contactAccent:"starts here.",
    contactDescription:"Interested in a vehicle or a residence? Reach out to our team for further information.",
    motorsContactTitle:"JERP Motors", motorsContactDescription:"Vehicle details, availability and pricing.", enquireVehicles:"Enquire about vehicles",
    residencyContactTitle:"JERP Residency", residencyContactDescription:"Property information and availability.", enquireProperties:"Enquire about properties",
    preferWhatsApp:"Prefer WhatsApp?", chatTeam:"Chat with our team", footerDescription:"Motors & Residency. One connected experience.",
    allRights:"All rights reserved.", backTop:"Back to top ↑", enquireDetails:"Enquire for details", enquirePropertyLink:"Enquire about property",
    birthdayEyebrow:"A SPECIAL CELEBRATION", happyBirthday:"Happy Birthday", boss:"JOSEPH UGOMBA!",
    birthdayAchievement:"Congratulations on Your Remarkable Achievements",
    birthdayMessage:"Your vision, leadership, business growth and dedication continue to inspire us. Today, we celebrate your birthday and the milestones you have achieved, the people you inspire, and the future you continue to build.",
    birthdayWish:"Wishing you greater success, good health, happiness and many more achievements in the year ahead.",
    birthdaySignature:"With Respect & Gratitude", enterShowroom:"Enter Showroom →", skipIntro:"Skip introduction"
  },
  sw: {
    navHome:"Mwanzo", navMotors:"Magari", navResidency:"Makazi", navAbout:"Kuhusu sisi", navContact:"Wasiliana nasi",
    eyebrow:"MAGARI NA MAKAZI", heroTitle:"Songa mbele kwa", heroTitleAccent:"kujiamini.",
    heroDescription:"Gundua magari bora na makazi yaliyoundwa kwa maisha bora. Karibu kwenye uzoefu wa JERP.",
    exploreVehicles:"Tazama magari yetu", discoverResidency:"Gundua makazi",
    introEyebrow:"CHAPA MOJA. UZOEFU MBILI.", introTitle:"Zaidi ya sehemu ya kufika.", introAccent:"Uzoefu bora zaidi.",
    introCopy:"Kuanzia kutafuta gari lako lijalo hadi kugundua nyumba yako mpya, JERP inaunganisha huduma, ubora na umakini kwa undani.",
    motorsCardEyebrow:"01 / MAGARI", motorsCardDescription:"Pata gari linaloendana na malengo yako.", exploreVehiclesLink:"Tazama magari",
    residencyCardEyebrow:"02 / NYUMBA NA VIWANJA", residencyCardDescription:"Gundua makazi yanayokufanya ujisikie nyumbani.", exploreResidences:"Tazama makazi",
    motorsEyebrow:"JERP MOTORS / MKUSANYIKO WETU", motorsTitle:"Pata gari lako", motorsAccent:"lijalo.",
    motorsDescription:"Tazama magari yaliyopo na wasiliana nasi kupata maelezo, bei na upatikanaji.",
    featuredVehicles:"MAGARI YALIYOCHAGULIWA", pricingNote:"Bei hutolewa kwa maulizo", enquireVehicle:"Ulizia gari",
    residencyEyebrow:"JERP RESIDENCY / PATA MAKAZI YAKO", residencyTitle:"Sehemu ya kuishi.", residencyAccent:"Nafasi ya kukua.",
    residencyDescription:"Gundua nyumba zinazowasilishwa na JERP Residency. Wasiliana nasi kupata maelezo kuhusu makazi yaliyopo.",
    residencyCtaEyebrow:"HATUA YAKO INAYOFUATA INAANZA HAPA", residencyCtaTitle:"Unatafuta sehemu ya kuiita nyumbani?", enquireProperty:"Ulizia nyumba",
    aboutEyebrow:"UZOEFU WA JERP", aboutTitle:"Tumejikita katika", aboutAccent:"mambo muhimu kwako.",
    aboutCopy:"Tunaunganisha huduma za magari na makazi katika sehemu moja rahisi. Wasiliana nasi ili kuanza safari yako.",
    contactEyebrow:"TUWASILIANE", contactTitle:"Hatua yako inayofuata", contactAccent:"inaanzia hapa.",
    contactDescription:"Unahitaji gari au makazi? Wasiliana na timu yetu kwa maelezo zaidi.",
    motorsContactTitle:"JERP Motors", motorsContactDescription:"Maelezo ya gari, upatikanaji na bei.", enquireVehicles:"Ulizia magari",
    residencyContactTitle:"JERP Residency", residencyContactDescription:"Maelezo ya nyumba na upatikanaji.", enquireProperties:"Ulizia makazi",
    preferWhatsApp:"Unapendelea WhatsApp?", chatTeam:"Zungumza na timu yetu", footerDescription:"Magari na Makazi. Uzoefu mmoja uliounganishwa.",
    allRights:"Haki zote zimehifadhiwa.", backTop:"Rudi juu ↑", enquireDetails:"Ulizia maelezo", enquirePropertyLink:"Ulizia nyumba",
    birthdayEyebrow:"SHEREHE YA KIPEKEE", happyBirthday:"Heri ya Siku ya Kuzaliwa", boss:"JOSEPH UGOMBA!",
    birthdayAchievement:"Hongera kwa Mafanikio Yako ya Kipekee",
    birthdayMessage:"Maono yako, uongozi wako, ukuaji wa biashara na kujituma kwako vinaendelea kututia moyo. Leo tunasherehekea siku yako ya kuzaliwa, hatua ulizopiga, watu unaowatia moyo na mustakabali unaoendelea kuujenga.",
    birthdayWish:"Tunakutakia mafanikio zaidi, afya njema, furaha na mafanikio mengi zaidi katika mwaka huu mpya.",
    birthdaySignature:"Kwa Heshima na Shukrani", enterShowroom:"Ingia Showroom →", skipIntro:"Ruka utangulizi"
  }
};

function getWhatsAppUrl(message) {
  const number = JERP_CONFIG.whatsappNumber.replace(/\D/g, "");
  if (!number || number.includes("XXXXXXXXX")) return null;
  return "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
}

function openWhatsApp(message) {
  const url = getWhatsAppUrl(message);
  if (!url) {
    alert("WhatsApp haijawekwa sawa. Tafadhali hakiki namba ya biashara kwenye script.js.");
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}

function createVehicleCard(vehicle) {
  const article = document.createElement("article");
  article.className = "vehicle-card reveal";
  const imageBox = document.createElement("div");
  imageBox.className = "vehicle-image";
  const image = document.createElement("img");
  image.src = vehicle.image; image.alt = vehicle.alt; image.loading = "lazy";
  const tag = document.createElement("span");
  tag.className = "vehicle-tag"; tag.textContent = vehicle.tag;
  imageBox.append(image, tag);
  const info = document.createElement("div"); info.className = "vehicle-info";
  const title = document.createElement("h3"); title.textContent = vehicle.name;
  const description = document.createElement("p"); description.textContent = vehicle.description;
  const link = document.createElement("a");
  link.className = "text-link"; link.href = "#contact";
  link.dataset.whatsapp = "vehicle";
  link.dataset.item = vehicle.name;
  link.append(document.createTextNode("Enquire for details "));
  const arrow = document.createElement("span"); arrow.textContent = "↗"; link.append(arrow);
  info.append(title, description, link); article.append(imageBox, info);
  return article;
}

function createPropertyCard(property) {
  const article = document.createElement("article"); article.className = "property-card reveal";
  const imageBox = document.createElement("div"); imageBox.className = "property-image";
  const image = document.createElement("img");
  image.src = property.image; image.alt = property.alt; image.loading = "lazy";
  imageBox.append(image);
  const info = document.createElement("div"); info.className = "property-info";
  const type = document.createElement("span"); type.className = "property-type"; type.textContent = property.type;
  const title = document.createElement("h3"); title.textContent = property.name;
  const description = document.createElement("p"); description.textContent = property.description;
  const link = document.createElement("a"); link.className = "text-link"; link.href = "#contact";
  link.dataset.whatsapp = "property"; link.dataset.item = property.name;
  link.append(document.createTextNode("Enquire about property "));
  const arrow = document.createElement("span"); arrow.textContent = "↗"; link.append(arrow);
  info.append(type, title, description, link); article.append(imageBox, info);
  return article;
}

const vehicleGrid = document.getElementById("vehicleGrid");
const propertyGrid = document.getElementById("propertyGrid");
vehicles.forEach(v => vehicleGrid?.appendChild(createVehicleCard(v)));
properties.forEach(p => propertyGrid?.appendChild(createPropertyCard(p)));

const staticText = {
  navHome: ['.main-nav a[href="#home"]'],
  navMotors: ['.main-nav a[href="#motors"]'],
  navResidency: ['.main-nav a[href="#residency"]'],
  navAbout: ['.main-nav a[href="#about"]'],
  navContact: ['.nav-contact'],
  eyebrow: ['.hero-content .eyebrow'],
  heroTitle: ['.hero h1'],
  heroDescription: ['.hero-content > p'],
  exploreVehicles: ['.hero-actions a[href="#motors"]'],
  discoverResidency: ['.hero-actions a[href="#residency"]'],
  introEyebrow: ['.intro-heading .eyebrow'],
  introTitle: ['.intro-heading h2'],
  introCopy: ['.intro-copy'],
  motorsCardEyebrow: ['.motors-card .eyebrow'],
  motorsCardDescription: ['.motors-card .business-content p'],
  exploreVehiclesLink: ['.motors-card .text-link'],
  residencyCardEyebrow: ['.residency-card .eyebrow'],
  residencyCardDescription: ['.residency-card .business-content p'],
  exploreResidences: ['.residency-card .text-link'],
  motorsEyebrow: ['.inventory .section-heading .eyebrow'],
  motorsTitle: ['.inventory .section-heading h2'],
  motorsDescription: ['.inventory .section-heading > p'],
  featuredVehicles: ['.filter-row > span:first-child'],
  pricingNote: ['.inventory-note'],
  enquireVehicle: ['.section-action a'],
  residencyEyebrow: ['.residency-heading .eyebrow'],
  residencyTitle: ['.residency-heading h2'],
  residencyDescription: ['.residency-heading > p'],
  residencyCtaEyebrow: ['.residency-cta .eyebrow'],
  residencyCtaTitle: ['.residency-cta h3'],
  enquireProperty: ['.residency-cta .button'],
  aboutEyebrow: ['.about-strip .eyebrow'],
  aboutTitle: ['.about-strip h2'],
  aboutCopy: ['.about-strip > p'],
  contactEyebrow: ['.contact-copy .eyebrow'],
  contactTitle: ['.contact-copy h2'],
  contactDescription: ['.contact-copy > p'],
  motorsContactTitle: ['.contact-item:nth-child(1) h3'],
  motorsContactDescription: ['.contact-item:nth-child(1) p'],
  enquireVehicles: ['.contact-item:nth-child(1) .whatsapp-link'],
  residencyContactTitle: ['.contact-item:nth-child(2) h3'],
  residencyContactDescription: ['.contact-item:nth-child(2) p'],
  enquireProperties: ['.contact-item:nth-child(2) .whatsapp-link'],
  preferWhatsApp: ['.contact-footer > span'],
  chatTeam: ['.contact-footer .button'],
  footerDescription: ['.site-footer > p'],
  backTop: ['.footer-bottom a']
};

const birthdayKeys = {
  birthdayEyebrow: '.birthday-eyebrow',
  happyBirthday: '.birthday-content h1 span',
  boss: '.birthday-content h1 strong',
  birthdayAchievement: '.birthday-content h2',
  birthdayMessage: '.birthday-message',
  birthdayWish: '.birthday-wish',
  birthdaySignature: '.birthday-signature',
  enterShowroom: '#enterShowroom',
  skipIntro: '#skipBirthday'
};

function setElementText(el, key, language) {
  const value = translations[language][key];
  if (value === undefined || !el) return;
  // Keep inline accent spans and arrow icons intact.
  const htmlMap = {
    heroTitle: language === "en" ? 'Move with<br><span>confidence.</span>' : 'Songa mbele kwa<br><span>kujiamini.</span>',
    introTitle: language === "en" ? 'More than a destination.<br><span>A better experience.</span>' : 'Zaidi ya sehemu ya kufika.<br><span>Uzoefu bora zaidi.</span>',
    motorsTitle: language === "en" ? 'Find your next <span>drive.</span>' : 'Pata gari lako <span>lijalo.</span>',
    residencyTitle: language === "en" ? 'Space to live.<br><span>Room to grow.</span>' : 'Sehemu ya kuishi.<br><span>Nafasi ya kukua.</span>',
    aboutTitle: language === "en" ? 'Built around what<br><span>matters to you.</span>' : 'Tumejikita katika<br><span>mambo muhimu kwako.</span>',
    contactTitle: language === "en" ? 'Your next move<br><span>starts here.</span>' : 'Hatua yako inayofuata<br><span>inaanzia hapa.</span>',
    residencyCtaTitle: language === "en" ? 'Looking for a place<br>to call your own?' : 'Unatafuta sehemu ya<br>kuiita nyumbani?'
  };
  if (htmlMap[key]) el.innerHTML = htmlMap[key];
  else if (["navContact","exploreVehicles","discoverResidency","exploreVehiclesLink","exploreResidences","enquireVehicle","enquireProperty","enquireVehicles","enquireProperties","chatTeam"].includes(key)) {
    const arrows = {navContact:" ↗", exploreVehicles:" ↗", discoverResidency:"", exploreVehiclesLink:" ↗", exploreResidences:" ↗", enquireVehicle:" ↗", enquireProperty:" ↗", enquireVehicles:" ↗", enquireProperties:" ↗", chatTeam:" ↗"};
    el.textContent = value + (arrows[key] || "");
  } else el.textContent = value;
}

function setLanguage(language) {
  const lang = language === "sw" ? "sw" : "en";
  document.documentElement.lang = lang;
  Object.entries(staticText).forEach(([key, selectors]) => {
    selectors.forEach(selector => {
      const el = document.querySelector(selector);
      setElementText(el, key, lang);
    });
  });
  Object.entries(birthdayKeys).forEach(([key, selector]) => {
    const el = document.querySelector(selector);
    setElementText(el, key, lang);
  });

  document.querySelectorAll(".language-btn").forEach(button => {
    const active = button.dataset.language === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  // Translate generated inventory cards.
  document.querySelectorAll("#vehicleGrid .vehicle-info .text-link").forEach(link => {
    link.innerHTML = (lang === "en" ? "Enquire for details " : "Ulizia maelezo ") + "<span>↗</span>";
  });
  document.querySelectorAll("#propertyGrid .property-info .text-link").forEach(link => {
    link.innerHTML = (lang === "en" ? "Enquire about property " : "Ulizia nyumba ") + "<span>↗</span>";
  });
  document.querySelectorAll("#vehicleGrid .vehicle-info p").forEach((p, i) => {
    const en = vehicles[i]?.description || "";
    const sw = ["Wasiliana nasi kupata maelezo na upatikanaji wa gari.","Ulizia maelezo, hali na upatikanaji wa gari.","Wasiliana nasi kupata maelezo zaidi kuhusu gari hili."][i];
    p.textContent = lang === "en" ? en : sw;
  });
  document.querySelectorAll("#propertyGrid .property-info p").forEach((p, i) => {
    const en = properties[i]?.description || "";
    const sw = ["Wasiliana nasi kupata maelezo na upatikanaji wa nyumba hii.","Gundua nyumba na uombe maelezo zaidi kutoka kwa timu yetu.","Ulizia maelezo ya nyumba, eneo na upatikanaji."][i];
    p.textContent = lang === "en" ? en : sw;
  });
  document.querySelectorAll("#propertyGrid .property-type").forEach(el => el.textContent = lang === "en" ? "JERP RESIDENCY" : "JERP MAKAZI");
  document.querySelectorAll("#vehicleGrid .vehicle-tag").forEach(el => el.textContent = lang === "en" ? "JERP MOTORS" : "JERP MAGARI");
  try { localStorage.setItem("jerpLanguage", lang); } catch (_) {}
}

document.querySelectorAll(".language-btn").forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

/* Birthday intro, animated particles, and accessible dismissal */
const birthdayIntro = document.getElementById("birthdayIntro");
const enterShowroom = document.getElementById("enterShowroom");
const skipBirthday = document.getElementById("skipBirthday");
const particleHost = document.querySelector(".birthday-particles");
let introClosed = false;

function makeParticles() {
  if (!particleHost || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const count = window.innerWidth < 640 ? 16 : 30;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement("span");
    particle.style.left = (Math.random() * 100) + "%";
    particle.style.animationDelay = (Math.random() * 8) + "s";
    particle.style.animationDuration = (7 + Math.random() * 8) + "s";
    particle.style.width = particle.style.height = (2 + Math.random() * 3) + "px";
    particleHost.appendChild(particle);
  }
}

function closeBirthdayIntro() {
  if (introClosed || !birthdayIntro) return;
  introClosed = true;
  birthdayIntro.classList.add("is-leaving");
  window.setTimeout(() => {
    birthdayIntro.hidden = true;
    birthdayIntro.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.querySelector(".site-header")?.focus?.();
  }, 850);
  document.body.style.overflow = "";
}

enterShowroom?.addEventListener("click", closeBirthdayIntro);
skipBirthday?.addEventListener("click", closeBirthdayIntro);
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && birthdayIntro && !introClosed) closeBirthdayIntro();
});
if (birthdayIntro) {
  birthdayIntro.setAttribute("role", "dialog");
  birthdayIntro.setAttribute("aria-modal", "true");
  birthdayIntro.setAttribute("aria-label", "Birthday celebration for Joseph Ugomba");
  document.body.style.overflow = "hidden";
  makeParticles();
}

/* WhatsApp links: one delegated handler supports both static and generated cards */
document.addEventListener("click", event => {
  const link = event.target.closest(".whatsapp-link, [data-whatsapp]");
  if (!link) return;
  const isVehicle = link.dataset.whatsapp === "vehicle";
  const isProperty = link.dataset.whatsapp === "property";
  if (!isVehicle && !isProperty && !link.classList.contains("whatsapp-link")) return;
  event.preventDefault();
  let message = link.dataset.message || "Hello JERP, I would like to enquire about your services.";
  if (isVehicle) message = `Hello JERP Motors, I would like to enquire about ${link.dataset.item}. Please share its specifications, price and availability.`;
  if (isProperty) message = `Hello JERP Residency, I would like to enquire about ${link.dataset.item}. Please share its details, location and availability.`;
  openWhatsApp(message);
});

/* Mobile navigation */
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  mainNav?.classList.toggle("open", !isOpen);
});
mainNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Open navigation");
  mainNav?.classList.remove("open");
}));

/* Scroll reveals, including cards added dynamically */
function observeRevealElements(root = document) {
  const elements = root.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach(el => observer.observe(el));
  } else elements.forEach(el => el.classList.add("visible"));
}
observeRevealElements();

document.getElementById("currentYear")?.replaceChildren(String(new Date().getFullYear()));

try {
  const savedLanguage = localStorage.getItem("jerpLanguage");
  setLanguage(savedLanguage === "sw" ? "sw" : "en");
} catch (_) {
  setLanguage("en");
}

console.log("JERP Motors & Residency birthday upgrade initialized.");
console.log("Vehicles loaded:", vehicles.length, "| Properties loaded:", properties.length);
