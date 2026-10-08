// All artwork shown on the site. Images live in src/assets/web (web-optimized
// copies of the originals in src/assets/artwork).

// ---------- Illustration & painting ----------
import electricViolet from "../assets/web/electric-violet.webp";
import viVander from "../assets/web/vi-vander.webp";
import melStudy from "../assets/web/mel-study.webp";
import viStudy from "../assets/web/vi-study.webp";
import spidermanSketch from "../assets/web/spiderman-sketch.webp";
import isThereTime from "../assets/web/is-there-time.webp";
import bean from "../assets/web/bean.webp";
import helm from "../assets/web/helm-with-friends.webp";
import king from "../assets/web/king.webp";
import deStijl from "../assets/web/de-stijl.webp";
import beautyEye from "../assets/web/beauty-in-the-eye.webp";
import factoryKitchen from "../assets/web/factory-kitchen.webp";
import kitchenBlockout from "../assets/web/kitchen-blockout.webp";

// ---------- Design series ----------
import beamPlaybill from "../assets/web/beam-girls-playbill.webp";
import atomsPlaybill from "../assets/web/atoms-playbill.webp";
import beamPoster from "../assets/web/beam-girls-poster.webp";
import atomsPoster from "../assets/web/atoms-poster.webp";
import atomsTicket from "../assets/web/atoms-ticket.webp";
import costumeHiring from "../assets/web/costume-hiring.webp";

import froshFull from "../assets/web/frosh-full-set.webp";
import froshLogo from "../assets/web/frosh-logo.webp";
import cGulls from "../assets/web/frosh-c-gulls.webp";
import cyberSurfers from "../assets/web/frosh-cyber-surfers.webp";
import dataMiners from "../assets/web/frosh-data-miners.webp";
import diodeDogs from "../assets/web/frosh-diode-dogs.webp";
import firewallFlamingos from "../assets/web/frosh-firewall-flamingos.webp";
import lanSharks from "../assets/web/frosh-lan-sharks.webp";
import microShips from "../assets/web/frosh-micro-ships.webp";
import resistorRangers from "../assets/web/frosh-resistor-rangers.webp";
import thermalPasta from "../assets/web/frosh-thermal-pasta.webp";
import widgetWizards from "../assets/web/frosh-widget-wizards.webp";

import ieeePatch from "../assets/web/ieee-dunton-patch.webp";
import ieeeHiring from "../assets/web/ieee-director-hiring.webp";
import ieeeBilliards from "../assets/web/ieee-billiards.webp";
import ieeeVariant from "../assets/web/ieee-patch-variant.webp";
import ieeeSlam from "../assets/web/ieee-slam.webp";

// ---------- Games / tech ----------
import deckLogo from "../assets/web/deck-of-secrets-logo.webp";
import capstoneTeam from "../assets/web/capstone-team.webp";
import capstoneBooth from "../assets/web/capstone-booth.webp";
import deckTable from "../assets/web/deck-of-secrets-table.webp";
import showcaseTeam from "../assets/web/showcase-team.webp";
import levelUpHall from "../assets/web/level-up-hall.webp";

// ---------- Motion ----------
import spiderReel from "../assets/web/spider-lego-reel.mp4";
import spiderReelPoster from "../assets/web/spider-lego-reel-poster.webp";
import clothSim from "../assets/web/cloth-sim-curtains.mp4";
import clothSimPoster from "../assets/web/cloth-sim-curtains-poster.webp";
import houdiniKitchen from "../assets/web/houdini-kitchen.mp4";
import houdiniKitchenPoster from "../assets/web/houdini-kitchen-poster.webp";
import firstAnim from "../assets/web/first-animation.mp4";
import firstAnimPoster from "../assets/web/first-animation-poster.webp";

/* Spider-Verse accent per category */
export const CATEGORY_COLORS = {
  illustration: "var(--magenta)",
  fanart: "var(--red)",
  painting: "var(--yellow)",
  design: "var(--cyan)",
  "3d": "var(--violet)",
};

export const FILTERS = [
  { id: "all", label: "All" },
  { id: "illustration", label: "Illustration" },
  { id: "fanart", label: "Fan Art" },
  { id: "painting", label: "Traditional" },
  { id: "3d", label: "3D" },
];

