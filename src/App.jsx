import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components";
import AnimatedRoutes from "./components/Routes/AnimatedRoutes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  </div>
  );
}

export default App;
