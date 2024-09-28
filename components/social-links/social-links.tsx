// import Link from "next/link";
import SocialLink from "./social-link";
import classes from "./social-links.module.css";

const social_links = [
  {
    id: 0,
    title: "Facebook",
    link: "https://fb.com/techdevshimul",
    icon: "/assets/images/social-icons/008-facebook.png",
  },
  {
    id: 1,
    title: "LinkedIn",
    link: "https://linkedin.com/in/techdevshimul",
    icon: "/assets/images/social-icons/006-linkedin.png",
  },
  {
    id: 2,
    title: "Facebook",
    link: "https://fb.com/techdevshimul",
    icon: "/assets/images/social-icons/008-facebook.png",
  },
  {
    id: 3,
    title: "Facebook",
    link: "https://fb.com/techdevshimul",
    icon: "/assets/images/social-icons/008-facebook.png",
  },
];

export default function SocialLinks() {
  return (
    <div>
      <h2 className={classes.heading}>Connect With Me : </h2>
      <div className={classes.socialLinks}>
        {social_links.map((link) => (
          <SocialLink key={link.id} link={link} />
        ))}
      </div>
    </div>
  );
}
