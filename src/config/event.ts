export const CONFIG = {
  eventName: "Ramadanlys 2026",
  tagline: "En dag for fællesskab, lys og ramadanstemning i København.",
  dateLabel: "Fredag d. 14. marts 2026",
  locationName: "Multisalen (ved Den Røde Plads)",
  address: "Nørrebrogade 208, 2200 København N",
  marketTime: "10:00–15:00",
  programTime: "15:00–18:00",
  lightsOnTime: "Ca. 17:00",
  maghribTime: "17:18 (iftar)",
  expectedGuests: "ca. 350 gæster",
  dinnerPrice: "200 DKK / kuvert",
  dinnerMenu: ["Harira", "Tajin", "Roulade"],
  coheraLink: "https://billetto.dk/e/ramadan-langbordsmiddag-billetter-1789248",
  generalContactEmail: "TODO_EMAIL",
  facebookEventLink: "TODO_FACEBOOK_EVENT_LINK",
  instagramLink: "TODO_INSTAGRAM_LINK",
  googleMapsEmbedSrc: "TODO_GOOGLE_MAPS_EMBED_SRC",
};

export const PROGRAM_ITEMS = [
  { time: "10:00–15:00", title: "Ramadan marked", desc: "Boder, inspiration, Eid-trends, kaffe & kage." },
  { time: "15:00–16:00", title: "Taler", desc: "Afklares – program opdateres løbende." },
  { time: "15:00–17:00", title: "Aktiviteter", desc: "Ansigtsmaling, ballon, henna" },
  { time: "16:00–17:10", title: "Børnekor + Ramadan-sang", desc: "Børnene på scenen" },
  { time: "16:15–17:18", title: "Scene / indslag", desc: "Stand-up / taler frem til maghrib." },
  { time: CONFIG.lightsOnTime, title: "Lys tændes", desc: "Vi tænder Ramadanlyset sammen" },
  { time: CONFIG.maghribTime, title: "Iftar / middag", desc: "Middag serveres (billet via Cohera)." },
  { time: "18:00", title: "Tak for i dag", desc: "Afslutning og oprydning." },
];

export const FAQ_ITEMS = [
  {
    q: "Hvordan køber jeg billet?",
    a: "Billetter købes via Cohera. Klik på 'Tilmelding & billetter' og følg checkout.",
  },
  {
    q: "Hvad tid er iftar?",
    a: `Vi planlægger iftar ved maghrib kl. ${CONFIG.maghribTime}.`,
  },
  {
    q: "Kan børn komme med?",
    a: "Ja — der er familievenlige aktiviteter som ansigtsmaling, ballon og henna.",
  },
  {
    q: "Er programmet endeligt?",
    a: "Programmet er foreløbigt og opdateres løbende, når talere og sceneplan er bekræftet.",
  },
  {
    q: "Foto og video?",
    a: "Der kan blive taget billeder/video til dokumentation. Hvis du ikke ønsker at indgå, så giv os besked på dagen.",
  },
];
