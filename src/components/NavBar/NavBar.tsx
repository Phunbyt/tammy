import { logo } from "../../assets/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "motion/react";

const NavMenu = [
  {
    id: 1,
    title: "Service",
    link: "service",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Works",
    link: "works",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Blog",
    link: "blog",
    delay: 0.6,
  },
];

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.4,
    },
  },
});

const NavBar = () => {
  return (
    <>
      <div className="py-0 bg-gray text-white">
        <div className="container flex items-center justify-between">
          {/* logo section */}
          <div>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              src={logo}
              alt=""
              className="w-[80px]"
            />
          </div>
          {/* menu section */}
          <div>
            {/* <ul className="hidden md:flex gap-10 justify-center ">
              {NavMenu.map((item) => (
                <motion.li
                  variants={container(item.delay)}
                  initial="hidden"
                  whileInView="show"
                  key={item.id}
                >
                  <a
                    href={item.link}
                    className="hover:text-primary text-xl font-semibold text-white/70 duration-300"
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </ul> */}

            {/* mobile hamburger */}

            {/* <div className="md:hidden">
              <GiHamburgerMenu className="text-3xl" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
