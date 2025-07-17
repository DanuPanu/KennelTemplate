import React from "react";
import { BiSolidStar } from "react-icons/bi";
import Image from "next/image";

export function Testimonial5() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 flex flex-col items-center justify-center">
      <div className="container">
        <div className="mb-12 w-full md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-7xl">
            Asiakaskokemuksia
          </h1>
          <p className="md:text-md">
            Meidän asiakkaamme rakastavat koirakenneliamme!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-16">
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="text-md leading-[1.4] font-bold md:text-xl">
              "Kasvattaja ollut apuna alusta loppuun saakka!"
            </blockquote>
            <div className="mt-6 flex w-full flex-col gap-3 md:mt-8 md:w-auto md:flex-row md:items-center md:gap-5">
              <div>
                <Image
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar 1"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                  width={56}
                  height={56}
                />
              </div>
              <div className="mb-4 md:mb-0">
                <p className="font-semibold">Anna Virtanen</p>
                <p>Koiranomistaja, Helsinki</p>
              </div>
            </div>
          </div>
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="text-md leading-[1.4] font-bold md:text-xl">
              "Mukava kasvattaja ja upea käytöksiset koirat."
            </blockquote>
            <div className="mt-6 flex w-full flex-col gap-3 md:mt-8 md:w-auto md:flex-row md:items-center md:gap-5">
              <div>
                <Image
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar 1"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                  width={56}
                  height={56}
                />
              </div>
              <div className="mb-4 md:mb-0">
                <p className="font-semibold">Matti Meikäläinen</p>
                <p>Kouluttaja, Espoo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
