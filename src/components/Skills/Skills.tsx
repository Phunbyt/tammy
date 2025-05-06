import { MdCorporateFare } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";
import { TbArrowMergeAltLeft } from "react-icons/tb";
import { companies } from "../../assets/images";

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

const skills = [
  {
    id: 1,
    icon: MdCorporateFare,
    title: "Corporate Law",
    delay: 0.2,
  },
  {
    id: 2,
    icon: FaCodeCompare,
    title: "Private Equity",
    delay: 0.4,
  },
  {
    id: 3,
    icon: TbArrowMergeAltLeft,
    title: "Mergers and Acquisition",
    delay: 0.6,
  },
];

const Skills = () => {
  return (
    <div className="bg-gray">
      <div className="container py-10  text-white space-y-14">
        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center transform -translate-y-28">
          {skills.map((item) => (
            <motion.div
              variants={fadeUp(item.delay)}
              initial="hidden"
              whileInView="show"
              key={item.id}
              className="flex items-center gap-6 bg-[#424657] px-7 py-12 max-w-[300px] hover:shadow-lg hover:bg-primary/80 hover:scale-105 duration-300 shadow-lg"
            >
              <item.icon className="text-4xl" />
              <div className="space-y-3">
                <p className="text-3xl">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* company logo section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <img src={companies} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
