import { useEffect, useState } from "react";

function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const word = "monker_editz";

  useEffect(() => {
    let timeout;

    if (!isDeleting && text === word) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? word.substring(0, text.length - 1)
            : word.substring(0, text.length + 1)
        );
      }, isDeleting ? 70 : 120);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  const scrollToSection = (section) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <div className="hero-organics">
        <span className="organic organic-1"></span>
        <span className="organic organic-2"></span>
        <span className="organic organic-3"></span>
        <span className="organic organic-4"></span>
      </div>

      <div className="hero-nav">
        <button
          className="hero-brand"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          {text}
          <span className="cursor">_</span>
        </button>

        <nav className="hero-links">
          <button onClick={() => scrollToSection("work")}>WORK</button>
          <button onClick={() => scrollToSection("about")}>ABOUT</button>
          <button onClick={() => scrollToSection("contact")}>CONTACT</button>
        </nav>
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">VIDEO EDITOR</p>

        <h1>
          AYUSHMAAN
          <br />
          <span>YADAV</span>
        </h1>

        <p className="hero-description">
          Talking Head <span>•</span> Motion Graphics <span>•</span> Clean Edits
        </p>

        <button className="hero-button" onClick={() => scrollToSection("work")}>
          VIEW MY WORK <span>↘</span>
        </button>
      </div>

      <div className="hero-scroll">SCROLL TO EXPLORE ↓</div>
    </section>
  );
}

export default Hero;