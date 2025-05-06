import { FaArrowRight } from "react-icons/fa";
import { write, speak, create } from "../../assets/images";

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


const projects = [
  {
    id: 1,
    img: write,
    title: "i Write",
    delay: 0.2,
  },
  {
    id: 2,
    img: speak,
    title: "i Speak",
    delay: 0.4,
  },
  {
    id: 3,
    img: create,
    title: "i Create",
    delay: 0.8,
  },
];

const Projects = () => {
  return (
    <div className="bg-gray text-white py-36">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-6">
          <section className="space-y-6 lg:max-w[380px]">
            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="show"
              className="text-sm opacity-50 tracking-widest font-serif translate-y-3"
            >
              - There's More
            </motion.p>
            <motion.h1
              variants={fadeUp(0.4)}
              initial="hidden"
              whileInView="show"
              className="text-2xl lg:text-3xl"
            >
              I raise the bar{" "}
            </motion.h1>
            <motion.p
              variants={fadeUp(0.6)}
              initial="hidden"
              whileInView="show"
              className="text-sm leading-6 opacity-70"
            >
              In my leisure time, I engage in creative pursuits such as
              painting, swimming, and solving puzzles.
            </motion.p>
            <motion.button
              variants={fadeUp(0.8)}
              initial="hidden"
              whileInView="show"
              className="text-primary  border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-4 group"
            >
              <a
                href="https://www.instagram.com/tamilore.labisi/reels/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Explore more
              </a>
              <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
            </motion.button>
          </section>
          {projects.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp(item.delay)}
              initial="hidden"
              whileInView="show"
              className="space-y-4 px-4 md-8 items-center justify-center"
            >
              <img
                src={item.img}
                alt=""
                className="w-full   hover:scale-250 hover:shadow-lg duration-300"
              />
              <p className="text-2xl font-semibold">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
