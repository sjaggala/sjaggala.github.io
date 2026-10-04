import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { ContactModalProvider } from "./ContactModal";

export default function Layout() {
  return (
    <ContactModalProvider>
      <a className="sr-only" href="#main">
        Skip to content
      </a>
      <NavBar />
      <main id="main">
        <Outlet />
      </main>
    </ContactModalProvider>
  );
}
