import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer7() {
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20 flex flex-col items-center justify-center">
      <div className="container">
        <div className="flex flex-col items-center pb-12 md:pb-18 lg:pb-20">
          <Link href="/" className="mb-8">
            <Image
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Logo image"
              className="inline-block"
              width={100}
              height={100}
            />
          </Link>
          <ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start">
            <li className="font-semibold">
              <Link href="/">Etusivu</Link>
            </li>
            <li className="font-semibold">
              <Link href="/about-us">Meistä</Link>
            </li>
            <li className="font-semibold">
              <Link href="/gallery">Galleria</Link>
            </li>
            <li className="font-semibold">
              <Link href="/puppy-plans">Pentu Suunnitelmat</Link>
            </li>
            <li className="font-semibold">
              <Link href="/contact">Yhteystiedot</Link>
            </li>
            <li className="font-semibold">
              <Link href="/about-the-breed">Rodusta</Link>
            </li>
          </ul>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-center justify-between pt-6 pb-4 text-center text-sm md:flex-row md:pt-8 md:pb-0">
          <p className="mt-8 md:mt-0">© 2024 Relume. All rights reserved.</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline decoration-black underline-offset-1">
              <Link href="#">Tietosuojakäytäntö</Link>
            </li>
            <li className="underline decoration-black underline-offset-1">
              <Link href="#">Palveluehdot</Link>
            </li>
            <li className="underline decoration-black underline-offset-1">
              <Link href="#">Evästeasetukset</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
