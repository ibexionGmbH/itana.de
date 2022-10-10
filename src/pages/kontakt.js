import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ArenguForm } from "gatsby-plugin-arengu-forms";
import Iframe from "react-iframe";

import Joerg from "../images/DSC_2178.jpg";

function KontaktPage() {
  return (
    <Layout>
      <SEO
        title="Kontakt"
        description="Können wir Dir bei Deinen Fragen helfen? Kontaktiere uns unverbindlich - wir freuen uns!"
      />

      <div className="max-w-7xl mx-auto prose lg:prose-md">
        <h2>So finden Sie uns</h2>
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.6572191742066!2d9.098110951472483!3d48.90286950542604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799d6c0c4e1f9d5%3A0xa49fe7c8f1996367!2sMaulbronner%20Weg%2033%2C%2071706%20Markgr%C3%B6ningen!5e0!3m2!1sde!2sde!4v1582817225514!5m2!1sde!2sde"
          width="600"
          height="450"
          className="border-0 mt-2"
        />
        <button className="btn-itana mt-2">
          <a
            href="https://www.google.com/maps/place/Maulbronner+Weg+33,+71706+Markgr%C3%B6ningen/@48.902866,9.0997578,19z/data=!3m1!4b1!4m5!3m4!1s0x4799d6c0c4e1f9d5:0xa49fe7c8f1996367!8m2!3d48.902866!4d9.100305"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps
          </a>
        </button>

        <h2>Kontaktieren Sie uns. Wir antworten so schnell wie möglich.</h2>

        <section className="mx-auto">
          <ArenguForm id="157298306400350768"></ArenguForm>
        </section>

        <section>
          <h2>Hauptsitz</h2>
          <div className="flex flex-wrap">
            <div className="w-1/1 md:w-1/2">
              <p>
                Itana GmbH <br />
                Maulbronner Weg 33
                <br />
                71706 Markgröningen
              </p>
              <h2>Büro Stuttgart</h2>
              <p>
                Itana GmbH <br />
                Leitzstr. 45
                <br />
                70469 Stuttgart
                <br />
              </p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@itana.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-itana-blue"
                >
                  info@itana.de
                </a>
                <br />
                Telefon:{" "}
                <a href="tel:+4971149066450" className="text-itana-blue">
                  +49 711 49066 450
                </a>
                <br />
                Telefax: +49 711 49066 455
              </p>
            </div>
            <div className="w-1/1 md:w-1/2">
              <img
                src={Joerg}
                className="rounded h-64"
                alt="Jörg Weißleder"
              ></img>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default KontaktPage;
