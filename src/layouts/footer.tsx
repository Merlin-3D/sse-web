import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          <div>
            <Image
              src="/logo/logo.png"
              alt="LEXO-1000 Inc."
              width={180}
              height={60}
              className="mb-4"
            />

            <p className="text-sm text-gray-700">
              Copyright © 2023 LEXO-1000 – Tous droits réservés
            </p>
            <p className="text-sm text-gray-700">Designed by Lexo-1000 inc</p>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-2">Liens utiles :</h4>
            <p className="text-sm text-gray-700 cursor-pointer">CNESST</p>
            <p className="text-sm text-gray-700 cursor-pointer my-2">ASP CONSTRUCTION</p>
            <p className="text-sm text-gray-700 cursor-pointer">CSA GROUP</p>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-2">Phone:</h4>
            <p className="text-sm text-gray-700 mb-2">(514) 730 – 5534</p>

            <h4 className="font-semibold text-primary mb-2">Email:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>info@lexo-1000.com</li>
              <li>bureau@lexo-1000.com</li>
            </ul>

            <h4 className="font-semibold text-primary my-2">
              Heures d’ouverture :
            </h4>
            <p className="text-sm text-gray-700">Lundi – Vendredi 6am – 8pm</p>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-2">Adresse :</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              529-3333 rue Jean Talon <br />
              Ouest Montréal (Qc) H3R-2G1 Canada
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
