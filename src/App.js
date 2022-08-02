import NotFound from "./pages/NotFound";
import Steptow from "./pages/Steptow";
import Home from "./pages/Home";
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// the hoc
// import { useTranslation } from 'react-i18next';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/steptow" element={<Steptow />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
