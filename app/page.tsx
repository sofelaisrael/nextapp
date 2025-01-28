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
import { TextGenerateEffect } from "@/components/ui/text-generate";
import Magnet from "@/components/ui/MagneticText";
import AnimatedContent from "@/components/ui/Spring";

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
      title: "Homepage",
      icon: (
        <IconHome className="text-[20px] text-neutral-500 dark:text-neutral-300" />
      ),
      linkTo: "#",
    },
    {
      title: "About Me",
      icon: (
        <IconUser className="text-[20px] text-neutral-500 dark:text-neutral-300" />
      ),
      linkTo: "#",
    },
    {
      title: "My Projects",
      icon: (
        <IconFolder className="text-[20px] text-neutral-500 dark:text-neutral-300" />
      ),
      linkTo: "#",
    },
    {
      title: "Contact Me",
      icon: (
        <IconPhone className="text-[20px] text-neutral-500 dark:text-neutral-300" />
      ),
      linkTo: "#",
    },
  ];
  const desktopNavLinks = [
    {
      title: "About Me",
      linkTo: "#",
    },
    {
      title: "My Projects",
      linkTo: "#",
    },
    {
      title: "Contact Me",
      linkTo: "#",
    },
  ];
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
      {/* <TextGenerateEffect words={"what's good my boi"} /> */}
      {/* <AuroraBackgroundComponent /> */}

      <div className="content max-w-[800px] max-lg:max-w-[600px] max-md:max-w-[400px] mx-auto pt-40 text-[70px] max-md:text-[48px] dot leading-[60px]">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          config={{ tension: 90, friction: 10 }}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          delayTime={800}
          threshold={0.2}
        >
          <div className="top">
            Hey There! 👋
            <br />
            <span className="content max-md:hidden">
              I&apos;m&nbsp;
              <Magnet padding={200} disabled={false} magnetStrength={10}>
                {/* <p>Star React Bits on GitHub!</p> */}
                <span className="dotbold">Sofela Israel</span>
              </Magnet>
            </span>
            <span className="content md:hidden">
              I&apos;m&nbsp;
              {/* <p>Star React Bits on GitHub!</p> */}
              <span className="dotbold">Sofela Israel</span>
            </span>
            {/* <div>Content to Animate</div> */}
          </div>
        </AnimatedContent>
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          config={{ tension: 90, friction: 10 }}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          delayTime={1000}
          threshold={0.2}
        >
          <div className="body text-[20px] leading-7 syne py-10 text-[#555] w-[80%] max-lg:w-full max-md:text-[16px] max-md:py-5 max-md:leading-5">
            I craft groundbreaking, goal-driven, and visually gripping websites,
            guaranteeing great user experiences and growth-focused designs.
            &nbsp; Transforming concepts into seamless user experiences, I
            prioritize client collaboration, fostering open communications
          </div>
        </AnimatedContent>
        <div className="btn cursor-pointer">
          <div className="bg-white w-fit text-[20px] quicksand text-black rounded-lg px-3 py-3 leading-5 max-md:text-[16px]">
            Download CV
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0.0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex-col gap-4 px-4 flex items-center justify-center absolute bottom-10 w-full max-md:hidden"
      >
        <FloatingDock items={links} />
      </motion.div>
    </div>
  );
}
