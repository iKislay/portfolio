import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes.jsx";

const App = () => {
  return (
    <div className="App">
    <Router>
      {/* <Navbar /> */}
      <AnimatedRoutes />
      {/* <Footer /> */}
    </Router>
  </div>
  );
}

export default App;
