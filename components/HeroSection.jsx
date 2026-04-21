import Navbar from "./Navbar";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#151E1D] flex justify-center">
      <div className="relative w-full max-w-[1440px] h-[857px]">

        <Navbar />

        {/* top divider */}
        <div className="absolute top-[92px] left-0 w-full h-px bg-[#2A3C3A]" />

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
        <div className="absolute top-[733px] left-0 w-full h-px bg-[#2A3C3A]" />

      </div>
    </section>
  );
}