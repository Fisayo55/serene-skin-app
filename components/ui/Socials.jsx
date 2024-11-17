import Link from "next/link";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Socials = ({ containerStyles }) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href="/" />
        <FaFacebook />
      </li>
      <li>
        <Link href="/" />
        <FaTwitter />
      </li>
      <li>
        <Link href="/" />
        <FaInstagram />
      </li>
    </ul>
  );
};

export default Socials;
