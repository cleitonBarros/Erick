import Aos from "aos";
import "aos/dist/aos.css";

function startAos() {
  Aos.init({
    mirror: true,
    easing: "ease-in-out"
  });
}

export default startAos;
