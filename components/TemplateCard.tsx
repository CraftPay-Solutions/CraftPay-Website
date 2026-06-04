import Image from "next/image";
import Link from "next/link";

export interface TemplateCardProps {
  name: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
  price?: string;
  demoHref?: string;
}

export default function TemplateCard({
  name,
  imageSrc,
  imageAlt,
  features,
  price = "0,00 PLN",
  demoHref = "#",
}: TemplateCardProps) {
  return (
    <div className="template-card">
      <div className="template-preview">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1024}
          height={1024}
          loading="lazy"
        />
      </div>

      <div className="template-info">
        <h3 className="template-name">{name}</h3>
        <p className="template-features-label">Dostępne funkcje:</p>
        <ul className="template-features">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <div className="template-footer">
        <span className="template-price">{price}</span>
        <Link href={demoHref} className="template-demo-btn">
          Zobacz demo
          <Image
            src="/img/icons/external-link.svg"
            width={14}
            height={14}
            alt=""
            aria-hidden
            loading="lazy"
          />
        </Link>
      </div>
    </div>
  );
}
