import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect, useRef } from "react";
import Loader from "../../3dComponents/Loader";
import Island from "../../Models/Islands";
import { Sky } from "../../Models/Sky";
import { Bird } from "../../Models/Bird";
import { Plane } from "../../Models/Plane";
import HomeInfo from "../../3dComponents/HomeInfo";

import prettyGirl from "../../assets/Girl_in_a_Coffee_Shop.mp3";
import { soundoff, soundon } from "../../assets/images";

const Anim = () => {
  const audioRef = useRef(new Audio(prettyGirl));
  audioRef.current.volume = 0.3;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    const rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
        onClick={() => setIsPlayingMusic(true)}
      >
        <Suspense fallback={<Loader />}></Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
        <hemisphereLight color="#b1e1ff" groundColor="#000000" intensity={1} />
        <Bird />
        <Sky isRotating={isRotating} />

        <Island
          isRotating={isRotating}
          scale={islandScale}
          setIsRotating={setIsRotating}
          position={islandPosition}
          rotation={islandRotation}
          setCurrentStage={setCurrentStage}

          // rotation={[0.1, 4.7077, 0]}
        />
        <Plane
          isRotating={isRotating}
          position={biplanePosition}
          rotation={[0, 20.1, 0]}
          scale={biplaneScale}
        />
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Anim;
