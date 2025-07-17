import Image from "next/image";

type ImageProps = {
    src: string;
    alt: string;
};

type SectionProps = {
    image: ImageProps;
    heading: string;
    description: string;
};

type Props = {
    heading: string;
    sections: SectionProps[];
};

export type Layout240Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout240 = (props: Layout240Props) => {
    const { sections, heading } = { ...props, ...Layout240Defaults };
    return (
        <section id="relume" className="px-[5%] pb-16 md:pb-24 lg:pb-28">
            <div className="container">
                <div className="rb-12 mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
                    <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">{heading}</h2>
                </div>
                <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                    {sections.map((section, index) => (
                        <div key={index} className="flex w-full flex-col items-center text-center">
                            <div className="rb-6 mb-6 md:mb-8">
                                <Image width={800} height={600} src={section.image.src} alt={section.image.alt} />
                            </div>
                            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{section.heading}</h3>
                            <p>{section.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Layout240Defaults: Props = {
    heading: "Kultaisestanoutajasta on moneen",
    sections: [
        {
            image: {
                src: "/linoleum-creative-collective-zHXVW66MLKs-unsplash.jpg",
                alt: "Relume placeholder image 1",
            },
            heading: "Millaiselle ihmiselle rotu sopii",
            description:
                "Kultainennoutaja on monipuolinen rotu, joka soveltuu monenlaiseen toimintaan. Yleisimpiä harrastusmuotoja ovat koiranäyttelyt, rodunomaiset kokeet ja tottelevaisuuskokeet. Se sopii myös hyvin pienriistan metsästäjälle, liikunnallisen ihmisen lenkkikaveriksi ja koko perheen lemmikiksi. Suuren kokonsa takia se ei kuitenkaan sovellu lapsen ulkoilutettavaksi yksin ilman aikuisen seuraa."
        },
        {
            image: {
                src: "/faber-leonardo-Fl5EtN4Z-i8-unsplash.jpg",
                alt: "Relume placeholder image 2",
            },
            heading: "Käyttötarkoitus",
            description:
                "Kultainennoutaja on alun perin jalostettu metsästyskoiraksi eli ammutun pienriistan noutajaksi.",
        },
        {
            image: {
                src: "/dagmar-klauzova-axxqyBP_MxY-unsplash.jpg",
                alt: "Relume placeholder image 3",
            },
            heading: "Luonne ja käyttäytyminen",
            description:
                "Kultainennoutaja on hyväntahtoinen, ystävällinen, älykäs, miellyttämisen- ja toiminnanhaluinen koira. Kultaisen rodunomaiset ominaisuudet tekevät siitä hyvän harrastuskoiran moniin eri lajeihin. Kultainen ei ole pelkkä seurakoira, vaan se kaipaa paljon liikuntaa sekä ohjattua toimintaa."
        },
        {
            image: {
                src: "/h-co-M-uPm_kpu90-unsplash.jpg",
                alt: "Relume placeholder image 3",
            },
            heading: "Turkinhoito",
            description:
                "Vaikka kultainennoutaja ei kuulu kauttaaltaan trimmattaviin rotuihin, turkki siistitään näyttelyyn mentäessä kaulasta, korvista, hännästä ja tassuista. Kultaisennoutajan karvapeite koostuu peitinkarvasta ja sen alla olevasta runsaasta pohjavillasta. Erityisesti karvanlähdön aikaan turkki vaatii säännöllistä harjausta."
        },
        {
            image: {
                src: "/ross-artley-ctJhmemKX1A-unsplash.jpg",
                alt: "Relume placeholder image 3",
            },
            heading: "Yleisimmät asiat terveydestä",
            description:
                "Kultainennoutaja on maailmanlaajuisesti hyvin yleinen rotu ja rodussa esiintyy moninainen kirjo erilaisia sairauksia. Kuitenkin todellista tietoa siitä, mitkä ovat rodun aitoja tyyppisairauksia tai ongelmia on vaikea saada selville. Luuston kasvuhäiriöt, kasvainsairaudet, allergiat ja iktyoosi ovat varsin tavallisia rodussa. Suurin osa kultaisistanoutajista elää kuitenkin perusterveen koiran elämää."
        },
        {
            image: {
                src: "/james-lewis-AyAdrhCfOZM-unsplash.jpg",
                alt: "Relume placeholder image 3",
            },
            heading: "Muuta",
            description:
                "Kultaiset ovat monessa maassa – myös Suomessa - jakautuneet kahteen eri linjaan eli käyttölinjaisiin (metsästyslinjainen) ja näyttelylinjaisiin. Näiden kahden linjan väliin mahtuu suuri joukko koiria, joista on sekä käyttöön että näyttöön. Monet kasvattajat ovat kuitenkin halunneet panostaa yhä selkeämmin jompaan kumpaan. Lisätietoja rodusta saat rotuyhdistyksen sivuilta sekä kasvattajilta."
        },
    ],
};
