import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import Image from "next/image";

export function Contact14() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-blue flex flex-col items-center justify-center">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Yhteystiedot
          </h2>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4">
                <BiEnvelope className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Sähköposti
              </h3>
              <p className="mb-2">Lorem ipsum dolor sit amet.</p>
                hello@relume.io
  
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiPhone className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Puhelin
              </h3>
              <p className="mb-2">Lorem ipsum dolor sit amet.</p>
                +1 (555) 000-0000
  
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiMap className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Toimisto
              </h3>
              <p className="mb-2">123 Esimerkkikatu, Sydney NSW 2000 AU</p>
            </div>
          </div>
            <Image
              src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
              alt="Relume placeholder map image"
              className="size-full h-[400px] object-cover md:h-[516px]"
              width={800}
              height={600}
            />
        </div>
      </div>
    </section>
  );
}
