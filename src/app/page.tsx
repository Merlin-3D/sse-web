import Header from "@/layouts/header";

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
        <div className="bg-primary pb-16">
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
        </div>
        <div className="bg-secondary py-4 w-full">
          <h1 className="uppercase text-4xl text-black text-center font-bold">
            Les prix et les dates de mises à disposition sont toujours
            négociables
          </h1>
        </div>
      </section>
    </>
  );
}
