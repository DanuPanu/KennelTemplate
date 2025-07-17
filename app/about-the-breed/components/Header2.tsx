import React from "react";
import Image from "next/image";

type Props = {
  heading: string;
  children: React.ReactNode;
};

export type Content8Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Content9 = (props: Content8Props) => {
  const { heading, children } = {
    ...Content8Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 flex flex-col items-center justify-center text-center">
      <div className="container">
        <div className="mb-16 md:mb-[5.5rem] lg:mb-24">
          <div className="mx-auto max-w-lg flex flex-col items-center justify-center">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <div className="prose">{children}</div>
          </div>
        </div>
        <div>
          <Image priority src="/michael-starkie-gdo1m-6H22o-unsplash.jpg" width={1500} height={1000} className="w-full object-cover rounded shadow-lg" alt="Koiran kuva" />
        </div>
      </div>
    </section>
  );
};

export const Content8Defaults: Props = {
  heading: "Kultainennoutaja",
  children: (
    <React.Fragment>
      <p>
      Kultainennoutaja on lempeä, älykäs ja helposti lähestyttävä rotu, joka sopii loistavasti niin perhekoiraksi kuin harrastuksiinkin.
Se on uskollinen ystävä, joka viihtyy ihmisten seurassa, oppii nopeasti ja tuo iloa jokapäiväiseen elämään – aina häntä heiluen.
      </p>
    </React.Fragment>
  ),
};
