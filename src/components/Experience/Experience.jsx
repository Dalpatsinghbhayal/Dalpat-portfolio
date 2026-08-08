import React from "react";
import { experiences } from "../../constants";

const companyLogos = {
  Celebal:
    "https://www.google.com/s2/favicons?domain=celebaltech.com&sz=128",

  WsCube:
    "https://www.google.com/s2/favicons?domain=wscubetech.com&sz=128",

  UpFlairs:
    "https://www.google.com/s2/favicons?domain=upflairs.com&sz=128",

  GrasTech:
    "https://www.google.com/s2/favicons?domain=grastech.in&sz=128",
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-[5vw] md:px-[7vw] lg:px-[10vw]"
    >
      {/* ================= SECTION HEADING ================= */}

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          EXPERIENCE
        </h2>

        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3"></div>

        <p className="text-gray-400 mt-4 text-sm md:text-base max-w-2xl mx-auto">
          A collection of my work experience and the roles I have taken in
          various organizations.
        </p>
      </div>

      {/* ================= TIMELINE ================= */}

      <div className="relative max-w-6xl mx-auto">

        {/* Vertical Timeline Line */}

        <div
          className="
            absolute
            left-4
            md:left-1/2
            top-0
            bottom-0
            w-[2px]
            bg-purple-500/50
            md:-translate-x-1/2
          "
        ></div>

        {/* Experience Items */}

        <div className="space-y-12">

          {experiences.map((experience, index) => {

            const logo =
              companyLogos[experience.company] ||
              "https://www.google.com/s2/favicons?domain=google.com&sz=128";

            return (
              <div
                key={experience.id}
                className="relative flex items-start"
              >

                {/* ================= TIMELINE DOT ================= */}

                <div
                  className="
                    absolute
                    left-4
                    md:left-1/2
                    -translate-x-1/2
                    w-8
                    h-8
                    rounded-full
                    bg-gray-900
                    border-4
                    border-purple-500
                    z-10
                    shadow-[0_0_15px_rgba(130,69,236,0.7)]
                  "
                ></div>


                {/* ================= EXPERIENCE CARD ================= */}

                <div
                  className={`
                    w-full
                    md:w-[45%]
                    ml-12
                    md:ml-0
                    ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-10"
                        : "md:ml-auto md:pl-10"
                    }
                  `}
                >

                  <div
                    className="
                      bg-gray-900/90
                      backdrop-blur-md
                      border
                      border-gray-700
                      rounded-2xl
                      p-6
                      shadow-[0_0_20px_1px_rgba(130,69,236,0.2)]
                      hover:border-purple-500
                      hover:shadow-[0_0_30px_1px_rgba(130,69,236,0.35)]
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >

                    {/* ================= COMPANY HEADER ================= */}

                    <div className="flex items-center gap-4 mb-5">

                      {/* Company Logo */}

                      <div
                        className="
                          w-14
                          h-14
                          flex
                          items-center
                          justify-center
                          bg-white
                          rounded-xl
                          p-2
                          shrink-0
                        "
                      >
                        <img
                          src={logo}
                          alt={`${experience.company} logo`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>


                      {/* Role / Company / Date */}

                      <div className="min-w-0">

                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {experience.role}
                        </h3>

                        <p className="text-purple-400 font-semibold text-sm mt-1">
                          {experience.company}
                        </p>

                        <p className="text-gray-500 text-xs mt-1">
                          {experience.date}
                        </p>

                      </div>

                    </div>


                    {/* ================= DESCRIPTION ================= */}

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {experience.desc}
                    </p>


                    {/* ================= SKILLS ================= */}

                    <div className="mt-5">

                      <h4 className="text-white font-semibold text-sm mb-3">
                        Technologies & Skills
                      </h4>

                      <div className="flex flex-wrap gap-2">

                        {experience.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="
                              bg-[#251f38]
                              text-purple-400
                              border
                              border-purple-500/30
                              px-3
                              py-1
                              rounded-full
                              text-xs
                              font-medium
                              hover:border-purple-500
                              hover:bg-purple-500/10
                              transition
                            "
                          >
                            {skill}
                          </span>
                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Experience;