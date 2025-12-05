import React, { lazy, Suspense } from "react";
// import Hero from "../components/Hero/Hero";
// import Portfolio from "../components/Portfolio";
// import PrintingServices from "../components/PrintingServices";

const Hero = lazy(() => import("../components/Hero/Hero"));
const Portfolio = lazy(() => import("../components/Portfolio"));
const PrintingServices = lazy(() => import("../components/PrintingServices"));

import Loader from "../components/Loader";

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <PrintingServices />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Portfolio />
      </Suspense>
    </>
  );
};

export default Home;
