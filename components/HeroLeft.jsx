export default function HeroLeft() {
  return (
    <div className="w-full h-full relative overflow-hidden">

      {/* Background texture image */}
      <img
        src="/image1.png"
        alt=""
        className="
          absolute
          top-0
          left-0

          w-full
          h-[641px]

          object-cover
          object-right-top

          opacity-[0.2]

          pointer-events-none
          select-none
        "
      />


      {/* Foreground content */}
      <div className="relative z-10">

        {/* Heading block */}
        <div
          className="
            absolute
            top-[69px]
            left-[62px]

            w-[471px]
            h-[230px]

            flex
            flex-col
            gap-[8px]
          "
        >

          {/* Tags row */}
          <div
            className="
              w-[267px]
              h-[30px]

              rounded-[2px]
              border-[0.6px]
              border-[#2A3C3A]
              bg-[#202D2C]

              pt-[2px]
              pr-[12px]
              pb-[2px]
              pl-[2px]

              flex
              items-center
              gap-[12px]
            "
          >
            <span
              className="
                w-[145px]
                h-[26px]

                rounded-[2px]
                bg-[#41FFF3]

                pt-[3px]
                pr-[6px]
                pb-[4px]
                pl-[6px]

                flex
                items-center
                justify-center

                font-['JetBrains_Mono']
                font-medium
                text-[14px]
                uppercase
                tracking-[-0.01em]

                text-black

                drop-shadow-[0_16px_16px_rgba(4,70,123,0.12)]
              "
            >
              AI PRODUCTIVITY
            </span>

            <span
              className="
                w-[96px]
                h-[24px]

                flex
                items-center

                font-['Inter']
                font-medium

                text-[16px]
                leading-[150%]
                tracking-[-0.01em]

                text-[#BCC8C7]
                whitespace-nowrap
              "
            >
              Join our team
            </span>
          </div>


          {/* Heading */}
          <h1
            className="
              w-[471px]
              h-[192px]

              font-['Pretendard']
              font-normal

              text-[56px]
              leading-[115%]
              tracking-[-0.05em]

              text-white
            "
          >
            Autopilot your team’s
            <br />

            <span className="text-[#20F0F5]">
              Intelligent workflows
            </span>

            <br />

            with real-time AI.
          </h1>

        </div>

        </div>

        {/* Bottom CTA Button */}
  <button
  className="
    absolute

    left-[62px]
    bottom-[118px]

    w-[204px]
    h-[56px]

    rounded-[6px]

    border
    border-[rgba(255,255,255,0.10)]

    bg-[rgba(0,229,216,0.05)]

    p-[6px]

    z-30

    flex
    items-center
    justify-center

    transition-all
    duration-200
    ease-out

    hover:scale-[1.015]
    hover:shadow-[0_0_12px_rgba(65,255,243,0.08)]

    active:scale-[0.985]
  "
>
  <span
          className="
            w-full
            h-full

            bg-white
            rounded-[2px]

            flex
            items-center
            justify-center

            font-['JetBrains_Mono']
            font-medium
            text-[16px]
            leading-[125%]
            tracking-[-0.01em]
            uppercase

            text-black
          "
        >
    GET STARTED FREE
  </span>
</button>


    </div>
  );
}