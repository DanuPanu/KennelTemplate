import React from "react";
import Image from "next/image";

export function Layout6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-main-beige flex flex-col items-center justify-center">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-3xl leading-[1.2] font-bold md:mb-6 md:text-4xl lg:text-5xl">
              Tervetuloa tutustumaan tulevaan pentueeseen ja niiden upeisiin
              vanhempiin!
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              Meidän kennelissämme on aina jännitystä tulevista pentueista.
              Olemme sitoutuneet kasvattamaan terveitä ja hyvin sosiaalistettuja
              pentuja.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Pentue X
                </h6>
                <p>
                  Rodun nimi: Labradorinnoutaja, odotettu syntymäaika: 15.
                  marraskuuta.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Vanhempien tiedot
                </h6>
                <p>Emo: Bella, isä: Max, molemmat ystävällisiä ja energisiä.</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/jesse-collins-XCHhSPhXsiI-unsplash.jpg"
              className="w-full rounded object-cover"
              alt="Relume placeholder image"
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
