import React from "react";
import Img from "gatsby-image";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import MobilityLogo from "../images/icon-192.png";
import GamingLogo from "../images/gaming/gaming.svg";
import ExpertiseLogo from "../images/expertise/expertise.svg";

const Ueberblick = () => (
  <div className="prose lg:prose-md mx-auto">
    <h2 className="font-extrabold tracking-tight text-gray-900 text-3xl leading-10">
      Geschäftsbereiche und Leistungen
    </h2>
    <div className="text-gray-500 ">
      <p>
        Der Name ITANA steht für ein umfassendes Know-how und professionellem
        Umgang mit zukunftweisender Informationstechnologie (IT) und den
        Auswirkungen auf ganz verschiedene Lebens-, Business- und
        Erlebnisbereiche. Die unter dem Dach der ITANA gebündelten Leistungen
        bestehen aus drei Geschäftsbereichen.
      </p>
      <p>
        Der Bogen spannt sich dabei von Sachverständigentätigkeiten bei
        komplexen Geldspielgeräten (GAMING) und im Bereich der IT, über Analyse,
        die Begutachtung und Implementierung von anspruchsvollen Datensystemen
        (EXPERTISE) bis zur zeitgemäßen Elektromobilität samt Vermietung von
        praxistauglichen Elektrofahrzeugen von Tesla bis Volkswagen (MOBILITY).
      </p>
      <p>
        Als Unternehmen mit Wurzeln inmitten von Stuttgart fühlen wir uns seit
        Anbeginn dem schwäbischen Geist verbunden. Wir sind hochspezialisiert
        und stellen an uns, wie auch an die Qualität unserer Lösungen die
        höchsten Anforderungen. Unsere tägliche Arbeit erfolgt buchstäblich am
        Pulsschlag der technischen Innovation - dabei unterliegt auch unser
        eigenes Unternehmen einem stetigen Wandel. Es sind rund zwanzig Jahre
        vergangen, seit wir die ersten Websites mit Shop-Systemen entwickelten.
        Damals wie heute waren die Anforderungen an professionelle IT-Systeme so
        individuell wie unsere Kunden.
      </p>
    </div>
  </div>
);

const HeroPortal = () => (
  <div className="mx-auto break-word">
    <div className="text-center">
      <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
        Willkommen bei
        <br className="xl:hidden" />
        <span className="text-itana-red uppercase"> Itana</span>
      </h1>
      <p className="prose lg:prose-md mx-auto">
        Ihr Begleiter für technologischen Wandel und IT-Sachverstand.
      </p>
    </div>
  </div>
);

const LogoPortals = () => (
  <div className="mt-12">
    <p className="prose lg:prose-lg mx-auto">
      <span className="text-itana-red font-semibold">Itana</span> bietet
      fundierte Beratung und Know-how in drei Unternehmensbereichen an.
    </p>

    <div className="mt-8 bg-white">
      <div className="max-w-xl mx-auto   lg:max-w-screen-xl ">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="mt-4 lg:mt-0">
            <div className="flex items-center justify-start">
              <a
                href="https://mobility.itana.de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={MobilityLogo}
                  alt="Logo Mobility"
                  className="h-24 w-24 mx-auto"
                ></img>
              </a>
            </div>
            <div>
              <h2 className="font-semibold text-itana-red mt-2">
                Mobility: Zeitgemäße Elektromobilität selbst erfahren
              </h2>
              <p className="prose lg:prose-md">
                mobility.itana.de macht zeitgemäße Mobilität erfahrbar. Buchen
                Sie Elektrofahrzeuge mit Insiderwissen und Know-How von
                Experten.
              </p>
            </div>
          </div>

          <div>
            <div className="mt-4 lg:mt-0">
              <div className="flex items-center justify-start">
                <a
                  href="https://expertise.itana.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ExpertiseLogo}
                    alt="Logo Expertise"
                    className="h-24 w-24 "
                  ></img>
                </a>
              </div>
              <div className="">
                <h2 className="font-semibold text-itana-blue mt-2">
                  Expertise: IT-Gutachten
                </h2>
                <p className="prose lg:prose-md">
                  Leistungsspektrum: Analyse, Beweissicherung, Expertisen sowie
                  IT-Gutachten, Wertgutachten, Schiedsgutachten und Mediation.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-4 lg:mt-0">
              <div className="flex items-center justify-start">
                <a
                  href="https://gaming.itana.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={GamingLogo}
                    alt="Logo Gaming"
                    className="h-24 w-24 "
                  ></img>
                </a>
              </div>
              <div className="">
                <h2 className="font-semibold text-green-700 mt-2">
                  Gaming: Überprüfung von Geldspielgeräten
                </h2>
                <p className="prose lg:prose-md">
                  Gemäß §7 SpielV sind Geldspielgeräte zu überprüfen. Bei Itana
                  vertrauen Sie auf langjähriges Know-How: Wir sind öffentlich
                  bestellte und vereidigte Sachverständige und erstellen
                  technische und forensische Gutachten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
  }
`;

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} description="Itana GmbH" />
      <Helmet>
        <link rel="canonical" href="https://itana.de/" />
      </Helmet>
      <div className="mx-auto max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <HeroPortal />
        <LogoPortals />
        <Ueberblick />
      </div>
    </Layout>
  );
}

export default IndexPage;
