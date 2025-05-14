import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <header className="header">
      <NavLink
        to={"/"}
        className={
          "w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
        }
      >
        <p
          className={
            "bg-gradient-to-r from-pink-700 to-pink-300 bg-clip-text text-transparent"
          }
        >
          TL
        </p>
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="game"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Game
        </NavLink>
        <NavLink
          to="note"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Note
        </NavLink>
        <NavLink
          to="playlist"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Playlist
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
