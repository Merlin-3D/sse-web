import { Button } from "@/components/button";
import { WhatsappIcon } from "@/components/icons";
import ContactCard from "@/components/views/card-contact";
import FindCard from "@/components/views/find-card";
import Header from "@/layouts/header";
import Image from "next/image";

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
            <h1 className="text-7xl text-secondary font-bold">
              APPRENDRE TRAVAILLER ÉVOLUER
            </h1>
            <h1 className="text-7xl font-extrabold text-white uppercase">
              Évoluons ensemble en SST
            </h1>
            <p className="text-secondary text-3xl mx-auto max-w-5xl text-center">
              La compagnie LEX0-1000 Inc. Dispose d’une expertise en santé et
              sécurité dans l’industrie de la construction (certification
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
    </>
  );
}
