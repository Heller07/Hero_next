import Navbar from "./Navbar";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#151E1D] flex justify-center">
      <div className="relative w-full max-w-[1440px] h-[857px]">

        <Navbar />

        {/* top divider */}
        <div
  className="
    absolute
    top-[92px]

    left-1/2
    -translate-x-1/2

    w-screen
    h-px
    border-t
    border-t-[#2A3C3A]

    shadow-[0_1px_0_#000000]

    z-40
  "
/>

        {/* left + right panels */}
        <div
          className="
            absolute
            top-[92px]
            left-[75px]
            flex
          "
        >
          <div className="w-[644px] h-[703px]">
  <HeroLeft />
</div>

<div className="w-[644px] h-[703px]">
  <HeroRight />
</div>
        </div>

        {/* bottom divider where BOTH panels end */}
        <div className="absolute top-[733px] left-1/2
    -translate-x-1/2

    w-screen
    h-px
    border-t
    border-t-[#2A3C3A]

    shadow-[0_1px_0_#000000]

    z-40" />

      </div>
    </section>
  );
}