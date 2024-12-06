import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faWhatsapp, faVk } from "@fortawesome/free-brands-svg-icons";

const Socials = ({ containerStyles }) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
         <Link href="/">
            <FontAwesomeIcon size="xl" icon={faTelegram} />
         </Link>
      </li>
      <li>
         <Link href="/">
            <FontAwesomeIcon size="xl" icon={faWhatsapp} />
         </Link>
      </li>
      <li>
         <Link href="/">
            <FontAwesomeIcon size="xl" icon={faVk} />
         </Link>
      </li>
    </ul>
  );
};

export default Socials;