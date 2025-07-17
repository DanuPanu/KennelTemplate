import React from "react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Layout250() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-blue flex flex-col items-center justify-center">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <h2 className="text-3xl leading-[1.2] font-bold md:text-4xl lg:text-5xl">
              Meidän kennelin toimintamalli pennun hankinnassa on selkeä ja
              luotettava.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <Image
                src="/anthony-persegol-xAqTU0VZRyc-unsplash.jpg"
                alt="Relume placeholder image"
                className="rounded"
                width={400}
                height={200}
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Ota askel kohti uutta ystävää: prosessimme on helppo ja sujuva.
            </h3>
            <p>
              Aloitamme keskustelulla tarpeistasi ja toiveistasi tulevan pennun
              suhteen.
            </p>
            <div className="mt-6 flex gap-4 md:mt-8">
              <Button variant="link" size="link">
                <Link href="/contact">Ota yhteyttä</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <Image
                src="/enis-yavuz-KKtuRtGkDys-unsplash.jpg"
                alt="Relume placeholder image"
                className="rounded"
                width={400}
                height={200}
                />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Seuraavaksi esittelemme saatavilla olevat pennut ja niiden
              vanhemmat.
            </h3>
            <p>
              Voit tutustua pentujen taustoihin ja luonteeseen ennen
              päätöksentekoa.
            </p>
            <div className="mt-6 flex gap-4 md:mt-8">
              <Button variant="link" size="link">
                <Link href="/puppy-plans">Tutustu</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <Image
                src="/bill-stephan-9LkqymZFLrE-unsplash.jpg"
                alt="Relume placeholder image"
                className="rounded"
                width={400}
                height={200}
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Kun olet valmis, varaa pentu ja valmistaudu uuteen ystävään.
            </h3>
            <p>
              Me autamme sinua koko prosessin ajan, jotta saat parhaan
              mahdollisen kokemuksen.
            </p>
            <div className="mt-6 flex gap-4 md:mt-8">
              <Button variant="link" size="link">
                <Link href="/contact">Varaa</Link> 
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
