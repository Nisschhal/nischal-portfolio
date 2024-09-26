import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaFacebook />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

// List of social icons with their link:href
const Social = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socials.map((social, index) => (
        <Link href={social.path} key={index} className={iconStyle}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
