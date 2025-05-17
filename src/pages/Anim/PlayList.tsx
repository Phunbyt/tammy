import { Link } from "react-router";

import { projects } from "../../constants";
import { arrow } from "../../assets/icons";
import CTA from "../../3dComponents/CTA";

const PlayList = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Dear{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Tammy,
        </span>
      </h1>

      <div>
        <p className="text-slate-500 mt-2 leading-relaxed">
          Words couldn’t do justice to how grateful I am to have met you, and
          how blessed I am to have been more than just friends with you. We'd
          have to fill the entire planet with libraries of books to fully
          express it. You are the definition of loyalty. You are what comes to
          mind when I think of dedication and consistency. Your faith is
          unwavering, and you are truly a blessing to everyone around you.
        </p>

        <p className="text-slate-500 mt-2 leading-relaxed">
          Can we take a moment to adore your beauty? Beyond the adorable face
          you’ve been blessed with, and that soul-lifting, room-lighting smile
          of yours, you have a beautiful soul. You are kind, thoughtful, and you
          deserve to be celebrated every day.
        </p>

        <p className="text-slate-500 mt-2 leading-relaxed">
          Happy birthday, God’s glitterati.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default PlayList;
