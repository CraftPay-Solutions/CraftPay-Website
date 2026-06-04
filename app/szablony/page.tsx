import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TemplateCard, { TemplateCardProps } from "@/components/TemplateCard";
import "./szablony.css";

export const metadata: Metadata = {
  title: "CraftPay - Szablony",
  description:
    "Znajdź idealny szablon dla Twojego serwera Minecraft. Przeglądaj wszystkie dostępne szablony CraftPay.",
  openGraph: {
    title: "CraftPay - Szablony",
    description: "Znajdź idealny szablon dla Twojego serwera Minecraft.",
    url: "https://craftpay.pl/szablony",
  },
  alternates: { canonical: "https://craftpay.pl/szablony" },
};

const DEFAULT_FEATURES: string[] = [
  "Responsywny design",
  "Koszyk zakupowy",
  "System kategorii",
  "Animacje przejść",
  "Ciemny motyw",
  "Baner powitalny",
  "Sekcja FAQ",
];

const TEMPLATES: TemplateCardProps[] = [
  {
    name: "CraftPay-Gold",
    imageSrc: "/img/templatesgold.webp",
    imageAlt: "Podgląd szablonu CraftPay Gold",
    features: DEFAULT_FEATURES,
    demoHref: "#",
  },
  {
    name: "CraftPay-Diamond",
    imageSrc: "/img/templates/diamond.webp",
    imageAlt: "Podgląd szablonu CraftPay Diamond",
    features: DEFAULT_FEATURES,
    demoHref: "#",
  },
  {
    name: "CraftPay-Emerald",
    imageSrc: "/img/templates/emerald.webp",
    imageAlt: "Podgląd szablonu CraftPay Emerald",
    features: DEFAULT_FEATURES,
    demoHref: "#",
  },
];

export default function SzablonyPage() {
  return (
    <>
      <main>
        <Navbar />
        <section className="templates-page-hero">
          <h1 className="templates-page-title">
            <span>
              Nasze <span className="hero-green">dostępne szablony</span>
            </span>
          </h1>
          <p className="templates-page-subtitle">
            Sprawdź wszystkie szablony dostępne dla Twojego itemshopu. Każdy
            jest darmowy i gotowy do użycia.
          </p>
        </section>

        <section className="templates-page-section">
          <div className="templates-page-grid">
            {TEMPLATES.map((tpl) => (
              <TemplateCard key={tpl.name} {...tpl} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
