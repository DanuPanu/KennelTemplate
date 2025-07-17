"use client";

import React from "react";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export function Team11() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-blue flex flex-col items-center justify-center">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              Keitä me olemme
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col text-center">
            <div className="rb-5 mb-5 flex w-full items-center justify-center md:mb-6">
              <Image
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
                width={80}
                height={80}
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Anna Laakso</h5>
              <h6 className="md:text-md">Kennelin omistaja</h6>
            </div>
            <p>Olen työskennellyt koirien parissa yli 10 vuotta.</p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
              <Link href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </Link>
              <Link href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </Link>
              <Link href="#">
                <BiLogoDribbble className="size-6" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="rb-5 mb-5 flex w-full items-center justify-center md:mb-6">
              <Image
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
                width={80}
                height={80}
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Mika Virtanen
              </h5>
              <h6 className="md:text-md">Kouluttaja</h6>
            </div>
            <p>Erikoistunut pentujen sosiaalistamiseen ja koulutukseen.</p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
              <Link href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </Link>
              <Link href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </Link>
              <Link href="#">
                <BiLogoDribbble className="size-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-14 md:mt-20 lg:mt-24">
          <div className="mx-auto flex max-w-md flex-col items-center" />
        </div>
      </div>
    </section>
  );
}
