import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const socialContacts = {
  github: {
    name: "GitHub",
    url: "https://github.com/techdevshimul",
    Icon: FaGithub,
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://linkedin.com/in/techdevshimul",
    Icon: FaLinkedin,
  },
  whatsapp: {
    name: "WhatsApp",
    url: "https://wa.me/+8801798406411",
    Icon: FaWhatsapp,
  },
  facebook: {
    name: "Facebook",
    url: "https://facebook.com/techdevshimul",
    Icon: FaFacebook,
  },
};

export const socialLinksArr = Object.keys(socialContacts).map((key, index) => ({
  id: index + 1,
  name: socialContacts[key as keyof typeof socialContacts].name,
  url: socialContacts[key as keyof typeof socialContacts].url,
  Icon: socialContacts[key as keyof typeof socialContacts].Icon,
}));
