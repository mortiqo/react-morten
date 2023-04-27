import Navbar from "./Navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Projects from "./pages/projects";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/projects":
      component = <Projects />;
      break;
    case "/contact":
      component = <Contact />;
      break;
  }
  return (
    <>
      <Navbar />
      <component />
    </>
  );
}

export default App;
