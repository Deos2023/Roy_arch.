import Image from "next/image";
import Hero from "./component/Hero";
import WhatWeDo from "./component/WhatWeDo";
import Ourlatest from "./component/Ourlatest";
import BarSec from "./component/BarSec";

export default function Home() {
  return (
    <>
    <div className="bg-white " >
     <Hero/>
     <WhatWeDo/>
     {/* <Ourlatest/> */}
     <BarSec/>
    </div>
    </>
  );
}
