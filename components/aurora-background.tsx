import { motion } from "framer-motion";
import AuroraBackground from "./ui/aurora-background";

export function AuroraBackgroundComponent() {

  return (
    <AuroraBackground>
      <div className="relative flex flex-col gap-4 items-center justify-center px- syne">
        <motion.div
          initial={{ opacity: 0.0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-3xl md:text-6xl font-bold dark:text-white text-center syne flex flex-col gap-4"
        >
          Hey There! <br />
          <span>
            I'm 
            <span className="text-black rounded-xl bg-[#F9CD35] opensans leading-10 px-4">
              Sofela Israel
            </span>
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, }}
          whileInView={{ opacity: 1,}}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 w-2/3 max-md:text-2xl max-md:leading-[26px] text-center"
        >
          Welcome to my personal portfolio, where
          <span className="underline ">coding</span> meets
          
          <span className="text-[#F9CD35] ">creativity</span>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
