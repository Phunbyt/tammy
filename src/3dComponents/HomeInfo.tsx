/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router";
import { arrow } from "../assets/icons";
import { useState, useEffect } from "react";

interface HomeInfoProps {
  currentStage: number;
}

const HomeInfo = ({ currentStage }: HomeInfoProps) => {
  const [isMobile, setIsMobile] = useState(false);

  const InfoBox = ({
    text,
    link,
    btnText,
  }: {
    text: string;
    link: string;
    btnText: string;
  }) => (
    <div className="info-box neo-brutalism-blue">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );

  const renderContent: Record<number, any> = {
    1: (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Achalugo 🥰,
        <br />I will give you the world 🌏, but for now here's a little island
        <br />
        <span className="font-semibold text-white">
          {isMobile ? "Swipe and drag" : "Click and drag"}
        </span>{" "}
        to explore
      </h1>
    ),
    2: (
      <InfoBox
        text={
          "Let's go down memory lane, before this island was built, shall we?"
        }
        link={"/mine/game"}
        btnText={"Play Game"}
      />
    ),
    3: (
      <InfoBox
        text={"Shades of you I've come to love"}
        link={"/mine/note"}
        btnText={"Read Notes"}
      />
    ),
    4: (
      <InfoBox
        text={"More from your oversabi boyfr🤐🤐🤐🤐🤐"}
        link={"/mine/playlist"}
        btnText={"Hey, stranger"}
      />
    ),
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Call once on mount
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return renderContent[currentStage] || null;
};

export default HomeInfo;
