export default function HeroRight() {
  return (
    <div className="w-full h-full relative overflow-hidden">

      {/* Mountain image */}
      <div className="absolute inset-0">
        <img
          src="/image.png"
          alt=""
          className="
            absolute
            top-0
            left-0
            w-full
            h-[641px]
            object-cover
            opacity-cover
            pointer-events-none
            select-none
          "
        />
      </div>


      {/* Top pills */}
      <div className="absolute top-[20px] left-[24px] z-20 flex gap-3">

        <span className="
  bg-[#7E9290]
  text-white
  text-[14px]
  px-4
  py-2
  font-['JetBrains_Mono']
  uppercase

  transition-all
  duration-200
  ease-out

  hover:bg-[#91A3A1]
  hover:-translate-y-[1px]
">
          AI WORKFLOWS
        </span>

        <span className="
  bg-[#7E9290]
  text-white
  text-[14px]
  px-4
  py-2
  font-['JetBrains_Mono']
  uppercase

  transition-all
  duration-200
  ease-out

  hover:bg-[#91A3A1]
  hover:-translate-y-[1px]
">
          SMART INSIGHTS
        </span>

      </div>


      {/* Card */}
      <div
        className="
          absolute
          left-[26px]
          right-[30px]
          bottom-[88px]

          h-[215px]

          rounded-[1px]

          bg-[rgba(0,0,0,0.40)]
          backdrop-blur-[115.6px]

          z-20
        "
      >

        {/* Inner content */}
        <div
          className="
            absolute
            top-[26px]
            right-[26px]
            bottom-[26px]
            left-[26px]

            relative
          "
        >

          {/* Heading */}
          <h3
            className="
              text-white
              text-[22px]
              font-medium
              mb-[28px]
            "
          >
            Hey there
          </h3>


          {/* Avatar aligned to same right edge as button */}
          <div
            className="
  absolute
  top-0
  right-[56px]

  w-[32px]
  h-[32px]

  rounded-full
  overflow-hidden

  bg-[#C2EFFF]

  transition-transform
  duration-300
  ease-out

  hover:scale-110
"
          >
            <img
              src="/avatar.png"
              alt="avatar"
              className="
                w-full
                h-full
                object-cover
              "
            />
          </div>


          {/* Body text */}
          <p
            className="
              max-w-[390px]
              text-[#C8D0CF]
              text-[16px]
              leading-[1.8]
            "
          >
            Thank you for building with us, for your trust in
            automation, and for pushing teams to work smarter
            every day. We don’t see this shift as a feature update,
            it’s a new way of working powered by intelligence...
          </p>


          {/* Read More */}
          <button
            className="
  absolute

  right-[56px]
  bottom-[20px]

  w-[110px]
  h-[36px]

  rounded-[4px]

  border
  border-[rgba(255,255,255,0.10)]

  bg-[rgba(0,229,216,0.05)]

  backdrop-blur-[44.5px]

  box-border

  flex
  items-center
  justify-center

  transition-all
  duration-200
  ease-out

  hover:scale-[1.03]
  hover:bg-[rgba(0,229,216,0.08)]
  hover:shadow-[0_0_10px_rgba(0,229,216,0.10)]

  active:scale-[0.98]
"
          >
            <span
              className="
                font-['JetBrains_Mono']
                font-medium
                text-[15px]
                leading-[150%]
                tracking-[-0.01em]
                uppercase
                text-white
              "
            >
              READ MORE
            </span>
          </button>

        </div>

      </div>

    </div>
  );
}