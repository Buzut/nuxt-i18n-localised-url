const products = [
  {
    id: "prod001",
    title: "UltraFit Wireless Earbuds",
    price: "$89.99",
    url: "ultrafit-wireless-earbuds",
    description: "Experience crystal-clear audio with our lightweight, noise-canceling wireless earbuds. Perfect for daily use, travel, and workouts."
  },
  {
    id: "prod002",
    title: "SolarCharge Pro Solar Power Bank",
    price: "$119.95",
    url: "solarcharge-pro",
    description: "Charge your devices anywhere with the SolarCharge Pro, a powerful solar-powered portable battery with fast-charging capabilities."
  },
  {
    id: "prod003",
    title: "AeroLight Compact Backpack",
    price: "$64.50",
    url: "aerolight-backpack",
    description: "A minimalist and functional backpack designed for daily use. Lightweight, durable, and perfect for commuters and travelers."
  },
  {
    id: "prod004",
    title: "PureBrew Reusable Coffee Filter",
    price: "$18.00",
    url: "purebrew-filter",
    description: "Eco-friendly and long-lasting, this reusable coffee filter helps you brew better coffee while reducing waste."
  },
  {
    id: "prod005",
    title: "NovaGlow Smart Desk Lamp",
    price: "$75.00",
    url: "novaglow-lamp",
    description: "A modern smart desk lamp with adjustable brightness and color temperature. Ideal for home offices and study spaces."
  },
  {
    id: "prod001",
    title: "Écouteurs sans fil UltraFit",
    price: "89,99 €",
    url: "ecouteurs-ultrafit",
    description: "Profitez d'un son clair et net avec ces écouteurs sans fil légers et à annulation de bruit. Idéaux pour l'usage quotidien, les voyages et les entraînements."
  },
  {
    id: "prod002",
    title: "Batterie Solaire SolarCharge Pro",
    price: "119,95 €",
    url: "batterie-solarcharge-pro",
    description: "Chargez vos appareils n'importe où avec la SolarCharge Pro, une batterie portable puissante alimentée par l'énergie solaire et dotée de capacités de chargement rapide."
  },
  {
    id: "prod003",
    title: "Sac à dos compact AeroLight",
    price: "64,50 €",
    url: "sac-a-dos-aerolight",
    description: "Un sac à dos minimaliste et fonctionnel conçu pour l'usage quotidien. Léger, résistant et parfait pour les commutateurs et les voyageurs."
  },
  {
    id: "prod004",
    title: "Filtre à café réutilisable PureBrew",
    price: "18,00 €",
    url: "filtre-purebrew",
    description: "Un filtre à café écologique et durable qui vous permet de préparer un café de meilleure qualité tout en réduisant les déchets."
  },
  {
    id: "prod005",
    title: "Lampe de bureau intelligente NovaGlow",
    price: "75,00 €",
    url: "lanterne-novaglow",
    description: "Une lampe de bureau moderne et intelligente avec une intensité lumineuse et une température de couleur réglables. Idéale pour les bureaux et les espaces de travail."
  }
];

export default eventHandler((event) => {
  const slug = getRouterParam(event, 'slug');
  return products.find(p => p.url === slug)
});
