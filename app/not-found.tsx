import type { Metadata } from "next";
import "./not-found.css";

export const metadata: Metadata = {
  title: "404 - Nie znaleziono takiej strony",
};

export default function NotFound() {
  return (
      <div className="not-found-wrapper">
        <div className="error-container">
          <img src="/img/404.svg" alt="404" className="error-img" />
          <h1 className="error-title">404</h1>
          <p className="error-text">
            Strona, której szukasz, nie istnieje lub została przeniesiona.
          </p>
          <a href="/" className="error-btn">
            Powrót na stronę główną
          </a>
        </div>
      </div>
  );
}
