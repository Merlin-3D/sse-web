"use client";
import { Button } from "@/components/button";
import { WhatsappIcon } from "@/components/icons";
import ContactCard from "@/components/views/card-contact";
import FaqSection from "@/components/views/faq-section";
import FindCard from "@/components/views/find-card";
import QuoteSection from "@/components/views/quote-section";
import Sectors from "@/components/views/sectors";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import Image from "next/image";

const experts = [
  {
    img: "/images/comm-1024x683.jpg",
    title: (
      <>
        commerciale <br /> (secteur construction)
      </>
    ),
  },
  {
    img: "/images/comm-1024x683.jpg",
    title: (
      <>
        institutionnel <br /> (secteur construction)
      </>
    ),
  },
  {
    img: "/images/comm-1024x683.jpg",
    title: (
      <>
        résidentiel <br />
        (secteur construction)
      </>
    ),
  },
  {
    img: "/images/comm-1024x683.jpg",
    title: (
      <>
        génie civil <br />
        (secteur construction)
      </>
    ),
  },

  {
    img: "/images/comm-1024x683.jpg",
    title: <>Manufacturier</>,
  },

  {
    img: "/images/comm-1024x683.jpg",
    title: <>secteur minier</>,
  },

  {
    img: "/images/comm-1024x683.jpg",
    title: <>secteur forestier</>,
  },
  {
    img: "/images/comm-1024x683.jpg",
    title: <>secteur pétrochimie</>,
  },

  {
    img: "/images/comm-1024x683.jpg",
    title: (
      <>
        signaleur routier <br />
        (longue durée)
      </>
    ),
  },
  {
    img: "/images/comm-1024x683.jpg",
    title: (
      <>
        ménage de chantier <br />
        (hors ccq)
      </>
    ),
  },
  {
    img: "/images/comm-1024x683.jpg",
    title: (
      <>
        coordonnateur <br />
        environnement
      </>
    ),
  },
  {
    img: "/images/comm-1024x683.jpg",
    title: (
      <>
        audit <br />
        (sst et environnement)
      </>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <div className="bg-secondary py-4 w-full">
          <h1 className="uppercase text-4xl text-black text-center font-bold">
            CONSULTANT EN SANTÉ ET SÉCURITÉ AU TRAVAIL, MULTI-SECTEUR AU QUÉBEC,
            CANADA ET USA
          </h1>
        </div>
        <div className="bg-primary pb-24">
          <div className="flex flex-col gap-8 items-center py-48">
            <div className="relative h-24 w-full text-center">
              <h1 className="text-7xl text-secondary font-bold">
                APPRENDRE TRAVAILLER ÉVOLUER
              </h1>
            </div>
            <h1 className="text-7xl font-extrabold text-white uppercase animate-fade-in">
              Évoluons ensemble en SST
            </h1>

            <p className="text-secondary text-3xl mx-auto max-w-5xl text-center animate-slide-up">
              La compagnie LEX0-1000 Inc. Dispose dune expertise en santé et
              sécurité dans l&apos;industrie de la construction (certification
              CNESST), le secteur industriel (raffinerie de pétrole), le secteur
              manufacturier (usine) au Québec et dans le secteur forestier et
              minier au Canada et aux USA (certification: NCSO et NHSA)
            </p>
          </div>
          <h1 className="text-7xl text-secondary text-center font-bold">
            VOUS RECHERCHEZ ?
          </h1>
          <div className="grid grid-cols-3 w-full gap-4 px-12">
            <FindCard
              title="un coordonnateur sst ? secteur construction"
              urlImage="/images/coordo-1024x683.jpg"
              description={
                "Location de coordonnateur en santé et sécurité avec la certification: CNESST au Québec et au Canada (avec la certification: NCSO et NHSA)"
              }
            />
            <FindCard
              title="un coordonnateur sst ? secteur construction"
              urlImage="/images/coordo-1024x683.jpg"
              description={
                "Location de coordonnateur en santé et sécurité avec la certification: CNESST au Québec et au Canada (avec la certification: NCSO et NHSA)"
              }
            />
            <FindCard
              title="un coordonnateur sst ? secteur construction"
              urlImage="/images/coordo-1024x683.jpg"
              description={
                "Location de coordonnateur en santé et sécurité avec la certification: CNESST au Québec et au Canada (avec la certification: NCSO et NHSA)"
              }
            />
          </div>
        </div>
      </section>
      <section className="bg-secondary py-4 w-full">
        <h1 className="uppercase text-4xl text-black text-center font-bold">
          Les prix et les dates de mises à disposition sont toujours négociables
        </h1>
      </section>
      <section className=" bg-white pb-16">
        <p className="uppercase py-16 font-extrabold text-lg text-center container mx-auto">
          NOTRE FORCE, C’EST LA GESTION DE LA SANTÉ ET SÉCURITÉ AU TRAVAIL DANS
          LE SECTEUR DE LA CONSTRUCTION, LE SECTEUR INDUSTRIEL (RAFFINERIE), LE
          SECTEUR MANUFACTURIER AU QUÉBEC ET DANS LE SECTEUR FORESTIER ET MINIER
          AU CANADA ET AUX USA (certification: NCSO et NHSA)
        </p>
        <div className="flex items-center justify-center">
          <button className="bg-secondary px-8 py-4 text-4xl font-extrabold uppercase">
            Découvrez lexo-1000 INC
          </button>
        </div>
        <div className="grid grid-cols-4 mx-auto container gap-8 mt-20">
          <ContactCard
            icon={<WhatsappIcon className="h-12 w-12 text-secondary" />}
            name="Recrutement hors Cananda"
            descritption="WhatsApp pour kes personnes hors du canada"
            phone="Tel: 650212589"
          />
          <ContactCard
            icon={<WhatsappIcon className="h-12 w-12 text-secondary" />}
            name="Recrutement au Cananda"
            descritption="Saississez cette opportunité pour faire progresser votre carrière"
            phone="Tel: 650212589"
          />
          <ContactCard
            icon={<WhatsappIcon className="h-12 w-12 text-secondary" />}
            name="Recrutement hors Cananda"
            descritption="WhatsApp pour kes personnes hors du canada"
            phone="Tel: 650212589"
          />
          <ContactCard
            icon={<WhatsappIcon className="h-12 w-12 text-secondary" />}
            name="Recrutement hors Cananda"
            descritption="WhatsApp pour kes personnes hors du canada"
            phone="Tel: 650212589"
          />
        </div>
      </section>
      <section className="bg-primary pb-24">
        <div className="mx-auto container">
          <div className="flex items-center justify-between">
            <h1 className="text-7xl text-secondary text-center font-bold">
              NOTRE EXPERTISE
            </h1>
            <div>
              <Button size="2xl">Contactez Nous</Button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-8 gap-y-16 mt-10">
            {experts.map((item, i) => {
              return <Sectors key={i} urlImage={item.img} title={item.title} />;
            })}
          </div>
        </div>
      </section>
      <section className="mx-auto container mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
          <div className={"w-full"}>
            <Image
              src={"/images/comm-1024x683.jpg"}
              alt=""
              // layout="fill"
              height={1000}
              width={1000}
              className="min-w-full min-h-80"
            />
          </div>
          <div
            className={
              "bg-primary flex flex-col items-center justify-around px-4 md:px-0"
            }
          >
            <h4 className="font-bold text-4xl text-center text-secondary">
              NOS SERVICES
            </h4>

            <p className="font-light text-2xl px-4 text-secondary text-center">
              Nous offrons des services de location de coordonnateur et/ou de
              conseiller en santé et sécurité, avec ou sans la certification
              CNESST, (parlant parfaitement l’anglais et le français), pour le
              secteur de la construction au Québec et le Nunavut.
            </p>
            <p className="font-light text-2xl px-4 text-secondary text-center">
              Nous offrons aussi des services de location de coordonnateur et/ou
              de conseiller en santé et sécurité (parlant parfaitement anglais
              et français), pour le secteur forestier et minier au Canada et aux
              USA. Avec la certification: NCSO® (National Construction Safety
              Officer) ou avec la certification: NHSA™ (National Health and
              Safety Administrator)
            </p>
            <div>
              <Button
                size="xl"
                className="uppercase rounded-full font-light text-sm"
              >
                découvrir nos services
              </Button>
            </div>
          </div>
        </div>
      </section>
      <FaqSection />
      <QuoteSection />
      <Footer />
    </>
  );
}
