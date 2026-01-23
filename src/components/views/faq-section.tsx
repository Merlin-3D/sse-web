"use client"
import { FaqItem } from "./faq-item";

export default function FaqSection() {
  return (
    <section className="py-16">
      <div className="mx-auto container px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 bg-white">
        <div className="flex flex-col justify-center">
          <p className="text-secondary text-2xl font-semibold uppercase mb-4">FAQ</p>

          <h2 className="text-4xl font-extrabold uppercase text-primary leading-tight">
            Vos questions
            <br />
            Nos réponses
          </h2>
        </div>

        <div className="lg:col-span-2">
          <FaqItem
            defaultOpen
            question="Quels types de service en SST proposez-vous ?"
            answer={
              <>
                <p className="mb-4">
                  Nous offrons une gamme complète de services en santé et
                  sécurité pour les secteurs résidentiel, commercial, industriel
                  et de génie civil.
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Mise à disposition de coordonnateur en santé et sécurité
                    avec la carte d’accréditation de la CNESST;
                  </li>
                  <li>
                    Mise à disposition de conseiller en santé et sécurité;
                  </li>
                  <li>Formation du personnel en santé et sécurité;</li>
                  <li>Audit et inspection des chantiers;</li>
                  <li>Gestion des documents de SGSST.</li>
                </ul>
              </>
            }
          />

          <FaqItem
            question="Vos coordonnateurs en SST disposent-ils de la carte d’accréditation de la CNESST (NCSO ou NHSA) ?"
            answer="Oui, tous nos coordonnateurs détiennent les accréditations requises par la CNESST."
          />

          <FaqItem
            question="Comment faire pour postuler pour me joindre à votre équipe ?"
            answer="Vous pouvez postuler directement via notre section recrutement ou nous envoyer votre CV par courriel."
          />

          <FaqItem
            question="Quelles sont les critères de sélection ?"
            answer="Les critères incluent l’expérience terrain, les certifications SST et les compétences professionnelles."
          />

          <FaqItem
            question="Vous offrez de la formation en SST ?"
            answer="Oui, nous offrons des formations complètes adaptées aux besoins de votre organisation."
          />

          <FaqItem
            question="Vous formez gratuitement les personnes ?"
            answer="Certaines formations peuvent être offertes gratuitement selon les programmes et ententes."
          />
        </div>
      </div>
    </section>
  );
}
