"use client";

import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

export function Layout24() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 flex flex-col items-center justify-center">
      <div className="container flex justify-center">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20 max-w-4xl w-full">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="rb-5 mb-5 md:mb-6">
              <Heart className="size-10" />
            </div>
            <h3 className="mb-5 text-3xl leading-[1.2] font-bold md:mb-6 md:text-4xl lg:text-5xl">
              Tervetuloa kennelimme tarinaan, jossa rakkaus koiriin on
              keskiössä.
            </h3>
            <p className="md:text-md">
              Kennelimme on perustettu rakkaudesta koiriin ja halusta tarjota
              niille paras mahdollinen koti. Tiimimme koostuu intohimoisista
              koiranomistajista, jotka jakavat arvot vastuullisuudesta ja
              huolenpidosta.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/celine-sayuri-tagami-2s6ORaJY6gI-unsplash.jpg"
              className="rounded object-cover"
              alt="Koiran kuva"
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