const musical = [
  { src: beamPlaybill, w: 1200, h: 1800, title: "Beam Girls — Playbill Cover", description: "Official playbill cover for the C-ENG musical Beam Girls, a parody of Mean Girls." },
  { src: atomsPlaybill, w: 1358, h: 1800, title: "The Atoms Family — Playbill Cover", description: "Official playbill cover for The Atoms Family, a parody of The Addams Family." },
  { src: beamPoster, w: 1391, h: 1800, title: "Beam Girls — Ticket Poster", description: "Poster advertising ticket sales for the musical." },
  { src: atomsPoster, w: 1391, h: 1800, title: "Atoms Family — Ticket Poster", description: "Poster advertising ticket sales for the musical." },
  { src: atomsTicket, w: 1004, h: 590, title: "Atoms Family — Ticket", description: "Show ticket designed for the musical." },
  { src: costumeHiring, w: 1080, h: 1080, title: "Costume Team Hiring Post", description: "One of the social media graphics made for the musical." },
];

const frosh = [
  { src: froshFull, w: 1110, h: 1200, title: "Escape the Simulation — Full Logo Set", description: "Main EngFrosh 2023 logo with all ten team logos and name bar." },
  { src: froshLogo, w: 1142, h: 1200, title: "Escape the Simulation — Main Logo", description: "Main EngFrosh logo in colour for dark backgrounds." },
  { src: cGulls, w: 1172, h: 1200, title: "C-Gulls", description: "EngFrosh 2023 team logo." },
  { src: cyberSurfers, w: 1173, h: 1200, title: "Cyber Surfers", description: "EngFrosh 2023 team logo." },
  { src: dataMiners, w: 1180, h: 1200, title: "Data Miners", description: "EngFrosh 2023 team logo." },
  { src: diodeDogs, w: 1172, h: 1200, title: "Diode Dogs", description: "EngFrosh 2023 team logo." },
  { src: firewallFlamingos, w: 1173, h: 1200, title: "Firewall Flamingos", description: "EngFrosh 2023 team logo." },
  { src: lanSharks, w: 1172, h: 1200, title: "LAN Sharks", description: "EngFrosh 2023 team logo." },
  { src: microShips, w: 1177, h: 1200, title: "Micro Ships", description: "EngFrosh 2023 team logo." },
  { src: resistorRangers, w: 1200, h: 1179, title: "Resistor Rangers", description: "EngFrosh 2023 team logo." },
  { src: thermalPasta, w: 1067, h: 1200, title: "Thermal Pasta", description: "EngFrosh 2023 team logo." },
  { src: widgetWizards, w: 1172, h: 1200, title: "Widget Wizards", description: "EngFrosh 2023 team logo." },
];

const ieee = [
  { src: ieeePatch, w: 1200, h: 1200, title: "IEEE Dunton Tower Patch", description: "Patch concept for IEEE Carleton featuring Dunton Tower." },
  { src: ieeeHiring, w: 1080, h: 1350, title: "Director Hiring Post", description: "Graphic advertising director positions for IEEE Carleton & WIE." },
  { src: ieeeBilliards, w: 1080, h: 1350, title: "I Triple Billiards Night", description: "Promotional poster for an IEEE Carleton billiards night." },
  { src: ieeeVariant, w: 1200, h: 960, title: "IEEE Patch Variant", description: "No-name variant of the patch design." },
  { src: ieeeSlam, w: 1080, h: 1350, title: "SLAM Sign-Ups", description: "Sign-up graphic for SLAM — Stay Late And Make." },
];

/* Work made for other people. Each entry opens its own set in the lightbox. */
export const CLIENTS = [
  { org: "IEEE Carleton", kind: "Student society", title: "Patches, posters & social graphics", description: "Patch concepts, event posters and hiring graphics for IEEE Carleton and WIE.", series: ieee, src: ieeePatch, w: 1200, h: 1200, color: "var(--cyan)", stat: "Patches · Posters" },
  { org: "EngFrosh 2023", kind: "Orientation week", title: "Escape the Simulation — full identity", description: "Main logo plus ten team logos, printed on shirts and merch for 1,300+ participants.", series: frosh, src: froshFull, w: 1110, h: 1200, color: "var(--yellow)", stat: "1,300+ shirts" },
  { org: "C-ENG Musicals", kind: "Theatre", title: "Playbills, posters & tickets", description: "Playbill covers, ticket posters, tickets and social graphics for Beam Girls and The Atoms Family.", series: musical, src: beamPlaybill, w: 1200, h: 1800, color: "var(--magenta)", stat: "2 shows" },
];

