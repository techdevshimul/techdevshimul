import classes from "./social-link.module.css";

export default function SocialLink({ link }: any) {
  return (
    <a href={link.link} className={classes.link}>
      <img src={link.icon} />
      <p>{link.title}</p>
    </a>
  );
}
