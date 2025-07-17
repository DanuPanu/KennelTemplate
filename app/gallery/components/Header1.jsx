import React from "react";
import Image from "next/image";

export function Header1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-main-beige flex flex-col items-center justify-center">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Tutustu koiriimme kuvien kautta
            </h1>
            <p className="md:text-md">
              Kuvissa meidän omia koiria sekä kasvatteja
            </p>
          </div>
          <div>
            <Image
              priority
              src="/barnabas-davoti-k3bukmaX2GE-unsplash.jpg"
              className="w-full rounded object-cover"
              alt="Relume placeholder image"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
