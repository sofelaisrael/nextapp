import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Logo from "@/public/logo.png";
import Image from "next/image";

const Navbar = ({
  desktop,
  mobile,
}: {
  desktop: { title: string; linkTo: string }[];
  mobile: { title: string; icon: React.ReactNode; linkTo: string }[];
}) => {
  return (
    <>
      <div className="w-full h-20 z-[10000] fixed top-0 right-0 p-5 flex justify-between items-center">
        <Image src={Logo} alt="Company Logo" width={50} />

        <div className="socials hidden max-md:block">
          <ul className="flex items-center justify-center gap-5">
            <li>
              <a href="https://github.com" className="nav_link">
                <IconBrandGithub />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" className="nav_link">
                <IconBrandLinkedin />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="nav_link">
                <IconBrandX />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <DesktopNavbar items={desktop} />
      <MobileNavbar items={mobile} />
    </>
  );
};

const DesktopNavbar = ({
  items,
}: {
  items: { title: string; linkTo: string }[];
}) => {
  return (
    <div className="vertical-nav max-md:hidden syne fixed left-5 top-0 w-[60px] h-full bg-[transparent] flex flex-col items-center z-[1000]">
      <ul className="list-none m-0 p-0 flex flex-col h-[100%] justify-evenly">
        {items.map((item, idx) => (
          <li key={idx} className="nav-list">
            <a className="nav-links" href={item.linkTo}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const MobileNavbar = ({
  items,
}: {
  items: { title: string; icon: React.ReactNode; linkTo: string }[];
}) => {
  return (
    <div className="mobile-nav md:hidden">
      <ul className="border-t border-white">
        {items.map((item, idx) => (
          <li key={idx} className="nav_item">
            <a href={item.linkTo} className="nav_link">
              {item.icon}
              <span className="nav_name">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
