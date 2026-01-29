import { Button } from "@/components/button";
import QuoteSection from "@/components/views/quote-section";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import Image from "next/image";
import Link from "next/link";


export default function GetAQuote() {
  return (
    <>
      <Header />
      <section className="relative h-72  w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070"
            alt="Expertise SST LEX0-1000"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50 bg-linear-to-r from-black/90 via-black/40 to-transparent" />
        </div>

        <div className="container relative z-10 max-w-337.5 mx-auto px-6 md:px-12">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 uppercase tracking-tighter">
              Obtenir une soumission
            </h1>
            <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-widest uppercase bg-secondary rounded-full">
              <Link href="/" className="font-semibold text-black">
                Accueil
              </Link>{" "}
              • Obtenir une soumission
            </span>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center py-12 px-4">
        <div className="grid md:grid-cols-2 md:gap-10 lg:gap-20 max-w-7xl w-full items-center">
          <div className="p-5">
            <h1 className="text-2xl font-semibold text-gray-900 text-center md:text-start mb-3 tracking-tight">
              OBTENIR UNE SOUMISSION DÈS MAINTENANT ?
            </h1>
            <p className="text-sm/6 text-gray-600 text-center md:text-start mx-auto md:mx-0 mb-8 leading-relaxed ">
              Chaque stratégie d’entreprise est différente et c’est pourquoi
              nous offrons une solution, et non des plans tarifaires. Contactez
              notre équipe pour en savoir plus sur la façon dont nous pouvons
              aider votre entreprise. Notre équipe vous contactera pour mieux
              connaître vos objectifs et vous proposer une soumission
              personnalisée.
            </p>

            <form>
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-sm text-gray-500 mb-2">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    placeholder="David"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-2">
                    Votre courriel
                  </label>
                  <input
                    type="text"
                    placeholder="Andrew"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-secondary transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="">
                  <label className="block text-sm text-gray-500 mb-2">
                    Votre numéro de téléphone
                  </label>
                  <input
                    type="text"
                    placeholder="Votre numéro de téléphone"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-secondary transition-colors"
                  />
                </div>

                <div className="">
                  <label className="block text-sm text-gray-500 mb-2">
                    Votre adresse
                  </label>
                  <input
                    type="text"
                    placeholder="Votre adresse"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-secondary transition-colors"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm text-gray-500 mb-2">
                  Votre soumission porte sur
                </label>
                <input
                  type="text"
                  placeholder="Votre adresse"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-secondary transition-colors"
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm text-gray-500 mb-2">
                  Ecrivez vos besoins ici
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none resize-y focus:border-secondary transition-colors"
                />
              </div>

              <div className="flex items-center gap-2 mb-6">
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer accent-secondary rounded-[5px] text-gray-300"
                />
                <label className="text-sm text-gray-500 cursor-pointer">
                  Acceptez nos termes et conditions.
                </label>
              </div>

              <Button type="submit" className="w-full">
                Send message
              </Button>
            </form>
          </div>

          <div className="rounded-3xl p-10 relative min-h-165.5 w-full max-w-170 hidden md:flex flex-col justify-between overflow-hidden">
            <Image
              src={
                "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070"
              }
              alt="SST WEB"
              className="absolute inset-0 h-full w-full object-cover"
              //   sizes="100vw"
              width={1000}
              height={1000}
            />

            <div className="relative z-10 mt-auto">
              <p className="text-sm/6 text-white mb-5 max-w-100">
                Stop spending hours recreating layouts - with{" "}
                <strong>PrebuiltUI</strong> you can copy, customize and launch
                stunning UIs in minutes.
              </p>
            </div>
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* <QuoteSection /> */}
      <Footer />
    </>
  );
}
