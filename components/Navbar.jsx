import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
export default function Navbar() {
  const navLinks = [
    "HOME",
    "FEATURES",
    "PROCESS",
    "TESTIMONIAL",
    "PRICING",
    "FAQ"
  ];

  return (
    <nav
      className="
        relative
        max-w-[1440px]
        h-[72px]
        mx-auto
      "
    >

      {/* OPSRA */}
      <div
        className="
          absolute
          top-[32px]
          left-[117px]

          w-[135px]
          h-[32px]

          flex
          items-center
          gap-3
        "
      >
        <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center text-[10px]">
          <FontAwesomeIcon icon={faCompass} />
        </div>

        <span
          className="
            w-[76px]
            h-[32px]

            flex
            items-center

            font-['Inter']
            font-medium

            text-[21.42px]
            leading-[150%]
            tracking-[0.05em]

            text-white
          "
        >
          OPSRA
        </span>
      </div>


      {/* Nav links */}
      <ul
        className="
          absolute
          top-[24px]
          left-[278px]

          w-[482px]
          h-[47px]

          px-[12px]

          flex
          items-center
          gap-[20px]
        "
      >
        {navLinks.map((item) => (
          <li
            key={item}
            className="
  whitespace-nowrap

  font-['JetBrains_Mono']
  font-medium
  text-[15px]
  leading-[150%]
  tracking-[-0.01em]
  uppercase

  text-[#819895]

  flex
  items-center
  cursor-pointer

  transition-all
  duration-200
  ease-out

  hover:text-[#C2EFFF]
  hover:-translate-y-[1px]

  active:translate-y-0
"
          >
            {item}
          </li>
        ))}
      </ul>


      {/* Button */}
      <button
  className="
    absolute
    top-[18px]
    right-[101px]

    w-[204px]
    h-[56px]

    rounded-[6px]

    border-[1px]
    border-[#2A3C3A]

    bg-[#202D2C]

    p-[6px]

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

    </nav>
  );
}