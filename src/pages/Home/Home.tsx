import { useState, useEffect } from "react";
import Accolades from "../../components/Accolades/Accolades";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

const Home = () => {
  const [clickCount, setClickCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const handleClick = () => {
      setClickCount((prevCount) => prevCount + 1);
    };

    if (clickCount >= 5) {
      setModalVisible(true); // Show the modal after 5 clicks
      setClickCount(0); // Reset click count
    }

    window.addEventListener("click", handleClick);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [clickCount]);

  const handleCancel = () => {
    setModalVisible(false);
    setClickCount(0); // Reset click count
  };

  const handleConfirm = () => {
    if (password === "test") {
      window.location.href = "/mine"; // Redirect to /mine
    } else {
      setModalVisible(false); // Close modal if the password is incorrect
      setClickCount(0); // Reset click count
    }
  };

  return (
    <main className="overflow-x-hidden">
      <NavBar />
      <Hero />
      <Contact />
      <Skills />
      <Projects />
      <Accolades />
      <Footer />

      {modalVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded shadow-md w-80">
            <h2 className="text-md text-center font-semibold">
              Are you supposed to be here?🙄
              <br />
              Enter the password to continue.
            </h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-4 p-2 w-full border rounded"
              placeholder="Enter Password"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-400 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
