import Aos from "aos";
import "aos/dist/aos.css";

function startAos() {
  Aos.init({
    mirror: true,
    easing: "ease-in-out"
  });
}
const AosRefresh = () => Aos.refreshHard();

export default startAos;
