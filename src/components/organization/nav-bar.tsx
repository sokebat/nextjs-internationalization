import Image from "next/image";
import Link from "next/link";
import React from "react";
import Switch from "../switch";
import { Button } from "../atoms/Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
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
        <Switch />

        <Button>Book an Appointment</Button>
      </section>
    </nav>
  );
};

export default Navbar;

const navLinks = [
  {
    name: "Home",
    href: "/",
  },

  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];
