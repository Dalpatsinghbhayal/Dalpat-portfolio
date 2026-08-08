import React from "react";
import { education } from "../../constants";

const educationLogos = {
  "JIET,JODHPUR":
    "https://www.google.com/s2/favicons?domain=jietjodhpur.ac.in&sz=128",

  "GSSS,PALI":
    "https://www.google.com/s2/favicons?domain=rajeduboard.rajasthan.gov.in&sz=128",
};

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-[5vw] md:px-[7vw] lg:px-[10vw]"
    >
      {/* ================= SECTION HEADING ================= */}

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          EDUCATION
        </h2>

        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3"></div>

        <p className="text-gray-400 mt-4 text-sm md:text-base max-w-2xl mx-auto">
          My education has been a journey of learning and development.
          Here are the details of my academic background.
        </p>
      </div>

      {/* ================= TIMELINE ================= */}

      <div className="relative max-w-6xl mx-auto">

        {/* Vertical Line */}

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

        {/* Education Items */}

        <div className="space-y-12">

          {education.map((edu, index) => {
            const logo =
              educationLogos[edu.school] ||
              "https://www.google.com/s2/favicons?domain=google.com&sz=128";

            return (
              <div
                key={edu.id}
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


                {/* ================= EDUCATION CARD ================= */}

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

                    {/* ================= EDUCATION HEADER ================= */}

                    <div className="flex items-center gap-4 mb-5">

                      {/* Institution Logo */}

                      <div
                        className="
                          w-16
                          h-16
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
                          alt={`${edu.school} logo`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>


                      {/* Degree / School / Date */}

                      <div className="min-w-0">

                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {edu.degree || "Education"}
                        </h3>

                        <p className="text-purple-400 font-semibold text-sm mt-1">
                          {edu.school}
                        </p>

                        <p className="text-gray-500 text-xs mt-1">
                          {edu.date}
                        </p>

                      </div>

                    </div>


                    {/* ================= GRADE ================= */}

                    <div className="mb-4">

                      <span
                        className="
                          inline-block
                          bg-[#251f38]
                          text-purple-400
                          border
                          border-purple-500/30
                          px-4
                          py-2
                          rounded-full
                          text-sm
                          font-semibold
                        "
                      >
                        Grade: {edu.grade}
                      </span>

                    </div>


                    {/* ================= DESCRIPTION ================= */}

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {edu.desc}
                    </p>

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

export default Education;