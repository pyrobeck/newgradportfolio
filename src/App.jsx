import { useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Marquee from "./components/Marquee";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import ClientWork from "./pages/clientwork";
import ThreeDWork from "./pages/3dwork";
import Games from "./pages/games";
import Contact from "./pages/contact";

/** Adds .is-in to .reveal elements as they scroll into view. */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    const scan = () => document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => io.observe(el));
    scan();
    // pick up elements added later (e.g. after filtering)
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}

export default function App() {
  useReveal();
  return (
    <>
      <a href="#gallery" className="sr-only">Skip to work</a>
      <Navbar />
      <main>
        <Home />
        <Marquee />
        <Portfolio />
        <ClientWork />
        <ThreeDWork />
        <Games />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
