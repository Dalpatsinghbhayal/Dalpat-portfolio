import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";

import profileImage from "../../assets/WhatsApp Image 2025-05-31 at 11.34.54_0957b30a.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-[5vw] md:px-[7vw] lg:px-[10vw] pt-24"
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* ================= LEFT SIDE ================= */}

        <div className="md:w-1/2">

          {/* Greeting */}
          <p className="text-xl md:text-2xl text-gray-300 font-semibold mb-2">
            Hi, I am
          </p>


          {/* Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5">
            Dalpat Singh
          </h1>


          {/* Typing Effect */}
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-7">
            I am a{" "}
            <span className="text-purple-500">
              <ReactTypingEffect
                text={[
                  "Full Stack Developer",
                  "Java Developer",
                  "React Developer",
                  "Spring Boot Developer",
                  "Software Developer",
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={1800}
                cursorRenderer={(cursor) => (
                  <span className="text-purple-500">
                    {cursor}
                  </span>
                )}
              />
            </span>
          </div>


          {/* About Me */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            Enthusiastic and detail-oriented Full Stack Developer with
            hands-on experience building responsive web applications and
            backend systems. Skilled in Java, Spring Boot, Hibernate, JPA,
            REST APIs, React, JavaScript, and MySQL, with additional
            experience in Python and machine learning. Passionate about
            solving real-world problems, writing clean code, and building
            scalable applications.
          </p>


          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            {/* Resume */}
            <a
              href="https://drive.google.com/file/d/1k1KsYUJvJdZZ81aoDnW_ytc90hrpuUPT/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background:
                  "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow:
                  "0 0 5px #8245ec, 0 0 20px rgba(130,69,236,0.5)",
              }}
            >
              DOWNLOAD RESUME
            </a>


            {/* Projects */}
            <a
              href="#projects"
              className="inline-block text-purple-400 border border-purple-500 py-3 px-8 rounded-full text-lg font-bold transition duration-300 hover:bg-purple-500 hover:text-white hover:scale-105"
            >
              VIEW PROJECTS
            </a>

          </div>
        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="md:w-1/2 flex justify-center md:justify-end">

          <Tilt
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >

            <img
              src={profileImage}
              alt="Dalpat Singh"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />

          </Tilt>

        </div>

      </div>
    </section>
  );
};

export default About;