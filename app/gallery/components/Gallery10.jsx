import React from "react";
import Image from "next/image";

export function Gallery10() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 flex flex-col items-center justify-center">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-7xl">
            Galleria
          </h2>
        </div>
        <div className="gap-8 space-y-8 md:columns-3">
          <Image
            src="/barnabas-davoti-kmGjbdNcOj4-unsplash.jpg"
            alt="Relume placeholder image 1"
            className="size-full rounded object-cover"
            width={400}
            height={200}
          />
          <Image
            src="/nik-schmidt-a93UXnDjZDM-unsplash.jpg"
            alt="Relume placeholder image 2"
            className="size-full rounded object-cover"
            width={400}
            height={200}
          />
          <Image
            src="/stephen-andrews-lEe3-hTg4Vg-unsplash.jpg"
            alt="Relume placeholder image 3"
            className="size-full rounded object-cover"
            width={800}
            height={600}
          />
          <Image
            src="/richard-burlton-HTpmedSyZag-unsplash.jpg"
            alt="Relume placeholder image 4"
            className="size-full rounded object-cover"
            width={800}
            height={600}
          />
          <Image
            src="/vander-films-hPbhbSD2Xxc-unsplash.jpg"
            alt="Relume placeholder image 5"
            className="size-full rounded object-cover"
            width={800}
            height={600}
          />
          <Image
            src="/jackie-best-INgHIkaxpeo-unsplash.jpg"
            alt="Relume placeholder image 6"
            className="size-full rounded object-cover"
            width={800}
            height={600}
          />
          <Image
            src="/alice-oneill-9C8e9uFo7r8-unsplash.jpg"
            alt="Relume placeholder image 7"
            className="size-full rounded object-cover"
            width={800}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
