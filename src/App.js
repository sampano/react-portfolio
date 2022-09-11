import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Navigation from "./components/nav/Navigation";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
