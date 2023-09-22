import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
export default function BackToTop() {
  const [backtoTop, setBacktoTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBacktoTop(true);
      } else {
        setBacktoTop(false);
      }
    });
  }, []);

  const ScrollUp = () => {
    window?.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {backtoTop === true && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "30px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "none",
            background: "orange",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            //     fontSize: "50px",
          }}
          onClick={ScrollUp}
        >
          <AiOutlineArrowUp size={17} />
        </button>
      )}
    </>
  );
}
