import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <>
      <a className="sr-only" href="#main">
        Skip to content
      </a>
      <NavBar />
      <main id="main">
        <Outlet />
      </main>
    </>
  );
}
