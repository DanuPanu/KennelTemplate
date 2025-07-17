import React from "react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { PawPrint } from "lucide-react";

export function Layout238() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-main-beige flex flex-col items-center justify-center">
      <div className="container">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="text-3xl leading-[1.2] font-bold md:text-4xl lg:text-5xl">
              Kokemus ja asiantuntemus koirien kasvatuksessa ja hoidossa
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <PawPrint size={48} className="size-12" />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Rakkaus koiriin näkyy kaikessa toiminnassamme
            </h3>
            <p>
              Tarjoamme laadukasta ja vastuullista koirankasvatusta, joka
              perustuu rakkauteen.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="link" size="link">
                <Link href="/about-us">Tutustu</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <PawPrint size={48} className="size-12" />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Korkealaatuiset pentusuunnitelmat ja vastuullinen jalostus
            </h3>
            <p>
              Suunnittelemme tulevia pentueita, jotka ovat terveitä ja hyvin
              hoidettuja.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="link" size="link">
                <Link href="/puppy-plans">Tutustu</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <PawPrint size={48} className="size-12" />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Valokuvagalleria, jossa voit ihailla koiriamme ja pentujamme
            </h3>
            <p>Kuvagalleriastamme löydät kauniita hetkiä koirien elämästä.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="link" size="link">
                <Link href="/gallery">Näytä</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