/* Personal gallery entries. */
export const GALLERY = [
  { src: electricViolet, w: 1800, h: 1080, title: "Electric Violet", description: "Digital drawing of Vi from Arcane.", cats: ["fanart", "illustration"] },
  { src: bean, w: 1350, h: 1800, title: "Bean", description: "Traditional drawing.", cats: ["painting"] },
  { src: viVander, w: 1800, h: 900, title: "What Have They Done to Us", description: "Stylized drawing of Vi and Vander from Arcane.", cats: ["fanart", "illustration"] },
  { src: melStudy, w: 1080, h: 750, title: "Mel Medarda Study", description: "Portrait study from Arcane.", cats: ["fanart", "illustration"] },
  { src: spidermanSketch, w: 936, h: 750, title: "Spider-Man, Homework Edition", description: "Spider-Man trying (and failing) to get schoolwork done.", cats: ["fanart", "illustration"] },
  { src: beautyEye, w: 875, h: 1800, title: "Beauty in the Eye", description: "Painting made live at an art battle.", cats: ["painting"] },
  { src: isThereTime, w: 1800, h: 1080, title: "Is There Still Time", description: "Digital illustration.", cats: ["illustration"] },
  { src: factoryKitchen, w: 1280, h: 720, title: "Factory Kitchen", description: "3D render of a kitchen in warm lighting (Houdini).", cats: ["3d"] },
  { src: viStudy, w: 1452, h: 1162, title: "Vi Study", description: "Portrait study from Arcane.", cats: ["fanart", "illustration"] },
  { src: king, w: 600, h: 600, title: "King", description: "Fan art inspired by The Owl House.", cats: ["fanart", "illustration"] },
  { src: deStijl, w: 1231, h: 1302, title: "De Stijl?", description: "Traditional piece playing with De Stijl colour blocks.", cats: ["painting"] },
  { src: helm, w: 1800, h: 1350, title: "Helm with Friends", description: "Digital piece.", cats: ["illustration"] },
  { src: kitchenBlockout, w: 827, h: 662, title: "Kitchen Blockout", description: "Top-down layout pass for the Houdini kitchen scene.", cats: ["3d"] },
];

export const REELS = [
  { src: spiderReel, poster: spiderReelPoster, title: "Spider-LEGO Breakdown", tools: ["3D", "Animation"], description: "A LEGO-style Spider-Man head, modelled and animated in 3D.", color: "var(--red)" },
  { src: clothSim, poster: clothSimPoster, title: "Curtain Cloth Sim", tools: ["Houdini", "Simulation"], description: "Wind-blown curtain simulation in the kitchen scene.", color: "var(--yellow)" },
  { src: houdiniKitchen, poster: houdiniKitchenPoster, title: "Kitchen Fly-Through", tools: ["Houdini", "Camera"], description: "Lighting and camera pass through the modelled kitchen.", color: "var(--violet)" },
  { src: firstAnim, poster: firstAnimPoster, title: "First Animation!", tools: ["2D", "Frame-by-frame"], description: "My first frame-by-frame animation.", color: "var(--magenta)" },
];

export const PROJECTS = {
  deckLogo,
  capstonePhotos: [
    { src: capstoneTeam, w: 1800, h: 1350, alt: "The Code Noir Studios team at the capstone showcase" },
    { src: capstoneBooth, w: 1800, h: 1350, alt: "Deck of Secrets booth with VR headsets and PCs" },
    { src: deckTable, w: 1800, h: 1012, alt: "Deck of Secrets props on the showcase table" },
    { src: showcaseTeam, w: 1800, h: 1012, alt: "Team photo on stage at the showcase" },
    { src: levelUpHall, w: 1800, h: 1350, alt: "The Level Up showcase hall" },
  ],
};
