import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ImpressumNeu = () => (
  <div className="prose lg:prose-md">
    <h1>Impressum</h1>
    <h2>Angaben gemäß § 5 TMG</h2>
    <p>
      Itana GmbH
      <br />
      Maulbronner Weg 33
      <br />
      71706 Markgröningen
    </p>
    <p>
      Handelsregister: HRB 20717
      <br />
      Registergericht: Amtsgericht Stuttgart
    </p>
    <p>
      <strong>Vertreten durch:</strong>
      <br />
      Jörg Weißleder
    </p>
    <h2>Kontakt</h2>
    <p>
      Telefon: +49 711 49066 450
      <br />
      Telefax: +49 711 49066 455
      <br />
      E-Mail: info@itana.de
    </p>
    <h2>Umsatzsteuer-ID</h2>
    <p>
      Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
      <br />
      DE 206761740
    </p>
    <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
    <p>
      Berufsbezeichnung: Jörg Weißleder ist öffentlich bestellter und
      vereidigter Sachverständiger für Systeme und Anwendungen der
      Informationsverarbeitung; Überprüfung von Geldspielgeräten.
      <br />
      Zuständige Kammer: Industrie- und Handelskammer Region Stuttgart
      <br />
      Verliehen durch: Deutschland
      <br />
      Es gelten folgende berufsrechtliche Regelungen: Öffentlich bestellte und
      vereidigte Sachverständige sind nach Maßgabe von § 36 GewO tätig. und
      unterliegen den Bestimmungen der Sachverständigenordnung der Industrie-
      und Handelskammer (IHK) Region Stuttgart
      <br />
      Regelungen einsehbar unter:{" "}
      <a
        href="https://www.stuttgart.ihk24.de"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.stuttgart.ihk24.de
      </a>
    </p>
    <h2>Angaben zur Berufshaftpflichtversicherung</h2>
    <h2>Streitschlichtung</h2>
    <p>
      Die Europäische Kommission stellt eine Plattform zur
      Online-Streitbeilegung (OS) bereit:{" "}
      <a
        href="https://ec.europa.eu/consumers/odr"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://ec.europa.eu/consumers/odr
      </a>
      .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
    </p>
    <p>
      Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
      einer Verbraucherschlichtungsstelle teilzunehmen.
    </p>
    <h3>Haftung für Inhalte</h3>{" "}
    <p>
      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
      diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
      10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
      übermittelte oder gespeicherte fremde Informationen zu überwachen oder
      nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
      hinweisen.
    </p>{" "}
    <p>
      Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
      nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
      diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
      konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
      Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
    </p>{" "}
    <h3>Haftung für Links</h3>{" "}
    <p>
      Unser Angebot enthält Links zu externen Websites Dritter, auf deren
      Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
      Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
      Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
      verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
      auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
      Zeitpunkt der Verlinkung nicht erkennbar.
    </p>{" "}
    <p>
      Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
      ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
      Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
      entfernen.
    </p>{" "}
    <h3>Urheberrecht</h3>{" "}
    <p>
      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
      Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
      Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
      des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
      Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
      privaten, nicht kommerziellen Gebrauch gestattet.
    </p>{" "}
    <p>
      Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
      werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
      Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
      Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
      entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
      wir derartige Inhalte umgehend entfernen.
    </p>
  </div>
);

function ImpressumPage() {
  return (
    <Layout>
      <SEO title="Impressum" description="Impressum" />

      <ImpressumNeu />
    </Layout>
  );
}

export default ImpressumPage;
