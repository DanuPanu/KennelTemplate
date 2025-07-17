import React from "react";
import Image from "next/image";

export function Layout194() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-blue flex flex-col items-center justify-center">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <Image
              src="/artistic-frames-XeZ5I6hoji8-unsplash.jpg"
              className="w-full rounded object-cover"
              alt="Relume placeholder image"
              width={400}
              height={200}
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="mb-5 text-3xl leading-[1.2] font-bold md:mb-6 md:text-4xl lg:text-5xl">
              Tuleva pentue: Rodun nimi, odotettu syntymäaika, vanhempien tiedot ja ominaisuudet
            </h3>
            <p className="md:text-md">
              Tulevia pentusuunnitelmia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
