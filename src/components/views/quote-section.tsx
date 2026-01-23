import Image from "next/image";
import { Button } from "../button";

export default function QuoteSection() {
  return (
    <section className="bg-primary">
      <div className="relative grid grid-cols-1 md:grid-cols-2 drop-shadow-xl">
        {/* Ajouter overflow-hidden ici */}
        <div className="overflow-hidden">
          <Image
            src={"/images/footer.jpg"}
            alt=""
            height={1000}
            objectFit="cover"
            width={1000}
            className="h-96 w-full object-cover ease-in-out hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="h-full w-full bg-c-100 flex flex-col justify-center items-center">
          <div className="flex flex-col pt-16 md:pt-4 pb-8 md:pb-4 lg:px-0 md:justify-center xl:justify-start gap-y-8 w-[500px]">
            <h1 className="text-start text-secondary text-2xl font-bold">
              Besoin d&apos;un devis pour vos projets de santé et sécurité au
              travail ?
            </h1>
            <div className="text-3xl text-white">
              CONTACTER-NOUS, C&apos;EST GRATUIT !
            </div>
            <div>
              <Button size="lg" className="font-light">
                Demander Un Devis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}