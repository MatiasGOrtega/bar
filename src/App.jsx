import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktailds from "./components/Cocktailds";
import About from "./components/About";
import Art from "./components/Art";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktailds />
      <About />
      <Art />
    </main>
  )
}

export default App
