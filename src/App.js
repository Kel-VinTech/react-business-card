import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import HeroContent from "./components/HeroContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="Container">
      <Navbar />
      <HeroContent />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
