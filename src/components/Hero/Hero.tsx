import { FaArrowRight } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { motion } from "motion/react";
import { tammy } from "../../assets/images";

const container = (delay: number) => ({
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.4,
    },
  },
});

const Hero = () => {
  return (
    <>
      <main className="bg-gray text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 min-h-[600px] lg:overflow-hidden place-items-center py-2 md:py-0">
            {/* image section */}
            <div className="grid col-span-2 relative h-full justify-center items-center">
              <div className="w-[280px] sm:w-[400px] md:w-[450px]">
                <motion.h1
                  variants={container(0.2)}
                  initial="hidden"
                  whileInView="show"
                  className="text-4xl md:text-6xl font-bold relative z-20 "
                >
                  Tamilore <br /> Labisi. <sub className="text-xs">ESQ</sub>
                </motion.h1>
                <motion.div
                  variants={container(0.5)}
                  initial="hidden"
                  whileInView="show"
                  className="h-[4px] w-[30px] bg-primary mt-4"
                ></motion.div>
              </div>

              {/* social contacts */}
              <div className="flex gap-4 mt-24">
                <motion.a
                  variants={container(0.8)}
                  initial="hidden"
                  whileInView="show"
                  href="https://www.linkedin.com/in/tamilorelabisi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-2xl hover:scale-110 cursor-pointer duration-200 " />
                </motion.a>
                <motion.a
                  variants={container(1.0)}
                  initial="hidden"
                  whileInView="show"
                  href="https://www.instagram.com/tamilore.labisi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl hover:scale-110 cursor-pointer duration-200 " />
                </motion.a>

                <motion.a
                  variants={container(1.2)}
                  initial="hidden"
                  whileInView="show"
                  href="https://www.tiktok.com/@tamilore.labisi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok className="text-2xl hover:scale-110 cursor-pointer duration-200 " />
                </motion.a>
              </div>

              <div className="absolute right-0 md:-right-[5%] lg:-right-[20%] xl:-right-[25%] 2xl:-right-[30%] bottom-0">
                <motion.img
                  initial={{ x: -100 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 1 }}
                  src={tammy}
                  alt="Tammy"
                  className="img-shadow scale-110 relative z-10 w-[20vw] min-w-[150px] max-w-[400px] md:w-[30vw] md:min-w-[250px] lg:max-w-[500px] flex-shrink-0"
                />
              </div>
            </div>

            {/* text section */}
            <div className="space-y-6">
              <motion.p
                variants={container(0.4)}
                initial="hidden"
                whileInView="show"
                className="text-sm opacity-50 tracking-widest font-serif translate-y-3"
              >
                - Introduction
              </motion.p>
              <motion.h1
                variants={container(0.5)}
                initial="hidden"
                whileInView="show"
                className="text-2xl lg:text-3xl"
              >
                Lawyer | Global Visionary Leader
              </motion.h1>
              <motion.p
                variants={container(0.6)}
                initial="hidden"
                whileInView="show"
                className="text-sm leading-6 opacity-70"
              >
                Distinguished by an enviable track record of excellence, I hold
                a Law Degree (LL.B) from Babcock University – one of Nigeria's
                premier academic institutions. My legal education culminated in
                First Class Honors from the Nigerian Law School, where I ranked
                3rd nationwide in Professional Ethics & Skills among 5,300
                candidates, earning the prestigious Damian Dodo O.F.R SAN Prize
                for academic distinction.
              </motion.p>
              <motion.button
                variants={container(0.7)}
                initial="hidden"
                whileInView="show"
                className="text-primary  border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-4 group"
              >
                <a
                  href="https://www.linkedin.com/in/tamilorelabisi/"
                  target="_blank"
                >
                  My profile
                </a>
                <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
              </motion.button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
