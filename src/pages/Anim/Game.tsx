/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Fox } from "../../Models/Fox";
import Loader from "../../3dComponents/Loader";
import { questions } from "../../constants";

import CTA from "../../3dComponents/CTA";

const Game = () => {
  const [currentAnimation, setCurrentAnimation] = useState("walk.left");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const options = currentQuestion.options;

  const handleOptionClick = (key: any, _value: any) => {
    if (selectedOption) return;

    setSelectedOption(key);
    setCurrentAnimation("walk");
    setShowNext(true);

    if (key === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedOption(null);
      setShowNext(false);
      setCurrentAnimation("idle");
    } else {
      setShowResult(true);
      setCurrentAnimation("hit");
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowNext(false);
    setScore(0);
    setShowResult(false);
    setCurrentAnimation("idle");
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {/* 3D Fox Animation */}
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Quiz Section */}
      <div className="lg:w-1/2 w-full p-6 flex flex-col justify-center">
        {showResult ? (
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-green-600">Game Over 🎉</h2>
            <p className="text-xl">
              You scored {score} out of {questions.length}
            </p>
            <button
              onClick={handleRestart}
              className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl"
            >
              Play Again
            </button>
          </div>
        ) : (
          <>
            <h1 className="head-text">
              <span className="blue-gradient_text drop-shadow font-semibold">
                Hey Tammy,
              </span>
            </h1>
            <div className="mb-6 text-lg font-semibold">
              {currentQuestion.isVideo ? (
                <>
                  <video controls width="100%">
                    <source src={currentQuestion.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p>{currentQuestion.question}</p>
                </>
              ) : currentQuestion.isImage ? (
                <>
                  <img src={currentQuestion.imageUrl} alt="Question" />
                  <p>{currentQuestion.question}</p>
                </>
              ) : (
                <p>{currentQuestion.question}</p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4">
              {Object.entries(options).map(([key, value]) => {
                let bgClass = "bg-gray-200";

                if (selectedOption) {
                  const isSelected = key === selectedOption;
                  const isCorrect = key === currentQuestion.answer;

                  if (isSelected && isCorrect) {
                    bgClass = "bg-green-500"; // Correct selected
                  } else if (isSelected && !isCorrect) {
                    bgClass = "bg-red-500"; // Wrong selected
                  } else if (!isSelected && isCorrect) {
                    bgClass = "bg-green-500"; // Show correct if wrong selected
                  }
                }

                return (
                  <button
                    key={key}
                    onClick={() => handleOptionClick(key, value)}
                    disabled={!!selectedOption}
                    className={`p-4 rounded-xl text-left ${bgClass} text-white font-medium transition duration-300`}
                  >
                    {key}: {value}
                  </button>
                );
              })}
            </div>

            {showNext && (
              <button
                onClick={handleNext}
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl self-end"
              >
                Next
              </button>
            )}
          </>
        )}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Game;
