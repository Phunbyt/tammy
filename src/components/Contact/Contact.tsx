import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";

const fadeUp = (delay: number) => ({
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.4,
    },
  },
});

const Contact = () => {
  return (
    <main className="bg-darkGray text-white">
      <div className="container py-24 lg:py-36 pb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* left side section */}
          <section className="space-y-6 lg:max-w[380px]">
            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="show"
              className="text-sm opacity-50 tracking-widest font-serif translate-y-3"
            >
              - Contact
            </motion.p>
            <motion.h1
              variants={fadeUp(0.4)}
              initial="hidden"
              whileInView="show"
              className="text-2xl lg:text-3xl"
            >
              Any Type of Query or Discussion?
            </motion.h1>
            <motion.p
              variants={fadeUp(0.6)}
              initial="hidden"
              whileInView="show"
              className="text-sm leading-6 opacity-70"
            >
              With a foundation in rigorously cultivated expertise across
              mergers and acquisitions, statutory compliance, and ethical
              governance frameworks, I provide strategic counsel to clients
              navigating multifaceted legal and regulatory challenges.
            </motion.p>
            <motion.button
              variants={fadeUp(0.8)}
              initial="hidden"
              whileInView="show"
              className="text-primary  border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-4 group"
            >
              <a href="mailto:tamilorelabisi@gmail.com" target="blank">
                tamilorelabisi@gmail.com
              </a>
              <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
            </motion.button>
          </section>

          {/* right side section */}
          <div className="space-y-7">
            <motion.p
              variants={fadeUp(0.4)}
              initial="hidden"
              whileInView="show"
              className="text-3xl"
            >
              A Barrister & Solicitor of the Supreme Court of Nigeria, ACIArb
              UK, GradICSAN.
            </motion.p>

            <motion.p
              variants={fadeUp(0.6)}
              initial="hidden"
              whileInView="show"
              className="text-sm leading-6 opacity-60"
            >
              I am a Member of the institute of Chatered Secretaries and
              Admnistrators of Nigeria (ICSAN), My legal interests spans accross
              mergers and acquisitions, corporate law, and Intellectual
              Property(IP). <br /> PS: I'm a Tech enthusiat as well
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                variants={fadeUp(0.8)}
                initial="hidden"
                whileInView="show"
                className="flex gap-3 items-center"
              >
                <p className="text-3xl text-primary font-bold">2+</p>
                <p className="font-semibold max-w-[100px]">
                  Years of Experience
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp(1)}
                initial="hidden"
                whileInView="show"
                className="flex gap-3 items-center"
              >
                <p className="text-3xl text-primary font-bold">20+</p>
                <p className="font-semibold max-w-[100px]">
                  Completed projects
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
