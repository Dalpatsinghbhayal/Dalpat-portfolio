import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);

    try {
      const result = await emailjs.sendForm(
  "service_hom1gnw",
  "template_o1r2h4j",
  form.current,
  {
    publicKey: "JWg0dADQrdWou8fhs",
  }
);

      console.log("Email sent successfully:", result);

      form.current.reset();

      toast.success("Message sent successfully! ✅", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      console.error("Status:", error?.status);
      console.error("Text:", error?.text);

      toast.error(
        error?.text || "Failed to send message. Please try again.",
        {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
        }
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-[5vw] md:px-[7vw] lg:px-[10vw]"
    >
      {/* ================= TITLE ================= */}

      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          CONTACT
        </h2>

        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3"></div>

        <p className="text-gray-400 mt-4 text-sm md:text-base max-w-2xl mx-auto">
          I’d love to hear from you. Feel free to reach out for opportunities,
          collaborations, or any questions.
        </p>
      </div>

      {/* ================= CONTACT AREA ================= */}

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* ================= LEFT CARD ================= */}

        <div
          className="
            bg-gray-900/90
            backdrop-blur-md
            border border-gray-700
            rounded-2xl
            p-8
            shadow-[0_0_25px_1px_rgba(130,69,236,0.2)]
          "
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Let's Connect 🚀
          </h3>

          <p className="text-gray-400 leading-relaxed mb-8">
            I am open to internship and full-time opportunities in Full Stack
            Development, Java Development, React Development, and Software
            Engineering.
          </p>

          {/* EMAIL */}

          <a
            href="mailto:dalpatbhayal07@gmail.com"
            className="
              flex items-center gap-4
              p-4 mb-4
              rounded-xl
              bg-[#131025]
              border border-gray-700
              hover:border-purple-500
              transition-all duration-300
            "
          >
            <div
              className="
                w-10 h-10
                flex items-center justify-center
                rounded-full
                bg-purple-500/20
                text-purple-400
              "
            >
              <i className="fa-solid fa-envelope"></i>
            </div>

            <div>
              <p className="text-gray-500 text-xs">
                Email
              </p>

              <p className="text-white text-sm break-all">
                dalpatbhayal07@gmail.com
              </p>
            </div>
          </a>

          {/* GITHUB */}

          <a
            href="https://github.com/Dalpatsinghbhayal"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-4
              p-4 mb-4
              rounded-xl
              bg-[#131025]
              border border-gray-700
              hover:border-purple-500
              transition-all duration-300
            "
          >
            <div
              className="
                w-10 h-10
                flex items-center justify-center
                rounded-full
                bg-purple-500/20
                text-purple-400
              "
            >
              <i className="fa-brands fa-github"></i>
            </div>

            <div>
              <p className="text-gray-500 text-xs">
                GitHub
              </p>

              <p className="text-white text-sm">
                DalpatSinghBhayal
              </p>
            </div>
          </a>

          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/dalpat-bhayal-74617524b/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-4
              p-4
              rounded-xl
              bg-[#131025]
              border border-gray-700
              hover:border-purple-500
              transition-all duration-300
            "
          >
            <div
              className="
                w-10 h-10
                flex items-center justify-center
                rounded-full
                bg-purple-500/20
                text-purple-400
              "
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </div>

            <div>
              <p className="text-gray-500 text-xs">
                LinkedIn
              </p>

              <p className="text-white text-sm">
                Dalpat Singh
              </p>
            </div>
          </a>
        </div>

        {/* ================= FORM CARD ================= */}

        <div
          className="
            bg-gray-900/90
            backdrop-blur-md
            border border-gray-700
            rounded-2xl
            p-8
            shadow-[0_0_25px_1px_rgba(130,69,236,0.2)]
          "
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Send Me a Message
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4"
          >

            {/* EMAIL */}

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="
                w-full
                p-3
                rounded-xl
                bg-[#131025]
                text-white
                border border-gray-700
                placeholder-gray-500
                focus:outline-none
                focus:border-purple-500
                transition
              "
            />

            {/* NAME */}

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="
                w-full
                p-3
                rounded-xl
                bg-[#131025]
                text-white
                border border-gray-700
                placeholder-gray-500
                focus:outline-none
                focus:border-purple-500
                transition
              "
            />

            {/* SUBJECT */}

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="
                w-full
                p-3
                rounded-xl
                bg-[#131025]
                text-white
                border border-gray-700
                placeholder-gray-500
                focus:outline-none
                focus:border-purple-500
                transition
              "
            />

            {/* MESSAGE */}

            <textarea
              name="message"
              placeholder="Write your message..."
              rows="6"
              required
              className="
                w-full
                p-3
                rounded-xl
                bg-[#131025]
                text-white
                border border-gray-700
                placeholder-gray-500
                focus:outline-none
                focus:border-purple-500
                transition
                resize-none
              "
            ></textarea>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={isSending}
              className="
                w-full
                bg-gradient-to-r
                from-purple-600
                to-pink-500
                py-3
                text-white
                font-semibold
                rounded-xl
                hover:scale-[1.02]
                transition-all duration-300
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </div>

      {/* ================= TOAST ================= */}

      <ToastContainer />
    </section>
  );
};

export default Contact;