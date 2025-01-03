import "./App.css";
import { TimelineDemo } from "./components/Timeline";
import { AuroraBackgroundDemo } from "./components/home";
import AboutMe from "./components/About";
import { Footer } from "./components/footer";
import Navbar from "./components/Navbar";
import WorkExperience from "./components/experience";

function App() {
  return (
    <main>
      <Navbar/>
      <AuroraBackgroundDemo/>
      <AboutMe/>
      <WorkExperience/>
      <TimelineDemo/>
      <Footer/>
    </main>
  );
}

export default App;
