import React from "react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import Link from "next/link"

export function Header5() {
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="relative z-10 container">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
              Tervetuloa rakastavaan kenneliimme!
            </h1>
            <p className="text-text-alternative md:text-md">
              Meidän koirakennelimme tarjoaa turvallisen ja rakastavan
              ympäristön koirillesi. Liity perheeseemme ja löydä uusi ystävä!
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Ota yhteyttä"><Link href="/contact">Ota yhteyttä</Link></Button>
              <Button title="Tutustu rotuun" variant="secondary-alt">
                <Link href="/about-the-breed">Tutustu rotuun</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          priority
          src="/angel-luciano-YI_iWr_12kE-unsplash.jpg"
          className="size-full object-cover"
          alt="Relume placeholder image"
          width={2000}
          height={1000}
        />
      </div>
    </section>
  );
}
