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

const accolades = [
  {
    id: 1,
    title: `Director General’s Prize for attaining First Class in Bar Final
                Examinations`,
    delay: 0.2,
    date: `Mar 2024`,
  },
  {
    id: 2,
    title: "Third Best Student in Professional Ethics and Skills",
    delay: 0.4,
    date: `Mar 2024`,
  },
  {
    id: 3,
    title: `Late Prof Zac Olomojobi’s Award for Overall Best Student in Criminal law`,
    delay: 0.6,
    date: "Jun 2021",
  },
];

const Accolades = () => {
  return (
    <div className="bg-darkGray text-white py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          <section className="space-y-6 lg:max-w[380px]">
            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="show"
              className="text-sm opacity-50 tracking-widest font-serif translate-y-3"
            >
              - My Achievements
            </motion.p>
            <motion.h1
              variants={fadeUp(0.4)}
              initial="hidden"
              whileInView="show"
              className="text-2xl lg:text-3xl"
            >
              Testaments to my excellence{" "}
            </motion.h1>
            <motion.p
              variants={fadeUp(0.6)}
              initial="hidden"
              whileInView="show"
              className="text-sm leading-6 opacity-70"
            >
              Showcasing my commitment to excellence and dedication to the legal
              profession.
            </motion.p>
          </section>
          <section className="col-span-2 lg:px-20">
            {/* accolades card section */}
            <div className="space-y-8">
              {accolades.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp(item.delay)}
                  initial="hidden"
                  whileInView="show"
                  className="flex justify-between items-center border-b-2 border-gray pb-4"
                >
                  <p className="text-sm opacity-75">{item.date}</p>
                  <p className="text-lg max-w-[280px] font-bold">
                    {item.title}
                  </p>
                  <a
                    href="https://www.linkedin.com/in/tamilorelabisi/details/honors/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaArrowRight className="text-xl text-primary" />
                  </a>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Accolades;
