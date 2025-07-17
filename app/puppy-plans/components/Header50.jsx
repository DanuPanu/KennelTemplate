import { Button } from "../../../components/ui/button";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Header50() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28 min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
      <div className="relative z-10 container">
        <div className="w-full max-w-lg">
          <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
            Tulevat pentueet
          </h1>
          <p className="text-text-alternative md:text-md">
            Tutustu tuleviin pentueisiimme ja jalostussuunnitelmiimme, jotka
            tuovat iloa perheellesi.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Lisätietoja" href="/puppy-plans"><Link href="/contact">Ota yhteyttä</Link></Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src="/michel-la-rue-tney_fc5fOk-unsplash.jpg"
          className="size-full object-cover"
          alt="Relume placeholder image"
          width={2000}
          height={1000}
        />
      </div>
    </section>
  );
}
