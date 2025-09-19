import React from "react";
import Banner from "../Components/Banner/Banner";
import LegalSection from "../Components/legal_solution/LegalSection";
import Card from "../Components/Cards/Cards";

export default function Home() {
  return (

    <>
      <Banner
        title="Notary Public & Legal Solutions"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Veritatis cupiditate deserunt placeat necessitatibus a aliquam
        corrupti nisi odio aliquid, accusamus."
      />
      <Card />
      <LegalSection />
    </>
  );
}
