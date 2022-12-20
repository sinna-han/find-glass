import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavWrap from "./components/Navbar";

function App() {
  return (
    <>
      <NavWrap />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
