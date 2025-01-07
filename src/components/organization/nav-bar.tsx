import Image from "next/image";
import Link from "next/link";
import Switch from "../atoms/switch";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-3 bg-white  ">
      <section>
        <Image
          src="/images/logo.png"
          alt="Picture of the author"
          width={100}
          height={100}
        />
      </section>

      <section className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div>
          <Switch />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;

const navLinks = [
  {
    name: "Home",
    href: "#",
  },

  {
    name: "About Us",
    href: "#",
  },
  {
    name: "Contact Us",
    href: "#",
  },
];
