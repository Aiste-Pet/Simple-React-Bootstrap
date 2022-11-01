import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Games from "./pages/Games/Games";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFOund";

function App() {
  const navigationLinks = [
    { to: "/", label: "Home" },
    { to: "/games", label: "Games" },
  ];
  const username = "";
  return (
    <div>
      <Header username={username} items={navigationLinks} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
