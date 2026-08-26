import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "917023180821";

  const message =
    "Hello Dalpat, I visited your portfolio and would like to discuss a potential opportunity related to Frontend / Java Full Stack Development.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-5
        right-5
        z-50
        flex
        items-center
        gap-2
        rounded-full
        bg-green-500
        px-5
        py-3
        text-white
        font-semibold
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-green-600
      "
    >
      <FaWhatsapp className="text-2xl" />

      <span>Chat with me</span>
    </a>
  );
}
