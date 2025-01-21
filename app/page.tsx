"use client";
import { AuroraBackgroundComponent } from "@/components/aurora-background";
import Image from "next/image";
import { motion } from "framer-motion";
import FloatingDock from "@/components/floating";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconFolder,
  IconPhone,
  IconNewSection,
  IconUser,
  IconTerminal2,
  IconBrandLinkedin,
} from "@tabler/icons-react";
// import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  const mobileNavLinks = [
    {
      title: 'Home',
      icon: (
        <IconHome className="text-[20px] text-neutral-500 dark:text-neutral-300" />
      ),
      linkTo: '#'
    },
    {
      title: 'About Me',
      icon: (
        <IconUser className="text-[20px] text-neutral-500 dark:text-neutral-300" />
      ),
      linkTo: '#'
    },
    {
      title: 'My Projects',
      icon: (
        <IconFolder className="text-[20px] text-neutral-500 dark:text-neutral-300" />
      ),
      linkTo: '#'
    },
    {
      title: 'Contact Me',
      icon: (
        <IconPhone className="text-[20px] text-neutral-500 dark:text-neutral-300" />
      ),
      linkTo: '#'
    },
  ]
  const desktopNavLinks = [
    {
      title: 'About Me',
      linkTo: '#'
    },
    {
      title: 'My Projects',
      linkTo: '#'
    },
    {
      title: 'Contact Me',
      linkTo: '#'
    },
  ]
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  if (!isLoaded) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <Navbar desktop={desktopNavLinks} mobile={mobileNavLinks} />
      <AuroraBackgroundComponent />
      <motion.div
        initial={{ opacity: 0.0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex-col gap-4 px-4 flex items-center justify-center absolute bottom-20 w-full max-md:hidden"
      >
        <FloatingDock items={links} />
      </motion.div>
    </div>
  );
}
