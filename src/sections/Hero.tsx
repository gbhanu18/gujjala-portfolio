import { useEffect, useRef } from "react";
import Scene3D from "../components/Scene3D";
import profileImage from "../assets/profile.jpg";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const progress = Math.min(
        scrollY / window.innerHeight,
        1
      );

      // Text animation
      if (contentRef.current) {
        contentRef.current.style.transform = `
          translateX(${progress * -80}px)
        `;

        contentRef.current.style.opacity = `${1 - progress * 0.8}`;
      }

      // Profile image animation
      if (imageRef.current) {
        imageRef.current.style.transform = `
          translateX(${progress * 100}px)
          scale(${1 - progress * 0.12})
        `;

        imageRef.current.style.opacity = `${1 - progress * 0.4}`;
      }

      // 3D object animation
      if (sceneRef.current) {
        sceneRef.current.style.transform = `
          translateY(${progress * -80}px)
          scale(${1 - progress * 0.08})
        `;

        sceneRef.current.style.opacity = `${1 - progress * 0.3}`;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#0a0a0a]
        text-white
        flex
        items-center
        px-6
        md:px-10
        lg:px-16
      "
    >

      {/* =========================
          3D BACKGROUND
      ========================== */}

      <div
        ref={sceneRef}
        className="
          absolute
          left-[-5%]
          top-1/2
          -translate-y-1/2
          w-[48vw]
          h-[65vh]
          z-0
          opacity-90
          pointer-events-none
        "
      >
        <Scene3D />
      </div>


      {/* =========================
          PROFILE IMAGE
      ========================== */}

      <div
        ref={imageRef}
        className="
          absolute
          right-[2%]
          md:right-[5%]
          lg:right-[7%]
          top-1/2
          -translate-y-1/2
          w-[38%]
          max-w-[560px]
          z-10
          pointer-events-none
        "
      >
        <img
          src={profileImage}
          alt="Gujjala Bhanuprakash"
          className="
            w-full
            h-auto
            object-contain
            object-bottom
            drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]
          "
        />
      </div>


      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div
        ref={contentRef}
        className="
          relative
          z-20
          w-full
          max-w-7xl
          mx-auto
          min-h-screen
          flex
          items-center
        "
      >
        <div className="w-full lg:w-[68%]">

          {/* Small heading */}

          <div className="flex items-center gap-5 mb-7">

            <span
              className="
                block
                w-16
                h-[1px]
                bg-gray-500
              "
            />

            <span
              className="
                font-body
                text-sm
                md:text-base
                tracking-[0.35em]
                text-gray-400
              "
            >
              AI / ML • DATA SCIENCE
            </span>

          </div>


          {/* =========================
              NAME
          ========================== */}

          <h1
            className="
              font-display
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.04em]
              text-white
              text-[15vw]
              sm:text-[13vw]
              md:text-[10vw]
              lg:text-[8vw]
              xl:text-[7.5vw]
            "
          >

            <span className="block">
              GUJJALA
            </span>

            <span className="block">
              BHANUPRAKASH
            </span>

          </h1>


          {/* =========================
              DESCRIPTION
          ========================== */}

          <p
            className="
              mt-8
              max-w-[760px]
              font-body
              text-lg
              md:text-xl
              lg:text-2xl
              leading-relaxed
              text-gray-400
            "
          >
            Computer Science graduate specializing in
            Artificial Intelligence and Machine Learning,
            building data-driven applications and modern
            web experiences.
          </p>


          {/* =========================
              BUTTONS
          ========================== */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-4
            "
          >

            {/* View Projects */}

            <a
              href="#projects"
              className="
                px-8
                py-4
                bg-white
                text-black
                rounded-full
                font-body
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                hover:bg-gray-200
              "
            >
              View Projects
            </a>


            {/* Resume Download */}

            <a
              href="/resume.pdf"
              download="Gujjala_Bhanuprakash_Resume.pdf"
              className="
                px-8
                py-4
                border
                border-gray-600
                text-white
                rounded-full
                font-body
                font-semibold
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
                hover:border-white
              "
            >
              Resume
            </a>

          </div>

        </div>
      </div>


      {/* =========================
          SCROLL INDICATOR
      ========================== */}

      <div
        className="
          absolute
          bottom-8
          right-8
          md:right-12
          z-30
          flex
          flex-col
          items-center
          gap-3
          text-gray-500
        "
      >

        <span
          className="
            text-[10px]
            tracking-[0.45em]
            uppercase
          "
        >
          Scroll
        </span>

        <span className="text-xl animate-bounce">
          ↓
        </span>

      </div>

    </section>
  );
}