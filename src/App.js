import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <div className="bg-[#20242d] text-center">
        <span className="text-teal-600 font-bold">Made with ❤️ by Vivek</span>
      </div>
      
    </div>
  );
}

export default App;
