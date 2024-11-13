import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/treatment",
    name: "Treatment",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <div className="container mx-auto flex gap-8">
        {links.map((link, index) => {
          return (
            <Link
              className={`${
                pathname === link.href && "border-b-2 border-accent"
              } upperCase`}
              key={index}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
