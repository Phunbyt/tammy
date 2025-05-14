import Anim from "./pages/Anim/Anim.tsx";
import Game from "./pages/Anim/Game.tsx";
import Note from "./pages/Anim/Note.tsx";
import PlayList from "./pages/Anim/PlayList.tsx";
import Home from "./pages/Home/Home.tsx";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

// Layout component for routes that need NavBar
const MineLayout = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Outlet /> {/* This is where child routes will render */}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mine" element={<MineLayout />}>
          <Route index element={<Anim />} />
          <Route path="game" element={<Game />} />
          <Route path="note" element={<Note />} />
          <Route path="playlist" element={<PlayList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
