import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Socials = ({ containerStyles }) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
         <Link href="/">
            <FontAwesomeIcon size="xl" icon={faInstagram} />
         </Link>
      </li>
      <li>
         <Link href="/">
            <FontAwesomeIcon size="xl" icon={faFacebook} />
         </Link>
      </li>
      <li>
         <Link href="/">
            <FontAwesomeIcon size="xl" icon={faXTwitter} />
         </Link>
      </li>
      <li>
         <Link href="/">
            <FontAwesomeIcon size="xl" icon={faYoutube} />
         </Link>
      </li>
    </ul>
  );
};

export default Socials;