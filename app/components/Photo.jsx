"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 2,
            ease: "easeInOut",
          },
        }}
      >
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="w-[289px] lg:w-[489px] h-[289px] lg:h-[489px] mix-blend-lighten"
        >
          <Image
            src={"/assets/ppp.png"}
            priority
            quality={100}
            fill
            alt="pp"
            className="object-contain"
          />
        </motion.div>

        {/* CIRCLE svg Animation*/}
        <motion.svg
          className="size-[300px] lg:size-[506px] absolute inset-0 "
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#0f9"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0 " }}
            animate={{
              strokeDasharray: ["15 120 25 25 ", "16 25 92 72", "4 250 22 22 "],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.circle>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
