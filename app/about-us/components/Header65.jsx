import React from "react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Header65() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28 min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
      <div className="relative z-10 container max-w-lg text-center">
        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
          Koirien hyvinvointi ensisijalla
        </h1>
        <p className="text-text-alternative md:text-md">
          Me olemme intohimoisia koirien hyvinvoinnista ja tarjoamme parasta
          mahdollista hoitoa kaikille koirille.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <Button title="Ota yhteyttä" href="/contact"><Link href="/contact">Ota yhteyttä</Link></Button>
          <Button title="Tutustu rotuun" variant="secondary-alt" href="/puppy-plans"><Link href="/puppy-plans">Tutustu rotuun</Link></Button>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          priority
          src="/cristian-castillo-73pyV0JJOmE-unsplash.jpg"
          className="size-full object-cover h-full"
          alt="Relume placeholder image"
          width={2000}
          height={1000}
        />
      </div>
    </section>
  );
}
