"use client";

import Image from "next/image";
import styled from "styled-components";
import icon from "@/assets/track-my-cents-icon.svg";
import logo01 from "@/assets/logos/track-my-cents-logo-01.svg";
import logo02 from "@/assets/logos/track-my-cents-logo-02.svg";
import logo03 from "@/assets/logos/track-my-cents-logo-03.svg";
import logo04 from "@/assets/logos/track-my-cents-logo-04.svg";
import logo05 from "@/assets/logos/track-my-cents-logo-05.svg";

type SvgAsset = string | { src: string };

const logoDesigns = [
  {
    name: "Classic lockup",
    asset: logo01,
    tone: "Straight finance mark with a strong T stem.",
  },
  {
    name: "Round stamp",
    asset: logo02,
    tone: "Compact mark for app headers and account views.",
  },
  {
    name: "Ledger stripe",
    asset: logo03,
    tone: "Horizontal option with a subtle transaction-line cue.",
  },
  {
    name: "Shield tab",
    asset: logo04,
    tone: "Structured monogram with a protected-budget feel.",
  },
  {
    name: "Stacked badge",
    asset: logo05,
    tone: "Centered layout for splash screens and social cards.",
  },
];

const assetSrc = (asset: SvgAsset) =>
  typeof asset === "string" ? asset : asset.src;

const Shell = styled.section`
  min-height: 100vh;
  background:
    linear-gradient(180deg, #ffffff 0%, #f7f9f8 54%, #eef6f1 100%);
`;

const Hero = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 32px;
  align-items: end;
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  padding: 56px 0 30px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding-top: 36px;
  }
`;

const Eyebrow = styled.p`
  margin: 0 0 12px;
  color: #667085;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
`;

const Title = styled.h1`
  max-width: 780px;
  margin: 0;
  color: #111111;
  font-size: clamp(2.6rem, 8vw, 5.8rem);
  font-weight: 900;
  line-height: 0.94;
`;

const Gold = styled.span`
  color: #d4a017;
`;

const Intro = styled.p`
  max-width: 620px;
  margin: 20px 0 0;
  color: #4d5561;
  font-size: 1.08rem;
  line-height: 1.7;
`;

const IconPlate = styled.div`
  display: grid;
  width: clamp(124px, 18vw, 188px);
  aspect-ratio: 1;
  place-items: center;
  border: 1px solid #d8dde3;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 18px 42px rgba(17, 24, 39, 0.08);

  img {
    width: 70%;
    height: auto;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  padding: 18px 0 60px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const LogoCard = styled.article`
  display: grid;
  grid-template-rows: minmax(168px, 1fr) auto;
  min-height: 312px;
  overflow: hidden;
  border: 1px solid #d8dde3;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 14px 34px rgba(17, 24, 39, 0.06);
`;

const Preview = styled.div`
  display: grid;
  min-height: 188px;
  place-items: center;
  padding: 24px;
  background:
    linear-gradient(90deg, rgba(17, 17, 17, 0.035) 1px, transparent 1px),
    linear-gradient(0deg, rgba(17, 17, 17, 0.035) 1px, transparent 1px),
    #ffffff;
  background-size: 18px 18px;

  img {
    width: min(100%, 250px);
    max-height: 142px;
    object-fit: contain;
  }
`;

const Caption = styled.div`
  padding: 18px;
  border-top: 1px solid #e5e8ec;
`;

const CardTitle = styled.h2`
  margin: 0;
  color: #111111;
  font-size: 1rem;
  font-weight: 800;
`;

const CardCopy = styled.p`
  margin: 8px 0 0;
  color: #5f6670;
  font-size: 0.92rem;
  line-height: 1.5;
`;

export default function LogoShowcase() {
  return (
    <Shell>
      <Hero>
        <div>
          <Eyebrow>Five SVG directions</Eyebrow>
          <Title>
            TRACK MY <Gold>CENTS</Gold>
          </Title>
          <Intro>
            Black T forms, gold dollar marks, and white backgrounds across
            compact and full wordmark options.
          </Intro>
        </div>
        <IconPlate aria-label="Track My Cents icon">
          <Image
            src={assetSrc(icon)}
            alt=""
            width={140}
            height={140}
            priority
            unoptimized
          />
        </IconPlate>
      </Hero>

      <Grid>
        {logoDesigns.map((design) => (
          <LogoCard key={design.name}>
            <Preview>
              <Image
                src={assetSrc(design.asset)}
                alt={`${design.name} logo`}
                width={250}
                height={86}
                unoptimized
              />
            </Preview>
            <Caption>
              <CardTitle>{design.name}</CardTitle>
              <CardCopy>{design.tone}</CardCopy>
            </Caption>
          </LogoCard>
        ))}
      </Grid>
    </Shell>
  );
}
